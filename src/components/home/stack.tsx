import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { stack } from "@/content/stack";

export function Stack() {
  return (
    <Section id="stack" bordered>
      <SectionHeader
        eyebrow="Toolkit"
        title="What I reach for"
        lede="Chosen for what they let me ship and maintain, not for what's new this quarter."
      />

      <div className="border-t border-border">
        {stack.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.04}>
            <div className="grid gap-3 border-b border-border py-6 md:grid-cols-[200px_1fr] md:gap-8 md:py-7 lg:grid-cols-[260px_1fr]">
              <p className="label-mono md:pt-1">{group.group}</p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] tracking-tight text-fg-muted transition-colors duration-150 hover:text-fg md:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
