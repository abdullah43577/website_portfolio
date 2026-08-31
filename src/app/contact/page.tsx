import type { Metadata } from "next";
import { AvailabilityPill } from "@/components/home/availability-pill";
import { ContactChannels } from "@/components/contact/contact-channels";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { contactKeywords } from "@/content/keywords";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation about a web platform, a mobile app, or an API that needs building properly.",
  keywords: contactKeywords,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell me what you're building"
        lede="The more concrete the better — what it should do, who it's for, and where it currently hurts. I'll come back with an honest read on scope, approach and timeline."
      >
        <AvailabilityPill />
      </PageHeader>

      <Section className="!pt-14 md:!pt-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          <ContactForm />
          <ContactChannels />
        </div>
      </Section>
    </>
  );
}
