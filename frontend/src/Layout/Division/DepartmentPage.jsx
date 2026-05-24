import { useLang } from "../../context/LanguageContext";
import { Link } from "react-router-dom";
import { Building, Sprout, HeartPulse, PawPrint, ArrowRight } from "lucide-react";

const localTexts = {
  mr: {
    heroTitle: "विभाग",
    heroDesc: "ग्रामपंचायतीच्या नियंत्रणाखालील विविध प्रशासकीय आणि विकास विभाग",
    btnView: "पहा",
    departments: [
      {
        title: "कृषी विभाग",
        desc: "शेतकऱ्यांसाठी कृषी योजना, मार्गदर्शन आणि सेवा",
        icon: Sprout,
        link: "/agriculture",
        iconColor: "text-green-600",
      },
      {
        title: "आरोग्य विभाग",
        desc: "आरोग्य केंद्र, लसीकरण आणि वैद्यकीय सुविधा",
        icon: HeartPulse,
        link: "/health",
        iconColor: "text-red-500",
      },
      {
        title: "पशुसंवर्धन विभाग",
        desc: "पशुवैद्यकीय सेवा आणि इतर संबंधित माहिती",
        icon: PawPrint,
        link: "/animal",
        iconColor: "text-amber-600",
      },
    ],
  },
  en: {
    heroTitle: "Departments",
    heroDesc: "Various administrative and development departments under the Gram Panchayat",
    btnView: "View Department",
    departments: [
      {
        title: "Agriculture Department",
        desc: "Agricultural schemes, guidance, and services for farmers",
        icon: Sprout,
        link: "/agriculture",
        iconColor: "text-green-600",
      },
      {
        title: "Health Department",
        desc: "Health centers, vaccination, and medical facilities",
        icon: HeartPulse,
        link: "/health",
        iconColor: "text-red-500",
      },
      {
        title: "Animal Husbandry Department",
        desc: "Veterinary services and other related information",
        icon: PawPrint,
        link: "/animal",
        iconColor: "text-amber-600",
      },
    ],
  },
};

export default function DepartmentPage() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <Building size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heroTitle}</h1>
        <p className="text-teal-100 max-w-2xl mx-auto text-sm md:text-base">{t.heroDesc}</p>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <Link to={dept.link} key={index} className="group">
                <div className="h-full bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-between items-center">
                  <div className="flex justify-center mb-5">
                    <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-teal-50 transition duration-300">
                      <Icon className={`w-10 h-10 ${dept.iconColor} group-hover:scale-110 transition duration-300`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-700 transition duration-300 leading-tight">
                    {dept.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                    {dept.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-gray-700 font-semibold group-hover:bg-teal-600 group-hover:text-white rounded-xl transition duration-300 text-sm">
                    {t.btnView}
                    <ArrowRight className="w-4 h-4" />
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
