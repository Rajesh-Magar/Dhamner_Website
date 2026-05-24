import { useState } from "react";
import { useLang } from "../../context/LanguageContext";
import { Briefcase, Search, ExternalLink, Star } from "lucide-react";

const talentDirectory = [
  { mr_name: "रामचंद्र पाटील", en_name: "Ramchandra Patil", mr_skill: "इलेक्ट्रिशियन", en_skill: "Electrician", phone: "98765-43210", experience: 10 },
  { mr_name: "सुनीता जाधव", en_name: "Sunita Jadhav", mr_skill: "शिंपी (दर्जी)", en_skill: "Tailor", phone: "87654-32109", experience: 8 },
  { mr_name: "प्रकाश शिंदे", en_name: "Prakash Shinde", mr_skill: "सुतार", en_skill: "Carpenter", phone: "76543-21098", experience: 15 },
  { mr_name: "मनीषा कदम", en_name: "Manisha Kadam", mr_skill: "सौंदर्य तज्ञ", en_skill: "Beauty Specialist", phone: "65432-10987", experience: 5 },
  { mr_name: "संजय माने", en_name: "Sanjay Mane", mr_skill: "प्लंबर", en_skill: "Plumber", phone: "54321-09876", experience: 12 },
  { mr_name: "विमल पवार", en_name: "Vimal Pawar", mr_skill: "वेल्डर", en_skill: "Welder", phone: "43210-98765", experience: 7 },
];

const jobs = [
  { mr_title: "ग्रामपंचायत डेटा एंट्री ऑपरेटर", en_title: "GP Data Entry Operator", mr_org: "यशवंत ग्रामपंचायत", en_org: "Yashwant Gram Panchayat", deadline: "2025-06-30", mr_type: "शासकीय", en_type: "Government" },
  { mr_title: "आशा कार्यकर्त्या", en_title: "ASHA Worker", mr_org: "प्राथमिक आरोग्य केंद्र", en_org: "Primary Health Centre", deadline: "2025-06-15", mr_type: "आरोग्य", en_type: "Health" },
  { mr_title: "स्वयंसहायता गट प्रशिक्षण", en_title: "Self Help Group Training", mr_org: "महाराष्ट्र SHG प्रकल्प", en_org: "Maharashtra SHG Project", deadline: "2025-07-01", mr_type: "SHG", en_type: "SHG" },
];

const portals = [
  { name: "Mahaswayam", url: "https://mahaswayam.in/", mr_desc: "महाराष्ट्र रोजगार पोर्टल", en_desc: "Maharashtra Employment Portal" },
  { name: "NCS Portal", url: "https://www.ncs.gov.in/", mr_desc: "राष्ट्रीय करिअर सेवा", en_desc: "National Career Service" },
  { name: "PMKVY", url: "https://www.pmkvyofficial.org/", mr_desc: "PM कौशल्य विकास योजना", en_desc: "PM Skill Development Scheme" },
];

export default function EmploymentPage() {
  const { lang } = useLang();
  const [search, setSearch] = useState("");
  const filtered = talentDirectory.filter(t =>
    (lang === "mr" ? t.mr_skill : t.en_skill).toLowerCase().includes(search.toLowerCase()) ||
    (lang === "mr" ? t.mr_name : t.en_name).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4"><div className="bg-white bg-opacity-20 p-4 rounded-full"><Briefcase size={48} /></div></div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{lang === "mr" ? "रोजगार व कौशल्य विकास" : "Employment & Skill Development"}</h1>
        <p className="text-teal-100">{lang === "mr" ? "स्थानिक रोजगार, SHG उपक्रम व प्रतिभा निर्देशिका" : "Local jobs, SHG initiatives & talent directory"}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">

        {/* Job Listings */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><Briefcase className="text-teal-500" />{lang === "mr" ? "उपलब्ध रोजगार" : "Available Jobs"}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {jobs.map((j, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <span className="inline-block text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-bold mb-2">{lang === "mr" ? j.mr_type : j.en_type}</span>
                <h3 className="font-bold text-gray-800 mb-1">{lang === "mr" ? j.mr_title : j.en_title}</h3>
                <p className="text-sm text-gray-500 mb-3">{lang === "mr" ? j.mr_org : j.en_org}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{lang === "mr" ? "अंतिम तारीख:" : "Deadline:"} {new Date(j.deadline).toLocaleDateString(lang === "mr" ? "mr-IN" : "en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                </div>
                <button className="mt-3 w-full bg-teal-600 hover:bg-teal-700 text-white text-sm py-2 rounded-lg transition-colors font-semibold">
                  {lang === "mr" ? "अर्ज करा" : "Apply Now"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Talent Directory */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2"><Star className="text-yellow-500" />{lang === "mr" ? "गाव प्रतिभा निर्देशिका" : "Village Talent Directory"}</h2>
          <p className="text-gray-500 text-sm mb-5">{lang === "mr" ? "गावातील कुशल कारागीर व सेवा पुरवठादार" : "Skilled artisans and service providers in the village"}</p>
          <div className="relative mb-5">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder={lang === "mr" ? "कौशल्य किंवा नाव शोधा..." : "Search skill or name..."}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xl font-bold shrink-0">
                  {(lang === "mr" ? t.mr_name : t.en_name).charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{lang === "mr" ? t.mr_name : t.en_name}</p>
                  <p className="text-teal-600 text-xs font-semibold">{lang === "mr" ? t.mr_skill : t.en_skill}</p>
                  <p className="text-gray-400 text-xs">{t.experience} {lang === "mr" ? "वर्षे अनुभव" : "yrs experience"} · 📞 {t.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Employment Portals */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2"><ExternalLink className="text-blue-500" />{lang === "mr" ? "उपयुक्त पोर्टल" : "Useful Portals"}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {portals.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 transform flex items-center gap-4 border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"><ExternalLink size={20} className="text-blue-600" /></div>
                <div><p className="font-bold text-gray-800">{p.name}</p><p className="text-sm text-gray-500">{lang === "mr" ? p.mr_desc : p.en_desc}</p></div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
