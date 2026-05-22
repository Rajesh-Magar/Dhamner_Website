import { useEffect, useState, useRef } from "react";
import { useLang } from "../../context/LanguageContext";
import { TrendingUp, Users, BookOpen, Home, MapPin, Zap, Droplets, Banknote, Trophy, BarChart3 } from "lucide-react";

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
  { mr: "१०० टक्के शौचालय बांधणी पूर्ण", en: "100% Toilet Construction Completed", icon: "🏆" },
  { mr: "जलजीवन मिशन अंतर्गत नळ जोडण्या", en: "Tap Connections under Jal Jeevan Mission", icon: "💧" },
  { mr: "डिजिटल ग्रामपंचायत सेवा सुरू", en: "Digital Gram Panchayat Services Launched", icon: "💻" },
  { mr: "सौर ऊर्जा प्रकल्प यशस्वी", en: "Solar Energy Project Successful", icon: "☀️" },
  { mr: "सर्व रस्त्यांचे सिमेंटीकरण", en: "Cement Roads on All Village Streets", icon: "🛣️" },
];

const wardData = [
  { mr_name: "वार्ड १", en_name: "Ward 1", score: 88 },
  { mr_name: "वार्ड २", en_name: "Ward 2", score: 75 },
  { mr_name: "वार्ड ३", en_name: "Ward 3", score: 92 },
  { mr_name: "वार्ड ४", en_name: "Ward 4", score: 68 },
  { mr_name: "वार्ड ५", en_name: "Ward 5", score: 81 },
];

export default function DashboardPage() {
  const { lang, t } = useLang();
  const stats = [
    { label: t.population, value: 4832, suffix: "", icon: Users, color: "bg-blue-500", iconColor: "text-blue-500" },
    { label: t.households, value: 1120, suffix: "", icon: Home, color: "bg-green-500", iconColor: "text-green-500" },
    { label: lang === "mr" ? "एकूण क्षेत्र" : "Total Area (Ha)", value: 1840, suffix: " Ha", icon: MapPin, color: "bg-orange-500", iconColor: "text-orange-500" },
    { label: t.wards, value: 11, suffix: "", icon: BarChart3, color: "bg-purple-500", iconColor: "text-purple-500" },
  ];
  const progressBars = [
    { label: t.literacy, value: 78, color: "bg-blue-500", icon: BookOpen },
    { label: t.cleanliness, value: 94, color: "bg-green-500", icon: TrendingUp },
    { label: t.powerSupply, value: 99, color: "bg-yellow-500", icon: Zap },
    { label: t.tapConnections, value: 86, color: "bg-cyan-500", icon: Droplets },
    { label: t.fundUtilization, value: 72, color: "bg-orange-500", icon: Banknote },
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
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><TrendingUp className="text-green-500" />{lang === "mr" ? "विकास निर्देशक" : "Development Indicators"}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{progressBars.map((p, i) => <ProgressBar key={i} {...p} />)}</div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><MapPin className="text-blue-500" />{lang === "mr" ? "वार्डनिहाय तुलना" : "Ward-wise Comparison"}</h2>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="space-y-4">
              {wardData.map((w, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-600 w-16 shrink-0">{lang === "mr" ? w.mr_name : w.en_name}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-6 relative overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-end pr-2 transition-all duration-1000" style={{ width: `${w.score}%` }}>
                      <span className="text-white text-xs font-bold">{w.score}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><Trophy className="text-yellow-500" />{lang === "mr" ? "वर्षातील ५ महत्वाचे यश" : "Top 5 Achievements of the Year"}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((a, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow hover:-translate-y-1 transform">
                <span className="text-4xl">{a.icon}</span>
                <div>
                  <p className="text-sm font-bold text-gray-800 leading-snug">{lang === "mr" ? a.mr : a.en}</p>
                  <span className="inline-block mt-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">{lang === "mr" ? "२०२४-२५" : "2024-25"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
