// app/services/[service]/[sub-service]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, CheckCircle, Clock, MapPin, ChevronDown } from 'lucide-react';
import Reveal from '../../../components/Reveal';
import ReviewsSection from '../../../components/ReviewsSection';
import CoreAreasSection from '../../../components/CoreAreasSection';
import WhyChooseUsFeatured from '../../../components/WhyChooseUsFeatured';
import { projectImages, ProjectCategory } from '../../../data/imageRegistry';

// Define types for the data
type Feature = {
  title: string;
  description: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type SubService = {
  name: string;
  title: string;
  description: string;
  benefits: string[];
  detailedContent: string;
  features: Feature[];
  faqs: FAQ[];
};

type SubServicesData = {
  [key: string]: {
    [key: string]: SubService;
  };
};

// All sub-services data
const subServicesData: SubServicesData = {
  'apartment-renovation': {
    'full-apartment-condo': {
      name: 'Full Apartment & Condo Renovations',
      title: 'Full Apartment & Condo Renovation Services in NYC & Westchester',
      description: 'Complete apartment and condo renovation services tailored to your building\'s requirements. From studio apartments to multi-bedroom condos, we handle every detail including board approvals and HOA compliance.',
      benefits: ['Complete space transformation', 'Condo board & HOA compliant', 'Custom layouts & modern designs', 'Premium materials & finishes', 'Permit & insurance coordination', 'Increased property value'],
      detailedContent: 'Whether you\'re renovating a pre-war apartment, updating a modern condo, or transforming a residential unit, our team delivers comprehensive renovation services that respect your building\'s guidelines while maximizing your living space. We coordinate with condo boards, manage all permits, and handle every trade from demolition to final walk-through. Our experience with New York apartment and condo renovations means we understand the unique challenges of building regulations, noise restrictions, and elevator scheduling that come with urban renovation projects.',
      features: [
        { title: 'Full Apartment Gut Renovations', description: 'Complete teardown and rebuild with new layouts, finishes, and modern building systems.' },
        { title: 'Condo Board Coordination', description: 'We handle all condo board applications, insurance certificates, and building approvals.' },
        { title: 'Residential Unit Upgrades', description: 'Transform single or multi-family residential units with quality renovations that last.' },
        { title: 'Custom Layout Design', description: 'Optimize your apartment floor plan for better flow, natural light, and functional living.' },
      ],
      faqs: [
        { question: 'How long does a full apartment renovation take?', answer: 'A typical full apartment renovation takes 8-16 weeks depending on the scope, with condo projects potentially taking longer due to building coordination requirements.' },
        { question: 'Do you handle condo board approvals?', answer: 'Yes, we prepare all necessary documentation including alteration agreements, insurance certificates, and construction schedules required by your condo board or HOA.' },
        { question: 'Can you work within building noise restrictions?', answer: 'Absolutely. We schedule all loud work within your building\'s permitted hours and coordinate elevator usage for material deliveries.' },
      ]
    },
    'open-concept-layout': {
      name: 'Open Concept & Layout Remodeling',
      title: 'Open Concept & Layout Remodeling in NYC & Westchester',
      description: 'Create spacious, modern living areas by removing walls, adding room reconfigurations, and designing open-concept layouts that maximize light, flow, and functionality in your apartment.',
      benefits: ['Open, airy floor plans', 'Improved natural light & flow', 'Room additions & reconfigurations', 'Engineered structural support', 'Better room functionality', 'Modern living spaces'],
      detailedContent: 'Our open concept and layout remodeling services transform compartmentalized apartments into bright, connected living spaces. We assess load-bearing walls, install steel beams and headers where needed, and reconfigure room layouts to create the modern, flowing floor plans that today\'s homeowners desire. Whether you want to connect your kitchen to the living room, add a home office nook, or reconfigure bedrooms for growing families, our structural expertise and design vision deliver stunning results while maintaining the integrity of your building.',
      features: [
        { title: 'Non-Load-Bearing Wall Removal', description: 'Safely remove partition walls to open up your living space without compromising structural integrity.' },
        { title: 'Steel Beam & Header Installation', description: 'Engineer and install structural steel to support open spans where load-bearing walls are removed.' },
        { title: 'Room Additions & Reconfigurations', description: 'Add bedrooms, create home offices, or reconfigure spaces to match your evolving lifestyle.' },
        { title: 'Traffic Flow Optimization', description: 'Design layouts that improve daily movement patterns and make the most of every square foot.' },
      ],
      faqs: [
        { question: 'Can any wall be removed to create an open concept?', answer: 'Not all walls can be removed. We conduct a thorough structural assessment to identify load-bearing walls and engineer appropriate support beams when removal is desired.' },
        { question: 'Do I need permits for wall removal?', answer: 'Yes, any structural modification requires permits and engineering plans. We handle the entire permit process and coordinate with structural engineers.' },
        { question: 'Will open concept reduce my apartment value?', answer: 'Open concept layouts typically increase property value by 5-15% as they are highly desirable in today\'s market and create a more modern, spacious feel.' },
      ]
    },
    'luxury': {
      name: 'Luxury Apartment Renovations',
      title: 'Luxury Apartment Renovation Services in NYC & Westchester',
      description: 'Elevate your apartment with high-end custom millwork, marble accents, designer lighting, smart home integration, premium fixtures, and sophisticated detailing that transforms your space into a true luxury residence.',
      benefits: ['High-end custom finishes', 'Premium brand fixtures & hardware', 'Smart home integration', 'Designer lighting packages', 'Custom millwork & marble accents', 'Sophisticated architectural detailing'],
      detailedContent: 'Our luxury apartment renovation services cater to discerning homeowners who expect the finest materials, impeccable craftsmanship, and thoughtful design. We partner with premium suppliers and skilled artisans to deliver renovations featuring custom cabinetry, imported stone, designer hardware, integrated smart home technology, and architectural details that elevate every room. From concept to completion, our luxury renovation team ensures every surface, fixture, and finish meets the highest standards of quality and design excellence.',
      features: [
        { title: 'Premium Material Selection', description: 'Access to imported marbles, exotic woods, designer tiles, and luxury fixtures from top global brands.' },
        { title: 'Smart Home Integration', description: 'Pre-wire and install smart lighting, climate control, motorized shades, and integrated audio systems.' },
        { title: 'Custom Millwork & Cabinetry', description: 'Handcrafted built-ins, entertainment centers, walk-in closets, and bespoke furniture pieces.' },
        { title: 'Architectural Detailing', description: 'Coffered ceilings, decorative paneling, statement fireplaces, and custom molding packages.' },
      ],
      faqs: [
        { question: 'What defines a luxury renovation vs. a standard renovation?', answer: 'Luxury renovations feature premium materials (marble, exotic hardwoods), custom-built elements, smart home technology, designer fixtures, and meticulous attention to architectural details that create a high-end living experience.' },
        { question: 'How much more does a luxury renovation cost?', answer: 'Luxury renovations typically cost 2-3x more than standard renovations due to premium materials, custom fabrication, and specialized trades. We provide detailed proposals so you understand exactly where your investment goes.' },
        { question: 'Can you match specific design styles?', answer: 'Yes, we work with your vision — whether it\'s contemporary minimalist, classic pre-war elegance, mid-century modern, or transitional. Our team collaborates with designers to achieve your desired aesthetic.' },
      ]
    },
    'property-investment': {
      name: 'Property & Investment Renovations',
      title: 'Property & Investment Renovation Services in NYC & Westchester',
      description: 'Strategic renovation services designed for landlords, property investors, and multi-family unit owners looking to maximize rental yields, increase sale value, and meet code compliance requirements.',
      benefits: ['Maximize rental yields', 'Fast turnaround times', 'Durable, cost-effective materials', 'Code compliance upgrades', 'Multi-unit project management', 'Increased sale value'],
      detailedContent: 'We understand that investment property renovations require a different approach than personal residences. Our team focuses on strategic upgrades that deliver the highest return on investment — targeting kitchens, bathrooms, flooring, and common areas that directly impact rental rates and property values. We use durable, tenant-proof materials that look great and last through years of wear, complete projects on aggressive timelines to minimize vacancy, and ensure every unit meets current building codes. Whether you\'re flipping a single property or upgrading an entire multi-family building, we deliver quality renovations on budget and on schedule.',
      features: [
        { title: 'ROI-Focused Upgrades', description: 'Strategic improvements targeting kitchens, baths, and flooring that maximize rental income and sale price.' },
        { title: 'Multi-Unit Project Management', description: 'Efficiently renovate multiple units with coordinated scheduling to minimize building disruption.' },
        { title: 'Tenant-Ready Finishes', description: 'Durable, attractive materials designed to withstand heavy use while maintaining a modern appearance.' },
        { title: 'Code Compliance & Safety', description: 'Bring all units up to current building, fire, and safety codes for liability protection.' },
      ],
      faqs: [
        { question: 'How quickly can you turn around a rental unit?', answer: 'Standard rental unit refreshes take 2-4 weeks. Full gut renovations of investment units typically take 6-10 weeks depending on scope.' },
        { question: 'Do you offer volume pricing for multi-unit projects?', answer: 'Yes, we provide competitive pricing for multi-unit projects with economies of scale on materials and coordinated labor.' },
        { question: 'What renovations give the best ROI for rental properties?', answer: 'Kitchen and bathroom updates, modern flooring, fresh paint, and updated lighting typically provide the highest return. We can help you prioritize upgrades based on your target rental market.' },
      ]
    }
  },
  'kitchen-remodeling': {
    'cabinets': {
      name: 'Kitchen Cabinets',
      title: 'Kitchen Cabinet Installation & Design in NYC & Westchester',
      description: 'Upgrade your kitchen storage with custom, semi-custom, and pantry cabinets featuring soft-close hardware, premium wood construction, and smart storage solutions designed to maximize every inch of space.',
      benefits: ['Custom & semi-custom cabinet options', 'Pantry cabinet solutions', 'Soft-close hinges & drawer slides', 'Smart storage & organization', 'Premium wood construction', 'Professional installation'],
      detailedContent: 'The right cabinets define your kitchen\'s character and functionality. We offer everything from fully custom cabinets built to your exact specifications to high-quality semi-custom options that balance customization with value. Our cabinet installations include integrated pantry storage systems, corner lazy Susans, pull-out trash and recycling, deep drawer organizers, and soft-close mechanisms on every door and drawer. We work with premium wood species including maple, cherry, oak, and birch, with finishing options ranging from traditional stained wood to modern painted and lacquered surfaces.',
      features: [
        { title: 'Custom Cabinet Design', description: 'Built to your exact dimensions with premium wood, custom finishes, and hardware selection.' },
        { title: 'Semi-Custom Options', description: 'High-quality factory-built cabinets customized with your choice of door style, finish, and hardware.' },
        { title: 'Pantry & Storage Solutions', description: 'Tall pantry cabinets, pull-out shelving, corner solutions, and vertical dividers for maximum organization.' },
        { title: 'Soft-Close Everything', description: 'Premium soft-close hinges and full-extension drawer slides on every cabinet for quiet, smooth operation.' },
      ],
      faqs: [
        { question: 'What is the difference between custom and semi-custom cabinets?', answer: 'Custom cabinets are built from scratch to your exact specifications with unlimited design options. Semi-custom cabinets are factory-built in standard sizes but offer extensive choices in door styles, finishes, and hardware at a lower price point.' },
        { question: 'How long does cabinet installation take?', answer: 'Cabinet installation typically takes 3-5 days. If you\'re ordering custom cabinets, expect 6-10 weeks for fabrication before installation begins.' },
        { question: 'Can you refinish or reface existing cabinets?', answer: 'Yes, cabinet refacing (new doors and veneers on existing boxes) is a cost-effective alternative that can give your kitchen a completely new look at roughly 50% of the cost of new cabinets.' },
      ]
    },
    'countertops': {
      name: 'Kitchen Countertops',
      title: 'Kitchen Countertop Installation in NYC & Westchester',
      description: 'Add elegance and durability to your kitchen with professionally fabricated and installed countertops in quartz, marble, granite, porcelain, and waterfall island designs.',
      benefits: ['Quartz, marble & granite options', 'Porcelain slab countertops', 'Waterfall island designs', 'Custom edge profiles', 'Professional fabrication & installation', 'Seamless seams & finishing'],
      detailedContent: 'Your countertops are the workhorse of your kitchen and the centerpiece of its design. We source premium stone slabs from trusted fabricators and install them with precision, ensuring tight seams, perfect cutouts for sinks and cooktops, and polished edges that define your kitchen\'s style. Whether you prefer the durability of quartz, the timeless beauty of marble, the natural strength of granite, or the modern appeal of porcelain slabs, our team guides you through material selection, edge profiles, and layout planning to create the perfect surface for cooking, entertaining, and daily life.',
      features: [
        { title: 'Quartz Countertops', description: 'Engineered stone combining beauty with extreme durability — scratch, stain, and heat resistant with no sealing required.' },
        { title: 'Marble & Granite', description: 'Natural stone surfaces with unique veining and patterns, professionally sealed for lasting protection.' },
        { title: 'Waterfall Islands', description: 'Dramatic countertop edges that cascade down the sides of your island for a striking modern statement.' },
        { title: 'Porcelain Slabs', description: 'Ultra-thin, large-format porcelain surfaces offering realistic stone looks with superior stain resistance.' },
      ],
      faqs: [
        { question: 'Which countertop material is most durable?', answer: 'Quartz is the most durable everyday option — it\'s engineered to be scratch, stain, and heat resistant and never needs sealing. Granite and porcelain are also excellent choices for durability.' },
        { question: 'How long does countertop installation take?', answer: 'Template measurement takes one visit, fabrication takes 1-2 weeks, and installation is typically completed in one day. The entire process from template to installed countertops takes about 2-3 weeks.' },
        { question: 'Can you install a waterfall edge on my existing island?', answer: 'Yes, we can add waterfall edges to existing islands by fabricating matching side panels. We ensure the veining or pattern aligns seamlessly from top to side for a cohesive look.' },
      ]
    },
    'flooring': {
      name: 'Kitchen Flooring',
      title: 'Kitchen Flooring Installation in NYC & Westchester',
      description: 'Durable, water-resistant kitchen flooring including hardwood, engineered wood, tile, and luxury vinyl planks, with expert subfloor preparation and leveling for a flawless finish.',
      benefits: ['Hardwood flooring options', 'Engineered wood flooring', 'Tile & porcelain flooring', 'Luxury vinyl plank (LVP)', 'Professional floor preparation & leveling', 'Moisture-resistant materials'],
      detailedContent: 'Kitchen floors endure heavy foot traffic, spills, dropped utensils, and constant cleaning — so choosing the right material and ensuring proper installation is critical. Our kitchen flooring services start with thorough subfloor assessment and preparation, including leveling and moisture testing, to create the perfect foundation. We then install your chosen flooring with precision, ensuring tight seams, proper expansion gaps, and seamless transitions to adjacent rooms. From the warmth of hardwood and engineered wood to the waterproof durability of luxury vinyl plank and tile, we help you select the ideal material for your kitchen\'s demands and your design vision.',
      features: [
        { title: 'Hardwood & Engineered Wood', description: 'Timeless warmth and beauty with options for solid or engineered construction to suit your kitchen environment.' },
        { title: 'Luxury Vinyl Plank', description: '100% waterproof, scratch-resistant, and available in realistic wood and stone designs — ideal for kitchens.' },
        { title: 'Porcelain & Ceramic Tile', description: 'Extremely durable and water-resistant with endless design possibilities including large-format and mosaic patterns.' },
        { title: 'Subfloor Preparation', description: 'Professional leveling, moisture barriers, and repair to ensure your new flooring lays flat and lasts for decades.' },
      ],
      faqs: [
        { question: 'What is the best flooring for kitchens?', answer: 'Luxury vinyl plank (LVP) and porcelain tile are the top choices for kitchens due to their waterproof properties, durability, and easy maintenance. Engineered hardwood is also popular for its warmth and beauty.' },
        { question: 'Can you install new flooring over existing tile?', answer: 'In many cases, yes. If the existing tile is level and well-adhered, we can install certain flooring types directly over it. We assess each situation to determine the best approach.' },
        { question: 'How long does kitchen floor installation take?', answer: 'Most kitchen floor installations take 1-3 days depending on the material, room size, and subfloor prep required. We work efficiently to minimize kitchen downtime.' },
      ]
    },
    'lighting-finishing': {
      name: 'Kitchen Lighting & Finishing',
      title: 'Kitchen Lighting & Finishing Services in NYC & Westchester',
      description: 'Complete your kitchen renovation with expert lighting design, backsplash installation, painting, trim work, and all the final finishing details that make your kitchen shine.',
      benefits: ['Recessed & pendant lighting', 'Under-cabinet LED lighting', 'Backsplash installation', 'Interior painting & trim work', 'Dimmer & smart controls', 'Final finishing details'],
      detailedContent: 'The finishing touches transform a kitchen renovation from good to spectacular. Our lighting and finishing services encompass everything from layered lighting design — combining task lighting over work surfaces, ambient recessed lighting, decorative pendant fixtures, and under-cabinet LEDs — to stunning backsplash installations in subway tile, mosaic, glass, or natural stone. We complete every project with precision painting, crown molding, baseboard installation, outlet cover upgrades, and the meticulous details that create a polished, move-in-ready kitchen you\'ll love for years to come.',
      features: [
        { title: 'Layered Lighting Design', description: 'Strategic combination of recessed, pendant, and under-cabinet lighting for function and ambiance.' },
        { title: 'Backsplash Installation', description: 'Custom tile backsplashes in subway, mosaic, glass, or natural stone to protect walls and elevate design.' },
        { title: 'Painting & Trim Work', description: 'Premium interior painting, crown molding, baseboard installation, and trim carpentry for a finished look.' },
        { title: 'Smart Lighting Controls', description: 'Dimmer switches, smart controls, and zoned lighting for energy efficiency and customizable ambiance.' },
      ],
      faqs: [
        { question: 'How many recessed lights does a kitchen need?', answer: 'A general rule is one recessed light per 4-6 square feet of ceiling area, placed 2-3 feet from walls. We design custom lighting plans based on your kitchen\'s layout, ceiling height, and natural light.' },
        { question: 'What backsplash materials are best for kitchens?', answer: 'Ceramic and porcelain subway tiles are the most popular for their durability and easy cleaning. Glass, natural stone, and large-format porcelain slabs are excellent premium options.' },
        { question: 'Can you add under-cabinet lighting to existing cabinets?', answer: 'Yes, we can retrofit LED strip lighting under existing cabinets. Hardwired installations provide the cleanest look, but plug-in options are also available for simpler installations.' },
      ]
    }
  },
  'bathroom-remodeling': {
    'walk-in-showers': {
      name: 'Walk-In Showers & Glass Enclosures',
      title: 'Walk-In Showers & Glass Enclosures in NYC & Westchester',
      description: 'Replace your old tub with a stunning walk-in shower featuring frameless glass enclosures, curbless designs, built-in niches, bench seating, and premium shower systems for a modern, accessible bathroom.',
      benefits: ['Frameless glass shower enclosures', 'Curbless & barrier-free designs', 'Built-in shower niches & shelving', 'Custom bench seating', 'Premium rain & handheld shower systems', 'ADA-compliant accessibility options'],
      detailedContent: 'Walk-in showers have become the centerpiece of modern bathroom design, offering both luxury and accessibility. Our walk-in shower installations feature frameless glass enclosures with premium hardware, custom curbless designs with linear drains for barrier-free entry, built-in niches sized for your products, and integrated bench seating for comfort. We install thermostatic shower systems with rain heads, handheld sprays, and body jets, and ensure every installation is properly waterproofed with industry-leading membrane systems. Whether you want a minimalist frameless design or a fully tiled shower with multiple spray zones, we build it to last.',
      features: [
        { title: 'Frameless Glass Enclosures', description: 'Crystal-clear tempered glass panels with minimal hardware for a sleek, open shower experience.' },
        { title: 'Curbless Entry Design', description: 'Zero-threshold showers with linear drains and properly sloped floors for barrier-free accessibility.' },
        { title: 'Custom Niches & Benches', description: 'Waterproofed built-in niches for storage and tiled bench seating for comfort and safety.' },
        { title: 'Thermostatic Shower Systems', description: 'Precise temperature-controlled valves with rain heads, hand showers, and optional body sprays.' },
      ],
      faqs: [
        { question: 'Can you convert my bathtub to a walk-in shower?', answer: 'Yes, tub-to-shower conversions are one of our most popular services. We remove the tub, reinforce the subfloor, install proper waterproofing, and build your custom shower — typically completed in 5-7 days.' },
        { question: 'What is a curbless shower?', answer: 'A curbless shower has no threshold or lip at the entry — the floor slopes gently toward a linear drain. This creates a seamless, barrier-free entry that is both stylish and accessible.' },
        { question: 'How thick is frameless shower glass?', answer: 'We use 3/8" to 1/2" tempered glass for frameless enclosures. The thicker glass provides a premium feel and requires no metal framing for support.' },
      ]
    },
    'tile-waterproofing': {
      name: 'Bathroom Tile & Waterproofing',
      title: 'Bathroom Tile & Waterproofing in NYC & Westchester',
      description: 'Professional tile installation and waterproofing systems for bathroom floors, shower walls, and tub surrounds using porcelain, marble, mosaic, and heated floor systems with industry-leading waterproof membranes.',
      benefits: ['Porcelain & ceramic tile installation', 'Marble & natural stone tiling', 'Mosaic accent & feature walls', 'Waterproof membrane systems', 'Radiant heated floor options', 'Professional grout & sealing'],
      detailedContent: 'Proper tile installation and waterproofing are the foundation of any bathroom renovation that lasts. Our certified tile installers apply Schluter, Laticrete, or equivalent waterproof membrane systems to every wet area before setting a single tile — protecting your home from moisture damage for decades. We install porcelain, ceramic, marble, natural stone, and mosaic tiles with precision alignment, consistent grout lines, and sealed finishes. For added comfort, we integrate radiant floor heating systems beneath tile floors, providing warm surfaces on cold mornings. Every installation meets TCNA standards for waterproofing, drainage, and structural integrity.',
      features: [
        { title: 'Waterproof Membrane Systems', description: 'Industry-leading Schluter and Laticrete systems applied to all wet areas for permanent moisture protection.' },
        { title: 'Large-Format Tile Installation', description: 'Properly leveled installation of 12x24, 24x48, and larger format tiles for modern, minimal-grout aesthetics.' },
        { title: 'Mosaic & Accent Features', description: 'Custom mosaic patterns, accent strips, and feature walls that add artistic character to your bathroom.' },
        { title: 'Radiant Heated Floors', description: 'Electric or hydronic heating mats installed beneath tile for luxuriously warm bathroom floors year-round.' },
      ],
      faqs: [
        { question: 'Why is waterproofing so important in bathrooms?', answer: 'Water intrusion behind tiles is the #1 cause of bathroom renovation failure. Proper waterproof membranes prevent mold, rot, and structural damage — protecting your investment for 20+ years.' },
        { question: 'Can heated floors go under any tile?', answer: 'Yes, radiant heating works under virtually all tile types. Porcelain and ceramic are ideal conductors. We install the heating system before tiling so it\'s completely invisible and maintenance-free.' },
        { question: 'How long does bathroom tile installation take?', answer: 'A typical bathroom takes 3-5 days for tile installation including waterproofing, setting, grouting, and sealing. Complex patterns or natural stone may take longer.' },
      ]
    },
    'vanities-fixtures': {
      name: 'Bathroom Vanities & Fixtures',
      title: 'Bathroom Vanities & Fixtures in NYC & Westchester',
      description: 'Upgrade your bathroom with custom vanities, modern faucets, premium toilets, stylish mirrors, medicine cabinets, and coordinated bathroom lighting for a cohesive, polished look.',
      benefits: ['Custom & floating vanity options', 'Premium faucets & fixtures', 'Modern toilet upgrades', 'Mirrors & medicine cabinets', 'Coordinated bathroom lighting', 'Professional plumbing connections'],
      detailedContent: 'The vanity is the focal point of your bathroom — it sets the tone for the entire space. We install custom-built vanities, premium factory vanities, and modern floating designs in a range of styles from traditional to contemporary. Each installation includes coordinated faucets, sinks (undermount, vessel, or integrated), mirrors or medicine cabinets, and bathroom lighting that ties the design together. We also upgrade toilets to water-efficient models with comfort-height seats and soft-close lids, and install all plumbing connections with precision for leak-free, long-lasting performance.',
      features: [
        { title: 'Custom & Floating Vanities', description: 'Built-to-order or premium factory vanities in traditional, transitional, and modern floating designs.' },
        { title: 'Premium Faucets & Hardware', description: 'Curated fixtures from top brands in chrome, brushed nickel, matte black, and brass finishes.' },
        { title: 'Modern Toilet Upgrades', description: 'Water-efficient, comfort-height toilets with soft-close seats and sleek, modern profiles.' },
        { title: 'Mirrors & Medicine Cabinets', description: 'Framed mirrors, LED-backlit options, and recessed medicine cabinets with integrated lighting.' },
      ],
      faqs: [
        { question: 'What vanity size do I need?', answer: 'Standard single vanities are 24-36 inches wide, and double vanities are 60-72 inches. We measure your bathroom and recommend the ideal size that maximizes both counter space and floor space.' },
        { question: 'Can you install a floating vanity on any wall?', answer: 'Floating vanities require proper wall blocking behind the drywall for support. During renovation, we install blocking as part of the framing phase. For retrofit installations, we assess and reinforce the wall structure.' },
        { question: 'What toilet features should I consider?', answer: 'Look for comfort-height seats (17-19 inches), dual-flush for water savings, soft-close lid, and elongated bowl for comfort. We can also install bidet seats and wall-mounted models.' },
      ]
    },
    'luxury': {
      name: 'Luxury Bathroom Remodeling',
      title: 'Luxury Bathroom Remodeling Services in NYC & Westchester',
      description: 'Create the ultimate high-end bathroom with steam showers, heated floors, premium natural stone, floating vanities, designer lighting, and exquisite high-end finishes for a spa-quality retreat.',
      benefits: ['Steam shower installations', 'Radiant heated floors', 'Premium marble & stone surfaces', 'Floating designer vanities', 'Architectural & ambient lighting', 'High-end finishes & hardware'],
      detailedContent: 'Our luxury bathroom remodeling services transform ordinary bathrooms into extraordinary personal retreats. We specialize in creating spa-quality environments featuring steam shower systems with aromatherapy and chromotherapy, radiant heated floors throughout, premium natural stone surfaces (marble, travertine, onyx), floating designer vanities with integrated storage, and architectural lighting that creates perfect ambiance. Every element is carefully curated — from Waterworks and Kohler fixtures to custom glass work and imported stone — to create a bathroom that rivals the finest hotel spas. Our luxury bathroom projects consistently become the most admired rooms in our clients\' homes.',
      features: [
        { title: 'Steam Shower Systems', description: 'Fully enclosed steam showers with digital controls, aromatherapy infusion, and chromotherapy lighting.' },
        { title: 'Premium Natural Stone', description: 'Book-matched marble slabs, travertine, quartzite, and onyx surfaces for walls, floors, and countertops.' },
        { title: 'Designer Vanity Packages', description: 'Floating vanities with integrated LED lighting, premium countertops, and coordinated designer hardware.' },
        { title: 'Architectural Lighting', description: 'Layered lighting with LED cove lights, backlit mirrors, pendant fixtures, and dimmable ambient zones.' },
      ],
      faqs: [
        { question: 'What does a luxury bathroom renovation include?', answer: 'A luxury bathroom typically includes premium stone surfaces, custom glass shower enclosures, steam systems, heated floors, designer fixtures, floating vanities, and architectural lighting — all coordinated into a cohesive design.' },
        { question: 'How much does a luxury bathroom renovation cost?', answer: 'Luxury bathrooms typically range from $40,000-$100,000+ depending on size, materials, and features. Premium stone, steam systems, and custom elements drive the cost above standard renovations.' },
        { question: 'Do you handle the design aspect?', answer: 'Yes, we collaborate with interior designers or work from our own design expertise to create a cohesive luxury bathroom vision, from material selection to fixture placement and lighting design.' },
      ]
    }
  },
  'interior-painting': {
    'painting-prep': {
      name: 'Interior Painting & Surface Prep',
      title: 'Interior Painting & Surface Preparation in NYC & Westchester',
      description: 'Professional interior painting with thorough surface preparation including sanding, scraping, priming, and caulking. We use premium low-VOC paints for beautiful, long-lasting results with crisp lines and flawless coverage.',
      benefits: ['Premium low-VOC paints', 'Thorough surface preparation', 'Crisp, clean paint lines', 'Complete furniture & floor protection', 'Primer & sealant application', 'Fast, professional execution'],
      detailedContent: 'A flawless paint job starts long before the brush touches the wall. Our interior painting services begin with meticulous surface preparation — sanding rough spots, scraping peeling paint, filling nail holes and cracks, caulking gaps around trim, and applying appropriate primers to ensure paint adhesion and longevity. We protect your floors, furniture, and fixtures with professional-grade coverings, then apply premium paints from Benjamin Moore and Sherwin-Williams using a combination of spray, roll, and brush techniques for smooth, even coverage. Every project includes crisp cut-in lines at ceilings and trim, and we won\'t leave until your space looks perfect.',
      features: [
        { title: 'Complete Surface Preparation', description: 'Sanding, scraping, patching, caulking, and priming for a smooth, paint-ready surface that lasts.' },
        { title: 'Premium Paint Application', description: 'Expert spray, roll, and brush techniques using Benjamin Moore and Sherwin-Williams premium paints.' },
        { title: 'Color Consultation', description: 'Help selecting the perfect colors, sheens, and accent walls to complement your décor and lighting.' },
        { title: 'Floor & Furniture Protection', description: 'Professional-grade drop cloths, plastic sheeting, and painter\'s tape to protect every surface.' },
      ],
      faqs: [
        { question: 'How long does it take to paint a room?', answer: 'A standard room takes 1 day including preparation and two coats. Larger rooms or those requiring extensive prep work may take 1.5-2 days.' },
        { question: 'What paint sheen should I choose?', answer: 'Eggshell or satin is ideal for living areas (easy to clean, subtle sheen). Semi-gloss works best for trim, doors, and moisture-prone areas. Flat/matte is great for ceilings and low-traffic areas.' },
        { question: 'Do I need primer before painting?', answer: 'Primer is essential when covering dark colors, painting new drywall, covering stains, or switching paint types. We assess each surface and apply the appropriate primer for the best results.' },
      ]
    },
    'drywall-plastering': {
      name: 'Drywall Repair & Plastering',
      title: 'Drywall Repair & Plastering Services in NYC & Westchester',
      description: 'Expert drywall and plaster repair including crack filling, water damage restoration, hole patching, skim coating, and traditional plastering for perfectly smooth, paint-ready walls and ceilings.',
      benefits: ['Seamless drywall patching', 'Water damage restoration', 'Traditional skim coating', 'Plaster crack repair', 'New drywall installation', 'Glass-smooth wall finishes'],
      detailedContent: 'Whether you have cracked plaster in a pre-war building, water-damaged drywall, or walls peppered with holes from moved furniture, our repair team restores your surfaces to like-new condition. We specialize in both modern drywall repair and traditional plaster restoration — understanding the unique techniques each material requires. Our skim coating services create glass-smooth surfaces over damaged walls, and our plaster repair work preserves the character of historic homes while ensuring structural stability. Every repair is sanded smooth, primed, and finished to be completely invisible under paint.',
      features: [
        { title: 'Drywall Patching & Repair', description: 'Invisible repairs for holes, dents, cracks, and damaged sections using matching drywall and compound.' },
        { title: 'Water Damage Restoration', description: 'Remove damaged material, treat for mold, install new drywall, and restore finishes after leaks or flooding.' },
        { title: 'Skim Coating', description: 'Apply thin layers of joint compound over entire walls to create a perfectly smooth, uniform surface.' },
        { title: 'Traditional Plaster Repair', description: 'Restore cracked, bulging, or crumbling plaster walls in older homes using appropriate lime or gypsum plasters.' },
      ],
      faqs: [
        { question: 'Can you fix water-damaged ceilings?', answer: 'Yes, we remove damaged drywall or plaster, address the moisture source, treat for mold if present, install new material, and finish to match surrounding surfaces seamlessly.' },
        { question: 'What is skim coating?', answer: 'Skim coating applies thin layers of joint compound across an entire wall to create a smooth, uniform surface. It\'s ideal for walls with many small imperfections, old wallpaper damage, or rough textures.' },
        { question: 'Should I repair or replace old plaster walls?', answer: 'If the plaster is generally sound with minor cracks, repair is more cost-effective and preserves the wall\'s character. If plaster is extensively crumbling or pulling away from lath, replacement with drywall may be the better option.' },
      ]
    },
    'ceiling-texture': {
      name: 'Ceiling Repairs & Texture Matching',
      title: 'Ceiling Repairs & Texture Matching in NYC & Westchester',
      description: 'Professional ceiling repair and texture services including crack repair, water stain removal, popcorn ceiling removal, and expert texture matching for knockdown, orange peel, and smooth finishes.',
      benefits: ['Plaster crack repair', 'Water stain removal', 'Popcorn ceiling removal', 'Knockdown texture matching', 'Orange peel texture', 'Smooth ceiling finishes'],
      detailedContent: 'Ceilings present unique challenges — they\'re highly visible, difficult to access, and any imperfection catches the eye. Our ceiling repair and texture specialists handle everything from hairline plaster cracks and water stains to full popcorn ceiling removal and texture restoration. When patching or repairing ceiling sections, we expertly match existing textures — whether knockdown, orange peel, skip trowel, or smooth — so repairs blend seamlessly with the surrounding ceiling. For homeowners looking to modernize, we remove dated popcorn or textured ceilings and refinish them to a clean, contemporary smooth finish.',
      features: [
        { title: 'Crack & Water Stain Repair', description: 'Repair plaster cracks, cover water stains with stain-blocking primer, and restore ceiling surfaces.' },
        { title: 'Popcorn Ceiling Removal', description: 'Safely remove dated acoustic/popcorn ceilings and refinish to a smooth, modern surface.' },
        { title: 'Texture Matching', description: 'Precisely replicate knockdown, orange peel, skip trowel, or smooth textures in repaired areas.' },
        { title: 'Ceiling Painting', description: 'Bright, even ceiling painting with flat or matte finishes that brighten rooms and hide imperfections.' },
      ],
      faqs: [
        { question: 'Is popcorn ceiling removal messy?', answer: 'It can be, but we use professional containment methods — covering floors and walls with plastic, working in sections, and thoroughly cleaning afterward. The result is well worth the temporary disruption.' },
        { question: 'Can water stains on ceilings be fully covered?', answer: 'Yes, we apply specialized stain-blocking primers (like Kilz or Zinsser) that permanently seal water stains before painting. The stain will not bleed through when properly treated.' },
        { question: 'How do you match existing ceiling texture?', answer: 'We test spray patterns on sample boards, adjusting mud consistency and spray pressure until we achieve an exact match. Our experienced technicians can replicate virtually any ceiling texture.' },
      ]
    },
    'trim-finishing': {
      name: 'Trim Painting & Wall Finishing',
      title: 'Trim Painting & Wall Finishing Services in NYC & Westchester',
      description: 'Precision painting of crown molding, baseboards, door casings, and window frames, plus professional wall finishing including caulking, priming, and final coat application for a polished result.',
      benefits: ['Crown molding painting', 'Baseboard & trim painting', 'Door & window casing finishing', 'Professional caulking', 'Semi-gloss & high-gloss finishes', 'Architectural detail enhancement'],
      detailedContent: 'Trim painting and wall finishing are where craftsmanship truly shows. Our painters use steady hands and premium semi-gloss or high-gloss paints to deliver flawless trim throughout your home — crisp lines against walls, smooth finishes on door casings, and consistent color on every baseboard, chair rail, and crown molding profile. Wall finishing services include final caulking of all gaps between trim and walls, filling any remaining nail holes, applying primers where needed, and delivering uniform sheen and texture across every surface. These finishing details transform a renovation from \"done\" to \"beautiful.\"',
      features: [
        { title: 'Trim & Molding Painting', description: 'Precision painting of crown molding, baseboards, chair rails, and wainscoting with durable semi-gloss finishes.' },
        { title: 'Door & Window Finishing', description: 'Smooth, drip-free painting of door faces, jambs, window casings, and sills with no brush marks.' },
        { title: 'Gap & Hole Filling', description: 'Professional caulking of all trim-to-wall gaps and filling of nail holes for a seamless appearance.' },
        { title: 'Wall Finishing Coats', description: 'Final primer and paint application ensuring uniform sheen, color consistency, and lasting durability.' },
      ],
      faqs: [
        { question: 'Should trim be painted before or after walls?', answer: 'We typically paint trim first, then walls. This allows us to use tape efficiently and achieve the cleanest lines. In renovation settings, trim is often painted before installation for the smoothest finish.' },
        { question: 'What paint finish is best for trim?', answer: 'Semi-gloss is the most popular choice for trim — it\'s durable, easy to clean, and creates an attractive contrast with eggshell or satin walls. High-gloss provides an even more dramatic, formal look.' },
        { question: 'How do you avoid brush strokes on trim?', answer: 'We use high-quality angled brushes, premium self-leveling paints, and proper technique — loading the brush correctly and maintaining a wet edge. For the smoothest finish, we spray-paint trim pieces before installation.' },
      ]
    }
  },
  'custom-millwork': {
    'built-ins-shelving': {
      name: 'Custom Built-Ins & Shelving',
      title: 'Custom Built-Ins & Shelving in NYC & Westchester',
      description: 'Custom-designed bookshelves, media centers, closet organizers, window seats, pantry systems, and floating shelves built to your exact wall measurements for perfect fit and maximum storage.',
      benefits: ['Perfect wall-to-wall fit', 'Custom bookshelves & media centers', 'Closet organizer systems', 'Pantry shelving solutions', 'Floating shelf designs', 'Premium solid wood construction'],
      detailedContent: 'Factory furniture never fits quite right — our custom built-ins are designed and constructed to match your exact wall dimensions, ceiling height, and storage needs. We build bookshelves that span entire walls, entertainment centers that integrate seamlessly with your TV and components, closet organizers with custom drawers, shelves, and hanging rods, pantry systems with pull-out shelving and spice racks, and beautiful floating shelves that appear to defy gravity. Every piece is constructed from premium hardwoods or painted MDF, finished to match your home\'s existing trim, and installed with precision for a permanent, furniture-grade result.',
      features: [
        { title: 'Wall-to-Wall Bookshelves', description: 'Custom-fit bookshelves spanning full walls with adjustable shelves, integrated lighting, and ladder options.' },
        { title: 'Media Center Built-Ins', description: 'Entertainment centers with concealed wiring, component shelving, and custom panels for a clean, organized look.' },
        { title: 'Closet Systems', description: 'Custom closet organizers with drawers, double-hang sections, shoe racks, and accessory storage.' },
        { title: 'Floating Shelves', description: 'Heavy-duty floating shelves with hidden mounting systems that hold real weight without visible brackets.' },
      ],
      faqs: [
        { question: 'How much do custom built-ins cost?', answer: 'Custom built-in pricing varies based on size, material, and complexity. A simple bookshelf wall starts around $3,000-$5,000, while elaborate entertainment centers or full-wall units with custom detailing can range from $8,000-$20,000+.' },
        { question: 'What materials do you use for built-ins?', answer: 'We use premium hardwoods (maple, oak, cherry) for stained finishes and high-grade MDF or birch plywood for painted finishes. All hardware is soft-close and commercial grade.' },
        { question: 'Can built-ins be removed later?', answer: 'Custom built-ins are designed as permanent installations. However, they can be removed if needed — they significantly increase home value, so most homeowners consider them a lasting investment.' },
      ]
    },
    'molding-trim': {
      name: 'Crown Molding, Baseboard & Trim',
      title: 'Crown Molding, Baseboard & Trim in NYC & Westchester',
      description: 'Professional installation of crown molding, baseboards, chair rails, wainscoting, window and door casings, and decorative trim that adds architectural elegance and character to every room.',
      benefits: ['Crown molding installation', 'Baseboard replacement & upgrades', 'Chair rail & wainscoting', 'Door & window casing trim', 'Perfect mitered joints', 'Painted or stained finishes'],
      detailedContent: 'Trim carpentry is the art of framing a room — turning plain walls into architectural statements. Our trim carpenters install crown molding with perfect mitered corners, upgrade baseboards from builder-grade to elegant profiles, add chair rails and wainscoting for classic character, and replace door and window casings to unify your home\'s design language. We work in both wood and polyurethane, matching existing profiles in older homes or introducing new trim packages in modern renovations. Every joint is tight, every angle is precise, and every piece is caulked, filled, and painted or stained for a flawless, professional finish.',
      features: [
        { title: 'Crown Molding', description: 'Elegant ceiling-to-wall transitions with traditional or contemporary profiles, perfectly mitered at every corner.' },
        { title: 'Baseboard Upgrades', description: 'Replace thin builder-grade baseboards with substantial profiles that frame your floors beautifully.' },
        { title: 'Wainscoting & Chair Rails', description: 'Classic wall paneling and chair rails that add depth, texture, and architectural interest to any room.' },
        { title: 'Window & Door Casings', description: 'Matching trim around all openings for a cohesive, finished look throughout your home.' },
      ],
      faqs: [
        { question: 'What crown molding size should I choose?', answer: 'For standard 8-foot ceilings, 3.5-5" crown molding works best. For 9-10 foot ceilings, 5-7" is ideal. Taller ceilings can accommodate 7"+ profiles. We bring samples so you can see proportions in your space.' },
        { question: 'Can you match my home\'s existing trim profile?', answer: 'Yes, we can match virtually any existing trim profile. We measure your current molding and either source matching stock profiles or have custom knives made to replicate the exact profile.' },
        { question: 'Wood or polyurethane — which is better?', answer: 'Wood is traditional and can be stained or painted. Polyurethane is lighter, won\'t crack or warp, and is ideal for painted applications. For stained finishes, wood is the only option. For painted trim, both work excellently.' },
      ]
    },
    'doors': {
      name: 'Door Installation',
      title: 'Interior & Exterior Door Installation in NYC & Westchester',
      description: 'Professional installation of pre-hung doors, slab replacements, bifold closet doors, sliding pocket doors, barn doors, and exterior entry doors with proper weatherproofing and hardware.',
      benefits: ['Pre-hung door installation', 'Slab door replacements', 'Pocket & barn doors', 'Bifold closet doors', 'Premium lockset installation', 'Proper alignment & weatherproofing'],
      detailedContent: 'Doors are one of the most-used features in any home, and properly installed doors make a remarkable difference in both function and feel. We install pre-hung interior doors with perfect swing, level, and plumb alignment; replace old door slabs while reusing existing frames; install space-saving pocket doors and trendy barn doors; and upgrade bifold closet doors for smooth, reliable operation. For exterior entries, we install insulated, weatherproofed doors with premium locksets and deadbolts. Every installation includes precise shimming, secure anchoring, smooth hardware operation, and finished trim that frames the door beautifully.',
      features: [
        { title: 'Pre-Hung Interior Doors', description: 'Complete door and frame units installed with perfect swing, alignment, and smooth latch operation.' },
        { title: 'Sliding Pocket Doors', description: 'Space-saving doors that slide into the wall — ideal for bathrooms, closets, and tight floor plans.' },
        { title: 'Barn Door Systems', description: 'Decorative sliding barn doors with premium track hardware for a modern farmhouse or industrial look.' },
        { title: 'Exterior Entry Doors', description: 'Insulated, weatherproofed entry doors with premium locksets, deadbolts, and threshold sealing.' },
      ],
      faqs: [
        { question: 'How long does a door installation take?', answer: 'A pre-hung interior door takes about 2-3 hours to install including trim. A pocket door takes a full day since it requires wall modification. Exterior doors take 4-6 hours including weatherproofing.' },
        { question: 'Can you install a pocket door in an existing wall?', answer: 'Yes, but it requires opening the wall, potentially relocating electrical or plumbing, and installing a pocket door frame. We assess the wall structure and reroute any utilities as needed.' },
        { question: 'What door style should I choose?', answer: 'Shaker-style doors are the most popular for their clean, versatile look. Panel doors add traditional character. Flush doors create a sleek, modern aesthetic. We can show you options that match your home\'s style.' },
      ]
    },
    'finish-woodwork': {
      name: 'Finish Carpentry & Woodwork',
      title: 'Finish Carpentry & Woodwork in NYC & Westchester',
      description: 'High-end finish carpentry including fireplace mantels, stair railings, custom ceiling beams, decorative wood slats, accent walls, column wraps, and detailed wood panel installations.',
      benefits: ['Custom fireplace mantels', 'Stair railings & handrails', 'Decorative ceiling beams', 'Wood slat accent walls', 'Column wraps & paneling', 'Premium wood staining & sealing'],
      detailedContent: 'Finish carpentry is where craftsmanship transforms a house into a home. Our finish carpenters create the bespoke wood elements that give your spaces character and warmth — handcrafted fireplace mantels and surrounds, sturdy stair railings and handrails with custom balusters, decorative ceiling beams (structural or cosmetic), modern wood slat accent walls, column wraps that add architectural presence, and custom panel installations. We work with premium hardwoods, apply expert staining and finishing techniques, and ensure every joint, transition, and detail is executed with furniture-grade precision.',
      features: [
        { title: 'Fireplace Mantels & Surrounds', description: 'Custom-built mantels in wood or stone with integrated shelving and architectural detailing.' },
        { title: 'Stair Railings & Balusters', description: 'New stair systems or upgrades with custom handrails, balusters, newel posts, and treads.' },
        { title: 'Decorative Ceiling Beams', description: 'Real or cosmetic wood beams that add warmth and architectural character to any room.' },
        { title: 'Wood Slat & Panel Accent Walls', description: 'Modern vertical or horizontal wood slats and custom paneling that create stunning focal points.' },
      ],
      faqs: [
        { question: 'Are decorative ceiling beams structural?', answer: 'They can be either. Cosmetic beams are hollow, lightweight boxes that attach to the ceiling for visual impact. Structural beams are solid and bear load. We install both types and can advise on which is appropriate.' },
        { question: 'What wood species work best for accent walls?', answer: 'Cedar and reclaimed wood are popular for rustic looks. Walnut and white oak create modern, refined statements. Pine is cost-effective and takes stain beautifully. We source wood based on your desired aesthetic and budget.' },
        { question: 'Can you match existing woodwork in my home?', answer: 'Yes, we carefully match wood species, stain colors, and finishing techniques to blend new work seamlessly with existing carpentry, especially important in historic or period homes.' },
      ]
    }
  },
  'full-interior-renovation': {
    'gut-whole-home': {
      name: 'Gut Renovations & Whole-Home Remodeling',
      title: 'Gut Renovations & Whole-Home Remodeling in NYC & Westchester',
      description: 'Take your home down to the studs and rebuild it exactly the way you want with new walls, wiring, plumbing, finishes, and layouts — or renovate every room under one coordinated whole-home project.',
      benefits: ['Brand-new building systems', 'Fully customized layout', 'Modern, code-compliant construction', 'Consistent design throughout', 'Single point of accountability', 'Maximized long-term value'],
      detailedContent: 'A gut renovation is the ultimate fresh start — we strip your home to its structural bones and rebuild it with modern systems, optimized layouts, and premium finishes throughout. This approach is ideal when you love your location but not your floor plan, when building systems are outdated, or when you want a completely custom home without new construction. Our whole-home remodeling option renovates every room under a single coordinated project — kitchen, bathrooms, bedrooms, living areas, and hallways — ensuring consistent design language, efficient scheduling across trades, and a single point of accountability from start to finish.',
      features: [
        { title: 'Complete Gut Renovations', description: 'Strip to studs and rebuild with new electrical, plumbing, HVAC, insulation, walls, and finishes.' },
        { title: 'Whole-Home Coordination', description: 'Renovate every room under one project with coordinated trades for efficient, consistent results.' },
        { title: 'Modern System Upgrades', description: 'Replace outdated wiring, plumbing, and HVAC with modern, energy-efficient, code-compliant systems.' },
        { title: 'Custom Floor Plans', description: 'Work with architects to redesign your layout — add bedrooms, expand kitchens, or create open concepts.' },
      ],
      faqs: [
        { question: 'How long does a gut renovation take?', answer: 'A full gut renovation typically takes 4-8 months depending on the size and complexity. Whole-home remodeling without full gut work takes 3-6 months.' },
        { question: 'Where do we live during a gut renovation?', answer: 'Most families need to relocate during a gut renovation since all systems (plumbing, electrical) are disconnected. We provide a detailed timeline so you can plan temporary housing.' },
        { question: 'Is gut renovation more cost-effective than buying new?', answer: 'In many NYC-area locations, gut renovating your existing home costs 30-50% less than purchasing a comparable new home, while allowing you to stay in your preferred neighborhood and customize every detail.' },
      ]
    },
    'layout-combination': {
      name: 'Layout Redesign & Apartment Combination',
      title: 'Layout Redesign & Apartment Combination in NYC & Westchester',
      description: 'Reconfigure your floor plan by removing walls and installing structural support, or merge two adjacent apartments into one seamless home — handling demolition, structural work, board approvals, and all MEP coordination.',
      benefits: ['Open, functional floor plans', 'Structural wall removal expertise', 'Apartment combination specialists', 'Board & permit coordination', 'Engineering & MEP expertise', 'Dramatically increased living space'],
      detailedContent: 'Sometimes the best renovation isn\'t adding square footage — it\'s reimagining how your existing space works. Our layout redesign services safely remove non-load-bearing walls, engineer and install steel beams to open up load-bearing walls, and reconfigure rooms for better flow, light, and function. For apartment combinations, we merge two adjacent units into one cohesive home — handling demolition, structural engineering, condo board applications, DOB filings, and the reconfiguration of separate mechanical, electrical, and plumbing systems into unified building services. The result is a dramatically larger, custom-designed home in your existing building.',
      features: [
        { title: 'Structural Wall Removal', description: 'Engineer and install steel beams, headers, and columns to safely remove load-bearing walls.' },
        { title: 'Apartment Combination', description: 'Merge two units into one home with unified layouts, systems, and seamless architectural transitions.' },
        { title: 'Space Planning', description: 'Professional floor plan optimization with detailed drawings and 3D renderings before construction begins.' },
        { title: 'Board & Permit Management', description: 'Handle alteration agreements, DOB filings, engineering plans, and building approvals for you.' },
      ],
      faqs: [
        { question: 'How do I know if a wall is load-bearing?', answer: 'We bring in a licensed structural engineer to assess your walls. Load-bearing walls can often still be removed — they just require steel beam or column support to transfer the load.' },
        { question: 'What does apartment combination involve?', answer: 'It involves demolition of the separating wall, structural reinforcement, unification of electrical panels, plumbing, and HVAC systems, floor leveling between units, and a complete design integration to create one cohesive home.' },
        { question: 'How long does an apartment combination take?', answer: 'Apartment combinations typically take 4-8 months from board approval to completion, with the permit and board process adding 2-4 months before construction begins.' },
      ]
    },
    'pre-war-restoration': {
      name: 'Pre-War Apartment Restoration',
      title: 'Pre-War Apartment Restoration in NYC & Westchester',
      description: 'Preserve the character of classic New York pre-war apartments while updating systems, finishes, and comfort for modern living — restoring original plaster, moldings, hardwood floors, and period details.',
      benefits: ['Restored period detailing', 'Modern systems & comfort', 'Plaster & molding expertise', 'Hardwood floor restoration', 'Original character preservation', 'Modernized utilities hidden behind historic details'],
      detailedContent: 'Pre-war apartments are treasures of New York architecture — featuring gracious room proportions, solid plaster walls, original hardwood floors, detailed crown moldings, and architectural elements that simply aren\'t built anymore. Our pre-war restoration specialists preserve and restore these character-defining features while discreetly modernizing the systems behind them. We repair and restore original plaster rather than covering with drywall, match and replicate damaged crown molding profiles, refinish original hardwood floors, and update electrical, plumbing, and HVAC systems without sacrificing the apartment\'s historic character. The result is a home that honors its past while performing like a modern residence.',
      features: [
        { title: 'Plaster Wall Restoration', description: 'Repair, restore, and skim-coat original plaster walls rather than replacing with drywall to preserve character.' },
        { title: 'Molding & Detail Replication', description: 'Match and reproduce original crown molding profiles, ceiling medallions, and decorative plaster details.' },
        { title: 'Hardwood Floor Refinishing', description: 'Sand, repair, stain, and seal original hardwood floors to restore their century-old beauty.' },
        { title: 'Hidden System Modernization', description: 'Upgrade electrical, plumbing, and HVAC systems routed behind walls and ceilings to maintain historic aesthetics.' },
      ],
      faqs: [
        { question: 'Should I keep original plaster or switch to drywall?', answer: 'We strongly recommend preserving original plaster when possible — it\'s denser, more soundproof, and gives walls a character that drywall can\'t replicate. We repair and skim coat plaster to a smooth, paintable surface.' },
        { question: 'Can you replicate damaged crown molding?', answer: 'Yes, we can match virtually any historic molding profile. We measure the existing profile and either source matching stock or have custom knives made to run new matching sections.' },
        { question: 'Can you modernize a pre-war apartment without losing its character?', answer: 'Absolutely — that\'s our specialty. We route new wiring and plumbing through existing wall and ceiling cavities, update kitchens and baths with period-appropriate designs, and preserve all original architectural details.' },
      ]
    },
    'turnkey-coordination': {
      name: 'Turnkey Build-Outs & Project Coordination',
      title: 'Turnkey Build-Outs & Project Coordination in NYC & Westchester',
      description: 'Complete, move-in-ready renovations from design through final walk-through with full permit management, trade scheduling, and space planning — every detail handled by our team.',
      benefits: ['Move-in-ready results', 'Design-to-finish management', 'Permit & inspection handling', 'Coordinated trade scheduling', 'Space planning & material selection', 'Stress-free experience'],
      detailedContent: 'Our turnkey build-out service is the ultimate hands-off renovation experience. We manage every aspect of your project from initial design and space planning through permitting, construction, trade coordination, inspections, and final cleaning. You get a single point of contact, a detailed schedule, and regular progress updates — without the stress of coordinating multiple contractors, filing permits, or managing material deliveries. Our project coordinators handle vendor scheduling, inspect every trade\'s work, manage change orders, and ensure your renovation is completed on time, on budget, and to the highest quality standards. Just hand us the keys and we\'ll hand them back with your dream home ready to enjoy.',
      features: [
        { title: 'Full Project Management', description: 'Dedicated project manager handling scheduling, vendor coordination, inspections, and progress reporting.' },
        { title: 'Permit & DOB Coordination', description: 'Filing all necessary permits, scheduling inspections, and managing building department requirements.' },
        { title: 'Space Planning & Design', description: 'Professional floor plans, material selections, and 3D renderings before construction begins.' },
        { title: 'Quality Assurance', description: 'Multi-point inspections at each phase ensuring every trade delivers to our quality standards.' },
      ],
      faqs: [
        { question: 'What does "turnkey" mean?', answer: 'Turnkey means we handle everything — design, permits, construction, inspections, and final cleaning. You literally turn the key and walk into your finished home.' },
        { question: 'How do you keep the project on budget?', answer: 'We provide detailed, itemized proposals upfront, set realistic allowances, track costs weekly, and communicate any potential changes before they happen. No surprise invoices.' },
        { question: 'How often will I get progress updates?', answer: 'Your dedicated project manager provides weekly written updates with photos, plus you can visit the site (safely) anytime. We also schedule milestone walk-throughs at key project phases.' },
      ]
    }
  },
  'flooring': {
    'hardwood-engineered': {
      name: 'Hardwood & Engineered Wood Flooring',
      title: 'Hardwood & Engineered Wood Flooring in NYC & Westchester',
      description: 'Timeless solid hardwood and dimensionally stable engineered wood flooring installed with precision — available in a wide range of species, stains, plank widths, and installation methods.',
      benefits: ['Solid hardwood installation', 'Engineered wood flooring', 'Wide plank options', 'Custom stains & finishes', 'Nail-down & floating methods', 'Adds significant home value'],
      detailedContent: 'Nothing matches the warmth and beauty of real wood flooring. Our hardwood installation services cover both solid hardwood — ideal for ground-level and second-floor installations — and engineered hardwood, which offers superior dimensional stability for apartments, condos, and rooms over concrete or radiant heat. We carry a full range of species (oak, maple, walnut, hickory, ash), plank widths from traditional 3" strips to modern 7" wide planks, and finishing options including site-finished custom stains and prefinished factory coatings. Our installers use nail-down, glue-down, or floating installation methods depending on your subfloor type, and every job includes thorough acclimation, precision fitting, and flawless transitions.',
      features: [
        { title: 'Solid Hardwood Floors', description: 'Classic nail-down hardwood in oak, maple, walnut, and more — can be sanded and refinished for decades.' },
        { title: 'Engineered Hardwood', description: 'Real wood veneer over stable plywood core — ideal for condos, concrete slabs, and radiant heat systems.' },
        { title: 'Wide Plank Options', description: 'Modern 5-7" wide planks that create expansive, contemporary floor designs with fewer seams.' },
        { title: 'Custom Staining', description: 'Site-finished floors stained to your exact color preference — from natural to dark espresso and everything between.' },
      ],
      faqs: [
        { question: 'Solid vs. engineered hardwood — which is better?', answer: 'Solid hardwood is ideal for traditional installations and can be refinished many times. Engineered hardwood is better for apartments (less noise transmission), concrete subfloors, and rooms with radiant heat due to its dimensional stability.' },
        { question: 'How long does hardwood floor installation take?', answer: 'For an average room (200 sq ft), installation takes 1-2 days. If site-finishing with custom stain and polyurethane, add 3-5 days for multiple coats and drying time.' },
        { question: 'How long do hardwood floors last?', answer: 'Solid hardwood floors can last 100+ years with proper maintenance and periodic refinishing. Engineered hardwood typically lasts 30-50+ years depending on the veneer thickness.' },
      ]
    },
    'vinyl-tile': {
      name: 'Luxury Vinyl Plank & Tile Flooring',
      title: 'Luxury Vinyl Plank & Tile Flooring in NYC & Westchester',
      description: 'Waterproof, scratch-resistant luxury vinyl plank (LVP) and porcelain or ceramic tile flooring with realistic wood and stone designs — installed with precision over properly prepared subfloors.',
      benefits: ['100% waterproof LVP', 'Porcelain & ceramic tile', 'Realistic wood & stone looks', 'Scratch & dent resistant', 'Easy maintenance', 'Ideal for kitchens & baths'],
      detailedContent: 'Luxury vinyl plank and tile flooring represent the best of modern flooring technology — offering the look of natural materials with superior durability and water resistance. Our LVP installations feature rigid-core construction that won\'t dent, scratch, or warp, with realistic wood and stone visuals that are nearly indistinguishable from the real thing. For tile flooring, we install porcelain and ceramic in a full range of sizes, patterns, and layouts — from classic subway to large-format rectified tiles with minimal grout lines. Both options are ideal for kitchens, bathrooms, laundry rooms, and high-traffic areas where moisture resistance and durability are essential.',
      features: [
        { title: 'Luxury Vinyl Plank (LVP)', description: 'Rigid-core waterproof planks with realistic wood visuals, built-in underlayment, and click-lock installation.' },
        { title: 'Porcelain Floor Tile', description: 'Dense, durable porcelain tiles in wood-look, stone-look, and decorative patterns with sealed grout.' },
        { title: 'Large-Format Tile', description: '12x24, 24x24, and larger tiles with rectified edges for minimal grout lines and a modern, seamless look.' },
        { title: 'Pattern & Layout Design', description: 'Custom tile patterns including herringbone, chevron, brick lay, and basketweave for visual interest.' },
      ],
      faqs: [
        { question: 'Is LVP really waterproof?', answer: 'Yes, quality LVP has a 100% waterproof rigid core. Water can sit on the surface indefinitely without damage. It\'s the best flooring choice for kitchens, bathrooms, and basements where moisture is a concern.' },
        { question: 'How does LVP compare to hardwood in appearance?', answer: 'Modern LVP is remarkably realistic — featuring embossed textures, varied plank patterns, and high-definition prints that closely mimic real wood grain. Most guests can\'t tell the difference.' },
        { question: 'How long does LVP or tile flooring last?', answer: 'Quality LVP lasts 15-25 years with normal use. Porcelain tile can last 50+ years. Both are extremely durable and low maintenance compared to natural wood flooring.' },
      ]
    },
    'refinishing-repair': {
      name: 'Floor Refinishing & Subfloor Repair',
      title: 'Floor Refinishing & Subfloor Repair in NYC & Westchester',
      description: 'Bring tired hardwood floors back to life with professional sanding, staining, and refinishing — and ensure a solid foundation with expert subfloor repair, leveling, and moisture mitigation.',
      benefits: ['Hardwood floor refinishing', 'Dust-contained sanding', 'Custom stain options', 'Subfloor repair & leveling', 'Squeak elimination', 'Moisture barrier installation'],
      detailedContent: 'Don\'t replace floors that can be beautifully restored. Our floor refinishing services use dustless sanding systems to remove old finish and scratches, then apply your choice of stain color and multiple coats of water-based or oil-based polyurethane for a durable, gleaming finish. For floors with structural issues, our subfloor repair services fix squeaks, reinforce soft spots, replace water-damaged sections, and apply self-leveling compound to create a perfectly flat foundation for any new flooring. We also install moisture barriers over concrete subfloors and ensure proper ventilation in crawl spaces to protect your flooring investment from below.',
      features: [
        { title: 'Dustless Sanding', description: 'Advanced dust-containment sanding systems that keep your home clean during the refinishing process.' },
        { title: 'Custom Staining', description: 'Wide range of stain colors from natural to dark walnut, applied evenly for consistent, beautiful color.' },
        { title: 'Subfloor Leveling', description: 'Self-leveling compound and plywood underlayment to create a perfectly flat surface for new flooring.' },
        { title: 'Structural Repair', description: 'Fix squeaky floors, reinforce joists, replace rotted subfloor sections, and eliminate soft spots.' },
      ],
      faqs: [
        { question: 'How do I know if my floors can be refinished?', answer: 'Solid hardwood floors can typically be refinished 3-5 times over their lifetime. We measure the remaining wood thickness above the tongue to confirm there\'s enough material for sanding.' },
        { question: 'How long does floor refinishing take?', answer: 'Sanding takes 1-2 days, staining 1 day, and each polyurethane coat needs 24 hours to dry. A typical refinishing project takes 4-5 days from start to walk-on ready.' },
        { question: 'What causes squeaky floors?', answer: 'Squeaks are caused by the subfloor moving against nails or joists. We fix them by screwing the subfloor down to joists, adding blocking between joists, or shimming gaps from below.' },
      ]
    },
    'heated-floors-trim': {
      name: 'Heated Floors & Trim Integration',
      title: 'Heated Floors & Trim Integration in NYC & Westchester',
      description: 'Add cozy radiant heated floors beneath tile or engineered flooring, and complete your project with matching baseboards, shoe molding, and seamless room-to-room transitions.',
      benefits: ['Radiant floor heating systems', 'Electric & hydronic options', 'Energy-efficient comfort', 'Matching baseboard installation', 'Shoe molding & quarter round', 'Seamless floor transitions'],
      detailedContent: 'Radiant heated floors transform cold bathrooms, kitchens, and entryways into luxuriously warm spaces — and when combined with proper trim integration, your new floors look completely finished and professional. We install both electric mat systems (ideal for single rooms and renovations) and hydronic systems (best for whole-home heating) beneath tile, stone, and engineered flooring. Our trim integration services then complete the picture with matching baseboards that frame your new floors, shoe molding that covers expansion gaps cleanly, and custom transition strips between rooms and flooring types for a seamless, polished result throughout your home.',
      features: [
        { title: 'Electric Radiant Heating', description: 'Thin heating mats installed directly under tile for room-by-room warmth with programmable thermostats.' },
        { title: 'Hydronic Radiant Systems', description: 'Hot-water tube systems embedded in the subfloor for efficient, whole-home radiant heating.' },
        { title: 'Baseboard Installation', description: 'New or matching baseboards installed and finished to frame your floors with a clean, professional look.' },
        { title: 'Transition Strips & Thresholds', description: 'Custom transitions between rooms and flooring types for safe, attractive connections throughout your home.' },
      ],
      faqs: [
        { question: 'Can heated floors go under any flooring?', answer: 'Radiant heating works best under tile, stone, and engineered hardwood. It can also work under LVP with proper temperature settings. Solid hardwood is generally not recommended over radiant heat.' },
        { question: 'How much does heated floor installation cost?', answer: 'Electric radiant mat systems typically cost $10-15 per square foot for materials plus installation. They\'re most cost-effective in bathrooms, kitchens, and entryways rather than whole-home applications.' },
        { question: 'Why is baseboard trim important with new flooring?', answer: 'Baseboards cover the required expansion gap between flooring and walls (typically 1/4-1/2 inch), provide a finished look, and protect the bottom of your walls from vacuum and mop damage.' },
      ]
    }
  },
  'electrical-plumbing-coordination': {
    'electrical-wiring': {
      name: 'Electrical Coordination & Wiring',
      title: 'Electrical Coordination & Wiring Upgrades in NYC & Westchester',
      description: 'Licensed electrician coordination for your renovation including panel upgrades, new circuit installation, outlet and switch placement, dedicated appliance circuits, and complete rewiring for safety and modern electrical loads.',
      benefits: ['Licensed electrician coordination', 'Panel & breaker upgrades', 'New circuit installation', 'GFCI/AFCI protection', 'Dedicated appliance circuits', 'Safe, code-compliant wiring'],
      detailedContent: 'Modern renovations demand modern electrical systems. We coordinate licensed, insured electricians throughout your renovation project — ensuring all electrical work is code-compliant, properly permitted, and seamlessly integrated with your construction timeline. Our electrical services include upgrading outdated panels to support modern loads, installing new circuits for kitchens, bathrooms, and home offices, placing outlets and switches exactly where you need them, running dedicated circuits for appliances and HVAC equipment, and upgrading protection with GFCI outlets in wet areas and AFCI breakers where required by current code. All work is inspected and certified for your safety and peace of mind.',
      features: [
        { title: 'Panel & Service Upgrades', description: 'Upgrade from outdated fuse boxes to modern circuit breaker panels with capacity for today\'s electrical demands.' },
        { title: 'New Circuit Installation', description: 'Dedicated 20-amp kitchen circuits, 240V appliance circuits, and home office circuits where needed.' },
        { title: 'Outlet & Switch Layout', description: 'Strategic placement of outlets, USB outlets, dimmers, and smart switches based on your furniture and lifestyle.' },
        { title: 'Safety Upgrades', description: 'GFCI protection in wet areas, AFCI breakers for bedrooms, and smoke/CO detector hardwiring.' },
      ],
      faqs: [
        { question: 'Do I need to upgrade my electrical panel during renovation?', answer: 'If your panel is a fuse box, has less than 100 amps, or can\'t support new appliances and circuits, an upgrade is essential for safety and functionality. We assess your current panel and recommend accordingly.' },
        { question: 'What is GFCI/AFCI protection?', answer: 'GFCI (Ground Fault Circuit Interrupter) protects against electrical shock in wet areas. AFCI (Arc Fault Circuit Interrupter) protects against electrical fires. Current building codes require both in specific locations.' },
        { question: 'Can you add outlets without opening walls?', answer: 'During a renovation, walls are often already open, making it the perfect time to add outlets. In finished areas, we can sometimes fish wire through walls or use surface-mounted conduit as alternatives.' },
      ]
    },
    'plumbing-fixtures': {
      name: 'Plumbing Rough-In & Fixtures',
      title: 'Plumbing Rough-In & Fixture Installation in NYC & Westchester',
      description: 'Licensed plumber coordination for new supply and waste lines, rough-in plumbing for kitchens and bathrooms, fixture installations, appliance hookups, and leak-free connections throughout your renovation.',
      benefits: ['Licensed plumber coordination', 'Supply & waste line installation', 'Kitchen & bath rough-ins', 'Fixture & faucet installation', 'Appliance hookups', 'Inspection-ready compliance'],
      detailedContent: 'Plumbing is the lifeline of any kitchen or bathroom renovation, and getting it right the first time is critical. We coordinate licensed, insured plumbers for every phase — from rough-in of new supply and waste lines during framing, to final fixture connections after finishes are complete. Our plumbing services cover complete pipe relocation for new layouts, installation of all kitchen and bathroom fixtures (sinks, faucets, toilets, showers, tubs), appliance hookups for dishwashers, ice makers, and washing machines, and water heater installations. Every connection is tested for leaks, every drain is verified for proper slope, and all work is inspected and certified.',
      features: [
        { title: 'Rough-In Plumbing', description: 'New supply and drain lines installed during framing phase, positioned precisely for your fixture layout.' },
        { title: 'Fixture Installation', description: 'Professional installation of sinks, faucets, toilets, showerheads, and tub fillers with leak-free connections.' },
        { title: 'Pipe Relocation', description: 'Move supply and waste lines to accommodate new kitchen or bathroom layouts during renovation.' },
        { title: 'Appliance Connections', description: 'Hookup for dishwashers, refrigerator ice makers, washing machines, and gas ranges.' },
      ],
      faqs: [
        { question: 'Can you move plumbing to change my kitchen or bathroom layout?', answer: 'Yes, we can relocate supply and drain lines to accommodate new layouts. This is best done during a renovation when walls are open. We plan pipe routing for optimal drainage slope and minimal disruption.' },
        { question: 'What plumbing work requires permits?', answer: 'Any new plumbing lines, fixture additions, or water heater replacements require permits in most jurisdictions. We handle all permit applications and schedule required inspections.' },
        { question: 'How do you prevent plumbing leaks?', answer: 'We use premium fittings, pressure-test all new supply lines before closing walls, verify drain slopes with levels, and conduct a full water test on every fixture before project completion.' },
      ]
    },
    'lighting-smart': {
      name: 'Lighting Design & Smart Home',
      title: 'Lighting Design & Smart Home Pre-Wiring in NYC & Westchester',
      description: 'Professional lighting design with recessed, pendant, and accent fixtures, plus smart home pre-wiring for automated lighting, thermostats, security cameras, motorized shades, and whole-home networking.',
      benefits: ['Custom lighting design plans', 'Recessed & accent lighting', 'Smart switch & dimmer systems', 'Thermostat & security wiring', 'Motorized shade pre-wiring', 'Whole-home networking'],
      detailedContent: 'Great lighting transforms how a home looks and feels — and the best time to install it is during renovation when walls are open. Our lighting design services create layered plans combining recessed fixtures for general illumination, pendants and sconces for task and decorative lighting, under-cabinet LEDs for kitchen work surfaces, and accent lighting for art and architectural features. For forward-thinking homeowners, we pre-wire for smart home systems while walls are accessible — running low-voltage cabling for smart switches, networked thermostats, security cameras, motorized shade controls, in-ceiling speakers, and structured Cat6/fiber networking. Planning these systems during construction means clean, hidden wiring and maximum flexibility.',
      features: [
        { title: 'Layered Lighting Design', description: 'Customized lighting plans combining ambient, task, and accent fixtures for every room\'s function and mood.' },
        { title: 'Smart Lighting Controls', description: 'Pre-wired smart switches, dimmers, and keypads for automated scenes and voice control integration.' },
        { title: 'Whole-Home Networking', description: 'Cat6 ethernet, fiber, coax, and Wi-Fi access point locations planned and wired for reliable connectivity.' },
        { title: 'Smart Home Infrastructure', description: 'Pre-wiring for thermostats, cameras, doorbells, motorized shades, and multi-room audio systems.' },
      ],
      faqs: [
        { question: 'Why should I pre-wire during renovation?', answer: 'Running wires in open walls costs a fraction of retrofitting finished spaces. Pre-wiring gives you hidden, clean installations and the flexibility to activate smart systems whenever you\'re ready.' },
        { question: 'What smart home systems can you pre-wire for?', answer: 'We pre-wire for Lutron, Control4, and similar systems — covering smart lighting, thermostats, security cameras, video doorbells, motorized shades, in-ceiling speakers, and structured network cabling.' },
        { question: 'How many recessed lights do I need per room?', answer: 'As a general guideline, one 4-6" recessed fixture per 4-6 square feet of ceiling area. We create custom lighting plans based on your room dimensions, ceiling height, and how you use each space.' },
      ]
    },
    'permits-code': {
      name: 'Permits & Code Compliance',
      title: 'Permits & Code Compliance in NYC & Westchester',
      description: 'Complete permit filing, inspection scheduling, code compliance upgrades, and regulatory management for electrical and plumbing work — ensuring your renovation is fully legal, safe, and documented.',
      benefits: ['Permit application filing', 'Inspection scheduling', 'Code compliance upgrades', 'DOB coordination', 'Documented compliance records', 'Smooth future property sales'],
      detailedContent: 'Navigating building codes, permits, and inspections can be the most confusing part of any renovation — but it\'s also the most important for safety and property value. We handle the entire regulatory process: filing permit applications with your local building department, scheduling rough-in and final inspections, ensuring all electrical and plumbing work meets current code requirements, and maintaining documented compliance records for your files. For properties with existing code violations, we provide targeted upgrades — bringing outdated wiring, improper plumbing, and non-compliant installations up to current standards. Proper permits and code compliance protect your family, prevent insurance issues, and ensure smooth property transactions when you sell.',
      features: [
        { title: 'Permit Filing & Management', description: 'Complete permit applications prepared, filed, and tracked through approval for all required trades.' },
        { title: 'Inspection Coordination', description: 'Schedule and attend all required inspections — rough-in, progress, and final — on your behalf.' },
        { title: 'Code Violation Remediation', description: 'Identify and correct existing electrical and plumbing code violations discovered during renovation.' },
        { title: 'Compliance Documentation', description: 'Provide complete records of permits, inspection certificates, and compliance documentation for your files.' },
      ],
      faqs: [
        { question: 'What renovation work requires permits?', answer: 'Generally, any electrical, plumbing, structural, or HVAC work requires permits. Cosmetic work like painting, flooring, and cabinet replacement typically does not. We advise you on what\'s required for your specific project.' },
        { question: 'What happens if I renovate without permits?', answer: 'Unpermitted work can result in fines, forced removal of completed work, insurance claim denials, and complications when selling your property. Proper permits protect your investment.' },
        { question: 'How long does the permit process take?', answer: 'Simple electrical or plumbing permits are often approved within 1-2 weeks. More complex projects requiring plans review may take 4-8 weeks. We file permits early in the planning phase to avoid construction delays.' },
      ]
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
      return 'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_renovation/apartment-renovation_bjsyl1.jpg';
    case 'kitchen-remodeling':
      return 'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/kitchen_khegdc.png';
    case 'bathroom-remodeling':
      return 'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_bathroom/bathroom-ai_f6mjcb.jpg';
    case 'interior-painting':
      return 'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/interior-painting_dwxhfo.jpg';
    case 'custom-millwork':
      return 'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/custom-millwork_vkopzf.jpg';
    case 'full-interior-renovation':
      return 'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/full-interior_tab1td.jpg';
    case 'flooring':
      return 'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/flooring_po64vb.jpg';
    case 'electrical-plumbing-coordination':
      return 'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/electrical-plumbing_pmn1qb.jpg';
    default:
      return 'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/full-interior_tab1td.jpg';
  }
}

function getServiceImages(serviceSlug: string): string[] {
  switch (serviceSlug) {
    case 'kitchen-remodeling':
      return [
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/kitchen_khegdc.png',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_kitchen/kitchen-cabinets_vxurqw.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_kitchen/kitchen-countertops_souz9w.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_kitchen/kitchen-flooring_lxqvl4.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638627/rama-fly-site-assets/images_projects_kitchen/kitchen-lighting_ivciu7.jpg',
      ];
    case 'bathroom-remodeling':
      return [
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_bathroom/bathroom-ai_f6mjcb.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_bathroom/bathroom-showers_umi0kf.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638626/rama-fly-site-assets/images_projects_bathroom/bathroom-tile_rchtar.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_bathroom/bathroom-vanities_t8i7zt.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_bathroom/bathroom-luxury_f3qngf.jpg',
      ];
    case 'custom-millwork':
      return [
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/custom-millwork_vkopzf.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_renovation/custom-builtins_aam5lb.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_renovation/crown-molding_nztw0k.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_renovation/door-installation_x4puan.jpg',
      ];
    case 'flooring':
      return [
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/flooring_po64vb.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638631/rama-fly-site-assets/images_projects_renovation/hardwood-flooring_bchvil.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/flooring_po64vb.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638631/rama-fly-site-assets/images_projects_renovation/hardwood-flooring_bchvil.jpg',
      ];
    case 'interior-painting':
      return [
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/interior-painting_dwxhfo.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638631/rama-fly-site-assets/images_projects_renovation/painting-prep_vayjmt.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/drywall-plaster_eyomue.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/interior-painting_dwxhfo.jpg',
      ];
    case 'electrical-plumbing-coordination':
      return [
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/electrical-plumbing_pmn1qb.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_bathroom/bathroom-ai_f6mjcb.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/electrical-plumbing_pmn1qb.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_bathroom/bathroom-ai_f6mjcb.jpg',
      ];
    case 'apartment-renovation':
      return [
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_renovation/apartment-renovation_bjsyl1.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/full-interior_tab1td.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_renovation/apartment-renovation_bjsyl1.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/full-interior_tab1td.jpg',
      ];
    case 'full-interior-renovation':
    default:
      return [
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/full-interior_tab1td.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_renovation/apartment-renovation_bjsyl1.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/full-interior_tab1td.jpg',
        'https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_renovation/apartment-renovation_bjsyl1.jpg',
      ];
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

  const serviceImages = getServiceImages(serviceParam);

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

      {/* Detailed Content Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Our {subService.name} Services</h2>
          <div className="w-20 h-1 bg-red-600 rounded-full mb-8"></div>
          <p className="text-gray-700 text-lg leading-relaxed">{subService.detailedContent}</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What&apos;s Included</h2>
          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subService.features.map((feature, idx) => (
              <Reveal key={idx} delay={(idx % 2) * 120} className="h-full">
                <div className="group h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={serviceImages[idx % serviceImages.length]}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 inline-flex p-2 rounded-full bg-red-600">
                      <CheckCircle className="text-white" size={20} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Checklist */}
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
                      src={serviceImages[(idx + 2) % serviceImages.length]}
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

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mb-12"></div>
          
          <div className="space-y-4">
            {subService.faqs.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white font-bold text-sm">Q</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
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
