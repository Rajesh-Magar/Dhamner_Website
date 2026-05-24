import {
  Droplet,
  HeartPulse,
  Landmark,
  Baby,
  Home,
  Users,
  Leaf,
  FileText,
  Download,
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

        {/* Govt GRs Section */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 border-b-2 border-green-500 pb-2 inline-block">
            {lang === "mr" ? "केंद्र/राज्य/जिल्हा स्थरावरील लागू योजना" : "Applicable Schemes at Central/State/District Level"}
          </h2>
          <div className="space-y-4">
            {[
              { title: "प्रधानमंत्री किसान सम्मान निधी योजना (PM-KISAN)", link: "https://www.pmkisan.gov.in/Documents/Revised%20Operational%20Guidelines%20-%20PM-Kisan%20Scheme.pdf" },
              { title: "महालाभ योजना – मुख्यमंत्री शेतकरी सन्मान योजना", link: "https://www.govtschemes.in/sites/default/files/2023-06/Maharashtra%20Namo%20Shetkari%20Maha%20Samman%20Nidhi%20Yojana%20Guidelines.pdf" },
              { title: "प्रधानमंत्री कृषी सिंचाई योजना (PMKSY)", link: "https://megsoil.gov.in/docs/Operational%20Guidelines%20of%20Pradhan%20Mantri%20Krishi%20Sinchayee.pdf" },
              { title: "राष्ट्रीय अन्नसुरक्षा अभियान (NFSM)", link: "https://www.nfsm.gov.in/Guidelines/NFSNM%20GUIDELINES%20APPROVED%20FY%202025-2026.pdf" },
              { title: "शेतकरी अपघात विमा योजना", link: "https://sdomirajgov.com/assets/download/tasgaon/%E0%A4%97%E0%A5%8B%E0%A4%AA%E0%A5%80%E0%A4%A8%E0%A4%BE%E0%A4%A5%20%E0%A4%AE%E0%A5%81%E0%A4%82%E0%A4%A2%E0%A5%87%20%E0%A4%B6%E0%A5%87%E0%A4%A4%E0%A4%95%E0%A4%B0%E0%A5%80%20%E0%A4%85%E0%A4%AA%E0%A4%98%E0%A4%BE%E0%A4%A4%20%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE%20%E0%A4%B8%E0%A4%BE%E0%A4%A8%E0%A5%81%E0%A4%97%E0%A5%8D%E0%A4%B0%E0%A4%B9%20%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%A6%E0%A4%BE%E0%A4%A8%20%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE%202022-23.pdf" },
              { title: "माती माती माझा अभिमान – मृद व जलसंधारण योजना", link: "https://cdnbbsr.s3waas.gov.in/s30aa08441cd4526b972bb3451d9f8e4ea/uploads/2025/09/20250919291488135.pdf" },
              { title: "संत सेवालाल महाराज बंजारा/लभाणा तांडा समृध्दी योजना लेखाशिर्ष (2515 2753) अंतर्गत सन 2024-25 या आर्थिक वर्षात मंजूर कामांना निधी वितरीत करणेबाबत.", link: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603301118568120.pdf" },
              { title: "सातारा जिल्ह्यातील सातारा तालुक्यातील योजनाबाह्य /अवर्गीकृत रस्ता ग्रामीण मार्ग म्हणून रस्ते विकास योजना 2001 -21 मध्ये समाविष्ठ करणेबाबत", link: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603271053096720.pdf" },
              { title: "प्रधानमंत्री आवास योजना-ग्रामीण अंतर्गत सन 2025-26 या आर्थिक वर्षासाठी आदिवासी विभागांतर्गत अनुसूचित जमाती प्रवर्गाकरिता अतिरिक्त राज्य हिस्सा (100) या योजनेकरिता रु.40,00,00,000/-एवढा निधी वितरीत करणेबाबत.", link: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603272035486920.pdf" },
              { title: "मुख्यमंत्री समृद्ध पंचायत राज अभियानांतर्गत विविध स्तरावरील मुल्यमापनासंदर्भातील सूचना.", link: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603271034058820.pdf" },
              { title: "सन 2024-25 (मुल्यांकन वर्ष 2023-24) या वर्षीचे यशवंतराव चव्हाण पंचायत राज अभियान पुरस्कार व कार्यक्रमासाठी शिल्लक निधी वितरण करणे बाबत (आर्थिक वर्षे 2025-26).", link: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603251723425520.pdf" },
              { title: "15 व्या केंद्रीय वित्त आयोगाच्या शिफारशीनुसार पंचायती राज मंत्रालय, भारत सरकार यांनी प्रशासक कार्यरत असल्यामुळे ज्या ग्रामीण स्थानिक स्वराज्य संस्थांचा निधी रोखून ठेवला होता त्यापैकी ज्या ग्रामीण स्थानिक स्वराज्य संस्थांमध्ये निवडणूका होऊन लोकनियुक्त प्रतिनिधींची नियुक्ती झाली आहे अशा ग्रामीण स्थानिक स्वराज्य संस्थांचा सन 2024-25 चा पहिल्या व दुसऱ्या हप्त्याचा अबंधित निधी रू. 301.6474 कोटी वितरीत करण्याबाबत.", link: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603251435563920.pdf" },
              { title: "सन २०2५-२६ या आर्थिक वर्षातील ग्रामपंचायत कर्मचाऱ्यांच्या वेतन व सरपंच,उपसरपंच यांचे मानधन व सदस्य बैठक भत्ता तसेच ग्रामपंचायत कर्मचारी भविष्य निर्वाह निधी यासाठी शासन सहायक अनुदान हिस्सा वितरीत करणेबाबत.", link: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603251448310420.pdf" },
              { title: "मुख्यमंत्री समृद्ध पंचायत राज अभियानांतर्गत राज्यस्तरीय कार्यशाळा आयोजनाकरिता आलेल्या खर्चासाठी निधी वितरीत करण्याबाबत.", link: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603311015529020.pdf" },
              { title: "मुख्यमंत्री समृद्ध पंचायत राज अभियानांतर्गत विविध स्तरावरील मुल्यमापनासंदर्भातील सूचना.", link: "https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202603271034058820.pdf" }
            ].map((doc, idx) => (
              <a 
                key={idx} 
                href={doc.link} 
                target="_blank" 
                rel="noreferrer"
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow flex items-center justify-between p-5 gap-4 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full mt-1 shrink-0 group-hover:bg-green-200 transition-colors">
                    <FileText size={22} className="text-green-700" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                        {lang === "mr" ? "शासन निर्णय" : "GR"}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base leading-snug group-hover:text-green-700 transition-colors">
                      {doc.title}
                    </h3>
                  </div>
                </div>
                <div className="shrink-0">
                  <button className="flex items-center justify-center bg-gray-50 hover:bg-green-600 hover:text-white text-gray-500 w-10 h-10 rounded-full transition-colors border border-gray-200 hover:border-transparent">
                    <Download size={18} />
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}