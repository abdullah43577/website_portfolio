import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import type { Project } from "@/content/projects";

const MAX_TAGS = 5;

export function ProjectCard({ project }: { project: Project }) {
  const visible = project.stack.slice(0, MAX_TAGS);
  const overflow = project.stack.length - visible.length;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors duration-150 hover:border-border-strong hover:bg-surface-2 md:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="label-mono">{project.platforms.join(" · ")}</p>
        {project.status === "in-development" ? (
          <span className="label-mono shrink-0 text-accent">
            In development
          </span>
        ) : null}
      </div>

      <h3 className="mt-5 text-2xl font-medium tracking-tight text-fg md:text-[1.75rem]">
        {project.title}
      </h3>
      <p className="mt-1.5 text-[15px] text-fg-muted">{project.tagline}</p>

      <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-fg-muted">
        {project.summary}
      </p>

      <div className="mb-8 mt-7 flex flex-wrap gap-1.5">
        {visible.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
        {overflow > 0 ? <Tag>+{overflow}</Tag> : null}
      </div>

      <div className="mt-auto flex items-center gap-1.5 border-t border-border pt-5 text-sm font-medium text-fg">
        <span className="transition-colors duration-150 group-hover:text-accent">
          Read the case study
        </span>
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-accent"
          strokeWidth={1.8}
        />
      </div>
    </Link>
  );
}
