"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms (use index * 100 for grids). */
  delay?: number;
  className?: string;
  threshold?: number;
};

/**
 * Wraps any content and fades + slides it up when it scrolls into view.
 * Reusable across every card grid on the site.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** Shared pool of real project photos for cards that have no image of their own. */
export const cardImagePool = [
  "/images/services/vinyl_siding.jpg",
  "/images/services/soffit.jpg",
  "/images/services/windows.jpg",
  "/images/services/door.jpg",
  "/images/services/dump_trailer.jpg",
  "/images/components/house.jpg",
  "/images/components/house2.jpg",
  "/images/components/who_we_are.jpg",
  "/images/service_areas/2.jpg",
  "/images/service_areas/3.jpg",
  "/images/service_areas/4.jpg",
  "/images/service_areas/5.jpg",
  "/images/service_areas/6.jpg",
];
