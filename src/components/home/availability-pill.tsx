import { site } from "@/content/site";

export function AvailabilityPill() {
  if (!site.availability.open) return null;

  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface py-1.5 pl-2.5 pr-3.5">
      <span className="relative flex h-1.5 w-1.5" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-pulse-slow rounded-full bg-accent" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-muted">
        {site.availability.label}
      </span>
    </span>
  );
}
