import { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import { business } from "../data/siteData";
import Reveal from "../components/Reveal";
import ReviewsSection from "../components/ReviewsSection";
import CoreAreasSection from "../components/CoreAreasSection";
import WhyChooseUsFeatured from "../components/WhyChooseUsFeatured";

export const metadata: Metadata = {
	title: `Contact Us | ${business.name}`,
	description:
		`Contact ${business.name} for a free estimate. Call ${business.phone} or visit us at ${business.address}.`,
};

export default function ContactPage() {
	return (
		<main className="flex-1">
			<PageHeader
				title="Contact Us"
				subtitle="Get in touch for a free estimate — we'd love to hear from you"
				breadcrumb="Contact"
				bgImage="/images/projects/renovation/renovation-22.jpg"
			/>

			<section className="py-20 px-6 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
						{/* Contact Form */}
						<div className="lg:col-span-3">
							<h2
								className="text-2xl font-bold mb-6"
								style={{ color: "var(--color-secondary)" }}
							>
								Send Us a Message
							</h2>
							<form className="space-y-5">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Full Name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											required
											className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
											placeholder="John Doe"
										/>
									</div>
									<div>
										<label
											htmlFor="phone"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Phone Number *
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											required
											className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
											placeholder="(262) 555-1234"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
										placeholder="john@example.com"
									/>
								</div>
								<div>
									<label
										htmlFor="service"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Service Needed
									</label>
									<select
										id="service"
										name="service"
										className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white"
									>
										<option value="">Select a service</option>
										<option>Vinyl Siding</option>
										<option>Soffit &amp; Fascia</option>
										<option>Window Wrapping</option>
										<option>Door Wrapping</option>
										<option>Exterior Painting</option>
										<option>Junk Removal</option>
										<option>Other</option>
									</select>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Message *
									</label>
									<textarea
										id="message"
										name="message"
										rows={5}
										required
										className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y"
										placeholder="Tell us about your project..."
									/>
								</div>
								<button
									type="submit"
									className="w-full sm:w-auto px-10 py-3.5 rounded-full text-sm font-bold tracking-wide text-white transition-all duration-300 hover:scale-105 active:scale-[0.97]"
									style={{
										backgroundColor: "var(--color-primary)",
										boxShadow: "0 6px 20px rgba(26,115,232,0.3)",
									}}
								>
									SEND MESSAGE
								</button>
							</form>
						</div>

						{/* Contact Info Sidebar */}
						<Reveal delay={150} className="lg:col-span-2">
							<div
								className="rounded-2xl p-8 h-full"
								style={{
									backgroundColor: "var(--color-gray-50)",
									boxShadow: "var(--shadow-sm)",
								}}
							>
								<h3
									className="text-xl font-bold mb-6"
									style={{ color: "var(--color-secondary)" }}
								>
									Get In Touch
								</h3>

								<div className="space-y-6 text-sm text-gray-600">
									<div className="flex items-start gap-4">
										<div
											className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-lg"
											style={{ backgroundColor: "var(--color-primary-50)" }}
										>
											📞
										</div>
										<div>
											<p className="font-semibold text-gray-800 mb-1">Phone</p>
											<a
												href={`tel:${business.phoneRaw}`}
												className="hover:text-primary transition-colors"
											>
												{business.phone}
											</a>
										</div>
									</div>

									<div className="flex items-start gap-4">
										<div
											className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-lg"
											style={{ backgroundColor: "var(--color-primary-50)" }}
										>
											✉️
										</div>
										<div>
											<p className="font-semibold text-gray-800 mb-1">Email</p>
											<a
												href={`mailto:${business.email}`}
												className="hover:text-primary transition-colors break-all"
											>
												{business.email}
											</a>
										</div>
									</div>

									<div className="flex items-start gap-4">
										<div
											className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-lg"
											style={{ backgroundColor: "var(--color-primary-50)" }}
										>
											📍
										</div>
										<div>
											<p className="font-semibold text-gray-800 mb-1">
												Address
											</p>
											<p>{business.address}</p>
										</div>
									</div>

									<div className="flex items-start gap-4">
										<div
											className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-lg"
											style={{ backgroundColor: "var(--color-primary-50)" }}
										>
											🕐
										</div>
										<div>
											<p className="font-semibold text-gray-800 mb-1">
												Business Hours
											</p>
											<p>{business.hours}</p>
											<p className="text-gray-400 mt-1">Sunday: Closed</p>
										</div>
									</div>
								</div>

								{/* Map placeholder */}
								<div className="mt-8 rounded-xl overflow-hidden aspect-[4/3] bg-gray-200 flex items-center justify-center">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48379.09193813253!2d-73.9245912!3d40.931211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f3e0f7b8a3b7%3A0x2c8a5f7e3d4b2a1f!2sYonkers%2C%20NY%2010704!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
										width="100%"
										height="100%"
										style={{ border: 0 }}
										allowFullScreen
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
										title="Rama Fly Construction Group LLC Location"
									/>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			<CoreAreasSection />

			<WhyChooseUsFeatured />

			<ReviewsSection />
		</main>
	);
}
