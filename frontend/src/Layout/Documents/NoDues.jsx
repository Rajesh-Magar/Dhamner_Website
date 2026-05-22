import { useState } from "react";
import axios from "axios";
import { useLang } from "../../context/LanguageContext";

const localTexts = {
  mr: {
    heroTitle: "थकबाकी नसल्याचे प्रमाणपत्र",
    placeholderPropertyNo: "मालमत्ता क्रमांक",
    placeholderWardNo: "वॉर्ड क्र.",
    placeholderAddress: "रस्त्याचे नाव / गल्लीचा क्रमांक",
    placeholderFullNameEng: "अर्जदाराचे पूर्ण नाव (English)",
    placeholderFullNameMar: "अर्जदाराचे पूर्ण नाव (देवनागरी)",
    placeholderMobile: "व्हाट्सअप मोबाईल क्रमांक",
    placeholderEmail: "ई मेल आय डी",
    placeholderYear: "आर्थिक वर्ष",
    placeholderOwnerName: "मालमत्ता धारकाचे नाव",
    placeholderAadhar: "आधार कार्ड क्रमांक",
    placeholderVillage: "गावाचे नाव",
    btnSubmit: "अर्ज पाठवा",
    alertSuccess: "अर्ज यशस्वीरित्या पाठवला गेला आहे ✅",
    alertUnknownError: "अज्ञात त्रुटी"
  },
  en: {
    heroTitle: "No Dues Certificate",
    placeholderPropertyNo: "Property Number",
    placeholderWardNo: "Ward No.",
    placeholderAddress: "Road Name / Lane Number",
    placeholderFullNameEng: "Applicant's Full Name (English)",
    placeholderFullNameMar: "Applicant's Full Name (Devanagari)",
    placeholderMobile: "WhatsApp Mobile Number",
    placeholderEmail: "Email ID",
    placeholderYear: "Financial Year",
    placeholderOwnerName: "Property Owner Name",
    placeholderAadhar: "Aadhaar Card Number",
    placeholderVillage: "Village Name",
    btnSubmit: "Submit Application",
    alertSuccess: "Form submitted successfully ✅",
    alertUnknownError: "Unknown Error"
  }
};

export default function NoDues() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;
  const [formData, setFormData] = useState({
    propertyNo: "",
    wardNo: "",
    address: "",
    fullNameEng: "",
    fullNameMar: "",
    mobile: "",
    email: "",
    year: "",
    ownerName: "",
    aadhar: "",
    village: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://dhamner-website.onrender.com/api/no-dues", formData);
      alert(t.alertSuccess);
      // Reset form
      setFormData({
        propertyNo: "",
        wardNo: "",
        address: "",
        fullNameEng: "",
        fullNameMar: "",
        mobile: "",
        email: "",
        year: "",
        ownerName: "",
        aadhar: "",
        village: "",
      });
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

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto p-4 md:p-8 space-y-6"
      >

        {/* PROPERTY DETAILS */}
        <input
          type="text"
          name="propertyNo"
          placeholder={t.placeholderPropertyNo}
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
          name="address"
          placeholder={t.placeholderAddress}
          className="input"
          onChange={handleChange}
          required
        />

        {/* NAME */}
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

        {/* CONTACT */}
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

        {/* EXTRA DETAILS */}
        <input
          type="text"
          name="year"
          placeholder={t.placeholderYear}
          className="input"
          onChange={handleChange}
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
          name="village"
          placeholder={t.placeholderVillage}
          className="input"
          onChange={handleChange}
          required
        />

        {/* SUBMIT */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full">
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