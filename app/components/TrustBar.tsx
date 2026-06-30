import { ShieldCheck, CalendarClock, Award, Hammer, BadgeDollarSign } from "lucide-react";

const trustPoints = [
	{ icon: ShieldCheck, label: "Licensed & Insured" },
	{ icon: CalendarClock, label: "Serving New York Since 2006" },
	{ icon: Award, label: "Nearly 20 Years of Experience" },
	{ icon: Hammer, label: "Hundreds of Completed Projects" },
	{ icon: BadgeDollarSign, label: "Free Estimates" },
];

export default function TrustBar() {
	return (
		<section className="py-8 px-6 bg-white border-b border-gray-100">
			<div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
				{trustPoints.map(({ icon: Icon, label }) => (
					<div
						key={label}
						className="flex flex-col items-center text-center gap-2"
					>
						<div
							className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
							style={{ backgroundColor: "var(--color-primary-50)" }}
						>
							<Icon size={22} style={{ color: "var(--color-primary)" }} />
						</div>
						<span
							className="text-sm font-semibold leading-snug"
							style={{ color: "var(--color-secondary)" }}
						>
							{label}
						</span>
					</div>
				))}
			</div>
		</section>
	);
}
