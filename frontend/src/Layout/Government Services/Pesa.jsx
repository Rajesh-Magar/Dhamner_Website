import React from "react";
import { useLang } from "../../context/LanguageContext";

export default function PesaScheme() {
  const { lang } = useLang();

  const localTexts = {
    mr: {
      heroTitle: "पेसा 5% अबंध निधी योजना",
      title: "पेसा 5% अबंध निधी योजना (PESA 5% Untied Fund Scheme) – महाराष्ट्र शासन",
      objectiveTitle: "योजनेचा उद्देश:",
      objectiveDesc: "पैसा 5% अबंध निधी योजना ही आदिवासी भागात (PESA क्षेत्रांमध्ये) स्थानिक स्वराज्य संस्थांना (ग्रामपंचायतींना) अधिक सक्षम व स्वयंपूर्ण बनवण्यासाठी राबवली जाणारी योजना आहे. या योजनेचा उद्देश स्थानिक गरजेनुसार विकासकामे हाती घेण्यासाठी निधी उपलब्ध करून देणे हा आहे.",
      whatIsPesaTitle: "PESA काय आहे?",
      whatIsPesaDesc: "PESA म्हणजे \"Panchayats (Extension to Scheduled Areas) Act, 1996\", ज्याच्या अंतर्गत अनुसूचित क्षेत्रातील ग्रामसभा आणि ग्रामपंचायतींना विशेष अधिकार दिले जातात.",
      whatIsFundTitle: "5% अबंध निधी म्हणजे काय?",
      whatIsFundDesc: "राज्य शासनाकडून आदिवासी उपयोजनांअंतर्गत मिळणाऱ्या एकूण निधीपैकी 5% निधी हा \"अबंध\" स्वरूपात ठेवण्यात येतो. म्हणजेच याचा वापर ठराविक योजनेसाठी न करता स्थानिक गरजेनुसार ग्रामसभेच्या मंजुरीने विविध विकासकामांसाठी केला जाऊ शकतो.",
      beneficiaryTitle: "लाभार्थी कोण?",
      beneficiaryList: [
        "PESA कायद्यांतर्गत अनुसूचित क्षेत्रातील ग्रामपंचायती",
        "या ग्रामपंचायतींमध्ये राहणारे सर्व नागरिक अप्रत्यक्ष लाभार्थी असतात"
      ],
      featuresTitle: "योजनेची वैशिष्ट्ये:",
      featuresList: [
        "निधीचा वापर ग्रामसभा मंजूर करेल अशा कामांसाठीच करता येतो",
        "निधी वापरासाठी कोणतीही किचकट प्रक्रिया नाही",
        "निधीचा उपयोग तातडीच्या गरज भागवणाऱ्या कामांवर केला जातो",
        "स्थानिक पातळीवर पारदर्शकता व लोकसहभाग वाढतो"
      ],
      fundUsageTitle: "निधीचा वापर कोणत्या कामांसाठी करता येतो?",
      fundUsageList: [
        "गावातील रस्ते दुरुस्ती",
        "पाणीपुरवठा",
        "शाळा दुरुस्ती",
        "आरोग्य सुविधा",
        "सामुदायिक शौचालये",
        "सार्वजनिक ठिकाणांची स्वच्छता",
        "महिला व बालकल्याण उपक्रम",
        "स्थानिक सण, उत्सव व सांस्कृतिक कार्यक्रम"
      ],
      controlTitle: "नियंत्रण व अंमलबजावणी:",
      controlList: [
        "ग्रामपंचायत व ग्रामसभा",
        "जिल्हा परिषद अंतर्गत आदिवासी विकास प्रकल्प अधिकारी (ITDP)",
        "सामाजिक लेखापरीक्षण व वार्षिक अहवालाद्वारे कामांची पडताळणी"
      ],
      contactTitle: "अधिक माहितीसाठी संपर्क:",
      contactList: [
        "स्थानिक ग्रामपंचायत कार्यालय",
        "जिल्हा परिषद / पंचायत समिती कार्यालय",
        "आदिवासी विकास प्रकल्प कार्यालय (ITDP)"
      ],
      websiteLabel: "अधिकृत वेबसाइट:",
      tipsTitle: "❗ टीप:",
      tipsDesc: "ही योजना केवळ अनुसूचित क्षेत्रांतील (PESA अंतर्गत) ग्रामपंचायतींसाठी लागू आहे. निधीचा वापर करताना ग्रामसभेचा ठराव आवश्यक आहे."
    },
    en: {
      heroTitle: "PESA 5% Untied Fund Scheme",
      title: "PESA 5% Untied Fund Scheme – Govt. of Maharashtra",
      objectiveTitle: "Scheme Objective:",
      objectiveDesc: "The PESA 5% Untied Fund Scheme is implemented in tribal areas (PESA areas) to empower and make local self-government bodies (Gram Panchayats) self-reliant. The objective of the scheme is to make funds available to initiate development works as per local needs.",
      whatIsPesaTitle: "What is PESA?",
      whatIsPesaDesc: "PESA stands for the \"Panchayats (Extension to Scheduled Areas) Act, 1996\", under which special powers are given to Gram Sabhas and Gram Panchayats in scheduled tribal areas.",
      whatIsFundTitle: "What is 5% Untied Fund?",
      whatIsFundDesc: "5% of the total funds received under the tribal sub-plans from the State Government is kept in the form of an \"Untied Fund\". This means it can be utilized for various development works as per local needs approved by the Gram Sabha, rather than being bound to a specific pre-defined scheme.",
      beneficiaryTitle: "Who are the Beneficiaries?",
      beneficiaryList: [
        "Gram Panchayats falling under the scheduled areas of PESA Act",
        "All citizens residing in these Gram Panchayats are indirect beneficiaries"
      ],
      featuresTitle: "Features of the Scheme:",
      featuresList: [
        "Funds can only be used for works approved by the Gram Sabha",
        "No complex processes for utilization of funds",
        "Funds are utilized for works that address urgent local needs",
        "Increases transparency and public participation at the local level"
      ],
      fundUsageTitle: "For which works can the funds be used?",
      fundUsageList: [
        "Repair of village roads",
        "Water supply facilities",
        "School repairs",
        "Healthcare facilities",
        "Community toilets",
        "Cleanliness of public spaces",
        "Women and child welfare initiatives",
        "Local festivals and cultural programs"
      ],
      controlTitle: "Monitoring & Implementation:",
      controlList: [
        "Gram Panchayat and Gram Sabha",
        "Integrated Tribal Development Project officer (ITDP) under Zilla Parishad",
        "Verification of works through social audit and annual reports"
      ],
      contactTitle: "Contact for More Information:",
      contactList: [
        "Local Gram Panchayat office",
        "Zilla Parishad / Panchayat Samiti office",
        "Integrated Tribal Development Project Office (ITDP)"
      ],
      websiteLabel: "Official Website:",
      tipsTitle: "❗ Note:",
      tipsDesc: "This scheme is only applicable for Gram Panchayats in Scheduled Areas (under PESA). Gram Sabha resolution is mandatory for fund utilization."
    }
  };

  const t = localTexts[lang] || localTexts.mr;

  return (
    <div className="w-full bg-gray-50 font-bold text-gray-800">

      {/* 🔹 HERO */}
      <section className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white px-6 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[60vh] py-20 md:py-32 gap-10">

        <h1 className="text-4xl md:text-7xl text-center md:text-left leading-tight">
          {t.heroTitle}
        </h1>

        <img
          src="/assets/Pesa-Logo.png"
          alt="pesa"
          className="w-64 md:w-[420px] lg:w-[520px] object-contain"
        />
      </section>

      <hr />

      {/* 🔹 TITLE + OBJECTIVE */}
      <section className="px-6 md:px-20 py-12">

        <h2 className="text-3xl text-green-700 mb-6 font-extrabold">
          {t.title}
        </h2>

        <h3 className="text-xl mb-4 font-bold text-gray-700">{t.objectiveTitle}</h3>

        <p className="text-lg leading-relaxed font-medium text-gray-600 mb-6">
          {t.objectiveDesc}
        </p>

        <h3 className="text-xl mb-4 font-bold text-gray-700">{t.whatIsPesaTitle}</h3>

        <p className="text-lg leading-relaxed font-medium text-gray-600 mb-6">
          {t.whatIsPesaDesc}
        </p>

        <h3 className="text-xl mb-4 font-bold text-gray-700">{t.whatIsFundTitle}</h3>

        <p className="text-lg leading-relaxed font-medium text-gray-600">
          {t.whatIsFundDesc}
        </p>

      </section>

      <hr />

      {/* 🔹 BENEFICIARY */}
      <section className="px-6 md:px-20 py-12">

        <h3 className="text-xl mb-4 font-bold text-gray-700">{t.beneficiaryTitle}</h3>

        <ul className="list-disc pl-6 space-y-3 text-lg font-medium text-gray-600 mb-6">
          {t.beneficiaryList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl mb-4 font-bold text-gray-700">{t.featuresTitle}</h3>

        <ul className="list-disc pl-6 space-y-3 text-lg font-medium text-gray-600">
          {t.featuresList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

      </section>

      <hr />

      {/* 🔹 FUND USAGE */}
      <section className="px-6 md:px-20 py-12">

        <h3 className="text-xl mb-4 font-bold text-gray-700">
          {t.fundUsageTitle}
        </h3>

        <ul className="list-disc pl-6 space-y-3 text-lg font-medium text-gray-600 mb-6">
          {t.fundUsageList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl mb-4 font-bold text-gray-700">
          {t.controlTitle}
        </h3>

        <ul className="list-disc pl-6 space-y-3 text-lg font-medium text-gray-600 mb-6">
          {t.controlList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl mb-4 font-bold text-gray-700">
          {t.contactTitle}
        </h3>

        <ul className="list-disc pl-6 space-y-3 text-lg font-medium text-gray-600">
          {t.contactList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
          <li>
            {t.websiteLabel}{" "}
            <a
              href="https://tribal.maharashtra.gov.in"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              https://tribal.maharashtra.gov.in
            </a>
          </li>
        </ul>

        <h3 className="text-red-600 mt-6 mb-2 font-bold">
          {t.tipsTitle}
        </h3>

        <p className="text-lg font-medium text-gray-600">
          {t.tipsDesc}
        </p>

      </section>

    </div>
  );
}