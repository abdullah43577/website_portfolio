import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { education, work } from "@/content/experience";
import { RoleRow } from "./role-row";

export function Experience() {
  return (
    <Section id="experience" bordered>
      <SectionHeader
        eyebrow="Experience"
        title="Where I've built"
        lede="Agencies, startups and product teams - frontend first, then mobile, now the whole stack."
      />

      <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
        <div>
          <p className="label-mono mb-5">Work</p>
          <div className="border-t border-border">
            {work.map((role, i) => (
              <Reveal
                key={`${role.org}-${role.period}`}
                delay={Math.min(i, 4) * 0.04}
              >
                <RoleRow role={role} />
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <p className="label-mono mb-5">Education</p>
          <div className="border-t border-border">
            {education.map((role, i) => (
              <Reveal key={`${role.org}-${role.period}`} delay={i * 0.04}>
                <RoleRow role={role} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
