"use client";

import { useEffect, useState } from "react";
import EduSect from "./comp/EduSect";
import { Education, Work } from "../../../../../../../types/Experience";
import { getExperiences } from "../../../../../../../sanity/sanity-utils";

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
        console.log(error);
      }
    };

    getProperties();
  }, []);
  return (
    <section className="mt-[120px] flex flex-col justify-between gap-16 xl:flex-row xl:gap-10">
      <div className="xl:w-1/2">
        <div className="mb-10 text-[27px] font-bold md:text-[36px]">
          📚 Education
        </div>

        <div className="flex flex-col gap-10">
          {education.map((edu) => (
            <EduSect
              key={edu._id}
              type={edu.type}
              name={edu.title}
              title={edu.description}
              date={edu.year}
            />
          ))}
        </div>
      </div>

      <div className="xl:w-1/2">
        <div className="mb-10 text-[27px] font-bold md:text-[36px]">
          💼  Work Experience
        </div>

        <div className="flex flex-col gap-10">
          {work.map((work) => (
            <EduSect
              key={work._id}
              type={work.type}
              name={work.title}
              title={work.description}
              date={work.year}
              img={work.icon}
              alt={work.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
