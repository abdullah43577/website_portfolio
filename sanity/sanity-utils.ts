import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";
import { clientConfig } from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] | order(_createdAt asc){
       _id,
      _createdAt,
      title,
      "slug": slug.current,
      tagline,
      description,
      liveUrl,
      githubUrl,
      techStack,
      "image":  image.asset->url,
      "alt": image.alt,
      content
    }`,
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      tagline,
      description,
      liveUrl,
      githubUrl,
      techStack,
      "image":  image.asset->url,
      "alt": image.alt,
      content
    }`,
    { slug },
  );
}

export async function getNextProject(slug: string): Promise<{
  currentProject: Project;
  nextProject: Project;
}> {
  return createClient(clientConfig).fetch(
    groq`{
      "currentProject": *[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        tagline,
        description,
        liveUrl,
        githubUrl,
        techStack,
        "image": image.asset->url,
        "alt": image.alt,
        content
      },
      "nextProject": *[_type == "project" && _createdAt > *[_type == "project" && slug.current == $slug][0]._createdAt] | order(_createdAt asc)[0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        tagline,
        description,
        liveUrl,
        githubUrl,
        techStack,
        "image": image.asset->url,
        "alt": image.alt,
        content
      }
    }`,
    { slug },
  );
}
