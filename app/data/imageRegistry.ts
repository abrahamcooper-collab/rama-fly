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
    // Mapped to Cloudinary CDN URLs
    // Mapped to Cloudinary CDN URLs
    src: (function(cat, fn) {
      const path = `/images/projects/${cat}/${fn}`;
      const cacheMap: Record<string, string> = {
      "/logo.jpeg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638623/rama-fly-site-assets/logo_w1ian4.jpg",
      "/Rama Fly Construction Group LLC.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638624/rama-fly-site-assets/Rama_Fly_Construction_Group_LLC_uspefx.png",
      "/beforeandafter/before.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638624/rama-fly-site-assets/beforeandafter/before_oludfn.png",
      "/images/projects/bathroom/bathroom-ai.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_bathroom/bathroom-ai_f6mjcb.jpg",
      "/images/projects/bathroom/bathroom-1.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_bathroom/bathroom-1_rtbhi8.jpg",
      "/images/projects/bathroom/bathroom-2.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_bathroom/bathroom-2_ryg9hl.jpg",
      "/images/projects/bathroom/bathroom-luxury.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_bathroom/bathroom-luxury_f3qngf.jpg",
      "/beforeandafter/after.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/beforeandafter/after_azrrhh.png",
      "/images/projects/bathroom/bathroom-showers.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_bathroom/bathroom-showers_umi0kf.jpg",
      "/images/projects/bathroom/bathroom-tile.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638626/rama-fly-site-assets/images_projects_bathroom/bathroom-tile_rchtar.jpg",
      "/images/projects/closet/closet-3.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_closet/closet-3_tnkfhi.jpg",
      "/images/projects/closet/closet-5.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638626/rama-fly-site-assets/images_projects_closet/closet-5_iep73g.jpg",
      "/images/projects/bathroom/bathroom-vanities.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_bathroom/bathroom-vanities_t8i7zt.jpg",
      "/images/projects/closet/closet-1.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_closet/closet-1_hiqrzp.jpg",
      "/images/projects/closet/closet-4.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_closet/closet-4_cpk4rm.jpg",
      "/images/projects/closet/closet-2.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_closet/closet-2_ognttp.jpg",
      "/images/projects/framing/framing-1.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638626/rama-fly-site-assets/images_projects_framing/framing-1_cn2ox1.jpg",
      "/images/projects/kitchen/kitchen-lighting.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638627/rama-fly-site-assets/images_projects_kitchen/kitchen-lighting_ivciu7.jpg",
      "/images/projects/framing/framing-2.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638628/rama-fly-site-assets/images_projects_framing/framing-2_afxqrw.jpg",
      "/images/projects/kitchen/kitchen-2.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638628/rama-fly-site-assets/images_projects_kitchen/kitchen-2_ifpzso.jpg",
      "/images/projects/kitchen/kitchen-3.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638628/rama-fly-site-assets/images_projects_kitchen/kitchen-3_ylhavk.jpg",
      "/images/projects/kitchen/kitchen-1.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638628/rama-fly-site-assets/images_projects_kitchen/kitchen-1_ekrutm.jpg",
      "/images/projects/renovation/apartment-renovation.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_renovation/apartment-renovation_bjsyl1.jpg",
      "/images/projects/kitchen/kitchen-cabinets.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_kitchen/kitchen-cabinets_vxurqw.jpg",
      "/images/projects/kitchen/kitchen-countertops.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_kitchen/kitchen-countertops_souz9w.jpg",
      "/images/projects/kitchen/kitchen-flooring.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_kitchen/kitchen-flooring_lxqvl4.jpg",
      "/images/projects/renovation/crown-molding.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_renovation/crown-molding_nztw0k.jpg",
      "/images/projects/renovation/door-installation.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_renovation/door-installation_x4puan.jpg",
      "/images/projects/renovation/custom-builtins.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_renovation/custom-builtins_aam5lb.jpg",
      "/images/projects/renovation/drywall-plaster.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/drywall-plaster_eyomue.jpg",
      "/images/projects/renovation/custom-millwork.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/custom-millwork_vkopzf.jpg",
      "/images/projects/renovation/electrical-plumbing.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/electrical-plumbing_pmn1qb.jpg",
      "/images/projects/renovation/flooring.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/flooring_po64vb.jpg",
      "/images/projects/renovation/full-interior.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/full-interior_tab1td.jpg",
      "/images/projects/renovation/interior-painting.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/interior-painting_dwxhfo.jpg",
      "/images/projects/renovation/kitchen.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/kitchen_khegdc.png",
      "/images/projects/renovation/painting-prep.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638631/rama-fly-site-assets/images_projects_renovation/painting-prep_vayjmt.jpg",
      "/images/projects/renovation/renovation-10.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638631/rama-fly-site-assets/images_projects_renovation/renovation-10_svrzt9.jpg",
      "/images/projects/renovation/hardwood-flooring.png": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638631/rama-fly-site-assets/images_projects_renovation/hardwood-flooring_bchvil.jpg",
      "/images/projects/renovation/renovation-11.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638631/rama-fly-site-assets/images_projects_renovation/renovation-11_zwqudk.jpg",
      "/images/projects/renovation/renovation-15.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638633/rama-fly-site-assets/images_projects_renovation/renovation-15_lstetj.jpg",
      "/images/projects/renovation/renovation-1.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638635/rama-fly-site-assets/images_projects_renovation/renovation-1_a3jrxd.jpg",
      "/images/projects/renovation/renovation-13.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638635/rama-fly-site-assets/images_projects_renovation/renovation-13_wgtuab.jpg",
      "/images/projects/renovation/renovation-19.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638635/rama-fly-site-assets/images_projects_renovation/renovation-19_wtmcd0.jpg",
      "/images/projects/renovation/renovation-16.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638636/rama-fly-site-assets/images_projects_renovation/renovation-16_zylyh4.jpg",
      "/images/projects/renovation/renovation-14.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638636/rama-fly-site-assets/images_projects_renovation/renovation-14_lslo6v.jpg",
      "/images/projects/renovation/renovation-18.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638637/rama-fly-site-assets/images_projects_renovation/renovation-18_vg2hvo.jpg",
      "/images/projects/renovation/renovation-12.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638638/rama-fly-site-assets/images_projects_renovation/renovation-12_zzhdoy.jpg",
      "/images/projects/renovation/renovation-2.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638639/rama-fly-site-assets/images_projects_renovation/renovation-2_rx0hbk.jpg",
      "/images/projects/renovation/renovation-21.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638639/rama-fly-site-assets/images_projects_renovation/renovation-21_yreyjx.jpg",
      "/images/projects/renovation/renovation-22.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638640/rama-fly-site-assets/images_projects_renovation/renovation-22_kuk0bn.jpg",
      "/images/projects/renovation/renovation-23.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638640/rama-fly-site-assets/images_projects_renovation/renovation-23_s4qu05.jpg",
      "/images/projects/renovation/renovation-24.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638641/rama-fly-site-assets/images_projects_renovation/renovation-24_mfwg7a.jpg",
      "/images/projects/renovation/renovation-28.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638641/rama-fly-site-assets/images_projects_renovation/renovation-28_cpzrwb.jpg",
      "/images/projects/renovation/renovation-20.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638642/rama-fly-site-assets/images_projects_renovation/renovation-20_ibsuqf.jpg",
      "/images/projects/renovation/renovation-29.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638642/rama-fly-site-assets/images_projects_renovation/renovation-29_rvn9ea.jpg",
      "/images/projects/renovation/renovation-30.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638643/rama-fly-site-assets/images_projects_renovation/renovation-30_meixp1.jpg",
      "/images/projects/renovation/renovation-26.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638644/rama-fly-site-assets/images_projects_renovation/renovation-26_pfh5ui.jpg",
      "/images/projects/renovation/renovation-17.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638644/rama-fly-site-assets/images_projects_renovation/renovation-17_oc0ipc.jpg",
      "/images/projects/renovation/renovation-27.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638645/rama-fly-site-assets/images_projects_renovation/renovation-27_qb6fgm.jpg",
      "/images/projects/renovation/renovation-6.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638645/rama-fly-site-assets/images_projects_renovation/renovation-6_tzlyjy.jpg",
      "/images/projects/renovation/renovation-3.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638645/rama-fly-site-assets/images_projects_renovation/renovation-3_omaq4z.jpg",
      "/images/projects/renovation/renovation-5.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638646/rama-fly-site-assets/images_projects_renovation/renovation-5_zu6ocn.jpg",
      "/images/projects/renovation/renovation-25.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638646/rama-fly-site-assets/images_projects_renovation/renovation-25_wpp9br.jpg",
      "/images/team/sam-rama.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638646/rama-fly-site-assets/images_team/sam-rama_znrfpx.jpg",
      "/images/projects/renovation/renovation-4.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638648/rama-fly-site-assets/images_projects_renovation/renovation-4_qt5gxu.jpg",
      "/images/projects/renovation/renovation-7.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638649/rama-fly-site-assets/images_projects_renovation/renovation-7_dfzlza.jpg",
      "/images/projects/renovation/renovation-9.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638649/rama-fly-site-assets/images_projects_renovation/renovation-9_llkdci.jpg",
      "/images/projects/renovation/renovation-8.jpg": "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638651/rama-fly-site-assets/images_projects_renovation/renovation-8_wxpk14.jpg"
};
      return cacheMap[path] || path;
    })(category, filename),
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
