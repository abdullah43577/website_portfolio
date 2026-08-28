import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { packages } from "@/content/open-source";

type PackageCardProps = { pkg: (typeof packages)[number] };

export function PackageCard({ pkg }: PackageCardProps) {
  const scopeEnd = pkg.name.indexOf("/") + 1;

  return (
    <Card className="flex h-full flex-col p-6 md:p-8">
      {/* <wbr> so a scoped name breaks after the slash rather than mid-word at 375px. */}
      <h3 className="break-words font-mono text-[15px] tracking-tight text-fg">
        {pkg.name.slice(0, scopeEnd)}
        <wbr />
        {pkg.name.slice(scopeEnd)}
      </h3>

      <div className="mt-4 rounded-lg border border-border bg-surface-2 px-4 py-3">
        <div className="no-scrollbar scroll-fade-r overflow-x-auto">
          <code className="whitespace-nowrap font-mono text-[13px] text-fg-muted">
            <span className="select-none text-fg-subtle">$ </span>
            {pkg.command}
          </code>
        </div>
      </div>

      <p className="mb-8 mt-5 text-[15px] leading-relaxed text-fg-muted">
        {pkg.description}
      </p>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {pkg.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-5">
          <a
            href={pkg.npm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-fg transition-colors duration-150 hover:text-accent"
          >
            npm
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
          </a>
          <a
            href={pkg.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-fg-muted transition-colors duration-150 hover:text-accent"
          >
            Source
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </Card>
  );
}
