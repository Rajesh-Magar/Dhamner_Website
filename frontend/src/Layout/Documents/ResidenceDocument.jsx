import { useState } from "react";
import axios from "axios";
import { useLang } from "../../context/LanguageContext";
import { FileText } from "lucide-react";

const localTexts = {
  mr: {
    heroTitle: "रहिवासी प्रमाणपत्र",
    heroDesc: "रहिवासी दाखल्यासाठी ऑनलाइन अर्ज करा",
    placeholderMalmattaNo: "मालमत्ता क्रमांक",
    placeholderWardNo: "वॉर्ड क्र",
    placeholderStreet: "रस्त्याचे नाव / गल्लीचा क्रमांक",
    placeholderMobile: "व्हाट्सअप मोबाईल क्रमांक",
    placeholderEmail: "ई मेल आय डी",
    placeholderFullNameEng: "अर्जदाराचे पूर्ण नाव (इंग्रजी)",
    placeholderFullNameMar: "अर्जदाराचे पूर्ण नाव (देवनागरी)",
    placeholderAadhar: "आधार कार्ड क्रमांक",
    placeholderYear: "आर्थिक वर्ष",
    placeholderAddress: "पूर्ण पत्ता",
    paymentLabel: "₹20/- रुपये शुल्क भरल्यानंतर UTR नंबर टाका",
    placeholderUtr: "UTR नंबर",
    labelPaymentScreenshot: "आपण केलेल्या पेमेंटचा स्क्रीनशॉट अपलोड करा *",
    maxSize: "Maximum file size: 10 MB",
    btnSubmit: "अर्ज पाठवा",
    alertNoScreenshot: "कृपया स्क्रीनशॉट अपलोड करा!",
    alertSuccess: "अर्ज यशस्वीरित्या पाठवला गेला आहे ✅",
    alertUnknownError: "अज्ञात त्रुटी"
  },
  en: {
    heroTitle: "Residence Certificate",
    heroDesc: "Apply online for Residence Certificate",
    placeholderMalmattaNo: "Property Number",
    placeholderWardNo: "Ward No.",
    placeholderStreet: "Road Name / Lane Number",
    placeholderMobile: "WhatsApp Mobile Number",
    placeholderEmail: "Email ID",
    placeholderFullNameEng: "Applicant's Full Name (English)",
    placeholderFullNameMar: "Applicant's Full Name (Devanagari)",
    placeholderAadhar: "Aadhaar Card Number",
    placeholderYear: "Financial Year",
    placeholderAddress: "Full Address",
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

export default function ResidenceDocument() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;
  const [formData, setFormData] = useState({
    malmattaNo: "",
    wardNo: "",
    street: "",
    fullNameEng: "",
    fullNameMar: "",
    aadhar: "",
    mobile: "",
    email: "",
    year: "",
    address: "",
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
      await axios.post(`${window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? "http://localhost:5000" : "https://dhamner-website.onrender.com"}/api/residence-form`, data);
      window.location.href = "/thank-you";
      // Reset form
      setFormData({
        malmattaNo: "",
        wardNo: "",
        street: "",
        fullNameEng: "",
        fullNameMar: "",
        aadhar: "",
        mobile: "",
        email: "",
        year: "",
        address: "",
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
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <FileText size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heroTitle}</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-sm md:text-base">{t.heroDesc}</p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto p-4 md:p-8 space-y-6"
      >
        {/* Property Info */}
        <input
          type="text"
          name="malmattaNo"
          placeholder={t.placeholderMalmattaNo}
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="wardNo"
          placeholder={t.placeholderWardNo}
          className="input"
          onChange={handleChange}
        />

        <input
          type="text"
          name="street"
          placeholder={t.placeholderStreet}
          className="input"
          onChange={handleChange}
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

        <input
          type="text"
          name="aadhar"
          placeholder={t.placeholderAadhar}
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

        {/* Address */}
        <textarea
          name="address"
          placeholder={t.placeholderAddress}
          className="input"
          onChange={handleChange}
          required
        />

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
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full">
          {t.btnSubmit}
        </button>
      </form>

      {/* COMMON STYLE */}
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