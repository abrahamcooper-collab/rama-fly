// Generated Portfolio Data with Cloudinary CDN URLs
export interface PhaseData {
  name: string;
  count: number;
  photos: string[];
}

export interface ProjectData {
  id: string;
  folderName: string;
  rawAddress: string;
  displayAddress: string;
  heroImage: string;
  totalPhotos: number;
  phases: PhaseData[];
}

import rawData from './portfolioProjects.json';

export const portfolioProjects: ProjectData[] = rawData as ProjectData[];
