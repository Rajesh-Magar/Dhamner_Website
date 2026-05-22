import { useState } from "react";
import axios from "axios";
import { useLang } from "../../context/LanguageContext";
import { MessageSquareWarning } from "lucide-react";

const localTexts = {
  mr: {
    heroTitle: "तक्रार",
    heroSubtitle: "ऑनलाईन सेवा / तक्रार विभाग",
    heroDesc: "आपणास झालेल्या गैर सोयीबद्दल आम्ही क्षमस्व आहोत. आपली तक्रार तत्काळ आणि सोप्या पद्धतीने नोंदवावी.",
    labelPropertyId: "मालमत्ता क्रमांक *",
    placeholderPropertyId: "मालमत्ता क्रमांक",
    labelDepartment: "ग्रामपंचायत विभाग निवडा *",
    optionSelect: "- निवडा -",
    optionWater: "पाणी विभाग",
    optionElectricity: "वीज विभाग",
    optionRoad: "रस्ता विभाग",
    labelComplaintDesc: "तक्रारीचे वर्णन *",
    placeholderComplaintDesc: "तुमची तक्रार वर्णन करा",
    labelName: "अर्जदाराचे नाव *",
    placeholderName: "नाव",
    labelAddress: "पत्ता *",
    placeholderAddress: "पत्ता",
    labelMobile: "मोबाईल क्रमांक *",
    placeholderMobile: "मोबाईल क्रमांक",
    labelAadhaar: "आधारकार्ड क्रमांक *",
    placeholderAadhaar: "आधारकार्ड क्रमांक",
    btnSubmit: "अर्ज पाठवा",
    alertSuccess: "तक्रार यशस्वीरित्या पाठवली ✅",
    alertUnknownError: "अज्ञात त्रुटी"
  },
  en: {
    heroTitle: "Complaint",
    heroSubtitle: "Online Service / Complaint Department",
    heroDesc: "We apologize for the inconvenience caused to you. Please register your complaint quickly and easily.",
    labelPropertyId: "Property ID / Number *",
    placeholderPropertyId: "Property ID / Number",
    labelDepartment: "Select Gram Panchayat Department *",
    optionSelect: "- Select -",
    optionWater: "Water Department",
    optionElectricity: "Electricity/Power Department",
    optionRoad: "Road Department",
    labelComplaintDesc: "Description of Complaint *",
    placeholderComplaintDesc: "Describe your complaint",
    labelName: "Applicant's Name *",
    placeholderName: "Name",
    labelAddress: "Address *",
    placeholderAddress: "Address",
    labelMobile: "Mobile Number *",
    placeholderMobile: "Mobile Number",
    labelAadhaar: "Aadhaar Card Number *",
    placeholderAadhaar: "Aadhaar Card Number",
    btnSubmit: "Submit Complaint",
    alertSuccess: "Complaint submitted successfully ✅",
    alertUnknownError: "Unknown Error"
  }
};

export default function ComplaintPage() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;

  const [formData, setFormData] = useState({
    propertyId: "",
    department: "",
    complaint: "",
    name: "",
    address: "",
    mobile: "",
    aadhaar: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? "http://localhost:5000" : "https://dhamner-website.onrender.com"}/api/complaints`, formData);
      window.location.href = "/thank-you";
      setFormData({
        propertyId: "",
        department: "",
        complaint: "",
        name: "",
        address: "",
        mobile: "",
        aadhaar: "",
      });
    } catch (error) {
      console.error("Full Error:", error.response?.data || error.message);
      const errorMsg = error.response?.data?.message || error.message || t.alertUnknownError;
      alert(errorMsg);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <MessageSquareWarning size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heroTitle}</h1>
        <p className="text-orange-100 max-w-2xl mx-auto text-sm md:text-base">{t.heroDesc}</p>
      </div>

      {/* 📝 FORM SECTION */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10 mt-10">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Property ID */}
          <div>
            <label className="font-semibold">{t.labelPropertyId}</label>
            <input
              type="text"
              name="propertyId"
              value={formData.propertyId}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1"
              placeholder={t.placeholderPropertyId}
              required
            />
          </div>

          {/* Department */}
          <div>
            <label className="font-semibold">{t.labelDepartment}</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1"
              required
            >
              <option value="">{t.optionSelect}</option>
              <option value="water">{t.optionWater}</option>
              <option value="electricity">{t.optionElectricity}</option>
              <option value="road">{t.optionRoad}</option>
            </select>
          </div>

          {/* Complaint */}
          <div>
            <label className="font-semibold">{t.labelComplaintDesc}</label>
            <textarea
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1"
              rows="4"
              placeholder={t.placeholderComplaintDesc}
              required
            ></textarea>
          </div>

          {/* Name */}
          <div>
            <label className="font-semibold">{t.labelName}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1"
              placeholder={t.placeholderName}
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="font-semibold">{t.labelAddress}</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1"
              placeholder={t.placeholderAddress}
              required
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="font-semibold">{t.labelMobile}</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1"
              placeholder={t.placeholderMobile}
              required
            />
          </div>

          {/* Aadhaar */}
          <div>
            <label className="font-semibold">{t.labelAadhaar}</label>
            <input
              type="text"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1"
              placeholder={t.placeholderAadhaar}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full md:w-auto font-bold"
          >
            {t.btnSubmit}
          </button>

        </form>
      </div>
    </div>
  );
}