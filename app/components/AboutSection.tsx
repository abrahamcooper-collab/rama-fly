import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-bold tracking-widest uppercase mb-3 block" style={{ color: "var(--color-primary)" }}>
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-secondary)" }}>
              Trusted Construction Experts in New York
            </h2>
            <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: "var(--color-primary)" }} />
            <p className="text-gray-600 leading-relaxed mb-4">
              Rama Fly Construction Group LLC is a trusted remodeling and construction company serving Yonkers, Westchester County, and surrounding New York communities. We specialize in apartment renovations, kitchen remodeling, bathroom remodeling, custom millwork installation, flooring, painting, plastering, carpentry, and permit coordination.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our experienced team delivers high-quality craftsmanship, attention to detail, and professional project management for residential renovation projects of all sizes. Whether you're updating a single room or completing a full property renovation, we provide reliable construction solutions tailored to your needs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Licensed & Insured • 10+ Years of Experience • Free Estimates
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:gap-3"
              style={{ backgroundColor: "var(--color-primary)", color: "white" }}
            >
              Learn More About Us
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[400px]">
            <img
              src="/images/about-team.jpg"
              alt="Rama Fly Construction Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}