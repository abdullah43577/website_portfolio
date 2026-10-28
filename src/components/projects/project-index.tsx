"use client";

import { useMemo, useState } from "react";
import { publishedProjects, type ProjectCategory } from "@/content/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./project-card";

type Filter = ProjectCategory | "all";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Everything" },
  { value: "fullstack", label: "Fullstack" },
  { value: "mobile", label: "Mobile" },
  { value: "web", label: "Web" },
];

export function ProjectIndex() {
  const [active, setActive] = useState<Filter>("all");

  const visible = useMemo(
    () =>
      active === "all"
        ? publishedProjects
        : publishedProjects.filter((p) => p.category === active),
    [active],
  );

  return (
    <>
      <div className="no-scrollbar -mx-5 mb-10 overflow-x-auto px-5 md:mx-0 md:px-0">
        <div
          className="flex w-max gap-2"
          role="tablist"
          aria-label="Filter projects"
        >
          {filters.map((filter) => {
            const isActive = filter.value === active;
            const count =
              filter.value === "all"
                ? publishedProjects.length
                : publishedProjects.filter((p) => p.category === filter.value).length;

            return (
              <button
                key={filter.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(filter.value)}
                className={cn(
                  "inline-flex min-h-[44px] items-center gap-2 rounded-lg border px-4 text-sm transition-colors duration-150",
                  isActive
                    ? "border-fg bg-fg text-bg"
                    : "border-border bg-surface text-fg-muted hover:border-border-strong hover:text-fg",
                )}
              >
                {filter.label}
                <span
                  className={cn(
                    "font-mono text-[11px]",
                    isActive ? "text-bg/60" : "text-fg-subtle",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
