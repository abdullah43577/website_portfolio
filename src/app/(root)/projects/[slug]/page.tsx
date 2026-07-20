import { getNextProject, getProject } from "../../../../../sanity/sanity-utils";
import Image from "next/image";
import GradientTxt from "@/app/components/Reusables/GradientTxt";
import gradientBG from "../../../../../public/gradient_bg.png";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { toast } from "react-toastify";
import { Calendar, ExternalLink, ArrowRight, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export async function generateMetadata({ params }: Params) {
  const project = await getProject(params.slug);
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export interface Params {
  params: {
    slug: string;
  };
}

export const revalidate = 3600;

export default async function ProjectDetails({ params }: Params) {
  const project = await getProject(params.slug);
  const data = await getNextProject(params.slug);

  if (!project)
    toast.error("Error fetching project details, please try again later!");

  return (
    <section className="pb-20">
      <div className="container mx-auto px-5 pt-5 lg:px-20">
        {/* Hero Section */}
        <div className="mb-16 mt-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* Left Column - Title & Tagline */}
            <div className="lg:max-w-[55%]">
              <GradientTxt
                tagName="h6"
                txt={project.tagline}
                className="text-sm font-bold tracking-[3px]"
              />
              <h2 className="mt-3 text-[36px] font-bold leading-[1.2] md:text-[50px] xl:text-[54px]">
                {project.title}
              </h2>

              {/* Tech Stack - New */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack?.map((tech: string) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Project Overview */}
            <div className="lg:max-w-[40%]">
              <h4 className="mb-3 text-[19px] font-bold leading-[110%] md:text-2xl">
                Project Overview
              </h4>
              <p className="text-gray-600 md:text-lg">{project.description}</p>

              {/* Project Metadata - New */}
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(project._createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-gray-900"
                  >
                    <FaGithub className="h-4 w-4" />
                    <span>Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-gray-900"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={gradientBG}
            alt="gradient background"
            priority
            className="w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={project.image}
              alt={project.alt || project.title}
              width={800}
              height={500}
              className="max-h-[400px] w-full object-contain md:max-h-[500px]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-blue mx-auto max-w-[800px] pt-[80px] xl:prose-xl lg:pt-[120px]">
          <PortableText value={project?.content} />
        </div>

        {/* Next Project Navigation - Enhanced */}
        {data?.nextProject && (
          <div className="mt-20 border-t border-gray-200 pt-16">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <p className="text-sm font-medium text-gray-400">
                  Next Project
                </p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">
                  {data.nextProject.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {data.nextProject.tagline}
                </p>
              </div>
              <Link
                href={`/projects/${data.nextProject.slug}`}
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>View Project</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
