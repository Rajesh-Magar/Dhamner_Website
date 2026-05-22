import React from "react";
import { useLang } from "../../context/LanguageContext";
import { FileText } from "lucide-react";

export default function FinanceCommission15() {
  const { lang } = useLang();

  const localTexts = {
    mr: {
      heroTitle: "15 वा वित्त आयोग",
      heroDesc: "केंद्र आणि राज्य सरकारांमधील आर्थिक संसाधनांचे वाटप व शिफारसी",
      title: "15 वा वित्त आयोग (15व्या वित्त आयोगाची सविस्तर माहिती)",
      introTitle: "परिचय:",
      introDesc: "भारत सरकारचा वित्त आयोग हा एक घटनात्मक संस्था आहे, जो भारतीय संविधानाच्या अनुच्छेद 280 अंतर्गत स्थापन केला जातो. वित्त आयोगाचे मुख्य कार्य म्हणजे केंद्र आणि राज्य सरकारांमधील आर्थिक संसाधनांचे वाटप करण्यासाठी शिफारसी देणे. 15 वा वित्त आयोग (Fifteenth Finance Commission) 3 जानेवारी 2018 रोजी स्थापन करण्यात आला होता.",
      tenureTitle: "📅 कार्यकाळ:",
      tenureDesc: "15व्या वित्त आयोगाचा कार्यकाळ 1 एप्रिल 2020 ते 31 मार्च 2026 पर्यंत आहे.",
      establishmentTitle: "🏛️ आयोगाची स्थापना:",
      establishmentList: [
        "स्थापना दिनांक: 3 जानेवारी 2018",
        "अध्यक्ष: श्री. एन. के. सिंह (माजी IAS अधिकारी)",
        "इतर सदस्य: अशोक लाहिरी, अंजू सरूप, रमेश चंद, Amitabh Kant (नंतर समाविष्ट)",
        "कार्यकाळ: 6 वर्षे (2020–26)"
      ],
      recommendationsTitle: "📌 15व्या वित्त आयोगाच्या प्रमुख शिफारसी:",
      recommendationsList: [
        {
          title: "1. राज्यांना अनुदान वितरण:",
          items: [
            "राज्यांना एकूण कर महसुलातून 41% हिस्सा देण्याची शिफारस (14व्या आयोगात 42% होता)",
            "वाटपासाठी घटक: लोकसंख्या, प्रति व्यक्ती उत्पन्न, वनक्षेत्र, लोकसंख्या घनता, कर संकलन कार्यक्षमता"
          ]
        },
        {
          title: "2. स्थानिक स्वराज्य संस्थांसाठी निधी:",
          items: [
            "₹4.36 लाख कोटींचे अनुदान",
            "ग्रामपंचायत, नगरपालिका आणि जिल्हा परिषदांसाठी निधी",
            "मूलभूत अनुदान",
            "कार्यक्षमतेवर आधारित अनुदान",
            "आपत्कालीन व्यवस्थापनासाठी निधी"
          ]
        }
      ],
      specialFundsTitle: "🛡️ विशेष निधी:",
      specialFundsList: [
        "संरक्षणासाठी स्वतंत्र निधी (Defence Modernization Fund)"
      ],
      sdgTitle: "🌍 SDG (Sustainable Development Goals):",
      sdgList: [
        "राज्यांना विकास उद्दिष्टे साध्य करण्यासाठी प्रोत्साहन"
      ],
      maharashtraShareTitle: "💰 महाराष्ट्राला मिळालेला वाटा:",
      maharashtraShareDesc: "15व्या वित्त आयोगानुसार महाराष्ट्राला केंद्र सरकारकडून ₹40,875 कोटी इतके अनुदान मिळण्याची शिफारस करण्यात आली होती. यात ग्रामपंचायत, नगरपालिका आणि जिल्हा परिषदांचा समावेश आहे.",
      importanceTitle: "⭐ महत्व:",
      importanceList: [
        "COVID-19 नंतर सार्वजनिक आरोग्यावर अधिक भर",
        "स्थानिक स्वराज्य संस्थांना बळकट करण्यावर लक्ष",
        "राज्यांतील आर्थिक असमतोल कमी करण्याचा प्रयत्न"
      ],
      conclusionTitle: "📌 निष्कर्ष:",
      conclusionDesc: "15वा वित्त आयोग केंद्र आणि राज्यांमधील आर्थिक समन्वय मजबूत करण्यासाठी महत्त्वाचा टप्पा ठरला आहे. स्थानिक स्वराज्य संस्थांना मिळालेल्या निधीमुळे विकासकामांना गती मिळाली आहे."
    },
    en: {
      heroTitle: "15th Finance Commission",
      heroDesc: "Recommendations and allocation of financial resources between Central and State Governments",
      title: "15th Finance Commission (Detailed Information)",
      introTitle: "Introduction:",
      introDesc: "The Finance Commission of India is a constitutional body established under Article 280 of the Indian Constitution. Its primary function is to make recommendations on the distribution of financial resources between the Central and State Governments. The 15th Finance Commission was established on January 3, 2018.",
      tenureTitle: "📅 Tenure:",
      tenureDesc: "The tenure of the 15th Finance Commission is from April 1, 2020 to March 31, 2026.",
      establishmentTitle: "🏛️ Establishment of the Commission:",
      establishmentList: [
        "Establishment Date: January 3, 2018",
        "Chairman: Shri N. K. Singh (Former IAS Officer)",
        "Other Members: Ashok Lahiri, Anju Sarup, Ramesh Chand, Amitabh Kant (added later)",
        "Tenure: 6 Years (2020–26)"
      ],
      recommendationsTitle: "📌 Key Recommendations of the 15th Finance Commission:",
      recommendationsList: [
        {
          title: "1. Devolution of Taxes to States:",
          items: [
            "Recommended sharing 41% of the total tax pool with States (it was 42% in the 14th Commission)",
            "Criteria for allocation: Population, Per Capita Income, Forest Cover, Demographic Performance, Tax Effort"
          ]
        },
        {
          title: "2. Grants for Local Bodies:",
          items: [
            "Grants amounting to ₹4.36 Lakh Crore",
            "Funds allocated for Gram Panchayats, Municipal Corporations, and Zilla Parishads",
            "Basic Grants",
            "Performance-linked Grants",
            "Funds for disaster management"
          ]
        }
      ],
      specialFundsTitle: "🛡️ Special Funds:",
      specialFundsList: [
        "Separate Modernization Fund for Defence and Internal Security (Defence Modernization Fund)"
      ],
      sdgTitle: "🌍 SDG (Sustainable Development Goals):",
      sdgList: [
        "Incentives for states to achieve sustainable development goals"
      ],
      maharashtraShareTitle: "💰 Maharashtra's Share:",
      maharashtraShareDesc: "According to the 15th Finance Commission, a grant of ₹40,875 Crore was recommended for Maharashtra from the Central Government. This includes funds for Gram Panchayats, Municipal Corporations, and Zilla Parishads.",
      importanceTitle: "⭐ Significance:",
      importanceList: [
        "Increased focus on public health after COVID-19",
        "Emphasis on strengthening local self-government bodies",
        "Efforts to reduce financial disparities among states"
      ],
      conclusionTitle: "📌 Conclusion:",
      conclusionDesc: "The 15th Finance Commission has been a key step in strengthening financial coordination between the Centre and the States. The funds received by local self-governments have accelerated development works."
    }
  };

  const t = localTexts[lang] || localTexts.mr;

  return (
    <div className="w-full bg-gray-50 font-bold text-gray-800">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <FileText size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heroTitle}</h1>
        <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">{t.heroDesc}</p>
      </div>

      <hr />

      {/* 🔹 INTRO */}
      <section className="px-6 md:px-20 py-10 md:py-12">
        <h2 className="text-2xl md:text-3xl text-green-700 mb-4 md:mb-6">
          {t.title}
        </h2>

        <h3 className="text-lg md:text-xl mb-3">{t.introTitle}</h3>

        <p className="text-base md:text-lg leading-relaxed font-medium text-gray-600">
          {t.introDesc}
        </p>
      </section>

      <hr />

      {/* 🔹 TENURE */}
      <section className="px-6 md:px-20 py-10 md:py-12">
        <h2 className="text-xl md:text-2xl text-green-700 mb-4 md:mb-6">
          {t.tenureTitle}
        </h2>

        <p className="text-base md:text-lg font-medium text-gray-600">
          {t.tenureDesc}
        </p>
      </section>

      <hr />

      {/* 🔹 ESTABLISHMENT */}
      <section className="px-6 md:px-20 py-10 md:py-12">
        <h2 className="text-xl md:text-2xl text-green-700 mb-4 md:mb-6">
          {t.establishmentTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg font-medium text-gray-600">
          {t.establishmentList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* 🔹 RECOMMENDATIONS */}
      <section className="px-6 md:px-20 py-10 md:py-12">
        <h2 className="text-xl md:text-2xl text-green-700 mb-4 md:mb-6">
          {t.recommendationsTitle}
        </h2>

        <div className="space-y-6 text-base md:text-lg font-medium text-gray-600">
          {t.recommendationsList.map((rec, idx) => (
            <div key={idx}>
              <h3 className="font-semibold mb-2 text-gray-700">
                {rec.title}
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                {rec.items.map((item, sidx) => (
                  <li key={sidx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* 🔹 SPECIAL FUNDS */}
      <section className="px-6 md:px-20 py-10 md:py-12">
        <h2 className="text-xl md:text-2xl text-green-700 mb-4 md:mb-6">
          {t.specialFundsTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg font-medium text-gray-600">
          {t.specialFundsList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* 🔹 SDG */}
      <section className="px-6 md:px-20 py-10 md:py-12">
        <h2 className="text-xl md:text-2xl text-green-700 mb-4 md:mb-6">
          {t.sdgTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg font-medium text-gray-600">
          {t.sdgList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* 🔹 MAHARASHTRA SHARE */}
      <section className="px-6 md:px-20 py-10 md:py-12">
        <h2 className="text-xl md:text-2xl text-green-700 mb-4 md:mb-6">
          {t.maharashtraShareTitle}
        </h2>

        <p className="text-base md:text-lg leading-relaxed font-medium text-gray-600">
          {t.maharashtraShareDesc}
        </p>
      </section>

      <hr />

      {/* 🔹 IMPORTANCE */}
      <section className="px-6 md:px-20 py-10 md:py-12">
        <h2 className="text-xl md:text-2xl text-green-700 mb-4 md:mb-6">
          {t.importanceTitle}
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg font-medium text-gray-600">
          {t.importanceList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* 🔹 CONCLUSION */}
      <section className="px-6 md:px-20 py-10 md:py-12 pb-20">
        <h2 className="text-xl md:text-2xl text-green-700 mb-4 md:mb-6">
          {t.conclusionTitle}
        </h2>

        <p className="text-base md:text-lg leading-relaxed font-medium text-gray-600">
          {t.conclusionDesc}
        </p>
      </section>

    </div>
  );
}