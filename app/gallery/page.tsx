import { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ReviewsSection from "../components/ReviewsSection";
import CoreAreasSection from "../components/CoreAreasSection";
import WhyChooseUsFeatured from "../components/WhyChooseUsFeatured";
import { business } from "../data/siteData";
import { projectImages, getCategories } from "../data/imageRegistry";

export const metadata: Metadata = {
	title: `Gallery | ${business.name}`,
	description:
		"View our project gallery — real photos of kitchen remodels, bathroom renovations, custom closets, framing, and full apartment gut renovations by Rama Fly Construction.",
};

const categories = getCategories();

const galleryItems = projectImages.map((img, i) => ({
	id: i,
	title: img.alt,
	category: img.categoryLabel,
	src: img.src,
}));

// Use a featured renovation image for the header background
const headerBgImage =
	projectImages.find((img) => img.category === "kitchen" && img.featured)?.src ??
	projectImages[0].src;

export default function GalleryPage() {
	return (
		<main className="flex-1">
			<PageHeader
				title="Our Gallery"
				subtitle="See the quality of our work — real projects, real results"
				breadcrumb="Gallery"
				bgImage={headerBgImage}
			/>

			<section className="py-20 px-6 bg-white">
				<div className="max-w-7xl mx-auto">
					{/* Category pills (decorative — all images shown) */}
					<Reveal>
						<div className="flex flex-wrap justify-center gap-3 mb-12">
							<span className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gray-900 text-white">
								All Projects
							</span>
							{categories.map((cat) => (
								<span
									key={cat.value}
									className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-600"
								>
									{cat.label}
								</span>
							))}
						</div>
					</Reveal>

					{/* Gallery grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{galleryItems.map((item, i) => (
							<Reveal key={i} delay={(i % 3) * 100}>
								<div
									className="group relative rounded-2xl overflow-hidden aspect-4/3 cursor-pointer"
									style={{ boxShadow: "var(--shadow-md)" }}
								>
									<Image
										src={item.src}
										alt={item.title}
										fill
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
										className="object-cover transition-transform duration-500 group-hover:scale-110"
									/>

									{/* Hover overlay */}
									<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
										<span
											className="text-xs font-semibold tracking-wider uppercase mb-1"
											style={{ color: "var(--color-accent-light)" }}
										>
											{item.category}
										</span>
										<h3 className="text-white font-bold text-sm line-clamp-2">{item.title}</h3>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<CoreAreasSection />

			<WhyChooseUsFeatured />

			<ReviewsSection />
		</main>
	);
}

