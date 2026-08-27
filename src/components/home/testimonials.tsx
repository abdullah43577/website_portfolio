import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <Section bordered>
      <SectionHeader
        eyebrow="References"
        title="What people I've worked with say"
      />

      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        {testimonials.map((testimonial, i) => (
          <Reveal key={testimonial.name} delay={i * 0.06} className="h-full">
            <figure className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 md:p-8">
              <blockquote className="max-w-prose text-[17px] leading-relaxed tracking-tight text-fg md:text-lg">
                <span
                  className="mr-1 font-serif text-2xl leading-none text-accent"
                  aria-hidden
                >
                  &ldquo;
                </span>
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-auto pt-8">
                <div className="border-t border-border pt-5">
                  <p className="text-[15px] font-medium tracking-tight text-fg">
                    {testimonial.name}
                  </p>
                  <p className="label-mono mt-1.5">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
