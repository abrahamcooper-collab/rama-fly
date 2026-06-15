"use client";

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { reviews, business, type Review } from "../data/siteData";
import { FormatBusinessName } from "./FormatText";

/* ─── Aggregate rating ─── */
const avgRating =
  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

/* ─── Avatar colors (Google-style) ─── */
const avatarColors = [
  "linear-gradient(135deg, #E91E63 0%, #C2185B 100%)",
  "linear-gradient(135deg, #7E57C2 0%, #5E35B1 100%)",
  "linear-gradient(135deg, #26A69A 0%, #00897B 100%)",
  "linear-gradient(135deg, #29B6F6 0%, #0288D1 100%)",
  "linear-gradient(135deg, #FFA726 0%, #F57C00 100%)",
];

/* ─── Google "G" logo ─── */
function GoogleLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
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
  );
}

/* ─── Star row ─── */
function Stars({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
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
const READ_MORE_THRESHOLD = 240;

function ReviewCard({
  review,
  index,
  revealed,
}: {
  review: Review;
  index: number;
  revealed: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const isLong = !review.truncated && review.text.length > READ_MORE_THRESHOLD;

  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-7 flex flex-col transition-all duration-500 hover:-translate-y-1 ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        boxShadow: "var(--shadow-md)",
      }}
    >
      {/* Header: avatar + name + stars/date, with Google logo */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold text-white shrink-0"
            style={{ background: avatarColors[index % avatarColors.length] }}
          >
            {review.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">
              {review.name}
            </p>
            <div className="flex items-center gap-2">
              <Stars count={review.rating} size={14} />
              <span className="text-xs text-gray-400">{review.date}</span>
            </div>
          </div>
        </div>
        <GoogleLogo />
      </div>

      {/* Review text */}
      <p
        className={`text-gray-600 text-sm leading-relaxed flex-1 ${
          isLong && !expanded ? "line-clamp-5" : ""
        }`}
      >
        &ldquo;<FormatBusinessName text={review.text} />&rdquo;
      </p>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 self-start text-xs font-bold uppercase tracking-wide transition-colors hover:underline"
          style={{ color: "var(--color-primary)" }}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
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
          className={`text-center mb-12 transition-all duration-700 ${
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
            What Our Clients Say
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full mb-6"
            style={{ backgroundColor: "var(--color-accent)" }}
          />

          {/* Aggregate rating summary */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2.5" style={{ boxShadow: "var(--shadow-sm)" }}>
            <GoogleLogo size={20} />
            <span className="text-lg font-bold text-gray-800">
              {avgRating.toFixed(1)}
            </span>
            <Stars count={Math.round(avgRating)} size={18} />
            <span className="text-sm text-gray-400 hidden sm:inline">
              {reviews.length} Google reviews
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
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
            href={business.gmbLink}
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
