import { About } from "@/components/home/about";
import { Capabilities } from "@/components/home/capabilities";
import { ContactCta } from "@/components/home/contact-cta";
import { Experience } from "@/components/home/experience";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { SelectedWork } from "@/components/home/selected-work";
import { Stack } from "@/components/home/stack";
import { StatsStrip } from "@/components/home/stats-strip";
import { Testimonials } from "@/components/home/testimonials";
import { OpenSource } from "@/components/projects/open-source";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <SelectedWork />
      <About />
      <Capabilities />
      <Stack />
      <Experience />
      <OpenSource />
      <Testimonials />
      <Faq />
      <ContactCta />
    </>
  );
}
