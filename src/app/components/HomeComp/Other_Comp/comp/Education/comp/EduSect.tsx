import Image from "next/image";
import FadeUp from "@/animations/FadeUp";

interface EduSectProps {
  type: "edu" | "work";
  name: string;
  title: string;
  date: string;
  img?: string;
  alt?: string;
}

export default function EduSect({
  type,
  name,
  title,
  date,
  img,
  alt,
}: EduSectProps) {
  return (
    <FadeUp
      tag="div"
      className="group relative flex cursor-pointer flex-col justify-between gap-4 border-b border-black pb-10 xl:flex-row xl:items-end"
    >
      <div className={`${type === "work" && "flex items-center gap-4"}`}>
        {type === "work" ? (
          <div className="size-10 min-w-10 rounded-full bg-gray-400">
            <Image
              src={img as string}
              width={40}
              height={40}
              alt={alt as string}
              className="rounded-full border border-gray-400"
            />
          </div>
        ) : (
          ""
        )}

        <div>
          <p className="mb-2 text-[19px] leading-[110%] md:text-[24px] xl:font-medium">
            {name}
          </p>
          <p className="font-medium leading-[130%] text-[#666]">{title}</p>
        </div>
      </div>

      <p className="leading-[130%] text-[#666]">.{date}</p>

      {type === "work" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-briefcase absolute right-2 top-0 transition-all duration-300 group-hover:right-0"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-book absolute right-2 top-0 transition-all duration-300 group-hover:right-0"
          viewBox="0 0 16 16"
        >
          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
        </svg>
      )}

      {/* <Image
        src={arrowRightUp}
        alt="arrow right up"
        className="absolute right-2 top-0 transition-all duration-300 group-hover:right-0"
      /> */}
    </FadeUp>
  );
}
