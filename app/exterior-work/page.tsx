import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Home, Wrench, AppWindow, DoorClosed, Trash2, PaintRoller, CheckCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CoreAreasSection from "../components/CoreAreasSection";
import ReviewsSection from "../components/ReviewsSection";
import FinalCTASection from "../components/FinalCTASection";
import { business, cardImagePool } from "../data/siteData";

export const metadata: Metadata = {
	title: `Additional Exterior Services | ${business.name}`,
	description: `Although we specialize in apartment renovations and interior remodeling, ${business.name} also takes on select exterior projects in NYC, Westchester County, and the surrounding areas — siding, soffit & fascia, window & door wrapping, exterior painting, and renovation cleanup.`,
};

const exteriorServices = [
	{
		icon: Home,
		title: "Vinyl & Fiber Cement Siding",
		desc: "Siding installation, repair, and replacement to protect and refresh your home's exterior.",
	},
	{
		icon: Wrench,
		title: "Soffit & Fascia",
		desc: "Soffit and fascia installation and repair for proper ventilation and a clean, finished roofline.",
	},
	{
		icon: AppWindow,
		title: "Window Wrapping & Trim",
		desc: "Exterior aluminum window capping and trim wrapping that eliminates painting and prevents wood rot.",
	},
	{
		icon: DoorClosed,
		title: "Door Wrapping & Entryways",
		desc: "Precision-fit door wrapping and entryway upgrades for a weatherproof, polished appearance.",
	},
	{
		icon: PaintRoller,
		title: "Exterior Painting",
		desc: "Exterior house, trim, and siding painting for a fresh, well-protected, and lasting finish.",
	},
	{
		icon: Trash2,
		title: "Junk Removal & Cleanup",
		desc: "Dump trailer service and debris removal for renovation cleanups and property cleanouts.",
	},
];

export default function ExteriorWorkPage() {
	return (
		<main className="flex-1 w-full bg-white">
			<PageHeader
				title="Additional Exterior Services"
				subtitle="We're interior specialists first — but we also take on select exterior projects for our New York clients."
				breadcrumb="Additional Exterior Services"
				bgImage="/images/projects/framing/framing-2.jpg"
			/>

			<section className="py-20 px-6 bg-white">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<span
						className="text-sm font-bold tracking-widest uppercase mb-3 block"
						style={{ color: "var(--color-primary)" }}
					>
						Additional Exterior Services
					</span>
					<h2
						className="text-3xl sm:text-4xl font-bold mb-5"
						style={{ color: "var(--color-secondary)" }}
					>
						Exterior Projects, On Request
					</h2>
					<p className="text-gray-600 leading-relaxed">
						The vast majority of our work is interior — apartment renovations,
						kitchens, bathrooms, and full interior remodels. That said, for
						existing clients and select projects across Westchester County and the NYC
						metro area, we also handle the exterior services below. Reach out and
						we&apos;ll let you know if we&apos;re the right fit for your project.
					</p>
				</div>

				<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{exteriorServices.map((svc, i) => {
						const Icon = svc.icon;
						return (
							<Reveal key={svc.title} delay={(i % 3) * 100} className="h-full">
								<div
									className="h-full bg-gray-50 rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
									style={{ boxShadow: "var(--shadow-md)" }}
								>
									<div className="relative h-48 w-full overflow-hidden">
										<Image
											src={cardImagePool[i % cardImagePool.length]}
											alt={svc.title}
											fill
											sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
											className="object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent" />
										<div
											className="absolute bottom-3 left-3 inline-flex p-2.5 rounded-full text-white"
											style={{ backgroundColor: "var(--color-primary)" }}
										>
											<Icon size={24} strokeWidth={1.5} />
										</div>
									</div>
									<div className="p-8 text-center">
										<h3
											className="text-xl font-bold mb-3"
											style={{ color: "var(--color-secondary)" }}
										>
											{svc.title}
										</h3>
										<p className="text-sm text-gray-500 leading-relaxed">
											{svc.desc}
										</p>
									</div>
								</div>
							</Reveal>
						);
					})}

					{/* CTA card */}
					<Reveal delay={200} className="h-full">
						<div
							className="h-full rounded-2xl p-8 flex flex-col items-center justify-center text-center text-white"
							style={{ backgroundColor: "var(--color-primary)" }}
						>
							<CheckCircle size={36} className="mb-4" />
							<h3 className="text-xl font-bold mb-2">Have an exterior project?</h3>
							<p className="text-white/90 text-sm mb-6">
								Tell us what you need and we&apos;ll let you know how we can help.
							</p>
							<Link
								href="/contact"
								className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold tracking-wide bg-white transition-transform hover:scale-105"
								style={{ color: "var(--color-primary)" }}
							>
								REQUEST A QUOTE
							</Link>
						</div>
					</Reveal>
				</div>
			</section>

			<CoreAreasSection />
			<ReviewsSection />
			<FinalCTASection />
		</main>
	);
}
