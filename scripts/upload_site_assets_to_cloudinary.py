import os
import sys
import json
import time
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
import cloudinary
import cloudinary.uploader

CLOUDINARY_URL = "cloudinary://658832386652423:vUhrfwHfgJepbH6C4A1F8N0pLvQ@dcylaqbxa"
os.environ["CLOUDINARY_URL"] = CLOUDINARY_URL

cloudinary.config(
    cloud_name="dcylaqbxa",
    api_key="658832386652423",
    api_secret="vUhrfwHfgJepbH6C4A1F8N0pLvQ",
    secure=True
)

cache_path = "app/data/cloudinary_site_assets_cache.json"

site_files = []

# Scan /public/images, /public/beforeandafter, logo, etc.
public_dir = "public"
for root, dirs, files in os.walk(public_dir):
    rel_dir = os.path.relpath(root, public_dir)
    for f in files:
        if f.endswith('.svg') or f.startswith('.'):
            continue
        rel_path = os.path.join(rel_dir, f) if rel_dir != '.' else f
        full_path = os.path.join(root, f)
        url_path = f"/{rel_path}"
        site_files.append((full_path, url_path, rel_path))

cache = {}
if os.path.exists(cache_path):
    try:
        with open(cache_path, "r") as cf:
            cache = json.load(cf)
    except Exception:
        cache = {}

def upload_site_file(item):
    full_path, url_path, rel_path = item
    if url_path in cache and cache[url_path].startswith("https://"):
        return url_path, cache[url_path]

    folder_name = "rama-fly-site-assets"
    sub_dir = os.path.dirname(rel_path)
    if sub_dir:
        folder_name += f"/{re.sub(r'[^a-zA-Z0-9_-]', '_', sub_dir)}"

    for attempt in range(4):
        try:
            res = cloudinary.uploader.upload(
                full_path,
                folder=folder_name,
                use_filename=True,
                unique_filename=True,
                overwrite=True,
                resource_type="image"
            )
            secure_url = res.get("secure_url")
            if secure_url:
                return url_path, secure_url
        except Exception as e:
            if attempt == 3:
                print(f"Failed to upload {full_path}: {e}", flush=True)
            else:
                time.sleep(1)

    return url_path, None

print(f"Found {len(site_files)} site asset files in /public.", flush=True)

upload_tasks = [f for f in site_files if f[1] not in cache or not cache[f[1]].startswith("https://")]
print(f"Tasks to upload: {len(upload_tasks)}", flush=True)

if upload_tasks:
    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = [executor.submit(upload_site_file, t) for t in upload_tasks]
        for f in as_completed(futures):
            u_path, s_url = f.result()
            if s_url:
                cache[u_path] = s_url

with open(cache_path, "w") as cf:
    json.dump(cache, cf, indent=2)

print("Finished uploading site assets to Cloudinary!", flush=True)

# Replace in imageRegistry.ts
img_reg_path = "app/data/imageRegistry.ts"
if os.path.exists(img_reg_path):
    with open(img_reg_path, "r") as f:
        content = f.read()

    helper_old = 'src: `/images/projects/${category}/${filename}`,'
    helper_new = '''// Mapped to Cloudinary CDN URLs
    src: (function(cat, fn) {
      const path = `/images/projects/${cat}/${fn}`;
      const cacheMap: Record<string, string> = ''' + json.dumps(cache, indent=6) + ''';
      return cacheMap[path] || path;
    })(category, filename),'''

    if helper_old in content:
        content = content.replace(helper_old, helper_new)
    else:
        # Regex replacement of the helper function block if it's already updated
        pattern = r'src:\s*\(function\(cat,\s*fn\)\s*\{[\s\S]*?\}\)\(category,\s*filename\),'
        content = re.sub(pattern, helper_new, content)

    with open(img_reg_path, "w") as f:
        f.write(content)

# Replace across all ts/tsx files in app/, excluding imageRegistry.ts
for root, dirs, files in os.walk("app"):
    for f in files:
        if f.endswith(".ts") or f.endswith(".tsx"):
            fp = os.path.join(root, f)
            if os.path.basename(fp) == "imageRegistry.ts":
                continue
            with open(fp, "r") as file_in:
                fc = file_in.read()
            changed = False
            for url_path, c_url in cache.items():
                if url_path in fc:
                    fc = fc.replace(url_path, c_url)
                    changed = True
            if changed:
                with open(fp, "w") as file_out:
                    file_out.write(fc)

print("Updated site references with Cloudinary CDN URLs!", flush=True)
