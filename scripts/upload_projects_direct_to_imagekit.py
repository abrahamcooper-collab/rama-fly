import os
import sys
import shutil
import subprocess
import json
import re
import tempfile
import time
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed

PRIVATE_KEY = "private_K+GCcJJOl0o1dRmpgN7XRCLUm1Q="
UPLOAD_URL = "https://upload.imagekit.io/api/v1/files/upload"

src_dir = "projects-raw"
cache_path = "app/data/imagekit_direct_cache.json"

standard_phases = [
    'Before photos',
    'Demolition',
    'Framing',
    'Plumbing',
    'Electrical',
    'Insulation',
    'Sheetrock',
    'Plaster',
    'Painting',
    'Waterproofing',
    'Tile installation',
    'Wood flooring',
    'Kitchen installation',
    'Finish work',
    'Final completed photos'
]

def map_phase(dir_name):
    d = dir_name.lower()
    if 'before' in d or 'existing' in d or 'covering' in d or 'protection' in d or 'preparing' in d:
        return 'Before photos'
    if 'demo' in d or 'removal' in d:
        return 'Demolition'
    if 'framing' in d or 'subfloor' in d or 'sub-floor' in d:
        return 'Framing'
    if 'plumb' in d or 'gas' in d or 'vent' in d:
        return 'Plumbing'
    if 'electr' in d or 'light' in d or 'outlet' in d or 'switch' in d or 'panel' in d:
        return 'Electrical'
    if 'insul' in d or 'soundproof' in d or 'fire stop' in d or 'wool' in d or 'a:c' in d or 'radiator' in d:
        return 'Insulation'
    if 'sheetrock' in d or 'wanderboard' in d or 'drywall' in d:
        return 'Sheetrock'
    if 'plaster' in d or 'leveling' in d:
        return 'Plaster'
    if 'paint' in d:
        return 'Painting'
    if 'waterproof' in d:
        return 'Waterproofing'
    if 'tile' in d or 'backsplash' in d:
        return 'Tile installation'
    if 'wood floor' in d or 'baseboard' in d or 'reveal' in d:
        return 'Wood flooring'
    if 'kitchen' in d or 'cabinet' in d or 'appliance' in d or 'closet' in d or 'built in' in d:
        return 'Kitchen installation'
    if 'finish picture' in d or 'completed' in d:
        return 'Final completed photos'
    if 'finish' in d or 'door' in d or 'trim' in d or 'casing' in d or 'mold' in d or 'shower door' in d or 'window' in d:
        return 'Finish work'
    return 'Finish work'

def get_display_address(folder_name):
    name = re.sub(r'^Pictures\s*-\s*', '', folder_name, flags=re.I).strip()
    disp = re.sub(r'^\d+\s*', '', name).strip()
    return name, disp

def sample_list(lst, max_items=5):
    if len(lst) <= max_items:
        return lst
    step = len(lst) / max_items
    return [lst[int(i * step)] for i in range(max_items)]

cache = {}
if os.path.exists(cache_path):
    try:
        with open(cache_path, "r") as cf:
            cache = json.load(cf)
    except Exception:
        cache = {}

temp_dir = tempfile.mkdtemp(prefix="ik_upload_")

def process_and_upload(args):
    src_file, folder_name, cache_key = args
    if cache_key in cache and cache[cache_key].startswith("https://ik.imagekit.io"):
        return cache_key, cache[cache_key]

    ext = os.path.splitext(src_file)[1].lower()
    upload_path = src_file
    converted_file = None
    upload_filename = os.path.basename(src_file)

    if ext == ".heic":
        out_name = os.path.splitext(os.path.basename(src_file))[0] + ".jpg"
        out_name = re.sub(r'[^a-zA-Z0-9_.-]', '_', out_name)
        converted_file = os.path.join(temp_dir, f"{hash(src_file)}_{out_name}")
        try:
            subprocess.run(['heif-convert', '-q', '80', src_file, converted_file], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            upload_path = converted_file
            upload_filename = out_name
        except Exception:
            try:
                subprocess.run(['convert', src_file, '-quality', '80', converted_file], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                upload_path = converted_file
                upload_filename = out_name
            except Exception as e:
                print(f"Error converting HEIC {src_file}: {e}", flush=True)
                return cache_key, None

    clean_filename = re.sub(r'[^a-zA-Z0-9_.-]', '_', upload_filename)

    for attempt in range(4):
        try:
            with open(upload_path, "rb") as fp:
                files = {"file": (clean_filename, fp)}
                data = {
                    "fileName": clean_filename,
                    "folder": folder_name,
                    "useUniqueFileName": "false",
                    "overwriteFile": "true"
                }
                res = requests.post(UPLOAD_URL, auth=(PRIVATE_KEY, ""), files=files, data=data, timeout=30)
                if res.status_code in [200, 201]:
                    ik_url = res.json().get("url")
                    if ik_url:
                        if converted_file and os.path.exists(converted_file):
                            os.remove(converted_file)
                        return cache_key, ik_url
                print(f"Attempt {attempt+1} failed for {src_file}: {res.status_code} {res.text}", flush=True)
        except Exception as e:
            print(f"Attempt {attempt+1} exception for {src_file}: {e}", flush=True)
        time.sleep(1 + attempt)

    if converted_file and os.path.exists(converted_file):
        os.remove(converted_file)
    return cache_key, None

def main():
    projects_data = []
    all_tasks = []

    for folder in sorted(os.listdir(src_dir)):
        full_p = os.path.join(src_dir, folder)
        if not os.path.isdir(full_p):
            continue

        raw_addr, display_addr = get_display_address(folder)
        proj_id = re.sub(r'[^a-z0-9]+', '-', display_addr.lower()).strip('-')

        phase_raw_files = {p: [] for p in standard_phases}

        for root, dirs, files in os.walk(full_p):
            if '__MACOSX' in root or '.DS_Store' in root:
                continue
            rel_root = os.path.relpath(root, full_p)
            phase = map_phase(rel_root)

            for f in sorted(files):
                if f.startswith('.'):
                    continue
                src_file = os.path.join(root, f)
                ext = os.path.splitext(f)[1].lower()
                if ext in ['.jpg', '.jpeg', '.png', '.webp', '.heic']:
                    phase_raw_files[phase].append((src_file, rel_root, f))

        sampled_phases = []
        for phase_name in standard_phases:
            file_list = phase_raw_files[phase_name]
            if not file_list:
                continue
            sampled = sample_list(file_list, max_items=5)
            phase_tasks = []
            for src_file, rel_root, f in sampled:
                folder_name = f"/upscalers/rama-fly-projects/{proj_id}/{re.sub(r'[^a-zA-Z0-9_-]', '_', phase_name)}"
                cache_key = f"{proj_id}:{phase_name}:{f}"
                all_tasks.append((src_file, folder_name, cache_key))
                phase_tasks.append(cache_key)

            sampled_phases.append({
                'name': phase_name,
                'count': len(phase_tasks),
                'task_keys': phase_tasks
            })

        projects_data.append({
            'id': proj_id,
            'folderName': folder,
            'rawAddress': raw_addr,
            'displayAddress': display_addr,
            'phases': sampled_phases
        })

    print(f"Total projects: {len(projects_data)}. Total sampled photo tasks: {len(all_tasks)}. Cached: {len(cache)}", flush=True)

    tasks_to_run = [t for t in all_tasks if t[2] not in cache or not cache[t[2]].startswith("https://ik.imagekit.io")]
    print(f"Tasks needing ImageKit upload: {len(tasks_to_run)}", flush=True)

    if tasks_to_run:
        completed_cnt = 0
        t0 = time.time()
        with ThreadPoolExecutor(max_workers=10) as executor:
            futures = [executor.submit(process_and_upload, t) for t in tasks_to_run]
            for f in as_completed(futures):
                ckey, ik_url = f.result()
                if ik_url:
                    cache[ckey] = ik_url
                    completed_cnt += 1
                    if completed_cnt % 20 == 0 or completed_cnt == len(tasks_to_run):
                        elapsed = time.time() - t0
                        print(f"Uploaded {completed_cnt}/{len(tasks_to_run)} ({elapsed:.1f}s)...", flush=True)
                        with open(cache_path, "w") as cf:
                            json.dump(cache, cf, indent=2)

    with open(cache_path, "w") as cf:
        json.dump(cache, cf, indent=2)

    final_projects = []
    for p in projects_data:
        ordered_phases = []
        all_photos = []
        for ph in p['phases']:
            urls = [cache[k] for k in ph['task_keys'] if k in cache and cache[k].startswith("https://ik.imagekit.io")]
            if urls:
                ordered_phases.append({
                    'name': ph['name'],
                    'count': len(urls),
                    'photos': urls
                })
                all_photos.extend(urls)

        hero = ''
        for ph in reversed(ordered_phases):
            if ph['photos']:
                hero = ph['photos'][0]
                break

        final_projects.append({
            'id': p['id'],
            'folderName': p['folderName'],
            'rawAddress': p['rawAddress'],
            'displayAddress': p['displayAddress'],
            'heroImage': hero,
            'totalPhotos': len(all_photos),
            'phases': ordered_phases
        })

    os.makedirs('app/data', exist_ok=True)
    with open('app/data/portfolioProjects.json', 'w') as out_f:
        json.dump(final_projects, out_f, indent=2)

    ts_code = f"""// Generated Portfolio Data with ImageKit CDN URLs
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
    with open('app/data/portfolioData.ts', 'w') as ts_f:
        ts_f.write(ts_code)

    shutil.rmtree(temp_dir, ignore_errors=True)
    print(f"SUCCESS! Direct ImageKit upload complete for {len(final_projects)} projects.", flush=True)

if __name__ == '__main__':
    main()
