export default function CTASection() {
  return (
    <section className="py-12 px-6" style={{ backgroundColor: "var(--color-primary)" }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Free Estimates & Professional Consultation
        </h2>
        <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
          Serving Yonkers, Manhattan, Brooklyn, Queens, Bronx & all of Westchester County
        </p>
        <a
          href="tel:+16463058546"
          className="inline-block bg-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
          style={{ color: "var(--color-primary)" }}
        >
          Get Your Free Quote Today
        </a>
      </div>
    </section>
  );
}