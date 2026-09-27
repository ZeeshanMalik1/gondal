import { CorporateHeader } from "@/components/corporate/CorporateHeader";
import { CorporateFooter } from "@/components/corporate/CorporateFooter";
import { CorporateHero } from "@/components/corporate/CorporateHero";
import { ManifestoSection } from "@/components/corporate/ManifestoSection";
import { BusinessesSection } from "@/components/corporate/BusinessesSection";
import { WhyUsSection } from "@/components/corporate/WhyUsSection";
import { StatsSection } from "@/components/corporate/StatsSection";
import { LocationsSection } from "@/components/corporate/LocationsSection";
import { ContactCtaSection } from "@/components/corporate/ContactCtaSection";

export default function HomePage() {
  return (
    <>
      <CorporateHeader />
      <main id="main-content">
        <CorporateHero />
        <BusinessesSection />
        <ManifestoSection />
        <WhyUsSection />
        <StatsSection />
        <LocationsSection />
        <ContactCtaSection />
      </main>
      <CorporateFooter />
    </>
  );
}
