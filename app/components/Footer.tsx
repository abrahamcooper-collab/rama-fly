import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { business, services, serviceAreas } from "../data/siteData";

export default function Footer() {
	return (
		<footer
			style={{
				backgroundColor: "var(--color-footer-bg)",
				color: "var(--color-footer-text)",
			}}
		>
			<div className="max-w-7xl mx-auto px-6 py-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
					{/* Brand */}
					<div>
						<h3 className="text-xl font-bold text-white mb-4">
							<a
								href={business.gmbLink}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-80 transition-opacity"
							>
								{business.name}
							</a>
						</h3>
						<p className="text-sm text-gray-400 leading-relaxed mb-6">
							Expert{" "}
							<a
								href={business.gmbLink}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-colors underline decoration-gray-600"
							>
								vinyl siding
							</a>{" "}
							and exterior construction services in{" "}
							<a
								href={business.gmbLink}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-colors underline decoration-gray-600"
							>
								Whitewater, WI
							</a>{" "}
							and surrounding communities. Licensed &amp; insured.
						</p>
						{/* Socials */}
						<div className="flex gap-4">
							<a
								href={business.socials.facebook}
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
							>
								<svg
									width="20"
									height="20"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									viewBox="0 0 24 24"
								>
									<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
								</svg>
							</a>
							<a
								href={business.socials.instagram}
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
							>
								<svg
									width="20"
									height="20"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									viewBox="0 0 24 24"
								>
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
									<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
								</svg>
							</a>
						</div>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-sm font-bold tracking-widest uppercase text-white mb-4">
							Services
						</h4>
						<ul className="space-y-2">
							{services.map((s) => (
								<li key={s.slug}>
									<Link
										href={s.slug}
										className="text-sm text-gray-400 hover:text-white transition-colors"
									>
										{s.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Areas */}
					<div>
						<h4 className="text-sm font-bold tracking-widest uppercase text-white mb-4">
							Service Areas
						</h4>
						<ul className="space-y-2">
							{serviceAreas.map((a) => (
								<li key={a.slug}>
									<Link
										href={a.slug}
										className="text-sm text-gray-400 hover:text-white transition-colors"
									>
										{a.city}, {a.state}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-sm font-bold tracking-widest uppercase text-white mb-4">
							Contact Us
						</h4>
						<ul className="space-y-3 text-sm text-gray-400">
							<li>
								<a
									href={`tel:${business.phoneRaw}`}
									className="flex items-center gap-2 hover:text-white transition-colors"
								>
									<Phone size={16} /> {business.phone}
								</a>
							</li>
							<li>
								<a
									href={`mailto:${business.email}`}
									className="flex items-center gap-2 hover:text-white transition-colors"
								>
									<Mail size={16} /> {business.email}
								</a>
							</li>
							<li className="flex items-center gap-2">
								<MapPin size={16} /> {business.address}
							</li>
							<li className="flex items-center gap-2">
								<Clock size={16} /> {business.hours}
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="border-t border-white/10">
				<div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
					<div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
						<p>
							&copy; {new Date().getFullYear()} {business.name}. All rights
							reserved.
						</p>
					</div>
					<div className="flex gap-4 items-center">
						<p className="text-white font-bold">
							Designed by{" "}
							<a
								href="https://upscalers.us"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-gray-300 transition-colors underline decoration-white/50"
							>
								Upscalers
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
