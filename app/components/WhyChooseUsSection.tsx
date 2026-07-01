import { ShieldCheck, Clock, BadgeDollarSign, HandshakeIcon, Award, ThumbsUp } from "lucide-react";
import Reveal from "./Reveal";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
      description: "Fully licensed and insured contractors for your complete peace of mind.",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Fast response for urgent repairs and emergency situations.",
    },
    {
      icon: BadgeDollarSign,
      title: "Free Estimates",
      description: "Transparent pricing with no hidden fees. Free consultation on all projects.",
    },
    {
      icon: HandshakeIcon,
      title: "Quality Craftsmanship",
      description: "Attention to detail and premium materials on every project.",
    },
    {
      icon: Award,
      title: "Serving New York Since 2006",
      description: "Nearly 20 years of delivering exceptional results across NYC.",
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description: "We don't finish until you're completely happy with the work.",
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold tracking-widest uppercase mb-3 block" style={{ color: "var(--color-primary)" }}>
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-secondary)" }}>
            What Makes Us Different
          </h2>
          <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: "var(--color-primary)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Reveal key={index} delay={index * 100} className="h-full">
              <div
                className="h-full rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                style={{ backgroundColor: "var(--color-gray-50)", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}
              >
                {/* Icon Container */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(192, 21, 26, 0.08)", color: "var(--color-primary)" }}
                >
                  <reason.icon size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-secondary)" }}>
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
