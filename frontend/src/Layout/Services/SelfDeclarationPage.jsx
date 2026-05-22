import { FileText } from "lucide-react";
import { useLang } from "../../context/LanguageContext";

const localTexts = {
  mr: {
    heroTitle: "स्वयंघोषणापत्रे",
    subTitle: "आवश्यक कागदपत्रे डाउनलोड करा",
    btnDownload: "Download",
    pdfs: [
      {
        name: "कोणत्याही-योजनेचा-लाभ-न-घेतल्याचे-स्वयंघोषणापत्र",
        file: "/Pdfs/कोणत्याही-योजनेचा-लाभ-न-घेतल्याचे-स्वयंघोषणापत्र.pdf",
      },
      {
        name: "परितव्या-असल्याबाबत-स्वयंघोषणापत्र",
        file: "/Pdfs/परितक्या-असल्याबाबत-स्वयंघोषणापत्र.pdf",
      },
      {
        name: "रहिवाशी-दाखला-स्व-घोषणापत्र",
        file: "/Pdfs/रहिवाशी-दाखला-स्व-घोषणापत्र.pdf",
      },
      {
        name: "विधवा-असल्याबाबत-स्वयंघोषणापत्र",
        file: "/Pdfs/विधवा-असल्याबाबत-स्वयंघोषणापत्र.pdf",
      },
      {
        name: "विभक्त-कुटुंब-असल्यास-स्वयंघोषणापत्र",
        file: "/Pdfs/विभक्त-कुटुंब-असल्यास-स्वयंघोषणापत्र.pdf",
      },
      {
        name: "वीज-जोडणी-स्वयंघोषणापत्र",
        file: "/Pdfs/वीज-जोडणी-स्वयंघोषणापत्र.pdf",
      },
      {
        name: "शौचालय-असल्याबाबत-स्वयंघोषणापत्र",
        file: "/Pdfs/शौचालय-असल्याबाबत-स्वयंघोषणापत्र.pdf",
      },
      {
        name: "हयात-असल्याबाबत-स्वयंघोषणापत्र",
        file: "/Pdfs/हयात-असल्याबाबत-स्वयंघोषणापत्र.pdf",
      },
    ]
  },
  en: {
    heroTitle: "Self-Declaration Forms",
    subTitle: "Download Required Documents",
    btnDownload: "Download",
    pdfs: [
      {
        name: "Self-declaration of not having availed benefits of any scheme",
        file: "/Pdfs/कोणत्याही-योजनेचा-लाभ-न-घेतल्याचे-स्वयंघोषणापत्र.pdf",
      },
      {
        name: "Self-declaration of being deserted / abandoned",
        file: "/Pdfs/परितक्या-असल्याबाबत-स्वयंघोषणापत्र.pdf",
      },
      {
        name: "Self-declaration for residence certificate",
        file: "/Pdfs/रहिवाशी-दाखला-स्व-घोषणापत्र.pdf",
      },
      {
        name: "Self-declaration of being a widow",
        file: "/Pdfs/विधवा-असल्याबाबत-स्वयंघोषणापत्र.pdf",
      },
      {
        name: "Self-declaration of living as a separate family",
        file: "/Pdfs/विभक्त-कुटुंब-असल्यास-स्वयंघोषणापत्र.pdf",
      },
      {
        name: "Self-declaration for electricity connection",
        file: "/Pdfs/वीज-जोडणी-स्वयंघोषणापत्र.pdf",
      },
      {
        name: "Self-declaration of having a toilet",
        file: "/Pdfs/शौचालय-असल्याबाबत-स्वयंघोषणापत्र.pdf",
      },
      {
        name: "Self-declaration of being alive (Life Certificate)",
        file: "/Pdfs/हयात-असल्याबाबत-स्वयंघोषणापत्र.pdf",
      },
    ]
  }
};

export default function SelfDeclarationPage() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;

  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">

        {/* LEFT */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
            {t.heroTitle}
          </h1>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/assets/Documents-Logo.png"
            alt="form"
            className="w-64 md:w-96 lg:w-[420px] object-contain"
          />
        </div>

      </div>

      {/* ================= PDF SECTION ================= */}
      <div className="bg-gray-100 py-10 px-4 md:px-10">

        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center md:text-left">
          {t.subTitle}
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">

          {t.pdfs.map((pdf, index) => (
            <a
              key={index}
              href={pdf.file}
              download
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="flex items-center gap-3">
                <FileText className="text-green-600" />
                <span className="text-sm md:text-lg font-semibold text-yellow-800 hover:underline">
                  {pdf.name}
                </span>
              </div>

              <span className="text-green-600 font-medium text-sm md:text-base">
                {t.btnDownload}
              </span>
            </a>
          ))}

        </div>
      </div>

    </div>
  );
}