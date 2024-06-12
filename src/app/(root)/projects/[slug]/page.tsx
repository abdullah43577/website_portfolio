import { getProject } from "../../../../../sanity/sanity-utils";
import ClientSlug from "./ClientSlug";

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

export default function ProjectDetails({ params }: Params) {
  return <ClientSlug params={params} />;
}
