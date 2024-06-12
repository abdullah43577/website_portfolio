import { getArticle } from "../../../../../sanity/sanity-utils";
import ClientSlug from "./clientSlug";
import { Metadata } from "next";

export interface ParamsProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  const article = await getArticle(params.slug);

  return {
    title: article.title,
    description:
      "Discover insightful articles on a variety of topics, ranging from web development and programming to personal growth and industry trends. Stay informed and inspired with our latest posts.",
    openGraph: {
      title: article.title,
      description:
        "Discover insightful articles on a variety of topics, ranging from web development and programming to personal growth and industry trends. Stay informed and inspired with our latest posts.",
      images: [article.image],
    },
  };
}

export default function ArticleDetails({ params }: ParamsProps) {
  return <ClientSlug params={params} />;
}
