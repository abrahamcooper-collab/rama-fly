"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { projectImages, type ProjectImage } from "../data/imageRegistry";

/** Map a registry image to one of the five customer-facing project categories. */
function displayCategory(img: ProjectImage): string {
	switch (img.category) {
		case "kitchen":
			return "Kitchen Renovations";
		case "bathroom":
			return "Bathroom Renovations";
		case "closet":
		case "framing":
			return "Custom Millwork";
		case "renovation":
		default:
			return img.featured ? "Full Home Renovations" : "Apartment Renovations";
	}
}

const CATEGORIES = [
	"All Projects",
	"Apartment Renovations",
	"Kitchen Renovations",
	"Bathroom Renovations",
	"Full Home Renovations",
	"Custom Millwork",
];

const items = projectImages.map((img, i) => ({
	id: i,
	title: img.alt,
	src: img.src,
	category: displayCategory(img),
}));

export default function GalleryGrid() {
	const [active, setActive] = useState("All Projects");

	const visible =
		active === "All Projects"
			? items
			: items.filter((item) => item.category === active);

	return (
		<section className="py-20 px-6 bg-white">
			<div className="max-w-7xl mx-auto">
				{/* Category filters */}
				<div className="flex flex-wrap justify-center gap-3 mb-12">
					{CATEGORIES.map((cat) => {
						const isActive = cat === active;
						return (
							<button
								key={cat}
								onClick={() => setActive(cat)}
								className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
									isActive
										? "bg-gray-900 text-white"
										: "bg-gray-100 text-gray-600 hover:bg-gray-200"
								}`}
							>
								{cat}
							</button>
						);
					})}
				</div>

				{/* Gallery grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{visible.map((item, i) => (
						<Reveal key={item.id} delay={(i % 3) * 100}>
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
									<h3 className="text-white font-bold text-sm line-clamp-2">
										{item.title}
									</h3>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
