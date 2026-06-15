"use client";

import Image from "next/image";
import { business } from "../data/siteData";

export default function PageHeader({
	title,
	subtitle,
	breadcrumb,
	bgImage,
}: {
	title: string;
	subtitle?: string;
	breadcrumb?: string;
	bgImage?: string;
}) {
	return (
		<section className="relative w-full py-28 sm:py-36 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
			<div className="absolute inset-0 bg-gray-900">
				{bgImage ? (
					<Image
						src={bgImage}
						alt={title}
						fill
						priority
						className="object-cover"
					/>
				) : (
					<div
						className="absolute inset-0"
						style={{ backgroundColor: "var(--color-secondary-dark)" }}
					/>
				)}
				<div
					className="absolute inset-0 opacity-30"
					style={{ backgroundColor: "var(--color-secondary)" }}
				/>
				<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30" />
			</div>

			<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">
				{breadcrumb && (
					<p className="text-sm font-medium text-white/70 mb-4 tracking-wide uppercase drop-shadow-sm">
						Home / {breadcrumb}
					</p>
				)}
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
					{title}
				</h1>
				{subtitle && (
					<p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed">
						{subtitle}
					</p>
				)}
				<a
					href={`tel:${business.phoneRaw}`}
					className={`inline-flex items-center px-10 py-4 rounded-full text-sm font-bold tracking-wider text-white transition-all duration-300 hover:scale-105 active:scale-[0.98] ${!subtitle ? "mt-8" : ""}`}
					style={{
						backgroundColor: "var(--color-primary)",
						boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
					}}
				>
					CALL US NOW
				</a>
			</div>
		</section>
	);
}
