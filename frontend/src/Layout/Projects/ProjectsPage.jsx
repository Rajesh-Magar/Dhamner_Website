import { useState } from "react";
import { useLang } from "../../context/LanguageContext";
import { Hammer, CheckCircle2, Clock, Lightbulb, IndianRupee, ArrowRight } from "lucide-react";

const projects = [
  {
    status: "completed",
    mr_title: "ग्रामपंचायत कार्यालय नूतनीकरण",
    en_title: "Gram Panchayat Office Renovation",
    mr_desc: "ग्रामपंचायत कार्यालयाचे संपूर्ण नूतनीकरण करण्यात आले. डिजिटल सेवा केंद्र स्थापन केले.",
    en_desc: "Complete renovation of the Gram Panchayat office. A digital service center was established.",
    cost: "₹12,50,000",
    year: "2023-24",
    before: "🏚️", after: "🏢",
    impact_mr: "५०० नागरिकांना लाभ", impact_en: "500 citizens benefited",
  },
  {
    status: "completed",
    mr_title: "पिण्याच्या पाण्याच्या टाकीचे बांधकाम",
    en_title: "Drinking Water Tank Construction",
    mr_desc: "गावातील पिण्याच्या पाण्याच्या टाकीचे बांधकाम पूर्ण झाले. सर्व घरांना नळ जोडणी.",
    en_desc: "Construction of drinking water tank completed. Tap connections provided to all households.",
    cost: "₹28,00,000",
    year: "2023-24",
    before: "🚶", after: "🚰",
    impact_mr: "१,१२० घरे लाभार्थी", impact_en: "1,120 households benefited",
  },
  {
    status: "ongoing",
    mr_title: "मुख्य रस्त्याचे सिमेंटीकरण",
    en_title: "Main Road Cementation",
    mr_desc: "गावातील मुख्य रस्त्याचे सिमेंटीकरण सुरू आहे. ८०% काम पूर्ण.",
    en_desc: "Cementation of the village main road is underway. 80% work completed.",
    cost: "₹45,00,000",
    year: "2024-25",
    progress: 80,
    impact_mr: "सर्व वार्डांना फायदा", impact_en: "All wards to benefit",
  },
  {
    status: "ongoing",
    mr_title: "सौर ऊर्जा स्ट्रीट लाइटिंग",
    en_title: "Solar Street Lighting",
    mr_desc: "सौर ऊर्जाचलित पथदिवे बसवण्याचे काम प्रगतीपथावर आहे.",
    en_desc: "Installation of solar-powered street lights is in progress.",
    cost: "₹18,50,000",
    year: "2024-25",
    progress: 60,
    impact_mr: "रात्रीची सुरक्षा वाढली", impact_en: "Enhanced night safety",
  },
  {
    status: "proposed",
    mr_title: "डिजिटल ग्रंथालय",
    en_title: "Digital Library",
    mr_desc: "युवकांसाठी डिजिटल ग्रंथालय उभारण्याचा प्रस्ताव मंजूर झाला आहे.",
    en_desc: "Proposal for a digital library for youth has been approved.",
    cost: "₹8,00,000",
    year: "2025-26",
    impact_mr: "५०० युवकांना लाभ", impact_en: "500 youth to benefit",
  },
  {
    status: "proposed",
    mr_title: "शेतकरी सेवा केंद्र",
    en_title: "Farmer Service Center",
    mr_desc: "शेतकऱ्यांसाठी एकात्मिक सेवा केंद्र उभारण्याचे नियोजन.",
    en_desc: "Planning an integrated service center for farmers.",
    cost: "₹15,00,000",
    year: "2025-26",
    impact_mr: "३०० शेतकऱ्यांना लाभ", impact_en: "300 farmers to benefit",
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
                      <IndianRupee size={14} />{p.cost.replace("₹", "")}
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
      </div>
    </div>
  );
}
