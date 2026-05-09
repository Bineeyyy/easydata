import { Benefits } from "./(marketing)/_components/benefits";
import { CtaSection } from "./(marketing)/_components/cta-section";
import { Hero } from "./(marketing)/_components/hero";
import { HowItWorks } from "./(marketing)/_components/how-it-works";
import { OctoberCallout } from "./(marketing)/_components/october-callout";
import { SiteFooter } from "./(marketing)/_components/site-footer";
import { SiteNav } from "./(marketing)/_components/site-nav";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Benefits />
        <OctoberCallout />
        <HowItWorks />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
