"use client";

import Image from "next/image";
import { ProjectSkeleton } from "./projectSkeleton";
import GradientTxt from "@/app/components/Reusables/GradientTxt";
import CustomNav from "@/app/components/Reusables/CustomNav";
import Link from "next/link";
import { Project } from "../../../../types/Project";
import { useState } from "react";
import { ProjectPagination } from "./ProjectPagination";

export default function ProjectClient({ projects }: { projects: Project[] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const jobsPerPage = 5;

  // Calculate pagination values
  const offset = currentPage * jobsPerPage;
  const currentProjects = projects.slice(offset, offset + jobsPerPage);
  const pageCount = Math.ceil(projects.length / jobsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <section>
      <div className="container mx-auto grid gap-40 px-5 pt-20 lg:px-20 xl:gap-20">
        {!projects.length ? (
          <ProjectSkeleton />
        ) : (
          <>
            {currentProjects.map((project) => (
              <Link key={project._id} href={`/projects/${project.slug}`}>
                <div className="group relative flex max-w-[600px] cursor-pointer items-center justify-end xl:ml-40">
                  <div className="overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={400}
                      height={560}
                      priority
                      className="w-full transition-transform duration-300 group-hover:scale-[1.1]"
                    />
                  </div>
                  <div className="absolute -bottom-16 -right-2 w-[90%] bg-black px-6 py-6 md:-right-[150px] md:py-14 xl:-right-[400px] xl:bottom-20 xl:w-full">
                    <GradientTxt
                      tagName="h6"
                      txt={project.tagline}
                      className="text-[13px] font-bold tracking-[4px] md:text-sm xl:text-lg"
                    />
                    <h2 className="my-2 truncate text-xl font-bold leading-[100%] text-white md:my-8 md:text-[50px] xl:text-[54px]">
                      {project.title}
                    </h2>
                    <CustomNav
                      txt="View Project"
                      className="flex items-center gap-2 text-sm text-white md:text-lg"
                    />
                  </div>
                </div>
              </Link>
            ))}

            <div>
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
