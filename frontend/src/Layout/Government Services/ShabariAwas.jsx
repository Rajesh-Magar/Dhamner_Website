import React from "react";
import { useLang } from "../../context/LanguageContext";

export default function ShabariAwas() {
  const { lang } = useLang();

  const localTexts = {
    mr: {
      heroTitle: "शबरी आवास योजना",
      title: "शबरी आवास योजना (Shabari Awas Yojana) – महाराष्ट्र शासन",
      objectiveTitle: "उद्देश:",
      objectiveDesc: "शबरी आवास योजना ही महाराष्ट्र शासनाच्या आदिवासी विकास विभागाद्वारे राबविण्यात येणारी महत्त्वाची योजना आहे. या योजनेचा उद्देश अनुसूचित जमातीतील (आदिवासी) गरजू कुटुंबांना सुरक्षित आणि टिकाऊ घरे उपलब्ध करून देणे हा आहे.",
      beneficiaryTitle: "👨‍👩‍👧 लाभार्थी कोण?",
      beneficiaryDesc: "ही योजना केवळ अनुसूचित जमातीतील (ST) कुटुंबांसाठी आहे. लाभार्थी BPL (गरीबी रेषेखालील) श्रेणीत असावा आणि त्यांच्याकडे स्वतःची जमीन असावी, परंतु राहण्यासाठी पक्के घर नसावे किंवा अत्यंत खराब स्थितीत घर असावे.",
      benefitsTitle: "💰 योजनेंतर्गत मिळणारे लाभ:",
      benefitsList: [
        "घर बांधण्यासाठी सुमारे ₹1.5 लाखांपर्यंत आर्थिक मदत",
        "रक्कम थेट लाभार्थ्याच्या बँक खात्यात जमा",
        "घर बांधकामासाठी मार्गदर्शन व देखरेख उपलब्ध"
      ],
      processTitle: "✍️ अर्ज करण्याची प्रक्रिया:",
      processList: [
        "ग्रामसेवक किंवा ITDP (Integrated Tribal Development Project) अधिकाऱ्यांशी संपर्क साधा",
        "आवश्यक कागदपत्रांसह अर्ज सादर करा",
        "पडताळणीनंतर लाभार्थ्यांची यादी तयार होते",
        "मंजुरीनंतर टप्प्याटप्प्याने निधी दिला जातो"
      ],
      documentsTitle: "📄 आवश्यक कागदपत्रे:",
      documentsList: [
        "आधार कार्ड",
        "जात प्रमाणपत्र (SC/ST)",
        "उत्पन्नाचा दाखला",
        "जमीन मालकीचे कागदपत्र",
        "रहिवासी दाखला"
      ],
      contactTitle: "📞 अधिक माहितीसाठी संपर्क:",
      contactDesc: "आपल्या जिल्ह्यातील आदिवासी प्रकल्प कार्यालय (ITDP Office) किंवा ग्रामपंचायत कार्यालयाशी संपर्क साधा.",
      websiteLabel: "अधिक माहिती:"
    },
    en: {
      heroTitle: "Shabari Awas Yojana",
      title: "Shabari Awas Yojana – Govt. of Maharashtra",
      objectiveTitle: "Objective:",
      objectiveDesc: "The Shabari Awas Yojana is a significant scheme implemented by the Tribal Development Department, Government of Maharashtra. The objective of the scheme is to provide safe and durable houses to needy Scheduled Tribe (tribal) families.",
      beneficiaryTitle: "👨‍👩‍👧 Who are the Beneficiaries?",
      beneficiaryDesc: "This scheme is exclusively for Scheduled Tribe (ST) families. The beneficiary must belong to the BPL (Below Poverty Line) category, own land, and should not possess a concrete house or live in highly dilapidated houses.",
      benefitsTitle: "💰 Benefits Under the Scheme:",
      benefitsList: [
        "Financial assistance of up to approximately ₹1.5 Lakh for house construction",
        "Amount credited directly to the beneficiary's bank account",
        "Technical guidance and supervision provided for house construction"
      ],
      processTitle: "✍️ Application Process:",
      processList: [
        "Contact the Gram Sevak or Integrated Tribal Development Project (ITDP) office",
        "Submit the application form along with required documents",
        "Beneficiary list is finalized after verification",
        "Funds are released in phases after approval"
      ],
      documentsTitle: "📄 Required Documents:",
      documentsList: [
        "Aadhaar Card",
        "Caste Certificate (SC/ST)",
        "Income Certificate",
        "Land ownership documents (7/12 extract, etc.)",
        "Residence Certificate"
      ],
      contactTitle: "📞 Contact for More Information:",
      contactDesc: "Please contact your district's Integrated Tribal Development Project (ITDP) Office or local Gram Panchayat office.",
      websiteLabel: "More Information:"
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
          src="/assets/Ramai-removebg-preview.png"
          alt="shabari awas"
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

      {/* 🔹 BENEFICIARY */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6 font-extrabold">
          {t.beneficiaryTitle}
        </h2>

        <p className="text-lg leading-relaxed font-medium text-gray-600">
          {t.beneficiaryDesc}
        </p>
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
        <h2 className="text-2xl text-green-700 mb-6">
          📄 महत्त्वाची कागदपत्रे:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>आधार कार्ड</li>
          <li>जात प्रमाणपत्र (SC/ST)</li>
          <li>उत्पन्नाचा दाखला</li>
          <li>जमीन मालकीचे कागदपत्र</li>
          <li>रहिवासी दाखला</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 CONTACT */}
      <section className="px-6 md:px-20 py-12 pb-24">
        <h2 className="text-2xl text-green-700 mb-6">
          📞 अधिक माहितीसाठी संपर्क:
        </h2>

        <p className="text-lg leading-relaxed mb-4">
          आपल्या जिल्ह्यातील आदिवासी प्रकल्प कार्यालय (ITDP Office) किंवा ग्रामपंचायत कार्यालयाशी संपर्क साधा.
        </p>

        <p className="text-lg">
          अधिक माहिती:{" "}
          <a
            href="https://tribal.maharashtra.gov.in"
            className="text-blue-600 underline"
          >
            https://tribal.maharashtra.gov.in
          </a>
        </p>
      </section>

    </div>
  );
}