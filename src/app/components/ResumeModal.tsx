"use client";

import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const PdfViewer = dynamic(() => import("./PDFViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center text-gray-400">
      Loading resume…
    </div>
  ),
});

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
  fileName?: string;
}

export default function ResumeModal({
  isOpen,
  onClose,
  resumeUrl,
  fileName = "Abdullah_Resume.pdf",
}: ResumeModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
              <h2 className="text-lg font-bold">Resume Preview</h2>
              <div className="flex items-center gap-3">
                <a
                  href={resumeUrl}
                  download={fileName}
                  className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-80"
                >
                  Download
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close preview"
                  className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.146a.5.5 0 0 1 .708 0L8 7.293l5.146-5.147a.5.5 0 1 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854a.5.5 0 0 1 0-.708" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-hidden bg-gray-100">
              <PdfViewer fileUrl={resumeUrl} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
