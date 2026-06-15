"use client";

import Link from "next/link";
import Image from "next/image";
import { services, business } from "../data/siteData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { cardImagePool } from "../data/siteData";

import PageHeader from "./PageHeader";
// Import all common homepage bottom components
import ServiceAreasPreview from "./ServiceAreasPreview";
import WhyChooseUsSection from "./WhyChooseUsSection";
import ViewOurWorkSection from "./ViewOurWorkSection";
import ReviewsSection from "./ReviewsSection";
import CoreAreasSection from "./CoreAreasSection";
import WhyChooseUsFeatured from "./WhyChooseUsFeatured";
import FullWidthMap from "./FullWidthMap";
import FinalCTASection from "./FinalCTASection";

type ServicePageProps = {
	serviceIndex: number;
};

// We don't use generateServicePageMetadata in a client component,
// the metadata is still generated in the page.tsx routes server-side
// because this component is only for the UI

export default function ServicePageTemplate({
	serviceIndex,
}: ServicePageProps) {
	const service = services[serviceIndex];
	const { ref: detailsRef, revealed: detailsRevealed } = useScrollReveal(0.1);
	const { ref: subservicesRef, revealed: subservicesRevealed } =
		useScrollReveal(0.1);

	return (
		<main className="flex-1 w-full bg-white">
			{/* 1. Hero Section with Background image & CTA */}
			<PageHeader
				title={service.title}
				subtitle={service.shortDesc}
				bgImage={service.image}
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
									background: `url('${service.image}') center/cover no-repeat, linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-gray-200) 100%)`,
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
										{service.title} Project
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
								Professional {service.title} Services
							</h2>
							<p className="text-gray-600 leading-relaxed mb-8">
								{service.longDesc} We proudly use the industry&apos;s leading
								materials and techniques to ensure your property remains
								protected, energy-efficient, and visually stunning. From minor
								repairs and maintenance to full-scale installations and
								emergency services, our licensed and insured contractors deliver
								high-quality craftsmanship designed to stand the test of time.
							</p>

							<div className="space-y-6 mb-10">
								{service.features.slice(0, 3).map((feature, index) => (
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
											{feature}
										</p>
									</div>
								))}
							</div>

							<Link
								href="/contact"
								className="inline-flex items-center px-8 py-4 rounded-full text-sm font-bold tracking-wider text-white transition-all duration-300 hover:scale-105 active:scale-[0.98]"
								style={{
									backgroundColor: "var(--color-secondary)",
									boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
								}}
							>
								REQUEST A QUOTE
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* 3. Subservices Grid */}
			<section ref={subservicesRef} className="py-20 px-6 bg-gray-50">
				<div className="max-w-7xl mx-auto">
					<div
						className={`text-center mb-16 transition-all duration-700 ${
							subservicesRevealed
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						<h2
							className="text-3xl sm:text-4xl font-bold mb-5"
							style={{ color: "var(--color-secondary)" }}
						>
							What Services We Offer In {service.title}?
						</h2>
						<p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
							<strong style={{ color: "var(--color-primary)" }}>
								<a href={business.gmbLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{business.name}</a>
							</strong>{" "}
							specializes in comprehensive {service.title.toLowerCase()}{" "}
							services to meet all your needs. Whether you&apos;re looking to
							repair a minor issue or undertake a complete home transformation,
							our specialized teams are ready to help.
						</p>
					</div>

					<div
						className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
							subservicesRevealed
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						{/* We will map over the features to create subservice cards */}
						{service.features.map((feature, i) => (
							<div
								key={i}
								className="bg-white rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
								style={{ boxShadow: "var(--shadow-md)" }}
							>
								{/* Subservice Image */}
									<div className="relative h-48 w-full overflow-hidden">
										<Image
											src={cardImagePool[i % cardImagePool.length]}
											alt={feature}
											fill
											sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
											className="object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
									</div>

									{/* Subservice Text Content */}
								<div className="p-8 text-center">
									<h3
										className="text-xl font-bold mb-3"
										style={{ color: "var(--color-secondary)" }}
									>
										{feature}
									</h3>
									<p className="text-sm text-gray-500 leading-relaxed mb-6">
										<strong style={{ color: "var(--color-primary)" }}>
											<a href={business.gmbLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{business.name}</a>
										</strong>{" "}
										offers industry-leading expertise in {feature.toLowerCase()}
										. Contact us today to ensure the safety, longevity, and
										quality of your property.
									</p>
									<Link
										href="/contact"
										className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors hover:gap-2"
										style={{ color: "var(--color-primary)" }}
									>
										View All Services
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
						))}
					</div>
				</div>
			</section>

			{/* 4. Common Bottom Components (Same as homepage, in order) */}
			<ServiceAreasPreview />

			{/* Note: The reference image puts reviews, view our work, map, CTA so we match the homepage exactly */}

			<WhyChooseUsSection />

			<ViewOurWorkSection />

			<CoreAreasSection />

				<WhyChooseUsFeatured />

				<ReviewsSection />

				<FullWidthMap />

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
