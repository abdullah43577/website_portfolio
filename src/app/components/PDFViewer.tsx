"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  fileUrl: string;
}

export default function PdfViewer({ fileUrl }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  return (
    <div
      className="mx-auto h-full max-w-2xl overflow-y-auto px-4 py-6"
      ref={(node) => {
        if (node) setContainerWidth(node.clientWidth - 32);
      }}
    >
      <Document
        file={fileUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={
          <div className="flex h-[70vh] items-center justify-center text-gray-400">
            Loading resume…
          </div>
        }
        error={
          <div className="flex h-[70vh] items-center justify-center text-red-400">
            Failed to load resume.
          </div>
        }
        className="flex flex-col items-center gap-6"
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page
            key={i}
            pageNumber={i + 1}
            width={containerWidth}
            className="overflow-hidden rounded-lg shadow-md"
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        ))}
      </Document>
    </div>
  );
}
