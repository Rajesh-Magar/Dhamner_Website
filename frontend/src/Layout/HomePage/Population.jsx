import { useEffect, useState, useRef } from "react";
import { useLang } from "../../context/LanguageContext";
import { Users, User, Baby, BookOpen, Map, Home, Layers, Droplets, Sparkles } from "lucide-react";

const content = {
  mr: {
    heading: "धामणेर: एका दृष्टिक्षेपात",
    desc: "गावाची प्रगती आणि लोकसंख्येची आकडेवारी खालीलप्रमाणे आहे.",
  },
  en: {
    heading: "Dhamner: At a Glance",
    desc: "The progress and population statistics of the village are as follows.",
  },
};

const formatNumber = (num, lang) => {
  if (lang === "mr") {
    const devanagariDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return num
      .toString()
      .split("")
      .map(char => {
        const digit = parseInt(char, 10);
        return isNaN(digit) ? char : devanagariDigits[digit];
      })
      .join("");
  }
  return num.toLocaleString("en-IN");
};

function AnimatedCounter({ target, suffix = "", duration = 2000, lang }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const step = target / (duration / 16);
        let cur = 0;
        const timer = setInterval(() => {
          cur = Math.min(cur + step, target);
          setCount(Math.floor(cur));
          if (cur >= target) clearInterval(timer);
        }, 16);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  const resolvedSuffix = typeof suffix === "object" ? suffix[lang] || "" : suffix;

  return (
    <span ref={ref}>
      {formatNumber(count, lang)}
      {resolvedSuffix}
    </span>
  );
}

const statsData = [
  { id: "total", target: 2722, suffix: "+", icon: Users, mrLabel: "एकूण लोकसंख्या", enLabel: "Total Population" },
  { id: "male", target: 1407, suffix: "+", icon: User, mrLabel: "पुरुष", enLabel: "Male" },
  { id: "female", target: 1315, suffix: "+", icon: User, mrLabel: "महिला", enLabel: "Female" },
  { id: "children", target: 294, suffix: "+", icon: Baby, mrLabel: "बालके", enLabel: "Children" },
  { id: "literacy", target: 78, suffix: "%", icon: BookOpen, mrLabel: "साक्षरता दर", enLabel: "Literacy Rate" },
  { id: "area", target: 750, suffix: { mr: " हेक्टर", en: " Hectares" }, icon: Map, mrLabel: "एकूण क्षेत्र", enLabel: "Total Area" },
  { id: "households", target: 544, suffix: "", icon: Home, mrLabel: "घरे", enLabel: "Households" },
  { id: "wards", target: 3, suffix: "", icon: Layers, mrLabel: "वार्ड", enLabel: "Wards" },
  { id: "waterSources", target: 100, suffix: "%", icon: Droplets, mrLabel: "पाण्याचे स्रोत", enLabel: "Water Sources" },
  { id: "cleanliness", target: 100, suffix: "%", icon: Sparkles, mrLabel: "स्वच्छता", enLabel: "Cleanliness" },
];

export default function Population() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Deep Biophilic Green Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Dhamner-Village-New-Final.webp')",
        }}
      >
        <div className="absolute inset-0 bg-green-950/85 backdrop-blur-xs"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 text-center text-white z-10 w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-green-100">
          {c.heading}
        </h2>
        <div className="flex items-center justify-center gap-2 mt-3 mb-6">
          <span className="w-8 h-[2px] bg-orange-400"></span>
          <span className="w-2 h-2 bg-orange-400 rotate-45"></span>
          <span className="w-8 h-[2px] bg-orange-400"></span>
        </div>

        <p className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-gray-200 mb-10 font-medium drop-shadow-sm">
          {c.desc}
        </p>

        {/* Compact Scorecards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto justify-center">
          {statsData.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="bg-white/10 hover:bg-white/15 backdrop-blur-md py-4 px-3 sm:py-5 sm:px-4 rounded-2xl border border-white/10 hover:border-white/20 shadow-md hover:shadow-lg hover:translate-y-[-3px] transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center max-w-[190px] w-full mx-auto"
              >
                {/* Compact Icon Container */}
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-2 text-amber-400 group-hover:scale-105 group-hover:text-amber-300 transition-all duration-200 border border-white/5 shadow-inner">
                  <Icon size={20} />
                </div>
                
                {/* Compact Animated Value */}
                <h3 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 group-hover:scale-102 transition-transform duration-200 font-devanagari select-none">
                  <AnimatedCounter 
                    target={item.target} 
                    suffix={item.suffix} 
                    lang={lang} 
                  />
                </h3>
                
                {/* Compact Label */}
                <p className="mt-1.5 text-[11px] sm:text-xs font-semibold text-gray-200 text-center tracking-wide font-devanagari leading-tight">
                  {lang === "mr" ? item.mrLabel : item.enLabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}