import {
  Droplet,
  HeartPulse,
  Landmark,
  Baby,
  Home,
  Users,
  Leaf,
  FileText,
} from "lucide-react";
import { useLang } from "../../context/LanguageContext";

export default function GovernmentSchemes() {
  const { lang, t } = useLang();

  const schemes = [
    {
      title: t.jalJeevan,
      icon: Droplet,
      link: "https://water.maharashtra.gov.in/",
    },
    {
      title: t.ayushman,
      icon: HeartPulse,
      link: "/ayushman",
    },
    {
      title: t.pesa,
      icon: Landmark,
      link: "/pesa",
    },
    {
      title: t.pmmvy,
      icon: Baby,
      link: "/pmmvy",
    },
    {
      title: t.bhagyashree,
      icon: Users,
      link: "/ladki",
    },
    {
      title: t.ramai,
      icon: Home,
      link: "/ramai",
    },
    {
      title: t.ladkiBahin,
      icon: Users,
      link: "/ladki-bahin",
    },
    {
      title: t.shabari,
      icon: Home,
      link: "/shabari",
    },
    {
      title: t.swachh,
      icon: Leaf,
      link: "/swachh",
    },
    {
      title: t.finance15,
      icon: FileText,
      link: "/finance15",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <Landmark size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          {t.schemes}
        </h1>
        <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">
          {lang === "mr" 
            ? "ग्रामपंचायतीमार्फत राबविण्यात येणाऱ्या विविध जनकल्याणकारी योजना" 
            : "Various public welfare schemes implemented through the Gram Panchayat"}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6
        ">

          {schemes.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group"
              >
                <div className="
                  bg-white 
                  p-6 
                  rounded-xl 
                  shadow-sm 
                  hover:shadow-lg 
                  hover:bg-green-600 
                  transition duration-300 
                  text-center
                ">

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-green-600 group-hover:text-white transition" />
                  </div>

                  {/* Title */}
                  <h3 className="text-md md:text-lg font-semibold text-gray-800 group-hover:text-white leading-snug">
                    {item.title}
                  </h3>

                </div>
              </a>
            );
          })}

        </div>
      </div>
    </div>
  );
}