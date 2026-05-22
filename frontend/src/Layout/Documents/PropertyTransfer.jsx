import { useState } from "react";
import axios from "axios";
import { useLang } from "../../context/LanguageContext";
import { ArrowLeftRight } from "lucide-react";

const localTexts = {
  mr: {
    heroTitle: "मालमत्ता हस्तांतरण अर्ज",
    heroDesc: "डिजिटल स्वाक्षरीत मालमत्ता हस्तांतरणासाठी ऑनलाईन अर्ज करा",
    labelDescription: "वर्णन",
    propertyTypes: [
      { value: "बखळ  जागा", label: "बखळ  जागा" },
      { value: "कच्चे घर", label: "कच्चे घर" },
      { value: "अर्धे पक्के घर", label: "अर्धे पक्के घर" },
      { value: "आर सी सी पक्के घर", label: "आर सी सी पक्के घर" }
    ],
    placeholderArea: "क्षेत्रफळ (लांबी x रुंदी) एकूण चौ. फुट ",
    labelTaxReceipt: "वारस दाखला / कर पावती (Max 10MB)",
    labelUtara: "जागेचा उतारा (नमुना ०८)",
    labelConsent: "संमतीपत्र / सूची क्रमांक",
    labelDeathCertificate: "मालमता धारक मयत असल्यास मृत दाखला ",
    limitInstructions: "(आपण जास्तीत जास्त 1 फाईल अपलोड करू शकता. एकूण अपलोड लिमिट 10MB आहे)",
    maxSize: "Maximum file size: 10 MB",
    placeholderMobile: "व्हाट्सअप मोबाईल क्रमांक",
    placeholderEmail: "ई मेल आय डी",
    placeholderSellerName: "लिहून देणाऱ्याचे नाव",
    placeholderAddress: "पत्ता",
    placeholderBuyerName: "लिहून घेणाऱ्याचे नाव",
    placeholderPropertyNo: "मिळकत क्रमांक",
    btnSubmit: "अर्ज पाठवा",
    alertSuccess: "अर्ज यशस्वीरित्या पाठवला गेला आहे ✅",
    alertError: "अर्ज पाठवताना त्रुटी आली"
  },
  en: {
    heroTitle: "Property Transfer Application",
    heroDesc: "Apply online for digitally signed property transfer",
    labelDescription: "Description",
    propertyTypes: [
      { value: "बखळ  जागा", label: "Vacant Land" },
      { value: "कच्चे घर", label: "Kutcha House" },
      { value: "अर्धे पक्के घर", label: "Semi-Pucca House" },
      { value: "आर सी सी पक्के घर", label: "RCC Pucca House" }
    ],
    placeholderArea: "Area (Length x Width) Total Sq. Ft.",
    labelTaxReceipt: "Heir Certificate / Tax Receipt (Max 10MB)",
    labelUtara: "Property Utara (Form 08)",
    labelConsent: "Consent Letter / Index Number",
    labelDeathCertificate: "Death Certificate if Property Owner is Deceased",
    limitInstructions: "(You can upload maximum 1 file. Total upload limit is 10MB)",
    maxSize: "Maximum file size: 10 MB",
    placeholderMobile: "WhatsApp Mobile Number",
    placeholderEmail: "Email ID",
    placeholderSellerName: "Seller's Name",
    placeholderAddress: "Address",
    placeholderBuyerName: "Buyer's Name",
    placeholderPropertyNo: "Property Number",
    btnSubmit: "Submit Application",
    alertSuccess: "Form submitted successfully! ✅",
    alertError: "Error submitting form"
  }
};

export default function PropertyTransfer() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;
  const [formData, setFormData] = useState({
    sellerName: "",
    sellerAddress: "",
    buyerName: "",
    buyerAddress: "",
    propertyNo: "",
    area: "",
    mobile: "",
    email: "",
    propertyType: "",
  });

  const [files, setFiles] = useState({
    taxReceipt: null,
    utara: null,
    consent: null,
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
      if (files[key]) data.append(key, files[key]);
    });

    try {
      await axios.post(`${window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? "http://localhost:5000" : "https://dhamner-website.onrender.com"}/api/property-transfer`, data);
      window.location.href = "/thank-you";
    } catch (err) {
      console.error(err);
      alert(t.alertError);
    }
  };

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-6 text-center mb-10">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <ArrowLeftRight size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heroTitle}</h1>
        <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">{t.heroDesc}</p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto p-4 md:p-8 space-y-6"
      >

        {/* PROPERTY TYPE */}
        <div>
          <label className="font-semibold block mb-2">{t.labelDescription}</label>

          <div className="space-y-2">
            {t.propertyTypes.map((item) => (
              <label key={item.value} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="propertyType"
                  value={item.value}
                  onChange={handleChange}
                />
                {item.label}
              </label>
            ))}
          </div>
        </div>

        {/* AREA */}
        <input
          type="text"
          name="area"
          placeholder={t.placeholderArea}
          className="input"
          onChange={handleChange}
          required
        />

        {/* FILES */}
        <div className="space-y-6">

          {/* TAX RECEIPT */}
          <div>
            <label className="font-semibold">
              {t.labelTaxReceipt}
            </label>
            <input
              type="file"
              name="taxReceipt"
              onChange={handleFileChange}
              className="block mt-2"
            />
          </div>

          {/* UTARA */}
          <div>
            <label className="font-semibold">
              {t.labelUtara}
            </label>
            <input
              type="file"
              name="utara"
              onChange={handleFileChange}
              className="block mt-2"
            />
          </div>

          {/* CONSENT */}
          <div>
            <label className="font-semibold">
              {t.labelConsent}
            </label>
            <input
              type="file"
              name="consent"
              onChange={handleFileChange}
              className="block mt-2"
            />
          </div>
          {/* DEATH CERTIFICATE */}
          <div>
            <label className="font-semibold">
              {t.labelDeathCertificate}
              <span className="text-sm text-gray-500 block">
                {t.limitInstructions}
              </span>
            </label>

            <input
              type="file"
              name="deathCertificate"
              onChange={handleFileChange}
              className="block mt-2"
            />

            <p className="text-sm text-gray-500 mt-1">
              {t.maxSize}
            </p>
          </div>

        </div>

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

        {/* SELLER */}
        <input
          type="text"
          name="sellerName"
          placeholder={t.placeholderSellerName}
          className="input"
          onChange={handleChange}
          required
        />

        <textarea
          name="sellerAddress"
          placeholder={t.placeholderAddress}
          className="input"
          onChange={handleChange}
          required
        />

        {/* BUYER */}
        <input
          type="text"
          name="buyerName"
          placeholder={t.placeholderBuyerName}
          className="input"
          onChange={handleChange}
          required
        />

        <textarea
          name="buyerAddress"
          placeholder={t.placeholderAddress}
          className="input"
          onChange={handleChange}
          required
        />

        {/* PROPERTY NO */}
        <input
          type="text"
          name="propertyNo"
          placeholder={t.placeholderPropertyNo}
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