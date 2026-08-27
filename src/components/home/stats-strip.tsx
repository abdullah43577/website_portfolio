import { Container } from "@/components/ui/container";
import { stats } from "@/content/profile";
import { cn } from "@/lib/utils";

const cellBorders = [
  "",
  "border-l border-border pl-5 md:pl-6",
  "border-t border-border md:border-l md:border-t-0 md:pl-6",
  "border-l border-t border-border pl-5 md:border-t-0 md:pl-6",
];

export function StatsStrip() {
  return (
    <div className="border-y border-border bg-surface">
      <Container>
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn("py-7 md:py-9", cellBorders[i])}
            >
              <dt className="label-mono">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-medium tracking-tight text-fg md:text-[2.5rem]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}
