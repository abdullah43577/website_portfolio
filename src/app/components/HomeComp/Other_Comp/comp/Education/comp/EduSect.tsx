import Image from "next/image";
import FadeUp from "@/animations/FadeUp";
import { Briefcase, BookOpen } from "lucide-react";

interface EduSectProps {
  type: "edu" | "work";
  name: string;
  title: string;
  date: string;
  img?: string;
  alt?: string;
  isCurrent?: boolean;
}

export default function EduSect({
  type,
  name,
  title,
  date,
  img,
  alt,
  isCurrent,
}: EduSectProps) {
  return (
    <FadeUp
      tag="div"
      className="group relative flex cursor-pointer flex-col justify-between gap-4 border-b border-black pb-10 xl:flex-row xl:items-end"
    >
      {/* timeline marker, sits on the parent column's border-l line */}
      <span className="absolute -left-[46px] top-2 size-3 rounded-full border-2 border-white bg-black" />

      <div className={`${type === "work" && "flex items-center gap-4"}`}>
        {type === "work" ? (
          <div className="relative flex size-14 min-w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-300 p-2.5">
            {img ? (
              <Image
                src={img}
                alt={alt as string}
                fill
                className="object-contain"
              />
            ) : (
              <Briefcase
                size={22}
                className="text-gray-500"
                aria-hidden="true"
              />
            )}
          </div>
        ) : (
          ""
        )}

        <div>
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <p className="text-[19px] leading-[110%] md:text-[24px] xl:font-medium">
              {name}
            </p>
            {isCurrent && (
              <span className="rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 px-3 py-1 text-[11px] font-bold uppercase tracking-[1px] text-white">
                Current
              </span>
            )}
          </div>
          <p className="font-medium leading-[130%] text-[#666]">{title}</p>
        </div>
      </div>

      <p className="leading-[130%] text-[#666]">.{date}</p>

      {type === "work" ? (
        <Briefcase
          size={16}
          className="absolute right-2 top-0 transition-all duration-300 group-hover:right-0"
          aria-hidden="true"
        />
      ) : (
        <BookOpen
          size={16}
          className="absolute right-2 top-0 transition-all duration-300 group-hover:right-0"
          aria-hidden="true"
        />
      )}
    </FadeUp>
  );
}
