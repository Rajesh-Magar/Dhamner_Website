import React from "react";
import { useLang } from "../../context/LanguageContext";
import { Leaf } from "lucide-react";

const localTexts = {
  mr: {
    heroTitle: "स्वच्छ भारत मिशन",
    heroDesc: "संपूर्ण देशात स्वच्छता वाढवणे, कचरा व्यवस्थापन करणे आणि खुले शौचमुक्त भारत घडवण्यासाठी राष्ट्रीय मोहीम",
    objectiveTitle: "स्वच्छ भारत मिशन – एक राष्ट्रीय स्वच्छता मोहिम",
    schemeObjectiveLabel: "योजनेचा उद्देश:",
    schemeObjectiveDesc: "स्वच्छ भारत मिशन ही भारत सरकारने सुरू केलेली महत्त्वाकांक्षी योजना आहे. या योजनेचा उद्देश संपूर्ण देशात स्वच्छता वाढवणे, स्वच्छ जीवनशैली निर्माण करणे, खुले शौचमुक्त भारत (ODF) घडवणे, कचरा व्यवस्थापन सुधारणे आणि पर्यावरणपूरक स्वच्छता प्रणाली विकसित करणे हा आहे.",
    featuresTitle: "📌 महत्त्वाची वैशिष्ट्ये:",
    featureList: [
      "शौचालयांची निर्मिती व वापरासाठी प्रोत्साहन",
      "ग्रामीण व शहरी भागात स्वच्छतेबाबत जनजागृती",
      "कचरा संकलन, वर्गीकरण आणि पुनर्वापर",
      "प्लास्टिकमुक्त परिसर तयार करणे",
      "लोकसहभागातून अभियानाची अंमलबजावणी"
    ],
    phasesTitle: "🏁 योजनेचे दोन टप्पे (Phases):",
    phaseRuralTitle: "🔹 स्वच्छ भारत मिशन – ग्रामीण (SBM-G):",
    phaseRuralList: [
      "ग्रामीण भागात शौचालय बांधकाम",
      "गाव खुले शौचमुक्त (ODF) घोषित करणे",
      "ग्रामपंचायतीमार्फत निधी वितरण"
    ],
    phaseUrbanTitle: "🔹 स्वच्छ भारत मिशन – शहरी (SBM-U):",
    phaseUrbanList: [
      "शहरी स्वच्छता सुधारणा",
      "सार्वजनिक शौचालये व कचरा व्यवस्थापन",
      "स्मार्ट शहरांमध्ये आधुनिक तंत्रज्ञानाचा वापर"
    ],
    beneficiariesTitle: "👨‍👩‍👧 लाभार्थी:",
    beneficiaryList: [
      "संपूर्ण भारतातील नागरिक, ग्रामपंचायती, नगरपालिका, शाळा व सामाजिक संस्था",
      "गरीब व वंचित कुटुंबांना शौचालय बांधणीसाठी आर्थिक मदत",
      "शहरी भागातील लोकांसाठी सार्वजनिक स्वच्छता सुविधा"
    ],
    subsidyTitle: "🚽 शौचालयासाठी अनुदान:",
    subsidyList: [
      "ग्रामीण भागात पात्र कुटुंबांना ₹12,000 पर्यंत अनुदान",
      "शहरी भागात नगरपालिका/नगरपंचायतीमार्फत सुविधा",
      "बांधकाम पूर्ण झाल्यावर रक्कम थेट खात्यात जमा"
    ],
    awarenessTitle: "📢 जनजागृती व सहभाग:",
    awarenessList: [
      "स्वच्छता अभियान, plastic मुक्त उपक्रम",
      "विद्यार्थ्यांसाठी स्पर्धा, पोस्टर मोहिमा",
      "सामाजिक संस्था व नागरिकांचा सहभाग"
    ],
    contactTitle: "📞 संपर्क व अधिक माहिती:",
    contactWeb: "अधिकृत वेबसाइट",
    contactState: "राज्य स्वच्छता कक्ष, महाराष्ट्र शासन",
    contactLocal: "ग्रामपंचायत / नगरपालिका कार्यालय",
    noteTitle: "📝 टीप:",
    noteList: [
      "शौचालयासाठी अर्ज करताना फोटो, आधार कार्ड, बँक तपशील आणि BPL माहिती आवश्यक असू शकते.",
      "योजना संपूर्ण भारतात लागू असून प्रत्येक राज्यात अंमलबजावणी वेगवेगळ्या पद्धतीने केली जाते."
    ]
  },
  en: {
    heroTitle: "Swachh Bharat Mission",
    heroDesc: "A national campaign to promote cleanliness, manage waste, and make India open defecation free",
    objectiveTitle: "Swachh Bharat Mission – A National Cleanliness Campaign",
    schemeObjectiveLabel: "Objective of the Scheme:",
    schemeObjectiveDesc: "Swachh Bharat Mission is an ambitious initiative launched by the Government of India. The objective of this mission is to promote cleanliness across the country, cultivate a clean lifestyle, build an Open Defecation Free (ODF) India, improve waste management, and develop eco-friendly sanitation systems.",
    featuresTitle: "📌 Key Features:",
    featureList: [
      "Encouragement for construction and usage of toilets",
      "Awareness campaigns on cleanliness in rural and urban areas",
      "Waste collection, segregation, and recycling",
      "Creating plastic-free surroundings",
      "Implementation of the campaign through public participation"
    ],
    phasesTitle: "🏁 Two Phases of the Scheme:",
    phaseRuralTitle: "🔹 Swachh Bharat Mission – Rural (SBM-G):",
    phaseRuralList: [
      "Construction of toilets in rural areas",
      "Declaring villages Open Defecation Free (ODF)",
      "Fund distribution through Gram Panchayats"
    ],
    phaseUrbanTitle: "🔹 Swachh Bharat Mission – Urban (SBM-U):",
    phaseUrbanList: [
      "Improvement of urban sanitation",
      "Public toilets and waste management",
      "Use of modern technology in smart cities"
    ],
    beneficiariesTitle: "👨‍👩‍👧 Beneficiaries:",
    beneficiaryList: [
      "All citizens, Gram Panchayats, Municipalities, schools, and social organizations in India",
      "Financial assistance for poor and underprivileged families to construct toilets",
      "Public sanitation facilities for urban residents"
    ],
    subsidyTitle: "🚽 Subsidy for Toilets:",
    subsidyList: [
      "Subsidy up to ₹12,000 for eligible families in rural areas",
      "Facilities through Municipalities/Municipal Councils in urban areas",
      "Direct transfer to bank accounts upon completion of construction"
    ],
    awarenessTitle: "📢 Awareness & Participation:",
    awarenessList: [
      "Cleanliness drives and plastic-free initiatives",
      "Competitions and poster campaigns for students",
      "Active participation of social organizations and citizens"
    ],
    contactTitle: "📞 Contact & More Information:",
    contactWeb: "Official Website",
    contactState: "State Sanitation Cell, Government of Maharashtra",
    contactLocal: "Gram Panchayat / Municipal Office",
    noteTitle: "📝 Note:",
    noteList: [
      "Photo, Aadhaar card, bank details, and BPL details may be required when applying for toilet subsidy.",
      "The scheme is applicable across India, with implementation details varying by state."
    ]
  }
};

export default function SwachhBharat() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;

  return (
    <div className="w-full bg-gray-50 font-bold text-gray-800">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <Leaf size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heroTitle}</h1>
        <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">{t.heroDesc}</p>
      </div>

      <hr />

      {/* 🔹 TITLE + OBJECTIVE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl text-green-700 mb-4">
          {t.objectiveTitle}
        </h2>

        <p className="text-gray-600 mb-6">(Swachh Bharat Mission – SBM)</p>

        <h3 className="text-xl mb-4">{t.schemeObjectiveLabel}</h3>

        <p className="text-lg leading-relaxed">
          {t.schemeObjectiveDesc}
        </p>
      </section>

      <hr />

      {/* 🔹 FEATURES */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          {t.featuresTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          {t.featureList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* 🔹 PHASES */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          {t.phasesTitle}
        </h2>

        <div className="space-y-6 text-lg">

          <div>
            <h3 className="font-semibold text-xl mb-2">
              {t.phaseRuralTitle}
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              {t.phaseRuralList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              {t.phaseUrbanTitle}
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              {t.phaseUrbanList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <hr />

      {/* 🔹 BENEFICIARIES */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          {t.beneficiariesTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          {t.beneficiaryList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* 🔹 SUBSIDY */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          {t.subsidyTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          {t.subsidyList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* 🔹 AWARENESS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          {t.awarenessTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          {t.awarenessList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* 🔹 CONTACT */}
      <section className="px-6 md:px-20 py-12 pb-24">
        <h2 className="text-2xl text-green-700 mb-6">
          {t.contactTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>
            {t.contactWeb}:{" "}
            <a
              href="https://swachhbharatmission.gov.in"
              className="text-blue-600 underline"
            >
              https://swachhbharatmission.gov.in
            </a>
          </li>
          <li>{t.contactState}</li>
          <li>{t.contactLocal}</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 NOTE */}
      <section className="px-6 md:px-20 py-12 pb-28">
        <h2 className="text-2xl text-red-600 mb-6">
          {t.noteTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          {t.noteList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

    </div>
  );
}