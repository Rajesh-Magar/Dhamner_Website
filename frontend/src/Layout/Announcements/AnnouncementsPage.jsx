import { useState } from "react";
import { useLang } from "../../context/LanguageContext";
import { Bell, Download, Calendar, FileText, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";

const announcements = [
  { type: "gramsabha", date: "2025-06-15", mr_title: "ग्रामसभा सूचना — जून २०२५", en_title: "Gram Sabha Notice — June 2025", mr_desc: "दिनांक १५ जून २०२५ रोजी सकाळी ११ वाजता ग्रामसभेचे आयोजन करण्यात आले आहे.", en_desc: "Gram Sabha is scheduled on June 15, 2025 at 11:00 AM.", hasDoc: true, docLink: "#" },
  { type: "scheme", date: "2025-05-20", mr_title: "लाडकी बहिण योजना — नवीन नोंदणी सुरू", en_title: "Ladki Bahin Scheme — New Registration Open", mr_desc: "लाडकी बहिण योजनेसाठी नवीन नोंदणी ३१ मे पर्यंत करता येईल.", en_desc: "New registration for Ladki Bahin Scheme is open till May 31.", hasDoc: false },
  { type: "deadline", date: "2025-05-31", mr_title: "मालमत्ता कर भरणाची अंतिम तारीख", en_title: "Property Tax Payment Deadline", mr_desc: "मालमत्ता कर भरणाची अंतिम तारीख ३१ मे २०२५ आहे. विलंब शुल्क लागू होईल.", en_desc: "Last date for property tax payment is May 31, 2025. Late fees will apply.", hasDoc: false },
  { type: "circular", date: "2025-04-10", mr_title: "जलजीवन मिशन — टेंडर सूचना", en_title: "Jal Jeevan Mission — Tender Notice", mr_desc: "जलजीवन मिशनअंतर्गत कामांसाठी टेंडर मागवण्यात येत आहेत.", en_desc: "Tenders are invited for works under Jal Jeevan Mission.", hasDoc: true, docLink: "#" },
  { type: "gramsabha", date: "2025-03-25", mr_title: "विशेष ग्रामसभा — स्वच्छ भारत", en_title: "Special Gram Sabha — Swachh Bharat", mr_desc: "स्वच्छ भारत मिशनअंतर्गत विशेष ग्रामसभा आयोजित करण्यात येत आहे.", en_desc: "A special Gram Sabha is being organized under Swachh Bharat Mission.", hasDoc: false },
  { type: "scheme", date: "2025-05-01", mr_title: "प्रधानमंत्री किसान सम्मान निधी योजना (PM-KISAN)", en_title: "Pradhan Mantri Kisan Samman Nidhi Yojana (PM-KISAN)", mr_desc: "या योजनेचा शासन निर्णय पाहण्यासाठी किंवा डाउनलोड करण्यासाठी खालील लिंकवर क्लिक करा.", en_desc: "Click the link below to view or download the Government Resolution for this scheme.", hasDoc: true, docLink: "https://www.pmkisan.gov.in/Documents/Revised%20Operational%20Guidelines%20-%20PM-Kisan%20Scheme.pdf" },
  { type: "scheme", date: "2025-05-01", mr_title: "महालाभ योजना – मुख्यमंत्री शेतकरी सन्मान योजना", en_title: "Mahalabh Yojana – Chief Minister Farmer Samman Yojana", mr_desc: "या योजनेचा शासन निर्णय पाहण्यासाठी किंवा डाउनलोड करण्यासाठी खालील लिंकवर क्लिक करा.", en_desc: "Click the link below to view or download the Government Resolution for this scheme.", hasDoc: true, docLink: "https://www.govtschemes.in/sites/default/files/2023-06/Maharashtra%20Namo%20Shetkari%20Maha%20Samman%20Nidhi%20Yojana%20Guidelines.pdf" },
  { type: "scheme", date: "2025-05-01", mr_title: "प्रधानमंत्री कृषी सिंचाई योजना (PMKSY)", en_title: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)", mr_desc: "या योजनेचा शासन निर्णय पाहण्यासाठी किंवा डाउनलोड करण्यासाठी खालील लिंकवर क्लिक करा.", en_desc: "Click the link below to view or download the Government Resolution for this scheme.", hasDoc: true, docLink: "https://megsoil.gov.in/docs/Operational%20Guidelines%20of%20Pradhan%20Mantri%20Krishi%20Sinchayee.pdf" },
  { type: "scheme", date: "2025-05-01", mr_title: "राष्ट्रीय अन्नसुरक्षा अभियान (NFSM)", en_title: "National Food Security Mission (NFSM)", mr_desc: "या योजनेचा शासन निर्णय पाहण्यासाठी किंवा डाउनलोड करण्यासाठी खालील लिंकवर क्लिक करा.", en_desc: "Click the link below to view or download the Government Resolution for this scheme.", hasDoc: true, docLink: "https://www.nfsm.gov.in/Guidelines/NFSNM%20GUIDELINES%20APPROVED%20FY%202025-2026.pdf" },
  { type: "scheme", date: "2025-05-01", mr_title: "शेतकरी अपघात विमा योजना", en_title: "Farmer Accident Insurance Scheme", mr_desc: "या योजनेचा शासन निर्णय पाहण्यासाठी किंवा डाउनलोड करण्यासाठी खालील लिंकवर क्लिक करा.", en_desc: "Click the link below to view or download the Government Resolution for this scheme.", hasDoc: true, docLink: "https://sdomirajgov.com/assets/download/tasgaon/%E0%A4%97%E0%A5%8B%E0%A4%AA%E0%A5%80%E0%A4%A8%E0%A4%BE%E0%A4%A5%20%E0%A4%AE%E0%A5%81%E0%A4%82%E0%A4%A2%E0%A5%87%20%E0%A4%B6%E0%A5%87%E0%A4%A4%E0%A4%95%E0%A4%B0%E0%A5%80%20%E0%A4%85%E0%A4%AA%E0%A4%98%E0%A4%BE%E0%A4%A4%20%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE%20%E0%A4%B8%E0%A4%BE%E0%A4%A8%E0%A5%81%E0%A4%97%E0%A5%8D%E0%A4%B0%E0%A4%B9%20%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%A6%E0%A4%BE%E0%A4%A8%20%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE%202022-23.pdf" },
  { type: "scheme", date: "2025-05-01", mr_title: "माती माती माझा अभिमान – मृद व जलसंधारण योजना", en_title: "Mati Mati Majha Abhiman – Soil & Water Conservation Scheme", mr_desc: "या योजनेचा शासन निर्णय पाहण्यासाठी किंवा डाउनलोड करण्यासाठी खालील लिंकवर क्लिक करा.", en_desc: "Click the link below to view or download the Government Resolution for this scheme.", hasDoc: true, docLink: "https://cdnbbsr.s3waas.gov.in/s30aa08441cd4526b972bb3451d9f8e4ea/uploads/2025/09/20250919291488135.pdf" },
  { type: "scheme", date: "2025-05-01", mr_title: "संत सेवालाल महाराज बंजारा/लभाणा तांडा समृध्दी योजना...", en_title: "Sant Sevalal Maharaj Banjara/Labhana Tanda Samruddhi Yojana...", mr_desc: "या योजनेचा शासन निर्णय पाहण्यासाठी किंवा डाउनलोड करण्यासाठी खालील लिंकवर क्लिक करा.", en_desc: "Click the link below to view or download the Government Resolution for this scheme.", hasDoc: true, docLink: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603301118568120.pdf" },
  { type: "scheme", date: "2025-05-01", mr_title: "सातारा जिल्ह्यातील सातारा तालुक्यातील योजनाबाह्य /अवर्गीकृत रस्ता...", en_title: "Satara District Satara Taluka Non-Plan / Unclassified Road...", mr_desc: "या योजनेचा शासन निर्णय पाहण्यासाठी किंवा डाउनलोड करण्यासाठी खालील लिंकवर क्लिक करा.", en_desc: "Click the link below to view or download the Government Resolution for this scheme.", hasDoc: true, docLink: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603271053096720.pdf" },
  { type: "scheme", date: "2025-05-01", mr_title: "प्रधानमंत्री आवास योजना-ग्रामीण अंतर्गत सन 2025-26 या आर्थिक वर्षासाठी...", en_title: "Pradhan Mantri Awas Yojana-Gramin 2025-26...", mr_desc: "या योजनेचा शासन निर्णय पाहण्यासाठी किंवा डाउनलोड करण्यासाठी खालील लिंकवर क्लिक करा.", en_desc: "Click the link below to view or download the Government Resolution for this scheme.", hasDoc: true, docLink: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603272035486920.pdf" },
  { type: "scheme", date: "2025-05-01", mr_title: "मुख्यमंत्री समृद्ध पंचायत राज अभियानांतर्गत विविध स्तरावरील मुल्यमापनासंदर्भातील सूचना.", en_title: "CM Samruddha Panchayat Raj Abhiyan Evaluation Instructions.", mr_desc: "या योजनेचा शासन निर्णय पाहण्यासाठी किंवा डाउनलोड करण्यासाठी खालील लिंकवर क्लिक करा.", en_desc: "Click the link below to view or download the Government Resolution for this scheme.", hasDoc: true, docLink: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603271034058820.pdf" },
  { type: "scheme", date: "2025-05-01", mr_title: "सन 2024-25 या वर्षीचे यशवंतराव चव्हाण पंचायत राज अभियान पुरस्कार...", en_title: "Yashwantrao Chavan Panchayat Raj Abhiyan Awards 2024-25...", mr_desc: "या योजनेचा शासन निर्णय पाहण्यासाठी किंवा डाउनलोड करण्यासाठी खालील लिंकवर क्लिक करा.", en_desc: "Click the link below to view or download the Government Resolution for this scheme.", hasDoc: true, docLink: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603251723425520.pdf" },
  { type: "scheme", date: "2025-05-01", mr_title: "15 व्या केंद्रीय वित्त आयोगाच्या शिफारशीनुसार पंचायती राज मंत्रालय...", en_title: "15th Central Finance Commission Recommendations...", mr_desc: "या योजनेचा शासन निर्णय पाहण्यासाठी किंवा डाउनलोड करण्यासाठी खालील लिंकवर क्लिक करा.", en_desc: "Click the link below to view or download the Government Resolution for this scheme.", hasDoc: true, docLink: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603251435563920.pdf" },
  { type: "scheme", date: "2025-05-01", mr_title: "सन २०2५-२६ या आर्थिक वर्षातील ग्रामपंचायत कर्मचाऱ्यांच्या वेतन...", en_title: "Gram Panchayat Employees Salary 2025-26...", mr_desc: "या योजनेचा शासन निर्णय पाहण्यासाठी किंवा डाउनलोड करण्यासाठी खालील लिंकवर क्लिक करा.", en_desc: "Click the link below to view or download the Government Resolution for this scheme.", hasDoc: true, docLink: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603251448310420.pdf" },
  { type: "scheme", date: "2025-05-01", mr_title: "मुख्यमंत्री समृद्ध पंचायत राज अभियानांतर्गत राज्यस्तरीय कार्यशाळा...", en_title: "CM Samruddha Panchayat Raj Abhiyan State Level Workshop...", mr_desc: "या योजनेचा शासन निर्णय पाहण्यासाठी किंवा डाउनलोड करण्यासाठी खालील लिंकवर क्लिक करा.", en_desc: "Click the link below to view or download the Government Resolution for this scheme.", hasDoc: true, docLink: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603311015529020.pdf" },
  { type: "scheme", date: "2025-05-01", mr_title: "मुख्यमंत्री समृद्ध पंचायत राज अभियानांतर्गत विविध स्तरावरील मुल्यमापनासंदर्भातील सूचना.", en_title: "CM Samruddha Panchayat Raj Abhiyan Evaluation Instructions.", mr_desc: "या योजनेचा शासन निर्णय पाहण्यासाठी किंवा डाउनलोड करण्यासाठी खालील लिंकवर क्लिक करा.", en_desc: "Click the link below to view or download the Government Resolution for this scheme.", hasDoc: true, docLink: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603271034058820.pdf" }
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
                        <a href={a.docLink || "#"} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                          <Download size={14} />{lang === "mr" ? "दस्तऐवज डाउनलोड करा" : "Download Document"}
                        </a>
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
