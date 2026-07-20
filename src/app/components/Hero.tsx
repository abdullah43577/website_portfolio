"use client";

import { useState } from "react";
import CustomBtn from "./Reusables/CustomBtn";
import GradientTxt from "./Reusables/GradientTxt";
import ResumeModal from "./ResumeModal";
import profImg from "../../../public/img2.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import resume from "../../../public/Abdullah Ayoola CV.pdf";

export default function Hero() {
  const MotionImage = motion(Image);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section className="my-[80px] items-center gap-16 xl:flex">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4 text-2xl font-bold md:text-4xl lg:text-6xl">
          <GradientTxt tagName="span" txt="I develop Fullstack" /> solutions
          that delight and inspire users.
        </h1>

        <p className="mb-16 text-sm text-[#666] lg:text-xl">
          Hi! I'm Abdullah, a Fullstack Developer Experienced in building
          responsive, user-centric applications with clean, maintainable code —
          from architecting APIs and database schemas to crafting polished
          interfaces — while bringing product concepts into reality.
        </p>

        <div className="mb-16 flex flex-col gap-4 md:flex-row xl:items-center">
          <CustomBtn txt="Book a call" className="w-[150px]" href="/contact" />

          <button
            onClick={() => setIsResumeOpen(true)}
            className="group flex cursor-pointer items-center gap-2 text-lg font-bold"
          >
            <span>View CV</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right transition-transform duration-500 group-hover:translate-x-3"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </button>
        </div>
      </motion.div>

      <MotionImage
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        src={profImg}
        alt="profile image"
        className="mx-auto w-full rounded-full lg:w-[500px]"
        priority
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl={resume}
        fileName="Abdullah_Resume.pdf"
      />
    </section>
  );
}
