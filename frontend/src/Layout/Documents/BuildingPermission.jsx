import { useState } from "react";
import axios from "axios";
import { useLang } from "../../context/LanguageContext";

const localTexts = {
  mr: {
    heroTitle: "बांधकाम परवाना अर्ज",
    placeholderFullName: "संपूर्ण नाव (नाव | वडिलांचे/पतीचे नाव | आडनाव)",
    placeholderAddress: "संपूर्ण पत्ता",
    placeholderMobile: "व्हाट्सअप मोबाईल क्रमांक",
    placeholderEmail: "ई मेल आय डी",
    placeholderBusiness: "व्यवसाय",
    placeholderPropertyNo: "मिळकत क्रमांक",
    placeholderPlotAreaSqFt: "मिळकतीचा आकार स्के. फूट",
    placeholderPlotAreaSqM: "मिळकतीचा आकार स्के. मीटर",
    placeholderConstructionAreaSqFt: "बांधकाम तपशील स्के. फूट",
    placeholderConstructionAreaSqM: "बांधकाम तपशील स्के. मीटर",
    placeholderFloors: "मजले (उदा: एक मजला)",
    labelOwnershipDocs: "जागेच्या मालकीचे कागदपत्रे *",
    labelLayoutPlan: "मंजूर लेआउट (Plan layout) *",
    labelBuildingPlan: "बिल्डिंग प्लान (p-line सहित) *",
    labelTaxReceipt: "विकास शुल्क व कामगार उपकर संबंधीत प्राधिकरणाकडे भरल्याची पोच पावती *",
    maxSize: "कमाल फाईल साईझ: १० MB",
    btnSubmit: "अर्ज पाठवा",
    alertSuccess: "अर्ज यशस्वीरित्या पाठवला गेला आहे ✅",
    alertUnknownError: "अज्ञात त्रुटी"
  },
  en: {
    heroTitle: "Building Permission Application",
    placeholderFullName: "Full Name (First Name | Father's/Husband's Name | Last Name)",
    placeholderAddress: "Full Address",
    placeholderMobile: "WhatsApp Mobile Number",
    placeholderEmail: "Email ID",
    placeholderBusiness: "Occupation",
    placeholderPropertyNo: "Property Number",
    placeholderPlotAreaSqFt: "Property Size Sq. Ft.",
    placeholderPlotAreaSqM: "Property Size Sq. M.",
    placeholderConstructionAreaSqFt: "Construction Area Sq. Ft.",
    placeholderConstructionAreaSqM: "Construction Area Sq. M.",
    placeholderFloors: "Floors (e.g. One Floor)",
    labelOwnershipDocs: "Land Ownership Documents *",
    labelLayoutPlan: "Approved Layout (Plan layout) *",
    labelBuildingPlan: "Building Plan (including p-line) *",
    labelTaxReceipt: "Receipt of Development Fee & Labor Cess paid to relevant authority *",
    maxSize: "Maximum file size: 10 MB",
    btnSubmit: "Submit Application",
    alertSuccess: "Form submitted successfully ✅",
    alertUnknownError: "Unknown Error"
  }
};

export default function BuildingPermission() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    mobile: "",
    email: "",
    business: "",
    propertyNo: "",
    plotAreaSqFt: "",
    plotAreaSqM: "",
    constructionAreaSqFt: "",
    constructionAreaSqM: "",
    floors: "",
  });

  const [files, setFiles] = useState({
    ownershipDocs: null,
    layoutPlan: null,
    buildingPlan: null,
    taxReceipt: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    Object.keys(files).forEach((key) => {
      if (files[key]) {
        data.append(key, files[key]);
      }
    });

    try {
      await axios.post("https://dhamner-website.onrender.com/api/building-permission", data);
      alert(t.alertSuccess);
    } catch (err) {
      console.error(err);
      alert(t.alertUnknownError);
    }
  };

  return (
    <div className="w-full">

      {/* HERO */}
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

        {/* PERSONAL INFO */}
        <input
          type="text"
          name="fullName"
          placeholder={t.placeholderFullName}
          className="input"
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder={t.placeholderAddress}
          className="input"
          onChange={handleChange}
          required
        />

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

        <input
          type="text"
          name="business"
          placeholder={t.placeholderBusiness}
          className="input"
          onChange={handleChange}
        />

        <input
          type="text"
          name="propertyNo"
          placeholder={t.placeholderPropertyNo}
          className="input"
          onChange={handleChange}
          required
        />

        {/* AREA DETAILS */}
        <input
          type="text"
          name="plotAreaSqFt"
          placeholder={t.placeholderPlotAreaSqFt}
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="plotAreaSqM"
          placeholder={t.placeholderPlotAreaSqM}
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="constructionAreaSqFt"
          placeholder={t.placeholderConstructionAreaSqFt}
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="constructionAreaSqM"
          placeholder={t.placeholderConstructionAreaSqM}
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="floors"
          placeholder={t.placeholderFloors}
          className="input"
          onChange={handleChange}
          required
        />

        {/* FILE UPLOADS */}
        <div className="space-y-6">

          {/* Ownership */}
          <div>
            <label className="font-semibold block mb-2">
              {t.labelOwnershipDocs}
            </label>
            <input
              type="file"
              name="ownershipDocs"
              onChange={handleFileChange}
              className="file"
              required
            />
            <p className="text-sm text-gray-500">{t.maxSize}</p>
          </div>

          {/* Layout */}
          <div>
            <label className="font-semibold block mb-2">
              {t.labelLayoutPlan}
            </label>
            <input
              type="file"
              name="layoutPlan"
              onChange={handleFileChange}
              className="file"
              required
            />
            <p className="text-sm text-gray-500">{t.maxSize}</p>
          </div>

          {/* Building Plan */}
          <div>
            <label className="font-semibold block mb-2">
              {t.labelBuildingPlan}
            </label>
            <input
              type="file"
              name="buildingPlan"
              onChange={handleFileChange}
              className="file"
              required
            />
            <p className="text-sm text-gray-500">{t.maxSize}</p>
          </div>

          {/* Tax */}
          <div>
            <label className="font-semibold block mb-2">
              {t.labelTaxReceipt}
            </label>
            <input
              type="file"
              name="taxReceipt"
              onChange={handleFileChange}
              className="file"
              required
            />
            <p className="text-sm text-gray-500">{t.maxSize}</p>
          </div>

        </div>

        {/* SUBMIT */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full font-bold">
          {t.btnSubmit}
        </button>
      </form>

      {/* STYLES */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 6px;
          }

          .file {
            display: block;
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 6px;
          }
        `}
      </style>
    </div>
  );
}