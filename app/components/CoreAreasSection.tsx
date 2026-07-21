import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { business, serviceAreas } from "../data/siteData";

/* Primary service areas to feature prominently. */
const PRIORITY_AREAS = [
  "Yonkers",
  "Manhattan",
  "Brooklyn",
  "Queens",
];
const coreAreas = PRIORITY_AREAS.map((city) =>
  serviceAreas.find((a) => a.city === city)
).filter((a): a is (typeof serviceAreas)[number] => Boolean(a));
const nearbyCities = coreAreas.slice(1).map((a) => a.city);
const nearbyText =
  nearbyCities.length > 1
    ? `${nearbyCities.slice(0, -1).join(", ")}, and ${
        nearbyCities[nearbyCities.length - 1]
      }`
    : nearbyCities[0];

export default function CoreAreasSection() {
  const { city, state, zip } = business.addressObj;

  return (
    <section className="relative w-full overflow-hidden py-20 sm:py-28 px-6">
      {/* Background image + dark overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638640/rama-fly-site-assets/images_projects_renovation/renovation-22_kuk0bn.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--color-secondary)", opacity: 0.8 }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-black/75" />
      </div>

      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-md">
          Trusted Apartment Renovation &amp; Interior Remodeling Contractors in{" "}
          {city}, {state} and Surrounding Communities
        </h2>

        <p className="text-white/80 leading-relaxed mb-10 max-w-3xl mx-auto">
          <a
            href={business.gmbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white hover:underline"
          >
            {business.name}
          </a>{" "}
          proudly provides professional apartment renovations, kitchen &amp;
          bathroom remodeling, full interior renovations, custom millwork,
          flooring, painting &amp; plaster, and electrical &amp; plumbing
          coordination in {city}, {state} ({zip}) and nearby communities
          including {nearbyText}. As licensed and insured interior remodeling
          contractors, we deliver high-quality renovations designed to transform
          and elevate homes across the New York City metro area and Westchester
          County. Whether it&apos;s a gut renovation in {coreAreas[0].city}, a
          kitchen remodel in {coreAreas[1].city}, or a bathroom renovation in{" "}
          {coreAreas[2].city}, our trusted local team is here to serve you.
        </p>

        <h3
          className="text-2xl sm:text-3xl font-bold italic mb-8"
          style={{ color: "var(--color-primary-light)" }}
        >
          Core Areas We Serve
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-12">
          {coreAreas.map((area) => (
            <Link
              key={area.slug}
              href={area.slug}
              className="group flex items-center gap-2 font-medium text-white/90 transition-colors hover:text-white"
            >
              <MapPin
                size={18}
                className="shrink-0"
                style={{ color: "var(--color-primary-light)" }}
              />
              {area.city}, {area.state}, USA
            </Link>
          ))}
        </div>

        <Link
          href="/service-areas"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold tracking-wide border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-gray-900"
        >
          VIEW ALL AREAS
        </Link>
      </div>
    </section>
  );
}
