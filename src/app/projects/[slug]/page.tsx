import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/home/contact-cta";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectHighlights } from "@/components/projects/project-highlights";
import { ProjectMeta } from "@/components/projects/project-meta";
import { ProjectNext } from "@/components/projects/project-next";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { projectKeywords } from "@/content/keywords";
import { getAdjacentProject, getProject, projects } from "@/content/projects";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    keywords: projectKeywords(project),
    openGraph: { title: project.title, description: project.summary },
  };
}

export default function ProjectPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const next = getAdjacentProject(params.slug);

  return (
    <>
      <ProjectHero project={project} />

      <Section className="!pb-16 !pt-14 md:!pb-20 md:!pt-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
          <div>
            <p className="max-w-prose text-lg leading-relaxed text-fg md:text-xl md:leading-relaxed">
              {project.summary}
            </p>
          </div>
          <ProjectMeta project={project} />
        </div>
      </Section>

      <Section bordered className="!py-16 md:!py-20">
        <ProjectHighlights project={project} />
      </Section>

      <Section bordered className="!py-16 md:!py-20">
        <p className="label-mono mb-6">Built with</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Tag key={item} className="px-3 py-1.5 text-xs">
              {item}
            </Tag>
          ))}
        </div>
      </Section>

      {next ? <ProjectNext project={next} /> : null}
      <ContactCta />
    </>
  );
}
