import { useState } from "react";
import axios from "axios";
import { useLang } from "../../context/LanguageContext";

const localTexts = {
  mr: {
    heroTitle: "निराधार योजनेसाठी वयाचा दाखला",
    placeholderAge: "सध्या स्थितीत वय",
    placeholderMobile: "व्हाट्सअप मोबाईल क्रमांक",
    placeholderEmail: "ई मेल आय डी",
    placeholderAadhar: "आधार कार्ड क्रमांक",
    placeholderYear: "आर्थिक वर्ष",
    placeholderVillage: "गावाचे नाव",
    placeholderNameEng: "अर्जदाराचे पूर्ण नाव (English)",
    placeholderNameMar: "अर्जदाराचे पूर्ण नाव (देवनागरी)",
    labelDob: "जन्मतारीख : ",
    btnSubmit: "अर्ज पाठवा",
    alertSuccess: "अर्ज यशस्वीरित्या पाठवला गेला आहे ✅",
    alertUnknownError: "अज्ञात त्रुटी"
  },
  en: {
    heroTitle: "Age Certificate for Niradhar Scheme",
    placeholderAge: "Current Age",
    placeholderMobile: "WhatsApp Mobile Number",
    placeholderEmail: "Email ID",
    placeholderAadhar: "Aadhaar Card Number",
    placeholderYear: "Financial Year",
    placeholderVillage: "Village Name",
    placeholderNameEng: "Applicant's Full Name (English)",
    placeholderNameMar: "Applicant's Full Name (Devanagari)",
    labelDob: "Date of Birth : ",
    btnSubmit: "Submit Application",
    alertSuccess: "Form submitted successfully ✅",
    alertUnknownError: "Unknown Error"
  }
};

export default function AgeDocument() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;

  const [formData, setFormData] = useState({
    age: "",
    mobile: "",
    email: "",
    aadhar: "",
    year: "",
    village: "",
    fullNameEng: "",
    fullNameMar: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://dhamner-website.onrender.com/api/age-certificate", formData);
      alert(t.alertSuccess);
      // Reset form
      setFormData({
        age: "",
        mobile: "",
        email: "",
        aadhar: "",
        year: "",
        village: "",
        fullNameEng: "",
        fullNameMar: "",
        dob: "",
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

        {/* AGE */}
        <input
          type="text"
          name="age"
          value={formData.age}
          placeholder={t.placeholderAge}
          className="input"
          onChange={handleChange}
          required
        />

        {/* CONTACT */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            placeholder={t.placeholderMobile}
            className="input"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder={t.placeholderEmail}
            className="input"
            onChange={handleChange}
          />
        </div>

        {/* AADHAR */}
        <input
          type="text"
          name="aadhar"
          value={formData.aadhar}
          placeholder={t.placeholderAadhar}
          className="input"
          onChange={handleChange}
          required
        />

        {/* YEAR */}
        <input
          type="text"
          name="year"
          value={formData.year}
          placeholder={t.placeholderYear}
          className="input"
          onChange={handleChange}
          required
        />

        {/* VILLAGE */}
        <input
          type="text"
          name="village"
          value={formData.village}
          placeholder={t.placeholderVillage}
          className="input"
          onChange={handleChange}
          required
        />

        {/* NAME */}
        <input
          type="text"
          name="fullNameEng"
          value={formData.fullNameEng}
          placeholder={t.placeholderNameEng}
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="fullNameMar"
          value={formData.fullNameMar}
          placeholder={t.placeholderNameMar}
          className="input"
          onChange={handleChange}
          required
        />

        {/* DOB */}
        <br />
        <label htmlFor="dob">{t.labelDob}
        <input
          type="date"
          name="dob"
          value={formData.dob}
          className="input"
          onChange={handleChange}
          required
        />
        </label>

        {/* SUBMIT */}
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