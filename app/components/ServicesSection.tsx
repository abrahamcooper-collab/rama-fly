export default function ServicesSection() {
  const services = [
    {
      title: "Apartment Renovation",
      slug: "apartment-renovation",
      img: "/images/projects/renovation/renovation-3.jpg",
    },
    {
      title: "Kitchen Remodeling",
      slug: "kitchen-remodeling",
      img: "/images/projects/kitchen/kitchen-1.jpg",
    },
    {
      title: "Bathroom Renovation",
      slug: "bathroom-remodeling",
      img: "/images/projects/renovation/renovation-27.jpg",
    },
    {
      title: "Full Interior Renovation",
      slug: "full-interior-renovation",
      img: "/images/projects/renovation/full-interior.png",
    },
    {
      title: "Custom Millwork",
      slug: "custom-millwork",
      img: "/images/projects/closet/closet-5.jpg",
    },
    {
      title: "Flooring",
      slug: "flooring",
      img: "/images/projects/renovation/flooring.png",
    },
    {
      title: "Painting & Plaster",
      slug: "interior-painting",
      img: "/images/projects/renovation/renovation-19.jpg",
    },
    {
      title: "Electrical & Plumbing Coordination",
      slug: "electrical-plumbing-coordination",
      img: "/images/projects/framing/framing-1.jpg",
    },
  ];

  return (
    <section className="relative w-full">
      {services.map((service, index) => (
        <div
          key={index}
          // The magic happens here: sticky + top-0 + h-screen
          className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-20"
          style={{ zIndex: 20 + index }}
        >
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Dark Overlay so text is readable */}
            <div className="absolute inset-0 bg-black/50 z-10" />
          </div>

          {/* Centered Content */}
          <div className="relative z-20 px-6 max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
            <h2 className="font-bold text-2xl md:text-4xl tracking-widest text-white uppercase bg-black/60 px-6 py-4 backdrop-blur-sm">
              {service.title}
            </h2>
            <a
              href={`/services/${service.slug}`}
              className="text-sm tracking-widest text-white/80 hover:text-white uppercase bg-black/80 px-6 py-3 border border-white/20 transition-all duration-300"
            >
              EXPLORE DETAILS
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
