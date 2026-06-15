"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── Business Info ─── */
const business = {
  name: "Rama Fly Construction Group LLC",
  phone: "+1 (646) 305-8546",
  phoneRaw: "+16463058546",
  email: "RAMAFLYCONSTRUCTION@GMAIL.COM",
  address: "51 Inwood St, Yonkers, NY 10704",
  hours: "Mon–Sun: 8am – 6pm",
};

/* ─── Services Data with Sub-Services (All 40+ Services) ─── */
const servicesWithSubs = [
  {
    label: "Apartment Renovation",
    href: "/services/apartment-renovation",
    subServices: [
      { label: "Full Apartment Renovations", href: "/services/apartment-renovation/full-apartment" },
      { label: "Condo Renovations", href: "/services/apartment-renovation/condo" },
      { label: "Interior Remodeling", href: "/services/apartment-renovation/interior-remodeling" },
      { label: "Property Renovations", href: "/services/apartment-renovation/property-renovations" },
      { label: "Room Additions & Reconfigurations", href: "/services/apartment-renovation/room-additions" },
      { label: "Residential Renovations", href: "/services/apartment-renovation/residential-renovations" },
      { label: "Open Concept Remodeling", href: "/services/apartment-renovation/open-concept" },
      { label: "Luxury Apartment Renovations", href: "/services/apartment-renovation/luxury-apartment" },
    ],
  },
  {
    label: "Kitchen Remodeling",
    href: "/services/kitchen-remodeling",
    subServices: [
      { label: "Custom Kitchen Design", href: "/services/kitchen-remodeling/custom-design" },
      { label: "Cabinet Installation", href: "/services/kitchen-remodeling/cabinets" },
      { label: "Kitchen Flooring Installation", href: "/services/kitchen-remodeling/flooring" },
      { label: "Countertop Installation", href: "/services/kitchen-remodeling/countertops" },
      { label: "Kitchen Lighting Upgrades", href: "/services/kitchen-remodeling/lighting" },
      { label: "Backsplash Installation", href: "/services/kitchen-remodeling/backsplash" },
      { label: "Open Concept Kitchens", href: "/services/kitchen-remodeling/open-concept-kitchens" },
      { label: "Complete Kitchen Renovations", href: "/services/kitchen-remodeling/complete-renovations" },
    ],
  },
  {
    label: "Bathroom Remodeling",
    href: "/services/bathroom-remodeling",
    subServices: [
      { label: "Bathroom Renovations", href: "/services/bathroom-remodeling/renovations" },
      { label: "Walk-In Shower Installation", href: "/services/bathroom-remodeling/walk-in-shower" },
      { label: "Tile Installation", href: "/services/bathroom-remodeling/tile-installation" },
      { label: "Vanity Installation", href: "/services/bathroom-remodeling/vanity-installation" },
      { label: "Bathroom Flooring", href: "/services/bathroom-remodeling/flooring" },
      { label: "Custom Bathroom Design", href: "/services/bathroom-remodeling/custom-design" },
      { label: "Plumbing Fixture Upgrades", href: "/services/bathroom-remodeling/plumbing" },
      { label: "Luxury Bathroom Remodeling", href: "/services/bathroom-remodeling/luxury" },
    ],
  },
  {
    label: "Interior Finishing & Painting",
    href: "/services/interior-painting",
    subServices: [
      { label: "Interior Painting", href: "/services/interior-painting/painting" },
      { label: "Drywall Repair", href: "/services/interior-painting/drywall" },
      { label: "Plastering Services", href: "/services/interior-painting/plastering" },
      { label: "Wall Finishing", href: "/services/interior-painting/wall-finishing" },
      { label: "Ceiling Repairs", href: "/services/interior-painting/ceiling" },
      { label: "Texture Matching", href: "/services/interior-painting/texture" },
      { label: "Trim Painting", href: "/services/interior-painting/trim" },
      { label: "Surface Preparation", href: "/services/interior-painting/surface-prep" },
    ],
  },
  {
    label: "Carpentry & Custom Millwork",
    href: "/services/custom-millwork",
    subServices: [
      { label: "Custom Built-Ins", href: "/services/custom-millwork/built-ins" },
      { label: "Crown Molding Installation", href: "/services/custom-millwork/crown-molding" },
      { label: "Baseboard Installation", href: "/services/custom-millwork/baseboard" },
      { label: "Custom Shelving", href: "/services/custom-millwork/shelving" },
      { label: "Trim Carpentry", href: "/services/custom-millwork/trim" },
      { label: "Door Installation", href: "/services/custom-millwork/doors" },
      { label: "Finish Carpentry", href: "/services/custom-millwork/finish-carpentry" },
      { label: "Woodwork Installation", href: "/services/custom-millwork/woodwork" },
    ],
  },
];

/* ─── Nav Links ─── */
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/gallery" },
  {
    label: "Service Areas",
    href: "/service-areas",
    dropdown: [
      { label: "Yonkers, NY", href: "/service-areas/yonkers" },
      { label: "White Plains, NY", href: "/service-areas/white-plains" },
      { label: "Manhattan, NY", href: "/service-areas/manhattan" },
      { label: "Brooklyn, NY", href: "/service-areas/brooklyn" },
      { label: "Queens, NY", href: "/service-areas/queens" },
      { label: "Bronx, NY", href: "/service-areas/bronx" },
      { label: "Mount Vernon, NY", href: "/service-areas/mount-vernon" },
      { label: "New Rochelle, NY", href: "/service-areas/new-rochelle" },
      { label: "Scarsdale, NY", href: "/service-areas/scarsdale" },
      { label: "Westchester County, NY", href: "/service-areas/westchester-county" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* ─── CSS Variables ─── */
const cssVars = `
  :root {
    --color-primary: #C0151A;
    --color-primary-dark: #960f13;
    --color-dark: #1a1a1a;
    --color-topbar-bg: #1a1a1a;
    --color-topbar-text: #f5f5f5;
    --color-navbar-bg: #ffffff;
    --color-navbar-text: #1a1a1a;
    --color-cta-bg: #C0151A;
    --color-cta-text: #ffffff;
    --shadow-navbar: 0 2px 12px rgba(0,0,0,0.10);
    --shadow-lg: 0 8px 32px rgba(0,0,0,0.16);
  }
`;

/* ─── Nested Dropdown Component ─── */
function NestedDropdown({ 
  items, 
  isOpen, 
  onClose 
}: { 
  items: { label: string; href: string; subServices?: { label: string; href: string }[] }[];
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute left-0 top-full min-w-[280px] bg-white rounded-md overflow-visible"
      style={{ boxShadow: "var(--shadow-lg)", borderTop: "3px solid var(--color-primary)" }}
    >
      {items.map((item) => (
        <div
          key={item.href}
          className="relative group"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (item.subServices) setActiveSubmenu(item.label);
          }}
          onMouseLeave={() => {
            timeoutRef.current = setTimeout(() => setActiveSubmenu(null), 150);
          }}
        >
          <Link
            href={item.href}
            onClick={onClose}
            className="flex items-center justify-between px-6 py-3.5 text-base font-semibold text-gray-700 hover:bg-red-50 transition-colors duration-150"
            style={{ borderBottom: "1px solid #f3f3f3" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-primary)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "")}
          >
            <span>{item.label}</span>
            {item.subServices && (
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            )}
          </Link>
          
          {/* Submenu */}
          {item.subServices && activeSubmenu === item.label && (
            <div
              className="absolute left-full top-0 min-w-[260px] bg-white rounded-md"
              style={{ boxShadow: "var(--shadow-lg)", borderLeft: "3px solid var(--color-primary)" }}
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setActiveSubmenu(item.label);
              }}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => setActiveSubmenu(null), 150);
              }}
            >
              {item.subServices.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={onClose}
                  className="block px-6 py-3 text-sm font-medium text-gray-600 hover:bg-red-50 transition-colors duration-150"
                  style={{ borderBottom: "1px solid #f3f3f3" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "")}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Mobile Menu ─── */
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      <div
        className="fixed top-0 right-0 h-full w-[350px] bg-white z-50 overflow-y-auto animate-slide-in"
        style={{ boxShadow: "var(--shadow-lg)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5" style={{ backgroundColor: "var(--color-primary)" }}>
          <span className="text-white font-bold text-base tracking-wide uppercase">Rama Fly Construction</span>
          <button onClick={onClose} className="p-1 text-white hover:opacity-80 transition-opacity" aria-label="Close menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="px-5 pb-8 mt-3">
          {/* Home */}
          <div style={{ borderBottom: "1px solid #f0f0f0" }}>
            <Link href="/" onClick={onClose} className="block py-4 text-base font-semibold text-gray-800">Home</Link>
          </div>

          {/* Services with nested sub-services */}
          <div style={{ borderBottom: "1px solid #f0f0f0" }}>
            <div className="flex items-center justify-between">
              <Link href="/services" onClick={onClose} className="block py-4 text-base font-semibold text-gray-800">Services</Link>
              <button
                onClick={() => setExpandedSection(expandedSection === "services" ? null : "services")}
                className="p-2 text-gray-500"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"
                  className={`transition-transform duration-200 ${expandedSection === "services" ? "rotate-180" : ""}`}>
                  <path d="M2 4l4.5 4.5L11 4" />
                </svg>
              </button>
            </div>

            {expandedSection === "services" && (
              <div className="pb-2">
                {servicesWithSubs.map((service, idx) => (
                  <div key={service.href} className="ml-2">
                    <div className="flex items-center justify-between">
                      <Link
                        href={service.href}
                        onClick={onClose}
                        className="flex items-center gap-2 py-3 text-sm font-medium text-gray-700"
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-primary)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "")}
                      >
                        {service.label}
                      </Link>
                      <button
                        onClick={() => setExpandedService(expandedService === idx ? null : idx)}
                        className="p-1.5 text-gray-400"
                      >
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"
                          className={`transition-transform duration-200 ${expandedService === idx ? "rotate-180" : ""}`}>
                          <path d="M2 3l3.5 3.5L9 3" />
                        </svg>
                      </button>
                    </div>

                    {expandedService === idx && (
                      <div className="ml-6 pb-1">
                        {service.subServices.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={onClose}
                            className="block py-2 text-sm text-gray-500 transition-colors"
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-primary)")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "")}
                          >
                            • {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Service Areas */}
          <div style={{ borderBottom: "1px solid #f0f0f0" }}>
            <div className="flex items-center justify-between">
              <Link href="/service-areas" onClick={onClose} className="block py-4 text-base font-semibold text-gray-800">Service Areas</Link>
              <button
                onClick={() => setExpandedSection(expandedSection === "areas" ? null : "areas")}
                className="p-2 text-gray-500"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"
                  className={`transition-transform duration-200 ${expandedSection === "areas" ? "rotate-180" : ""}`}>
                  <path d="M2 4l4.5 4.5L11 4" />
                </svg>
              </button>
            </div>
            {expandedSection === "areas" && (
              <div className="pl-3 pb-2">
                {navLinks.find(l => l.label === "Service Areas")?.dropdown?.map((area) => (
                  <Link key={area.href} href={area.href} onClick={onClose}
                    className="block py-2.5 text-sm text-gray-500 transition-colors"
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-primary)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "")}
                  >
                    › {area.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other links */}
          {["Projects", "About", "Contact"].map((label) => (
            <div key={label} style={{ borderBottom: "1px solid #f0f0f0" }}>
              <Link href={`/${label.toLowerCase()}`} onClick={onClose}
                className="block py-4 text-base font-semibold text-gray-800">
                {label}
              </Link>
            </div>
          ))}

          <a
            href={`tel:${business.phoneRaw}`}
            className="mt-8 block w-full text-center py-4 rounded-full font-bold text-base tracking-widest uppercase transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "var(--color-cta-bg)", color: "var(--color-cta-text)" }}
          >
            Call Now
          </a>
        </nav>

        {/* Contact info */}
        <div className="border-t border-gray-200 px-5 py-6 space-y-3 text-base text-gray-600">
          <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity font-semibold" style={{ color: "var(--color-primary)" }}>
            <PhoneIcon />{business.phone}
          </a>
          <a href={`mailto:${business.email}`} className="flex items-center gap-2 text-gray-600 hover:opacity-80 transition-opacity text-sm">
            <EmailIcon />{business.email}
          </a>
          <p className="flex items-start gap-2 text-gray-600">
            <MapPinIcon /><span>{business.address}</span>
          </p>
          <p className="flex items-start gap-2 text-gray-500 text-sm">
            <ClockIcon /><span>{business.hours}</span>
          </p>
        </div>
      </div>
    </>
  );
}

/* ─── Icons ─── */
function PhoneIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="shrink-0">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.03 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="shrink-0">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    </svg>
  );
}
function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className={className}>
      <path d="M6 9l6 6 6-6"/>
    </svg>
  );
}

/* ─── Main Navbar ─── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navbarRef = useRef<HTMLElement>(null);

  const handleEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const handleCloseDropdown = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <style>{cssVars}</style>
      <header ref={navbarRef} className="sticky top-0 z-50">

        {/* Top Bar - Reduced padding */}
        <div className="hidden md:block text-sm py-1.5" style={{ backgroundColor: "var(--color-topbar-bg)", color: "var(--color-topbar-text)" }}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-8">
              <span className="flex items-center gap-1.5 opacity-80 text-sm"><MapPinIcon />{business.address}</span>
              <span className="flex items-center gap-1.5 opacity-80 text-sm"><ClockIcon />{business.hours}</span>
            </div>
            <div className="flex items-center gap-8">
              <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity text-sm" style={{ color: "var(--color-primary)" }}>
                <PhoneIcon />{business.phone}
              </a>
              <a href={`mailto:${business.email}`} className="flex items-center gap-1.5 opacity-75 hover:opacity-100 transition-opacity text-sm">
                <EmailIcon />{business.email}
              </a>
            </div>
          </div>
        </div>

        {/* Red accent line */}
        <div style={{ height: "3px", backgroundColor: "var(--color-primary)" }} />

        {/* Main Nav - Taller height for larger items */}
        <nav className="border-b border-gray-100" style={{ backgroundColor: "var(--color-navbar-bg)", boxShadow: "var(--shadow-navbar)" }}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 sm:h-24 lg:h-28">

            {/* Logo - Larger */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/Rama Fly construction Group LLC.png"
                alt="Rama Fly Construction Group LLC"
                width={160}
                height={80}
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav - Larger text and spacing */}
            <div className="hidden lg:flex items-center gap-1">

              {/* Home */}
              <Link href="/" className="px-4 py-2.5 text-base font-semibold tracking-wide rounded-md transition-colors duration-150 hover:text-red-600"
                style={{ color: "var(--color-navbar-text)" }}>
                Home
              </Link>

              {/* SERVICES with Nested Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleEnter("services")}
                onMouseLeave={handleLeave}
              >
                <button
                  onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-base font-semibold tracking-wide rounded-md transition-colors duration-150 hover:text-red-600"
                  style={{ color: "var(--color-navbar-text)" }}
                >
                  Services
                  <ChevronDownIcon className={`transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`} />
                </button>
                <NestedDropdown 
                  isOpen={openDropdown === "services"} 
                  onClose={handleCloseDropdown}
                  items={servicesWithSubs}
                />
              </div>

              {/* Service Areas */}
              <div
                className="relative"
                onMouseEnter={() => handleEnter("areas")}
                onMouseLeave={handleLeave}
              >
                <button
                  onClick={() => setOpenDropdown(openDropdown === "areas" ? null : "areas")}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-base font-semibold tracking-wide rounded-md transition-colors duration-150 hover:text-red-600"
                  style={{ color: "var(--color-navbar-text)" }}
                >
                  Service Areas
                  <ChevronDownIcon className={`transition-transform duration-200 ${openDropdown === "areas" ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute left-0 top-full min-w-[240px] bg-white rounded-md overflow-hidden transition-all duration-200 ${
                    openDropdown === "areas"
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  style={{ boxShadow: "var(--shadow-lg)", borderTop: "3px solid var(--color-primary)" }}
                >
                  {navLinks.find(l => l.label === "Service Areas")?.dropdown?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleCloseDropdown}
                      className="block px-6 py-3.5 text-base font-medium text-gray-700 hover:bg-red-50 transition-colors duration-150"
                      style={{ borderBottom: "1px solid #f3f3f3" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-primary)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "")}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other links */}
              {navLinks.filter(l => !["Home", "Service Areas"].includes(l.label)).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2.5 text-base font-semibold tracking-wide rounded-md transition-colors duration-150 hover:text-red-600"
                  style={{ color: "var(--color-navbar-text)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger - Larger CTA button */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${business.phoneRaw}`}
                className="hidden lg:inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-bold tracking-wide transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: "var(--color-cta-bg)", color: "var(--color-cta-text)" }}
              >
                <PhoneIcon />
                Get a Free Quote
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 rounded-md transition-colors"
                style={{ color: "var(--color-dark)" }}
                aria-label="Open menu"
              >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

        <style jsx global>{`
          @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          .animate-slide-in { animation: slideIn 0.28s ease-out; }
        `}</style>
      </header>
    </>
  );
}