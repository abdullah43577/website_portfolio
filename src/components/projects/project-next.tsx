import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import type { Project } from "@/content/projects";

export function ProjectNext({ project }: { project: Project }) {
  return (
    <div className="border-t border-border">
      <Container>
        <Link
          href={`/projects/${project.slug}`}
          className="group flex flex-col gap-6 py-14 md:flex-row md:items-end md:justify-between md:py-20"
        >
          <div>
            <p className="label-mono mb-4">Next project</p>
            <p className="text-title font-medium tracking-tight text-fg transition-colors duration-150 group-hover:text-accent">
              {project.title}
            </p>
            <p className="mt-2 text-[15px] text-fg-muted">{project.tagline}</p>
          </div>
          <ArrowRight
            className="h-7 w-7 shrink-0 text-fg-subtle transition-all duration-150 group-hover:translate-x-1 group-hover:text-accent"
            strokeWidth={1.4}
          />
        </Link>
      </Container>
    </div>
  );
}
