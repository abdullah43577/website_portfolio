import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  action?: React.ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  lede,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <Reveal className={cn("mb-12 md:mb-16", className)}>
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="label-mono mb-5 flex items-center gap-3">
            <span
              className="inline-block h-px w-6 bg-border-strong"
              aria-hidden
            />
            {eyebrow}
          </p>
          <h2 className="text-title font-medium text-fg">{title}</h2>
          {lede ? (
            <p className="text-subtitle mt-5 max-w-prose text-fg-muted">
              {lede}
            </p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </Reveal>
  );
}
