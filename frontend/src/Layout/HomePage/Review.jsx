import { useState } from "react";
import axios from "axios";
import { useLang } from "../../context/LanguageContext";

export default function Review() {
  const { lang } = useLang();
  
  const content = {
    mr: {
      title: "आपली मते व अभिप्राय",
      subtitle: "आपले विचार आम्हाला सांगा – कारण तुमचा अनुभव आमच्या प्रगतीचा मार्गदर्शक आहे.",
      firstName: "पहिले नाव",
      lastName: "आडनाव",
      email: "ईमेल",
      subject: "विषय",
      message: "विषयाचे वर्गीकरण",
      submit: "फॉर्म पाठवा",
      successAlert: "आपली मते पाठवली गेली ✅",
      errorAlert: "अज्ञात त्रुटी",
    },
    en: {
      title: "Feedback & Reviews",
      subtitle: "Tell us your thoughts – because your experience guides our progress.",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      subject: "Subject",
      message: "Message Details",
      submit: "Submit Form",
      successAlert: "Your feedback has been submitted successfully ✅",
      errorAlert: "Unknown error occurred",
    }
  };

  const t = content[lang] || content.mr;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
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
      await axios.post(`${window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? "http://localhost:5000" : "https://dhamner-website.onrender.com"}/api/review`, formData);
      window.location.href = "/thank-you";
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Full Error:", error.response?.data || error.message);
      const errorMsg = error.response?.data?.message || error.message || t.errorAlert;
      alert(errorMsg);
    }
  };

  return (
    <section className="w-full bg-gray-100 py-16 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          {t.title}
        </h2>

        <div className="flex items-center justify-center gap-4 my-4">
          <div className="w-16 h-[2px] bg-yellow-700"></div>
          <div className="w-4 h-4 bg-yellow-700 rotate-45"></div>
          <div className="w-16 h-[2px] bg-yellow-700"></div>
        </div>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* Content */}
      <div className="flex justify-center items-center">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl">
          {/* Name Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold">
                {t.firstName} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder={t.firstName}
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="font-semibold">
                {t.lastName} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder={t.lastName}
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold">
              {t.email} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder={t.email}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="font-semibold">
              {t.subject} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              placeholder={t.subject}
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="font-semibold">
              {t.message} <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder={t.message}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            {t.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
