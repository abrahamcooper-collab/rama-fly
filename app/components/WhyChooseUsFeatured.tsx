import Image from "next/image";
import {
  ShieldCheck,
  Wrench,
  MessageSquare,
  Star,
  Building2,
  Home,
  User,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { business } from "../data/siteData";
import { FormatBusinessName } from "./FormatText";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const leftFeatures: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Fully certified apartment renovation and interior remodeling contractors serving Manhattan, Brooklyn, Queens, and Westchester County.",
  },
  {
    icon: Wrench,
    title: "Quality Materials",
    desc: "We use premium cabinetry, hardwood, tile, and top-grade finishes for lasting, beautiful results.",
  },
  {
    icon: MessageSquare,
    title: "Customer Satisfaction",
    desc: "Transparent communication, honest pricing, and guaranteed workmanship on every project.",
  },
];

const rightFeatures: Feature[] = [
  {
    icon: Star,
    title: "Serving New York Since 2006",
    desc: "Nearly 20 years of delivering high-end interior renovations across the NYC metro area & Westchester County.",
  },
  {
    icon: Building2,
    title: "Local Expertise",
    desc: "Serving Manhattan, Brooklyn, Queens, Westchester County, and surrounding areas.",
  },
  {
    icon: Home,
    title: "Complete Interior Solutions",
    desc: "From kitchens and baths to full gut renovations, custom millwork, flooring & painting — we do it all.",
  },
];

const bottomFeature: Feature = {
  icon: User,
  title: "Dedicated Project Support",
  desc: "One accountable team managing every trade — design, demolition, build-out, and final walk-through.",
};

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div
      className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
      style={{ backgroundColor: "var(--color-primary-50)" }}
    >
      <Icon size={22} style={{ color: "var(--color-primary)" }} />
    </div>
  );
}

function FeatureItem({
  feature,
  side,
  delay,
}: {
  feature: Feature;
  side: "left" | "right" | "center";
  delay: number;
}) {
  const alignClass =
    side === "left"
      ? "lg:text-right"
      : side === "right"
      ? "lg:flex-row-reverse"
      : "justify-center text-center sm:text-left";

  return (
    <Reveal delay={delay}>
      <div className={`flex items-start gap-4 text-left ${alignClass}`}>
        <IconBadge icon={feature.icon} />
        <div>
          <h3
            className="font-bold mb-1"
            style={{ color: "var(--color-secondary)" }}
          >
            {feature.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function WhyChooseUsFeatured() {
  return (
    <section className="py-20 sm:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-5"
            style={{ color: "var(--color-secondary)" }}
          >
            Why Should You Choose{" "}
            <a
              href={business.gmbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Rama Fly Construction
            </a>
            ?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            <FormatBusinessName text={business.name} /> is a licensed and insured
            apartment renovation and interior remodeling contractor serving Manhattan,
            Brooklyn, Queens, and Westchester County, trusted for full interior
            renovations, kitchen &amp; bathroom remodeling, custom millwork,
            flooring, painting &amp; plaster, and electrical &amp; plumbing
            coordination. With over a decade of experience, we deliver premium
            craftsmanship across New York City and Westchester County.
          </p>
        </div>

        {/* Feature columns around center image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center">
          {/* Left column */}
          <div className="space-y-8 lg:space-y-12 order-2 lg:order-1">
            {leftFeatures.map((f, i) => (
              <FeatureItem
                key={f.title}
                feature={f}
                side="left"
                delay={i * 100}
              />
            ))}
          </div>

          {/* Center image */}
          <Reveal delay={150} className="order-1 lg:order-2">
            <div
              className="relative mx-auto w-full max-w-sm aspect-4/5 rounded-2xl overflow-hidden"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <Image
                src="/images/projects/renovation/renovation-19.jpg"
                alt="Rama Fly Construction project in progress"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Right column */}
          <div className="space-y-8 lg:space-y-12 order-3">
            {rightFeatures.map((f, i) => (
              <FeatureItem
                key={f.title}
                feature={f}
                side="right"
                delay={i * 100}
              />
            ))}
          </div>
        </div>

        {/* Bottom centered feature */}
        <div className="max-w-md mx-auto mt-14">
          <FeatureItem feature={bottomFeature} side="center" delay={0} />
        </div>
      </div>
    </section>
  );
}
