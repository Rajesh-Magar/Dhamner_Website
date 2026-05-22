import { useState } from "react";
import { useLang } from "../../context/LanguageContext";
import { Bell, Download, Calendar, FileText, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";

const announcements = [
  { type: "gramsabha", date: "2025-06-15", mr_title: "ग्रामसभा सूचना — जून २०२५", en_title: "Gram Sabha Notice — June 2025", mr_desc: "दिनांक १५ जून २०२५ रोजी सकाळी ११ वाजता ग्रामसभेचे आयोजन करण्यात आले आहे.", en_desc: "Gram Sabha is scheduled on June 15, 2025 at 11:00 AM.", hasDoc: true },
  { type: "scheme", date: "2025-05-20", mr_title: "लाडकी बहिण योजना — नवीन नोंदणी सुरू", en_title: "Ladki Bahin Scheme — New Registration Open", mr_desc: "लाडकी बहिण योजनेसाठी नवीन नोंदणी ३१ मे पर्यंत करता येईल.", en_desc: "New registration for Ladki Bahin Scheme is open till May 31.", hasDoc: false },
  { type: "deadline", date: "2025-05-31", mr_title: "मालमत्ता कर भरणाची अंतिम तारीख", en_title: "Property Tax Payment Deadline", mr_desc: "मालमत्ता कर भरणाची अंतिम तारीख ३१ मे २०२५ आहे. विलंब शुल्क लागू होईल.", en_desc: "Last date for property tax payment is May 31, 2025. Late fees will apply.", hasDoc: false },
  { type: "circular", date: "2025-04-10", mr_title: "जलजीवन मिशन — टेंडर सूचना", en_title: "Jal Jeevan Mission — Tender Notice", mr_desc: "जलजीवन मिशनअंतर्गत कामांसाठी टेंडर मागवण्यात येत आहेत.", en_desc: "Tenders are invited for works under Jal Jeevan Mission.", hasDoc: true },
  { type: "gramsabha", date: "2025-03-25", mr_title: "विशेष ग्रामसभा — स्वच्छ भारत", en_title: "Special Gram Sabha — Swachh Bharat", mr_desc: "स्वच्छ भारत मिशनअंतर्गत विशेष ग्रामसभा आयोजित करण्यात येत आहे.", en_desc: "A special Gram Sabha is being organized under Swachh Bharat Mission.", hasDoc: false },
];

const typeConfig = {
  gramsabha: { color: "bg-purple-100 text-purple-700", label_mr: "ग्रामसभा", label_en: "Gram Sabha" },
  scheme: { color: "bg-green-100 text-green-700", label_mr: "योजना", label_en: "Scheme" },
  deadline: { color: "bg-red-100 text-red-700", label_mr: "अंतिम तारीख", label_en: "Deadline" },
  circular: { color: "bg-blue-100 text-blue-700", label_mr: "परिपत्रक", label_en: "Circular" },
};

const upcomingEvents = [
  { date: "Jun 15", mr: "ग्रामसभा", en: "Gram Sabha", color: "bg-purple-500" },
  { date: "May 31", mr: "कर भरणा अंतिम तारीख", en: "Tax Payment Deadline", color: "bg-red-500" },
  { date: "Jun 05", mr: "पर्यावरण दिन कार्यक्रम", en: "Environment Day Event", color: "bg-green-500" },
  { date: "Jun 21", mr: "आरोग्य तपासणी शिबीर", en: "Health Check Camp", color: "bg-blue-500" },
];

export default function AnnouncementsPage() {
  const { lang } = useLang();
  const [expanded, setExpanded] = useState(null);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? announcements : announcements.filter(a => a.type === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4"><div className="bg-white bg-opacity-20 p-4 rounded-full"><Bell size={48} /></div></div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{lang === "mr" ? "घोषणा व परिपत्रके" : "Announcements & Circulars"}</h1>
        <p className="text-purple-100">{lang === "mr" ? "ताज्या सूचना, परिपत्रके व ग्रामसभा नोटिसा" : "Latest notices, circulars and Gram Sabha notices"}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
        {/* Left — Announcements List */}
        <div className="lg:col-span-2">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["all", "gramsabha", "scheme", "deadline", "circular"].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${filter === f ? "bg-purple-600 text-white border-purple-600" : "bg-white text-gray-600 border-gray-200 hover:border-purple-400"}`}>
                {f === "all" ? (lang === "mr" ? "सर्व" : "All") : (lang === "mr" ? typeConfig[f].label_mr : typeConfig[f].label_en)}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((a, i) => {
              const cfg = typeConfig[a.type];
              const isOpen = expanded === i;
              return (
                <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                  <button className="w-full text-left p-5 flex items-start justify-between gap-3" onClick={() => setExpanded(isOpen ? null : i)}>
                    <div className="flex items-start gap-3 flex-1">
                      <FileText size={20} className="text-purple-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cfg.color}`}>
                            {lang === "mr" ? cfg.label_mr : cfg.label_en}
                          </span>
                          <span className="text-xs text-gray-400">{new Date(a.date).toLocaleDateString(lang === "mr" ? "mr-IN" : "en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
                        </div>
                        <h3 className="font-bold text-gray-800">{lang === "mr" ? a.mr_title : a.en_title}</h3>
                      </div>
                    </div>
                    {isOpen ? <ChevronUp size={18} className="text-gray-400 shrink-0 mt-1" /> : <ChevronDown size={18} className="text-gray-400 shrink-0 mt-1" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 border-t border-gray-100">
                      <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-4">{lang === "mr" ? a.mr_desc : a.en_desc}</p>
                      {a.hasDoc && (
                        <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                          <Download size={14} />{lang === "mr" ? "दस्तऐवज डाउनलोड करा" : "Download Document"}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right — Upcoming Events Calendar */}
        <div>
          <div className="bg-white rounded-2xl shadow-md p-6 sticky top-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><Calendar className="text-purple-500" />{lang === "mr" ? "आगामी कार्यक्रम" : "Upcoming Events"}</h3>
            <div className="space-y-3">
              {upcomingEvents.map((e, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`${e.color} text-white text-xs font-bold px-2 py-1 rounded-lg min-w-[48px] text-center`}>{e.date}</div>
                  <span className="text-sm text-gray-700">{lang === "mr" ? e.mr : e.en}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex gap-2">
              <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-700">{lang === "mr" ? "महत्वाचे: कर भरणाची अंतिम तारीख ३१ मे आहे." : "Important: Tax payment deadline is May 31."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
