"use client";

import GradientTxt from "../../../Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";
import { motion } from "framer-motion";

const stack = [
  "React / Next.js",
  "React Native",
  "Node.js / Express",
  "PostgreSQL",
  "MongoDB",
  "TypeScript",
];

const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "10+", label: "Happy clients" },
];

export default function ProfileInfo() {
  return (
    <section id="about" className="mb-[80px]">
      <FadeUp
        tag="div"
        className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row"
      >
        <div>
          <GradientTxt
            txt="FULLSTACK DEVELOPER"
            className="text-[22px] font-bold tracking-[4px]"
            tagName="h5"
          />
          <h2 className="mb-4 mt-2 text-[40px] font-bold leading-[120%] tracking-[0.5px] md:text-[54px]">
            That's me!
          </h2>
        </div>
        <p className="text-[19px] leading-[40px] text-[#666] md:text-[22px] lg:max-w-[50%]">
          Over the past 4 years, I've collaborated with a diverse range of
          clients, from startups to established businesses — building end-to-end
          products across web and mobile. I bring a passion for creating
          seamless digital experiences and solving complex problems through
          code, from the database up to the interface.
        </p>
      </FadeUp>

      {/* stat row */}
      <FadeUp
        tag="div"
        className="mb-16 grid grid-cols-1 gap-10 border-y border-gray-500 py-10 sm:grid-cols-3"
      >
        {stats.map((stat, i) => (
          <div key={i} className="text-center sm:text-left">
            <GradientTxt
              tagName="span"
              txt={stat.value}
              className="block text-[48px] font-bold leading-none md:text-[64px]"
            />
            <p className="mt-2 text-[#666]">{stat.label}</p>
          </div>
        ))}
      </FadeUp>

      {/* tech stack badges */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-3"
      >
        {stack.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-full border border-[#e5e5e5] px-5 py-2 text-sm font-medium text-[#333] md:text-base"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
