import { useState } from "react";
import axios from "axios";
import { useLang } from "../../context/LanguageContext";
import { HeartPulse } from "lucide-react";

const localTexts = {
  mr: {
    heroTitle: "मृत्यू प्रमाणपत्रासाठी अर्ज",
    heroDesc: "मृत्यू प्रमाणपत्रासाठी ऑनलाइन अर्ज करा",
    instruction: "आपण मृत्यू प्रमाणपत्रासाठी खाली दिलेल्या ऑनलाइन फॉर्म मध्ये अर्ज करू शकता. कृपया आधी ₹20/- फी QR कोड स्कॅन करून भरा व त्याचा स्क्रीनशॉट ठेवा. UTR नंबर भरणे अनिवार्य आहे.",
    labelDeathDate: "मृत्यूची तारीख :",
    labelDeathTime: "मृत्यूची वेळ :",
    placeholderDeathReason: "मृत्यू कारण",
    placeholderFullNameEng: "अर्जदाराचे पूर्ण नाव (English)",
    placeholderFullNameMar: "अर्जदाराचे पूर्ण नाव (Marathi)",
    placeholderYear: "आर्थिक वर्ष",
    placeholderDeceasedName: "मृत व्यक्तीचे नाव",
    placeholderAadhar: "आधार कार्ड क्रमांक",
    placeholderAddress: "पत्ता",
    placeholderMobile: "व्हाट्सअप मोबाईल क्रमांक *",
    placeholderEmail: "ईमेल",
    paymentLabel: "₹20 शुल्क भरल्यानंतर UTR नंबर टाका",
    placeholderUtr: "UTR नंबर",
    labelPaymentScreenshot: "आपण केलेल्या पेमेंटचा स्क्रीनशॉट अपलोड करा *",
    maxSize: "कमाल फाइल साइज: 10 MB",
    btnSubmit: "अर्ज पाठवा",
    alertNoScreenshot: "कृपया स्क्रीनशॉट अपलोड करा!",
    alertSuccess: "अर्ज यशस्वीरित्या पाठवला गेला आहे ✅",
    alertUnknownError: "अज्ञात त्रुटी"
  },
  en: {
    heroTitle: "Death Certificate Application",
    heroDesc: "Apply online for Death Certificate",
    instruction: "You can apply for the death certificate using the online form below. Please pay ₹20/- fee using QR code first and save the screenshot. UTR number is mandatory.",
    labelDeathDate: "Date of Death :",
    labelDeathTime: "Time of Death :",
    placeholderDeathReason: "Reason of Death",
    placeholderFullNameEng: "Applicant's Full Name (English)",
    placeholderFullNameMar: "Applicant's Full Name (Marathi)",
    placeholderYear: "Financial Year",
    placeholderDeceasedName: "Name of Deceased",
    placeholderAadhar: "Aadhaar Card Number",
    placeholderAddress: "Address",
    placeholderMobile: "WhatsApp Mobile Number *",
    placeholderEmail: "Email",
    paymentLabel: "Pay ₹20 fee and enter UTR number",
    placeholderUtr: "UTR Number",
    labelPaymentScreenshot: "Upload a screenshot of the payment made *",
    maxSize: "Maximum file size: 10 MB",
    btnSubmit: "Submit Application",
    alertNoScreenshot: "Please upload the screenshot!",
    alertSuccess: "Form submitted successfully ✅",
    alertUnknownError: "Unknown Error"
  }
};

export default function DeathForm() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;

  const [formData, setFormData] = useState({
    deathDate: "",
    deathTime: "",
    deathReason: "",
    fullNameEng: "",
    fullNameMar: "",
    year: "",
    deceasedName: "",
    aadhar: "",
    address: "",
    mobile: "",
    email: "",
    utr: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate file is selected
    if (!file) {
      alert(t.alertNoScreenshot);
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    data.append("screenshot", file);

    try {
      await axios.post(`${window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? "http://localhost:5000" : "https://dhamner-website.onrender.com"}/api/death-form`, data);
      window.location.href = "/thank-you";
      // Reset form
      setFormData({
        deathDate: "",
        deathTime: "",
        deathReason: "",
        fullNameEng: "",
        fullNameMar: "",
        year: "",
        deceasedName: "",
        aadhar: "",
        address: "",
        mobile: "",
        email: "",
        utr: "",
      });
      setFile(null);
    } catch (err) {
      console.error("Full Error:", err.response?.data || err.message);
      const errorMsg = err.response?.data?.message || err.message || t.alertUnknownError;
      alert(errorMsg);
    }
  };

  return (
    <div className="w-full">
      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <HeartPulse size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heroTitle}</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-sm md:text-base">{t.heroDesc}</p>
      </div>

      {/* INSTRUCTION */}
      <div className="max-w-4xl mx-auto p-4 text-gray-700 text-center font-semibold">
        <p>
          {t.instruction}
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto p-4 md:p-8 space-y-6"
      >
        {/* Death Info */}
        <label className="block font-semibold text-gray-700">
          {t.labelDeathDate}
          <input
            type="date"
            name="deathDate"
            className="input mt-1"
            onChange={handleChange}
            required
          />
        </label>
        <label className="block font-semibold text-gray-700">
          {t.labelDeathTime}
          <input
            type="time"
            name="deathTime"
            className="input mt-1"
            placeholder=""
            onChange={handleChange}
          />
        </label>

        <input
          type="text"
          name="deathReason"
          placeholder={t.placeholderDeathReason}
          className="input"
          onChange={handleChange}
          required
        />

        {/* Applicant */}
        <input
          type="text"
          name="fullNameEng"
          placeholder={t.placeholderFullNameEng}
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="fullNameMar"
          placeholder={t.placeholderFullNameMar}
          className="input"
          onChange={handleChange}
          required
        />

        {/* Year */}
        <input
          type="text"
          name="year"
          placeholder={t.placeholderYear}
          className="input"
          onChange={handleChange}
        />

        {/* Deceased */}
        <input
          type="text"
          name="deceasedName"
          placeholder={t.placeholderDeceasedName}
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="aadhar"
          placeholder={t.placeholderAadhar}
          className="input"
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder={t.placeholderAddress}
          className="input"
          onChange={handleChange}
          required
        />

        {/* Contact */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="mobile"
            placeholder={t.placeholderMobile}
            className="input"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t.placeholderEmail}
            className="input"
            onChange={handleChange}
          />
        </div>

        {/* PAYMENT */}
        <div className="text-center space-y-4">
          <img
            src="/assets/GramnidhiQr.jpeg"
            alt="QR"
            className="mx-auto w-64 md:w-80"
          />

          <p className="font-semibold text-gray-700">
            {t.paymentLabel}
          </p>

          <input
            type="text"
            name="utr"
            placeholder={t.placeholderUtr}
            className="input"
            onChange={handleChange}
            required
          />

          {/* Upload */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">
              {t.labelPaymentScreenshot}
            </label>

            <input
              type="file"
              onChange={handleFileChange}
              className="block mx-auto border p-2 rounded"
              required
            />

            <p className="text-sm text-gray-500">
              {t.maxSize}
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full font-bold">
          {t.btnSubmit}
        </button>
      </form>

      {/* STYLE */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 6px;
          }
        `}
      </style>
    </div>
  );
}