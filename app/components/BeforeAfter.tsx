"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

/**
 * Interactive before/after comparison slider.
 * Drag the handle (or use arrow keys) to reveal the renovation.
 */
export default function BeforeAfter() {
	const [pos, setPos] = useState(50);
	const containerRef = useRef<HTMLDivElement>(null);
	const draggingRef = useRef(false);

	const updateFromClientX = useCallback((clientX: number) => {
		const el = containerRef.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const pct = ((clientX - rect.left) / rect.width) * 100;
		setPos(Math.min(100, Math.max(0, pct)));
	}, []);

	const onPointerDown = (e: React.PointerEvent) => {
		draggingRef.current = true;
		(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
		updateFromClientX(e.clientX);
	};
	const onPointerMove = (e: React.PointerEvent) => {
		if (!draggingRef.current) return;
		updateFromClientX(e.clientX);
	};
	const onPointerUp = (e: React.PointerEvent) => {
		draggingRef.current = false;
		try {
			(e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
		} catch {
			/* no-op */
		}
	};
	const onKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
		if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
	};

	return (
		<div
			ref={containerRef}
			className="relative w-full max-w-2xl mx-auto aspect-[679/787] rounded-2xl overflow-hidden select-none touch-none cursor-ew-resize"
			style={{ boxShadow: "var(--shadow-lg)" }}
			onPointerDown={onPointerDown}
			onPointerMove={onPointerMove}
			onPointerUp={onPointerUp}
		>
			{/* After (base layer) */}
			<Image
				src="https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638625/rama-fly-site-assets/beforeandafter/after_azrrhh.png"
				alt="Bathroom after renovation by Rama Fly Construction"
				fill
				priority
				sizes="(max-width: 768px) 100vw, 672px"
				className="object-cover"
			/>
			<span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 text-gray-900">
				After
			</span>

			{/* Before (clipped to the left of the handle) */}
			<div
				className="absolute inset-0 z-10"
				style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
			>
				<Image
					src="https://res.cloudinary.com/dcylaqbxa/image/upload/v1784638624/rama-fly-site-assets/beforeandafter/before_oludfn.png"
					alt="Bathroom before renovation"
					fill
					sizes="(max-width: 768px) 100vw, 672px"
					className="object-cover"
				/>
				<span
					className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
					style={{ backgroundColor: "var(--color-primary)" }}
				>
					Before
				</span>
			</div>

			{/* Divider line + drag handle */}
			<div
				className="absolute top-0 bottom-0 z-30 w-0.5 -ml-px bg-white"
				style={{ left: `${pos}%` }}
			>
				<button
					type="button"
					role="slider"
					aria-label="Drag to compare before and after"
					aria-valuemin={0}
					aria-valuemax={100}
					aria-valuenow={Math.round(pos)}
					onKeyDown={onKeyDown}
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-offset-2"
					style={{ color: "var(--color-primary)" }}
				>
					<svg
						width="22"
						height="22"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 7l-5 5 5 5M15 7l5 5-5 5"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}
