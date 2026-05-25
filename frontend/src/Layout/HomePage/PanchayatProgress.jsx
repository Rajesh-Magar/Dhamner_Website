import React, { useEffect, useState, useRef } from "react";
import { useLang } from "../../context/LanguageContext";
import { TrendingUp, MapPin, Trophy, BookOpen, Zap, Droplets, Banknote } from "lucide-react";

export default function PanchayatProgress() {
  const { lang, t } = useLang();
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(true);
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const progressBars = [
    { label: t.literacy || (lang === "mr" ? "साक्षरता दर" : "Literacy Rate"), value: 95, color: "bg-blue-500", textClass: "text-blue-500", icon: BookOpen },
    { label: t.cleanliness || (lang === "mr" ? "स्वच्छता" : "Cleanliness"), value: 100, color: "bg-green-500", textClass: "text-green-500", icon: TrendingUp },
    { label: t.powerSupply || (lang === "mr" ? "वीज पुरवठा" : "Power Supply"), value: 100, color: "bg-yellow-500", textClass: "text-yellow-500", icon: Zap },
    { label: t.tapConnections || (lang === "mr" ? "नळ जोडणी" : "Tap Connections"), value: 100, color: "bg-cyan-500", textClass: "text-cyan-500", icon: Droplets },
    { label: t.fundUtilization || (lang === "mr" ? "निधी वापर" : "Fund Utilization"), value: 100, color: "bg-orange-500", textClass: "text-orange-500", icon: Banknote },
  ];

  const wardData = [
    { mr_name: "वार्ड १", en_name: "Ward 1", score: 99 },
    { mr_name: "वार्ड २", en_name: "Ward 2", score: 98 },
    { mr_name: "वार्ड ३", en_name: "Ward 3", score: 96 },
  ];

  const achievements = [
    { mr: "पूर्ण गावात CCTV कॅमेरा", en: "Village-wide CCTV Camera", icon: "📹" },
    { mr: "जलजीवन मिशन अंतर्गत नळ जोडण्या", en: "Tap Connections under Jal Jeevan Mission", icon: "💧" },
    { mr: "डिजिटल ग्रामपंचायत सेवा सुरू", en: "Digital Gram Panchayat Services Launched", icon: "💻" },
    { mr: "सौर ऊर्जा प्रकल्प यशस्वी", en: "Solar Energy Project Successful", icon: "☀️" },
    { mr: "सर्व रस्त्यांचे सिमेंटीकरण", en: "Cement Roads on All Village Streets", icon: "🛣️" },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="bg-gradient-to-br from-slate-50 to-orange-50/20 py-16 px-4 md:px-10 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-950 font-devanagari">
            {lang === "en" ? "Prosperous Panchayat Progress" : "समृद्ध पंचायत प्रगती"}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3 mb-4">
            <span className="w-8 h-[2px] bg-amber-500"></span>
            <span className="w-2 h-2 bg-amber-500 rotate-45"></span>
            <span className="w-8 h-[2px] bg-amber-500"></span>
          </div>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 font-medium font-devanagari">
            {lang === "en" 
              ? "Key development indicators, wardwise performance, and major milestones of the Gram Panchayat" 
              : "ग्रामपंचायतीचे मुख्य विकास निर्देशक, वॉर्डनिहाय कामगिरी आणि महत्त्वाची यशोगाथा"}
          </p>
        </div>

        {/* 1. विकास निर्देशक (Development Indicators) */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 font-devanagari">
            <TrendingUp className="text-green-600 w-5 h-5" />
            {lang === "en" ? "Development Indicators" : "विकास निर्देशक"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {progressBars.map((bar, i) => {
              const Icon = bar.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`p-2.5 rounded-xl ${bar.color} bg-opacity-10 text-slate-800`}>
                        <Icon size={20} className={bar.textClass} />
                      </div>
                      <span className="font-bold text-slate-800 text-sm font-devanagari">{bar.label}</span>
                    </div>
                    <span className="text-xl font-black text-slate-800 font-devanagari">{bar.value}%</span>
                  </div>
                  {/* Progress Bar Container */}
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${bar.color}`} 
                      style={{ width: `${animate ? bar.value : 0}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. वार्डनिहाय तुलना (Wardwise Comparison) */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 font-devanagari">
            <MapPin className="text-blue-500 w-5 h-5" />
            {lang === "en" ? "Wardwise Comparison" : "वार्डनिहाय विस्तारात्मक कामाची तुलना"}
          </h3>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="space-y-6">
              {wardData.map((ward, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold text-slate-700 font-devanagari">
                    <span>{lang === "en" ? ward.en_name : ward.mr_name}</span>
                    <span>{ward.score}%</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden relative">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${animate ? ward.score : 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. वर्षातील ५ महत्त्वाचे यश (5 Key Achievements) */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 font-devanagari">
            <Trophy className="text-amber-500 w-5 h-5" />
            {lang === "en" ? "Top 5 Achievements of the Year" : "वर्षातील ५ महत्त्वाचे यश"}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {achievements.map((ach, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 flex items-start gap-4 hover:translate-y-[-2px] ${
                  i >= 3 ? "lg:col-span-1 lg:first-of-type:ml-[16.66%] lg:last-of-type:mr-[16.66%]" : ""
                }`}
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-amber-500/10 flex items-center justify-center text-2xl shadow-inner border border-amber-500/5">
                  {ach.icon}
                </div>
                {/* Details */}
                <div>
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base font-devanagari leading-snug">
                    {lang === "mr" ? ach.mr : ach.en}
                  </h4>
                  <span className="inline-block bg-green-100 text-green-800 text-[10px] font-black px-2 py-0.5 rounded mt-2 font-devanagari">
                    {lang === "mr" ? "२०२५-२६" : "2025-26"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
