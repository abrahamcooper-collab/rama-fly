import Link from "next/link";
import CTASection from "./components/CTASection";
import TrustBar from "./components/TrustBar";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ServiceAreasPreview from "./components/ServiceAreasPreview";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ViewOurWorkSection from "./components/ViewOurWorkSection";
import ReviewsSection from "./components/ReviewsSection";
import CoreAreasSection from "./components/CoreAreasSection";
import WhyChooseUsFeatured from "./components/WhyChooseUsFeatured";
import FullWidthMap from "./components/FullWidthMap";
import FinalCTASection from "./components/FinalCTASection";
import { business } from "./data/siteData";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Hero Image for > 1834px */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/kitchen_khegdc.png"
          alt="Luxury kitchen renovation by Rama Fly Construction Group LLC"
          className="hidden min-[1835px]:block absolute inset-0 w-full h-full object-cover object-center -z-10"
        />

        {/* Hero Content for <= 1834px */}
        <div className="block min-[1835px]:hidden relative w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/kitchen_khegdc.png"
            alt="Luxury kitchen renovation by Rama Fly Construction Group LLC"
            className="absolute inset-0 w-full h-full object-cover object-center -z-10"
          />
          {/* Light Black Overlay */}
          <div className="absolute inset-0 bg-black/50 z-0"></div>

          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
            <a href={business.gmbLink} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-5 drop-shadow-md transition-colors">
              Rama Fly Construction Group LLC
            </a>
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 max-w-5xl drop-shadow-lg leading-tight">
              Expert Apartment Renovations &amp; Remodeling in New York
            </h1>
            <p className="text-white/95 text-base sm:text-xl md:text-2xl font-medium mb-7 sm:mb-10 max-w-3xl drop-shadow-md">
              Serving Manhattan, Brooklyn, Queens and Westchester Since 2006.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="tel:+16463058546"
                className="inline-flex items-center gap-2 px-7 py-3.5 md:px-9 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold tracking-wide transition-all duration-300 hover:scale-105 active:scale-[0.97]"
                style={{ backgroundColor: "var(--color-primary)", color: "white", boxShadow: "0 10px 25px rgba(192, 21, 26, 0.3)" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                Call Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 md:px-9 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold tracking-wide bg-white text-gray-900 transition-all duration-300 hover:scale-105 active:scale-[0.97]"
              >
                Request a Free Estimate
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-7 py-3.5 md:px-9 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold tracking-wide border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-gray-900 active:scale-[0.97]"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTASection />

      {/* Trust / Credibility Bar */}
      <TrustBar />

      {/* Our Services */}
      <ServicesSection />

      {/* About Us */}
      <AboutSection />

      {/* Service Areas */}
      <ServiceAreasPreview />
      
      {/* Why Choose Us */}
      <WhyChooseUsSection />
      
      {/* View Our Work */}
      <ViewOurWorkSection />

      {/* Core Areas We Serve */}
      <CoreAreasSection />

      {/* Why Choose Us (featured) */}
      <WhyChooseUsFeatured />

      {/* Customer Reviews */}
      <ReviewsSection />

      {/* Full Width Map */}
      <FullWidthMap />

      {/* Final Overlapping CTA */}
      <FinalCTASection />
    </main>
  );
}