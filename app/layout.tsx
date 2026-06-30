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
  title: `${business.name} | NY Apartment Renovation & Interior Remodeling Specialists`,
  description:
    `${business.name} is a professional apartment renovation and interior remodeling contractor serving Yonkers, Westchester County, New York City, and surrounding New York communities. We specialize in full apartment and interior renovations, kitchen and bathroom remodeling, custom millwork, flooring, painting & plaster, and electrical & plumbing coordination. Our team is committed to delivering premium craftsmanship and reliable service to transform your living spaces.`,
  icons: {
    icon: "/Rama Fly Construction Group LLC.png",
  },
  openGraph: {
    title: `${business.name} | NY Apartment Renovation & Interior Remodeling`,
    description: `${business.name} is a trusted apartment renovation and interior remodeling contractor based in Yonkers, NY, providing high-quality interior renovation services throughout NYC and Westchester County. We specialize in apartment renovations, full interior remodels, custom millwork, kitchen & bathroom remodeling, flooring, and painting.`,
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
    "description": `${business.name} is a professional apartment renovation and interior remodeling contractor serving Yonkers, Westchester County, New York City, and surrounding New York communities. We specialize in full apartment and interior renovations, kitchen and bathroom remodeling, custom millwork, flooring, painting & plaster, and electrical & plumbing coordination.`,
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
      "Yonkers", "White Plains", "Manhattan", "Brooklyn", "Queens", 
      "Bronx", "Mount Vernon", "New Rochelle", "Scarsdale", "Westchester County"
    ].map(city => ({
      "@type": "City",
      "name": city,
      "containedInPlace": { "@type": "State", "name": "New York" }
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Apartment Renovation & Interior Remodeling Services",
      "itemListElement": [
        "Apartment Renovation", "Full Apartment Renovations", "Condo Renovations",
        "Interior Remodeling", "Full Interior Renovation", "Gut Renovations",
        "Whole-Home Remodeling", "Kitchen Remodeling", "Custom Kitchen Design",
        "Cabinet Installation", "Countertop Installation", "Bathroom Renovation",
        "Walk-In Shower Installation", "Tile Installation", "Custom Millwork",
        "Custom Built-Ins", "Crown Molding Installation", "Trim Carpentry",
        "Flooring Installation", "Hardwood Flooring", "Luxury Vinyl Plank Flooring",
        "Interior Painting", "Plastering Services", "Drywall Repair",
        "Electrical & Plumbing Coordination", "Permit & Inspection Management"
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
