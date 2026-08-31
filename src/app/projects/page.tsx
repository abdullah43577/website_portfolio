import type { Metadata } from "next";
import { ContactCta } from "@/components/home/contact-cta";
import { OpenSource } from "@/components/projects/open-source";
import { ProjectIndex } from "@/components/projects/project-index";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { workKeywords } from "@/content/keywords";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected fullstack, mobile and web projects — multi-tenant HR platforms, job marketplaces, membership systems and React Native apps.",
  keywords: workKeywords,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Everything worth showing"
        lede="Client platforms, products built solo, and the tools in between. Each one links to a case study covering what it does and how it was built."
      />

      <Section className="!pt-14 md:!pt-20">
        <ProjectIndex />
      </Section>

      <OpenSource />
      <ContactCta />
    </>
  );
}
