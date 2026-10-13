import Link from "next/link";
import { MapPin } from "lucide-react";
import { brandIcons } from "@/components/icons/brand";
import { Container } from "@/components/ui/container";
import { footerNav, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr] md:py-20">
          <div>
            <p className="text-lg font-medium tracking-tight text-fg">
              {site.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-fg-muted">
              {site.role}. Building web platforms and mobile apps from schema to
              interface.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <p className="flex items-center gap-2 text-sm text-fg-muted">
                <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.6} />
                {site.location}
              </p>
              <a
                href={`mailto:${site.email}`}
                className="w-fit text-sm text-fg-muted underline decoration-border underline-offset-4 transition-colors duration-150 hover:text-accent hover:decoration-accent"
              >
                {site.email}
              </a>
            </div>

            <div className="mt-7 flex items-center gap-2">
              {site.socials.map((social) => {
                const Icon = brandIcons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors duration-150 hover:border-border-strong hover:text-fg"
                  >
                    <Icon className="h-[15px] w-[15px]" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="label-mono mb-5">Navigate</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex min-h-[40px] items-center text-sm text-fg-muted transition-colors duration-150 hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border py-8 text-[13px] text-fg-subtle md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name} - published on npm as{" "}
            <span className="font-mono text-fg-muted">@reactmode</span>
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em]">
            Next.js · TypeScript · Tailwind
          </p>
        </div>
      </Container>
    </footer>
  );
}
