import { useLang } from "../../context/LanguageContext";
import { Link } from "react-router-dom";
import { Settings, CreditCard, FileSignature, ExternalLink, MessageSquareWarning, Fingerprint, ArrowRight } from "lucide-react";

const localTexts = {
  mr: {
    heroTitle: "सेवा",
    heroDesc: "ग्रामपंचायतीमार्फत नागरिकांसाठी उपलब्ध असलेल्या ऑनलाइन सेवा आणि सुविधा",
    btnView: "सेवा वापरा",
    services: [
      {
        title: "कर भरणा",
        desc: "घरपट्टी, पाणीपट्टी आणि इतर कर ऑनलाइन भरा",
        icon: CreditCard,
        link: "/tax",
        iconColor: "text-orange-600",
      },
      {
        title: "स्वयं घोषणापत्र",
        desc: "विविध कारणांसाठी स्वयं घोषणापत्र आणि प्रमाणपत्रे मिळवा",
        icon: FileSignature,
        link: "/self",
        iconColor: "text-purple-600",
      },
      {
        title: "महत्वाच्या लिंक्स",
        desc: "शासकीय योजना आणि महत्त्वाच्या संकेतस्थळांच्या लिंक्स",
        icon: ExternalLink,
        link: "/links",
        iconColor: "text-green-600",
      },
      {
        title: "तक्रार निवारण",
        desc: "तुमच्या तक्रारी नोंदवा आणि त्यांचे निवारण करा",
        icon: MessageSquareWarning,
        link: "/complaint",
        iconColor: "text-red-600",
      },
      {
        title: "आधार दुरुस्ती",
        desc: "आधार कार्ड दुरुस्ती आणि संबंधित सेवांची माहिती",
        icon: Fingerprint,
        link: "/Aadhaar",
        iconColor: "text-indigo-600",
      },
    ],
  },
  en: {
    heroTitle: "Services",
    heroDesc: "Online services and facilities available for citizens through the Gram Panchayat",
    btnView: "Access Service",
    services: [
      {
        title: "Tax Payment",
        desc: "Pay property tax, water tax, and other taxes online",
        icon: CreditCard,
        link: "/tax",
        iconColor: "text-orange-600",
      },
      {
        title: "Self Declaration",
        desc: "Get self-declaration forms and certificates online",
        icon: FileSignature,
        link: "/self",
        iconColor: "text-purple-600",
      },
      {
        title: "Important Links",
        desc: "Links to government portals and key websites",
        icon: ExternalLink,
        link: "/links",
        iconColor: "text-green-600",
      },
      {
        title: "Grievance Section",
        desc: "Register your complaints and track their status",
        icon: MessageSquareWarning,
        link: "/complaint",
        iconColor: "text-red-600",
      },
      {
        title: "Aadhaar Correction",
        desc: "Information and services for Aadhaar card corrections",
        icon: Fingerprint,
        link: "/Aadhaar",
        iconColor: "text-indigo-600",
      },
    ],
  },
};

export default function ServicesPage() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <Settings size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heroTitle}</h1>
        <p className="text-orange-100 max-w-2xl mx-auto text-sm md:text-base">{t.heroDesc}</p>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {t.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link to={service.link} key={index} className="group flex">
                <div className="w-full bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-between items-center">
                  <div className="flex justify-center mb-5">
                    <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-orange-50 transition duration-300">
                      <Icon className={`w-10 h-10 ${service.iconColor} group-hover:scale-110 transition duration-300`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-700 transition duration-300 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-8 leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-gray-700 font-semibold group-hover:bg-orange-600 group-hover:text-white rounded-xl transition duration-300 text-sm">
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
