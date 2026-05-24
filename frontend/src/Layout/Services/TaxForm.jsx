import { useState } from "react";
import axios from "axios";
import { useLang } from "../../context/LanguageContext";
import { CreditCard } from "lucide-react";

const localTexts = {
  mr: {
    heroTitle: "कर भरणा",
    heroDesc: "आपल्या गावातील कर ऑनलाइन भरण्यासाठी खालील माहिती भरा व QR कोड स्कॅन करून पेमेंट करा.",
    instructionsTitle: "सूचना",
    instructionsDesc: "खाली दिलेल्या स्कॅनरवर ऑनलाइन भरणा करू शकता.",
    instruction1: "१. घरपट्टी, सॅनिटरी, दिवाबत्ती ही ग्रामनिधी स्कॅनर वर स्कॅन करून भरावी.",
    instruction2: "२. पाणीपट्टी भरणा हा केवळ पाणीपट्टी स्कॅनर वर स्कॅन करून भरावा.",
    instruction3: "भरणा केल्याचा स्क्रीनशॉट काढावा व ऑनलाइन फॉर्म मध्ये अपलोड करावा.",
    qrTitle: "QR कोड स्कॅन करा",
    qrGramnidhi: "ग्रामनिधी/घरपट्टी/सॅनिटरी/दिवाबत्ती",
    qrPanipatti: "पाणीपट्टी",
    formTitle: "माहिती भरा",
    placeholderName: "खातेदाराचे नाव *",
    placeholderWhatsapp: "व्हॉट्सअप नंबर *",
    placeholderEmail: "ईमेल",
    placeholderReceiptNo: "मिळकत क्रमांक *",
    placeholderGharpattiAmount: "घरपट्टी रक्कम *",
    placeholderPanipattiAmount: "पाणीपट्टी रक्कम *",
    placeholderGharpattiUpi: "घरपट्टी UPI ID *",
    placeholderPanipattiUpi: "पाणीपट्टी UPI ID *",
    labelGharpattiScreenshot: "घरपट्टी Screenshot *",
    labelPanipattiScreenshot: "पाणीपट्टी Screenshot *",
    btnSubmit: "अर्ज पाठवा",
    alertMinScreenshot: "कृपया किमान एक स्क्रीनशॉट अपलोड करा!",
    alertSuccess: "अर्ज यशस्वीरित्या पाठवला गेला आहे ✅",
    alertUnknownError: "अज्ञात त्रुटी",
  },
  en: {
    heroTitle: "Tax Payment",
    heroDesc: "To pay your village taxes online, fill out the form below and make the payment by scanning the QR code.",
    instructionsTitle: "Instructions",
    instructionsDesc: "You can make online payments using the scanners below.",
    instruction1: "1. House Tax, Sanitary, and Street Light taxes should be paid by scanning the Gram Nidhi scanner.",
    instruction2: "2. Water Tax payment must only be paid by scanning the Water Tax scanner.",
    instruction3: "Take a screenshot of the payment and upload it in the online form.",
    qrTitle: "Scan QR Code",
    qrGramnidhi: "Gram Nidhi / House Tax / Sanitary / Street Lights",
    qrPanipatti: "Water Tax",
    formTitle: "Fill Information",
    placeholderName: "Account Holder's Name *",
    placeholderWhatsapp: "WhatsApp Number *",
    placeholderEmail: "Email",
    placeholderReceiptNo: "Property/Income Number *",
    placeholderGharpattiAmount: "House Tax Amount *",
    placeholderPanipattiAmount: "Water Tax Amount *",
    placeholderGharpattiUpi: "House Tax UPI ID *",
    placeholderPanipattiUpi: "Water Tax UPI ID *",
    labelGharpattiScreenshot: "House Tax Screenshot *",
    labelPanipattiScreenshot: "Water Tax Screenshot *",
    btnSubmit: "Submit Application",
    alertMinScreenshot: "Please upload at least one screenshot!",
    alertSuccess: "Form submitted successfully ✅",
    alertUnknownError: "Unknown Error",
  }
};

export default function TaxPage() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    receiptNo: "",
    gharpattiAmount: "",
    panipattiAmount: "",
    gharpattiUpi: "",
    panipattiUpi: "",
  });

  const [files, setFiles] = useState({
    gharpattiScreenshot: null,
    panipattiScreenshot: null,
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle file upload
  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate at least one screenshot is selected
    if (!files.gharpattiScreenshot && !files.panipattiScreenshot) {
      alert(t.alertMinScreenshot);
      return;
    }

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    // Only append files that exist
    Object.keys(files).forEach((key) => {
      if (files[key]) {
        data.append(key, files[key]);
      }
    });

    try {
      // Let axios auto-detect FormData and set proper Content-Type with boundary
      const response = await axios.post(`${window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? "http://localhost:5000" : "https://dhamner-website.onrender.com"}/api/tax`, data);
      
      if (response.data.success) {
        window.location.href = "/thank-you";
      } else {
        alert(`Error: ${response.data.message}`);
        return;
      }
      // Reset form
      setFormData({
        name: "",
        whatsapp: "",
        email: "",
        receiptNo: "",
        gharpattiAmount: "",
        panipattiAmount: "",
        gharpattiUpi: "",
        panipattiUpi: "",
      });
      setFiles({
        gharpattiScreenshot: null,
        panipattiScreenshot: null,
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
      <div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <CreditCard size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heroTitle}</h1>
        <p className="text-orange-100 max-w-2xl mx-auto text-sm md:text-base">{t.heroDesc}</p>
      </div>
            {/* ================= INSTRUCTIONS ================= */}
      <div className="bg-gray-100 py-12 px-6 md:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {t.instructionsTitle}
        </h2>

        <p className="mb-6 text-gray-600 font-bold">
          {t.instructionsDesc}
        </p>

        <div className="max-w-3xl mx-auto text-center font-bold space-y-4 text-gray-700">
          <p>
            {t.instruction1}
          </p>

          <p>
            {t.instruction2}
          </p>

          <p>
            {t.instruction3}
          </p>
        </div>
      </div>

      {/* ================= QR SECTION ================= */}
      <div className="bg-white py-12 px-4 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          {t.qrTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          <div className="text-center">
            <img
              src="/assets/GramnidhiQr.jpeg"
              alt="gram nidhi"
              className="mx-auto w-64 md:w-72 rounded-lg shadow hover:scale-105 transition"
            />
            <h3 className="text-xl font-semibold text-green-600 mt-4">
              {t.qrGramnidhi}
            </h3>
          </div>

          <div className="text-center">
            <img
              src="/assets/PaniPattiQr.jpeg"
              alt="pani patti"
              className="mx-auto w-64 md:w-72 rounded-lg shadow hover:scale-105 transition"
            />
            <h3 className="text-xl font-semibold text-green-600 mt-4">
              {t.qrPanipatti}
            </h3>
          </div>

        </div>
      </div>



      {/* ================= FORM ================= */}
      <div className="w-full bg-gray-100 py-10 px-4 md:px-10">
        <form
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {t.formTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input name="name" placeholder={t.placeholderName} onChange={handleChange} className="border p-3 rounded" required />
            <input name="whatsapp" placeholder={t.placeholderWhatsapp} onChange={handleChange} className="border p-3 rounded" required />
            <input name="email" placeholder={t.placeholderEmail} onChange={handleChange} className="border p-3 rounded" />
            <input name="receiptNo" placeholder={t.placeholderReceiptNo} onChange={handleChange} className="border p-3 rounded" required />

            <input name="gharpattiAmount" type="number" placeholder={t.placeholderGharpattiAmount} onChange={handleChange} className="border p-3 rounded" required />
            <input name="panipattiAmount" type="number" placeholder={t.placeholderPanipattiAmount} onChange={handleChange} className="border p-3 rounded" required />

            <input name="gharpattiUpi" placeholder={t.placeholderGharpattiUpi} onChange={handleChange} className="border p-3 rounded" required />
            <input name="panipattiUpi" placeholder={t.placeholderPanipattiUpi} onChange={handleChange} className="border p-3 rounded" required />

            <div>
              <label>{t.labelGharpattiScreenshot}</label>
              <input type="file" name="gharpattiScreenshot" onChange={handleFileChange} required />
            </div>

            <div>
              <label>{t.labelPanipattiScreenshot}</label>
              <input type="file" name="panipattiScreenshot" onChange={handleFileChange} required />
            </div>

          </div>

          <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 font-bold">
            {t.btnSubmit}
          </button>
        </form>
      </div>
    </div>
  );
}