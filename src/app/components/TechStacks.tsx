"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getTechStacks } from "../../../sanity/sanity-utils";
import { toast } from "react-toastify";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiFirebase,
  SiVercel,
  SiSanity,
  SiFramer,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

// Map technology names to icons
const techIconMap: { [key: string]: any } = {
  react: SiReact,
  "next.js": SiNextdotjs,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  node: SiNodedotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  graphql: SiGraphql,
  docker: SiDocker,
  aws: FaAws,
  firebase: SiFirebase,
  vercel: SiVercel,
  sanity: SiSanity,
  framer: SiFramer,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
};

// Get icon or fallback
const getIcon = (tech: string) => {
  const key = tech.toLowerCase().trim();
  return techIconMap[key] || FaCode;
};

// Get color for technology
const getTechColor = (tech: string) => {
  const colors: { [key: string]: string } = {
    react: "from-cyan-400 to-blue-500",
    "next.js": "from-gray-700 to-black",
    nextjs: "from-gray-700 to-black",
    typescript: "from-blue-500 to-indigo-500",
    javascript: "from-yellow-400 to-orange-500",
    tailwind: "from-cyan-400 to-blue-500",
    tailwindcss: "from-cyan-400 to-blue-500",
    node: "from-green-400 to-emerald-500",
    nodejs: "from-green-400 to-emerald-500",
    express: "from-gray-600 to-gray-800",
    mongodb: "from-green-500 to-teal-500",
    postgresql: "from-blue-400 to-sky-500",
    graphql: "from-pink-400 to-rose-500",
    docker: "from-blue-400 to-cyan-500",
    aws: "from-orange-400 to-yellow-500",
    firebase: "from-yellow-400 to-orange-500",
    vercel: "from-gray-700 to-black",
    sanity: "from-red-400 to-pink-500",
    framer: "from-purple-400 to-indigo-500",
    git: "from-red-400 to-orange-500",
    github: "from-gray-600 to-gray-800",
    vscode: "from-blue-400 to-indigo-500",
  };
  return colors[tech.toLowerCase().trim()] || "from-gray-400 to-gray-600";
};

const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
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
        toast.error("Failed to fetch techstacks. Please try again later.");
      }
    };
    getStacks();
  }, []);

  if (techStacks.length === 0) {
    return null;
  }

  // Duplicate the array for seamless looping
  const allTechs = [...techStacks, ...techStacks, ...techStacks];

  return (
    <section className="py-16">
      <div className="container mx-auto px-5 lg:px-20">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-sm font-medium uppercase tracking-[4px] text-gray-400">
            Technologies I Work With
          </h2>
          <p className="mt-2 text-3xl font-bold md:text-4xl">My Tech Stack</p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-50/50 py-8 backdrop-blur-sm">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-gray-50/90 to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-gray-50/90 to-transparent" />

          <motion.div
            className="flex gap-6"
            variants={marqueeVariants}
            animate="animate"
          >
            {allTechs.map((tech, index) => {
              const Icon = getIcon(tech);
              const colorClass = getTechColor(tech);

              return (
                <motion.div
                  key={`${tech}-${index}`}
                  className="flex flex-shrink-0 items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                  whileHover={{ y: -2 }}
                >
                  <div
                    className={`rounded-full bg-gradient-to-r p-2 ${colorClass}`}
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="dancingScript whitespace-nowrap text-sm font-medium text-gray-700">
                    {tech}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
