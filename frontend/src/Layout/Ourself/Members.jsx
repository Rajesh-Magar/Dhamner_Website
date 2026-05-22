import React from "react";
import { useLang } from "../../context/LanguageContext";

const content = {
  mr: {
    title: "अधिकारी / पदाधिकारी",
    subtitle: "ग्रामपंचायत सदस्य व पदाधिकारी",
    members: [
      { name: "श्री.चंद्रकांत शंकर व्होवाळे", role: "सरपंच", img: "/members/Sarpanch chandrakant howale.jpg.jpeg" },
      { name: "श्री.प्रवीण वामन क्षीरसागर", role: "उपसरपंच", img: "/members/upsarpanch pravin kshirsagar.jpg.jpeg" },
      { name: "श्री.प्रशांत विठ्ठल फडतरे", role: "ग्रामसेवक अधिकारी", img: "/members/WhatsApp Image 2026-03-17 at 6.13.49 PM.jpeg" },
      { name: "सौ. शैलजा गजानना क्षीरसागर", role: "ग्राप सदस्य", img: "/members/shailaja.jpg.jpeg" },
      { name: "सौ.शितल अजित निंबाळकर", role: "ग्राप सदस्य", img: "/members/Shital Ajit Nimbalkar.jpg.jpeg" },
      { name: "सौ.भारती मुगट माने", role: "ग्राप सदस्य", img: "/members/bharati M Mane.jpg.jpeg" },
      { name: "श्री.निलेश विश्वास क्षीरसागर", role: "ग्राप सदस्य", img: "/members/nilesh vilas kshirsagar.jpg.jpeg" },
      { name: "सौ.मनीषा दत्तात्रेय वळकुंदे", role: "ग्राप सदस्य", img: "/members/manisha.jpg.jpeg" },
      { name: "श्री.रविंद्र रामसिंग धामणेरकर", role: "ग्राप सदस्य", img: "/members/Ravindra Dhamnerkar.jpg.jpeg" },
      { name: "सौ.कार्तिकी संतोष क्षीरसागर", role: "ग्राप सदस्य", img: "/members/kartiki.jpg.jpeg" },
    ],
  },
  en: {
    title: "Officers / Office Bearers",
    subtitle: "Gram Panchayat Members & Officials",
    members: [
      { name: "Shri. Chandrakant Shankar Vhovale", role: "Sarpanch", img: "/members/Sarpanch chandrakant howale.jpg.jpeg" },
      { name: "Shri. Pravin Vaman Kshirsagar", role: "Upsarpanch", img: "/members/upsarpanch pravin kshirsagar.jpg.jpeg" },
      { name: "Shri. Prashant Vitthal Phadtare", role: "Gram Sevak Officer", img: "/members/WhatsApp Image 2026-03-17 at 6.13.49 PM.jpeg" },
      { name: "Sau. Shailaja Gajanan Kshirsagar", role: "GP Member", img: "/members/shailaja.jpg.jpeg" },
      { name: "Sau. Shital Ajit Nimbalkar", role: "GP Member", img: "/members/Shital Ajit Nimbalkar.jpg.jpeg" },
      { name: "Sau. Bharati Mugat Mane", role: "GP Member", img: "/members/bharati M Mane.jpg.jpeg" },
      { name: "Shri. Nilesh Vishwas Kshirsagar", role: "GP Member", img: "/members/nilesh vilas kshirsagar.jpg.jpeg" },
      { name: "Sau. Manisha Dattatreya Valkunde", role: "GP Member", img: "/members/manisha.jpg.jpeg" },
      { name: "Shri. Ravindra Ramsingh Dhamnerkar", role: "GP Member", img: "/members/Ravindra Dhamnerkar.jpg.jpeg" },
      { name: "Sau. Kartiki Santosh Kshirsagar", role: "GP Member", img: "/members/kartiki.jpg.jpeg" },
    ],
  },
};

export default function Members() {
  const { lang } = useLang();
  const c = content[lang];
  return (
    <div className="w-full bg-gray-100 overflow-x-hidden">
      <div className="bg-green-700 py-10 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">{c.title}</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-8 sm:mb-10">{c.subtitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {c.members.map((member, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-4 sm:p-6 text-center hover:shadow-xl transition duration-300">
              <img src={member.img} alt={member.name} className="w-28 h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 mx-auto rounded-xl object-cover" />
              <h3 className="mt-3 sm:mt-4 font-semibold text-base sm:text-lg text-gray-800">{member.name}</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}