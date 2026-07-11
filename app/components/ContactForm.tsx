"use client";

import { useState } from "react";

// FormSubmit AJAX endpoint — delivers submissions to Rama Fly's inbox.
// After activating, you can hide the address from page source by setting
// NEXT_PUBLIC_FORMSUBMIT_ENDPOINT to the hashed URL (.../ajax/el/xxxx).
const FORMSUBMIT_ENDPOINT =
	process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT ??
	"https://formsubmit.co/ajax/ramaflyconstruction@gmail.com";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
	const [status, setStatus] = useState<Status>("idle");
	const [errorMsg, setErrorMsg] = useState("");

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus("submitting");
		setErrorMsg("");

		const form = e.currentTarget;
		const formData = new FormData(form);
		const payload = {
			...Object.fromEntries(formData.entries()),
			_subject: "New Contact Form Submission — Rama Fly Construction",
			_template: "table",
			_captcha: "false",
		};

		try {
			const res = await fetch(FORMSUBMIT_ENDPOINT, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(payload),
			});
			const data = await res.json();

			// FormSubmit returns success as the string "true".
			if (res.ok && String(data.success) === "true") {
				setStatus("success");
				form.reset();
			} else {
				setStatus("error");
				setErrorMsg(data.message || "Something went wrong. Please try again.");
			}
		} catch {
			setStatus("error");
			setErrorMsg("Network error. Please check your connection and try again.");
		}
	}

	if (status === "success") {
		return (
			<div
				className="rounded-2xl p-8 text-center"
				style={{ backgroundColor: "var(--color-primary-50)" }}
			>
				<div className="text-4xl mb-4">✅</div>
				<h3
					className="text-xl font-bold mb-2"
					style={{ color: "var(--color-secondary)" }}
				>
					Message Sent!
				</h3>
				<p className="text-gray-600 text-sm mb-6">
					Thanks for reaching out. We&apos;ll get back to you as soon as possible.
				</p>
				<button
					type="button"
					onClick={() => setStatus("idle")}
					className="px-8 py-3 rounded-full text-sm font-bold tracking-wide text-white transition-all duration-300 hover:scale-105"
					style={{ backgroundColor: "var(--color-primary)" }}
				>
					Send Another
				</button>
			</div>
		);
	}

	return (
		<form className="space-y-5" onSubmit={handleSubmit}>
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
					<option>Apartment Renovation</option>
					<option>Kitchen Remodeling</option>
					<option>Bathroom Renovation</option>
					<option>Full Interior Renovation</option>
					<option>Custom Millwork</option>
					<option>Flooring</option>
					<option>Painting &amp; Plaster</option>
					<option>Electrical</option>
					<option>Plumbing</option>
					<option>Exterior Services</option>
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

			{/* Honeypot spam filter — hidden from real users (FormSubmit's _honey) */}
			<input
				type="text"
				name="_honey"
				className="hidden"
				style={{ display: "none" }}
				tabIndex={-1}
				autoComplete="off"
			/>

			{status === "error" && (
				<p className="text-sm text-red-600 font-medium">{errorMsg}</p>
			)}

			<button
				type="submit"
				disabled={status === "submitting"}
				className="w-full sm:w-auto px-10 py-3.5 rounded-full text-sm font-bold tracking-wide text-white transition-all duration-300 hover:scale-105 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
				style={{
					backgroundColor: "var(--color-primary)",
					boxShadow: "0 6px 20px rgba(26,115,232,0.3)",
				}}
			>
				{status === "submitting" ? "SENDING..." : "SEND MESSAGE"}
			</button>
		</form>
	);
}
