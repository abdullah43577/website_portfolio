"use client";

import { useEffect, useState } from "react";
import EduSect from "./comp/EduSect";
import FadeUp from "@/animations/FadeUp";
import { Briefcase, BookOpen } from "lucide-react";
import { Education, Work } from "../../../../../../../types/Experience";
import { getExperiences } from "../../../../../../../sanity/sanity-utils";
import { toast } from "react-toastify";
import GradientTxt from "@/app/components/Reusables/GradientTxt";

function ColumnHeading({ icon, txt }: { icon: React.ReactNode; txt: string }) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="flex size-9 items-center justify-center rounded-full bg-black text-white">
        {icon}
      </span>
      <h3 className="text-[24px] font-bold md:text-[30px]">{txt}</h3>
    </div>
  );
}

export default function EducationSect() {
  const [education, setEducation] = useState<Education[]>([]);
  const [work, setWork] = useState<Work[]>([]);

  useEffect(() => {
    const getProperties = async function () {
      try {
        const { education, work } = await getExperiences();
        setEducation(education);
        setWork(work);
      } catch (error) {
        toast.error("Error fetching experiences, Please try again later!");
      }
    };

    getProperties();
  }, []);

  return (
    <section id="experience" className="mt-[120px]">
      <FadeUp tag="div" className="mb-16 text-center">
        <GradientTxt
          tagName="h6"
          txt="EXPERIENCE"
          className="mb-4 text-[22px] font-bold tracking-[4px]"
        />
        <h2 className="mx-auto max-w-[700px] text-[36px] font-bold leading-[120%] tracking-[0.5px] lg:text-[54px]">
          Where I've spent my time
        </h2>
      </FadeUp>

      <div className="flex flex-col justify-between gap-16 xl:flex-row xl:gap-10">
        <div className="xl:w-1/2">
          <ColumnHeading
            icon={<BookOpen size={18} aria-hidden="true" />}
            txt="Education"
          />

          <div className="relative flex flex-col gap-10 border-l border-gray-200 pl-10">
            {education.map((edu) => (
              <EduSect
                key={edu._id}
                type={edu.type}
                name={edu.title}
                title={edu.description}
                date={edu.year}
                isCurrent={edu.isCurrent}
              />
            ))}
          </div>
        </div>

        <div className="xl:w-1/2">
          <ColumnHeading
            icon={<Briefcase size={18} aria-hidden="true" />}
            txt="Work Experience"
          />

          <div className="relative flex flex-col gap-10 border-l border-gray-200 pl-10">
            {work.map((work) => (
              <EduSect
                key={work._id}
                type={work.type}
                name={work.title}
                title={work.description}
                date={work.year}
                img={work.icon}
                alt={work.alt}
                isCurrent={work.isCurrent}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
