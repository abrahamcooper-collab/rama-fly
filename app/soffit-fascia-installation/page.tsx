import ServicePageTemplate from "../components/ServicePageTemplate";
import { generateServicePageMetadata } from "../data/siteData";

export const metadata = generateServicePageMetadata(1);

export default function SoffitFasciaPage() {
  return <ServicePageTemplate serviceIndex={1} />;
}
