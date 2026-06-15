import { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ReviewsSection from "../components/ReviewsSection";
import { business } from "../data/siteData";

export const metadata: Metadata = {
	title: `Gallery | ${business.name}`,
	description:
		"View our project gallery — before & after photos of vinyl siding, soffit & fascia, window wrapping, door wrapping, exterior painting, and junk removal work.",
};

const categories = [
	"Vinyl Siding",
	"Soffit & Fascia",
	"Window Wrapping",
	"Door Wrapping",
	"Exterior Painting",
	"Junk Removal",
];

const rawImages = [
	"WhatsApp Image 2026-04-03 at 8.26.48 PM (1).jpeg",
	"WhatsApp Image 2026-04-03 at 8.26.48 PM (2).jpeg",
	"WhatsApp Image 2026-04-03 at 8.26.48 PM (3).jpeg",
	"WhatsApp Image 2026-04-03 at 8.26.48 PM.jpeg",
	"WhatsApp Image 2026-04-03 at 8.26.49 PM (1).jpeg",
	"WhatsApp Image 2026-04-03 at 8.26.49 PM (2).jpeg",
	"WhatsApp Image 2026-04-03 at 8.26.49 PM (3).jpeg",
	"WhatsApp Image 2026-04-03 at 8.26.49 PM (4).jpeg",
	"WhatsApp Image 2026-04-03 at 8.26.49 PM.jpeg",
	"WhatsApp Image 2026-04-03 at 8.26.50 PM (1).jpeg",
	"WhatsApp Image 2026-04-03 at 8.26.50 PM (2).jpeg",
	"WhatsApp Image 2026-04-03 at 8.26.50 PM.jpeg",
	"WhatsApp Image 2026-04-03 at 8.26.51 PM (1).jpeg",
	"WhatsApp Image 2026-04-03 at 8.26.51 PM.jpeg",
	"WhatsApp Image 2026-04-03 at 8.26.52 PM (1).jpeg",
	"WhatsApp Image 2026-04-03 at 8.26.52 PM (2).jpeg",
	"WhatsApp Image 2026-04-03 at 8.26.52 PM.jpeg",
];

const galleryItems = rawImages.map((filename, i) => ({
	id: i,
	title: `Project Showcase ${i + 1}`,
	category: categories[i % categories.length],
	src: `/images/gallery/${filename}`,
}));

export default function GalleryPage() {
	return (
		<main className="flex-1">
			<PageHeader
				title="Our Gallery"
				subtitle="See the quality of our work — real projects, real results"
				breadcrumb="Gallery"
				bgImage="/images/gallery/WhatsApp Image 2026-04-03 at 8.26.49 PM.jpeg"
			/>

			<section className="py-20 px-6 bg-white">
				<div className="max-w-7xl mx-auto">
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
										<h3 className="text-white font-bold text-sm">{item.title}</h3>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<ReviewsSection />
		</main>
	);
}
