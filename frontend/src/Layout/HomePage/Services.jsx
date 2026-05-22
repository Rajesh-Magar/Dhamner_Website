import {
  FileText,
  Camera,
  Building2,
  Image,
  LayoutDashboard,
  Heart,
  MapPin,
  Wheat,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "स्वयंघोषणापत्र",
      desc: "स्वयंघोषणापत्र व त्यातील माहिती",
      icon: FileText,
      link: "/self",
    },
    {
      title: "योजना",
      desc: "शासनाच्या विविध योजनांची माहिती",
      icon: FileText,
      link: "/schemes",
    },
    {
      title: "छायाचित्रे",
      desc: "विविध कार्यक्रमांची छायाचित्रे",
      icon: Camera,
      link: "/gallery",
    },
    {
      title: "ग्रामपंचायती विषयी",
      desc: "ग्रामपंचायती विषयीची माहिती संकलन",
      icon: Building2,
      link: "/about",
    },
    {
      title: "मान्यवर",
      desc: "मान्यवर व त्यांच्या भेटीचे क्षण",
      icon: Image,
      link: "/officers",
    },
    {
      title: "दाखले",
      desc: "विविध दाखले व ऑनलाईन पोर्टल",
      icon: LayoutDashboard,
      link: "/documents",
    },
    {
      title: "आरोग्य",
      desc: "उपलब्ध आरोग्य सुविधा व माहिती",
      icon: Heart,
      link: "/health",
    },
    {
      title: "नकाशा",
      desc: " गावचा नकाशा व माहिती",
      icon: MapPin,
      link: "/map",
    },
  ];

  return (
    <section className="bg-gray-200 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-devanagari">
            ऑनलाईन पोर्टलद्वारे उपलब्ध सुविधा
          </h2>

          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent to-green-700"></span>
            <span className="w-3 h-3 bg-amber-600 rotate-45"></span>
            <span className="w-16 h-[2px] bg-gradient-to-l from-transparent to-green-700"></span>
          </div>

          <p className="mt-6 text-gray-600 max-w-4xl mx-auto text-sm md:text-lg">
            तुमच्या ग्रामपंचायतीच्या वेबसाईटवर आता सर्व अत्यावश्यक सुविधा उपलब्ध!
            घरपट्टी भरण्यापासून ते जन्म-मृत्यू दाखला अर्जाच्या स्थितीपर्यंत सर्व
            माहिती एका क्लिकवर मिळवा.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link to={item.link} key={index} className="group">
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
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}