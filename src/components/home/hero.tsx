import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import avatar from "../../../public/avatar.png";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { AvailabilityPill } from "./availability-pill";
import { HeroPortrait } from "./hero-portrait";

export function Hero() {
  return (
    <section className="pb-16 pt-10 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_440px] lg:gap-20 xl:grid-cols-[1fr_480px] xl:gap-24">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full lg:hidden">
                <Image
                  src={avatar}
                  alt=""
                  fill
                  sizes="44px"
                  className="ink-invert object-cover"
                  priority
                />
              </span>
              <AvailabilityPill />
            </div>

            <h1 className="text-display max-w-[20ch] font-medium text-fg">
              I build web platforms — and the{" "}
              <span className="font-serif italic text-accent">mobile</span> apps
              that ship with them.
            </h1>

            <p className="text-subtitle mt-7 max-w-prose text-fg-muted">
              Fullstack engineer in Lagos. I work across the whole product —
              Postgres and MongoDB schemas, Node APIs, React dashboards, and
              React Native apps in both stores.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/#work">
                View selected work
                <ArrowDownRight className="h-4 w-4" strokeWidth={1.8} />
              </Button>
              <Button href={site.cv} variant="secondary" newTab>
                Download CV
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </Button>
            </div>

            <p className="mt-10 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle">
              Currently — {site.currentRole}
            </p>
          </div>

          <div className="hidden lg:block">
            <HeroPortrait />
          </div>
        </div>
      </Container>
    </section>
  );
}
