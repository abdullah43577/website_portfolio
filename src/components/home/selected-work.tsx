import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { featuredProjects } from "@/content/projects";

export function SelectedWork() {
  return (
    <Section id="work">
      <SectionHeader
        eyebrow="Selected work"
        title="Products people actually use"
        lede="Platforms and apps built end to end - the API, the schema, the dashboard and the client you install."
        action={
          <Button href="/projects" variant="secondary" size="sm">
            All work
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.06} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
