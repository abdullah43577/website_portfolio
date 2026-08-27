"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { brandIcons } from "@/components/icons/brand";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/content/site";
import { useScrollLock } from "@/hooks/use-scroll-lock";

const links = [...nav, { label: "All work", href: "/projects" }];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useScrollLock(open);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-fg transition-colors duration-150 hover:border-border-strong lg:hidden"
      >
        {open ? (
          <X className="h-[18px] w-[18px]" strokeWidth={1.6} />
        ) : (
          <Menu className="h-[18px] w-[18px]" strokeWidth={1.6} />
        )}
      </button>

      {open ? (
        <div className="fixed inset-x-0 top-16 z-40 animate-sheet-in border-y border-border bg-bg shadow-lg shadow-black/5 lg:hidden">
          <nav className="flex flex-col px-5 py-2" aria-label="Mobile">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-[52px] items-center border-b border-border text-[17px] font-medium tracking-tight text-fg last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 px-5 pb-6 pt-4">
            <Button href="/contact" className="w-full">
              Get in touch
            </Button>
            <div className="flex items-center gap-2">
              {site.socials.map((social) => {
                const Icon = brandIcons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors duration-150 hover:text-fg"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
