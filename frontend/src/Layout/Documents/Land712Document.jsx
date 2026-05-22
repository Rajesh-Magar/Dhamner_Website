import { useState } from "react";
import axios from "axios";
import { useLang } from "../../context/LanguageContext";
import { ClipboardList } from "lucide-react";

const localTexts = {
  mr: {
    heroTitle: "डिजिटल स्वाक्षरीत 7/12",
    heroDesc: "डिजिटल स्वाक्षरीत ७/१२ जमिनीचा उतारा मिळवण्यासाठी ऑनलाइन अर्ज करा",
    instruction: "आपण डिजिटल स्वाक्षरीत 7/12 साठी खाली दिलेल्या ऑनलाइन फॉर्म मध्ये अर्ज करू शकता. कृपया आधी ₹15/- अर्ज फी QR कोड स्कॅन करून भरा व त्याचा स्क्रीनशॉट ठेवा. UTR नंबर भरणे अनिवार्य आहे.",
    placeholderSurveyNo: "सर्वे नंबर / गट नंबर",
    placeholderMobile: "व्हाट्सअप मोबाईल क्रमांक",
    placeholderEmail: "ई मेल आय डी",
    placeholderOwnerName: "मालकांचे नाव",
    placeholderVillage: "गावाचे नाव",
    placeholderTaluka: "तालुका",
    placeholderDistrict: "जिल्हा",
    paymentLabel: "₹15/- रुपये शुल्क भरल्यानंतर UTR नंबर टाका",
    placeholderUtr: "UTR नंबर",
    labelPaymentScreenshot: "आपण केलेल्या पेमेंटचा स्क्रीनशॉट अपलोड करा *",
    maxSize: "कमाल फाइल साइज: 10 MB (JPG, PNG, PDF)",
    selectedFile: "निवडलेली फाईल",
    btnSubmit: "अर्ज पाठवा",
    alertNoScreenshot: "कृपया स्क्रीनशॉट अपलोड करा!",
    alertSuccess: "अर्ज यशस्वीरित्या पाठवला गेला आहे ✅",
    alertUnknownError: "अज्ञात त्रुटी"
  },
  en: {
    heroTitle: "Digitally Signed 7/12 Extract",
    heroDesc: "Apply online to receive your digitally signed 7/12 land record extract",
    instruction: "You can apply for a digitally signed 7/12 extract using the online form below. Please pay ₹15/- application fee using QR code first and save the screenshot. UTR number is mandatory.",
    placeholderSurveyNo: "Survey Number / Gat Number",
    placeholderMobile: "WhatsApp Mobile Number",
    placeholderEmail: "Email ID",
    placeholderOwnerName: "Owner's Name",
    placeholderVillage: "Village Name",
    placeholderTaluka: "Taluka",
    placeholderDistrict: "District",
    paymentLabel: "Pay ₹15 fee and enter UTR number",
    placeholderUtr: "UTR Number",
    labelPaymentScreenshot: "Upload a screenshot of the payment made *",
    maxSize: "Maximum file size: 10 MB (JPG, PNG, PDF)",
    selectedFile: "Selected file",
    btnSubmit: "Submit Application",
    alertNoScreenshot: "Please upload the screenshot!",
    alertSuccess: "Form submitted successfully ✅",
    alertUnknownError: "Unknown Error"
  }
};

export default function Land712Document() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;

  const [formData, setFormData] = useState({
    surveyNo: "",
    ownerName: "",
    village: "",
    taluka: "",
    district: "",
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
      await axios.post(`${window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? "http://localhost:5000" : "https://dhamner-website.onrender.com"}/api/land712`, data);
      window.location.href = "/thank-you";
      // Reset form
      setFormData({
        surveyNo: "",
        ownerName: "",
        village: "",
        taluka: "",
        district: "",
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

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-6 text-center mb-10">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <ClipboardList size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heroTitle}</h1>
        <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">{t.heroDesc}</p>
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

        {/* SURVEY */}
        <input
          type="text"
          name="surveyNo"
          placeholder={t.placeholderSurveyNo}
          className="input"
          value={formData.surveyNo}
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
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t.placeholderEmail}
            className="input"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* LAND DETAILS */}
        <input
          type="text"
          name="ownerName"
          placeholder={t.placeholderOwnerName}
          className="input"
          value={formData.ownerName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="village"
          placeholder={t.placeholderVillage}
          className="input"
          value={formData.village}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="taluka"
          placeholder={t.placeholderTaluka}
          className="input"
          value={formData.taluka}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="district"
          placeholder={t.placeholderDistrict}
          className="input"
          value={formData.district}
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
            value={formData.utr}
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
              accept="image/*,.pdf"
              className="block mx-auto border p-2 rounded"
              required
            />

            <p className="text-sm text-gray-500">
              {t.maxSize}
            </p>
            {file && <p className="text-sm text-green-600">✅ {t.selectedFile}: {file.name}</p>}
          </div>
        </div>

        {/* SUBMIT */}
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full font-bold">
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