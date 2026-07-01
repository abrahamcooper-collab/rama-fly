import Link from "next/link";
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
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary bg-red-50 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: "var(--color-primary)", backgroundColor: "rgba(192, 21, 26, 0.05)" }}
                >
                  <MapPin size={24} />
                </div>
                {/* Label */}
                <div className="font-semibold text-gray-800 group-hover:text-primary transition-colors text-sm sm:text-base">
                  {area.city}, {area.state}
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
