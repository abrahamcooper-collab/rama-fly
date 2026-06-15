import ServicePageTemplate from "../components/ServicePageTemplate";
import { generateServicePageMetadata } from "../data/siteData";

export const metadata = generateServicePageMetadata(3);

export default function DoorWrappingPage() {
  return <ServicePageTemplate serviceIndex={3} />;
}
