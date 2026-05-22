import React from "react";
import { useLang } from "../../context/LanguageContext";
import { HeartPulse } from "lucide-react";

export default function Ayushman() {
  const { lang } = useLang();

  const localTexts = {
    mr: {
      heroTitle: "आयुष्मान भारत योजना",
      heroDesc: "पात्र कुटुंबांना ५ लाख रुपयांपर्यंत मोफत वैद्यकीय उपचार मिळवण्यासाठी आयुष्मान भारत योजना",
      title: "आयुष्मान भारत योजना – जन आरोग्य अभियान (PM-JAY)",
      objectiveTitle: "योजनेचा उद्देश:",
      objectiveDesc: "आयुष्मान भारत योजना ही केंद्र सरकारची महत्त्वाकांक्षी आरोग्य योजना आहे. या योजनेचा मुख्य उद्देश म्हणजे गरीब आणि गरजू कुटुंबांना मोफत आरोग्य सेवा प्रदान करणे, विशेषतः जे उपचार घेऊ शकत नाहीत अशा गंभीर आजारांसाठी रुग्णालयीन उपचाराचा खर्च सरकारकडून उचलला जातो.",
      featuresTitle: "🎯 योजनेची वैशिष्ट्ये:",
      featuresList: [
        "भारतामधील सर्व पात्र कुटुंबांना प्रति वर्ष ₹5 लाखांपर्यंत मोफत आरोग्य विमा कवच",
        "शस्त्रक्रिया, औषधे, निदान तपासण्या, हॉस्पिटलमध्ये दाखल होणे यांचा समावेश",
        "सरकारी तसेच खाजगी रुग्णालयांमध्ये मोफत उपचार सुविधा",
        "कॅशलेस व पेपरलेस प्रक्रिया",
        "देशभरातील 15000+ रुग्णालयांमध्ये सेवा उपलब्ध"
      ],
      benefitsTitle: "📄 योजनेंतर्गत लाभ:",
      benefitsList: [
        "₹5 लाख पर्यंतचा आरोग्य विमा दरवर्षी कुटुंबासाठी",
        "1300+ पेक्षा जास्त उपचार पॅकेजेस (शस्त्रक्रिया, कर्करोग उपचार, डायलिसिस, इ.)",
        "उपचारासाठी रुग्णालयात भरतीपूर्वी 3 दिवस आणि डिस्चार्जनंतर 15 दिवसांपर्यंतचा खर्च समाविष्ट",
        "औषधे, तपासण्या आणि निवास यांचाही समावेश"
      ],
      eligibilityTitle: "👨‍👩‍👧 पात्रता (Eligibility):",
      eligibilityList: [
        "ग्रामीण भागातील गरीब व वंचित कुटुंबे (SECC 2011 नुसार)",
        "शहरी भागातील कामगार वर्ग, असंघटित क्षेत्रातील नागरिक",
        "लाभ घेण्यासाठी कोणतीही नोंदणी फी किंवा प्रीमियम आवश्यक नाही",
        "महाराष्ट्रात ही योजना \"महत्मा फुले जन आरोग्य योजना\" सोबत एकत्रितपणे राबवली जाते"
      ],
      facilitiesTitle: "🏥 उपलब्ध सुविधा:",
      facilitiesList: [
        "कॅशलेस आणि पेपरलेस उपचार",
        "देशभरातील सूचीबद्ध सरकारी व खाजगी रुग्णालयांमध्ये सेवा",
        "24x7 हेल्पलाइन आणि सुविधा केंद्रे"
      ],
      documentsTitle: "📑 आवश्यक कागदपत्रे:",
      documentsList: [
        "आधार कार्ड",
        "राशन कार्ड किंवा SECC यादीतील नाव",
        "आयुष्मान भारत कार्ड (ABHA ID – Health ID)",
        "लाभार्थ्याच्या नावासहित मोबाईल क्रमांक"
      ],
      processTitle: "✍️ अर्ज व नोंदणी प्रक्रिया:",
      processList: [
        "नजीकच्या आयुष्मान भारत सुविधा केंद्रात (CSC / जनसेवा केंद्र) भेट द्या",
        "आपले नाव यादीत आहे का ते तपासा (https://pmjay.gov.in वरून)",
        "कागदपत्रांसह AB-PMJAY कार्ड तयार करून घ्या",
        "रुग्णालयात दाखल होताना हे कार्ड दाखवून कॅशलेस उपचार घ्या"
      ],
      contactTitle: "📞 संपर्क व अधिक माहिती:",
      contactHelp: "राष्ट्रीय हेल्पलाइन: 14555 / 1800-111-565",
      websiteLabel: "वेबसाइट:",
      maharashtraLabel: "महाराष्ट्रासाठी:",
      tipsTitle: "❗ महत्त्वाची टिप:",
      tipsList: [
        "महाराष्ट्र राज्यात आयुष्मान भारत योजना \"महत्मा फुले जन आरोग्य योजना\" (MPJAY) बरोबर एकत्र राबवली जाते.",
        "त्यामुळे लाभार्थी दोन्ही योजनांचे फायदे घेऊ शकतात.",
        "लाभ घेण्याआधी आपल्या नावाची यादीत खात्री करणे आवश्यक आहे."
      ]
    },
    en: {
      heroTitle: "Ayushman Bharat Scheme",
      heroDesc: "Ayushman Bharat scheme to provide free medical treatment up to ₹5 Lakhs for eligible families",
      title: "Ayushman Bharat Scheme – Jan Arogya Yojana (PM-JAY)",
      objectiveTitle: "Scheme Objective:",
      objectiveDesc: "Ayushman Bharat Yojana is an ambitious health insurance scheme of the Central Government. The primary objective is to provide free healthcare services to poor and vulnerable families, bearing the hospitalization cost for severe illnesses that they cannot afford.",
      featuresTitle: "🎯 Features of the Scheme:",
      featuresList: [
        "Free health cover up to ₹5 Lakh per year for all eligible families in India",
        "Includes surgeries, medicines, diagnostic tests, and hospitalization expenses",
        "Free treatment facilities in listed government as well as private hospitals",
        "Completely cashless and paperless transactions",
        "Services available across 15,000+ impanelled hospitals nationwide"
      ],
      benefitsTitle: "📄 Benefits Under the Scheme:",
      benefitsList: [
        "Health insurance up to ₹5 Lakh annually for the family",
        "Over 1300+ medical packages (surgeries, cancer treatment, dialysis, etc.)",
        "Pre-hospitalization expenses for 3 days and post-hospitalization for 15 days included",
        "Includes cost of medicines, diagnostics, and food/stay during hospitalization"
      ],
      eligibilityTitle: "👨‍👩‍👧 Eligibility:",
      eligibilityList: [
        "Poor and deprived rural families (based on SECC 2011 data)",
        "Urban workers and citizens in unorganized sectors",
        "No registration fee or premium payment required to avail benefits",
        "In Maharashtra, it is implemented jointly with the Mahatma Jyotirao Phule Jan Arogya Yojana"
      ],
      facilitiesTitle: "🏥 Available Facilities:",
      facilitiesList: [
        "Cashless and paperless treatment",
        "Services in listed government and private hospitals across the country",
        "24x7 helpline assistance and facilitation centers"
      ],
      documentsTitle: "📑 Required Documents:",
      documentsList: [
        "Aadhaar Card",
        "Ration Card or name in the SECC list",
        "Ayushman Bharat Card (ABHA ID – Health ID)",
        "Mobile number linked with the beneficiary's name"
      ],
      processTitle: "✍️ Application & Registration Process:",
      processList: [
        "Visit your nearest Ayushman Bharat facilitation center (CSC / Citizen Service Center)",
        "Check if your name is in the beneficiary list (via https://pmjay.gov.in)",
        "Get your AB-PMJAY card created by submitting the required documents",
        "Show this card at the time of hospital admission to receive cashless treatment"
      ],
      contactTitle: "📞 Contact & More Information:",
      contactHelp: "National Helpline: 14555 / 1800-111-565",
      websiteLabel: "Website:",
      maharashtraLabel: "For Maharashtra:",
      tipsTitle: "❗ Important Note:",
      tipsList: [
        "In Maharashtra, the Ayushman Bharat scheme is jointly implemented with the Mahatma Phule Jan Arogya Yojana (MPJAY).",
        "Hence, beneficiaries can avail benefits from both schemes.",
        "It is necessary to confirm your name in the eligible list before seeking treatment."
      ]
    }
  };

  const t = localTexts[lang] || localTexts.mr;

  return (
    <div className="w-full bg-gray-50 font-bold text-gray-800">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <HeartPulse size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heroTitle}</h1>
        <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">{t.heroDesc}</p>
      </div>

      <hr className="border-gray-300" />

      {/* 🔹 TITLE + OBJECTIVE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl md:text-4xl text-green-700 mb-6 font-extrabold">
          {t.title}
        </h2>

        <h3 className="text-xl mb-4 font-bold text-gray-700">{t.objectiveTitle}</h3>

        <p className="leading-relaxed text-lg font-medium text-gray-600">
          {t.objectiveDesc}
        </p>
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 FEATURES */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl text-green-700 mb-6 font-extrabold">
          {t.featuresTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg font-medium text-gray-600">
          {t.featuresList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 BENEFITS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl text-green-700 mb-6 font-extrabold">
          {t.benefitsTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg font-medium text-gray-600">
          {t.benefitsList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 ELIGIBILITY */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl text-green-700 mb-6 font-extrabold">
          {t.eligibilityTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg font-medium text-gray-600">
          {t.eligibilityList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 FACILITIES */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl text-green-700 mb-6 font-extrabold">
          {t.facilitiesTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg font-medium text-gray-600">
          {t.facilitiesList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 DOCUMENTS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl text-green-700 mb-6 font-extrabold">
          {t.documentsTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg font-medium text-gray-600">
          {t.documentsList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 PROCESS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl text-green-700 mb-6 font-extrabold">
          {t.processTitle}
        </h2>

        <ol className="list-decimal pl-6 space-y-4 text-lg font-medium text-gray-600">
          {t.processList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 CONTACT */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl text-green-700 mb-6 font-extrabold">
          {t.contactTitle}
        </h2>

        <ul className="space-y-4 text-lg font-medium text-gray-600">
          <li>{t.contactHelp}</li>
          <li>
            {t.websiteLabel}{" "}
            <a href="https://pmjay.gov.in" target="_blank" rel="noreferrer" className="text-blue-600 underline">
              https://pmjay.gov.in
            </a>
          </li>
          <li>
            {t.maharashtraLabel}{" "}
            <a href="https://www.jeevandaye.gov.in" target="_blank" rel="noreferrer" className="text-blue-600 underline">
              https://www.jeevandaye.gov.in
            </a>
          </li>
        </ul>
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 TIPS */}
      <section className="px-6 md:px-20 py-12 pb-24">
        <h2 className="text-2xl md:text-3xl text-red-600 mb-6 font-extrabold">
          {t.tipsTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg font-medium text-gray-600">
          {t.tipsList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

    </div>
  );
}