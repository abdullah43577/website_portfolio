import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";
import { clientConfig } from "./config/client-config";
import type { Services } from "../types/Services";
import type { Education, Work } from "../types/Experience";
import type { FAQ } from "../types/FAQ";
import type { Testimonials } from "../types/Testimonials";
import { ArticleProps } from "../types/Articles";
import { PictureProps } from "../types/Pictures";

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

export async function getServices(): Promise<Services[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'service'] | order(_createdAt asc){
    _id,
    _createdAt,
    title,
    description,
    "icon": icon.asset->url,
    "alt": icon.alt,
    lists
    }`,
  );
}

export async function getExperiences(): Promise<{
  education: Education[];
  work: Work[];
}> {
  return createClient(clientConfig).fetch(
    groq`{
  "education": *[_type == "experience" && type == "edu"] | order(_createdAt asc) {
    _id,
    _createdAt,
    title,
    description,
    year,
    type
  },
  "work": *[_type == "experience" && type == "work"] | order(_createdAt asc) {
    _id,
    _createdAt,
    title,
    description,
    "icon": icon.asset->url,
    "alt": icon.alt,
    year,
    type
  }
}
`,
  );
}

export async function getFAQ(): Promise<FAQ[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'faq'] | order( _createdAt asc) {
      _id,
      _createdAt,
      question,
      answer,
      }`,
  );
}

export async function getTestimonials(): Promise<Testimonials[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'testimonials'] | order( _createdAt asc) {
        _id,
        _createdAt,
        name,
        about,
        message,
        "image": image.asset->url,
        "alt": image.alt,
      }`,
  );
}

export async function getTechStacks(): Promise<string[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'technologies'][0].technology`,
  );
}

export async function getArticles(): Promise<ArticleProps[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'article'] | order(date desc){
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    date,
    "image": image.asset->url,
    "alt": image.alt,
    content,
    "estimatedReadingTime": round(length(pt::text(content)) / 5 / 225 )
    }`,
  );
}
