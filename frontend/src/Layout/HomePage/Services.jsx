import { FileText, Camera, Building2, Image, LayoutDashboard, Heart, MapPin, Info, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";

const getServices = (t) => [
  { title: t.selfDeclaration, desc: t.lang === "en" ? "Self declaration forms & information" : "स्वयंघोषणापत्र व त्यातील माहिती", icon: FileText, link: "/self" },
  { title: t.schemes, desc: t.lang === "en" ? "Information on various government schemes" : "शासनाच्या विविध योजनांची माहिती", icon: FileText, link: "/schemes" },
  { title: t.photoGallery, desc: t.lang === "en" ? "Photos of various events" : "विविध कार्यक्रमांची छायाचित्रे", icon: Camera, link: "/gallery" },
  { title: t.aboutVillage, desc: t.lang === "en" ? "Collection of information about Gram Panchayat" : "ग्रामपंचायती विषयीची माहिती संकलन", icon: Building2, link: "/about" },
  { title: t.lang === "en" ? "Right to Information" : "माहितीचा अधिकार", desc: t.lang === "en" ? "RTI applications and information" : "ग्रामपंचायतीशी संबंधित माहितीचा अधिकार अर्ज व माहिती", icon: Info, link: "/rti" },
  { title: t.documents, desc: t.lang === "en" ? "Various documents & online portal" : "विविध दाखले व ऑनलाईन पोर्टल", icon: LayoutDashboard, link: "/documents" },
  { title: t.health, desc: t.lang === "en" ? "Available health facilities & information" : "उपलब्ध आरोग्य सुविधा व माहिती", icon: Heart, link: "/health" },
  { title: t.lang === "en" ? "GIS Portal" : "GIS पोर्टल", desc: t.lang === "en" ? "Geographic Information System (GIS) and village maps" : "गावाचे भौगोलिक माहिती प्रणाली (GIS) व नकाशे", icon: Globe, link: "https://gis.grampanchayatdhamner.in/admin/login" },
];

const content = {
  mr: { heading: "ऑनलाईन पोर्टलद्वारे उपलब्ध सुविधा", sub: "तुमच्या ग्रामपंचायतीच्या वेबसाईटवर आता सर्व अत्यावश्यक सुविधा उपलब्ध! घरपट्टी भरण्यापासून ते जन्म-मृत्यू दाखला अर्जाच्या स्थितीपर्यंत सर्व माहिती एका क्लिकवर मिळवा." },
  en: { heading: "Services Available via Online Portal", sub: "All essential services are now available on your Gram Panchayat website! Get all information at one click — from paying house tax to checking the status of birth/death certificate applications." },
};

export default function Services() {
  const { lang, t } = useLang();
  const c = content[lang];
  const services = getServices({ ...t, lang });

  return (
    <section className="bg-gray-200 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-devanagari">
            {c.heading}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent to-green-700"></span>
            <span className="w-3 h-3 bg-amber-600 rotate-45"></span>
            <span className="w-16 h-[2px] bg-gradient-to-l from-transparent to-green-700"></span>
          </div>
          <p className="mt-6 text-gray-600 max-w-4xl mx-auto text-sm md:text-lg">{c.sub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            
            const cardContent = (
              <div
                className="
                  h-full
                  bg-white 
                  p-6 
                  rounded-xl 
                  border border-gray-100
                  shadow-sm 
                  hover:bg-gradient-to-br hover:from-green-700 hover:to-green-800 
                  transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                  cursor-pointer
                "
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-green-50 text-green-700 group-hover:bg-white/20 group-hover:text-white transition-all duration-300 shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-300 font-devanagari">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 mt-1.5 group-hover:text-green-50 transition-colors duration-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );

            return item.link.startsWith("http") ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" key={index} className="group">
                {cardContent}
              </a>
            ) : (
              <Link to={item.link} key={index} className="group">
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}