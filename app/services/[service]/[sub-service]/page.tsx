// app/services/[service]/[sub-service]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, CheckCircle, Clock, MapPin } from 'lucide-react';
import Reveal from '../../../components/Reveal';
import ReviewsSection from '../../../components/ReviewsSection';
import CoreAreasSection from '../../../components/CoreAreasSection';
import WhyChooseUsFeatured from '../../../components/WhyChooseUsFeatured';
import { cardImagePool } from '../../../data/siteData';

// Define types for the data
type SubService = {
  name: string;
  title: string;
  description: string;
  benefits: string[];
};

type SubServicesData = {
  [key: string]: {
    [key: string]: SubService;
  };
};

// All sub-services data - Add all your sub-services here
const subServicesData: SubServicesData = {
  'apartment-renovation': {
    'full-apartment': {
      name: 'Full Apartment Renovations',
      title: 'Complete Apartment Renovation Services in Yonkers, NY',
      description: 'Transform your entire apartment with our comprehensive renovation services. From layout changes and wall removals to premium installations, we handle every detail.',
      benefits: ['Complete space transformation', 'Modern, customized layouts', 'Premium materials and finishes', 'Stress-free project management', 'Increased property value']
    },
    'condo': {
      name: 'Condo Renovations',
      title: 'Professional Condo Renovation Services in Yonkers, NY',
      description: 'Expert condo remodeling tailored to your building\'s guidelines and regulations. We coordinate with condo boards to deliver seamless upgrades.',
      benefits: ['Condo board and HOA compliant', 'Efficient construction with minimal disruption', 'Custom designs matching modern styles', 'Permit and insurance coordination', 'Premium quality craftsmanship']
    },
    'interior-remodeling': {
      name: 'Interior Remodeling',
      title: 'Expert Interior Remodeling Services in Yonkers, NY',
      description: 'Reimagine your home\'s interior with professional layout adjustments, wall configurations, and premium styling for enhanced comfort and utility.',
      benefits: ['Optimized space and flow', 'Contemporary interior designs', 'Value-enhancing enhancements', 'Professional architect collaboration']
    },
    'property-renovations': {
      name: 'Property Renovations',
      title: 'Professional Property Renovation Services in Yonkers, NY',
      description: 'Comprehensive property makeovers designed for landlords, multi-family units, and real estate investors looking to maximize their rental yield or sale value.',
      benefits: ['Maximize rental yields', 'Fast turnaround times', 'Durable, cost-effective materials', 'Code compliance upgrades']
    },
    'room-additions': {
      name: 'Room Additions & Reconfigurations',
      title: 'Expert Room Additions & Reconfigurations in Yonkers, NY',
      description: 'Expand your living space and improve traffic flow with custom room additions, divider installations, or walls reconfiguration.',
      benefits: ['Increased square footage', 'Tailored room functions', 'Seamless structural integration', 'Custom design solutions']
    },
    'residential-renovations': {
      name: 'Residential Renovations',
      title: 'Complete Residential Renovation Services in Yonkers, NY',
      description: 'High-quality residential construction and remodeling services tailored to create the perfect home environment for you and your family.',
      benefits: ['Customized living experience', 'Expert structural work', 'Premium material selection', 'Aesthetic and functional upgrades']
    },
    'open-concept': {
      name: 'Open Concept Remodeling',
      title: 'Open Concept Remodeling Services in Yonkers, NY',
      description: 'Remove non-load bearing walls and install support beams to create spacious, bright, and modern open-plan living areas.',
      benefits: ['Enhanced natural lighting', 'Better family interaction', 'Modern, airy atmosphere', 'Seamless entertaining spaces']
    },
    'luxury-apartment': {
      name: 'Luxury Apartment Renovations',
      title: 'Luxury Apartment Renovation Services in Yonkers, NY',
      description: 'Elevate your apartment with custom millwork, marble accents, designer lighting, smart home integration, and premium fixtures.',
      benefits: ['High-end custom finishes', 'Premium brand fixtures', 'Tailored luxury layout', 'Sophisticated detailing and design']
    }
  },
  'kitchen-remodeling': {
    'custom-design': {
      name: 'Custom Kitchen Design',
      title: 'Custom Kitchen Design Services in Yonkers, NY',
      description: 'Work with our designers to map out the perfect layout, select premium materials, and view detailed plans for your dream kitchen.',
      benefits: ['Personalized layout planning', '3D design renderings', 'Optimized storage and workflow', 'Premium material consultations']
    },
    'cabinets': {
      name: 'Cabinet Installation',
      title: 'Professional Cabinet Installation Services in Yonkers, NY',
      description: 'Upgrade your kitchen storage with custom cabinets, shaker-style doors, soft-close hardware, and tailored pantry storage.',
      benefits: ['Custom woodwork and sizing', 'Premium soft-close hinges', 'Maximized storage capacity', 'Elegant finish options']
    },
    'flooring': {
      name: 'Kitchen Flooring Installation',
      title: 'Kitchen Flooring Installation Services in Yonkers, NY',
      description: 'Durable, water-resistant flooring options including custom tiles, hardwood, and luxury vinyl planks (LVP) designed to withstand high kitchen traffic.',
      benefits: ['Moisture-resistant surfaces', 'Easy-to-clean materials', 'Durable, long-lasting options', 'Professional subfloor prep']
    },
    'countertops': {
      name: 'Countertop Installation',
      title: 'Premium Countertop Installation Services in Yonkers, NY',
      description: 'Add elegance and durability to your kitchen with custom-cut countertops in quartz, granite, marble, or quartzite.',
      benefits: ['Scratch and heat resistant', 'Premium stone selections', 'Seamless edge detailing', 'Easy maintenance surfaces']
    },
    'lighting': {
      name: 'Kitchen Lighting Upgrades',
      title: 'Kitchen Lighting Upgrade Services in Yonkers, NY',
      description: 'Brighten your workspace and add ambiance with under-cabinet LEDs, recessed ceiling lights, and elegant pendant fixtures.',
      benefits: ['Energy-efficient LED lighting', 'Task-oriented visibility', 'Modern dimmer integration', 'Ambient accent illumination']
    },
    'backsplash': {
      name: 'Backsplash Installation',
      title: 'Beautiful Backsplash Installation Services in Yonkers, NY',
      description: 'Protect your walls and add a pop of style with custom tile backsplashes in ceramic, glass, mosaic, or subway patterns.',
      benefits: ['Protects walls from splashes', 'Easy-to-wipe surfaces', 'Infinite patterns and styles', 'Expert grout and sealing']
    },
    'open-concept-kitchens': {
      name: 'Open Concept Kitchens',
      title: 'Open Concept Kitchen Remodeling in Yonkers, NY',
      description: 'Connect your kitchen to the dining and living spaces for a modern open-concept layout that is perfect for entertaining.',
      benefits: ['Spacious, social environment', 'Better light distribution', 'Integrated dining/cooking zones', 'Increased home valuation']
    },
    'complete-renovations': {
      name: 'Complete Kitchen Renovations',
      title: 'Complete Kitchen Renovation Services in Yonkers, NY',
      description: 'Turnkey kitchen transformations including demolition, plumbing, electrical, framing, cabinetry, appliances, and finishing.',
      benefits: ['Full project coordination', 'Up-to-code plumbing & wiring', 'Premium product options', 'Beautiful final walk-through']
    }
  },
  'bathroom-remodeling': {
    'renovations': {
      name: 'Bathroom Renovations',
      title: 'Complete Bathroom Renovation Services in Yonkers, NY',
      description: 'Transform your bathroom into a fresh, functional space with new layouts, modern plumbing, custom vanities, and beautiful tiling.',
      benefits: ['Complete layout optimization', 'Modern plumbing lines', 'Enhanced comfort and utility', 'Increased home resale value']
    },
    'walk-in-shower': {
      name: 'Walk-In Shower Installation',
      title: 'Walk-In Shower Installation Services in Yonkers, NY',
      description: 'Replace your old tub with a modern, low-threshold walk-in shower featuring custom glass doors, premium niches, and bench seating.',
      benefits: ['Sleek minimalist design', 'Improved accessibility and safety', 'Custom built-in shampoo niches', 'Premium frameless glass installation']
    },
    'tile-installation': {
      name: 'Tile Installation',
      title: 'Professional Bathroom Tile Installation in Yonkers, NY',
      description: 'Precision tiling for bathroom floors, shower walls, and tub surrounds using porcelain, ceramic, marble, or mosaic tiles.',
      benefits: ['100% waterproof backing systems', 'Flawless alignment and grout lines', 'Stunning design and accent bands', 'Durable, slip-resistant floor tiles']
    },
    'vanity-installation': {
      name: 'Vanity Installation',
      title: 'Custom Vanity Installation Services in Yonkers, NY',
      description: 'Upgrade your bathroom storage with a beautiful single or double vanity, custom countertops, undermount sinks, and new faucets.',
      benefits: ['Expanded countertop space', 'Better drawer and shelf organization', 'Premium hardware integrations', 'Seamless plumbing connections']
    },
    'flooring': {
      name: 'Bathroom Flooring',
      title: 'Professional Bathroom Flooring Services in Yonkers, NY',
      description: 'Waterproof flooring solutions for bathrooms, including heated tile floors, luxury sheet vinyl, and high-end slip-resistant porcelain.',
      benefits: ['100% water protection', 'Warm floors with heated systems', 'Easy to clean and maintain', 'Slip-resistant finishes']
    },
    'custom-design': {
      name: 'Custom Bathroom Design',
      title: 'Custom Bathroom Design Services in Yonkers, NY',
      description: 'Create a custom design plan that optimizes space, coordinates color schemes, and selects matching fixtures for a spa-like retreat.',
      benefits: ['Custom floor plans', 'Coordinated fixtures and palettes', '3D design previews', 'Expert space optimization']
    },
    'plumbing': {
      name: 'Plumbing Fixture Upgrades',
      title: 'Plumbing Fixture Upgrade Services in Yonkers, NY',
      description: 'Upgrade to eco-friendly, modern fixtures including rain showerheads, body sprays, smart toilets, and elegant free-standing tubs.',
      benefits: ['Water conservation technology', 'Premium brass and matte finishes', 'Luxurious shower experiences', 'Reliable leak-proof fittings']
    },
    'luxury': {
      name: 'Luxury Bathroom Remodeling',
      title: 'Luxury Bathroom Remodeling Services in Yonkers, NY',
      description: 'Create the ultimate high-end bathroom with custom stone slabs, steam showers, smart mirror displays, and ambient LED lighting packages.',
      benefits: ['Spa-quality features', 'Premium marble and quartz', 'Advanced smart integrations', 'Exclusive custom detailing']
    }
  },
  'interior-painting': {
    'painting': {
      name: 'Interior Painting',
      title: 'Professional Interior Painting Services in Yonkers, NY',
      description: 'High-quality wall, ceiling, and trim painting using premium low-VOC paints for a beautiful, long-lasting finish.',
      benefits: ['Flawless color coat coverage', 'Low-VOC, family-safe paints', 'Crisp, clean paint lines', 'Complete floor and furniture protection']
    },
    'drywall': {
      name: 'Drywall Repair',
      title: 'Expert Drywall Repair & Patching in Yonkers, NY',
      description: 'Repair drywall cracks, water damage, door knob holes, and sagging sheets to restore perfect wall stability and texture.',
      benefits: ['Seamless patch invisibility', 'Structural stability restored', 'Dust-contained sanding processes', 'Primed and ready for paint']
    },
    'plastering': {
      name: 'Plastering Services',
      title: 'Professional Plastering Services in Yonkers, NY',
      description: 'Traditional skim coating and plastering to restore vintage walls or provide a durable, glass-smooth wall finish.',
      benefits: ['Glass-smooth surface finish', 'Durability against dents', 'Vintage wall restoration', 'Sound dampening properties']
    },
    'wall-finishing': {
      name: 'Wall Finishing',
      title: 'Professional Wall Finishing Services in Yonkers, NY',
      description: 'Preparation, caulking, priming, and finishing of interior walls to ensure a durable paint bond and flawless appearance.',
      benefits: ['Extended paint durability', 'Elimination of minor imperfections', 'Uniform sheen and texture', 'Professional grade primers']
    },
    'ceiling': {
      name: 'Ceiling Repairs',
      title: 'Ceiling Repair & Painting Services in Yonkers, NY',
      description: 'Repair plaster cracks, remove popcorn texture, fix water stains, and paint ceilings for a bright, clean look.',
      benefits: ['Water stain removal', 'Popcorn ceiling removal options', 'Bright, fresh white finishes', 'Safe high-ceiling execution']
    },
    'texture': {
      name: 'Texture Matching',
      title: 'Professional Texture Matching in Yonkers, NY',
      description: 'Expertly match existing knockdown, orange peel, popcorn, or smooth wall textures during repairs for a seamless look.',
      benefits: ['Identical texture replication', 'Seamless repair blending', 'Uniform wall appearance', 'High-quality spray application']
    },
    'trim': {
      name: 'Trim Painting',
      title: 'Precision Trim & Baseboard Painting in Yonkers, NY',
      description: 'Detailed painting of crown molding, door casings, window frames, and baseboards with high-gloss or semi-gloss paints.',
      benefits: ['Durable, scrubbable finishes', 'Perfect color contrast', 'No brush strokes or runs', 'Highlighting of architectural features']
    },
    'surface-prep': {
      name: 'Surface Preparation',
      title: 'Thorough Surface Preparation Services in Yonkers, NY',
      description: 'Sanding, scraping, filling nail holes, washing grease, and priming to ensure paint adheres correctly and lasts for years.',
      benefits: ['Prevents peeling and cracking', 'Smooth base coat foundation', 'Dust removal prior to coating', 'Enhanced paint adhesion']
    }
  },
  'custom-millwork': {
    'built-ins': {
      name: 'Custom Built-Ins',
      title: 'Custom Built-In & Carpentry Services in Yonkers, NY',
      description: 'Custom-designed bookshelves, media centers, window seats, and mudroom organizers that fit your wall measurements exactly.',
      benefits: ['Perfect wall-to-wall fit', 'Tailored storage configurations', 'Matching architectural trim', 'Durable solid wood construction']
    },
    'crown-molding': {
      name: 'Crown Molding Installation',
      title: 'Crown Molding Installation Services in Yonkers, NY',
      description: 'Enhance the visual appeal of any room with custom wood or polyurethane crown molding installed with perfect miter joints.',
      benefits: ['Elegant ceiling transitions', 'Perfect mitered corner joints', 'Increases historic character', 'Professional prep and painting']
    },
    'baseboard': {
      name: 'Baseboard Installation',
      title: 'Baseboard Replacement & Installation in Yonkers, NY',
      description: 'Upgrade to modern or traditional profile baseboards to frame your floors and hide floor expansion gaps beautifully.',
      benefits: ['Crisp clean floor lines', 'Protection for bottom drywall', 'Covers floor expansion gaps', 'Durable, primed wood options']
    },
    'shelving': {
      name: 'Custom Shelving',
      title: 'Custom Shelving & Closet Systems in Yonkers, NY',
      description: 'Tailored closet organizers, pantry shelves, floating shelves, and garage storage systems designed to maximize utility.',
      benefits: ['Maximized vertical space', 'Heavy weight load capacities', 'Clean floating shelf designs', 'Tailored pantry layouts']
    },
    'trim': {
      name: 'Trim Carpentry',
      title: 'Expert Trim Carpentry Services in Yonkers, NY',
      description: 'Installation of door trim casings, window sill borders, chair rails, wainscoting, and decorative paneling.',
      benefits: ['Adds architectural elegance', 'Hides framing gaps', 'Custom wainscoting packages', 'Enhances wall textures']
    },
    'doors': {
      name: 'Door Installation',
      title: 'Professional Interior & Exterior Door Installation in Yonkers, NY',
      description: 'Hanging pre-hung doors, updating slabs, installing bifold closet doors, sliding pocket doors, and decorative barn doors.',
      benefits: ['Perfect swing and alignment', 'Premium lockset installations', 'Proper weatherproofing (exterior)', 'Quiet, smooth operation']
    },
    'finish-carpentry': {
      name: 'Finish Carpentry',
      title: 'High-End Finish Carpentry in Yonkers, NY',
      description: 'The final carpentry details including fireplace mantels, column wraps, stairs, handrails, and detailed wood trim panels.',
      benefits: ['Adds luxury detail to home', 'Custom fireplace surrounds', 'Sturdy stair and handrail installations', 'Exceptional craftsmanship']
    },
    'woodwork': {
      name: 'Woodwork Installation',
      title: 'Custom Woodwork Installation in Yonkers, NY',
      description: 'Installation of custom ceiling beams, decorative wood slats, accent walls, and custom wood panels.',
      benefits: ['Vibrant wood textures', 'Unique accent focal points', 'Coated with premium sealers', 'Expert joinery and mounting']
    }
  }
};

export async function generateStaticParams() {
  const params: { service: string; 'sub-service': string }[] = [];
  for (const [service, subs] of Object.entries(subServicesData)) {
    for (const sub of Object.keys(subs)) {
      params.push({ service, 'sub-service': sub });
    }
  }
  return params;
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
  params: Promise<{ service: string; 'sub-service': string }>;
};

export default async function SubServicePage({ params }: Props) {
  const resolvedParams = await params;
  const serviceParam = resolvedParams.service;
  const subServiceParam = resolvedParams['sub-service'];
  
  const subService = subServicesData[serviceParam]?.[subServiceParam];
  
  if (!subService) {
    notFound();
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-6 overflow-hidden flex flex-col justify-center text-white">
        <div className="absolute inset-0 bg-gray-900 z-0">
          <Image
            src={getHeroImage(serviceParam)}
            alt={subService.title}
            fill
            priority
            className="object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="relative z-10 container mx-auto">
          <Link href={`/services/${serviceParam}`} className="text-sm mb-4 inline-block hover:underline text-gray-300">
            ← Back to {serviceParam.replace(/-/g, ' ')}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">{subService.title}</h1>
          <p className="text-lg max-w-2xl mb-6 drop-shadow-sm">{subService.description}</p>
          <a href="tel:+16463058546" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-red-600 hover:bg-red-700 transition hover:scale-105">
            <Phone size={18} />
            Free Consultation: (646) 305-8546
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Our {subService.name}</h2>
          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {subService.benefits.map((benefit: string, idx: number) => (
              <Reveal key={idx} delay={(idx % 2) * 120}>
                <div className="group flex items-center gap-4 bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative w-20 h-20 shrink-0 overflow-hidden">
                    <Image
                      src={cardImagePool[idx % cardImagePool.length]}
                      alt={benefit}
                      fill
                      sizes="80px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex items-center gap-2 py-4 pr-4">
                    <CheckCircle size={20} className="text-red-600 shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Free Consultation", desc: "We discuss your needs and provide a free estimate", img: cardImagePool[5] },
              { step: "2", title: "Planning & Design", desc: "We create a detailed plan and timeline", img: cardImagePool[6] },
              { step: "3", title: "Expert Execution", desc: "Our team delivers quality craftsmanship", img: cardImagePool[7] },
            ].map((p, idx) => (
              <Reveal key={p.step} delay={idx * 120} className="h-full">
                <div className="group h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* Image */}
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {p.step}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="font-bold mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-600">{p.desc}</p>
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

      {/* CTA Section */}
      <section className="py-16 px-6 bg-red-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">Contact us today for a free consultation</p>
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