import { MetadataRoute } from "next";
import { getArticles, getProjects } from "../../sanity/sanity-utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles();
  const projects = await getProjects();

  // static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: process.env.NEXT_PUBLIC_LIVE_URL as string,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${process.env.NEXT_PUBLIC_LIVE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${process.env.NEXT_PUBLIC_LIVE_URL}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },

    {
      url: `${process.env.NEXT_PUBLIC_LIVE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  // dynamic project pages
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${process.env.NEXT_PUBLIC_LIVE_URL}/projects/${project.slug}`,
    lastModified: new Date(project._createdAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // dynamic article pages
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${process.env.NEXT_PUBLIC_LIVE_URL}/articles/${article.slug}`,
    lastModified: new Date(article._createdAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...articlePages];
}
