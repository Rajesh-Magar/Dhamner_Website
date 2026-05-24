import { FileText, FileSignature } from "lucide-react";
import { useLang } from "../../context/LanguageContext";

const localTexts = {
  mr: {
    heroTitle: "स्वयंघोषणापत्रे",
    heroDesc: "विविध कारणांसाठी स्वयं घोषणापत्र आणि प्रमाणपत्रे मिळवा / डाउनलोड करा",
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
    heroDesc: "Get or download self-declaration forms and certificates online",
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

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <FileSignature size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heroTitle}</h1>
        <p className="text-orange-100 max-w-2xl mx-auto text-sm md:text-base">{t.heroDesc}</p>
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