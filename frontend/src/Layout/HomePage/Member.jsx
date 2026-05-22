import { useLang } from "../../context/LanguageContext";

const content = {
  mr: {
    ministers: "माननीय मंत्री व पदाधिकारी",
    officials: "ग्रामपंचायत पदाधिकारी",
    ministersData: [
      { id: 1, name: "देवेंद्र फडणवीस", role: "माननीय मुख्यमंत्री", image: "/members/PM.jpeg" },
      { id: 2, name: "एकनाथ शिंदे", role: "माननीय उपमुख्यमंत्री", image: "/members/PM1.jpeg" },
      { id: 3, name: "सुनेत्रा आजित पवार", role: "माननीय उपमुख्यमंत्री", image: "/members/PM2.jpeg" },
      { id: 4, name: "जयकुमार गोरे", role: "माननीय मंत्री, ग्रामविकास", image: "/members/jaykumar.jpeg" },
      { id: 5, name: "योगेश कदम", role: "माननीय राज्यमंत्री", image: "/members/yogesh kadam.jpeg" },
      { id: 6, name: "याशनी नगराजन", role: "मुख्य कार्यकारी अधिकारी CEO", image: "/members/ceo.png" },
      { id: 7, name: "राहुल देसाई साहेब", role: "उपमुख्य कार्यकारी अधिकारी (ग्रामपंचायत) जिल्हा परिषद सातारा", image: "/members/WhatsApp Image 2026-04-03 at 4.33.10 PM.jpeg" },
      { id: 8, name: "सुप्रिया चव्हाण मॅडम", role: "गटविकास अधिकारी पंचायत समिती कोरेगाव", image: "/members/WhatsApp Image 2026-04-03 at 4.25.57 PM.jpeg" },
      { id: 9, name: "एल जी गावडे साहेब", role: "सहाय्यक गटविकास अधिकारी कोरेगाव", image: "/members/WhatsApp Image 2026-04-03 at 4.23.53 PM.jpeg" },
      { id: 10, name: "एन बी माने", role: "विस्ताराधिकारी ग्रामपंचायत पंचायत समिती कोरेगाव", image: "/members/WhatsApp Image 2026-04-04 at 5.15.33 PM.jpeg" },
      { id: 11, name: "शहाजी क्षीरसागर", role: "आदर्श सरपंच", image: "/members/शहाजी क्षीरसागर.png" },
    ],
    officialsData: [
      { id: 1, name: "श्री.चंद्रकांत शंकर व्होवाळे", role: "सरपंच", image: "/members/Sarpanch chandrakant howale.jpg.jpeg" },
      { id: 2, name: "श्री.प्रविण वामन क्षीरसागर", role: "उपसरपंच", image: "/members/upsarpanch pravin kshirsagar.jpg.jpeg" },
      { id: 3, name: "श्री.प्रशांत फडतरे", role: "ग्रामपंचायत अधिकारी", image: "/members/WhatsApp Image 2026-03-17 at 6.13.49 PM.jpeg" },
    ],
  },
  en: {
    ministers: "Hon. Ministers & Officials",
    officials: "Gram Panchayat Officials",
    ministersData: [
      { id: 1, name: "Devendra Fadnavis", role: "Hon. Chief Minister", image: "/members/PM.jpeg" },
      { id: 2, name: "Eknath Shinde", role: "Hon. Deputy Chief Minister", image: "/members/PM1.jpeg" },
      { id: 3, name: "Sunetra Ajit Pawar", role: "Hon. Deputy Chief Minister", image: "/members/PM2.jpeg" },
      { id: 4, name: "Jaykumar Gore", role: "Hon. Minister, Rural Development", image: "/members/jaykumar.jpeg" },
      { id: 5, name: "Yogesh Kadam", role: "Hon. State Minister", image: "/members/yogesh kadam.jpeg" },
      { id: 6, name: "Yaashini Nagarajan", role: "Chief Executive Officer (CEO)", image: "/members/ceo.png" },
      { id: 7, name: "Rahul Desai", role: "Deputy CEO (Gram Panchayat), Zilla Parishad Satara", image: "/members/WhatsApp Image 2026-04-03 at 4.33.10 PM.jpeg" },
      { id: 8, name: "Supriya Chavan", role: "Block Development Officer, Panchayat Samiti Koregaon", image: "/members/WhatsApp Image 2026-04-03 at 4.25.57 PM.jpeg" },
      { id: 9, name: "L G Gavde", role: "Assistant Block Development Officer, Koregaon", image: "/members/WhatsApp Image 2026-04-03 at 4.23.53 PM.jpeg" },
      { id: 10, name: "N B Mane", role: "Extension Officer, Gram Panchayat, Panchayat Samiti Koregaon", image: "/members/WhatsApp Image 2026-04-04 at 5.15.33 PM.jpeg" },
      { id: 11, name: "Shahaji Kshirsagar", role: "Ideal Sarpanch", image: "/members/शहाजी क्षीरसागर.png" },
    ],
    officialsData: [
      { id: 1, name: "Shri. Chandrakant Shankar Vhovale", role: "Sarpanch", image: "/members/Sarpanch chandrakant howale.jpg.jpeg" },
      { id: 2, name: "Shri. Pravin Vaman Kshirsagar", role: "Upsarpanch", image: "/members/upsarpanch pravin kshirsagar.jpg.jpeg" },
      { id: 3, name: "Shri. Prashant Phadtare", role: "Gram Panchayat Officer", image: "/members/WhatsApp Image 2026-03-17 at 6.13.49 PM.jpeg" },
    ],
  },
};

export default function Member() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-6 lg:px-10" id="officers">

      {/* ================= MINISTERS SECTION ================= */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 tracking-tight">
          {c.ministers}
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="w-10 h-[2px] bg-orange-500"></span>
          <span className="w-2.5 h-2.5 bg-orange-500 rotate-45"></span>
          <span className="w-10 h-[2px] bg-orange-500"></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-24 justify-center">
        {c.ministersData.map((person) => (
          <div 
            key={person.id} 
            className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between items-center text-center group cursor-pointer"
          >
            <div className="flex justify-center mb-4 overflow-hidden rounded-2xl">
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-2xl shadow-sm border border-gray-100 group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="mt-2">
              <h3 className="text-green-800 font-extrabold text-sm md:text-base tracking-tight group-hover:text-green-900 transition">
                {person.name}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm mt-1.5 font-semibold leading-relaxed">
                {person.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= OFFICIALS SECTION ================= */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 tracking-tight">
          {c.officials}
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="w-10 h-[2px] bg-orange-500"></span>
          <span className="w-2.5 h-2.5 bg-orange-500 rotate-45"></span>
          <span className="w-10 h-[2px] bg-orange-500"></span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {c.officialsData.map((person) => (
          <div
            key={person.id}
            className="text-center bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-xl hover:translate-y-[-6px] transition-all duration-300 cursor-pointer group"
          >
            <div className="flex justify-center mb-6 overflow-hidden rounded-2xl">
              <img
                src={person.image}
                alt={person.name}
                className="w-40 h-40 md:w-44 md:h-44 object-cover rounded-2xl shadow-sm border border-gray-100 group-hover:scale-105 transition duration-300"
              />
            </div>

            <h3 className="text-green-800 text-lg md:text-xl font-extrabold tracking-tight group-hover:text-green-900 transition">
              {person.role}
            </h3>

            <p className="text-gray-600 mt-2 text-base font-semibold">
              {person.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}