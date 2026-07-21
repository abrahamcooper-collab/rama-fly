import os
import sys
import json
import re
import time
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

local_dst_dir = "public/projects"
json_path = "app/data/portfolioProjects.json"
cache_path = "app/data/cloudinary_cache.json"

if not os.path.exists(json_path):
    print("Error: portfolioProjects.json not found!", flush=True)
    sys.exit(1)

cache = {}
if os.path.exists(cache_path):
    try:
        with open(cache_path, "r") as cf:
            cache = json.load(cf)
    except Exception:
        cache = {}

with open(json_path, "r") as f:
    projects_list = json.load(f)

# Collect only photos referenced in portfolioProjects.json
referenced_photos = set()
for proj in projects_list:
    if proj.get("heroImage"):
        referenced_photos.add(proj["heroImage"])
    for phase in proj["phases"]:
        for photo_url in phase["photos"]:
            referenced_photos.add(photo_url)

upload_tasks = []
for photo_url in sorted(referenced_photos):
    if photo_url in cache and (cache[photo_url].startswith("http://") or cache[photo_url].startswith("https://")):
        continue
    if photo_url.startswith("http://") or photo_url.startswith("https://"):
        cache[photo_url] = photo_url
        continue
    if photo_url.startswith("/projects/"):
        rel_path = photo_url.lstrip("/")
        local_file = os.path.join("public", rel_path)
        if os.path.exists(local_file):
            parts = rel_path.split("/")
            proj_id = parts[1] if len(parts) > 1 else "misc"
            phase_dir = parts[2] if len(parts) > 2 else "general"
            folder_in_cloudinary = f"rama-fly-projects/{proj_id}/{re.sub(r'[^a-zA-Z0-9_-]', '_', phase_dir)}"
            upload_tasks.append((local_file, folder_in_cloudinary, photo_url))

print(f"Total referenced photos: {len(referenced_photos)}. Cached: {len(cache)}. Remaining to upload: {len(upload_tasks)}", flush=True)

def upload_single_file(args):
    local_file, folder_name, original_url = args
    for attempt in range(4):
        try:
            res = cloudinary.uploader.upload(
                local_file,
                folder=folder_name,
                use_filename=True,
                unique_filename=True,
                overwrite=True,
                resource_type="image"
            )
            secure_url = res.get("secure_url")
            if secure_url:
                return original_url, secure_url
        except Exception as e:
            if attempt == 3:
                print(f"Failed to upload {local_file}: {e}", flush=True)
            else:
                time.sleep(1 + attempt)
    return original_url, None

if upload_tasks:
    uploaded_count = 0
    t0 = time.time()
    with ThreadPoolExecutor(max_workers=12) as executor:
        futures = [executor.submit(upload_single_file, t) for t in upload_tasks]
        for f in as_completed(futures):
            orig_url, sec_url = f.result()
            if sec_url:
                cache[orig_url] = sec_url
                uploaded_count += 1
                if uploaded_count % 25 == 0 or uploaded_count == len(upload_tasks):
                    elapsed = time.time() - t0
                    print(f"Uploaded {uploaded_count}/{len(upload_tasks)} photos ({elapsed:.1f}s)...", flush=True)
                    with open(cache_path, "w") as cf:
                        json.dump(cache, cf, indent=2)

    print(f"Finished uploading {uploaded_count} photos to Cloudinary!", flush=True)

# Save final cache
with open(cache_path, "w") as cf:
    json.dump(cache, cf, indent=2)

# Update projects_list with Cloudinary URLs
for proj in projects_list:
    if proj.get("heroImage") in cache:
        proj["heroImage"] = cache[proj["heroImage"]]
    for phase in proj["phases"]:
        new_photos = []
        for photo_url in phase["photos"]:
            if photo_url in cache:
                new_photos.append(cache[photo_url])
            else:
                new_photos.append(photo_url)
        phase["photos"] = new_photos

# Save updated portfolioProjects.json
with open(json_path, "w") as out_f:
    json.dump(projects_list, out_f, indent=2)

# Update portfolioData.ts
ts_code = f"""// Generated Portfolio Data with Cloudinary CDN URLs
export interface PhaseData {{
  name: string;
  count: number;
  photos: string[];
}}

export interface ProjectData {{
  id: string;
  folderName: string;
  rawAddress: string;
  displayAddress: string;
  heroImage: string;
  totalPhotos: number;
  phases: PhaseData[];
}}

import rawData from './portfolioProjects.json';

export const portfolioProjects: ProjectData[] = rawData as ProjectData[];
"""

with open("app/data/portfolioData.ts", "w") as ts_f:
    ts_f.write(ts_code)

print("Updated portfolioProjects.json and portfolioData.ts with Cloudinary CDN URLs.", flush=True)

# Remove public/projects directory completely
import shutil
if os.path.exists(local_dst_dir):
    shutil.rmtree(local_dst_dir, ignore_errors=True)
    print(f"Removed {local_dst_dir} directory completely.", flush=True)

print("Cloudinary migration complete!", flush=True)
