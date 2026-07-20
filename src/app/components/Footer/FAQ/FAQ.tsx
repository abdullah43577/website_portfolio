"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FadeUp from "@/animations/FadeUp";
import type { FAQ as FAQType } from "../../../../../types/FAQ";
import { getFAQ } from "../../../../../sanity/sanity-utils";
import { toast } from "react-toastify";

interface FAQItemProps {
  faq: FAQType;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  const panelId = `faq-panel-${faq._id}`;

  return (
    <FadeUp tag="div" className="border-b border-[#666] pb-5">
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between pb-5 text-left"
        onClick={() => onToggle(faq._id)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="text-xl text-white md:text-2xl">{faq.question}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-[17px] text-[#666] md:text-[18px]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </FadeUp>
  );
}

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [faqs, setFaqs] = useState<FAQType[]>([]);

  useEffect(() => {
    const fetchData = async function () {
      try {
        const faqs = await getFAQ();
        setFaqs(faqs);
      } catch (error) {
        toast.error("Failed to fetch FAQs. Please try again later.");
      }
    };
    fetchData();
  }, []);

  const toggleActive = (id: string) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="flex flex-col justify-between gap-10 xl:flex-row">
      <div className="flex min-w-[50%] flex-col gap-10">
        {faqs.slice(0, 4).map((faq) => (
          <FAQItem
            key={faq._id}
            faq={faq}
            isOpen={activeId === faq._id}
            onToggle={toggleActive}
          />
        ))}
      </div>

      <div className="flex min-w-[50%] flex-col gap-10">
        {faqs.slice(4, 8).map((faq) => (
          <FAQItem
            key={faq._id}
            faq={faq}
            isOpen={activeId === faq._id}
            onToggle={toggleActive}
          />
        ))}
      </div>
    </section>
  );
}
