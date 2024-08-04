import Image from "next/image";
import { getArticles } from "../../../../sanity/sanity-utils";
import { ArticleSkeleton } from "./articleSkeleton";
import { Metadata } from "next";
import GradientTxt from "@/app/components/Reusables/GradientTxt";
import CustomNav from "@/app/components/Reusables/CustomNav";
import { toast } from "react-toastify";
import Link from "next/link";

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
    <section>
      <div className="container mx-auto grid gap-20 px-5 pt-20 lg:px-20">
        {/* max-w-[600px] */}
        {!articles.length ? (
          <ArticleSkeleton />
        ) : (
          articles.map((article) => (
            <Link key={article._id} href={`articles/${article.slug}`}>
              <div
                className="group relative mx-auto flex max-w-[1200px] cursor-pointer flex-col items-center justify-center xl:max-h-[500px] xl:flex-row"
                // onClick={() => router.push(`articles/${article.slug}`)}
              >
                <div className="w-full overflow-hidden xl:h-[430px] xl:w-auto">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    width={400}
                    height={390}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.1] xl:h-full xl:w-auto"
                  />
                </div>

                <div className="w-full bg-black p-10 lg:p-20 xl:h-[430px] xl:min-h-[430px] xl:w-[614px]">
                  <GradientTxt
                    tagName="h6"
                    txt={article.date}
                    className="text-[13px] font-bold tracking-[4px] md:text-sm"
                  />
                  <h2 className="my-2 max-w-[480px] text-[26px] font-bold leading-[120%] text-white md:my-8 md:text-[40px]">
                    {article.title.length > 50
                      ? article.title.slice(0, 50) + "..."
                      : article.title}
                  </h2>
                  <CustomNav
                    txt="View Article"
                    className="flex items-center gap-2 text-sm text-white md:text-lg"
                  />
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
