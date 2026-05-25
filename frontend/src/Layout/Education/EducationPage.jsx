import { useLang } from "../../context/LanguageContext";
import { GraduationCap, Star, Mic, BookOpen, Award, ExternalLink } from "lucide-react";

const schools = [
  { mr_name: "जिल्हा परिषद प्राथमिक शाळा धामणेर", en_name: "ZP Primary School Dhamner", mr_medium: "मराठी माध्यम", en_medium: "Marathi Medium", students: 58, mr_classes: "इ. १ ते ४", en_classes: "Std 1 to 4" },
  { mr_name: "कर्मवीर भाऊराव पाटील विद्यालय", en_name: "Karmaveer Bhaurao Patil Vidyalaya", mr_medium: "मराठी माध्यम", en_medium: "Marathi Medium", students: 55, mr_classes: "इ. ५ ते १०", en_classes: "Std 5 to 10" },
];

const scholarships = [
  { mr_name: "राजर्षी छत्रपती शाहू महाराज शिष्यवृत्ती", en_name: "Rajashri Chhatrapati Shahu Maharaj Scholarship", mr_for: "OBC विद्यार्थी", en_for: "OBC Students", url: "https://mahadbt.maharashtra.gov.in/" },
  { mr_name: "स्वाधार शिष्यवृत्ती", en_name: "Swadhar Scholarship", mr_for: "SC विद्यार्थी", en_for: "SC Students", url: "https://mahadbt.maharashtra.gov.in/" },
  { mr_name: "कमवा व शिका योजना", en_name: "Earn and Learn Scheme", mr_for: "सर्व पात्र विद्यार्थी", en_for: "All Eligible Students", url: "https://www.unipune.ac.in/" },
];

const studentOfMonth = [
  { mr_name: "सिद्धेश राजेंद्र शिरसागर", en_name: "Siddhesh Rajendra Shirsagar", percent: "94%", class: "10th", img: "🎖️" },
  { mr_name: "श्रेया नामदेव शिरसागर", en_name: "Shreya Namdev Shirsagar", percent: "88%", class: "12th", img: "🥇" },
];

export default function EducationPage() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4"><div className="bg-white bg-opacity-20 p-4 rounded-full"><GraduationCap size={48} /></div></div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{lang === "mr" ? "शिक्षण व युवा कोपरा" : "Education & Youth Corner"}</h1>
        <p className="text-indigo-100">{lang === "mr" ? "शाळा, शिष्यवृत्ती, यश आणि युवा आवाज" : "Schools, scholarships, achievements and youth voice"}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">

        {/* Schools */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><BookOpen className="text-indigo-500" />{lang === "mr" ? "शाळा माहिती" : "School Information"}</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {schools.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🏫</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-1">{lang === "mr" ? s.mr_name : s.en_name}</h3>
                    <div className="flex flex-wrap gap-2 text-xs mt-2">
                      <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-semibold">{lang === "mr" ? s.mr_medium : s.en_medium}</span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{lang === "mr" ? s.mr_classes : s.en_classes}</span>
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">{s.students} {lang === "mr" ? "विद्यार्थी" : "Students"}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student of the Month */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><Star className="text-yellow-500" />{lang === "mr" ? "यशस्वी विद्यार्थी" : "Successful Students"}</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {studentOfMonth.map((s, i) => (
              <div key={i} className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-amber-200 rounded-2xl p-6 flex items-center gap-5 hover:shadow-lg transition-shadow">
                <span className="text-5xl">{s.img}</span>
                <div>
                  <p className="font-bold text-xl text-gray-800">{lang === "mr" ? s.mr_name : s.en_name}</p>
                  <p className="text-sm text-amber-700 font-semibold mb-1">{lang === "mr" ? "इ." : "Std"} {s.class}</p>
                  <p className="text-sm text-gray-600 font-bold">{lang === "mr" ? "टक्केवारी:" : "Percentage:"} {s.percent}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scholarships */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><Award className="text-purple-500" />{lang === "mr" ? "शिष्यवृत्ती" : "Scholarships"}</h2>
          <div className="space-y-3">
            {scholarships.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between gap-4 hover:shadow-md transition-shadow">
                <div>
                  <p className="font-semibold text-gray-800">{lang === "mr" ? s.mr_name : s.en_name}</p>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-semibold mt-1 inline-block">{lang === "mr" ? s.mr_for : s.en_for}</span>
                </div>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-2 rounded-lg transition-colors shrink-0">
                  <ExternalLink size={12} />{lang === "mr" ? "अर्ज करा" : "Apply"}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
