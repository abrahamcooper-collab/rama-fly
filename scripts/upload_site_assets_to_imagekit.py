import os
import sys
import json
import time
import re
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed

PRIVATE_KEY = "private_K+GCcJJOl0o1dRmpgN7XRCLUm1Q="
UPLOAD_URL = "https://upload.imagekit.io/api/v1/files/upload"

cache_path = "app/data/imagekit_site_assets_cache.json"

site_files = []
public_dir = "public"

for root, dirs, files in os.walk(public_dir):
    rel_dir = os.path.relpath(root, public_dir)
    for f in files:
        if f.endswith('.svg') or f.startswith('.'):
            continue
        rel_path = os.path.join(rel_dir, f) if rel_dir != '.' else f
        full_path = os.path.join(root, f)
        url_path = f"/{rel_path}"
        site_files.append((full_path, url_path, rel_path, f))

cache = {}
if os.path.exists(cache_path):
    try:
        with open(cache_path, "r") as cf:
            cache = json.load(cf)
    except Exception:
        cache = {}

def upload_to_imagekit(item):
    full_path, url_path, rel_path, file_name = item
    if url_path in cache and cache[url_path].startswith("https://ik.imagekit.io"):
        return url_path, cache[url_path]

    sub_dir = os.path.dirname(rel_path)
    if sub_dir and sub_dir != ".":
        folder = f"/upscalers/rama-fly-site-assets/{sub_dir}"
    else:
        folder = "/upscalers/rama-fly-site-assets"

    for attempt in range(4):
        try:
            with open(full_path, "rb") as fp:
                files = {"file": (file_name, fp)}
                data = {
                    "fileName": file_name,
                    "folder": folder,
                    "useUniqueFileName": "false",
                    "overwriteFile": "true"
                }
                res = requests.post(UPLOAD_URL, auth=(PRIVATE_KEY, ""), files=files, data=data, timeout=30)
                if res.status_code in [200, 201]:
                    res_json = res.json()
                    ik_url = res_json.get("url")
                    if ik_url:
                        return url_path, ik_url
                print(f"Attempt {attempt+1} failed for {full_path}: {res.status_code} - {res.text}", flush=True)
        except Exception as e:
            print(f"Attempt {attempt+1} error for {full_path}: {e}", flush=True)
        time.sleep(1)

    return url_path, None

print(f"Found {len(site_files)} site asset files in /public.", flush=True)

upload_tasks = [f for f in site_files if f[1] not in cache or not cache[f[1]].startswith("https://ik.imagekit.io")]
print(f"Tasks to upload: {len(upload_tasks)}", flush=True)

if upload_tasks:
    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = [executor.submit(upload_to_imagekit, t) for t in upload_tasks]
        for f in as_completed(futures):
            u_path, ik_url = f.result()
            if ik_url:
                cache[u_path] = ik_url

with open(cache_path, "w") as cf:
    json.dump(cache, cf, indent=2)

print("Finished uploading site assets to ImageKit!", flush=True)
