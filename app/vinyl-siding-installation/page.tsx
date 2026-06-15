import ServicePageTemplate from "../components/ServicePageTemplate";
import { generateServicePageMetadata } from "../data/siteData";

export const metadata = generateServicePageMetadata(0);

export default function VinylSidingPage() {
  return <ServicePageTemplate serviceIndex={0} />;
}
