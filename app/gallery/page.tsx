import { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import ReviewsSection from "../components/ReviewsSection";
import CoreAreasSection from "../components/CoreAreasSection";
import WhyChooseUsFeatured from "../components/WhyChooseUsFeatured";
import GalleryGrid from "../components/GalleryGrid";
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

			<CoreAreasSection />

			<WhyChooseUsFeatured />

			<ReviewsSection />
		</main>
	);
}

