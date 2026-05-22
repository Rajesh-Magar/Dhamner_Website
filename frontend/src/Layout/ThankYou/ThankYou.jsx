import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";
import { CheckCircle, Home } from "lucide-react";

const content = {
  mr: {
    title: "धन्यवाद!",
    subtitle: "फॉर्म यशस्वीरीत्या सबमिट झाला आहे",
    message: "तुमची माहिती आमच्याकडे यशस्वीरीत्या जतन करण्यात आली आहे. आवश्यकतेनुसार आम्ही पुढील कार्यवाही करून आपल्याशी संपर्क साधू.",
    btnText: "मुख्यपृष्ठावर जा",
  },
  en: {
    title: "Thank You!",
    subtitle: "Form Submitted Successfully",
    message: "Your details have been successfully recorded in our system. We will review your submission and get back to you shortly.",
    btnText: "Back to Home Page",
  },
};

const ThankYou = () => {
  const { lang } = useLang();
  const t = content[lang] || content.mr;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-30 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-200 rounded-full filter blur-3xl opacity-30 animate-pulse pointer-events-none"></div>

      <div className="relative max-w-lg w-full bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-100 p-8 sm:p-12 text-center transform transition duration-500 hover:scale-[1.01]">
        {/* Pulsing Checkmark Badge */}
        <div className="relative flex justify-center mb-8">
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-25 animate-ping w-24 h-24 mx-auto"></div>
          <div className="relative bg-gradient-to-tr from-green-600 to-green-400 p-5 rounded-full text-white shadow-lg w-24 h-24 flex items-center justify-center">
            <CheckCircle size={52} className="stroke-[2.5]" />
          </div>
        </div>

        {/* Text Details */}
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
          {t.title}
        </h1>
        <p className="text-lg font-semibold text-green-700 mb-6">
          {t.subtitle}
        </p>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-md mx-auto text-sm sm:text-base">
          {t.message}
        </p>

        {/* Home Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:from-green-800 hover:to-green-600 active:scale-95 transition-all duration-300 group cursor-pointer"
        >
          <Home size={18} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          <span>{t.btnText}</span>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
