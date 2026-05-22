import React from "react";
import { useLang } from "../../context/LanguageContext";
import { Sprout } from "lucide-react";

const content = {
  mr: {
    schemeHeading: "शेतकऱ्यांसाठी शासकीय योजना (भारत सरकार व महाराष्ट्र शासन)",
    heroTitle: "कृषी",
    heroDesc: "शेतकऱ्यांसाठी कृषी योजना, मार्गदर्शन आणि सेवा",
    links: "🌐 महत्त्वाचे संकेतस्थळे:",
    note: "टीप: अर्ज करताना आधार क्रमांक, 7/12 उतारा, बँक पासबुक, फोटो आवश्यक असतात.",
    schemes: [
      {
        title: "1. प्रधानमंत्री किसान सम्मान निधी योजना (PM-KISAN)",
        points: ["उद्देश: लहान व मध्यम शेतकऱ्यांना थेट आर्थिक मदत देणे.", "लाभ: दरवर्षी ₹6,000 तीन समान हप्त्यांमध्ये बँक खात्यात जमा.", "नोंदणी: pmkisan.gov.in किंवा स्थानिक कृषी अधिकारी."],
      },
      {
        title: "2. महालाभ योजना – मुख्यमंत्री शेतकरी सन्मान योजना",
        points: ["उद्देश: शेतीसाठी आवश्यक संसाधनांसाठी आर्थिक सहाय्य.", "लाभ: सिंचन, बियाणे, खत यावर अनुदान.", "नोंदणी: mahaabhiynkrishi.maharashtra.gov.in"],
      },
      {
        title: "3. प्रधानमंत्री कृषी सिंचाई योजना (PMKSY)",
        points: ["उद्देश: 'जास्त पाणी – अधिक उत्पादन'", "लाभ: ठिबक व तुषार सिंचनासाठी अनुदान.", "नोंदणी: agricop.gov.in"],
      },
      {
        title: "4. राष्ट्रीय अन्नसुरक्षा अभियान (NFSM)",
        points: ["उद्देश: अन्नधान्य उत्पादनात वाढ.", "लाभ: सुधारित बियाणे, यंत्रसामग्रीवर अनुदान.", "नोंदणी: तालुका कृषी अधिकारी."],
      },
      {
        title: "5. शेतकरी अपघात विमा योजना",
        points: ["उद्देश: शेतकऱ्यांच्या अपघाती मृत्यू/अपंगत्वासाठी विमा संरक्षण.", "लाभ: ₹2 लाखांपर्यंत विमा रक्कम.", "नोंदणी: ग्रामपंचायत कार्यालय."],
      },
      {
        title: "6. माती माती माझा अभिमान – मृद व जलसंधारण योजना",
        points: ["उद्देश: जमिनीची सुपीकता व जलसंधारण.", "लाभ: जमिनीची गुणवत्ता सुधारण्यासाठी मदत.", "नोंदणी: mrd.maharashtra.gov.in"],
      },
    ],
  },
  en: {
    schemeHeading: "Government Schemes for Farmers (Govt. of India & Maharashtra)",
    heroTitle: "Agriculture",
    heroDesc: "Agricultural schemes, guidance, and services for farmers",
    links: "🌐 Important Websites:",
    note: "Note: Aadhaar number, 7/12 extract, bank passbook, and photo are required while applying.",
    schemes: [
      {
        title: "1. PM Kisan Samman Nidhi Yojana (PM-KISAN)",
        points: ["Objective: Provide direct financial assistance to small and medium farmers.", "Benefit: ₹6,000 per year deposited in bank account in three equal installments.", "Registration: pmkisan.gov.in or local Agriculture Officer."],
      },
      {
        title: "2. Mahalabh Scheme – Chief Minister Farmer Honour Scheme",
        points: ["Objective: Financial assistance for resources needed for farming.", "Benefit: Subsidy on irrigation, seeds, and fertilizers.", "Registration: mahaabhiynkrishi.maharashtra.gov.in"],
      },
      {
        title: "3. PM Krishi Sinchai Yojana (PMKSY)",
        points: ["Objective: 'More water – more production'", "Benefit: Subsidy on drip and sprinkler irrigation.", "Registration: agricop.gov.in"],
      },
      {
        title: "4. National Food Security Mission (NFSM)",
        points: ["Objective: Increase in food grain production.", "Benefit: Subsidy on improved seeds and machinery.", "Registration: Taluka Agriculture Officer."],
      },
      {
        title: "5. Farmer Accident Insurance Scheme",
        points: ["Objective: Insurance coverage for accidental death/disability of farmers.", "Benefit: Insurance amount up to ₹2 lakh.", "Registration: Gram Panchayat Office."],
      },
      {
        title: "6. Soil & Water Conservation Scheme",
        points: ["Objective: Improve soil fertility and water conservation.", "Benefit: Assistance to improve soil quality.", "Registration: mrd.maharashtra.gov.in"],
      },
    ],
  },
};

export default function Krushi() {
  const { lang } = useLang();
  const c = content[lang];
  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <Sprout size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{c.heroTitle}</h1>
        <p className="text-teal-100 max-w-2xl mx-auto text-sm md:text-base">{c.heroDesc}</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 mb-6">{c.schemeHeading}</h2>

        {c.schemes.map((scheme, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <h3 className="font-semibold text-base sm:text-lg mb-2">{scheme.title}</h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm sm:text-base">
              {scheme.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
        ))}

        <div className="mt-8">
          <h3 className="font-bold text-base sm:text-lg mb-3">{c.links}</h3>
          <ul className="text-blue-600 space-y-2 text-sm sm:text-base break-words">
            <li>https://pmkisan.gov.in</li>
            <li>https://agricop.gov.in</li>
            <li>https://krishi.maharashtra.gov.in</li>
            <li>https://mahadbt.maharashtra.gov.in</li>
          </ul>
        </div>

        <p className="mt-6 text-xs sm:text-sm text-gray-600">{c.note}</p>
      </div>
    </div>
  );
}