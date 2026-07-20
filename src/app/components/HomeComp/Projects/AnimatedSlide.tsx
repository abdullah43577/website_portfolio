"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import GradientTxt from "../../Reusables/GradientTxt";
import CustomNav from "../../Reusables/CustomNav";
import type { Project } from "../../../../../types/Project";
import { useRouter } from "next/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { getProjects } from "../../../../../sanity/sanity-utils";
import { toast } from "react-toastify";

export default function AnimatedSlide() {
  const router = useRouter();
  const swiperRef = useRef<SwiperType | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetch = async function () {
      try {
        const projects = await getProjects();
        setProjects(projects);
      } catch (error) {
        toast.error("Failed to fetch projects. Please try again later.");
      }
    };

    fetch();
  }, []);

  const handleNavigation = function (slug: string) {
    router.push(`/projects/${slug}`);
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4">
      {/* Header Section */}
      <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <GradientTxt
            txt="Featured Projects"
            className="text-4xl font-bold"
            tagName="h2"
          />
          <p className="mt-2 text-sm text-gray-500">
            {projects.length} projects • Hover to preview
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous project"
            className="flex size-[50px] cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/10 text-gray-700 backdrop-blur-sm transition-all hover:scale-105 hover:border-black hover:bg-black hover:text-white"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label="Next project"
            className="flex size-[50px] cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/10 text-gray-700 backdrop-blur-sm transition-all hover:scale-105 hover:border-black hover:bg-black hover:text-white"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Swiper Container */}
      <div className="w-full cursor-pointer">
        <Swiper
          key={projects.length}
          modules={[Autoplay, Navigation]}
          loop={projects.length > 4}
          slidesPerView="auto"
          spaceBetween={20}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {projects.length > 1 &&
            projects.map((project) => (
              <SwiperSlide
                key={project._id}
                className="group !w-[300px] sm:!w-[350px] lg:!w-[400px]"
                onClick={() => handleNavigation(project.slug)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={400}
                      height={300}
                      priority
                      className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Tech Stack Tags - New */}
                    <div className="absolute right-4 top-4 flex max-w-[70%] flex-wrap justify-end gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/20 bg-black/70 px-2.5 py-1 text-[10px] font-medium text-white shadow-lg backdrop-blur-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="rounded-full border border-white/20 bg-black/70 px-2.5 py-1 text-[10px] font-medium text-white shadow-lg backdrop-blur-md">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Date Badge - New */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                      <Calendar className="h-3.5 w-3.5 text-white/70" />
                      <span className="text-xs font-medium text-white/80">
                        {new Date(project._createdAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </span>
                    </div>

                    {/* Quick Action Buttons - New */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="rounded-full border border-white/20 bg-black/70 p-2 backdrop-blur-md transition-all hover:scale-110 hover:bg-black"
                          aria-label="View GitHub repository"
                        >
                          <FaGithub className="h-4 w-4 text-white" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="rounded-full border border-white/20 bg-black/70 p-2 backdrop-blur-md transition-all hover:scale-110 hover:bg-black"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="h-4 w-4 text-white" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white p-6">
                    <GradientTxt
                      txt={project.title}
                      className="text-[13px] font-bold uppercase tracking-[3px]"
                      tagName="h5"
                    />

                    <h4 className="mt-3 line-clamp-2 text-[18px] font-bold leading-[1.3] text-gray-900 transition-colors duration-300 group-hover:text-gray-600">
                      {project.tagline}
                    </h4>

                    {/* Description - New */}
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-600">
                      {project.description}
                    </p>

                    {/* Tech Stack Preview - New */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-400">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                      <CustomNav
                        txt="View Project"
                        className="flex items-center gap-2 text-[13px] font-medium text-gray-900 transition-all duration-300 group-hover:gap-3 group-hover:text-gray-600"
                      />
                      <ArrowUpRight className="h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Pagination Dots - New */}
      {/* {projects.length > 0 && (
        <div className="mt-10 flex items-center justify-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const targetIndex = index;
                const currentIndex = swiperRef.current?.realIndex || 0;
                if (targetIndex > currentIndex) {
                  swiperRef.current?.slideTo(targetIndex);
                } else if (targetIndex < currentIndex) {
                  swiperRef.current?.slideTo(targetIndex);
                }
              }}
              className="h-1.5 rounded-full bg-gray-300 transition-all duration-300 hover:bg-gray-600"
              style={{
                width:
                  index === (swiperRef.current?.realIndex || 0)
                    ? "24px"
                    : "6px",
                opacity:
                  index === (swiperRef.current?.realIndex || 0) ? 1 : 0.5,
              }}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      )} */}
    </div>
  );
}
