import React from "react";
import { useLang } from "../../context/LanguageContext";
import { Baby } from "lucide-react";

export default function PMMVY() {
  const { lang } = useLang();

  const localTexts = {
    mr: {
      heroTitle: "प्रधानमंत्री मातृ वंदना योजना",
      heroDesc: "गर्भवती आणि स्तनपान करणाऱ्या मातांना सकस आहारासाठी ₹५,००० ची थेट बँक खात्यात आर्थिक मदत",
      title: "प्रधानमंत्री मातृ वंदना योजना (PMMVY) – माता आणि बाळकांचे आरोग्य संरक्षण",
      objectiveTitle: "योजनेचा उद्देश:",
      objectiveDesc: "गर्भवती आणि स्तनपान करणाऱ्या महिलांना आर्थिक सहाय्य देऊन त्यांच्या पोषणाची गरज पूर्ण करणे आणि माता व बालकांचे आरोग्य सुरक्षित करणे हा या योजनेचा प्रमुख उद्दिष्ट आहे. ही योजना महिला व बालविकास मंत्रालयामार्फत राबवली जाते.",
      featuresTitle: "🎯 योजनेची वैशिष्ट्ये:",
      featuresList: [
        "गर्भवती महिलेला ₹5,000/- पर्यंत आर्थिक मदत तीन हप्त्यांत दिली जाते",
        "पहिल्या बाळाच्या जन्मासाठी ही योजना लागू",
        "नियमित आरोग्य तपासणी, लसीकरण आणि पोषणासाठी प्रोत्साहन"
      ],
      eligibilityTitle: "👩‍🍼 पात्रता:",
      eligibilityList: [
        "गर्भवती महिला व स्तनपान करणाऱ्या माता",
        "पहिल्या बाळाच्या जन्मासाठी योजना लागू",
        "महिला 19 वर्षे किंवा त्याहून अधिक वयाची असावी",
        "सरकारी सेवेत नसावी",
        "भारतीय नागरिक असावी"
      ],
      benefitsTitle: "💰 आर्थिक लाभ (तीन हप्त्यांमध्ये):",
      tableHeaders: ["हप्ता", "अटी", "देय रक्कम"],
      benefitsTable: [
        { installment: "पहिला", condition: "गर्भधारणा नोंदणी केल्यानंतर", amount: "₹1,000/-" },
        { installment: "दुसरा", condition: "किमान एक ANC तपासणी केल्यानंतर", amount: "₹2,000/-" },
        { installment: "तिसरा", condition: "बाळाच्या जन्मानंतर लसीकरण पूर्ण केल्यावर (BCG, OPV, DPT, HepB)", amount: "₹2,000/-" }
      ],
      totalBenefit: "👉 एकूण: ₹5,000/- थेट बँक खात्यात जमा",
      usageTitle: "✅ योजना कशासाठी उपयुक्त?",
      usageList: [
        "माता व बालकांच्या पोषणासाठी आर्थिक मदत",
        "सुरक्षित मातृत्वासाठी प्रोत्साहन",
        "महिलांच्या आरोग्य तपासणीसाठी प्रोत्साहन",
        "लसीकरण आणि आरोग्य सेवा वापरण्यासाठी प्रेरणा"
      ],
      documentsTitle: "📄 आवश्यक कागदपत्रे:",
      documentsList: [
        "आधार कार्ड",
        "बँक खाते तपशील (महिलेच्या नावावर)",
        "गर्भधारणा नोंदणी पुरावा",
        "जन्म प्रमाणपत्र",
        "लसीकरण प्रमाणपत्र"
      ],
      processTitle: "✍️ अर्ज प्रक्रिया:",
      processList: [
        "जवळच्या अंगणवाडी केंद्र किंवा आरोग्य केंद्रात संपर्क साधा",
        "PMMVY फॉर्म भरून आवश्यक कागदपत्रांसह सादर करा",
        "पडताळणीनंतर निधी थेट बँक खात्यात जमा होतो"
      ],
      contactTitle: "📞 अधिक माहितीसाठी संपर्क:",
      contactList: [
        "महिला व बालविकास विभाग, महाराष्ट्र",
        "अंगणवाडी सेविका / आशा कार्यकर्ती"
      ],
      websiteLabel: "वेबसाइट:"
    },
    en: {
      heroTitle: "Pradhan Mantri Matru Vandana Yojana",
      heroDesc: "Direct financial assistance of ₹5,000 to pregnant and lactating mothers for health and nutrition",
      title: "Pradhan Mantri Matru Vandana Yojana (PMMVY) – Protecting Maternal & Child Health",
      objectiveTitle: "Scheme Objective:",
      objectiveDesc: "The primary objective of this scheme is to provide financial assistance to pregnant and lactating mothers to meet their nutritional needs and secure the health of mother and child. This scheme is implemented by the Ministry of Women and Child Development.",
      featuresTitle: "🎯 Features of the Scheme:",
      featuresList: [
        "Financial assistance up to ₹5,000/- is provided to pregnant women in three installments",
        "The scheme is applicable for the birth of the first child",
        "Promotes regular health check-ups, immunization, and nutritional practices"
      ],
      eligibilityTitle: "👩‍🍼 Eligibility:",
      eligibilityList: [
        "Pregnant women and lactating mothers",
        "Applicable for the first live child of the mother",
        "The woman must be 19 years of age or older",
        "Must not be employed under the Central/State Government",
        "Must be an Indian citizen"
      ],
      benefitsTitle: "💰 Financial Benefits (in three installments):",
      tableHeaders: ["Installment", "Conditions", "Amount Payable"],
      benefitsTable: [
        { installment: "First", condition: "After pregnancy registration", amount: "₹1,000/-" },
        { installment: "Second", condition: "After at least one ANC check-up", amount: "₹2,000/-" },
        { installment: "Third", condition: "After child birth registration & first cycle of immunization (BCG, OPV, DPT, HepB)", amount: "₹2,000/-" }
      ],
      totalBenefit: "👉 Total: ₹5,000/- directly credited to bank account",
      usageTitle: "✅ Why is the scheme beneficial?",
      usageList: [
        "Provides financial aid for maternal and child nutrition",
        "Promotes safe motherhood",
        "Encourages women to undergo regular health check-ups",
        "Inspires completion of timely immunization and health service utilization"
      ],
      documentsTitle: "📄 Required Documents:",
      documentsList: [
        "Aadhaar Card",
        "Bank account details (in the name of the beneficiary woman)",
        "Proof of pregnancy registration",
        "Birth Certificate of the child",
        "Immunization Card / Certificate"
      ],
      processTitle: "✍️ Application Process:",
      processList: [
        "Contact the nearest Anganwadi Center or Health Center",
        "Fill out the PMMVY application form and submit with the required documents",
        "Upon verification, the money is directly credited to the bank account"
      ],
      contactTitle: "📞 Contact for More Information:",
      contactList: [
        "Department of Women and Child Development, Maharashtra",
        "Anganwadi Worker / ASHA Worker"
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
            <Baby size={48} />
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

      {/* 🔹 BENEFITS TABLE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6 font-extrabold">
          {t.benefitsTitle}
        </h2>

        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow bg-white">
          <table className="w-full text-left border-collapse text-lg">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border p-4 font-semibold">{t.tableHeaders[0]}</th>
                <th className="border p-4 font-semibold">{t.tableHeaders[1]}</th>
                <th className="border p-4 font-semibold">{t.tableHeaders[2]}</th>
              </tr>
            </thead>

            <tbody className="text-gray-700 font-medium">
              {t.benefitsTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 border-b">
                  <td className="border p-4">{row.installment}</td>
                  <td className="border p-4">{row.condition}</td>
                  <td className="border p-4 text-green-600 font-bold">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-lg font-bold text-green-700">
          {t.totalBenefit}
        </p>
      </section>

      <hr />

      {/* 🔹 USAGE / PURPOSE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6 font-extrabold">
          {t.usageTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg font-medium text-gray-600">
          {t.usageList.map((item, idx) => (
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
            <a href="https://wcd.nic.in" target="_blank" rel="noreferrer" className="text-blue-600 underline">
              https://wcd.nic.in
            </a>
          </li>
          <li>
            <a href="https://pmmvy-cas.nic.in" target="_blank" rel="noreferrer" className="text-blue-600 underline">
              https://pmmvy-cas.nic.in
            </a>
          </li>
        </ul>
      </section>

    </div>
  );
}