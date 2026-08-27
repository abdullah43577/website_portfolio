import { Reveal } from "@/components/ui/reveal";
import type { Project } from "@/content/projects";

export function ProjectHighlights({ project }: { project: Project }) {
  return (
    <div>
      <p className="label-mono mb-6">What went into it</p>
      <ul className="border-t border-border">
        {project.highlights.map((highlight, i) => (
          <Reveal
            as="li"
            key={highlight.slice(0, 32)}
            delay={Math.min(i, 4) * 0.05}
          >
            <div className="flex gap-5 border-b border-border py-6 md:gap-8">
              <span className="label-mono mt-1 shrink-0 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="max-w-prose text-[15px] leading-relaxed text-fg-muted md:text-base">
                {highlight}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
