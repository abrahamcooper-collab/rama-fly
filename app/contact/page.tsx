import { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import { business } from "../data/siteData";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
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
							<ContactForm />
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
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.1197637!3d40.6976637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
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
