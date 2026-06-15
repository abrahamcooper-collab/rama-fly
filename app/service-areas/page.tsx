import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { serviceAreas, services, seoAreas } from "../data/siteData";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
	title: "Service Areas | DHA Construction LLC",
	description:
		"DHA Construction LLC proudly serves Whitewater, Madison, Milwaukee, Fort Atkinson, Janesville, and surrounding WI communities.",
};

export default function ServiceAreasPage() {
	return (
		<main className="flex-1">
			<PageHeader
				title="Service Areas"
				subtitle="Proudly serving communities across southeastern Wisconsin"
				bgImage="/images/components/house2.jpg"
			/>

			<section className="py-20 px-6 bg-white">
				<div className="max-w-5xl mx-auto">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						{serviceAreas.map((area, index) => (
							<Reveal key={area.slug} delay={(index % 3) * 120} className="h-full">
								<Link
									href={area.slug}
									className="group flex flex-col h-full bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:bg-white"
									style={{ boxShadow: "var(--shadow-sm)" }}
								>
									{/* Image */}
									<div className="relative h-48 w-full overflow-hidden">
										<Image
											src={area.image}
											alt={`${area.city}, ${area.state}`}
											fill
											sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
											className="object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
										<div
											className="absolute bottom-3 left-3 w-11 h-11 rounded-full flex items-center justify-center"
											style={{ backgroundColor: "var(--color-primary)", color: "white" }}
										>
											<MapPin size={20} />
										</div>
									</div>

									{/* Content */}
									<div className="p-8 text-center flex flex-col flex-1">
										<h3
											className="text-lg font-bold mb-1 group-hover:text-primary transition-colors"
											style={{ color: "var(--color-secondary)" }}
										>
											{area.city}, {area.state}
										</h3>
										<p className="text-sm text-gray-500 leading-relaxed mb-3 flex-1">
											{area.description.substring(0, 100)}...
										</p>
										<span
											className="text-sm font-semibold"
											style={{ color: "var(--color-primary)" }}
										>
											View Details →
										</span>
									</div>
								</Link>
							</Reveal>
						))}
					</div>

					{/* Other communities served (SEO) */}
					<div className="mb-20 text-center">
						<h2 className="text-xl font-bold mb-6 text-gray-400 uppercase tracking-widest text-sm">
							Also Serving
						</h2>
						<div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
							{seoAreas.map((city) => (
								<span
									key={city}
									className="px-4 py-1.5 bg-gray-100 text-gray-500 rounded-lg text-sm font-medium"
								>
									{city}, WI
								</span>
							))}
						</div>
					</div>

					{/* Services available in all areas */}
					<div className="text-center">
						<h2
							className="text-2xl font-bold mb-6"
							style={{ color: "var(--color-secondary)" }}
						>
							Services Available in All Areas
						</h2>
						<div className="flex flex-wrap justify-center gap-3">
							{services.map((s) => (
								<Link
									key={s.slug}
									href={s.slug}
									className="px-5 py-2 rounded-full text-sm font-medium border transition-colors hover:bg-primary hover:text-white hover:border-primary"
									style={{
										borderColor: "var(--color-gray-300)",
										color: "var(--color-secondary)",
									}}
								>
									{s.title}
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
