"use client";

import GradientTxt from "@/app/components/Reusables/GradientTxt";
import Image from "next/image";
import CustomNav from "@/app/components/Reusables/CustomNav";
import { useEffect, useState } from "react";
import { ArticleProps } from "../../../../types/Articles";
import { toast } from "react-toastify";
import { getArticles } from "../../../../sanity/sanity-utils";
import { useRouter } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Articles() {
  const router = useRouter();
  const [articles, setArticles] = useState<ArticleProps[]>([]);

  useEffect(() => {
    const fetchRequest = async function () {
      try {
        const articles = await getArticles();
        setArticles(articles);
      } catch (error) {
        toast.error("Error fetching articles, please try again later!");
      }
    };
    fetchRequest();
  }, []);

  return (
    <section>
      <div className="container mx-auto grid gap-20 px-5 pt-20 lg:px-20">
        {/* max-w-[600px] */}
        {!articles.length ? (
          <ArticleSkeleton />
        ) : (
          articles.map((article) => (
            <div
              key={article._id}
              className="group relative mx-auto flex max-w-[1200px] cursor-pointer flex-col items-center justify-center xl:max-h-[500px] xl:flex-row"
              onClick={() => router.push(`articles/${article.slug}`)}
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
                  {article.title}
                </h2>
                <CustomNav
                  txt="View Article"
                  className="flex items-center gap-2 text-sm text-white md:text-lg"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

const ArticleSkeleton = function () {
  return Array.from({ length: 5 }).map((_, index) => (
    <div
      key={index}
      className="group relative flex cursor-pointer flex-col items-center justify-center xl:max-h-[500px] xl:flex-row"
    >
      <div className="w-full overflow-hidden xl:h-[430px] xl:w-auto">
        <Skeleton width={400} height={390} />
      </div>
      <div className="w-full bg-black p-10 lg:p-20 xl:h-[430px] xl:min-h-[430px] xl:w-[614px]">
        <Skeleton width={100} height={20} />
        <Skeleton width={480} height={40} style={{ margin: "16px 0" }} />
        <Skeleton width={120} height={20} />
      </div>
    </div>
  ));
};
