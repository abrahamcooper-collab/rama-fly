/* ──────────────────────────────────────────────
   DHA Construction LLC – Centralized Site Data
   ────────────────────────────────────────────── */

export const business = {
	name: "Rama Fly Construction Group LLC",
	phone: "+1 (646) 305-8546",
	phoneRaw: "+16463058546",
	email: "info@ramafly.com",
	address: "51 Inwood St, Yonkers, NY 10704, USA",
	addressObj: {
		street: "51 Inwood St",
		city: "Yonkers",
		state: "NY",
		zip: "10704",
	},
	hours: "Mon–Sun, 8am – 6pm",
	domain: "ramaflyconstruction.com",
	gmbLink: "https://www.google.com/maps/place/RAMA-FLY+Construction+Group+LLC/@40.9194285,-73.8708458,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2f33e9349c503:0xb0b05b9102927e27!8m2!3d40.9194285!4d-73.8708458!16s%2Fg%2F11y511q_q2?hl=en&entry=ttu",
	socials: {
		facebook: "https://facebook.com",
		instagram: "https://instagram.com",
	},
};

import {
	Building2,
	UtensilsCrossed,
	ShowerHead,
	Home,
	Ruler,
	Layers,
	PaintRoller,
	Wrench,
} from "lucide-react";

/* ─── Services ───
   New York apartment renovation & interior remodeling specialists.
   Each entry links to a full detail page under /services/<slug>. */
export const services = [
	{
		title: "Apartment Renovation",
		slug: "/services/apartment-renovation",
		image: "/images/projects/renovation/renovation-3.jpg",
		icon: Building2,
		shortDesc:
			"Full apartment renovations, condo remodels, and luxury interior upgrades across New York City.",
	},
	{
		title: "Kitchen Remodeling",
		slug: "/services/kitchen-remodeling",
		image: "/images/projects/kitchen/kitchen-1.jpg",
		icon: UtensilsCrossed,
		shortDesc:
			"Custom kitchen design, cabinetry, countertops, and complete kitchen renovations.",
	},
	{
		title: "Bathroom Renovation",
		slug: "/services/bathroom-remodeling",
		image: "/images/projects/bathroom/bathroom-1.jpg",
		icon: ShowerHead,
		shortDesc:
			"Walk-in showers, custom vanities, tile work, and spa-quality bathroom remodels.",
	},
	{
		title: "Full Interior Renovation",
		slug: "/services/full-interior-renovation",
		image: "/images/projects/renovation/renovation-8.jpg",
		icon: Home,
		shortDesc:
			"Whole-home gut renovations, layout redesigns, and turnkey interior build-outs.",
	},
	{
		title: "Custom Millwork",
		slug: "/services/custom-millwork",
		image: "/images/projects/closet/closet-5.jpg",
		icon: Ruler,
		shortDesc:
			"Custom built-ins, crown molding, trim carpentry, and bespoke woodwork.",
	},
	{
		title: "Flooring",
		slug: "/services/flooring",
		image: "/images/projects/renovation/renovation-6.jpg",
		icon: Layers,
		shortDesc:
			"Hardwood, engineered wood, luxury vinyl, and tile flooring installation and refinishing.",
	},
	{
		title: "Painting & Plaster",
		slug: "/services/interior-painting",
		image: "/images/projects/renovation/renovation-19.jpg",
		icon: PaintRoller,
		shortDesc:
			"Interior painting, plastering, drywall repair, and flawless wall finishing.",
	},
	{
		title: "Electrical & Plumbing Coordination",
		slug: "/services/electrical-plumbing-coordination",
		image: "/images/projects/framing/framing-1.jpg",
		icon: Wrench,
		shortDesc:
			"Licensed electrical and plumbing coordination, permits, and code-compliant installations.",
	},
];

/* ─── Service Areas (Separate Pages) ─── */
// Primary service areas first (per business priority), then surrounding communities.
const RAW_AREAS = [
	"Yonkers",
	"Manhattan",
	"Brooklyn",
	"Queens",
	"Westchester County",
	"White Plains",
	"Bronx",
	"Mount Vernon",
	"New Rochelle",
	"Scarsdale",
];

// These are strictly for SEO keyword placement on the site without separate pages
export const seoAreas = [
	"New York City",
	"Staten Island",
	"Bronxville",
	"Rye",
	"Mamaroneck",
	"Larchmont",
	"Mount Kisco",
	"Harrison",
	"Dobbs Ferry",
	"Tarrytown",
	"Hastings-on-Hudson",
	"Pelham",
];

export const serviceAreas = RAW_AREAS.map((city, index) => {
	const serviceAreaImages = [
		"/images/projects/renovation/renovation-3.jpg",
		"/images/projects/renovation/renovation-22.jpg",
		"/images/projects/renovation/renovation-28.jpg",
		"/images/projects/kitchen/kitchen-1.jpg",
		"/images/projects/closet/closet-5.jpg",
		"/images/projects/bathroom/bathroom-1.jpg",
		"/images/projects/renovation/renovation-21.jpg",
		"/images/projects/renovation/renovation-29.jpg",
		"/images/projects/framing/framing-2.jpg",
		"/images/projects/renovation/renovation-14.jpg",
	];
	const image = serviceAreaImages[index % serviceAreaImages.length];
	return {
		city,
		slug: `/service-areas/${city.toLowerCase().replace(/\s+/g, "-")}`,
		state: "NY",
		image,
		description: `Rama Fly Construction Group LLC is proud to be a trusted remodeling and construction contractor serving ${city}, NY. We deliver expert apartment renovations, kitchen remodeling, bathroom remodeling, custom millwork, painting, and professional carpentry services right here in ${city}.`,
		highlights: [
			"Locally owned & operated",
			`Serving ${city} homeowners`,
			"Free estimates on all remodeling projects",
		],
	};
});

/* ─── Navigation ─── */
export const navLinks = [
	{ label: "HOME", href: "/" },
	{
		label: "SERVICES",
		href: "/services",
		dropdown: services.map((s) => ({ label: s.title, href: s.slug })),
	},
	{
		label: "SERVICE AREAS",
		href: "/service-areas",
		dropdown: serviceAreas.map((a) => ({
			label: a.city,
			href: a.slug,
		})),
	},
	{ label: "GALLERY", href: "/gallery" },
	{ label: "ABOUT", href: "/about" },
	{ label: "CONTACT US", href: "/contact" },
];

/* ─── Reviews (real Google reviews) ─── */
export type Review = {
	name: string;
	rating: number;
	text: string;
	date: string;
	/** True when the original Google review was truncated ("… More"). */
	truncated?: boolean;
};

export const reviews: Review[] = [
	{
		name: "Carol Steuer",
		rating: 5,
		text: "Rama-Fly Construction is the best contractor in NYC! Our first project with them was to combine two apartments and involved major demolition to create a large kitchen and reconfigure several rooms. The second project was a bathroom renovation. Throughout the process we've been extremely pleased with their workmanship and professionalism. Sam is very easy to work with and had innovative ideas when we ran into unexpected problems. His estimates were accurate on price and timeframe, and my change requests were reasonable. His team always showed up promptly, put in a full day and cleaned up daily. All his subcontractors were equally talented and the process was seamless. Both projects came in on time and budget. The apartment is beautiful and visitors are amazed at the results.",
		date: "a year ago",
	},
	{
		name: "Paul Schiff",
		rating: 5,
		text: "Sam is simply phenomenal. We embarked on a complex gut renovation of a 2BR/2BA apt in Brooklyn. His laser focus, high professional standards, and terrific crew made for a very successful outcome. And, on top of all that, he is honest and 100% reliable. Maybe the most rewarding part of the job was seeing how Sam would attack the unanticipated problems and obstacles that invariably come up on projects such as ours; he is an amazing problem solver — innovative and creative. I cannot recommend Sam more highly.",
		date: "a year ago",
	},
	{
		name: "Stephanie Malinski",
		rating: 5,
		text: "Sam was a phenomenal contractor. He is a true professional who has been doing this long enough to deftly navigate any challenges. The entire Rama Fly team was amazing to work with, and their renovation of our New York pre-war apt turned out beautifully. We always recommend Rama Fly to anyone we know who is thinking about renovating.",
		date: "a year ago",
	},
	{
		name: "Marcela Zappi",
		rating: 5,
		text: "We wanted to renovate the kitchen and I kept postponing because I didn't know where to start. Prior to contacting Sam Rama, we had a solid reference about his professional work. He immediately struck us as a very knowledgeable in every…",
		date: "a year ago",
		truncated: true,
	},
	{
		name: "David Freid",
		rating: 5,
		text: "Rama-Fly Construction rebuilt our bathroom and redid our kitchen, as part of a major renovation. The results are breathtaking. First, Sam (of Rama-Fly) listened, taking care to understand what we wanted. He guided us when our inexperience…",
		date: "a year ago",
		truncated: true,
	},
];

export function generateAreaPageMetadata(index: number) {
	const a = serviceAreas[index];
	return {
		title: `Apartment Renovation & Interior Remodeling in ${a.city}, ${a.state} | ${business.name}`,
		description: `${a.description.substring(0, 155)}...`,
	};
}

import { getFeaturedImages, getAllImagePaths } from "./imageRegistry";

/** Pool of images for service area cards and similar components.
 *  Combines existing service/component images with featured project photos. */
export const cardImagePool = getAllImagePaths();
