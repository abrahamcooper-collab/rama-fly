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
  title: `${business.name} | Remodeling & Construction Services in NY`,
  description:
    `${business.name} is a professional remodeling and construction contractor serving Yonkers, Westchester County, New York City, and surrounding New York communities. We specialize in apartment renovations, kitchen and bathroom remodeling, custom carpentry, millwork, interior painting, siding, and window wrapping. Our team is committed to delivering premium craftsmanship and reliable service to transform your living spaces.`,
  icons: {
    icon: "/Rama Fly Construction Group LLC.png",
  },
  openGraph: {
    title: `${business.name} | Remodeling & Construction in NY`,
    description: `${business.name} is a trusted remodeling and construction contractor based in Yonkers, NY, providing high-quality interior and exterior home renovation services throughout NYC and Westchester County. We specialize in apartment renovations, custom millwork, kitchen & bathroom remodeling, painting, and window capping.`,
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
    "description": `${business.name} is a professional remodeling and construction contractor serving Yonkers, Westchester County, New York City, and surrounding New York communities. We specialize in apartment renovations, kitchen and bathroom remodeling, custom carpentry, millwork, interior painting, siding, and window wrapping.`,
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
