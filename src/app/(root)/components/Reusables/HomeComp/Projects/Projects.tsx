"use client";

import CustomBtn from "../../CustomBtn";
import GradientTxt from "../../GradientTxt";
import AnimatedSlide from "./Swiper";

export default function Projects() {
  return (
    <section className="mb-[500px]">
      <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
        <div>
          <GradientTxt
            tagName="h6"
            txt="PROJECTS"
            className="mb-4 text-center text-[22px] font-bold"
          />
          <h2 className="mx-auto mb-10 max-w-[600px] text-[36px] font-bold leading-[120%] tracking-[0.5px] lg:text-[54px]">
            I bring results my clients are proud of.
          </h2>
        </div>

        <CustomBtn txt="View all projects" className="w-[200px]" />

        {/* swiper component */}
        <AnimatedSlide />
      </div>
    </section>
  );
}
