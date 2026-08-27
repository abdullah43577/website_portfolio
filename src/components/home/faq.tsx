import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { faq } from "@/content/faq";

export function Faq() {
  return (
    <Section id="faq" bordered>
      <SectionHeader eyebrow="Questions" title="Before you reach out" />

      <div className="border-t border-border">
        {faq.map((item, i) => (
          <Reveal key={item.question} delay={Math.min(i, 4) * 0.04}>
            <details className="group border-b border-border">
              <summary className="flex min-h-[68px] cursor-pointer list-none items-center gap-6 py-5 text-[17px] font-medium tracking-tight text-fg transition-colors duration-150 hover:text-accent [&::-webkit-details-marker]:hidden">
                <span className="flex-1">{item.question}</span>
                <Plus
                  className="h-5 w-5 shrink-0 text-fg-subtle transition-transform duration-200 group-open:rotate-45"
                  strokeWidth={1.6}
                />
              </summary>
              <p className="pb-7 text-[15px] leading-loose text-fg-muted md:text-base">
                {item.answer}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
