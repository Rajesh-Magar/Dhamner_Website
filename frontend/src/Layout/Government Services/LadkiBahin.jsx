import React from "react";
import { useLang } from "../../context/LanguageContext";

export default function LadkiBahin() {
  const { lang } = useLang();

  const localTexts = {
    mr: {
      heroTitle: "लाडकी बहीण योजना",
      title: "लाडकी बहीण योजना (Ladki Bahin Yojana) – महाराष्ट्र शासन",
      objectiveTitle: "योजनेचा उद्देश:",
      objectiveDesc: "लाडकी बहीण योजना ही महाराष्ट्र शासनाची एक महत्त्वाची सामाजिक कल्याण योजना असून राज्यातील महिलांना आर्थिकदृष्ट्या सक्षम बनवणे आणि त्यांना दरमहा आर्थिक मदत देणे हा योजनेचा उद्देश आहे. या योजनेद्वारे महिलांच्या जीवनमानात सुधारणा करून त्यांना स्वावलंबी बनवणे आणि कुटुंबातील आर्थिक भार कमी करणे हे मुख्य ध्येय आहे.",
      featuresTitle: "📌 महत्त्वाची वैशिष्ट्ये:",
      featuresList: [
        "दरमहा ₹1,500 थेट लाभार्थी महिलेच्या बँक खात्यात जमा",
        "DBT (Direct Benefit Transfer) प्रणालीद्वारे पैसे जमा",
        "महिलांच्या आर्थिक सक्षमीकरणासाठी महत्त्वपूर्ण पाऊल",
        "संपूर्ण महाराष्ट्रातील पात्र महिलांना लागू"
      ],
      eligibilityTitle: "👩 पात्रता (Eligibility):",
      eligibilityList: [
        "लाभार्थी महिला महाराष्ट्र राज्याची रहिवासी असावी",
        "वय 21 वर्षे किंवा त्याहून अधिक असावे",
        "कुटुंबाचे वार्षिक उत्पन्न ₹2.5 लाखांपेक्षा कमी असावे",
        "महिला अविवाहित, विवाहित, विधवा, घटस्फोटीत असू शकते",
        "कामगार, गृहिणी, शेतकरी किंवा असंघटित क्षेत्रातील महिला पात्र"
      ],
      documentsTitle: "📄 आवश्यक कागदपत्रे:",
      documentsList: [
        "आधार कार्ड",
        "रहिवासी दाखला (पत्त्याचा पुरावा)",
        "उत्पन्नाचा दाखला",
        "बँक खाते (DBT साठी)",
        "विवाह स्थिती प्रमाणपत्र (लागू असल्यास)",
        "पासपोर्ट साईज फोटो"
      ],
      processTitle: "✍️ अर्ज प्रक्रिया:",
      processList: [
        "ऑनलाइन पोर्टल किंवा स्थानिक शासन कार्यालयातून अर्ज करा",
        "आवश्यक कागदपत्रे अपलोड / सादर करा",
        "पडताळणीनंतर निधी थेट खात्यात जमा केला जाईल"
      ],
      startDateTitle: "📅 योजना सुरू होण्याची तारीख:",
      startDateDesc: "योजना 2024–25 आर्थिक वर्षात सुरू करण्यात आली",
      contactTitle: "📞 अधिक माहितीसाठी संपर्क:",
      contactList: [
        "स्थानिक ग्रामपंचायत / नगरपालिका कार्यालय",
        "महिला व बालविकास विभाग, महाराष्ट्र शासन"
      ],
      websiteLabel: "वेबसाइट:",
      tipsTitle: "❗ टीप:",
      tipsDesc: "योजनेच्या अटी व प्रक्रिया वेळोवेळी बदलू शकतात. अद्ययावत माहितीसाठी अधिकृत वेबसाइट किंवा स्थानिक कार्यालयाशी संपर्क साधावा."
    },
    en: {
      heroTitle: "Ladki Bahin Scheme",
      title: "Ladki Bahin Scheme (Ladki Bahin Yojana) – Govt. of Maharashtra",
      objectiveTitle: "Scheme Objective:",
      objectiveDesc: "The Ladki Bahin Scheme is a vital social welfare initiative of the Maharashtra Government, aimed at financially empowering women in the state and providing them with monthly financial aid. The main goal is to improve the standard of living of women, make them self-reliant, and reduce the economic burden on families.",
      featuresTitle: "📌 Key Features:",
      featuresList: [
        "Monthly assistance of ₹1,500 deposited directly into the bank account of the beneficiary woman",
        "Money transferred via the DBT (Direct Benefit Transfer) system",
        "A significant step towards the economic empowerment of women",
        "Applicable to eligible women across Maharashtra"
      ],
      eligibilityTitle: "👩 Eligibility:",
      eligibilityList: [
        "The beneficiary woman must be a permanent resident of Maharashtra state",
        "Age must be 21 years or older",
        "Annual family income must be less than ₹2.5 Lakh",
        "The woman can be unmarried, married, widowed, or divorced",
        "Workers, housewives, farmers, or women in the unorganized sector are eligible"
      ],
      documentsTitle: "📄 Required Documents:",
      documentsList: [
        "Aadhaar Card",
        "Residence Certificate (Proof of address)",
        "Income Certificate",
        "Bank account details (for DBT link)",
        "Marital Status Certificate (if applicable)",
        "Passport size photo"
      ],
      processTitle: "✍️ Application Process:",
      processList: [
        "Apply through the online portal or from local government offices",
        "Upload / submit the required documents",
        "After verification, funds will be directly credited to the account"
      ],
      startDateTitle: "📅 Scheme Commencement Date:",
      startDateDesc: "The scheme was launched in the financial year 2024–25",
      contactTitle: "📞 Contact for More Information:",
      contactList: [
        "Local Gram Panchayat / Municipal office",
        "Department of Women and Child Development, Govt. of Maharashtra"
      ],
      websiteLabel: "Website:",
      tipsTitle: "❗ Note:",
      tipsDesc: "The terms and application process of the scheme may change over time. Please visit the official website or contact local offices for updated information."
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
          src="/assets/ladki-bahin.png"
          alt="ladki bahin"
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

        <p className="text-lg leading-relaxed font-medium text-gray-600">
          {t.objectiveDesc}
        </p>
      </section>

      <hr />

      {/* 🔹 FEATURES */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6 font-extrabold">
          {t.featuresTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg font-medium text-gray-600">
          {t.featuresList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* 🔹 ELIGIBILITY */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6 font-extrabold">
          {t.eligibilityTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg font-medium text-gray-600">
          {t.eligibilityList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
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

      {/* 🔹 START DATE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6 font-extrabold">
          {t.startDateTitle}
        </h2>

        <ul className="list-disc pl-6 text-lg font-medium text-gray-600">
          <li>{t.startDateDesc}</li>
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
              href="https://wcd.maharashtra.gov.in"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              https://wcd.maharashtra.gov.in
            </a>
          </li>
        </ul>

        <h3 className="text-red-600 mt-6 mb-2 font-bold">{t.tipsTitle}</h3>

        <p className="text-lg font-medium text-gray-600">
          {t.tipsDesc}
        </p>
      </section>

    </div>
  );
}