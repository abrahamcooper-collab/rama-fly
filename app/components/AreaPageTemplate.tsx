"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { serviceAreas, services, business } from "../data/siteData";
import { FormatBusinessName } from "./FormatText";

import PageHeader from "./PageHeader";
import WhyChooseUsSection from "./WhyChooseUsSection";
import ViewOurWorkSection from "./ViewOurWorkSection";
import ReviewsSection from "./ReviewsSection";
import CoreAreasSection from "./CoreAreasSection";
import WhyChooseUsFeatured from "./WhyChooseUsFeatured";
import FinalCTASection from "./FinalCTASection";

type AreaPageProps = {
	areaIndex: number;
};

export default function AreaPageTemplate({ areaIndex }: AreaPageProps) {
	const area = serviceAreas[areaIndex];

	const { ref: detailsRef, revealed: detailsRevealed } = useScrollReveal(0.1);
	const { ref: servicesRef, revealed: servicesRevealed } = useScrollReveal(0.1);

	return (
		<main className="flex-1 w-full bg-white">
			{/* 1. Hero Section (Same style as Service Page) */}
			<PageHeader
				title={`Apartment Renovation & Interior Remodeling in ${area.city}, ${area.state}`}
				subtitle={`Professional apartment renovations, kitchen & bathroom remodeling, custom millwork, and full interior renovation services for ${area.city} homeowners.`}
				bgImage={area.image}
			/>

			{/* 2. Details Component (Image Left, Text Right) */}
			<section ref={detailsRef} className="py-20 sm:py-28 px-6 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						{/* Image Block */}
						<div
							className={`relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-gray-200 transition-all duration-700 ${
								detailsRevealed
									? "opacity-100 translate-x-0"
									: "opacity-0 -translate-x-10"
							}`}
							style={{ boxShadow: "var(--shadow-lg)" }}
						>
							<div
								className="absolute inset-0 flex items-center justify-center transition-transform duration-500 hover:scale-105"
								style={{
									background: `url('${area.image}') center/cover no-repeat, linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-gray-200) 100%)`,
									backgroundBlendMode: "overlay",
								}}
							>
								<div className="text-center p-6 text-white drop-shadow-md bg-black/30 rounded-lg backdrop-blur-sm">
									<svg
										width="48"
										height="48"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										className="mx-auto mb-3"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
										/>
									</svg>
									<p className="text-sm font-semibold tracking-wider uppercase">
										{area.city} House Project
									</p>
								</div>
							</div>
						</div>

						{/* Text Block */}
						<div
							className={`transition-all duration-700 delay-200 ${
								detailsRevealed
									? "opacity-100 translate-x-0"
									: "opacity-0 translate-x-10"
							}`}
						>
							<h2
								className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
								style={{ color: "var(--color-secondary)" }}
							>
								Apartment Renovation &amp; Interior Remodeling in {area.city},{" "}
								{area.state}
							</h2>
							<p className="text-gray-600 leading-relaxed mb-8">
								At{" "}
								<strong style={{ color: "var(--color-secondary)" }}>
									<a href={business.gmbLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{business.name}</a>
								</strong>{" "}
								we are proud to serve homeowners in{" "}
								<strong style={{ color: "var(--color-secondary)" }}>
									{area.city}, {area.state}
								</strong>
								, with top-quality
								<strong style={{ color: "var(--color-secondary)" }}>
									{" "}
									apartment renovations, kitchen &amp; bathroom remodeling,
									custom millwork, and full interior renovation services
								</strong>
								. From complete gut renovations and layout redesigns to custom
								cabinetry, flooring, and flawless finishes, our skilled team
								transforms your space into a beautiful, functional home.{" "}
								<FormatBusinessName text={area.description} />
							</p>

							<div className="space-y-6 mb-10">
								{area.highlights.map((highlight, index) => (
									<div key={index} className="flex gap-4 items-start">
										<div
											className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white"
											style={{ backgroundColor: "#4FB0DF" }}
										>
											<svg
												width="12"
												height="12"
												fill="none"
												stroke="currentColor"
												strokeWidth="3"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M4.5 12h15m0 0l-6-6m6 6l-6 6"
												/>
											</svg>
										</div>
										<p className="text-gray-600 leading-relaxed text-sm sm:text-base">
											{highlight}
										</p>
									</div>
								))}
							</div>

							<Link
								href="/services"
								className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-wider text-white transition-all duration-300 hover:scale-105 active:scale-[0.98]"
								style={{
									backgroundColor: "var(--color-secondary)",
									boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
								}}
							>
								EXPLORE OUR SERVICES
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* 3. Services Grid */}
			<section ref={servicesRef} className="py-20 sm:py-28 px-6 bg-gray-50">
				<div className="max-w-7xl mx-auto">
					<div
						className={`text-center mb-16 transition-all duration-700 ${
							servicesRevealed
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						<h2
							className="text-3xl sm:text-4xl font-bold mb-5"
							style={{ color: "var(--color-secondary)" }}
						>
							What Services We Offer In {area.city}?
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
							Explore our comprehensive range of interior renovation and remodeling services
							tailored specifically for {area.city} homes and businesses.
						</p>
					</div>

					<div
						className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
							servicesRevealed
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						{services.map((svc, i) => {
							const Icon = svc.icon as React.ElementType;
							return (
								<div
									key={svc.slug}
									className="bg-white rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
									style={{ boxShadow: "var(--shadow-md)" }}
								>
									{/* Service Image */}
									<div className="relative h-56 w-full overflow-hidden">
										<Image
											src={svc.image}
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

									{/* Service Text Content */}
									<div className="p-8 text-center">
										<h3
											className="text-xl font-bold mb-3"
											style={{ color: "var(--color-secondary)" }}
										>
											{svc.title}
										</h3>
										<p className="text-sm text-gray-500 leading-relaxed mb-6">
											{svc.shortDesc}
										</p>
										<Link
											href={svc.slug}
											className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors hover:gap-2"
											style={{ color: "var(--color-primary)" }}
										>
											View Details
											<svg
												width="14"
												height="14"
												fill="none"
												stroke="currentColor"
												strokeWidth="2.5"
												viewBox="0 0 24 24"
												className="transition-transform group-hover:translate-x-1"
											>
												<path
													d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* 4. Common Bottom Components (Same as homepage, but NO Map) */}

			<WhyChooseUsSection />

			<ViewOurWorkSection />

			<CoreAreasSection />

				<WhyChooseUsFeatured />

				<ReviewsSection />

				<FinalCTASection />

			<style jsx global>{`
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fade-in-up {
					animation: fadeInUp 0.8s ease-out forwards;
				}
			`}</style>
		</main>
	);
}
