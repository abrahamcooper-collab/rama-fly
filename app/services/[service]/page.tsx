// app/services/[service]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock, MapPin, CheckCircle, Shield, Award, ThumbsUp } from 'lucide-react';
import Reveal from '../../components/Reveal';
import ReviewsSection from '../../components/ReviewsSection';
import CoreAreasSection from '../../components/CoreAreasSection';
import WhyChooseUsFeatured from '../../components/WhyChooseUsFeatured';
import { projectImages, ProjectCategory } from '../../data/imageRegistry';

// ALL YOUR SERVICE DATA - Add all 5 services here
const servicesData = {
  'apartment-renovation': {
    name: 'Apartment Renovation',
    title: 'Expert Apartment Renovation Services in NYC & Westchester',
    description: 'Transform your living space with our professional apartment renovation services. We specialize in full apartment renovations, condo renovations, open concept remodeling, luxury upgrades, and investment property makeovers.',
    subServices: [
      { name: 'Full Apartment & Condo Renovations', href: '/services/apartment-renovation/full-apartment-condo' },
      { name: 'Open Concept & Layout Remodeling', href: '/services/apartment-renovation/open-concept-layout' },
      { name: 'Luxury Apartment Renovations', href: '/services/apartment-renovation/luxury' },
      { name: 'Property & Investment Renovations', href: '/services/apartment-renovation/property-investment' },
    ],
    benefits: ['Full apartment & condo renovations', 'Open concept layout redesigns', 'Luxury upgrades & custom finishes', 'Investment property makeovers', 'Professional project management']
  },
  'kitchen-remodeling': {
    name: 'Kitchen Remodeling',
    title: 'Complete Kitchen Remodeling Services in NYC & Westchester',
    description: 'Transform your kitchen from the ground up. We handle complete demolition, layout modifications, plumbing, electrical, custom cabinets, countertops, flooring, lighting, appliances, permits, and full project management.',
    subServices: [
      { name: 'Kitchen Cabinets', href: '/services/kitchen-remodeling/cabinets' },
      { name: 'Kitchen Countertops', href: '/services/kitchen-remodeling/countertops' },
      { name: 'Kitchen Flooring', href: '/services/kitchen-remodeling/flooring' },
      { name: 'Kitchen Lighting & Finishing', href: '/services/kitchen-remodeling/lighting-finishing' },
    ],
    benefits: ['Complete demolition to finishing', 'Layout modifications & permits', 'Custom cabinets & countertops', 'Plumbing, electrical & appliances', 'Full project management']
  },
  'bathroom-remodeling': {
    name: 'Bathroom Remodeling',
    title: 'Complete Bathroom Remodeling Services in NYC & Westchester',
    description: 'Transform your bathroom from the ground up. We handle demolition, plumbing, electrical, waterproofing, tile installation, vanities, walk-in showers, toilets, permits, and complete project management.',
    subServices: [
      { name: 'Walk-In Showers & Glass Enclosures', href: '/services/bathroom-remodeling/walk-in-showers' },
      { name: 'Bathroom Tile & Waterproofing', href: '/services/bathroom-remodeling/tile-waterproofing' },
      { name: 'Bathroom Vanities & Fixtures', href: '/services/bathroom-remodeling/vanities-fixtures' },
      { name: 'Luxury Bathroom Remodeling', href: '/services/bathroom-remodeling/luxury' },
    ],
    benefits: ['Complete demolition to finishing', 'Plumbing, electrical & waterproofing', 'Walk-in showers & custom tile', 'Vanities, toilets & fixtures', 'Full permits & project management']
  },
  'interior-painting': {
    name: 'Painting & Plaster',
    title: 'Professional Painting & Plaster Services in NYC & Westchester',
    description: 'Transform your home\'s interior with expert painting, plastering, drywall repair, ceiling work, texture matching, and trim finishing. We deliver flawless walls and ceilings with premium materials.',
    subServices: [
      { name: 'Interior Painting & Surface Prep', href: '/services/interior-painting/painting-prep' },
      { name: 'Drywall Repair & Plastering', href: '/services/interior-painting/drywall-plastering' },
      { name: 'Ceiling Repairs & Texture Matching', href: '/services/interior-painting/ceiling-texture' },
      { name: 'Trim Painting & Wall Finishing', href: '/services/interior-painting/trim-finishing' },
    ],
    benefits: ['Flawless wall & ceiling finishes', 'Premium low-VOC paints', 'Expert drywall & plaster repair', 'Texture matching & restoration', 'Clean, professional execution']
  },
  'custom-millwork': {
    name: 'Custom Millwork',
    title: 'Custom Millwork & Carpentry Services in NYC & Westchester',
    description: 'Add elegance and functionality to your home with custom built-ins, shelving, crown molding, baseboards, trim carpentry, door installation, and bespoke woodwork crafted to your exact specifications.',
    subServices: [
      { name: 'Custom Built-Ins & Shelving', href: '/services/custom-millwork/built-ins-shelving' },
      { name: 'Crown Molding, Baseboard & Trim', href: '/services/custom-millwork/molding-trim' },
      { name: 'Door Installation', href: '/services/custom-millwork/doors' },
      { name: 'Finish Carpentry & Woodwork', href: '/services/custom-millwork/finish-woodwork' },
    ],
    benefits: ['Custom designs to your specifications', 'Premium wood materials', 'Expert craftsmanship & joinery', 'Architectural detail & character', 'Adds lasting home value']
  },
  'full-interior-renovation': {
    name: 'Full Interior Renovation',
    title: 'Full Interior Renovation Services in NYC & Westchester',
    description: 'Transform your entire home with complete interior renovation services. From gut renovations and layout redesigns to combining apartments and pre-war restorations, we manage every trade and detail for a seamless, turnkey result.',
    subServices: [
      { name: 'Gut Renovations & Whole-Home Remodeling', href: '/services/full-interior-renovation/gut-whole-home' },
      { name: 'Layout Redesign & Apartment Combination', href: '/services/full-interior-renovation/layout-combination' },
      { name: 'Pre-War Apartment Restoration', href: '/services/full-interior-renovation/pre-war-restoration' },
      { name: 'Turnkey Build-Outs & Project Coordination', href: '/services/full-interior-renovation/turnkey-coordination' },
    ],
    benefits: ['Single-contractor accountability', 'Coordinated trades & scheduling', 'Premium finishes throughout', 'Maximized space and flow', 'Increased property value']
  },
  'flooring': {
    name: 'Flooring',
    title: 'Flooring Installation Services in NYC & Westchester',
    description: 'Upgrade your home with beautiful, durable flooring. We install and refinish hardwood, engineered wood, luxury vinyl plank, tile, and radiant heated floors with expert subfloor preparation for a flawless finish.',
    subServices: [
      { name: 'Hardwood & Engineered Wood Flooring', href: '/services/flooring/hardwood-engineered' },
      { name: 'Luxury Vinyl Plank & Tile Flooring', href: '/services/flooring/vinyl-tile' },
      { name: 'Floor Refinishing & Subfloor Repair', href: '/services/flooring/refinishing-repair' },
      { name: 'Heated Floors & Trim Integration', href: '/services/flooring/heated-floors-trim' },
    ],
    benefits: ['Durable, long-lasting materials', 'Precision subfloor preparation', 'Seamless room-to-room transitions', 'Moisture-resistant options', 'Expert finishing and sealing']
  },
  'electrical-plumbing-coordination': {
    name: 'Electrical & Plumbing Coordination',
    title: 'Electrical & Plumbing Coordination in NYC & Westchester',
    description: 'We coordinate licensed electricians and plumbers throughout your renovation, handling wiring upgrades, fixture installs, lighting design, smart home pre-wiring, permits, and code compliance inspections.',
    subServices: [
      { name: 'Electrical Coordination & Wiring', href: '/services/electrical-plumbing-coordination/electrical-wiring' },
      { name: 'Plumbing Rough-In & Fixtures', href: '/services/electrical-plumbing-coordination/plumbing-fixtures' },
      { name: 'Lighting Design & Smart Home', href: '/services/electrical-plumbing-coordination/lighting-smart' },
      { name: 'Permits & Code Compliance', href: '/services/electrical-plumbing-coordination/permits-code' },
    ],
    benefits: ['Licensed, insured trade partners', 'Up-to-code installations', 'Coordinated with renovation timeline', 'Permit and inspection handling', 'Smart home ready']
  }
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((service) => ({
    service: service,
  }));
}

function getHeroImage(service: string): string {
  switch (service) {
    case 'apartment-renovation':
      return '/images/projects/renovation/apartment-renovation.png';
    case 'kitchen-remodeling':
      return '/images/projects/renovation/kitchen.png';
    case 'bathroom-remodeling':
      return '/images/projects/bathroom/bathroom-ai.png';
    case 'interior-painting':
      return '/images/projects/renovation/interior-painting.png';
    case 'custom-millwork':
      return '/images/projects/renovation/custom-millwork.png';
    case 'full-interior-renovation':
      return '/images/projects/renovation/full-interior.png';
    case 'flooring':
      return '/images/projects/renovation/flooring.png';
    case 'electrical-plumbing-coordination':
      return '/images/projects/renovation/electrical-plumbing.png';
    default:
      return '/images/projects/renovation/full-interior.png';
  }
}

function getServiceImages(serviceSlug: string): string[] {
  switch (serviceSlug) {
    case 'kitchen-remodeling':
      return [
        '/images/projects/renovation/kitchen.png',
        '/images/projects/kitchen/kitchen-cabinets.png',
        '/images/projects/kitchen/kitchen-countertops.png',
        '/images/projects/kitchen/kitchen-flooring.png',
        '/images/projects/kitchen/kitchen-lighting.png',
      ];
    case 'bathroom-remodeling':
      return [
        '/images/projects/bathroom/bathroom-ai.png',
        '/images/projects/bathroom/bathroom-showers.png',
        '/images/projects/bathroom/bathroom-tile.png',
        '/images/projects/bathroom/bathroom-vanities.png',
        '/images/projects/bathroom/bathroom-luxury.png',
      ];
    case 'custom-millwork':
      return [
        '/images/projects/renovation/custom-millwork.png',
        '/images/projects/renovation/custom-builtins.png',
        '/images/projects/renovation/crown-molding.png',
        '/images/projects/renovation/door-installation.png',
      ];
    case 'flooring':
      return [
        '/images/projects/renovation/flooring.png',
        '/images/projects/renovation/hardwood-flooring.png',
        '/images/projects/renovation/flooring.png',
        '/images/projects/renovation/hardwood-flooring.png',
      ];
    case 'interior-painting':
      return [
        '/images/projects/renovation/interior-painting.png',
        '/images/projects/renovation/painting-prep.png',
        '/images/projects/renovation/drywall-plaster.png',
        '/images/projects/renovation/interior-painting.png',
      ];
    case 'electrical-plumbing-coordination':
      return [
        '/images/projects/renovation/electrical-plumbing.png',
        '/images/projects/bathroom/bathroom-ai.png',
        '/images/projects/renovation/electrical-plumbing.png',
        '/images/projects/bathroom/bathroom-ai.png',
      ];
    case 'apartment-renovation':
      return [
        '/images/projects/renovation/apartment-renovation.png',
        '/images/projects/renovation/full-interior.png',
        '/images/projects/renovation/apartment-renovation.png',
        '/images/projects/renovation/full-interior.png',
      ];
    case 'full-interior-renovation':
    default:
      return [
        '/images/projects/renovation/full-interior.png',
        '/images/projects/renovation/apartment-renovation.png',
        '/images/projects/renovation/full-interior.png',
        '/images/projects/renovation/apartment-renovation.png',
      ];
  }
}

type Props = {
  params: Promise<{ service: string }>;
};

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.service as keyof typeof servicesData];
  
  if (!service) {
    notFound();
  }

  const serviceImages = getServiceImages(resolvedParams.service);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full py-24 sm:py-32 px-6 overflow-hidden flex flex-col justify-center text-white">
        <div className="absolute inset-0 bg-gray-900 z-0">
          <Image
            src={getHeroImage(resolvedParams.service)}
            alt={service.title}
            fill
            priority
            className="object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">{service.title}</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-sm">{service.description}</p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+16463058546" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-red-600 hover:bg-red-700 transition hover:scale-105">
              <Phone size={18} />
              Call (646) 305-8546
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold border-2 border-white hover:bg-white hover:text-gray-900 transition hover:scale-105">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What We Offer</h2>
          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((sub, idx) => (
              <Reveal key={idx} delay={(idx % 3) * 100} className="h-full">
                <Link href={sub.href} className="block h-full">
                  <div className="group h-full bg-gray-50 rounded-2xl overflow-hidden hover:-translate-y-2 transition cursor-pointer shadow-md hover:shadow-xl">
                    {/* Image */}
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={serviceImages[idx % serviceImages.length]}
                        alt={sub.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent" />
                      <div className="absolute bottom-3 left-3 inline-flex p-2 rounded-full bg-red-600">
                        <CheckCircle className="text-white" size={20} />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{sub.name}</h3>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {service.benefits.map((benefit, idx) => (
              <Reveal key={idx} delay={(idx % 2) * 120}>
                <div className="group flex items-center gap-4 bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 shrink-0 overflow-hidden">
                    <Image
                      src={serviceImages[(idx + 2) % serviceImages.length]}
                      alt={benefit}
                      fill
                      sizes="80px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex items-center gap-2 py-4 pr-4">
                    <CheckCircle className="text-red-600 shrink-0" size={20} />
                    <span>{benefit}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { Icon: Shield, label: "Licensed & Insured", img: serviceImages[0 % serviceImages.length] },
              { Icon: Award, label: "Serving NY Since 2006", img: serviceImages[1 % serviceImages.length] },
              { Icon: ThumbsUp, label: "100% Satisfaction", img: serviceImages[2 % serviceImages.length] },
              { Icon: Clock, label: "24/7 Service Area", img: serviceImages[3 % serviceImages.length] },
            ].map((t, idx) => (
              <Reveal key={t.label} delay={idx * 100} className="h-full">
                <div className="group h-full bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-28 w-full overflow-hidden">
                    <Image
                      src={t.img}
                      alt={t.label}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    <t.Icon size={32} className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white" />
                  </div>
                  {/* Label */}
                  <div className="p-4">
                    <div className="font-bold">{t.label}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Areas We Serve */}
      <CoreAreasSection />

      {/* Why Choose Us (featured) */}
      <WhyChooseUsFeatured />

      {/* Customer Reviews */}
      <ReviewsSection />

      {/* CTA */}
      <section className="py-16 px-6 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your {service.name} Project?</h2>
          <p className="text-lg mb-6">Contact us today for a free consultation and estimate</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+16463058546" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold bg-white text-red-600 hover:scale-105 transition">
              <Phone size={18} />
              Call (646) 305-8546
            </a>
            <a href="mailto:info@ramafly.com" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold border-2 border-white hover:bg-white hover:text-red-600 transition">
              <Mail size={18} />
              Email Us
            </a>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <span className="flex items-center gap-2"><MapPin size={14} /> 51 Inwood Street, Yonkers, NY</span>
            <span className="flex items-center gap-2"><Clock size={14} /> Mon-Sun: 8am-6pm</span>
          </div>
        </div>
      </section>
    </main>
  );
}