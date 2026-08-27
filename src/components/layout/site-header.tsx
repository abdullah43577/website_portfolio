"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { nav } from "@/content/site";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-bg/85 backdrop-blur-md transition-colors duration-200",
        scrolled ? "border-b border-border" : "border-b border-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 md:h-[72px]">
          <Wordmark />

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-fg-muted transition-colors duration-150 hover:bg-surface-2 hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/projects"
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition-colors duration-150 hover:bg-surface-2 hover:text-fg",
                pathname.startsWith("/projects")
                  ? "text-accent"
                  : "text-fg-muted",
              )}
            >
              All work
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button href="/contact" size="sm" className="hidden lg:inline-flex">
              Get in touch
            </Button>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
