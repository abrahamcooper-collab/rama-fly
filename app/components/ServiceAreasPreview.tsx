import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { serviceAreas } from "../data/siteData";

export default function ServiceAreasPreview() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold tracking-widest uppercase mb-3 block" style={{ color: "var(--color-primary)" }}>
            Service Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-secondary)" }}>
            Communities We Serve
          </h2>
          <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: "var(--color-primary)" }} />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Proudly providing quality construction services throughout New York City and Westchester County
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {serviceAreas.map((area, index) => (
            <Reveal key={area.slug} delay={(index % 4) * 100} className="h-full">
              <Link
                href={area.slug}
                className="group block h-full rounded-xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                {/* Image */}
                <div className="relative h-32 w-full overflow-hidden">
                  <Image
                    src={area.image}
                    alt={`${area.city}, ${area.state} service area`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <MapPin size={20} className="absolute bottom-2 right-2 text-white drop-shadow" />
                </div>
                {/* Label */}
                <div className="p-4 text-center">
                  <div className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    {area.city}, {area.state}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:gap-3"
            style={{ border: "2px solid var(--color-primary)", color: "var(--color-primary)" }}
          >
            View All Service Areas
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
