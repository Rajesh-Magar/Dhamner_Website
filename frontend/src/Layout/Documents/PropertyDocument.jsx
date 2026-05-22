import { useState } from "react";
import axios from "axios";
import { useLang } from "../../context/LanguageContext";

const localTexts = {
  mr: {
    heroTitle: "मालमत्ता प्रमाणपत्र (असेसमेंट उतारा)",
    instruction: "आपण मालमत्ता प्रमाणपत्रासाठी खाली दिलेल्या ऑनलाइन फॉर्म मध्ये अर्ज करू शकता. कृपया आधी ₹20/- अर्ज फी QR कोड स्कॅन करून भरा व त्याचा स्क्रीनशॉट ठेवा. UTR नंबर भरणे अनिवार्य आहे.",
    placeholderWardNo: "वॉर्ड क्र.",
    placeholderAddress: "रस्त्याचे नाव / गल्लीचा क्रमांक",
    placeholderFullNameEng: "अर्जदाराचे पूर्ण नाव (English)",
    placeholderFullNameMar: "अर्जदाराचे पूर्ण नाव (देवनागरी)",
    placeholderMobile: "व्हाट्सअप मोबाईल क्रमांक",
    placeholderEmail: "ई मेल आय डी",
    placeholderYear: "आर्थिक वर्ष",
    placeholderVillage: "गावाचे नाव",
    placeholderOwnerName: "मालमत्ता धारकाचे नाव",
    placeholderAadhar: "आधार कार्ड क्रमांक",
    placeholderPropertyNo: "मालमत्ता क्रमांक",
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
    heroTitle: "Property Certificate (Assessment Copy)",
    instruction: "You can apply for the property certificate using the online form below. Please pay ₹20/- application fee using QR code first and save the screenshot. UTR number is mandatory.",
    placeholderWardNo: "Ward No.",
    placeholderAddress: "Road Name / Lane Number",
    placeholderFullNameEng: "Applicant's Full Name (English)",
    placeholderFullNameMar: "Applicant's Full Name (Devanagari)",
    placeholderMobile: "WhatsApp Mobile Number",
    placeholderEmail: "Email ID",
    placeholderYear: "Financial Year",
    placeholderVillage: "Village Name",
    placeholderOwnerName: "Property Owner Name",
    placeholderAadhar: "Aadhaar Card Number",
    placeholderPropertyNo: "Property Number",
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

export default function MalmattaDocument() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;
  const [formData, setFormData] = useState({
    wardNo: "",
    address: "",
    fullNameEng: "",
    fullNameMar: "",
    mobile: "",
    email: "",
    year: "",
    village: "",
    ownerName: "",
    aadhar: "",
    propertyNo: "",
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
      await axios.post("https://dhamner-website.onrender.com/api/malmatta-form", data);
      alert(t.alertSuccess);
      // Reset form
      setFormData({
        wardNo: "",
        address: "",
        fullNameEng: "",
        fullNameMar: "",
        mobile: "",
        email: "",
        year: "",
        village: "",
        ownerName: "",
        aadhar: "",
        propertyNo: "",
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
      <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8">
        <h1 className="text-3xl md:text-5xl font-bold">
          {t.heroTitle}
        </h1>

        <img
          src="/assets/Certificate-Logo.png"
          alt="certificate"
          className="w-72 sm:w-96 md:w-[450px] lg:w-[550px]"
        />
      </div>

      {/* INSTRUCTION */}
      <div className="max-w-4xl mx-auto p-4 text-gray-700 text-center">
        <p>
          {t.instruction}
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto p-4 md:p-8 space-y-6"
      >

        {/* Basic Details */}
        <input
          type="text"
          name="wardNo"
          placeholder={t.placeholderWardNo}
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder={t.placeholderAddress}
          className="input"
          onChange={handleChange}
          required
        />

        {/* Name */}
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

        {/* More Details */}
        <input
          type="text"
          name="year"
          placeholder={t.placeholderYear}
          className="input"
          onChange={handleChange}
        />

        <input
          type="text"
          name="village"
          placeholder={t.placeholderVillage}
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="ownerName"
          placeholder={t.placeholderOwnerName}
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

        <input
          type="text"
          name="propertyNo"
          placeholder={t.placeholderPropertyNo}
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