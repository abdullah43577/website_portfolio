import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { capabilities } from "@/content/capabilities";

export function Capabilities() {
  return (
    <Section id="services" bordered>
      <SectionHeader
        eyebrow="What I do"
        title="Three surfaces, one engineer"
        lede="Most products need all three. Owning them together is faster than coordinating three people who each own one."
      />

      <div className="grid gap-4 md:gap-5 lg:grid-cols-3">
        {capabilities.map((capability, i) => (
          <Reveal key={capability.id} delay={i * 0.06} className="h-full">
            <Card className="flex h-full flex-col p-6 md:p-8">
              <p className="label-mono">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-5 text-xl font-medium tracking-tight text-fg">
                {capability.title}
              </h3>
              <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-fg-muted">
                {capability.body}
              </p>

              <ul className="mt-7 space-y-2.5 border-t border-border pt-6">
                {capability.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[14px] text-fg-muted"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      strokeWidth={1.8}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
