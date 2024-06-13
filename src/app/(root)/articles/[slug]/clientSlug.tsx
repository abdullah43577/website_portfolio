"use client";

import { ParamsProps } from "./page";
import { useEffect, useState } from "react";
import { ArticleProps } from "../../../../../types/Articles";
import { toast } from "react-toastify";
import { getArticle } from "../../../../../sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../../../../sanity/config/client-config";

export default function ClientSlug({ params }: ParamsProps) {
  const [article, setArticle] = useState<ArticleProps>({} as ArticleProps);

  useEffect(() => {
    const fetchRequest = async function () {
      try {
        const article = await getArticle(params.slug);
        setArticle(article);
      } catch (error) {
        toast.error("Error fetching article, please try again later!");
      }
    };
    fetchRequest();
  }, [params.slug]);

  return (
    <section>
      <div className="container mx-auto px-5 pt-20 lg:px-20">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col-reverse gap-4 xl:flex-col">
            <p className="text-sm">
              {article.date} . {article.estimatedReadingTime} min(s)
            </p>
            <h2 className="max-w-[550px] text-[44px] font-bold leading-[110%] md:text-[56px]">
              {article.title}
            </h2>
          </div>

          <Image
            src={article.image}
            alt={article.alt}
            width={400}
            height={400}
            className="w-full max-w-full xl:w-auto"
          />
        </div>

        <div className="prose prose-lg prose-blue max-w-[800px] pt-[100px] xl:prose-xl lg:pt-[160px]">
          <PortableText
            value={article.content}
            components={{
              types: {
                image: ({ value }) => (
                  <Image
                    src={urlFor(value.asset).url()}
                    width={500}
                    height={500}
                    alt={value.alt}
                    style={{ maxWidth: "100%" }}
                  />
                ),
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}
