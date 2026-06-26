/* ──────────────────────────────────────────────
   Image Registry – Single source of truth for all
   project images used across the site.
   ────────────────────────────────────────────── */

export type ProjectCategory =
  | "kitchen"
  | "bathroom"
  | "closet"
  | "framing"
  | "renovation";

export interface ProjectImage {
  /** URL path served from /public */
  src: string;
  /** Descriptive alt text for accessibility & SEO */
  alt: string;
  /** Category for filtering */
  category: ProjectCategory;
  /** Human-readable category label */
  categoryLabel: string;
  /** Whether this is a good hero / featured image */
  featured?: boolean;
}

/* ─── Category Labels ─── */
const categoryLabels: Record<ProjectCategory, string> = {
  kitchen: "Kitchen Remodeling",
  bathroom: "Bathroom Renovation",
  closet: "Custom Closet",
  framing: "Framing & Structure",
  renovation: "Full Renovation",
};

/* ─── Helper ─── */
function img(
  category: ProjectCategory,
  filename: string,
  alt: string,
  featured = false
): ProjectImage {
  return {
    src: `/images/projects/${category}/${filename}`,
    alt,
    category,
    categoryLabel: categoryLabels[category],
    featured,
  };
}

/* ─── Kitchen Images ─── */
const kitchenImages: ProjectImage[] = [
  img("kitchen", "kitchen-1.jpg", "Kitchen island with marble countertop and modern gray cabinetry installation in progress", true),
  img("kitchen", "kitchen-2.jpg", "Custom kitchen remodel featuring granite island and built-in cabinet work"),
  img("kitchen", "kitchen-3.jpg", "Professional-grade stainless steel double oven installed in renovated kitchen"),
];

/* ─── Bathroom Images ─── */
const bathroomImages: ProjectImage[] = [
  img("bathroom", "bathroom-1.jpg", "Bathroom rough-in plumbing with copper piping and floor drain installation", true),
  img("bathroom", "bathroom-2.jpg", "Bathroom wall framing with copper supply lines and plumbing valve installation"),
];

/* ─── Closet Images ─── */
const closetImages: ProjectImage[] = [
  img("closet", "closet-1.jpg", "Custom walk-in closet with built-in shelving and organized storage"),
  img("closet", "closet-2.jpg", "Professionally designed closet storage system with hanging rods and drawers"),
  img("closet", "closet-3.jpg", "Closet organizer installation with adjustable shelf configuration"),
  img("closet", "closet-4.jpg", "Built-in wardrobe with custom partitions and shoe rack"),
  img("closet", "closet-5.jpg", "Finished custom closet with multi-level hanging space and accessories", true),
];

/* ─── Framing Images ─── */
const framingImages: ProjectImage[] = [
  img("framing", "framing-1.jpg", "Metal stud framing with electrical junction box installation during gut renovation", true),
  img("framing", "framing-2.jpg", "Steel stud wall framing and structural support for interior build-out"),
];

/* ─── Renovation Images (converted from HEIC) ─── */
const renovationImages: ProjectImage[] = [
  img("renovation", "renovation-1.jpg", "Full apartment renovation in progress with plastered walls and floor protection"),
  img("renovation", "renovation-2.jpg", "Living space renovation showing fresh wall finishing and trim detail"),
  img("renovation", "renovation-3.jpg", "Room renovation with new wall finish and baseboard installation", true),
  img("renovation", "renovation-4.jpg", "Apartment remodel featuring fresh paint and wall preparation work"),
  img("renovation", "renovation-5.jpg", "Interior renovation showing drywall finishing and ceiling detail"),
  img("renovation", "renovation-6.jpg", "Hallway renovation with new plaster walls and floor covering protection"),
  img("renovation", "renovation-7.jpg", "Room renovation in progress with wall patching and painting"),
  img("renovation", "renovation-8.jpg", "Open floor plan renovation showing combined living and dining space"),
  img("renovation", "renovation-9.jpg", "Wall repair and finishing detail during apartment gut renovation"),
  img("renovation", "renovation-10.jpg", "Radiator enclosure work with painter tape and window trim detail"),
  img("renovation", "renovation-11.jpg", "Drywall installation and wall patching in renovated bedroom"),
  img("renovation", "renovation-12.jpg", "Crown molding and ceiling detail in freshly renovated room"),
  img("renovation", "renovation-13.jpg", "Window wall finishing with radiator access panel during renovation"),
  img("renovation", "renovation-14.jpg", "Fresh wall finishing and baseboard trim in renovated living room"),
  img("renovation", "renovation-15.jpg", "Window sill finishing and radiator enclosure work in progress"),
  img("renovation", "renovation-16.jpg", "Recessed lighting and ceiling soffit detail in renovated space"),
  img("renovation", "renovation-17.jpg", "Open concept renovation with archway framing and new ceiling"),
  img("renovation", "renovation-18.jpg", "Open concept renovation showing arch detail and ceiling finish"),
  img("renovation", "renovation-19.jpg", "Craftsman painting radiator cover with precision during renovation", true),
  img("renovation", "renovation-20.jpg", "Worker painting radiator enclosure with protective floor covering"),
  img("renovation", "renovation-21.jpg", "Completed wall finishing with recessed lighting in renovated room"),
  img("renovation", "renovation-22.jpg", "Living room renovation with freshly finished walls and modern paint"),
  img("renovation", "renovation-23.jpg", "Bathroom mirror and marble backsplash with built-in outlet installation"),
  img("renovation", "renovation-24.jpg", "Built-in shelving nook with accent wall detail in renovated space"),
  img("renovation", "renovation-25.jpg", "Bathroom vanity with marble backsplash and custom mirror installation"),
  img("renovation", "renovation-26.jpg", "New radiator enclosure with custom trim and wall finishing"),
  img("renovation", "renovation-27.jpg", "Finished renovation detail with wall texture and crown molding"),
  img("renovation", "renovation-28.jpg", "Renovated living space with modern ceiling fan and artwork"),
  img("renovation", "renovation-29.jpg", "Completed renovation showing finished wall and modern light fixture"),
  img("renovation", "renovation-30.jpg", "Modern ceiling fan installation with Edison bulbs in renovated room"),
];

/* ─── Master Registry ─── */
export const projectImages: ProjectImage[] = [
  ...kitchenImages,
  ...bathroomImages,
  ...closetImages,
  ...framingImages,
  ...renovationImages,
];

/* ─── Accessor Helpers ─── */

/** Get all images for a specific category */
export function getImagesByCategory(category: ProjectCategory): ProjectImage[] {
  return projectImages.filter((img) => img.category === category);
}

/** Get featured images (good for hero sections, cards, etc.) */
export function getFeaturedImages(): ProjectImage[] {
  return projectImages.filter((img) => img.featured);
}

/** Get unique categories that have images */
export function getCategories(): { value: ProjectCategory; label: string }[] {
  const seen = new Set<ProjectCategory>();
  return projectImages.reduce(
    (acc, img) => {
      if (!seen.has(img.category)) {
        seen.add(img.category);
        acc.push({ value: img.category, label: img.categoryLabel });
      }
      return acc;
    },
    [] as { value: ProjectCategory; label: string }[]
  );
}

/** Get a shuffled subset of images for variety (e.g. homepage preview) */
export function getRandomImages(count: number): ProjectImage[] {
  const shuffled = [...projectImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/** Get all image paths (for use in cardImagePool or similar flat lists) */
export function getAllImagePaths(): string[] {
  return projectImages.map((img) => img.src);
}
