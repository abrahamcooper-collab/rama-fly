"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { business } from "../data/siteData";
import { projectImages } from "../data/imageRegistry";

// Select a curated mix of images for the homepage preview (max 16 for a 4-col grid)
const galleryImages = projectImages
  .filter((_, i) => i % 3 === 0 || projectImages[i].featured)
  .slice(0, 16)
  .map((img, i) => ({
    id: i,
    label: img.alt,
    category: img.categoryLabel,
    src: img.src,
  }));

export default function ViewOurWorkSection() {
  const { ref, revealed } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-20 sm:py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "var(--color-secondary)" }}>
            View Our Work
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            <p>
              At <strong style={{ color: "var(--color-primary)" }}><a href={business.gmbLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{business.name}</a></strong>, we take pride in transforming homes across Yonkers, NY, and the surrounding areas. From full apartment renovations and kitchen &amp; bathroom remodels to custom millwork, flooring, and painting, our projects reflect the quality, detail, and craftsmanship that homeowners trust us for.
            </p>
            <p>
              Check out our completed projects below to see why we are one of the most reliable apartment renovation and interior remodeling contractors in the New York metropolitan area.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className="group relative rounded-xl overflow-hidden aspect-square bg-gray-200 cursor-pointer"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <Image 
                src={img.src} 
                alt={img.label}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay that reveals project text */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
                <span
                  className="text-xs font-semibold tracking-wider uppercase mb-1"
                  style={{ color: "var(--color-accent-light, #fbbf24)" }}
                >
                  {img.category}
                </span>
                <span className="text-white text-xs font-medium leading-snug line-clamp-2">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

