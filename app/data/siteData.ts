/* ──────────────────────────────────────────────
   DHA Construction LLC – Centralized Site Data
   ────────────────────────────────────────────── */

export const business = {
	name: "DHA Construction LLC",
	phone: "(262) 443-7822",
	phoneRaw: "+12624437822",
	email: "arnodoconstruction@hotmail.com",
	address: "426 W Whitewater St, Whitewater, WI 53190, USA",
	addressObj: {
		street: "426 W Whitewater St",
		city: "Whitewater",
		state: "WI",
		zip: "53190",
	},
	hours: "Mon-Sat, 8am - 7pm",
	domain: "dhaconstructionllc.com",
	gmbLink: "https://www.google.com/search?q=DHA+Construction+LLC+Whitewater+WI",
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
		image: "/images/services/vinyl_siding.jpg",
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
		image: "/images/services/soffit.jpg",
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
		image: "/images/services/windows.jpg",
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
		image: "/images/services/door.jpg",
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
		image: "/images/services/dump_trailer.jpg",
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
	"Whitewater",
	"Madison",
	"Milwaukee",
	"Fort Atkinson",
	"Janesville",
];

// These are strictly for SEO keyword placement on the site without separate pages
export const seoAreas = [
	"Jefferson",
	"Milton",
	"Palmyra",
	"Elkhorn",
	"Delavan",
	"Darien",
	"Eagle",
	"Sullivan",
	"Helenville",
	"Lake Mills",
	"Johnson Creek",
	"Waterloo",
	"Ixonia",
	"Cambridge",
	"Edgerton",
	"Sharon",
	"Walworth",
];

export const serviceAreas = RAW_AREAS.map((city, index) => ({
	city,
	slug: `/service-areas/${city.toLowerCase().replace(/\s+/g, "-")}`,
	state: "WI",
	image: `/images/service_areas/${index + 2}.jpg`,
	description: `DHA Construction LLC is proud to be a trusted exterior contractor serving ${city}, WI. We deliver expert vinyl siding installation, soffit & fascia, window wrapping, door wrapping, exterior painting, and reliable junk removal services right here in ${city}.`,
	highlights: [
		"Locally owned & operated",
		`Serving ${city} homeowners`,
		"Free estimates on all exterior projects",
	],
}));

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

/* ─── Reviews ─── */
export const reviews = [
	{
		name: "Michael R.",
		rating: 5,
		text: "DHA Construction did an amazing job with our vinyl siding. The crew was professional, on time, and the quality is outstanding. Our home looks brand new!",
		date: "2 months ago",
	},
	{
		name: "Sarah K.",
		rating: 5,
		text: "We hired DHA for window wrapping and exterior painting. They exceeded our expectations. Very detail-oriented and the pricing was fair. Highly recommend!",
		date: "3 months ago",
	},
	{
		name: "James T.",
		rating: 5,
		text: "Great experience with their junk removal service. They were quick, efficient, and left the area spotless. Will definitely use them again.",
		date: "1 month ago",
	},
	{
		name: "Linda M.",
		rating: 5,
		text: "DHA replaced all the soffit and fascia on our house. The transformation is incredible. Professional from start to finish. Thank you!",
		date: "4 months ago",
	},
	{
		name: "Robert P.",
		rating: 5,
		text: "Arnoldo and his team are the best! They wrapped all our doors and windows, and the house looks spectacular. Couldn't be happier with the results.",
		date: "2 weeks ago",
	},
	{
		name: "Patricia W.",
		rating: 4,
		text: "Good quality work on our exterior painting project. The team was friendly and cleaned up nicely afterwards. Would hire again for future projects.",
		date: "5 months ago",
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
