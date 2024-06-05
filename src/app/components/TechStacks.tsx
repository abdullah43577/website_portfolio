"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getTechStacks } from "../../../sanity/sanity-utils";

const marqueeVariants = {
  animate: {
    x: ["100%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

export default function TechStacks() {
  const [techStacks, setTechStacks] = useState<string[]>([]);

  useEffect(() => {
    const getStacks = async function () {
      try {
        const stacks = await getTechStacks();
        setTechStacks(stacks);
      } catch (error) {
        console.log(error);
      }
    };
    getStacks();
  }, []);

  return (
    <section className="mb-[108px]">
      <h2 className="text-center text-sm md:text-lg">Technologies used</h2>
      <div className="relative mt-10 overflow-hidden">
        <div className="glassmorphism absolute -left-2 z-10 h-full w-[80px]" />
        <div className="glassmorphism absolute -right-2 z-10 h-full w-[80px]" />
        <motion.div
          className="flex justify-center gap-6 whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {techStacks.map((tech, index) => (
            <span
              key={index}
              className="dancingScript mx-4 text-xl font-bold tracking-[4px] text-gray-600 md:text-2xl"
            >
              {tech}
            </span>
          ))}
          {techStacks.map((tech, index) => (
            <span
              key={`duplicate-${index}`}
              className="dancingScript mx-4 text-xl font-bold tracking-[4px] text-gray-600 md:text-2xl"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
