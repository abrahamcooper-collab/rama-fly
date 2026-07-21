import os
import sys
import shutil
import subprocess
import json
import re
from concurrent.futures import ThreadPoolExecutor, as_completed

src_dir = 'projects-raw'
dst_dir = 'public/projects'

# Ensure destination directory exists
os.makedirs(dst_dir, exist_ok=True)

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
    # Strip house number at the beginning: '10 Plaza Street East Apt - 4G' -> 'Plaza Street East Apt - 4G'
    disp = re.sub(r'^\d+\s*', '', name).strip()
    return name, disp

def sample_list(lst, max_items=5):
    """Sample evenly up to max_items from list to pick the most representative pictures."""
    if len(lst) <= max_items:
        return lst
    step = len(lst) / max_items
    return [lst[int(i * step)] for i in range(max_items)]

def convert_task(task_args):
    src_file, dst_file = task_args
    os.makedirs(os.path.dirname(dst_file), exist_ok=True)
    ext = os.path.splitext(src_file)[1].lower()
    
    if os.path.exists(dst_file):
        return dst_file
        
    if ext in ['.jpg', '.jpeg', '.png', '.webp']:
        shutil.copy2(src_file, dst_file)
    elif ext == '.heic':
        try:
            subprocess.run(['heif-convert', '-q', '80', src_file, dst_file], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        except Exception:
            try:
                subprocess.run(['convert', src_file, '-quality', '80', dst_file], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            except Exception:
                return None
    return dst_file

def main():
    tasks = []
    file_records = []

    # Map raw files per project and phase
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
                    phase_raw_files[phase].append((src_file, rel_root, f, ext))

        # Sample relevant pictures for each phase separately for this project
        for phase, file_list in phase_raw_files.items():
            if not file_list:
                continue
            sampled = sample_list(file_list, max_items=12)
            for src_file, rel_root, f, ext in sampled:
                out_name = (os.path.splitext(f)[0] + '.jpg') if ext == '.heic' else f
                out_name = re.sub(r'[^a-zA-Z0-9_.-]', '_', out_name)
                dst_file = os.path.join(dst_dir, proj_id, rel_root.replace(' ', '_'), out_name)
                web_path = '/' + os.path.relpath(dst_file, 'public')
                tasks.append((src_file, dst_file))
                file_records.append({
                    'proj_id': proj_id,
                    'folder': folder,
                    'raw_addr': raw_addr,
                    'display_addr': display_addr,
                    'phase': phase,
                    'web_path': web_path
                })

    print(f'Total relevant photos selected across projects: {len(tasks)}')

    with ThreadPoolExecutor(max_workers=24) as executor:
        futures = [executor.submit(convert_task, t) for t in tasks]
        completed = 0
        for f in as_completed(futures):
            completed += 1
            if completed % 50 == 0:
                print(f'Converted {completed}/{len(tasks)} photos...')

    print('Selected portfolio images converted successfully!')

    # Structure portfolio JSON
    projects_map = {}
    for rec in file_records:
        pid = rec['proj_id']
        if pid not in projects_map:
            projects_map[pid] = {
                'id': pid,
                'folderName': rec['folder'],
                'rawAddress': rec['raw_addr'],
                'displayAddress': rec['display_addr'],
                'phasesMap': {p: [] for p in standard_phases}
            }
        if rec['web_path'] not in projects_map[pid]['phasesMap'][rec['phase']]:
            projects_map[pid]['phasesMap'][rec['phase']].append(rec['web_path'])

    projects_list = []
    for pid, pdata in projects_map.items():
        ordered_phases = []
        all_photos = []
        for phase_name in standard_phases:
            photos = pdata['phasesMap'][phase_name]
            if photos:
                ordered_phases.append({
                    'name': phase_name,
                    'count': len(photos),
                    'photos': photos
                })
                all_photos.extend(photos)
                
        hero = ''
        for ph in reversed(ordered_phases):
            if ph['photos']:
                hero = ph['photos'][0]
                break
                
        projects_list.append({
            'id': pdata['id'],
            'folderName': pdata['folderName'],
            'rawAddress': pdata['rawAddress'],
            'displayAddress': pdata['displayAddress'],
            'heroImage': hero,
            'totalPhotos': len(all_photos),
            'phases': ordered_phases
        })

    os.makedirs('app/data', exist_ok=True)
    with open('app/data/portfolioProjects.json', 'w') as out_f:
        json.dump(projects_list, out_f, indent=2)

    ts_code = f"""// Generated Portfolio Data
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

    print(f'Successfully generated portfolioProjects.json and portfolioData.ts for {len(projects_list)} projects.')

if __name__ == '__main__':
    main()
