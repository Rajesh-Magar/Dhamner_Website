import React, { useState } from "react";
import { useLang } from "../../context/LanguageContext";
import { PawPrint } from "lucide-react";

const Animal = () => {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState("big");

  // 🐄 BIG ANIMALS DATA
  const bigAnimalsData = {
    mr: [
      { id: 1, disease: "FMD लाळ खुरकत/तोंडखुरी रोग", primary: "जन्मानंतर चौथ्या महिन्यात", booster: "पहिला डोस घेतल्यानंतर 1 महिन्याने", annual: "वर्षातून दोन वेळा – मार्च आणि सप्टेंबर" },
      { id: 2, disease: "HS (घटसर्प)", primary: "वयाच्या सहाव्या महिन्यात", booster: "—", annual: "दरवर्षी मे महिन्यात" },
      { id: 3, disease: "ब्लॅक क्वार्टर (फुगवा)", primary: "वयाच्या सहाव्या महिन्यात", booster: "—", annual: "दरवर्षी मे महिन्यात" },
      { id: 4, disease: "लम्पी स्किन डिसीज", primary: "वयाच्या चौथ्या महिन्यात", booster: "—", annual: "दरवर्षी मे महिन्यात" },
      { id: 5, disease: "थेलिओसिस", primary: "वयाच्या तिसऱ्या महिन्यात", booster: "—", annual: "फक्त बाधित गोठ्यांमध्ये, दर 3 वर्षांनी" },
      { id: 6, disease: "अँथ्रॅक्स", primary: "फक्त वारंवार बाधित भागात वयाच्या सहाव्या महिन्यात", booster: "—", annual: "दरवर्षी ऑगस्ट महिन्यात, पुढील 3 वर्ष" },
      { id: 7, disease: "ब्रुसेलोसिस", primary: "वयाच्या 4 ते 8 महिन्यांदरम्यान (वासरू होण्याच्या काळात)", booster: "—", annual: "—" },
      { id: 8, disease: "रेबीज", primary: "कुत्रे, मांजरे, कोल्हे, रानटी मांसाहारी प्राणी", booster: "जन्मानंतर दिवस 0, 3, 7, 14, 28 आणि 90", annual: "5 डोस, इतरांना किमान 3 डोस" },
    ],
    en: [
      { id: 1, disease: "FMD (Foot and Mouth Disease)", primary: "In the 4th month after birth", booster: "1 month after the first dose", annual: "Twice a year – March and September" },
      { id: 2, disease: "HS (Haemorrhagic Septicemia)", primary: "In the 6th month of age", booster: "—", annual: "Every year in May" },
      { id: 3, disease: "Black Quarter (BQ)", primary: "In the 6th month of age", booster: "—", annual: "Every year in May" },
      { id: 4, disease: "Lumpy Skin Disease (LSD)", primary: "In the 4th month of age", booster: "—", annual: "Every year in May" },
      { id: 5, disease: "Theileriosis", primary: "In the 3rd month of age", booster: "—", annual: "Only in affected sheds, every 3 years" },
      { id: 6, disease: "Anthrax", primary: "Only in repeatedly affected areas at 6 months of age", booster: "—", annual: "Every year in August, for next 3 years" },
      { id: 7, disease: "Brucellosis", primary: "Between 4 to 8 months of age (calfhood)", booster: "—", annual: "—" },
      { id: 8, disease: "Rabies", primary: "Dogs, cats, foxes, wild carnivores", booster: "Day 0, 3, 7, 14, 28 and 90 after birth", annual: "5 doses, minimum 3 doses for others" },
    ]
  };

  // 🐐 SMALL ANIMALS DATA
  const smallAnimalsData = {
    mr: [
      { disease: "लाळ खुरकत (Foot and Mouth)", primary: "वयाच्या तिसऱ्या महिन्यात", annual: "वर्षातून दोन वेळा मार्च व सप्टेंबर महिन्यात" },
      { disease: "घटसर्प (Haemorrhagic Septicemia)", primary: "वयाच्या तिसऱ्या महिन्यात", annual: "एप्रिल महिन्यात" },
      { disease: "आंत्रविकार (Enterotoxaemia)", primary: "गर्भवती असताना लसीकरण", annual: "मे महिन्यात पहिली मात्रा व 15-21 दिवसांनी दुसरी" },
      { disease: "नील जिभा (Blue Tongue)", primary: "वयाच्या तिसऱ्या महिन्यात", annual: "जुलै महिन्यात" },
      { disease: "अँथ्रॅक्स (Anthrax)", primary: "वयाच्या तिसऱ्या महिन्यात", annual: "ऑगस्ट महिन्यात" },
      { disease: "धनुर्वात (Tetanus)", primary: "वयाच्या तिसऱ्या महिन्यात", annual: "ऑक्टोबर महिन्यात" },
      { disease: "मेंढ्यांची देवी (Sheep Pox)", primary: "वयाच्या तिसऱ्या महिन्यात", annual: "डिसेंबर महिन्यात" },
      { disease: "शेळ्यांची देवी (Goat Pox)", primary: "वयाच्या तिसऱ्या महिन्यात", annual: "डिसेंबर महिन्यात" },
    ],
    en: [
      { disease: "Foot and Mouth Disease (FMD)", primary: "In the 3rd month of age", annual: "Twice a year – March and September" },
      { disease: "Haemorrhagic Septicemia (HS)", primary: "In the 3rd month of age", annual: "In April" },
      { disease: "Enterotoxaemia (ET)", primary: "Vaccination during pregnancy", annual: "First dose in May & second dose after 15-21 days" },
      { disease: "Blue Tongue (BT)", primary: "In the 3rd month of age", annual: "In July" },
      { disease: "Anthrax", primary: "In the 3rd month of age", annual: "In August" },
      { disease: "Tetanus", primary: "In the 3rd month of age", annual: "In October" },
      { disease: "Sheep Pox", primary: "In the 3rd month of age", annual: "In December" },
      { disease: "Goat Pox", primary: "In the 3rd month of age", annual: "In December" },
    ]
  };

  const localTexts = {
    mr: {
      heroTitle: "पशुसंवर्धन विभाग",
      heroDesc: "पशुवैद्यकीय सेवा आणि इतर संबंधित माहिती",
      title: "पशुसंवर्धन विभाग",
      bigTab: "मोठ्या जनावरांचे लसीकरण वेळापत्रक",
      smallTab: "शेळी व मेंढी लसीकरण वेळापत्रक",
      srNo: "अनुक्रमांक",
      disease: "रोगाचे नाव / प्रकार",
      primary: "प्राथमिक लसीकरण",
      booster: "बुस्टर डोस",
      annual: "वार्षिक लसीकरण",
      egovTitle: "ई गव्हर्नन्स – पशुसंवर्धन विभाग",
      activities: "दवाखान्यांमध्ये नियमित ऑनलाईन स्वरूपात करण्यात येणारी कामे",
      appName: "ॲप चे नाव - भारत पशुधन (NDLM)",
      steps: [
        "पशुपालक नोंदणी - सर्वप्रथम पशुपालकाचे आधार क्रमांक व मोबाईल क्रमांक नोंदणी करण्यात येते",
        "पशुधन नोंदणी - जनावराच्या कानामध्ये 12 अंकी बिल्ला मारला जातो",
        "पशुमधील उपचार नोंदणी - NDLM प्रणाली वरती घेतली जाते",
        "पशुमधील जंत निर्मूलन नोंदणी - औषध नोंदणी NDLM मध्ये",
        "पशुमधील लसीकरण नोंदणी - प्रतिबंधात्मक लसीकरण नोंद",
        "पशुमधील कृत्रिम रेतन नोंदणी",
        "पशुमधील गर्भधारणा नोंदणी",
        "वासरे जन्म नोंदणी",
        "पशुमधील रोग निदान नोंदणी",
        "पशुमधील शवविच्छेदन अहवाल नोंदणी"
      ],
      tolls: [
        "B] टोल फ्री क्र. १९६२ / १८००२३३०४१८ चा उपयोग",
        "C] डॉक्टर मार्फत घरपोच सेवा",
        "D] 21st Livestock Census ॲप",
        "E] ah.mahabms.com संकेतस्थळ",
        "F] www.mahamesh.in",
        "G] m.udymimitra.in",
        "H] Smart-mh.org",
        "I] dahd.nic.in",
        "J] ah.mahabms.com"
      ]
    },
    en: {
      heroTitle: "Animal Husbandry Department",
      heroDesc: "Veterinary services and other related information",
      title: "Animal Husbandry Department",
      bigTab: "Large Animal Vaccination Schedule",
      smallTab: "Goat & Sheep Vaccination Schedule",
      srNo: "Sr.No.",
      disease: "Disease / Type",
      primary: "Primary Vaccination",
      booster: "Booster Dose",
      annual: "Annual Vaccination",
      egovTitle: "E-Governance – Department of Animal Husbandry",
      activities: "Regular Online Activities Conducted in Veterinary Hospitals",
      appName: "App Name – Bharat Pashudhan (NDLM)",
      steps: [
        "Livestock Owner Registration – Aadhaar & mobile number registration",
        "Livestock Registration – 12-digit ear tag installation",
        "Animal Treatment Record – Recorded on NDLM platform",
        "Deworming Record – Recorded in NDLM database",
        "Vaccination Record – Preventive vaccination entries",
        "Artificial Insemination Record",
        "Pregnancy Diagnosis Record",
        "Calf Birth Record",
        "Disease Diagnosis Record",
        "Postmortem Report Record"
      ],
      tolls: [
        "B] Toll-free: 1962 / 18002330418",
        "C] Doorstep veterinary services by doctor",
        "D] 21st Livestock Census App",
        "E] ah.mahabms.com Website",
        "F] www.mahamesh.in",
        "G] m.udymimitra.in",
        "H] Smart-mh.org",
        "I] dahd.nic.in",
        "J] ah.mahabms.com"
      ]
    }
  };

  const t = localTexts[lang] || localTexts.mr;
  const bigAnimals = bigAnimalsData[lang] || bigAnimalsData.mr;
  const smallAnimals = smallAnimalsData[lang] || smallAnimalsData.mr;

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <PawPrint size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heroTitle}</h1>
        <p className="text-teal-100 max-w-2xl mx-auto text-sm md:text-base">{t.heroDesc}</p>
      </div>

      <div className="px-4 md:px-10 py-8">
        {/* TABS */}
        <div className="flex flex-col sm:flex-row mb-6 border rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => setActiveTab("big")}
            className={`w-full sm:w-1/2 py-3 font-semibold transition ${
              activeTab === "big"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {t.bigTab}
          </button>

          <button
            onClick={() => setActiveTab("small")}
            className={`w-full sm:w-1/2 py-3 font-semibold transition ${
              activeTab === "small"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {t.smallTab}
          </button>
        </div>

        {/* 🐄 BIG TABLE */}
        {activeTab === "big" && (
          <div className="overflow-x-auto w-full rounded-lg shadow border border-gray-200">
            <table className="w-full text-left border-collapse bg-white">
              <thead className="bg-green-50 text-green-800">
                <tr>
                  <th className="border p-4 font-semibold">{t.srNo}</th>
                  <th className="border p-4 font-semibold">{t.disease}</th>
                  <th className="border p-4 font-semibold">{t.primary}</th>
                  <th className="border p-4 font-semibold">{t.booster}</th>
                  <th className="border p-4 font-semibold">{t.annual}</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {bigAnimals.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="border p-4 text-center font-medium">{item.id}</td>
                    <td className="border p-4 font-medium">{item.disease}</td>
                    <td className="border p-4">{item.primary}</td>
                    <td className="border p-4">{item.booster}</td>
                    <td className="border p-4">{item.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 🐐 SMALL TABLE */}
        {activeTab === "small" && (
          <div className="overflow-x-auto w-full rounded-lg shadow border border-gray-200">
            <table className="w-full text-left border-collapse bg-white">
              <thead className="bg-green-50 text-green-800">
                <tr>
                  <th className="border p-4 font-semibold">{t.disease}</th>
                  <th className="border p-4 font-semibold">{t.primary}</th>
                  <th className="border p-4 font-semibold">{t.annual}</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {smallAnimals.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border p-4 font-medium">{item.disease}</td>
                    <td className="border p-4">{item.primary}</td>
                    <td className="border p-4">{item.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ✅ COMMON INFO */}
        <div className="mt-12 mx-auto max-w-6xl p-6 bg-white rounded-xl shadow border border-gray-100 text-gray-800 leading-relaxed">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            {t.egovTitle}
          </h2>

          <p className="mb-4 font-semibold text-gray-700">
            {t.activities}
          </p>

          <p className="mb-6 font-bold text-green-600">
            {t.appName}
          </p>

          {/* NUMBER LIST */}
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            {t.steps.map((step, idx) => (
              <li key={idx} className="pl-2">{step}</li>
            ))}
          </ol>

          {/* LETTER POINTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
            {t.tolls.map((toll, idx) => (
              <p key={idx} className="font-medium text-gray-700">{toll}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animal;