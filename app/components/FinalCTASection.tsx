export default function FinalCTASection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "var(--color-primary)", opacity: 0.95 }} />
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Ready to Transform Your Home?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white/90">
          Contact us today for a free consultation and estimate. Serving all of New York City and Westchester County.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+16463058546"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 bg-white"
            style={{ color: "var(--color-primary)" }}
          >
            Call Now: (646) 305-8546
          </a>
          <a
            href="mailto:info@ramafly.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 border-2 border-white text-white hover:bg-white hover:text-red-600"
          >
            Email Us
          </a>
        </div>
        <p className="mt-6 text-sm text-white/80">
          51 Inwood St, Westchester County, NY 10704 • Mon–Sun: 8am – 6pm
        </p>
      </div>
    </section>
  );
}