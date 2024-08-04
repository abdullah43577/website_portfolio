import { Project } from "../../../../types/Project";
import { Metadata } from "next";
import { ProjectSkeleton } from "./projectSkeleton";
import Image from "next/image";
import GradientTxt from "@/app/components/Reusables/GradientTxt";
import CustomNav from "@/app/components/Reusables/CustomNav";
import { getProjects } from "../../../../sanity/sanity-utils";
import Link from "next/link";
import { toast } from "react-toastify";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of projects, ranging from web development and programming to personal growth and industry trends. Stay informed and inspired with my latest work.",
  openGraph: {
    description:
      "Explore my portfolio of projects, ranging from web development and programming to personal growth and industry trends. Stay informed and inspired with my latest work.",
  },
};

export const revalidate = 3600;

export default async function Projects() {
  const projects: Project[] = await getProjects();

  if (!projects)
    toast.error("Error fetching articles, please try again later!");

  return (
    <section>
      <div className="container mx-auto grid gap-40 px-5 pt-20 lg:px-20 xl:gap-20">
        {!projects.length ? (
          <ProjectSkeleton />
        ) : (
          projects.map((project) => (
            <Link key={project._id} href={`/projects/${project.slug}`}>
              <div
                className="group relative flex max-w-[600px] cursor-pointer items-center justify-end xl:ml-40"
                // onClick={() => handleNavigation(project.slug)}
              >
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
                  <h2 className="my-2 text-xl font-bold leading-[100%] text-white md:my-8 md:text-[50px] xl:text-[54px]">
                    {project.title}
                  </h2>
                  <CustomNav
                    txt="View Project"
                    className="flex items-center gap-2 text-sm text-white md:text-lg"
                  />
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
