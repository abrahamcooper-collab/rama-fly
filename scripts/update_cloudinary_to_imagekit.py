import os
import json
import re

c_cache_file = "app/data/cloudinary_site_assets_cache.json"
ik_cache_file = "app/data/imagekit_site_assets_cache.json"

with open(c_cache_file) as f:
    c_cache = json.load(f)

with open(ik_cache_file) as f:
    ik_cache = json.load(f)

# Map old Cloudinary URLs -> new ImageKit URLs
url_map = {}
for path, c_url in c_cache.items():
    if path in ik_cache:
        url_map[c_url] = ik_cache[path]

print(f"Built URL mapping for {len(url_map)} assets.")

# Update next.config.ts
next_config_path = "next.config.ts"
if os.path.exists(next_config_path):
    with open(next_config_path, "r") as f:
        nc = f.read()
    if "ik.imagekit.io" not in nc:
        nc = nc.replace('"res.cloudinary.com"', '"ik.imagekit.io"')
        with open(next_config_path, "w") as f:
            f.write(nc)
        print("Updated next.config.ts remotePatterns to ik.imagekit.io")

# Scan codebase and replace URLs
extensions = ('.ts', '.tsx', '.json', '.js', '.jsx', '.py')
files_updated = 0

for root, dirs, files in os.walk("."):
    if "node_modules" in root or ".next" in root or ".git" in root or "brain" in root:
        continue
    for file in files:
        if file.endswith(extensions):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
            
            modified = False
            for c_url, ik_url in url_map.items():
                if c_url in content:
                    content = content.replace(c_url, ik_url)
                    modified = True
            
            if modified:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(content)
                files_updated += 1
                print(f"Updated {file_path}")

print(f"Finished updating {files_updated} files with ImageKit URLs.")
