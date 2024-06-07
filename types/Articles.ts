import { PortableTextBlock } from "next-sanity";

export interface ArticleProps {
  _id: string;
  _createdAt: string;
  slug: string;
  date: string;
  title: string;
  image: string;
  alt: string;
  content: PortableTextBlock[];
  estimatedReadingTime: string;
}
