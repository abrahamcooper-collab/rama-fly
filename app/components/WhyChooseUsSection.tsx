import Image from "next/image";
import { ShieldCheck, Clock, BadgeDollarSign, HandshakeIcon, Award, ThumbsUp } from "lucide-react";
import Reveal from "./Reveal";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
      description: "Fully licensed and insured contractors for your complete peace of mind.",
      image: "/images/services/vinyl_siding.jpg",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Fast response for urgent repairs and emergency situations.",
      image: "/images/services/soffit.jpg",
    },
    {
      icon: BadgeDollarSign,
      title: "Free Estimates",
      description: "Transparent pricing with no hidden fees. Free consultation on all projects.",
      image: "/images/services/windows.jpg",
    },
    {
      icon: HandshakeIcon,
      title: "Quality Craftsmanship",
      description: "Attention to detail and premium materials on every project.",
      image: "/images/components/house.jpg",
    },
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Proven track record of delivering exceptional results.",
      image: "/images/components/house2.jpg",
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description: "We don't finish until you're completely happy with the work.",
      image: "/images/components/who_we_are.jpg",
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
                className="h-full rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group"
                style={{ backgroundColor: "var(--color-gray-50)", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div
                    className="absolute bottom-3 left-3 inline-flex p-2.5 rounded-full"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <reason.icon size={24} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-secondary)" }}>
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
