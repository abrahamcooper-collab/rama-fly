import ServicePageTemplate from "../components/ServicePageTemplate";
import { generateServicePageMetadata } from "../data/siteData";

export const metadata = generateServicePageMetadata(4);

export default function JunkRemovalPage() {
  return <ServicePageTemplate serviceIndex={4} />;
}
