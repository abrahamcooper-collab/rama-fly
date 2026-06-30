import { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import ReviewsSection from "../components/ReviewsSection";
import CoreAreasSection from "../components/CoreAreasSection";
import WhyChooseUsFeatured from "../components/WhyChooseUsFeatured";
import GalleryGrid from "../components/GalleryGrid";
import BeforeAfter from "../components/BeforeAfter";
import { business } from "../data/siteData";
import { projectImages } from "../data/imageRegistry";

export const metadata: Metadata = {
	title: `Projects | ${business.name}`,
	description:
		"View our project gallery — real photos of apartment renovations, kitchen remodels, bathroom renovations, full home renovations, and custom millwork by Rama Fly Construction.",
};

// Use a featured kitchen image for the header background
const headerBgImage =
	projectImages.find((img) => img.category === "kitchen" && img.featured)?.src ??
	projectImages[0].src;

export default function GalleryPage() {
	return (
		<main className="flex-1">
			<PageHeader
				title="Our Projects"
				subtitle="See the quality of our work — real projects, real results"
				breadcrumb="Projects"
				bgImage={headerBgImage}
			/>

			<GalleryGrid />

			{/* Before & After Transformation */}
			<section className="py-20 px-6 bg-gray-50">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12 max-w-2xl mx-auto">
						<span
							className="text-sm font-bold tracking-widest uppercase mb-3 block"
							style={{ color: "var(--color-primary)" }}
						>
							Before &amp; After
						</span>
						<h2
							className="text-3xl sm:text-4xl font-bold mb-5"
							style={{ color: "var(--color-secondary)" }}
						>
							See the Transformation
						</h2>
						<p className="text-gray-600 leading-relaxed">
							Drag the slider to see how we turned this dated, worn-out bathroom
							into a bright, modern walk-in shower retreat — the kind of
							transformation we deliver across New York.
						</p>
					</div>
					<BeforeAfter />
				</div>
			</section>

			<CoreAreasSection />

			<WhyChooseUsFeatured />

			<ReviewsSection />
		</main>
	);
}

