import { useEffect, useState, useRef } from "react";
import { useLang } from "../../context/LanguageContext";
import { TrendingUp, Users, BookOpen, Home, MapPin, Zap, Droplets, Banknote, Trophy, BarChart3, Sun, Recycle, TreePine, Image } from "lucide-react";
import { Link } from "react-router-dom";

function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
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
  return <span ref={ref}>{count.toLocaleString("en-IN")}{suffix}</span>;
}

function ProgressBar({ label, value, color, icon: Icon }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTimeout(() => setWidth(value), 200);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
            <Icon size={20} className={color.replace("bg-", "text-")} />
          </div>
          <span className="font-semibold text-gray-700 text-sm">{label}</span>
        </div>
        <span className="text-2xl font-bold text-gray-800">{value}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-3">
        <div className={`h-3 rounded-full transition-all duration-1000 ease-out ${color}`} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

const achievements = [
  { mr: "पूर्ण गावात CCTV कॅमेरा", en: "Village-wide CCTV Camera", icon: "📹" },
  { mr: "जलजीवन मिशन अंतर्गत नळ जोडण्या", en: "Tap Connections under Jal Jeevan Mission", icon: "💧" },
  { mr: "डिजिटल ग्रामपंचायत सेवा सुरू", en: "Digital Gram Panchayat Services Launched", icon: "💻" },
  { mr: "सौर ऊर्जा प्रकल्प यशस्वी", en: "Solar Energy Project Successful", icon: "☀️" },
  { mr: "सर्व रस्त्यांचे सिमेंटीकरण", en: "Cement Roads on All Village Streets", icon: "🛣️" },
];

const wardData = [
  { mr_name: "वार्ड १", en_name: "Ward 1", score: 99 },
  { mr_name: "वार्ड २", en_name: "Ward 2", score: 98 },
  { mr_name: "वार्ड ३", en_name: "Ward 3", score: 96 },
];

function GreenProgressBar({ label, value, color }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => setWidth(value), 100); });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="bg-white rounded-2xl p-5 shadow-md">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-700 text-sm">{label}</span>
        <span className="text-xl font-bold text-green-600">{value}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-3">
        <div className={`h-3 rounded-full transition-all duration-1000 ${color}`} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

const initiatives = [
  { emoji: "🌳", mr_title: "वृक्षारोपण मोहीम", en_title: "Tree Plantation Campaign", mr_desc: "२०२४-२५ मध्ये 2,750 झाडे लावण्यात आली. नागरिकांनी सक्रिय सहभाग घेतला.", en_desc: "2,750 trees planted in 2024-25 with active citizen participation." },
  { emoji: "🚫", mr_title: "प्लास्टिकमुक्त गाव", en_title: "Plastic-Free Village", mr_desc: "एकल वापर प्लास्टिक बंदीची अंमलबजावणी व जनजागृती कार्यक्रम.", en_desc: "Implementation of single-use plastic ban and awareness programs." },
  { emoji: "🗑️", mr_title: "कचरा वर्गीकरण", en_title: "Waste Segregation", mr_desc: "ओला व सुका कचरा वेगळा करण्याचे प्रशिक्षण व घरगुती सेंद्रिय खत.", en_desc: "Training on wet/dry waste segregation and domestic organic fertilizer." },
  { emoji: "☀️", mr_title: "सौर ऊर्जा प्रकल्प", en_title: "Solar Energy Project", mr_desc: "सर्व शासकीय कार्यालय व पाणीपुरवठा सौरऊर्जेवर करण्यात आले आहे, मासिक ₹४५,००० बचत", en_desc: "All govt offices and water supply on solar energy, monthly saving of ₹45,000." },
];

const greenScores = [
  { mr_label: "वृक्षाच्छादन वाढ", en_label: "Tree Cover Increase", value: 85, color: "bg-green-500" },
  { mr_label: "प्लास्टिकमुक्तता", en_label: "Plastic-Free Score", value: 100, color: "bg-teal-500" },
  { mr_label: "सौर ऊर्जा वापर", en_label: "Solar Energy Usage", value: 55, color: "bg-yellow-500" },
  { mr_label: "कचरा पुनर्वापर", en_label: "Waste Recycled", value: 100, color: "bg-cyan-500" },
];

const adoptedTrees = [
  { mr_name: "गजानन क्षीरसागर", en_name: "Gajanan Kshirsagar", tree: "🌳", mr_type: "आंबा", en_type: "Mango", ward: "वार्ड १" },
  { mr_name: "अनिल साळुंखे", en_name: "Anil Salunkhe", tree: "🌿", mr_type: "लिंब", en_type: "Neem", ward: "वार्ड ३" },
  { mr_name: "सुनील शिरसागर", en_name: "Sunil Shirsagar", tree: "🌲", mr_type: "पिंपळ", en_type: "Peepal", ward: "वार्ड २" },
];

export default function DashboardPage() {
  const { lang, t } = useLang();
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);
  const stats = [
    { label: t.population, value: 2722, suffix: "", icon: Users, color: "bg-blue-500", iconColor: "text-blue-500" },
    { label: t.households, value: 544, suffix: "", icon: Home, color: "bg-green-500", iconColor: "text-green-500" },
    { label: lang === "mr" ? "एकूण क्षेत्र" : "Total Area (Ha)", value: 750, suffix: " Ha", icon: MapPin, color: "bg-orange-500", iconColor: "text-orange-500" },
    { label: t.wards, value: 3, suffix: "", icon: BarChart3, color: "bg-purple-500", iconColor: "text-purple-500" },
  ];
  const progressBars = [
    { label: t.literacy || (lang === "mr" ? "साक्षरता दर" : "Literacy Rate"), value: 95, color: "bg-blue-500", textClass: "text-blue-500", icon: BookOpen },
    { label: t.cleanliness || (lang === "mr" ? "स्वच्छता" : "Cleanliness"), value: 100, color: "bg-green-500", textClass: "text-green-500", icon: TrendingUp },
    { label: t.powerSupply || (lang === "mr" ? "वीज पुरवठा" : "Power Supply"), value: 100, color: "bg-yellow-500", textClass: "text-yellow-500", icon: Zap },
    { label: t.tapConnections || (lang === "mr" ? "नळ जोडणी" : "Tap Connections"), value: 100, color: "bg-cyan-500", textClass: "text-cyan-500", icon: Droplets },
    { label: t.fundUtilization || (lang === "mr" ? "निधी वापर" : "Fund Utilization"), value: 100, color: "bg-orange-500", textClass: "text-orange-500", icon: Banknote },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4"><div className="bg-white bg-opacity-20 p-4 rounded-full"><TrendingUp size={48} /></div></div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{lang === "mr" ? "माझे गाव, माझी प्रगती" : "My Village, My Progress"}</h1>
        <p className="text-orange-100 text-lg">{lang === "mr" ? "धामणेर ग्रामपंचायत — रिअल-टाइम डॅशबोर्ड" : "Dhamner Gram Panchayat — Real-Time Dashboard"}</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><BarChart3 className="text-orange-500" />{lang === "mr" ? "मुख्य आकडेवारी" : "Key Statistics"}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-xl transition-shadow">
                <div className={`inline-flex p-3 rounded-xl ${s.color} bg-opacity-10 mb-3`}><s.icon size={28} className={s.iconColor} /></div>
                <p className="text-3xl font-extrabold text-gray-800"><AnimatedCounter target={s.value} suffix={s.suffix} /></p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
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

        {/* Green Scoreboard */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2"><Sun className="text-yellow-500" />{lang === "mr" ? "हरित स्कोरबोर्ड" : "Green Scoreboard"}</h2>
          <p className="text-gray-500 text-sm mb-6">{lang === "mr" ? "पर्यावरण संरक्षणातील आमची प्रगती" : "Our progress in environmental conservation"}</p>
          <div className="grid md:grid-cols-2 gap-5">
            {greenScores.map((s, i) => (
              <GreenProgressBar key={i} label={lang === "mr" ? s.mr_label : s.en_label} value={s.value} color={s.color} />
            ))}
          </div>
        </div>

        {/* Initiatives */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><Recycle className="text-teal-500" />{lang === "mr" ? "उपक्रम" : "Initiatives"}</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {initiatives.map((it, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-md flex gap-4 hover:shadow-lg transition-shadow border border-gray-100">
                <span className="text-4xl shrink-0">{it.emoji}</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{lang === "mr" ? it.mr_title : it.en_title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{lang === "mr" ? it.mr_desc : it.en_desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Adopt a Tree */}
        <div className="mt-14 mb-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2"><TreePine className="text-green-600" />{lang === "mr" ? "झाड दत्तक घ्या" : "Adopt a Tree"}</h2>
          <p className="text-gray-500 text-sm mb-5">{lang === "mr" ? "झाड दत्तक घेऊन त्याची देखभाल करा आणि पर्यावरण संरक्षणात सहभागी व्हा" : "Adopt a tree, care for it, and contribute to environmental conservation"}</p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {adoptedTrees.map((t, i) => (
              <div key={i} className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                <span className="text-3xl">{t.tree}</span>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{lang === "mr" ? t.mr_name : t.en_name}</p>
                  <p className="text-xs text-green-600 font-semibold">{lang === "mr" ? t.mr_type : t.en_type} · {t.ward}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pb-8">
          <Link 
            to="/gallery" 
            className="flex items-center gap-2 px-6 py-3 bg-white border border-green-600 text-green-700 font-bold rounded-full hover:bg-green-50 transition-colors shadow-sm w-full sm:w-auto justify-center"
          >
            <Image className="w-5 h-5" />
            {lang === "mr" ? "फोटो गॅलरी" : "Photo Gallery"}
          </Link>
          <Link 
            to="/yashogatha" 
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors shadow-md w-full sm:w-auto justify-center"
          >
            <BookOpen className="w-5 h-5" />
            {lang === "mr" ? "धामणेर यशोगाथा" : "Dhamner Success Story"}
          </Link>
        </div>

      </div>
    </div>
  );
}
