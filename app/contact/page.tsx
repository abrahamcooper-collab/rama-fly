import { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import { business } from "../data/siteData";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
	title: "Contact Us | DHA Construction LLC",
	description:
		"Contact DHA Construction LLC for a free estimate. Call (262) 443-7822 or visit us at 426 W Whitewater St, Whitewater, WI 53190.",
};

export default function ContactPage() {
	return (
		<main className="flex-1">
			<PageHeader
				title="Contact Us"
				subtitle="Get in touch for a free estimate — we'd love to hear from you"
				breadcrumb="Contact"
				bgImage="/images/components/house.jpg"
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
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.5!2d-88.7324!3d42.8336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDUwJzAxLjAiTiA4OMKwNDMnNTYuNiJX!5e0!3m2!1sen!2sus!4v1"
										width="100%"
										height="100%"
										style={{ border: 0 }}
										allowFullScreen
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
										title="DHA Construction LLC Location"
									/>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>
		</main>
	);
}
