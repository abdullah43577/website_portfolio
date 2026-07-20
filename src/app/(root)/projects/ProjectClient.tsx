"use client";

import Image from "next/image";
import { ProjectSkeleton } from "./projectSkeleton";
import GradientTxt from "@/app/components/Reusables/GradientTxt";
import CustomNav from "@/app/components/Reusables/CustomNav";
import Link from "next/link";
import { Project } from "../../../../types/Project";
import { useState } from "react";
import { ProjectPagination } from "./ProjectPagination";
import { Calendar, ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectClient({ projects }: { projects: Project[] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const jobsPerPage = 6; // Changed to 6 for grid layout (2 rows of 3)

  // Calculate pagination values
  const offset = currentPage * jobsPerPage;
  const currentProjects = projects.slice(offset, offset + jobsPerPage);
  const pageCount = Math.ceil(projects.length / jobsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-5 lg:px-20">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <GradientTxt
            tagName="h2"
            txt="All Projects"
            className="text-4xl font-bold md:text-5xl"
          />
          <p className="mt-3 text-gray-500">
            {projects.length} projects • Showing {currentProjects.length} per
            page
          </p>
        </div>

        {!projects.length ? (
          <ProjectSkeleton />
        ) : (
          <>
            {/* Grid Layout - 2 or 3 columns */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentProjects.map((project) => (
                <Link
                  key={project._id}
                  href={`/projects/${project.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-gray-100">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        width={400}
                        height={300}
                        priority
                        className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-110 md:h-[240px]"
                      />

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Tech Stack Tags - Appears on Hover */}
                      <div className="absolute right-3 top-3 flex max-w-[60%] flex-wrap justify-end gap-1 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        {project.techStack.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/20 bg-black/70 px-2 py-0.5 text-[8px] font-medium text-white shadow-lg backdrop-blur-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 2 && (
                          <span className="rounded-full border border-white/20 bg-black/70 px-2 py-0.5 text-[8px] font-medium text-white shadow-lg backdrop-blur-md">
                            +{project.techStack.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Date Badge */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-2 py-1 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                        <Calendar className="h-3 w-3 text-white/70" />
                        <span className="text-[10px] font-medium text-white/80">
                          {new Date(project._createdAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              year: "numeric",
                            },
                          )}
                        </span>
                      </div>

                      {/* Quick Action Buttons */}
                      <div className="absolute bottom-3 right-3 flex gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="rounded-full border border-white/20 bg-black/70 p-1.5 backdrop-blur-md transition-all hover:scale-110 hover:bg-black"
                            aria-label="View GitHub repository"
                          >
                            <FaGithub className="h-3.5 w-3.5 text-white" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="rounded-full border border-white/20 bg-black/70 p-1.5 backdrop-blur-md transition-all hover:scale-110 hover:bg-black"
                            aria-label="View live demo"
                          >
                            <ExternalLink className="h-3.5 w-3.5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <GradientTxt
                        tagName="h6"
                        txt={project.tagline}
                        className="text-[10px] font-bold tracking-[3px]"
                      />

                      <h3 className="mt-2 line-clamp-1 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-gray-600">
                        {project.title}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
                        {project.description}
                      </p>

                      {/* Tech Stack Preview */}
                      <div className="mt-3 flex flex-wrap gap-1">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-gray-100 px-2 py-0.5 text-[8px] font-medium text-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[8px] font-medium text-gray-400">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                        <CustomNav
                          txt="View Project"
                          className="flex items-center gap-1.5 text-xs font-medium text-gray-900 transition-all duration-300 group-hover:gap-2 group-hover:text-gray-600"
                        />
                        <ArrowUpRight className="h-3.5 w-3.5 text-gray-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12">
              <ProjectPagination
                pageCount={pageCount}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
