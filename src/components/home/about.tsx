import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { about } from "@/content/profile";
import { Principles } from "./principles";

export function About() {
  return (
    <Section id="about" bordered>
      <SectionHeader eyebrow="About" title={about.lede} />

      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="space-y-5">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="max-w-prose text-[15px] leading-relaxed text-fg-muted md:text-base"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>

        <div>
          <p className="label-mono mb-6">How I work</p>
          <Principles />
        </div>
      </div>
    </Section>
  );
}
