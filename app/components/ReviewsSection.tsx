"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { cardImagePool } from "./Reveal";

/* ─── Review Data ─── */
const reviews = [
  {
    name: "Michael R.",
    rating: 5,
    text: "DHA Construction did an amazing job with our vinyl siding. The crew was professional, on time, and the quality is outstanding. Our home looks brand new!",
    date: "2 months ago",
    image: cardImagePool[0],
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "We hired DHA for window wrapping and exterior painting. They exceeded our expectations. Very detail-oriented and the pricing was fair. Highly recommend!",
    date: "3 months ago",
    image: cardImagePool[2],
  },
  {
    name: "James T.",
    rating: 5,
    text: "Great experience with their junk removal service. They were quick, efficient, and left the area spotless. Will definitely use them again.",
    date: "1 month ago",
    image: cardImagePool[4],
  },
  {
    name: "Linda M.",
    rating: 5,
    text: "DHA replaced all the soffit and fascia on our house. The transformation is incredible. Professional from start to finish. Thank you!",
    date: "4 months ago",
    image: cardImagePool[1],
  },
  {
    name: "Robert P.",
    rating: 5,
    text: "Arnoldo and his team are the best! They wrapped all our doors and windows, and the house looks spectacular. Couldn't be happier with the results.",
    date: "2 weeks ago",
    image: cardImagePool[3],
  },
  {
    name: "Patricia W.",
    rating: 4,
    text: "Good quality work on our exterior painting project. The team was friendly and cleaned up nicely afterwards. Would hire again for future projects.",
    date: "5 months ago",
    image: cardImagePool[5],
  },
];

/* ─── Star Component ─── */
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill={i < count ? "#FBBC05" : "#E0E0E0"}
        >
          <path d="M10 1l2.39 5.645L18 7.235l-4 4.18.94 5.905L10 14.48l-4.94 2.84.94-5.905-4-4.18 5.61-.59L10 1z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Review Card ─── */
function ReviewCard({
  review,
  index,
  revealed,
}: {
  review: (typeof reviews)[0];
  index: number;
  revealed: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1 ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        boxShadow: "var(--shadow-md)",
      }}
    >
      {/* Project image */}
      <div className="relative h-44 w-full overflow-hidden group">
        <Image
          src={review.image}
          alt={`${review.name} project`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-1">
      {/* Google icon + Stars */}
      <div className="flex items-center justify-between mb-4">
        <Stars count={review.rating} />
        {/* Google "G" badge */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.65l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Google
        </div>
      </div>

      {/* Text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
          }}
        >
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">{review.name}</p>
          <p className="text-xs text-gray-400">{review.date}</p>
        </div>
      </div>
      </div>
    </div>
  );
}

/* ─── Section ─── */
export default function ReviewsSection() {
  const { ref, revealed } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 px-6"
      style={{ backgroundColor: "var(--color-gray-50)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span
            className="inline-block text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            Testimonials
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--color-secondary)" }}
          >
            What People Think About Us
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full mb-6"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
          <p className="text-gray-500 max-w-xl mx-auto">
            Don&apos;t just take our word for it — hear from our satisfied
            customers across Whitewater and the surrounding communities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <ReviewCard
              key={review.name}
              review={review}
              index={i}
              revealed={revealed}
            />
          ))}
        </div>

        {/* Google review CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="https://www.google.com/maps/place/DHA+Construction+LLC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold tracking-wide border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "var(--color-primary)",
              color: "var(--color-primary)",
            }}
          >
            See All Google Reviews
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
