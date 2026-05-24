import {
  FileText,
  FileCheck,
  Home,
  Landmark,
  UserCheck,
  Building,
  Briefcase,
  BadgeCheck,
  Hammer,
  Baby,
  HeartPulse,
  Users,
  ArrowRight,

} from "lucide-react";

import { Link } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";

const localTexts = {
  mr: {
    heroTitle: "दस्तऐवज",
    btnApply: "अर्ज करा",
    documents: [
      { title: "जन्म प्रमाणपत्र", desc: "जन्म प्रमाणपत्र ऑनलाइन मिळवा", icon: Baby, link: "/birth" },
      { title: "मृत्यू प्रमाणपत्र", desc: "मृत्यू प्रमाणपत्र ऑनलाइन मिळवा", icon: HeartPulse, link: "/death" },
      { title: "विवाह प्रमाणपत्र", desc: "विवाह प्रमाणपत्र ऑनलाइन मिळवा", icon: Users, link: "/marriage" },
      { title: "रहिवासी प्रमाणपत्र", desc: "रहिवासी प्रमाणपत्र ऑनलाइन मिळवा", icon: FileText, link: "/residence" },
      { title: "व्यवसाय परवाना प्रमाणपत्र", desc: "व्यवसाय प्रमाणपत्र ऑनलाइन मिळवा", icon: Briefcase, link: "/business" },
      { title: "मालमत्ता प्रमाणपत्र", desc: "मालमत्ता प्रमाणपत्र ऑनलाइन मिळवा", icon: Building, link: "/property" },
      { title: "बांधकाम परवानगी", desc: "बांधकाम परवानगी प्रमाणपत्र ऑनलाइन मिळवा", icon: Hammer, link: "/construction" },
      { title: "थकबाकी नसल्याचे प्रमाणपत्र", desc: "थकबाकी नसल्याचे प्रमाणपत्र ऑनलाइन मिळवा", icon: BadgeCheck, link: "/no-dues" },
      { title: "वयाचा दाखला", desc: "वयाचा दाखला ऑनलाइन मिळवा", icon: UserCheck, link: "/age-proof" },
      { title: "जमिनीचा उतारा", desc: "जमिनीचा उतारा ऑनलाइन मिळवा", icon: Landmark, link: "/land-record" },
      { title: "डिजिटल स्वाक्षरीत ७/१२", desc: "७/१२ उतारा ऑनलाइन मिळवा", icon: FileCheck, link: "/712" },
      { title: "प्रॉपर्टी कार्ड", desc: "प्रॉपर्टी कार्ड ऑनलाइन मिळवा", icon: FileText, link: "/property-card" },
      { title: "मालमत्ता हस्तांतरण", desc: "मालमत्ता हस्तांतरण प्रमाणपत्र ऑनलाइन मिळवा", icon: Home, link: "/transfer" },
    ]
  },
  en: {
    heroTitle: "Documents",
    btnApply: "Apply Now",
    documents: [
      { title: "Birth Certificate", desc: "Get Birth Certificate online", icon: Baby, link: "/birth" },
      { title: "Death Certificate", desc: "Get Death Certificate online", icon: HeartPulse, link: "/death" },
      { title: "Marriage Certificate", desc: "Get Marriage Certificate online", icon: Users, link: "/marriage" },
      { title: "Residence Certificate", desc: "Get Residence Certificate online", icon: FileText, link: "/residence" },
      { title: "Business License Certificate", desc: "Get Business License online", icon: Briefcase, link: "/business" },
      { title: "Property Certificate", desc: "Get Property Certificate online", icon: Building, link: "/property" },
      { title: "Building Permission", desc: "Get Building Permission online", icon: Hammer, link: "/construction" },
      { title: "No Dues Certificate", desc: "Get No Dues Certificate online", icon: BadgeCheck, link: "/no-dues" },
      { title: "Age Certificate", desc: "Get Age Proof Certificate online", icon: UserCheck, link: "/age-proof" },
      { title: "Land Record / 8A", desc: "Get Land Record / 8A online", icon: Landmark, link: "/land-record" },
      { title: "Digitally Signed 7/12", desc: "Get 7/12 Record online", icon: FileCheck, link: "/712" },
      { title: "Property Card", desc: "Get Property Card online", icon: FileText, link: "/property-card" },
      { title: "Property Transfer", desc: "Get Property Transfer online", icon: Home, link: "/transfer" },
    ]
  }
};

export default function DocumentsSection() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <FileText size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          {t.heroTitle}
        </h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-sm md:text-base">
          {lang === "mr" 
            ? "ग्रामपंचायत स्तरावर उपलब्ध असलेले विविध दाखले आणि प्रमाणपत्रे" 
            : "Various certificates and documents available at the Gram Panchayat level"}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* GRID */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 sm:gap-8
        ">

          {t.documents.map((doc, index) => {
            const Icon = doc.icon;

            return (
              <Link
                to={doc.link}
                key={index}
                className="group"
              >
                <div className="
                  h-full
                  bg-white 
                  p-6 sm:p-8 
                  rounded-xl 
                  border 
                  shadow-sm
                  hover:shadow-xl 
                  transition-all duration-300 
                  text-center
                  flex flex-col justify-between
                ">

                  {/* ICON */}
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 group-hover:scale-110 transition" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 leading-snug">
                    {doc.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm sm:text-base text-gray-600 mb-6">
                    {doc.desc}
                  </p>

                  {/* BUTTON */}
                  <div className="flex justify-center">
                    <span className="
                      inline-flex items-center gap-2 
                      px-4 sm:px-5 py-2 
                      text-sm sm:text-base
                      bg-gray-100 
                      group-hover:bg-green-600 
                      group-hover:text-white 
                      rounded-lg 
                      transition
                    ">
                      {t.btnApply}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>

                </div>
              </Link>
            );
          })}

        </div>
      </div>
    </div>
  );
}