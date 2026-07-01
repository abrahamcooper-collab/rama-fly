import { Metadata } from "next";
import {
	Hammer,
	Handshake,
	Clock,
	ShieldCheck,
	BadgeDollarSign,
	Home,
	Building2,
	PaintRoller,
	UtensilsCrossed,
	ShowerHead,
	Ruler,
	Layers,
	Wrench,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { cardImagePool, business } from "../data/siteData";
import { FormatBusinessName } from "../components/FormatText";
import ReviewsSection from "../components/ReviewsSection";
import CoreAreasSection from "../components/CoreAreasSection";
import WhyChooseUsFeatured from "../components/WhyChooseUsFeatured";

export const metadata: Metadata = {
	title: "About Us | Rama Fly Construction Group LLC",
	description:
		"Learn about Rama Fly Construction Group LLC — your trusted apartment renovation and interior remodeling company. Licensed, insured, and serving New York since 2006 with nearly 20 years of experience in apartment renovations, kitchen remodeling, and more.",
};

export default function AboutPage() {
	return (
		<main className="flex-1">
			<PageHeader
				title="About Us"
				subtitle="Get to know the team behind Rama Fly Construction Group LLC"
				breadcrumb="About"
				bgImage="/images/projects/renovation/renovation-3.jpg"
			/>

			{/* Owner Introduction */}
			<section className="py-16 sm:py-20 px-6 bg-gray-50">
				<div className="max-w-3xl mx-auto text-center">
					<Reveal>
						<span
							className="text-sm font-bold tracking-widest uppercase mb-3 block"
							style={{ color: "var(--color-primary)" }}
						>
							Meet the Owner
						</span>
						<h2
							className="text-3xl font-bold mb-5"
							style={{ color: "var(--color-secondary)" }}
						>
							Hi, I&apos;m Sam Rama
						</h2>
						<p className="text-gray-600 leading-relaxed text-lg mb-6">
							&ldquo;Hi, I&apos;m Sam Rama, owner of Rama Fly Construction
							Group LLC. Since 2006, we have proudly helped homeowners
							throughout New York transform their homes through quality
							craftsmanship and honest service.&rdquo;
						</p>
						<a
							href="mailto:sam@ramafly.com"
							className="inline-flex items-center gap-2 font-semibold transition-colors hover:gap-3"
							style={{ color: "var(--color-primary)" }}
						>
							sam@ramafly.com
							<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg>
						</a>
					</Reveal>
				</div>
			</section>

			<section className="py-20 px-6 bg-white">
				<div className="max-w-5xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						{/* Image placeholder */}
						<div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
							<Image
								src="/images/projects/renovation/renovation-29.jpg"
								alt="About Us"
								fill
								className="object-cover"
							/>
						</div>

						{/* Story */}
						<div>
							<span
								className="text-sm font-bold tracking-widest uppercase mb-3 block"
								style={{ color: "var(--color-primary)" }}
							>
								Our Story
							</span>
							<h2
								className="text-3xl font-bold mb-6"
								style={{ color: "var(--color-secondary)" }}
							>
								Built on Quality Craftsmanship &amp; Trust
							</h2>
							<div
								className="w-16 h-1 rounded-full mb-6"
								style={{ backgroundColor: "var(--color-primary)" }}
							/>
							<p className="text-gray-600 leading-relaxed mb-4">
								<FormatBusinessName text="Rama Fly Construction Group LLC is a trusted remodeling and construction company serving Manhattan, Brooklyn, Queens, Westchester County, and surrounding New York communities. We specialize in apartment renovations, kitchen remodeling, bathroom remodeling, custom millwork installation, flooring, painting, plastering, carpentry, and permit coordination." />
							</p>
							<p className="text-gray-600 leading-relaxed mb-4">
								Our experienced team delivers high-quality craftsmanship, 
								attention to detail, and professional project management for 
								residential renovation projects of all sizes. Whether you're 
								updating a single room or completing a full property renovation, 
								we provide reliable construction solutions tailored to your needs.
							</p>
							<p className="text-gray-600 leading-relaxed">
								We believe your home deserves the best — premium materials, 
								expert installation, and a team that treats your property like 
								their own. From initial consultation to final walkthrough, 
								we're committed to exceeding your expectations.
							</p>
						</div>
					</div>

					{/* Our Services Section */}
					<div className="mt-20">
						<h2
							className="text-3xl font-bold text-center mb-4"
							style={{ color: "var(--color-secondary)" }}
						>
							Our Core Services
						</h2>
						<p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
							We specialize in transforming spaces across Manhattan, Brooklyn, Queens, and all of Westchester County
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
							{[
								{
									Icon: Building2,
									title: "Apartment Renovation",
									desc: "Full apartment renovations, condo renovations, interior remodeling, property renovations, room additions, open concept remodeling, and luxury upgrades.",
									link: "/services/apartment-renovation",
								},
								{
									Icon: UtensilsCrossed,
									title: "Kitchen Remodeling",
									desc: "Custom kitchen design, cabinet installation, countertop installation, backsplash installation, lighting upgrades, and complete kitchen renovations.",
									link: "/services/kitchen-remodeling",
								},
								{
									Icon: ShowerHead,
									title: "Bathroom Remodeling",
									desc: "Bathroom renovations, walk-in shower installation, tile installation, vanity installation, flooring, and luxury bathroom remodeling.",
									link: "/services/bathroom-remodeling",
								},
								{
									Icon: Home,
									title: "Full Interior Renovation",
									desc: "Whole-home gut renovations, layout redesigns, pre-war restorations, apartment combinations, and turnkey interior build-outs.",
									link: "/services/full-interior-renovation",
								},
								{
									Icon: Ruler,
									title: "Custom Millwork",
									desc: "Custom built-ins, crown molding installation, baseboard installation, custom shelving, trim carpentry, and finish carpentry.",
									link: "/services/custom-millwork",
								},
								{
									Icon: Layers,
									title: "Flooring",
									desc: "Hardwood, engineered wood, luxury vinyl plank, and tile flooring installation, refinishing, and subfloor preparation.",
									link: "/services/flooring",
								},
								{
									Icon: PaintRoller,
									title: "Painting & Plaster",
									desc: "Interior painting, plastering services, drywall repair, wall finishing, ceiling repairs, texture matching, and trim painting.",
									link: "/services/interior-painting",
								},
								{
									Icon: Wrench,
									title: "Electrical & Plumbing Coordination",
									desc: "Licensed electrician and plumber coordination, panel and wiring upgrades, fixture installs, permits, and code compliance.",
									link: "/services/electrical-plumbing-coordination",
								},
							].map((service, idx) => (
								<Reveal key={service.title} delay={(idx % 3) * 100} className="h-full">
									<Link href={service.link} className="block h-full">
										<div
											className="h-full bg-gray-50 rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 cursor-pointer group"
											style={{ boxShadow: "var(--shadow-sm)" }}
										>
											{/* Image */}
											<div className="relative h-44 w-full overflow-hidden">
												<Image
													src={cardImagePool[idx % cardImagePool.length]}
													alt={service.title}
													fill
													sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
													className="object-cover transition-transform duration-500 group-hover:scale-110"
												/>
												<div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent" />
												<div
													className="absolute bottom-3 left-3 inline-flex items-center justify-center p-2.5 rounded-full bg-white shadow-sm"
													style={{ color: "var(--color-primary)" }}
												>
													<service.Icon size={24} strokeWidth={1.5} />
												</div>
											</div>
											{/* Content */}
											<div className="p-6 text-center">
												<h3
													className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-red-600"
													style={{ color: "var(--color-secondary)" }}
												>
													{service.title}
												</h3>
												<p className="text-sm text-gray-500 leading-relaxed">
													{service.desc}
												</p>
											</div>
										</div>
									</Link>
								</Reveal>
							))}
						</div>
					</div>

					{/* Values */}
					<div className="mt-20">
						<h2
							className="text-3xl font-bold text-center mb-12"
							style={{ color: "var(--color-secondary)" }}
						>
							Our Values
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
							{[
								{
									Icon: Hammer,
									title: "Quality Craftsmanship",
									desc: "We never cut corners. Every project meets the highest standards of workmanship with attention to every detail.",
								},
								{
									Icon: Handshake,
									title: "Honesty & Integrity",
									desc: "Transparent pricing, honest advice, and doing what we say we'll do — every time, no exceptions.",
								},
								{
									Icon: Clock,
									title: "Reliability",
									desc: "We show up on time, stick to the schedule, and communicate every step of the way from start to finish.",
								},
								{
									Icon: ShieldCheck,
									title: "Licensed & Insured",
									desc: "Full licensing and insurance for your peace of mind on every project, big or small.",
								},
								{
									Icon: BadgeDollarSign,
									title: "Fair Pricing",
									desc: "Competitive rates without sacrificing quality. Free estimates on all projects with no hidden fees.",
								},
								{
									Icon: Home,
									title: "Community Focused",
									desc: "Proudly serving Manhattan, Brooklyn, Queens, Bronx, and all of Westchester County.",
								},
							].map((v, idx) => (
								<Reveal key={v.title} delay={(idx % 3) * 100} className="h-full">
									<div
										className="h-full bg-gray-50 rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 group"
										style={{ boxShadow: "var(--shadow-sm)" }}
									>
										{/* Image */}
										<div className="relative h-44 w-full overflow-hidden">
											<Image
												src={cardImagePool[(idx + 4) % cardImagePool.length]}
												alt={v.title}
												fill
												sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
												className="object-cover transition-transform duration-500 group-hover:scale-110"
											/>
											<div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent" />
											<div
												className="absolute bottom-3 left-3 inline-flex items-center justify-center p-2.5 rounded-full bg-white shadow-sm"
												style={{ color: "var(--color-primary)" }}
											>
												<v.Icon size={24} strokeWidth={1.5} />
											</div>
										</div>
										{/* Content */}
										<div className="p-6 text-center">
											<h3
												className="font-bold text-lg mb-2"
												style={{ color: "var(--color-secondary)" }}
											>
												{v.title}
											</h3>
											<p className="text-sm text-gray-500 leading-relaxed">
												{v.desc}
											</p>
										</div>
									</div>
								</Reveal>
							))}
						</div>
					</div>

					{/* Service Areas Section */}
					<div className="mt-20 bg-gray-50 rounded-2xl p-8">
						<h2
							className="text-3xl font-bold text-center mb-4"
							style={{ color: "var(--color-secondary)" }}
						>
							Service Areas
						</h2>
						<p className="text-center text-gray-600 mb-8">
							Proudly serving these New York communities
						</p>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
							{[
								"Manhattan, NY",
								"Brooklyn, NY",
								"Queens, NY",
								"Westchester County, NY",
								"White Plains, NY",
								"Bronx, NY",
								"Mount Vernon, NY",
								"New Rochelle, NY",
								"Scarsdale, NY",
								"New York City, NY",
								"Staten Island, NY",
								"Bronxville, NY",
								"Rye, NY",
								"Mamaroneck, NY",
								"Larchmont, NY",
							].map((area) => (
								<div
									key={area}
									className="flex items-center gap-2 text-gray-700 text-sm"
								>
									<div
										className="w-1.5 h-1.5 rounded-full"
										style={{ backgroundColor: "var(--color-primary)" }}
									/>
									{area}
								</div>
							))}
						</div>
					</div>

					{/* Contact Info Section */}
					<Reveal className="mt-12 text-center">
						<div
							className="inline-flex flex-col items-center p-8 rounded-2xl bg-white"
							style={{ boxShadow: "var(--shadow-lg)" }}
						>
							<h3 className="text-2xl font-bold mb-4" style={{ color: "var(--color-secondary)" }}>
								Ready to Start Your Project?
							</h3>
							<p className="text-gray-600 mb-6">
								Contact us today for a free consultation and estimate
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<a
									href="tel:+16463058546"
									className="px-6 py-3 rounded-full font-bold transition-all duration-200 hover:opacity-90 hover:scale-105"
									style={{
										backgroundColor: "var(--color-primary)",
										color: "white",
									}}
								>
									Call Now: (646) 305-8546
								</a>
								<a
									href="mailto:info@ramafly.com"
									className="px-6 py-3 rounded-full font-bold transition-all duration-200 border-2 hover:scale-105"
									style={{
										borderColor: "var(--color-primary)",
										color: "var(--color-primary)",
									}}
								>
									Email Us
								</a>
							</div>
						</div>
					</Reveal>
				</div>
			</section>

			<CoreAreasSection />

			<WhyChooseUsFeatured />

			<ReviewsSection />
		</main>
	);
}