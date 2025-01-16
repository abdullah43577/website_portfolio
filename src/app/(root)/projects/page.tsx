import { Project } from "../../../../types/Project";
import { Metadata } from "next";
import { getProjects } from "../../../../sanity/sanity-utils";
import { toast } from "react-toastify";
import ProjectClient from "./ProjectClient";

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

  return <ProjectClient projects={projects} />;
}
