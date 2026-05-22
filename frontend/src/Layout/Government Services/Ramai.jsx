import React from "react";
import { useLang } from "../../context/LanguageContext";
import { Home } from "lucide-react";

export default function Ramai() {
  const { lang } = useLang();

  const localTexts = {
    mr: {
      heroTitle: "रमाई आवास योजना",
      heroDesc: "अनुसूचित जाती व नवबौद्ध कुटुंबांना हक्काचे पक्के घर बांधण्यासाठी आर्थिक मदत देणारी योजना",
      title: "रमाई आवास योजना (Ramai Awas Yojana) – महाराष्ट्र शासन",
      objectiveTitle: "योजनेचा उद्देश:",
      objectiveDesc: "रमाई आवास योजना ही महाराष्ट्र शासनाच्या सामाजिक न्याय व विशेष सहाय्य विभागामार्फत राबवली जाते. या योजनेचा मुख्य उद्देश सामाजिकदृष्ट्या दुर्बल घटकांतील अनुसूचित जाती (SC) व नवबौद्ध कुटुंबांना स्वतःचे पक्के घर बांधण्यासाठी आर्थिक सहाय्य उपलब्ध करून देणे हा आहे.",
      beneficiaryTitle: "👨‍👩‍👧 लाभार्थी कोण?",
      beneficiaryList: [
        "अनुसूचित जाती (SC) व नवबौद्ध समाजातील गरीब कुटुंबे",
        "ज्यांच्याकडे स्वतःची जमीन आहे पण घर नाही किंवा अतिशय खराब स्थितीत घर आहे",
        "अर्जदार BPL (गरीबी रेषेखालील) यादीत असावा"
      ],
      benefitsTitle: "💰 योजनेंतर्गत लाभ:",
      benefitsList: [
        "घर बांधण्यासाठी ₹1.5 लाखांपर्यंत अनुदान (रक्कम बदलू शकते)",
        "अनुदान थेट लाभार्थ्याच्या बँक खात्यात जमा केले जाते",
        "काही जिल्ह्यांमध्ये PMAY (प्रधानमंत्री आवास योजना) सोबत एकत्रित लाभ दिला जातो"
      ],
      guidelinesTitle: "🏗️ घर बांधकामासाठी मार्गदर्शन:",
      guidelinesList: [
        "स्थानिक ग्रामपंचायत / नगरपरिषद / जिल्हा परिषद तांत्रिक मार्गदर्शन देते",
        "कामाच्या प्रगतीनुसार टप्प्याटप्प्याने निधी दिला जातो"
      ],
      processTitle: "✍️ अर्ज करण्याची प्रक्रिया:",
      processList: [
        "ग्रामसेवक / तलाठी / पंचायत समिती कार्यालयातून अर्जाचा नमुना घ्या",
        "आवश्यक कागदपत्रांसह अर्ज सामाजिक न्याय विभाग किंवा जिल्हा परिषद कार्यालयात जमा करा",
        "पडताळणीनंतर पात्र लाभार्थ्यांची यादी तयार करून मंजुरी दिली जाते"
      ],
      documentsTitle: "📄 आवश्यक कागदपत्रे:",
      documentsList: [
        "आधार कार्ड",
        "जात प्रमाणपत्र (SC / नवबौद्ध)",
        "उत्पन्नाचा दाखला",
        "जमीन धारक असल्याचे कागदपत्र",
        "रहिवासी दाखला"
      ],
      contactTitle: "📞 अधिक माहितीसाठी संपर्क:",
      contactList: [
        "सामाजिक न्याय विभागाचे जिल्हा कार्यालय",
        "ग्रामपंचायत / पंचायत समिती कार्यालय"
      ],
      websiteLabel: "वेबसाइट:"
    },
    en: {
      heroTitle: "Ramai Awas Yojana",
      heroDesc: "Scheme providing financial assistance to Scheduled Castes and Neo-Buddhist families to build concrete houses",
      title: "Ramai Awas Yojana – Govt. of Maharashtra",
      objectiveTitle: "Scheme Objective:",
      objectiveDesc: "The Ramai Awas Yojana is implemented by the Department of Social Justice and Special Assistance, Government of Maharashtra. The primary objective is to provide financial assistance to socially vulnerable families belonging to Scheduled Castes (SC) and Neo-Buddhists to build their own concrete houses.",
      beneficiaryTitle: "👨‍👩‍👧 Who are the Beneficiaries?",
      beneficiaryList: [
        "Poor families belonging to Scheduled Castes (SC) and Neo-Buddhist communities",
        "Those who own land but do not have a house or live in highly dilapidated houses",
        "Applicant should ideally be in the BPL (Below Poverty Line) list"
      ],
      benefitsTitle: "💰 Benefits Under the Scheme:",
      benefitsList: [
        "Grant up to ₹1.5 Lakh for house construction (amount subject to change)",
        "The grant is credited directly to the beneficiary's bank account",
        "Combined benefits are provided along with PMAY (Pradhan Mantri Awas Yojana) in some districts"
      ],
      guidelinesTitle: "🏗️ Guidelines for House Construction:",
      guidelinesList: [
        "Local Gram Panchayat / Municipal Council / Zilla Parishad provides technical guidance",
        "Funds are disbursed in phases according to construction progress"
      ],
      processTitle: "✍️ Application Process:",
      processList: [
        "Obtain the application form from Gram Sevak / Talathi / Panchayat Samiti office",
        "Submit the filled form with required documents to the Social Justice Department or Zilla Parishad office",
        "After verification, the list of eligible beneficiaries is finalized and approved"
      ],
      documentsTitle: "📄 Required Documents:",
      documentsList: [
        "Aadhaar Card",
        "Caste Certificate (SC / Neo-Buddhist)",
        "Income Certificate",
        "Land ownership documents (7/12 extract, etc.)",
        "Residence Certificate"
      ],
      contactTitle: "📞 Contact for More Information:",
      contactList: [
        "District office of the Social Justice Department",
        "Gram Panchayat / Panchayat Samiti Office"
      ],
      websiteLabel: "Website:"
    }
  };

  const t = localTexts[lang] || localTexts.mr;

  return (
    <div className="w-full bg-gray-50 font-bold text-gray-800">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <Home size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heroTitle}</h1>
        <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">{t.heroDesc}</p>
      </div>

      <hr />

      {/* 🔹 TITLE + OBJECTIVE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl text-green-700 mb-6 font-extrabold">
          {t.title}
        </h2>

        <h3 className="text-xl mb-4 font-bold text-gray-700">{t.objectiveTitle}</h3>

        <p className="text-lg leading-relaxed font-medium text-gray-600">
          {t.objectiveDesc}
        </p>
      </section>

      <hr />

      {/* 🔹 BENEFICIARY */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6 font-extrabold">
          {t.beneficiaryTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg font-medium text-gray-600">
          {t.beneficiaryList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* 🔹 BENEFITS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6 font-extrabold">
          {t.benefitsTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg font-medium text-gray-600">
          {t.benefitsList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* 🔹 GUIDELINES */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6 font-extrabold">
          {t.guidelinesTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg font-medium text-gray-600">
          {t.guidelinesList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* 🔹 PROCESS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6 font-extrabold">
          {t.processTitle}
        </h2>

        <ol className="list-decimal pl-6 space-y-4 text-lg font-medium text-gray-600">
          {t.processList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      </section>

      <hr />

      {/* 🔹 DOCUMENTS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6 font-extrabold">
          {t.documentsTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg font-medium text-gray-600">
          {t.documentsList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* 🔹 CONTACT */}
      <section className="px-6 md:px-20 py-12 pb-24">
        <h2 className="text-2xl text-green-700 mb-6 font-extrabold">
          {t.contactTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg font-medium text-gray-600">
          {t.contactList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
          <li>
            {t.websiteLabel}{" "}
            <a
              href="https://sjsa.maharashtra.gov.in"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              https://sjsa.maharashtra.gov.in
            </a>
          </li>
        </ul>
      </section>

    </div>
  );
}