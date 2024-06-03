"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/animations/FadeUp";
import type { FAQ } from "../../../../../types/FAQ";
import { getFAQ } from "../../../../../sanity/sanity-utils";

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    const fetchData = async function () {
      try {
        const faqs = await getFAQ();
        setFaqs(faqs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const toggleActive = (id: string) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="grid gap-10 lg:grid-cols-2">
      {faqs.map((faq) => (
        <FadeUp key={faq._id} tag="div" className="border-b border-[#666] pb-5">
          <div
            className="flex cursor-pointer items-center justify-between pb-5"
            onClick={() => toggleActive(faq._id)}
          >
            <p className="text-xl text-white md:text-2xl">{faq.question}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className={`bi bi-chevron-down transition-transform duration-300 ${activeId === faq._id ? "rotate-180" : ""}`}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>

          <AnimatePresence initial={false}>
            {activeId === faq._id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <p className="text-[17px] text-[#666] md:text-[18px]">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </FadeUp>
      ))}
    </section>
  );
}
