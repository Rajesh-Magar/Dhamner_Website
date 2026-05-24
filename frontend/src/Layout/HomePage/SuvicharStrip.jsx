import React from "react";
import { useLang } from "../../context/LanguageContext";
import { suvicharList } from "../../utils/suvicharData";
import { Quote } from "lucide-react";

const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

export default function SuvicharStrip() {
  const { lang } = useLang();
  
  // Deterministic quote index based on current day of the year
  const dayIndex = getDayOfYear();
  const todayQuote = suvicharList[dayIndex % suvicharList.length];

  if (!todayQuote) return null;

  return (
    <div className="w-full bg-gradient-to-r from-amber-500/[0.06] via-orange-500/[0.02] to-amber-500/[0.06] border-y border-amber-500/20 backdrop-blur-md py-1.5 sm:py-2 px-4 shadow-sm select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 text-center md:text-left">
        {/* Badge */}
        <div className="flex items-center gap-1.5 shrink-0 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[9px] sm:text-[10px] font-black px-2.5 py-0.5 sm:py-1 rounded-md uppercase tracking-wider shadow-sm font-devanagari select-none">
          <Quote size={10} className="fill-white/20 animate-pulse" />
          <span>{lang === "en" ? "Thought of the Day" : "आजचा सुविचार"}</span>
        </div>

        {/* Content */}
        <div className="text-slate-800 text-[11px] sm:text-xs md:text-sm font-medium font-devanagari leading-normal">
          <span className="font-extrabold italic text-amber-900 group-hover:text-amber-800 transition-colors">
            “{todayQuote.quote}”
          </span>
          <span className="mx-2 text-slate-400 font-light">—</span>
          <span className="text-slate-600 font-semibold">
            {lang === "mr" ? `अर्थ: ${todayQuote.meaning}` : `Meaning: ${todayQuote.enMeaning}`}
          </span>
        </div>
      </div>
    </div>
  );
}
