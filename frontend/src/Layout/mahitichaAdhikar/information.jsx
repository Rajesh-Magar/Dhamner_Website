import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import worker from "pdfjs-dist/build/pdf.worker?url";
import { useLang } from "../../context/LanguageContext";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = worker;

const content = {
  mr: {
    titles: [
      "RTI4(1) ख 1ते 17मुद्दे माहिती",
      "जमा खर्च सन २०२५/२६",
      "जमा खर्च सन २०२४/२५",
      "ग्रामपंचायती विषयी सर्वसाधरण माहिती",
    ],
    financeTitle: "१५ वित्त आयोग जमा खर्च",
    page: "पृष्ठ",
    of: "पैकी",
  },
  en: {
    titles: [
      "RTI Act 4(1)(b) Points 1 to 17 Information",
      "Income & Expenditure 2025/26",
      "Income & Expenditure 2024/25",
      "General Information About Gram Panchayat",
    ],
    financeTitle: "15th Finance Commission Income & Expenditure",
    page: "Page",
    of: "of",
  },
};

const pdfs = [
  "/Pdfs/Pg माहितीचा अधिकार1 ते 17.pdf",
  "/Pdfs/New Doc 05-11-2026 09.56.pdf",
  "/Pdfs/सन २०२४ २५ जमा खर्च.pdf",
  "/Pdfs/GP mahiti patrak.pdf",
];

function PdfViewer({ file, title, pageLabel, ofLabel }) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const pdfWidth = typeof window !== "undefined"
    ? window.innerWidth < 640 ? window.innerWidth - 40 : window.innerWidth < 1024 ? 500 : 700
    : 600;

  return (
    <>
      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6 text-green-700 text-center mt-10">{title}</h1>
      <div className="w-full flex flex-col items-center">
        <div className="bg-white rounded-xl shadow-2xl p-2 sm:p-4">
          <Document file={file} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
            <Page pageNumber={pageNumber} width={pdfWidth} />
          </Document>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          <button onClick={() => setPageNumber(p => Math.max(p - 1, 1))} disabled={pageNumber <= 1} className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-40">⬅ Prev</button>
          <div className="px-4 py-2 bg-white rounded-lg shadow font-semibold text-sm">{pageLabel} {pageNumber} {ofLabel} {numPages || "--"}</div>
          <button onClick={() => setPageNumber(p => Math.min(p + 1, numPages))} disabled={pageNumber >= numPages} className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-40">Next ➡</button>
        </div>
      </div>
    </>
  );
}

const Information = () => {
  const { lang } = useLang();
  const c = content[lang];
  const [imgScale, setImgScale] = useState(1);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center py-6 px-3">
      {pdfs.map((file, i) => (
        <PdfViewer key={i} file={file} title={c.titles[i]} pageLabel={c.page} ofLabel={c.of} />
      ))}

      <h2 className="text-lg sm:text-2xl font-bold mt-10 mb-4 text-green-700 text-center">{c.financeTitle}</h2>
      <div className="bg-white rounded-xl shadow-2xl p-2 sm:p-4 flex justify-center overflow-hidden">
        <img
          src="/Pdfs/१५ वा वित्त आयोग जमा खर्च.jpg.jpeg"
          alt="Finance"
          style={{ transform: `scale(${imgScale})` }}
          className="transition-transform duration-300 w-full max-w-[280px] sm:max-w-[450px] md:max-w-[650px]"
        />
      </div>
      <div className="flex items-center gap-4 mt-4">
        <button onClick={() => setImgScale(prev => Math.max(prev - 0.2, 0.6))} className="px-3 py-1 bg-gray-600 text-white rounded">-</button>
        <button onClick={() => setImgScale(prev => Math.min(prev + 0.2, 2))} className="px-3 py-1 bg-gray-600 text-white rounded">+</button>
      </div>
    </div>
  );
};

export default Information;