import { useState, useRef, useEffect } from "react";
import { useLang } from "../../context/LanguageContext";
import { Leaf, TreePine, Recycle, Sun, Heart, Plus } from "lucide-react";

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

export default function EnvironmentPage() {
  const { lang } = useLang();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="bg-gradient-to-r from-green-800 to-emerald-600 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4"><div className="bg-white bg-opacity-20 p-4 rounded-full"><Leaf size={48} /></div></div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{lang === "mr" ? "पर्यावरण व शाश्वतता" : "Environment & Sustainability"}</h1>
        <p className="text-green-100">{lang === "mr" ? "हरित धामणेर — निसर्गासाठी, भविष्यासाठी" : "Green Dhamner — For Nature, For the Future"}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">

        {/* Green Scoreboard */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2"><Sun className="text-yellow-500" />{lang === "mr" ? "हरित स्कोरबोर्ड" : "Green Scoreboard"}</h2>
          <p className="text-gray-500 text-sm mb-6">{lang === "mr" ? "पर्यावरण संरक्षणातील आमची प्रगती" : "Our progress in environmental conservation"}</p>
          <div className="grid md:grid-cols-2 gap-5">
            {greenScores.map((s, i) => (
              <GreenProgressBar key={i} label={lang === "mr" ? s.mr_label : s.en_label} value={s.value} color={s.color} />
            ))}
          </div>
        </div>

        {/* Initiatives */}
        <div>
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
        <div>
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

          <button onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
            <Plus size={18} />{lang === "mr" ? "झाड दत्तक घ्या" : "Adopt a Tree"}
          </button>

          {showForm && (
            <div className="mt-6 bg-white rounded-2xl shadow-md p-6 max-w-md border border-green-200">
              <h3 className="font-bold text-gray-800 mb-4">{lang === "mr" ? "दत्तक विनंती अर्ज" : "Adoption Request Form"}</h3>
              <div className="space-y-3">
                <input placeholder={lang === "mr" ? "आपले पूर्ण नाव" : "Your Full Name"} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400" />
                <input placeholder={lang === "mr" ? "मोबाइल नंबर" : "Mobile Number"} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400" />
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400">
                  <option>{lang === "mr" ? "झाडाचा प्रकार निवडा" : "Select Tree Type"}</option>
                  <option>{lang === "mr" ? "आंबा" : "Mango"}</option>
                  <option>{lang === "mr" ? "पिंपळ" : "Peepal"}</option>
                  <option>{lang === "mr" ? "लिंब" : "Neem"}</option>
                </select>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors text-sm">
                  {lang === "mr" ? "अर्ज सादर करा" : "Submit Request"}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
