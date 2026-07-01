import { Metadata } from "next";
import { serviceAreas, business } from "../../data/siteData";
import AreaPageTemplate from "../../components/AreaPageTemplate";

const area = serviceAreas.find((a) => a.city === "Manhattan")!;
const areaIndex = serviceAreas.indexOf(area);

export const metadata: Metadata = {
	title: `Remodeling & Construction in ${area.city}, ${area.state} | ${business.name}`,
	description: area.description,
};

export default function Page() {
	return <AreaPageTemplate areaIndex={areaIndex} />;
}
