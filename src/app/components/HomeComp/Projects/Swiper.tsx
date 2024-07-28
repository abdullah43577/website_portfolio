"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import GradientTxt from "../../Reusables/GradientTxt";
import CustomNav from "../../Reusables/CustomNav";
import type { Project } from "../../../../../types/Project";
import { useRouter } from "next/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function AnimatedSlide({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNavigation = function (slug: string) {
    router.push(`/projects/${slug}`);
  };

  return (
    <>
      <div className="absolute mt-[100px] w-full cursor-pointer xl:right-0">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },

            600: {
              slidesPerView: 2,
            },

            900: {
              slidesPerView: 3,
            },

            1200: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project._id}
              className="group md:min-w-[400px]"
              onClick={() => handleNavigation(project.slug)}
            >
              <div className="w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={400}
                  height={350}
                  priority
                  className="w-full transition-transform duration-300 group-hover:scale-[1.1] md:max-h-[273px]"
                />
              </div>
              <div className="bg-white p-10">
                <GradientTxt
                  txt={project.title}
                  className="text-[14px] font-bold tracking-[4px]"
                  tagName="h5"
                />
                <h4 className="my-6 truncate text-[19px] font-bold leading-[110%] transition-opacity duration-300 group-hover:opacity-50">
                  {project.tagline}
                </h4>
                <CustomNav
                  txt="View Project"
                  className="flex items-center gap-2 text-[14px] transition-opacity duration-300 group-hover:opacity-50"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute -bottom-[250px] right-5 ml-auto mt-4 flex items-center gap-4 lg:-bottom-[300px] lg:right-40">
        <div
          className="flex size-[60px] cursor-pointer items-center justify-center bg-white"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </div>

        <div
          className="flex size-[60px] cursor-pointer items-center justify-center bg-white"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
