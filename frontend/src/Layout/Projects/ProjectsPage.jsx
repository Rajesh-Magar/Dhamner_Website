import { useState } from "react";
import { useLang } from "../../context/LanguageContext";
import { Hammer, CheckCircle2, Clock, Lightbulb, IndianRupee, ArrowRight, Image, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    status: "completed",
    mr_title: "ग्रामपंचायत कार्यालय नूतनीकरण",
    en_title: "Gram Panchayat Office Renovation",
    mr_desc: "ग्रामपंचायत कार्यालयाचे संपूर्ण नूतनीकरण करण्यात आले. डिजिटल सेवा केंद्र स्थापन केले.",
    en_desc: "Complete renovation of the Gram Panchayat office. A digital service center was established.",
    cost: "₹25,00,000",
    year: "2023-24",
    before: "🏚️", after: "🏢",
    impact_mr: "2722 नागरिकांना लाभ", impact_en: "500 citizens benefited",
  },
  {
    status: "completed",
    mr_title: "पिण्याच्या पाण्याच्या टाकीचे बांधकाम",
    en_title: "Drinking Water Tank Construction",
    mr_desc: "गावातील पिण्याच्या पाण्याच्या टाकीचे बांधकाम पूर्ण झाले. सर्व घरांना नळ जोडणी.",
    en_desc: "Construction of drinking water tank completed. Tap connections provided to all households.",
    cost: "₹28,00,000",
    year: "2021-22",
    before: "🚶", after: "🚰",
    impact_mr: "600 घरे लाभार्थी", impact_en: "1,120 households benefited",
  },
  {
    status: "completed",
    mr_title: "पाणंद रस्ते",
    en_title: "Farm Roads",
    mr_desc: "गावातील सर्व पाणंद रस्ते अतिक्रमणमुक्त करून खुले करण्यात आले.",
    en_desc: "All rural roads in the village have been cleared of encroachments and opened.",
    cost: "₹2,20,000",
    year: "2025-26",
    before: "🚧", after: "🛣️",
    impact_mr: "शेतकऱ्यांची सोय", impact_en: "Convenience for farmers",
  },
  {
    status: "completed",
    mr_title: "आधुनिक रस्ते",
    en_title: "Modern Roads",
    mr_desc: "सिमेंट-काँक्रीट रस्ते आणि वृक्षारोपणामुळे गावाचा विकास वेगाने झाला.",
    en_desc: "The village has developed rapidly with cement-concrete roads and tree plantation.",
    cost: "₹1,48,00,000",
    year: "2024-26",
    before: "🛤️", after: "🛣️",
    impact_mr: "गावाचा कायापालट", impact_en: "Village transformed",
  },
  {
    status: "completed",
    mr_title: "LED स्ट्रीट लाईट",
    en_title: "LED Street Lights",
    mr_desc: "गावातील सर्व रस्त्यांवर एलईडी दिवे बसवण्यात आले आहेत.",
    en_desc: "LED lights have been installed on all roads in the village.",
    cost: "₹7,20,000",
    year: "2025-26",
    before: "🌑", after: "💡",
    impact_mr: "रात्रीची सुरक्षितता", impact_en: "Night safety",
  },
  {
    status: "completed",
    mr_title: "पूर्ण गाव CCTV कॅमेरा",
    en_title: "Village-wide CCTV",
    mr_desc: "गावाची सुरक्षा वाढवण्यासाठी सर्वत्र CCTV कॅमेरे बसवण्यात आले आहेत.",
    en_desc: "CCTV cameras have been installed throughout the village to enhance security.",
    cost: "₹4,20,000",
    year: "2025-26",
    before: "👁️", after: "📹",
    impact_mr: "गुन्हेगारीवर नियंत्रण", impact_en: "Crime control",
  },
  {
    status: "completed",
    mr_title: "पूर्ण गाव ऑडिओ सिस्टम",
    en_title: "Village-wide Audio System",
    mr_desc: "सार्वजनिक सूचना व माहिती देण्यासाठी संपूर्ण गावात ऑडिओ सिस्टम बसवण्यात आली आहे.",
    en_desc: "An audio system has been installed throughout the village for public announcements.",
    cost: "₹3,60,000",
    year: "2025-26",
    before: "🔇", after: "📢",
    impact_mr: "जलद माहिती प्रसार", impact_en: "Fast information spread",
  },
  {
    status: "completed",
    mr_title: "पाणी व जलसंधारण",
    en_title: "Water Conservation",
    mr_desc: "वॉटर एटीएम शुद्ध पाणी पुरवठा",
    en_desc: "Water ATM pure water supply.",
    cost: "₹4,80,000",
    year: "2025-26",
    before: "🏜️", after: "💧",
    impact_mr: "पाणीटंचाई मुक्त गाव", impact_en: "Water scarcity free village",
  },
  {
    status: "completed",
    mr_title: "ऊर्जा व पर्यावरण",
    en_title: "Energy & Environment",
    mr_desc: "शासकीय इमारती व घरांवर सोलर नेट मीटरिंग आणि बायोगॅस प्रकल्प.",
    en_desc: "Solar net metering on buildings/houses and biogas projects.",
    year: "2023-24",
    before: "🔌", after: "☀️",
    impact_mr: "विजेची बचत व स्वच्छता", impact_en: "Energy savings & Sanitation",
  },
  {
    status: "completed",
    mr_title: "आरोग्य व तंत्रज्ञान",
    en_title: "Health & Technology",
    mr_desc: "ऍम्ब्युलन्स सेवा उपलब्ध",
    en_desc: "Ambulance service available.",
    year: "2023-24",
    before: "🤒", after: "🏥",
    impact_mr: "उत्तम आरोग्य सेवा", impact_en: "Better healthcare",
  },
  {
    status: "completed",
    mr_title: "स्मार्ट व डिजिटल सुविधा",
    en_title: "Smart & Digital Facilities",
    mr_desc: "गावात मोफत WiFi आणि GIS आधारित डिजिटल मॅपिंग प्रणाली.",
    en_desc: "Free WiFi in the village and GIS-based digital mapping system.",
    cost: "₹9,00,000",
    year: "2025-26",
    before: "📵", after: "🌐",
    impact_mr: "डिजिटल साक्षरता", impact_en: "Digital literacy",
  },
  {
    status: "completed",
    mr_title: "शिक्षण व विद्यार्थी सुविधा",
    en_title: "Education & Student Facilities",
    mr_desc: "डिजिटल शाळा आणि AI लॅब.",
    en_desc: "Digital school and AI lab.",
    cost: "₹7,69,000",
    year: "2025-26",
    before: "📚", after: "🎓",
    impact_mr: "शैक्षणिक विकास", impact_en: "Educational development",
  },
  {
    status: "completed",
    mr_title: "शेती व कृषी विकास",
    en_title: "Agriculture Development",
    mr_desc: "शेतकऱ्यांसाठी माती परीक्षण आणि महिला व पुरुष शेतकरी उत्पादक संस्था (FPO).",
    en_desc: "Soil testing and separate Farmer Producer Organizations (FPO) for men and women.",
    cost: "₹2,90,000",
    year: "2025-26",
    before: "🌱", after: "🌾",
    impact_mr: "शेतकऱ्यांचे सक्षमीकरण", impact_en: "Farmer empowerment",
  },
  {
    status: "completed",
    mr_title: "रोजगार व उद्योग",
    en_title: "Employment & Industry",
    mr_desc: "युवक-युवतींसाठी गारमेंट सेंटर आणि महिलांसाठी लिज्जत पापड उद्योग सुरु आहे.",
    en_desc: "Garment center for youth and Lijjat Papad industry for women's self-reliance is ongoing.",
    cost: "₹25,00,000",
    year: "2021-22",
    before: "🏘️", after: "💼",
    impact_mr: "रोजगार निर्मिती", impact_en: "Employment generation",
  },
  {
    status: "completed",
    mr_title: "क्रीडा व आरोग्य",
    en_title: "Sports & Health",
    mr_desc: "इंडोर जिम, ओपन जिम आणि सुसज्ज क्रीडासंकुल उभारण्यात आले आहे.",
    en_desc: "Indoor gym, open gym, and a fully equipped sports complex have been built.",
    cost: "₹6,50,000",
    year: "2025-26",
    before: "🏃", after: "🏅",
    impact_mr: "युवकांना संधी", impact_en: "Opportunities for youth",
  },
  {

    status: "ongoing",
    mr_title: "गटर बांधकाम",
    en_title: "Gutter Construction",
    mr_desc: "वॉर्ड क्रमांक ३ मध्ये गटर बांधकाम काम सुरू आहे.",
    en_desc: "Gutter construction work started in Ward No. 3.",
    cost: "₹3,00,000",
    year: "2025-26",
    progress: 40,
    impact_mr: "स्वच्छता व आरोग्य", impact_en: "Sanitation & Health",
  },
  {
    status: "ongoing",
    mr_title: "पाण्याची टाकी (बेघर वसाहत)",
    en_title: "Water Tank (Homeless Colony)",
    mr_desc: "बेघर वसाहत मध्ये पाण्याची टाकी बांधण्याचे काम सुरू आहे.",
    en_desc: "Construction of water tank started in homeless colony.",
    cost: "₹2,50,000",
    year: "2025-26",
    progress: 30,
    impact_mr: "पाण्याची सोय", impact_en: "Water availability",
  },

  {
    status: "proposed",
    mr_title: "इतर शिल्लक रस्त्याचे काँक्रिटीकरण",
    en_title: "Concreting of Remaining Roads",
    mr_desc: "गावातील इतर सर्व शिल्लक राहिलेल्या रस्त्यांचे सिमेंट काँक्रिटीकरण करण्याचा प्रस्ताव आहे.",
    en_desc: "Proposal to concretize all remaining roads in the village.",
    cost: "₹1,50,00,000",
    year: "2025-26",
    impact_mr: "सुधारित दळणवळण", impact_en: "Improved transportation",
  },
  {
    status: "proposed",
    mr_title: "टर्फ ग्राउंड बांधणी",
    en_title: "Turf Ground Construction",
    mr_desc: "तरुणांच्या क्रीडा विकासासाठी गावात नवीन टर्फ ग्राउंड बांधण्याचा प्रस्ताव आहे.",
    en_desc: "Proposal to construct a new turf ground in the village for youth sports development.",
    cost: "₹25,00,000",
    year: "2025-26",
    impact_mr: "क्रीडा विकास", impact_en: "Sports development",
  },
  {
    status: "proposed",
    mr_title: "रिंग रोड बांधकाम",
    en_title: "Ring Road Construction",
    mr_desc: "वाहतूक कोंडी टाळण्यासाठी गावाभोवती रिंग रोड तयार करण्याचा प्रस्ताव आहे.",
    en_desc: "Proposal to construct a ring road around the village to avoid traffic congestion.",
    cost: "₹30,00,000",
    year: "2025-26",
    impact_mr: "वाहतूक सुविधा", impact_en: "Traffic convenience",
  },
];

const statusConfig = {
  completed: { color: "bg-green-100 text-green-700 border-green-200", icon: CheckCircle2, iconColor: "text-green-500" },
  ongoing: { color: "bg-blue-100 text-blue-700 border-blue-200", icon: Clock, iconColor: "text-blue-500" },
  proposed: { color: "bg-amber-100 text-amber-700 border-amber-200", icon: Lightbulb, iconColor: "text-amber-500" },
};

export default function ProjectsPage() {
  const { lang, t } = useLang();
  const [filter, setFilter] = useState("all");

  const labels = { completed: lang === "mr" ? "पूर्ण" : "Completed", ongoing: lang === "mr" ? "प्रगतीपथावर" : "Ongoing", proposed: lang === "mr" ? "प्रस्तावित" : "Proposed" };
  const filtered = filter === "all" ? projects : projects.filter(p => p.status === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4"><div className="bg-white bg-opacity-20 p-4 rounded-full"><Hammer size={48} /></div></div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{lang === "mr" ? "प्रमुख प्रकल्प व उपक्रम" : "Key Projects & Initiatives"}</h1>
        <p className="text-blue-100">{lang === "mr" ? "धामणेर गावाच्या विकासाचा आढावा" : "An overview of Dhamner village development"}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {["all", "completed", "ongoing", "proposed"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all border ${filter === f ? "bg-blue-600 text-white border-blue-600 shadow-lg" : "bg-white text-gray-600 border-gray-200 hover:border-blue-400"}`}
            >
              {f === "all" ? (lang === "mr" ? "सर्व" : "All") : labels[f]}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => {
            const cfg = statusConfig[p.status];
            return (
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 transform border border-gray-100">
                <div className="p-5">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${cfg.color} mb-3`}>
                    <cfg.icon size={12} />{labels[p.status]}
                  </div>
                  {p.status === "completed" && (
                    <div className="flex items-center gap-3 mb-3 text-3xl bg-gray-50 rounded-xl p-3 justify-center">
                      <span>{p.before}</span>
                      <ArrowRight size={20} className="text-gray-400" />
                      <span>{p.after}</span>
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{lang === "mr" ? p.mr_title : p.en_title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{lang === "mr" ? p.mr_desc : p.en_desc}</p>
                  {p.status === "ongoing" && (
                    <div className="mb-3">
                      <div className="flex justify-between text-xs text-gray-500 mb-1"><span>{lang === "mr" ? "प्रगती" : "Progress"}</span><span>{p.progress}%</span></div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${p.progress}%` }} />
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-green-600 font-bold text-sm">
                      {p.cost && <><IndianRupee size={14} />{p.cost.replace("₹", "")}</>}
                    </div>
                    <span className="text-xs text-gray-400">{p.year}</span>
                  </div>
                  <div className="mt-2 text-xs text-blue-600 font-medium">
                    📌 {lang === "mr" ? p.impact_mr : p.impact_en}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 pb-8">
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
