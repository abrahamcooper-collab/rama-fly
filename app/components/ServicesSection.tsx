export default function ServicesSection() {
  const services = [
    {
      title: "Apartment Renovation",
      slug: "apartment-renovation",
      img: "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638629/rama-fly-site-assets/images_projects_renovation/apartment-renovation_bjsyl1.jpg",
    },
    {
      title: "Kitchen Remodeling",
      slug: "kitchen-remodeling",
      img: "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/kitchen_khegdc.png",
    },
    {
      title: "Bathroom Renovation",
      slug: "bathroom-remodeling",
      img: "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/images_projects_bathroom/bathroom-ai_f6mjcb.jpg",
    },
    {
      title: "Full Interior Renovation",
      slug: "full-interior-renovation",
      img: "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/full-interior_tab1td.jpg",
    },
    {
      title: "Custom Millwork",
      slug: "custom-millwork",
      img: "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/custom-millwork_vkopzf.jpg",
    },
    {
      title: "Flooring",
      slug: "flooring",
      img: "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/flooring_po64vb.jpg",
    },
    {
      title: "Painting & Plaster",
      slug: "interior-painting",
      img: "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/interior-painting_dwxhfo.jpg",
    },
    {
      title: "Electrical & Plumbing Coordination",
      slug: "electrical-plumbing-coordination",
      img: "https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638630/rama-fly-site-assets/images_projects_renovation/electrical-plumbing_pmn1qb.jpg",
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
