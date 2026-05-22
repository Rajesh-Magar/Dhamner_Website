import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import worker from "pdfjs-dist/build/pdf.worker?url";
import { useLang } from "../../context/LanguageContext";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = worker;

const content = {
  mr: { title: "📘 यशोगाथा", page: "पृष्ठ", of: "पैकी" },
  en: { title: "📘 Village Success Story (Yashogatha)", page: "Page", of: "of" },
};

const Yashogatha = () => {
  const { lang } = useLang();
  const c = content[lang];
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center py-6 px-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">{c.title}</h1>
      <div className="bg-white rounded-2xl shadow-2xl p-2 sm:p-4 w-full max-w-5xl flex justify-center">
        <Document file="/Pdfs/yashogatha.pdf" onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
          <Page
            pageNumber={pageNumber}
            width={window.innerWidth < 640 ? 300 : window.innerWidth < 1024 ? 500 : 700}
          />
        </Document>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        <button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber <= 1}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow disabled:bg-gray-400 transition"
        >
          ⬅ Prev
        </button>
        <div className="px-4 py-2 bg-white rounded-lg shadow text-sm font-semibold">
          {c.page} {pageNumber} {c.of} {numPages}
        </div>
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber >= numPages}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow disabled:bg-gray-400 transition"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Yashogatha;