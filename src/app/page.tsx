"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/HomeComp/Services";
import OtherComponents from "./components/HomeComp/Other_Comp/OtherComponents";
import Blogs from "./components/HomeComp/Blogs";
import Footer from "./components/Footer/Footer";
import GradientTxt from "./components/Reusables/GradientTxt";
import Projects from "./components/HomeComp/Projects/Projects";
import AnimatedSlide from "./components/HomeComp/Projects/Swiper";
import { getProjects } from "../../sanity/sanity-utils";
import { Project } from "../../types/Project";
import TechStacks from "./components/TechStacks";

const Preloader = function () {
  return (
    <section className="fixed left-0 top-0 inline-flex h-full w-full items-center justify-center bg-[#f3f3f3]">
      <motion.div
        initial={{ y: 100, opacity: 0, rotate: 10 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: -100, opacity: 0, transition: { duration: 0.5 } }}
        transition={{
          type: "spring",
          stiffness: 300,
          duration: 0.5,
        }}
      >
        <GradientTxt
          tagName="h2"
          txt="<ReactMode />"
          className="text-[22px] font-bold md:text-[36px] xl:text-[54px]"
        />
      </motion.div>
    </section>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);

    //? fetch projects
    const fetch = async function () {
      try {
        const projects = await getProjects();
        setProjects(projects);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader key="preloader" />
      ) : (
        <>
          <Header key="header" />
          <main key="main">
            <div className="container mx-auto px-5 pt-5 lg:px-20">
              <Hero />
              <TechStacks />
              <Services />
              <Projects />
            </div>
            <div className="relative h-[400px]">
              <AnimatedSlide projects={projects} />
            </div>
            <Blogs />
            <OtherComponents />
          </main>
          <Footer key="footer" />
        </>
      )}
    </AnimatePresence>
  );
}
