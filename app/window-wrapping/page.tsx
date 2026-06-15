import ServicePageTemplate from "../components/ServicePageTemplate";
import { generateServicePageMetadata } from "../data/siteData";

export const metadata = generateServicePageMetadata(2);

export default function WindowWrappingPage() {
  return <ServicePageTemplate serviceIndex={2} />;
}
