import React, { useState, useEffect } from "react";
import { useLang } from "../../context/LanguageContext";
import { Banknote, PieChart, TrendingDown, TrendingUp, Info } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import worker from "pdfjs-dist/build/pdf.worker?url";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = worker;

const incomeData = [
  { mr: "मालमत्ता कर", en: "Property Tax", amount: 2640000, color: "#f97316", pct: 30 },
  { mr: "पाणी कर", en: "Water Tax", amount: 2288000, color: "#3b82f6", pct: 26 },
  { mr: "१५वा वित्त आयोग", en: "15th Finance Commission", amount: 2288000, color: "#8b5cf6", pct: 26 },
  { mr: "CSR", en: "CSR", amount: 1584000, color: "#10b981", pct: 18 },
];

const expenditureData = [
  { mr: "रस्ते व पायाभूत", en: "Roads & Infrastructure", amount: 1320000, color: "#f97316", pct: 15 },
  { mr: "पाणी पुरवठा", en: "Water Supply", amount: 1672000, color: "#3b82f6", pct: 19 },
  { mr: "स्वच्छता", en: "Sanitation", amount: 1232000, color: "#10b981", pct: 14 },
  { mr: "शिक्षण", en: "Education", amount: 1056000, color: "#8b5cf6", pct: 12 },
  { mr: "आरोग्य", en: "Health", amount: 880000, color: "#ec4899", pct: 10 },
  { mr: "मागासवर्गीय", en: "Backward Classes", amount: 1320000, color: "#f43f5e", pct: 15 },
  { mr: "महिला व बालकल्याण", en: "Women & Child Welfare", amount: 880000, color: "#06b6d4", pct: 10 },
  { mr: "दिव्यांग", en: "Disabled", amount: 440000, color: "#eab308", pct: 5 },
];

const pdfs = [
  "/Pdfs/New Doc 05-11-2026 09.56.pdf",
  "/Pdfs/सन २०२४ २५ जमा खर्च.pdf",
];

const pdfTitles = {
  mr: [
    "जमा खर्च सन २०२५/२६",
    "जमा खर्च सन २०२४/२५",
  ],
  en: [
    "Income & Expenditure 2025/26",
    "Income & Expenditure 2024/25",
  ],
};

function PdfViewer({ file, title, pageLabel, ofLabel }) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const pdfWidth = typeof window !== "undefined"
    ? window.innerWidth < 640 ? window.innerWidth - 40 : window.innerWidth < 1024 ? 500 : 700
    : 600;

  return (
    <>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-8 sm:mb-12 text-center mt-12">{title}</h2>
      <div className="w-full flex flex-col items-center mb-10">
        <div className="bg-white rounded-xl shadow-2xl p-2 sm:p-4 border border-gray-100">
          <Document file={file} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
            <Page pageNumber={pageNumber} width={pdfWidth} />
          </Document>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          <button onClick={() => setPageNumber(p => Math.max(p - 1, 1))} disabled={pageNumber <= 1} className="px-4 py-2 bg-green-700 text-white rounded-lg disabled:opacity-40 hover:bg-green-800 transition">⬅ Prev</button>
          <div className="px-4 py-2 bg-white rounded-lg shadow font-semibold text-sm border border-gray-100">{pageLabel} {pageNumber} {ofLabel} {numPages || "--"}</div>
          <button onClick={() => setPageNumber(p => Math.min(p + 1, numPages))} disabled={pageNumber >= numPages} className="px-4 py-2 bg-green-700 text-white rounded-lg disabled:opacity-40 hover:bg-green-800 transition">Next ➡</button>
        </div>
      </div>
    </>
  );
}

function DonutChart({ data, total, centerLabel }) {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  let offset = 0;
  const r = 60, cx = 80, cy = 80, strokeW = 24;
  const circ = 2 * Math.PI * r;
  return (
    <svg width="160" height="160" viewBox="0 0 160 160">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f3f4f6" strokeWidth={strokeW} />
      {data.map((d, i) => {
        const dash = (d.pct / 100) * circ;
        const el = (
          <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={d.color} strokeWidth={strokeW}
            strokeDasharray={animated ? `${dash} ${circ}` : `0 ${circ}`} 
            strokeDashoffset={-offset}
            className="transition-all duration-1000 ease-out"
            transform={`rotate(-90 ${cx} ${cy})`} />
        );
        offset += dash;
        return el;
      })}
      <text x={cx} y={cy - 6} textAnchor="middle" fontSize="10" fill="#6b7280">{centerLabel}</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1f2937">
        ₹{(total / 100000).toFixed(2)}L
      </text>
    </svg>
  );
}

const totalIncome = incomeData.reduce((s, d) => s + d.amount, 0);
const totalExp = expenditureData.reduce((s, d) => s + d.amount, 0);

export default function BudgetPage() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="bg-gradient-to-r from-green-700 to-emerald-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4"><div className="bg-white bg-opacity-20 p-4 rounded-full"><Banknote size={48} /></div></div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{lang === "mr" ? "वित्त व बजेट पारदर्शकता" : "Finance & Budget Transparency"}</h1>
        <p className="text-green-100">{lang === "mr" ? "आर्थिक वर्ष २०२५-२६" : "Financial Year 2025-26"}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">

        {/* Rupee Infographic */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-bold text-amber-800 mb-2">{lang === "mr" ? "आपला एक रुपया कुठे जातो?" : "Where Does Our Rupee Go?"}</h2>
          <p className="text-amber-600 text-sm mb-6">{lang === "mr" ? "प्रत्येक रुपयातून गावाच्या विकासावर होणारा खर्च" : "Expenditure breakdown per rupee on village development"}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {expenditureData.map((d, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg" style={{ backgroundColor: d.color }}>
                  {d.pct}p
                </div>
                <p className="text-xs text-gray-600 mt-1 text-center max-w-[80px]">{lang === "mr" ? d.mr : d.en}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Income & Expenditure Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Income */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><TrendingUp className="text-green-500" />{lang === "mr" ? "उत्पन्न स्रोत" : "Income Sources"}</h3>
            <div className="flex items-center gap-6">
              <DonutChart data={incomeData} total={totalIncome} centerLabel={lang === "mr" ? "एकूण" : "Total"} />
              <div className="flex-1 space-y-2">
                {incomeData.map((d, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} /><span className="text-gray-600">{lang === "mr" ? d.mr : d.en}</span></div>
                    <div className="text-right"><span className="font-bold text-gray-800">{d.pct}%</span></div>
                  </div>
                ))}
                <div className="pt-2 border-t text-sm font-bold text-gray-700">{lang === "mr" ? "एकूण उत्पन्न:" : "Total Income:"} ₹{(totalIncome / 100000).toFixed(2)}L</div>
              </div>
            </div>
          </div>

          {/* Expenditure */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><TrendingDown className="text-red-500" />{lang === "mr" ? "खर्चाचे वाटप" : "Expenditure Breakdown"}</h3>
            <div className="flex items-center gap-6">
              <DonutChart data={expenditureData} total={totalExp} centerLabel={lang === "mr" ? "एकूण" : "Total"} />
              <div className="flex-1 space-y-2">
                {expenditureData.map((d, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} /><span className="text-gray-600">{lang === "mr" ? d.mr : d.en}</span></div>
                    <span className="font-bold text-gray-800">{d.pct}%</span>
                  </div>
                ))}
                <div className="pt-2 border-t text-sm font-bold text-gray-700">{lang === "mr" ? "एकूण खर्च:" : "Total Expenditure:"} ₹{(totalExp / 100000).toFixed(2)}L</div>
              </div>
            </div>
          </div>
        </div>

        {/* PDFs Section */}
        <div className="w-full flex flex-col items-center pb-12">
          {pdfs.map((file, i) => (
            <PdfViewer 
              key={i} 
              file={file} 
              title={pdfTitles[lang]?.[i] || pdfTitles.mr[i]} 
              pageLabel={lang === "mr" ? "पृष्ठ" : "Page"} 
              ofLabel={lang === "mr" ? "पैकी" : "of"} 
            />
          ))}
        </div>

      </div>
    </div>
  );
}
