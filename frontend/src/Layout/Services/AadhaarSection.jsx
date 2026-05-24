import { useLang } from "../../context/LanguageContext";
import { Fingerprint } from "lucide-react";

const localTexts = {
  mr: {
    heroTitle: "आधार दुरुस्ती",
    heroDesc: "आधार कार्ड दुरुस्ती आणि संबंधित सेवांची माहिती",
    sectionTitle: "आधार मधील माहिती दुरुस्ती साठी आपण खालील फॉर्म वापरू शकता.",
    forms: [
      {
        name: "आधार नोंदणी आणि अपडेट - फॉर्म 1",
        file: "/Pdfs/Enrollment-Form-Form_1_Eng.pdf",
      },
      {
        name: "आधार नोंदणी आणि अपडेट - फॉर्म 3",
        file: "/Pdfs/Form_3_Eng.pdf",
      },
      {
        name: "आधार नोंदणी आणि अपडेट - फॉर्म 5",
        file: "/Pdfs/Form_5_Eng.pdf",
      },
    ]
  },
  en: {
    heroTitle: "Aadhaar Correction / Update",
    heroDesc: "Information and services for Aadhaar card corrections",
    sectionTitle: "You can use the following forms to correct details in Aadhaar.",
    forms: [
      {
        name: "Aadhaar Enrollment and Update - Form 1",
        file: "/Pdfs/Enrollment-Form-Form_1_Eng.pdf",
      },
      {
        name: "Aadhaar Enrollment and Update - Form 3",
        file: "/Pdfs/Form_3_Eng.pdf",
      },
      {
        name: "Aadhaar Enrollment and Update - Form 5",
        file: "/Pdfs/Form_5_Eng.pdf",
      },
    ]
  }
};

export default function AadhaarSection() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;

  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file;
    link.click();
  };

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <Fingerprint size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heroTitle}</h1>
        <p className="text-orange-100 max-w-2xl mx-auto text-sm md:text-base">{t.heroDesc}</p>
      </div>
      {/* 📄 PDF SECTION */}
      <div className="bg-gray-100 py-12 px-6 md:px-16">

        <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-6">
          {t.sectionTitle}
        </h2>

        <div className="space-y-4">
          {t.forms.map((form, index) => (
            <div
              key={index}
              onClick={() => handleDownload(form.file)}
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 p-3 rounded transition"
            >
              {/* PDF Icon */}
              <span className="text-green-600 text-xl">📄</span>

              {/* Text */}
              <p className="text-lg md:text-xl font-medium text-yellow-800">
                {form.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}