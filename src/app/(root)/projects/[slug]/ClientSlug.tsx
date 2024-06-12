"use client";

import { useEffect, useState } from "react";
import type { Project } from "../../../../../types/Project";
import { getNextProject, getProject } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import gradientBG from "../../../../../public/gradient_bg.png";
import Image from "next/image";
import GradientTxt from "@/app/components/Reusables/GradientTxt";
import { useRouter } from "next/navigation";
import { Params } from "./page";

export default function ClientSlug({ params }: Params) {
  const router = useRouter();
  const [project, setProject] = useState<Project>({} as Project);

  useEffect(() => {
    const fetchProject = async function () {
      try {
        const project = await getProject(params.slug);
        setProject(project);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProject();
  }, [params.slug]);

  const handleNextProjectNavigation = async function () {
    try {
      const { currentProject, nextProject } = await getNextProject(params.slug);
      router.push(`/projects/${nextProject.slug}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="container mx-auto px-5 pt-5 lg:px-20">
        <div className="mb-20 mt-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <GradientTxt
              tagName="h6"
              txt={project.tagline}
              className="text-sm font-bold"
            />
            <h2 className="mt-3 text-[36px] font-bold leading-[120%] md:text-[50px] xl:text-[54px]">
              {project.title}
            </h2>
          </div>

          <div className="lg:max-w-[50%]">
            <h4 className="mb-3 text-[19px] font-bold leading-[110%] md:text-2xl">
              Project Overview
            </h4>
            <p className="md:text-lg">{project.description}</p>
          </div>
        </div>
        <Image src={gradientBG} alt="gradient background" priority />
        <div className="prose prose-lg prose-blue mx-auto max-w-[800px] pt-[100px] xl:prose-xl lg:pt-[160px]">
          <PortableText value={project?.content} />
        </div>

        <div
          className="flex justify-center"
          onClick={handleNextProjectNavigation}
        >
          <div className="group mx-auto mt-10 inline-flex cursor-pointer items-center justify-center gap-3 bg-gradient-to-r from-purple-400 via-red-500 to-orange-600 bg-clip-text pb-4 text-center text-[30px] font-bold leading-[110%] text-transparent md:text-[50px] xl:text-[54px]">
            <h2>Next Project</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="red"
              className="bi bi-chevron-double-right transition-transform duration-300 group-hover:translate-x-3"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
              />
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
