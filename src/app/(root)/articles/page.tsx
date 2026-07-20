import Image from "next/image";
import { getArticles } from "../../../../sanity/sanity-utils";
import { ArticleSkeleton } from "./articleSkeleton";
import { Metadata } from "next";
import GradientTxt from "@/app/components/Reusables/GradientTxt";
import CustomNav from "@/app/components/Reusables/CustomNav";
import { toast } from "react-toastify";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Discover insightful articles on a variety of topics, ranging from web development and programming to personal growth and industry trends. Stay informed and inspired with our latest posts.",
  openGraph: {
    description:
      "Discover insightful articles on a variety of topics, ranging from web development and programming to personal growth and industry trends. Stay informed and inspired with our latest posts.",
  },
};

export const revalidate = 3600;

export default async function Articles() {
  const articles = await getArticles();

  if (!articles)
    toast.error("Error fetching articles, please try again later!");

  return (
    <section className="py-12">
      <div className="container mx-auto px-5 lg:px-20">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <GradientTxt
            tagName="h2"
            txt="Articles & Insights"
            className="text-4xl font-bold md:text-5xl"
          />
          <p className="mt-3 text-gray-500">
            {articles.length} articles • Thoughts on development, design, and
            more
          </p>
        </div>

        {!articles.length ? (
          <ArticleSkeleton />
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Link
                key={article._id}
                href={`articles/${article.slug}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gray-100">
                    <Image
                      src={article.image}
                      alt={article.alt}
                      width={400}
                      height={300}
                      loading="lazy"
                      className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-110 md:h-[240px]"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Reading Time Badge */}
                    {article.estimatedReadingTime && (
                      <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 backdrop-blur-md">
                        <Clock className="h-3.5 w-3.5 text-white/70" />
                        <span className="text-xs font-medium text-white/90">
                          {article.estimatedReadingTime} min read
                        </span>
                      </div>
                    )}

                    {/* Date Badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                      <Calendar className="h-3.5 w-3.5 text-white/70" />
                      <span className="text-xs font-medium text-white/90">
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Date - Compact */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-gray-400">
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      {article.estimatedReadingTime && (
                        <>
                          <span className="h-1 w-1 rounded-full bg-gray-300" />
                          <span className="text-xs text-gray-400">
                            {article.estimatedReadingTime} min read
                          </span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="mt-2 line-clamp-2 text-xl font-bold leading-[1.3] text-gray-900 transition-colors duration-300 group-hover:text-gray-600">
                      {article.title}
                    </h3>

                    {/* View Article Button */}
                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                      <CustomNav
                        txt="Read Article"
                        className="flex items-center gap-2 text-sm font-medium text-gray-900 transition-all duration-300 group-hover:gap-3 group-hover:text-gray-600"
                      />
                      <ArrowUpRight className="h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
