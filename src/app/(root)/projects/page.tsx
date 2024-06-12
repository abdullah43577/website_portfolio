import ClientProject from "./client/ClientProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of projects, ranging from web development and programming to personal growth and industry trends. Stay informed and inspired with my latest work.",
  openGraph: {
    description:
      "Explore my portfolio of projects, ranging from web development and programming to personal growth and industry trends. Stay informed and inspired with my latest work.",
  },
};

export default function Projects() {
  return <ClientProject />;
}
