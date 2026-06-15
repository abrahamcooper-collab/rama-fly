import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { business } from "./data/siteData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${business.name} | Quality Construction Services in WI`,
  description:
    "DHA Construction LLC is a professional siding contractor serving Whitewater, Fort Atkinson, Jefferson, Delavan, Elkhorn and nearby Wisconsin communities. We specialize in siding installation and repair, soffit and fascia work, window wrapping, door wrapping, exterior painting and junk removal. Our team is committed to delivering durable materials, precise workmanship and reliable service to improve the look and protection of your home.",
  icons: {
    icon: "/Rama Fly construction Group LLC.png",
  },
  openGraph: {
    title: `${business.name} | Siding Contractor in WI`,
    description: "DHA Construction LLC is a trusted siding contractor based in Whitewater, Wisconsin, providing high-quality exterior home improvement services throughout Walworth and Jefferson County. Our experienced team specializes in professional siding installation, siding repair, soffit and fascia services, window wrapping, door wrapping, exterior painting, and reliable junk removal.",
    url: `https://${business.domain}`,
    siteName: business.name,
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `https://${business.domain}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate LocalBusiness structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": business.name,
    "description": "DHA Construction LLC is a professional siding contractor serving Whitewater, Fort Atkinson, Jefferson, Delavan, Elkhorn and nearby Wisconsin communities. We specialize in siding installation and repair, soffit and fascia work, window wrapping, door wrapping, exterior painting and junk removal. Our team is committed to delivering durable materials, precise workmanship and reliable service to improve the look and protection of your home.",
    "url": `https://${business.domain}`,
    "telephone": business.phoneRaw,
    "email": business.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.addressObj.street,
      "addressLocality": business.addressObj.city,
      "addressRegion": business.addressObj.state,
      "postalCode": business.addressObj.zip,
      "addressCountry": "US"
    },
    "areaServed": [
      "Whitewater", "Fort Atkinson", "Jefferson", "Milton", "Palmyra", 
      "Elkhorn", "Delavan", "Darien", "Eagle", "Sullivan", 
      "Helenville", "Lake Mills", "Johnson Creek", "Waterloo", "Ixonia", 
      "Cambridge", "Edgerton", "Sharon", "Walworth"
    ].map(city => ({
      "@type": "City",
      "name": city,
      "containedInPlace": { "@type": "State", "name": "Wisconsin" }
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Exterior Construction Services",
      "itemListElement": [
        "Window Installation Service", "Painting", "Garbage Collection Service",
        "Construction Company", "Siding Services", "Vinyl siding installation",
        "Fiber cement siding installation", "Siding repair", "Siding replacement",
        "Exterior siding contractor", "Exterior Trim", "Soffit installation",
        "Fascia installation", "Soffit and fascia repair", "Window & Door Wrapping",
        "Window wrapping", "Door wrapping", "Aluminum trim wrapping",
        "Exterior window trim installation", "Exterior house painting",
        "Trim painting", "Siding painting", "Junk removal", "Construction cleanup",
        "Exterior renovation services"
      ].map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": service
        }
      }))
    },
    "openingHours": "Mo,Tu,We,Th,Fr,Sa 08:00-19:00",
    "sameAs": [
      business.socials.facebook,
      business.socials.instagram
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
