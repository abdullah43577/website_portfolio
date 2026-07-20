import Image from "next/image";
import { getArticle } from "../../../../../sanity/sanity-utils";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../../../../sanity/config/client-config";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import GradientTxt from "@/app/components/Reusables/GradientTxt";
import ShareButton from "./_components/share";

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

export default async function ArticleDetails({ params }: ParamsProps) {
  const article = await getArticle(params.slug);

  return (
    <section className="pb-20">
      <div className="container mx-auto px-5 pt-10 lg:px-20">
        {/* Back Button */}
        <Link
          href="/articles"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Articles
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* Left Column - Content */}
            <div className="flex-1">
              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <span className="h-1 w-1 rounded-full bg-gray-300" />
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{article.estimatedReadingTime} min read</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
                {article.title}
              </h1>

              {/* Share Button - New */}
              <ShareButton title={article.title} />
            </div>

            {/* Right Column - Featured Image */}
            <div className="lg:max-w-[45%]">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={article.image}
                  alt={article.alt}
                  width={600}
                  height={400}
                  className="h-[250px] w-full object-cover md:h-[300px] lg:h-[350px]"
                />
                {/* Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-12 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Content */}
        <div className="prose prose-lg prose-blue mx-auto max-w-[800px] xl:prose-xl">
          <PortableText
            value={article.content}
            components={{
              types: {
                image: ({ value }) => (
                  <div className="my-8 overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={urlFor(value.asset).url()}
                      width={800}
                      height={500}
                      alt={value.alt || "Article image"}
                      className="h-auto w-full object-cover"
                    />
                    {value.caption && (
                      <p className="mt-2 text-center text-sm text-gray-500">
                        {value.caption}
                      </p>
                    )}
                  </div>
                ),
              },
              block: {
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold md:text-4xl">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold md:text-3xl">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-bold md:text-2xl">{children}</h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-lg font-bold md:text-xl">{children}</h4>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul className="my-4 list-disc space-y-2 pl-6">{children}</ul>
                ),
                number: ({ children }) => (
                  <ol className="my-4 list-decimal space-y-2 pl-6">
                    {children}
                  </ol>
                ),
              },
              listItem: {
                bullet: ({ children }) => (
                  <li className="text-gray-700">{children}</li>
                ),
                number: ({ children }) => (
                  <li className="text-gray-700">{children}</li>
                ),
              },
            }}
          />
        </div>

        {/* Footer - Article Metadata */}
        <div className="mx-auto mt-16 max-w-[800px] border-t border-gray-200 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-gray-400">Published</p>
              <p className="font-medium text-gray-700">
                {new Date(article.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Reading Time</p>
              <p className="font-medium text-gray-700">
                {article.estimatedReadingTime} minute
                {parseInt(article.estimatedReadingTime) > 1 ? "s" : ""}
              </p>
            </div>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-6 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-200"
            >
              <ArrowLeft className="h-4 w-4" />
              All Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
