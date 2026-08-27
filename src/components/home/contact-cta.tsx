import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { site } from "@/content/site";
import { AvailabilityPill } from "./availability-pill";

export function ContactCta() {
  return (
    <Section id="contact" bordered>
      <Reveal className="rounded-xl border border-border bg-surface p-8 md:p-14 lg:p-20">
        <AvailabilityPill />

        <h2 className="text-title mt-8 max-w-[18ch] font-medium text-fg">
          Have something you need{" "}
          <span className="font-serif italic text-accent">built</span>?
        </h2>

        <p className="text-subtitle mt-5 max-w-prose text-fg-muted">
          Tell me what you&apos;re working on and what it needs to do. I&apos;ll
          come back within two days with an honest read on scope, approach and
          timeline.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="/contact">
            Start a conversation
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
          </Button>
          <Button href={`mailto:${site.email}`} variant="secondary">
            {site.email}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
