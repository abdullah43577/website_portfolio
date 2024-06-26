"use client";

import quoteImg from "../../../../../../public/quote.svg";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import GradientTxt from "../../../Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";
import type { Testimonials } from "../../../../../../types/Testimonials";
import { getTestimonials } from "../../../../../../sanity/sanity-utils";
import { toast } from "react-toastify";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
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
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
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
        {testimonials.length && (
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={current}
              className="flex flex-col items-end xl:flex-row xl:gap-[100px]"
              custom={current}
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
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
                    className={`text-[27px] font-bold leading-[130%] ${testimonials[current].message.split(" ").length <= 28 ? "md:text-[36px]" : "md:[30px]"}`}
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

        <div className="absolute bottom-0 right-0 ml-auto mt-4 flex h-[60px] w-[80px] items-center justify-between bg-black p-2">
          <div
            className="flex h-full w-1/2 cursor-pointer items-center justify-start"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
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
            className="flex h-full w-1/2 cursor-pointer items-center justify-end"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
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
      </div>
    </section>
  );
}
