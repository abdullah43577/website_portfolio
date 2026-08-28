import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { packages } from "@/content/open-source";
import { PackageCard } from "./package-card";

export function OpenSource() {
  return (
    <Section id="open-source" bordered>
      <SectionHeader
        eyebrow="Open source"
        title="Tools I built because I needed them"
        lede="Small CLIs published to npm, written to solve a problem that kept recurring across projects."
      />

      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        {packages.map((pkg, i) => (
          <Reveal key={pkg.name} delay={i * 0.06} className="h-full min-w-0">
            <PackageCard pkg={pkg} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
