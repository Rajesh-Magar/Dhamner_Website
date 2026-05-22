import { useState } from "react";
import axios from "axios";
import { useLang } from "../../context/LanguageContext";
import { PhoneCall } from "lucide-react";


const content = {
  mr: {
    heroTitle: "संपर्क साधा",
    heroDesc: "ग्रामपंचायत प्रशासनाशी संपर्क साधण्यासाठी आणि आपल्या समस्या मांडण्यासाठी खालील संपर्क फॉर्म भरा",
    title: "संपर्क साधा",
    firstName: "पहिले नाव",
    lastName: "आडनाव",
    email: "ईमेल",
    subject: "विषय",
    message: "विषयाचे वर्णन",
    submit: "फॉर्म पाठवा",
    successMsg: "संपर्क संदेश पाठवला गेला ✅",
    office: "ग्रामपंचायत कार्यालय",
    village: "धामणेर",
    address: "तालुका - कोरेगाव, जिल्हा - सातारा",
    emailLabel: "ईमेल",
    phoneLabel: "दूरध्वनी",
    hours: "(सोम–शुक्र सकाळी ९.१५ ते सायं. ६.१५)",
  },
  en: {
    heroTitle: "Contact Us",
    heroDesc: "Fill out the contact form below to get in touch with the Gram Panchayat administration and raise queries",
    title: "Contact Us",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    subject: "Subject",
    message: "Message Description",
    submit: "Submit Form",
    successMsg: "Message sent successfully ✅",
    office: "Gram Panchayat Office",
    village: "Dhamner",
    address: "Taluka - Koregaon, District - Satara",
    emailLabel: "Email",
    phoneLabel: "Phone",
    hours: "(Mon–Fri, 9:15 AM – 6:15 PM)",
  },
};

const Contact = () => {
  const { lang } = useLang();
  const c = content[lang];
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? "http://localhost:5000" : "https://dhamner-website.onrender.com"}/api/contact`, formData);
      window.location.href = "/thank-you";
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert(error.response?.data?.message || error.message || "Error");
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-6 text-center mb-10">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <PhoneCall size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{c.heroTitle}</h1>
        <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">{c.heroDesc}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="bg-gray-100 p-5 sm:p-6 md:p-8 rounded-xl shadow">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="firstName" placeholder={c.firstName} value={formData.firstName} onChange={handleChange} required className="p-3 border rounded-md w-full" />
            <input type="text" name="lastName" placeholder={c.lastName} value={formData.lastName} onChange={handleChange} required className="p-3 border rounded-md w-full" />
          </div>
          <input type="email" name="email" placeholder={c.email} value={formData.email} onChange={handleChange} required className="p-3 border rounded-md w-full mt-4" />
          <input type="text" name="subject" placeholder={c.subject} value={formData.subject} onChange={handleChange} required className="p-3 border rounded-md w-full mt-4" />
          <textarea name="message" placeholder={c.message} rows="4" value={formData.message} onChange={handleChange} required className="p-3 border rounded-md w-full mt-4"></textarea>
          <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 mt-4 rounded-md">{c.submit}</button>
        </form>

        <div className="w-full h-[250px] sm:h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30421.85630339417!2d74.1427960025288!3d17.615454881886926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2325cc0cd2dfd%3A0x5c723787f0971317!2sDhamner%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1773921087159!5m2!1sen!2sin"
            className="w-full h-full rounded-xl"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 mb-20">
        <div className="bg-gray-100 p-6 md:p-8 text-center rounded-xl shadow">
          <h3 className="text-lg md:text-xl font-semibold mb-2">{c.office}</h3>
          <p className="text-green-600 font-medium">{c.village}</p>
          <p>{c.address}</p>
        </div>
        <div className="bg-gray-100 p-6 md:p-8 text-center rounded-xl shadow">
          <h3 className="text-lg md:text-xl font-semibold mb-2">{c.emailLabel}</h3>
          <p className="break-words">dhamner189585@gmail.com</p>
        </div>
        <div className="bg-gray-100 p-6 md:p-8 text-center rounded-xl shadow">
          <h3 className="text-lg md:text-xl font-semibold mb-2">{c.phoneLabel}</h3>
          <p>9975240321</p>
          <p className="text-green-600 mt-2 text-sm">{c.hours}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
