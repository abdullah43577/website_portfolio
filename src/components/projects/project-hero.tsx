import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons/brand";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { Project } from "@/content/projects";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <div className="border-b border-border">
      <Container>
        <div className="py-12 md:py-20">
          <Link
            href="/projects"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm text-fg-muted transition-colors duration-150 hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.8} />
            All work
          </Link>

          <p className="label-mono mt-8">{project.platforms.join(" · ")}</p>

          <h1 className="text-display mt-5 max-w-[16ch] font-medium text-fg">
            {project.title}
          </h1>
          <p className="text-subtitle mt-5 max-w-prose text-fg-muted">
            {project.tagline}
          </p>

          {project.links?.live || project.links?.github ? (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              {project.links.live ? (
                <Button href={project.links.live}>
                  Visit the product
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                </Button>
              ) : null}
              {project.links.github ? (
                <Button href={project.links.github} variant="secondary">
                  <GitHubIcon className="h-4 w-4" />
                  Source
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
