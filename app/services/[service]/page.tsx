// app/services/[service]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock, MapPin, CheckCircle, Shield, Award, ThumbsUp } from 'lucide-react';
import Reveal from '../../components/Reveal';
import ReviewsSection from '../../components/ReviewsSection';
import { cardImagePool } from '../../data/siteData';

// ALL YOUR SERVICE DATA - Add all 5 services here
const servicesData = {
  'apartment-renovation': {
    name: 'Apartment Renovation',
    title: 'Expert Apartment Renovation Services in Yonkers, NY',
    description: 'Transform your living space with our professional apartment renovation services. We specialize in full apartment renovations, condo renovations, interior remodeling, and luxury upgrades.',
    subServices: [
      { name: 'Full Apartment Renovations', href: '/services/apartment-renovation/full-apartment' },
      { name: 'Condo Renovations', href: '/services/apartment-renovation/condo' },
      { name: 'Interior Remodeling', href: '/services/apartment-renovation/interior-remodeling' },
      { name: 'Property Renovations', href: '/services/apartment-renovation/property-renovations' },
      { name: 'Room Additions & Reconfigurations', href: '/services/apartment-renovation/room-additions' },
      { name: 'Residential Renovations', href: '/services/apartment-renovation/residential-renovations' },
      { name: 'Open Concept Remodeling', href: '/services/apartment-renovation/open-concept' },
      { name: 'Luxury Apartment Renovations', href: '/services/apartment-renovation/luxury-apartment' }
    ],
    benefits: ['Increase property value', 'Modern functional spaces', 'Quality materials', 'Professional project management']
  },
  'kitchen-remodeling': {
    name: 'Kitchen Remodeling',
    title: 'Premium Kitchen Remodeling Services in Yonkers, NY',
    description: 'Create your dream kitchen with our expert remodeling services. From custom cabinetry to premium countertops, we transform your kitchen into a masterpiece.',
    subServices: [
      { name: 'Custom Kitchen Design', href: '/services/kitchen-remodeling/custom-design' },
      { name: 'Cabinet Installation', href: '/services/kitchen-remodeling/cabinets' },
      { name: 'Kitchen Flooring Installation', href: '/services/kitchen-remodeling/flooring' },
      { name: 'Countertop Installation', href: '/services/kitchen-remodeling/countertops' },
      { name: 'Kitchen Lighting Upgrades', href: '/services/kitchen-remodeling/lighting' },
      { name: 'Backsplash Installation', href: '/services/kitchen-remodeling/backsplash' },
      { name: 'Open Concept Kitchens', href: '/services/kitchen-remodeling/open-concept-kitchens' },
      { name: 'Complete Kitchen Renovations', href: '/services/kitchen-remodeling/complete-renovations' }
    ],
    benefits: ['Increase home value by up to 80%', 'Energy-efficient appliances', 'Custom designs', 'Professional installation']
  },
  'bathroom-remodeling': {
    name: 'Bathroom Remodeling',
    title: 'Luxury Bathroom Remodeling Services in Yonkers, NY',
    description: 'Transform your bathroom into a spa-like retreat. We specialize in walk-in showers, custom vanities, tile installation, and complete bathroom renovations.',
    subServices: [
      { name: 'Bathroom Renovations', href: '/services/bathroom-remodeling/renovations' },
      { name: 'Walk-In Shower Installation', href: '/services/bathroom-remodeling/walk-in-shower' },
      { name: 'Tile Installation', href: '/services/bathroom-remodeling/tile-installation' },
      { name: 'Vanity Installation', href: '/services/bathroom-remodeling/vanity-installation' },
      { name: 'Bathroom Flooring', href: '/services/bathroom-remodeling/flooring' },
      { name: 'Custom Bathroom Design', href: '/services/bathroom-remodeling/custom-design' },
      { name: 'Plumbing Fixture Upgrades', href: '/services/bathroom-remodeling/plumbing' },
      { name: 'Luxury Bathroom Remodeling', href: '/services/bathroom-remodeling/luxury' }
    ],
    benefits: ['Increase home value', 'Water-efficient fixtures', 'Spa-like design', 'Expert tile installation']
  },
  'interior-painting': {
    name: 'Interior Finishing & Painting',
    title: 'Professional Interior Painting & Finishing in Yonkers, NY',
    description: 'Transform your home\'s interior with our expert painting and finishing services. We deliver flawless results with premium materials and attention to detail.',
    subServices: [
      { name: 'Interior Painting', href: '/services/interior-painting/painting' },
      { name: 'Drywall Repair', href: '/services/interior-painting/drywall' },
      { name: 'Plastering Services', href: '/services/interior-painting/plastering' },
      { name: 'Wall Finishing', href: '/services/interior-painting/wall-finishing' },
      { name: 'Ceiling Repairs', href: '/services/interior-painting/ceiling' },
      { name: 'Texture Matching', href: '/services/interior-painting/texture' },
      { name: 'Trim Painting', href: '/services/interior-painting/trim' },
      { name: 'Surface Preparation', href: '/services/interior-painting/surface-prep' }
    ],
    benefits: ['Flawless finish guaranteed', 'Premium paints', 'Minimal mess', 'Fast drying times']
  },
  'custom-millwork': {
    name: 'Carpentry & Custom Millwork',
    title: 'Custom Carpentry & Millwork Services in Yonkers, NY',
    description: 'Add elegance and functionality to your home with our custom millwork and carpentry services. From built-ins to crown molding, we create stunning custom pieces.',
    subServices: [
      { name: 'Custom Built-Ins', href: '/services/custom-millwork/built-ins' },
      { name: 'Crown Molding Installation', href: '/services/custom-millwork/crown-molding' },
      { name: 'Baseboard Installation', href: '/services/custom-millwork/baseboard' },
      { name: 'Custom Shelving', href: '/services/custom-millwork/shelving' },
      { name: 'Trim Carpentry', href: '/services/custom-millwork/trim' },
      { name: 'Door Installation', href: '/services/custom-millwork/doors' },
      { name: 'Finish Carpentry', href: '/services/custom-millwork/finish-carpentry' },
      { name: 'Woodwork Installation', href: '/services/custom-millwork/woodwork' }
    ],
    benefits: ['Custom designs', 'Premium wood materials', 'Expert craftsmanship', 'Adds home value']
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
      return '/images/components/house.jpg';
    case 'kitchen-remodeling':
      return '/images/components/house2.jpg';
    case 'bathroom-remodeling':
      return '/images/services/vinyl_siding.jpg';
    case 'interior-painting':
      return '/images/components/who_we_are.jpg';
    case 'custom-millwork':
      return '/images/services/door.jpg';
    default:
      return '/hero.jpg';
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
                        src={cardImagePool[idx % cardImagePool.length]}
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
                      src={cardImagePool[(idx + 6) % cardImagePool.length]}
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
              { Icon: Shield, label: "Licensed & Insured", img: cardImagePool[0] },
              { Icon: Award, label: "10+ Years Experience", img: cardImagePool[5] },
              { Icon: ThumbsUp, label: "100% Satisfaction", img: cardImagePool[7] },
              { Icon: Clock, label: "24/7 Emergency Service", img: cardImagePool[2] },
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
            <a href="mailto:RAMAFLYCONSTRUCTION@GMAIL.COM" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold border-2 border-white hover:bg-white hover:text-red-600 transition">
              <Mail size={18} />
              Email Us
            </a>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <span className="flex items-center gap-2"><MapPin size={14} /> 51 Inwood St, Yonkers, NY</span>
            <span className="flex items-center gap-2"><Clock size={14} /> Mon-Sun: 8am-6pm</span>
          </div>
        </div>
      </section>
    </main>
  );
}