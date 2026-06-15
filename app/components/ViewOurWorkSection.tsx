"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { business } from "../data/siteData";

const galleryImages = [
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
].map((filename, i) => ({
  id: i,
  label: `Portfolio Project ${i + 1}`,
  src: `/images/gallery/${filename}`,
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
              At <strong style={{ color: "var(--color-primary)" }}><a href={business.gmbLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{business.name}</a></strong>, we take pride in transforming homes across Yonkers, NY, and the surrounding areas. From vinyl siding installations to window and door wrapping and exterior painting, our projects reflect the quality, durability, and craftsmanship that homeowners trust us for.
            </p>
            <p>
              Check out our completed jobs below to see why we are one of the most reliable exterior construction contractors in the New York metropolitan area.
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
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-semibold uppercase tracking-wider">
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
