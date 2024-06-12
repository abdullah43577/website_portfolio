import ArticleClient from "./client/ArticleClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Discover insightful articles on a variety of topics, ranging from web development and programming to personal growth and industry trends. Stay informed and inspired with our latest posts.",
  openGraph: {
    description:
      "Discover insightful articles on a variety of topics, ranging from web development and programming to personal growth and industry trends. Stay informed and inspired with our latest posts.",
  },
};

export default function Articles() {
  return <ArticleClient />;
}
