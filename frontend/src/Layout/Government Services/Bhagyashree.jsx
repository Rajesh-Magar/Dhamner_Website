import React from "react";
import { useLang } from "../../context/LanguageContext";

export default function Bhagyashree() {
  const { lang } = useLang();

  const localTexts = {
    mr: {
      heroTitle: "भाग्यश्री लेक माझी लाडकी योजना",
      title: "भाग्यश्री लेक माझी लाडकी योजना – महाराष्ट्र शासन",
      objectiveTitle: "योजनेचा उद्देश:",
      objectiveDesc: "“भाग्यश्री – लेक माझी लाडकी” ही योजना मुलींच्या जन्माला प्रोत्साहन देणे, स्त्रीभ्रूणहत्या रोखणे आणि मुलींच्या शिक्षणाला चालना देण्यासाठी सुरू केली आहे. या योजनेअंतर्गत मुलीच्या जन्मापासून ते शिक्षणापर्यंत आर्थिक सहाय्य दिले जाते.",
      featuresTitle: "🎯 योजनेची वैशिष्ट्ये:",
      featuresList: [
        "मुलगी जन्मल्यावर आर्थिक सहाय्य दिले जाते",
        "शिक्षणासाठी प्रत्येक टप्प्यावर प्रोत्साहन रक्कम",
        "मुलींचे संगोपन, शिक्षण आणि सक्षमीकरण"
      ],
      beneficiaryTitle: "👨‍👩‍👧 लाभार्थी कोण?",
      beneficiaryList: [
        "महाराष्ट्रातील BPL (दारिद्र्यरेषेखालील) कुटुंबातील पालक",
        "पहिल्या दोन मुलींसाठी योजना लागू",
        "कुटुंबाचे वार्षिक उत्पन्न ₹1 लाखांपेक्षा कमी",
        "माता व पालक महाराष्ट्राचे रहिवासी असावेत",
        "कुटुंब नियोजन स्वीकारलेले असावे"
      ],
      benefitsTitle: "💰 योजनेंतर्गत लाभ:",
      tableHeaders: ["टप्पा", "प्रोत्साहन रक्कम (₹)"],
      benefitsTable: [
        { stage: "मुलीचा जन्म", amount: "₹5,000 – ₹25,000 (जिल्ह्यानुसार)" },
        { stage: "पहिली ते सातवी", amount: "₹2,000 – ₹3,000 दरवर्षी" },
        { stage: "आठवी ते दहावी", amount: "₹4,000 – ₹5,000 दरवर्षी" },
        { stage: "अकरावी व बारावी", amount: "₹6,000 – ₹7,000 दरवर्षी" },
        { stage: "उच्च शिक्षण / व्यावसायिक शिक्षण", amount: "विशेष मदत योजनांद्वारे" }
      ],
      tableNote: "(टीप: रक्कम जिल्हानिहाय बदलू शकते)",
      documentsTitle: "📑 आवश्यक कागदपत्रे:",
      documentsList: [
        "पालकांचे आधार कार्ड",
        "मुलीचा जन्म दाखला",
        "उत्पन्नाचा दाखला",
        "जातीचा दाखला (लागू असल्यास)",
        "कुटुंब नियोजन प्रमाणपत्र",
        "बँक खाते तपशील",
        "निवासी दाखला"
      ],
      processTitle: "✍️ अर्ज प्रक्रिया:",
      processList: [
        "स्थानिक अंगणवाडी / ग्रामपंचायत येथे अर्ज करा",
        "आवश्यक कागदपत्रांसह फॉर्म सादर करा",
        "पडताळणीनंतर रक्कम बँक खात्यात जमा होते"
      ],
      contactTitle: "📞 संपर्क व अधिक माहिती:",
      contactList: [
        "महिला व बालविकास विभाग, महाराष्ट्र शासन",
        "स्थानिक अंगणवाडी केंद्र / पंचायत समिती कार्यालय"
      ],
      websiteLabel: "वेबसाइट:",
      tipsTitle: "❗ टीप:",
      tipsDesc: "योजनेच्या अटी व रक्कम वेळोवेळी बदलू शकतात. अद्ययावत माहितीसाठी स्थानिक अधिकाऱ्यांशी संपर्क साधा."
    },
    en: {
      heroTitle: "Bhagyashree Majhi Ladki Scheme",
      title: "Bhagyashree Majhi Ladki Girl Child Scheme – Govt. of Maharashtra",
      objectiveTitle: "Scheme Objective:",
      objectiveDesc: "The “Bhagyashree – Lek Majhi Ladki” scheme has been launched to encourage the birth of girl children, prevent female foeticide, and promote girls' education. Financial assistance is provided under this scheme from the birth of the girl child to her higher education.",
      featuresTitle: "🎯 Features of the Scheme:",
      featuresList: [
        "Financial assistance provided upon the birth of a girl child",
        "Scholarships and incentive amounts at various stages of school education",
        "Supports the upbringing, education, and empowerment of girls"
      ],
      beneficiaryTitle: "👨‍👩‍👧 Who are the Beneficiaries?",
      beneficiaryList: [
        "Parents belonging to BPL (Below Poverty Line) families in Maharashtra",
        "Scheme applicable for the first two girls in the family",
        "Annual family income must be less than ₹1 Lakh",
        "Mother and parents must be permanent residents of Maharashtra",
        "Must have adopted family planning norms"
      ],
      benefitsTitle: "💰 Benefits Under the Scheme:",
      tableHeaders: ["Stage", "Incentive Amount (₹)"],
      benefitsTable: [
        { stage: "Birth of Girl Child", amount: "₹5,000 – ₹25,000 (depending on district)" },
        { stage: "Class 1st to 7th", amount: "₹2,000 – ₹3,000 annually" },
        { stage: "Class 8th to 10th", amount: "₹4,000 – ₹5,000 annually" },
        { stage: "Class 11th and 12th", amount: "₹6,000 – ₹7,000 annually" },
        { stage: "Higher Education / Professional Courses", amount: "Via special student aid programs" }
      ],
      tableNote: "(Note: Amount may vary by district)",
      documentsTitle: "📑 Required Documents:",
      documentsList: [
        "Aadhaar Cards of parents",
        "Birth Certificate of the girl child",
        "Income Certificate of the family",
        "Caste Certificate (if applicable)",
        "Family Planning Adoption Certificate",
        "Bank account details (Passbook copy)",
        "Residence Certificate / Domicile"
      ],
      processTitle: "✍️ Application Process:",
      processList: [
        "Apply at the local Anganwadi center or Gram Panchayat office",
        "Submit the application form along with required documents",
        "The approved amount is directly credited to the bank account after verification"
      ],
      contactTitle: "📞 Contact & More Information:",
      contactList: [
        "Department of Women and Child Development, Maharashtra",
        "Local Anganwadi Center / Panchayat Samiti Office"
      ],
      websiteLabel: "Website:",
      tipsTitle: "❗ Note:",
      tipsDesc: "The terms, eligibility rules, and amount limits of the scheme are subject to change. Please contact local authorities for latest updates."
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
          src="/assets/bhagyashree-removebg-preview.png"
          alt="ladki"
          className="w-64 md:w-[420px] lg:w-[520px] object-contain"
        />
      </section>

      <hr className="border-gray-200" />

      {/* 🔹 TITLE + OBJECTIVE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl text-green-700 mb-6 font-extrabold">
          {t.title}
        </h2>

        <h3 className="text-xl mb-4 text-gray-700 font-bold">{t.objectiveTitle}</h3>

        <p className="text-lg leading-relaxed font-medium text-gray-600">
          {t.objectiveDesc}
        </p>
      </section>

      <hr className="border-gray-200" />

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

      <hr className="border-gray-200" />

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

      <hr className="border-gray-200" />

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
              </tr>
            </thead>

            <tbody className="text-gray-700 font-medium">
              {t.benefitsTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 border-b">
                  <td className="border p-4">{row.stage}</td>
                  <td className="border p-4 text-green-600 font-bold">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-gray-500 font-normal">
          {t.tableNote}
        </p>
      </section>

      <hr className="border-gray-200" />

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

      <hr className="border-gray-200" />

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

      <hr className="border-gray-200" />

      {/* 🔹 CONTACT */}
      <section className="px-6 md:px-20 py-12 pb-24">
        <h2 className="text-2xl text-green-700 mb-6 font-extrabold">
          {t.contactTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg font-medium text-gray-600 mb-6">
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