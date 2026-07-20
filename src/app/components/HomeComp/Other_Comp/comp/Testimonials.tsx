"use client";

import quoteImg from "../../../../../../public/quote.svg";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GradientTxt from "../../../Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";
import type { Testimonials } from "../../../../../../types/Testimonials";
import { getTestimonials } from "../../../../../../sanity/sanity-utils";
import { toast } from "react-toastify";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);

  useEffect(() => {
    const fetchData = async function () {
      try {
        const testimonials = await getTestimonials();
        setTestimonials(testimonials);
      } catch (error) {
        toast.error("Failed to fetch testimonials. Please try again later.");
      }
    };
    fetchData();
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section className="mt-[102px]">
      <FadeUp tag="div">
        <GradientTxt
          tagName="h4"
          txt="TESTIMONIALS"
          className="mb-4 text-[22px] font-bold tracking-[4px]"
        />
        <p className="text-[36px] font-bold leading-[110%] tracking-[0.5px] md:text-[50px] xl:text-[54px]">
          Word on the street
        </p>
      </FadeUp>

      {/* animation container */}
      <div className="relative mt-10 flex max-w-full flex-col items-center justify-center xl:h-[400px] xl:flex-row">
        {testimonials.length > 0 && (
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={current}
              className="flex flex-col items-end xl:flex-row xl:gap-[100px]"
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].alt}
                className="h-[400px] w-full object-cover xl:w-auto"
                width={485}
                height={490}
                priority
              />

              <div className="mt-10 xl:mt-0 xl:w-1/2">
                <Image src={quoteImg} alt="quote svg" priority />

                <div className="mt-4">
                  <h3
                    className={`text-[27px] font-bold leading-[130%] ${testimonials[current].message.split(" ").length <= 28 ? "md:text-[36px]" : "md:text-[30px]"}`}
                  >
                    {testimonials[current].message}
                  </h3>
                  <div className="mt-10">
                    <p className="text-[19px] font-bold md:text-[20px]">
                      {testimonials[current].name}
                    </p>
                    <p className="max-w-[200px] text-sm sm:max-w-full md:text-lg">
                      {testimonials[current].about}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {testimonials.length > 0 && (
          <div className="absolute bottom-0 right-0 ml-auto mt-4 flex h-[60px] items-center gap-3 bg-black px-4">
            <span className="text-xs font-medium tabular-nums text-[#8a95ad]">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              aria-label="Previous testimonial"
              className="flex h-full cursor-pointer items-center justify-center"
              onClick={handlePrev}
            >
              <ChevronLeft
                size={16}
                className="text-white"
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              className="flex h-full cursor-pointer items-center justify-center"
              onClick={handleNext}
            >
              <ChevronRight
                size={16}
                className="text-white"
                aria-hidden="true"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
