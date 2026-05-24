import { useState } from "react";
import axios from "axios";
import { useLang } from "../../context/LanguageContext";
import { Briefcase } from "lucide-react";

const localTexts = {
  mr: {
    heroTitle: "व्यवसाय परवाना प्रमाणपत्र",
    heroDesc: "व्यवसाय परवाना प्रमाणपत्रासाठी ऑनलाइन अर्ज करा",
    instruction: "आपण व्यवसाय परवाना प्रमाणपत्रासाठी खाली दिलेल्या ऑनलाइन फॉर्म मध्ये अर्ज करू शकता. कृपया ₹59/- फी भरून UTR नंबर व स्क्रीनशॉट अपलोड करा.",
    placeholderOwnerName: "मालकाचे संपूर्ण नाव",
    placeholderOwnerAddress: "मालकाचा निवास पत्ता",
    placeholderMobile: "व्हाट्सअप मोबाईल क्रमांक",
    placeholderEmail: "ई मेल आय डी",
    labelBusinessType: "आस्थापनेचे वर्गवारी (उदा. दुकाने / आस्थापना / निवासी हॉटेल/ उपाहारगृहे / थिएटर / सार्वजनिक मनोरंजनाच्या किंवा करमणुकीच्या इतर जागा व इतर आस्थापना) *",
    placeholderBusinessType: "आस्थापनाचे वर्गवारी",
    labelBusinessCategory: "आस्थापनेचा प्रकार (मालक, भागीदारी, एलएलपी, कंपनी, वि, सहकारी संस्था, मंडळ) *",
    placeholderBusinessCategory: "आस्थापनाचा प्रकार",
    placeholderDistrict: "जिल्हा",
    placeholderPincode: "पिन कोड",
    placeholderBusinessNature: "व्यवसायाचे स्वरूप",
    labelWorkers: "मनुष्यबळ / कामगार तपशील -",
    placeholderMale: "पुरुष",
    placeholderFemale: "महिला",
    placeholderOther: "इतर",
    placeholderTotal: "एकूण",
    placeholderBusinessAddress: "आस्थापनाचा पत्ता",
    placeholderBuildingName: "बिल्डिंगचे नाव",
    placeholderRoad: "रस्ता",
    placeholderLandmark: "ओळखीची खूण",
    placeholderVillage: "गावाचे नाव",
    placeholderTaluka: "तालुका",
    docsHeader: "सोबत आवश्यक कागदपत्रे अपलोड करावीत",
    labelAadhar: "आधार कार्ड *",
    labelPhoto: "आस्थापनाचा फोटो *",
    labelPaymentScreenshot: "पेमेंट स्क्रीनशॉट *",
    paymentLabel: "₹59/- रुपये शुल्क भरल्यानंतर UTR नंबर टाका",
    placeholderUtr: "पेमेंट UTR नंबर",
    max10mb: "कमाल फाईल साईझ १०MB",
    btnSubmit: "अर्ज पाठवा",
    alertNoFiles: "कृपया सर्व आवश्यक फाईल अपलोड करा!",
    alertSuccess: "अर्ज यशस्वीरित्या पाठवला गेला आहे ✅",
    alertUnknownError: "अज्ञात त्रुटी"
  },
  en: {
    heroTitle: "Business License Certificate",
    heroDesc: "Apply online for Business License Certificate",
    instruction: "You can apply for the business license certificate using the online form below. Please pay ₹59/- fee and upload UTR number & screenshot.",
    placeholderOwnerName: "Owner's Full Name",
    placeholderOwnerAddress: "Owner's Residential Address",
    placeholderMobile: "WhatsApp Mobile Number",
    placeholderEmail: "Email ID",
    labelBusinessType: "Category of Establishment (e.g. Shops / Establishments / Residential Hotels / Restaurants / Theaters / Other places of public amusement or entertainment and other establishments) *",
    placeholderBusinessType: "Category of Establishment",
    labelBusinessCategory: "Type of Establishment (Owner, Partnership, LLP, Company, Co-operative Society, Board, etc.) *",
    placeholderBusinessCategory: "Type of Establishment",
    placeholderDistrict: "District",
    placeholderPincode: "Pin Code",
    placeholderBusinessNature: "Nature of Business",
    labelWorkers: "Manpower / Worker Details -",
    placeholderMale: "Male",
    placeholderFemale: "Female",
    placeholderOther: "Other",
    placeholderTotal: "Total",
    placeholderBusinessAddress: "Establishment Address",
    placeholderBuildingName: "Building Name",
    placeholderRoad: "Road",
    placeholderLandmark: "Landmark",
    placeholderVillage: "Village Name",
    placeholderTaluka: "Taluka",
    docsHeader: "Please upload the required documents alongside",
    labelAadhar: "Aadhaar Card *",
    labelPhoto: "Establishment Photo *",
    labelPaymentScreenshot: "Payment Screenshot *",
    paymentLabel: "Pay ₹59/- fee and enter UTR number",
    placeholderUtr: "Payment UTR Number",
    max10mb: "Max 10MB",
    btnSubmit: "Submit Application",
    alertNoFiles: "Please upload all required files!",
    alertSuccess: "Form submitted successfully ✅",
    alertUnknownError: "Unknown Error"
  }
};

export default function BusinessLicense() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;

  const [formData, setFormData] = useState({
    ownerName: "",
    ownerAddress: "",
    mobile: "",
    email: "",
    businessType: "",
    businessCategory: "",
    district: "",
    pincode: "",
    startDate: "",
    businessNature: "",
    male: "",
    female: "",
    other: "",
    total: "",
    businessAddress: "",
    buildingName: "",
    road: "",
    landmark: "",
    village: "",
    taluka: "",
    utr: "",
  });

  const [files, setFiles] = useState({
    aadhar: null,
    photo: null,
    payment: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, field) => {
    setFiles({ ...files, [field]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all required files are selected
    if (!files.aadhar || !files.photo || !files.payment) {
      alert(t.alertNoFiles);
      return;
    }

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    // Only append files that exist
    if (files.aadhar) data.append("aadhar", files.aadhar);
    if (files.photo) data.append("photo", files.photo);
    if (files.payment) data.append("payment", files.payment);

    try {
      await axios.post(`${window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? "http://localhost:5000" : "https://dhamner-website.onrender.com"}/api/business-form`, data);
      window.location.href = "/thank-you";
      // Reset form
      setFormData({
        ownerName: "",
        ownerAddress: "",
        mobile: "",
        email: "",
        businessType: "",
        businessCategory: "",
        district: "",
        pincode: "",
        startDate: "",
        businessNature: "",
        male: "",
        female: "",
        other: "",
        total: "",
        businessAddress: "",
        buildingName: "",
        road: "",
        landmark: "",
        village: "",
        taluka: "",
        utr: "",
      });
      setFiles({
        aadhar: null,
        photo: null,
        payment: null,
      });
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
            <Briefcase size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heroTitle}</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-sm md:text-base">{t.heroDesc}</p>
      </div>

      {/* INSTRUCTION */}
      <div className="max-w-4xl mx-auto p-4 text-center text-gray-700 font-semibold">
        {t.instruction}
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto p-4 md:p-8 space-y-6"
      >
        {/* Owner */}
        <div className="grid md:grid-cols-2 gap-4">
          <input name="ownerName" placeholder={t.placeholderOwnerName} className="input" onChange={handleChange} required />
          <input name="ownerAddress" placeholder={t.placeholderOwnerAddress} className="input" onChange={handleChange} required />
        </div>

        {/* Contact */}
        <div className="grid md:grid-cols-2 gap-4">
          <input name="mobile" placeholder={t.placeholderMobile} className="input" onChange={handleChange} required />
          <input name="email" placeholder={t.placeholderEmail} className="input" onChange={handleChange} />
        </div>

        {/* Business Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <label htmlFor="businessType" className="block font-semibold text-gray-700">
            {t.labelBusinessType}
            <input name="businessType" placeholder={t.placeholderBusinessType} className="input mt-1" onChange={handleChange} required />
          </label>
          <label htmlFor="businessCategory" className="block font-semibold text-gray-700">
            {t.labelBusinessCategory}
            <input name="businessCategory" placeholder={t.placeholderBusinessCategory} className="input mt-1" onChange={handleChange} required />
          </label>
        </div>

        {/* Location */}
        <div className="grid md:grid-cols-2 gap-4">
          <input name="district" placeholder={t.placeholderDistrict} className="input" onChange={handleChange} required />
          <input name="pincode" placeholder={t.placeholderPincode} className="input" onChange={handleChange} required />
        </div>

        {/* Date */}
        <div className="grid md:grid-cols-2 gap-4">
          <input type="date" name="startDate" className="input" onChange={handleChange} required />
          <input name="businessNature" placeholder={t.placeholderBusinessNature} className="input" onChange={handleChange} required />
        </div>
        <br />
        {/* Workers */}
        <label htmlFor="" className="block font-semibold text-gray-700">
          {t.labelWorkers}
          <div className="grid md:grid-cols-4 gap-4 mt-1">
            <input name="male" placeholder={t.placeholderMale} className="input" onChange={handleChange} />
            <input name="female" placeholder={t.placeholderFemale} className="input" onChange={handleChange} />
            <input name="other" placeholder={t.placeholderOther} className="input" onChange={handleChange} />
            <input name="total" placeholder={t.placeholderTotal} className="input" onChange={handleChange} />
          </div>
        </label>

        {/* Address */}
        <textarea name="businessAddress" placeholder={t.placeholderBusinessAddress} className="input" onChange={handleChange} required />

        <div className="grid md:grid-cols-2 gap-4">
          <input name="buildingName" placeholder={t.placeholderBuildingName} className="input" onChange={handleChange} />
          <input name="road" placeholder={t.placeholderRoad} className="input" onChange={handleChange} />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input name="landmark" placeholder={t.placeholderLandmark} className="input" onChange={handleChange} />
          <input name="village" placeholder={t.placeholderVillage} className="input" onChange={handleChange} required />
        </div>

        <input name="taluka" placeholder={t.placeholderTaluka} className="input" onChange={handleChange} required />

        {/* DOCUMENT UPLOAD */}
        <div className="border-t pt-6 space-y-6">
          <h2 className="font-bold text-lg text-gray-800">
            {t.docsHeader}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Aadhar */}
            <div>
              <p className="font-semibold text-gray-700">{t.labelAadhar}</p>
              <input type="file" onChange={(e) => handleFileChange(e, "aadhar")} className="block mt-1" />
              <p className="text-sm text-gray-500">{t.max10mb}</p>
            </div>

            {/* Photo */}
            <div>
              <p className="font-semibold text-gray-700">{t.labelPhoto}</p>
              <input type="file" onChange={(e) => handleFileChange(e, "photo")} className="block mt-1" />
              <p className="text-sm text-gray-500">{t.max10mb}</p>
            </div>
          </div>
        </div>

        {/* PAYMENT */}
        <div className="border-t pt-6 space-y-4 text-center">
          <img src="/assets/GramnidhiQr.jpeg" className="mx-auto w-64" alt="Gramnidhi QR" />
          <p className="font-semibold text-gray-700">
            {t.paymentLabel}
          </p>
          <input name="utr" placeholder={t.placeholderUtr} className="input" onChange={handleChange} required />

          <div>
            <label className="font-semibold text-gray-700 block mb-1">{t.labelPaymentScreenshot}</label>
            <input type="file" onChange={(e) => handleFileChange(e, "payment")} className="block mx-auto border p-2 rounded" />
          </div>
        </div>

        {/* BUTTON */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full font-bold">
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