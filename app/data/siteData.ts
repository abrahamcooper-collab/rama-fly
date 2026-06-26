/* ──────────────────────────────────────────────
   DHA Construction LLC – Centralized Site Data
   ────────────────────────────────────────────── */

export const business = {
	name: "Rama Fly Construction Group LLC",
	phone: "+1 (646) 305-8546",
	phoneRaw: "+16463058546",
	email: "RAMAFLYCONSTRUCTION@GMAIL.COM",
	address: "51 Inwood St, Yonkers, NY 10704, USA",
	addressObj: {
		street: "51 Inwood St",
		city: "Yonkers",
		state: "NY",
		zip: "10704",
	},
	hours: "Mon–Sun, 8am – 6pm",
	domain: "ramaflyconstruction.com",
	gmbLink: "https://www.google.com/search?q=Rama+Fly+Construction+Group+LLC+Yonkers+NY",
	socials: {
		facebook: "https://facebook.com",
		instagram: "https://instagram.com",
	},
};

import { Home, Wrench, AppWindow, DoorClosed, Trash2 } from "lucide-react";

/* ─── Services (Separate Pages) ─── */
export const services = [
	{
		title: "Vinyl Siding",
		slug: "/vinyl-siding-installation",
		image: "/images/projects/framing/framing-2.jpg",
		icon: Home,
		shortDesc:
			"Premium vinyl siding installation to protect and beautify your home's exterior.",
		longDesc:
			"Our expert team provides professional vinyl siding installation that transforms your home. We use only top-quality materials that offer superior weather protection, energy efficiency, and lasting beauty. Whether you're upgrading old siding or building new, we deliver flawless results that increase your property value.",
		features: [
			"Vinyl Siding Installation",
			"Fiber Cement Siding Installation",
			"Siding Repair",
			"Siding Replacement",
			"Exterior Siding Contractor",
		],
	},
	{
		title: "Soffit & Fascia",
		slug: "/soffit-fascia-installation",
		image: "/images/projects/framing/framing-1.jpg",
		icon: Wrench,
		shortDesc:
			"Expert soffit and fascia work for proper ventilation and a polished finish.",
		longDesc:
			"Soffit and fascia play a crucial role in protecting your roof and attic. Our team expertly installs and repairs soffit and fascia, ensuring proper attic ventilation and protection against moisture, pests, and weather damage. We match your home's style for a seamless, finished look.",
		features: [
			"Soffit Installation",
			"Fascia Installation",
			"Soffit and Fascia Repair",
			"Exterior Trim",
		],
	},
	{
		title: "Windows",
		slug: "/window-wrapping",
		image: "/images/projects/renovation/renovation-15.jpg",
		icon: AppWindow,
		shortDesc:
			"Professional window installation and exterior aluminum window wrapping.",
		longDesc:
			"We provide professional window installation services alongside custom exterior window wrapping (capping). Upgrading your windows improves energy efficiency, while our expert aluminum trim wrapping eliminates the need for painting, prevents wood rot, and gives your windows a clean, finished look that lasts for decades.",
		features: [
			"Window Installation Service",
			"Window Wrapping",
			"Exterior Window Trim Installation",
			"Aluminum Trim Wrapping",
		],
	},
	{
		title: "Doors",
		slug: "/door-wrapping",
		image: "/images/projects/renovation/renovation-18.jpg",
		icon: DoorClosed,
		shortDesc:
			"Professional door wrapping and entryway installations for a weatherproof finish.",
		longDesc:
			"Door wrapping protects your exterior door frames with precision-fit aluminum. Like window wrapping, it eliminates painting upkeep, prevents moisture damage, and gives your entryways a polished, professional appearance. We also handle full entryway upgrades and installations.",
		features: [
			"Door Wrapping",
			"Aluminum Trim Wrapping",
			"Exterior Trim",
			"Construction Company",
		],
	},
	{
		title: "Dump Trailer Rent & Junk Removal",
		slug: "/junk-removal-dump-trailer",
		image: "/images/projects/renovation/renovation-1.jpg",
		icon: Trash2,
		shortDesc: "Fast, reliable junk removal and dump trailer rentals.",
		longDesc:
			"Need to clear out construction debris, old materials, or unwanted junk? Our dump trailer service makes garbage collection and debris disposal easy. We handle loading, hauling, and proper disposal so you don't have to. Perfect for renovation cleanups, estate cleanouts, and yard waste.",
		features: [
			"Junk Removal",
			"Garbage Collection Service",
			"Garbage Collection Service (for junk removal)",
		],
	},
];

/* ─── Service Areas (Separate Pages) ─── */
const RAW_AREAS = [
	"Yonkers",
	"White Plains",
	"Manhattan",
	"Brooklyn",
	"Queens",
	"Bronx",
	"Mount Vernon",
	"New Rochelle",
	"Scarsdale",
	"Westchester County",
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

export function generateServicePageMetadata(index: number) {
	const s = services[index];
	return {
		title: `${s.title} | ${business.name}`,
		description: `${s.longDesc.substring(0, 155)}...`,
	};
}

export function generateAreaPageMetadata(index: number) {
	const a = serviceAreas[index];
	return {
		title: `Siding Contractor in ${a.city}, ${a.state} | ${business.name}`,
		description: `${a.description.substring(0, 155)}...`,
	};
}

import { getFeaturedImages, getAllImagePaths } from "./imageRegistry";

/** Pool of images for service area cards and similar components.
 *  Combines existing service/component images with featured project photos. */
export const cardImagePool = getAllImagePaths();
