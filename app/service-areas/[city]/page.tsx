import { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceAreas, services, business } from "../../data/siteData";
import { ElementType } from "react";
import Link from "next/link";
import CTASection from "../../components/CTASection";
import PageHeader from "../../components/PageHeader";

type Props = {
	params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
	return serviceAreas.map((area) => ({
		city: area.slug.replace("/service-areas/", ""),
	}));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const resolvedParams = await params;
	const area = serviceAreas.find(
		(a) => a.slug === `/service-areas/${resolvedParams.city}`,
	);
	if (!area) return {};

	return {
		title: `Exterior Contractor & Siding in ${area.city}, WI | DHA Construction`,
		description: area.description,
	};
}

export default async function ServiceAreaCityPage({ params }: Props) {
	const resolvedParams = await params;
	const area = serviceAreas.find(
		(a) => a.slug === `/service-areas/${resolvedParams.city}`,
	);

	if (!area) {
		notFound();
	}

	return (
		<main className="flex-1 w-full bg-white">
			<PageHeader
				breadcrumb={area.city}
				title={`${area.city} Exterior Services`}
				subtitle={`Trusted siding, painting, and construction in ${area.city}, WI`}
				bgImage={area.image}
			/>

			<section className="py-20 px-6 max-w-5xl mx-auto text-center">
				<h2
					className="text-3xl sm:text-4xl font-bold mb-6"
					style={{ color: "var(--color-secondary)" }}
				>
					Professional Construction &amp; Remodeling in {area.city}
				</h2>
				<p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
					{area.description} At <strong>{business.name}</strong>, we are deeply
					committed to providing the highest quality contractor services across
					the {area.city} community. Browse our full suite of local services
					below.
				</p>
			</section>

			{/* Services Available in this Area */}
			<section className="py-20 px-6 bg-gray-50">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2
							className="text-3xl font-bold mb-5"
							style={{ color: "var(--color-secondary)" }}
						>
							Services We Offer in {area.city}
						</h2>
						<div className="w-16 h-1 mx-auto rounded-full bg-primary" />
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service, i) => {
							const Icon = service.icon as ElementType;
							return (
								<div
									key={i}
									className="bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300"
									style={{ boxShadow: "var(--shadow-md)" }}
								>
									<div
										className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
										style={{
											backgroundColor: "var(--color-primary-50)",
											color: "var(--color-primary)",
										}}
									>
										<Icon size={28} strokeWidth={1.5} />
									</div>
									<h3
										className="text-xl font-bold mb-3"
										style={{ color: "var(--color-secondary)" }}
									>
										{service.title}
									</h3>
									<p className="text-sm text-gray-600 leading-relaxed mb-6">
										{service.shortDesc} We are the top choice for{" "}
										{service.title.toLowerCase()} in {area.city}, {area.state}.
									</p>
									<Link
										href={service.slug}
										className="text-primary text-sm font-semibold hover:underline"
									>
										Learn More →
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<CTASection />
		</main>
	);
}
