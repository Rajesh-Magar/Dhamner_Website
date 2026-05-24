import { useState } from "react";
import { Mail, Phone, Clock, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token");

  const menuItems = [
    { name: "जन्म प्रमाणपत्र", link: "/admin/birth" },
    { name: "मृत्यू प्रमाणपत्र", link: "/admin/death" },
    { name: "विवाह प्रमाणपत्र", link: "/admin/marriage" },
    { name: "रहिवासी प्रमाणपत्र", link: "/admin/residence" },
    { name: "व्यवसाय परवाना", link: "/admin/business" },
    { name: "मालमत्ता प्रमाणपत्र", link: "/admin/property" },
    { name: "बांधकाम परवानगी", link: "/admin/construction" },
    { name: "थकबाकी नसल्याचे", link: "/admin/no-dues" },
    { name: "वयाचा दाखला", link: "/admin/age-proof" },
    { name: "जमिनीचा उतारा", link: "/admin/land-record" },
    { name: "७/१२ उतारा", link: "/admin/712" },
    { name: "प्रॉपर्टी कार्ड", link: "/admin/property-card" },
    { name: "मालमत्ता हस्तांतरण", link: "/admin/transfer" },
    { name: "संपर्क", link: "/admin/contact" },
    { name: "तक्रार विभाग", link: "/admin/complaints" },
    { name: "समीक्षा विभाग", link: "/admin/reviews" },
  ];

 const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/", { replace: true });
};

  return (
    <div className="w-full shadow-sm top-0 z-50">

      {/* HEADER */}
      <div className="bg-white px-4 lg:px-10 py-3.5 flex flex-col lg:flex-row justify-between items-center gap-4 border-b border-gray-100">

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-50 py-1.5 px-3 rounded-xl border border-gray-100 shadow-sm shrink-0">
            <img src="/assets/HD-wallpaper-satyamev-jayate-bharat-civil-service-history-ias-india-indian-ips-lion-emblem-motivation-removebg-preview.png" className="h-[70px] w-auto object-contain" alt="emblem" />
            <img src="/assets/Seal_of_Maharashtra.svg.png" className="h-[45px] w-auto object-contain ml-[-5px]" alt="seal" />
            <img src="/assets/Gemini_Generated_Image_7qc6v97qc6v97qc6-removebg-preview.png" className="h-[50px] w-auto object-contain" alt="logo" />
          </div>

          <div className="font-devanagari text-left">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">यशवंत ग्रामपंचायत धामणेर</h1>
            <p className="text-xs lg:text-sm text-amber-600 font-semibold mt-0.5">प्रशासकीय विभाग | ता. कोरेगाव, जि. सातारा</p>
          </div>
        </div>

        <div className="hidden lg:flex gap-8 text-gray-600 font-devanagari">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-green-50 rounded-lg text-green-700">
              <Mail size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-950">ईमेल</p>
              <p className="text-[11px] text-gray-500">dhamner189585@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-green-50 rounded-lg text-green-700">
              <Clock size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-950">कार्यालयीन वेळ</p>
              <p className="text-[11px] text-gray-500">९.१५ ते ६.१५</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-green-50 rounded-lg text-green-700">
              <Phone size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-950">दूरध्वनी</p>
              <p className="text-[11px] text-gray-500">+91 9850032987</p>
            </div>
          </div>
        </div>

        <button className="lg:hidden p-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* NAV ONLY AFTER LOGIN */}
      {isLoggedIn && (
        <>
          <div className="hidden lg:flex flex-wrap justify-center gap-3 py-3.5 bg-green-800 text-white text-xs font-semibold px-4">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.link} className="hover:text-amber-300 hover:bg-green-900 px-3 py-1.5 rounded-lg transition-all duration-200 font-devanagari">
                {item.name}
              </Link>
            ))}

            <button onClick={handleLogout} className="text-red-300 hover:text-red-100 hover:bg-red-900 px-3 py-1.5 rounded-lg transition-all duration-200 font-semibold ml-4">
              Logout
            </button>
          </div>

          {/* MOBILE */}
          {open && (
            <div className="lg:hidden bg-green-900 text-white px-6 py-6 space-y-2 max-h-[70vh] overflow-y-auto font-devanagari border-b border-green-850">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 border-b border-green-800 hover:text-amber-300 transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <button onClick={handleLogout} className="w-full text-left text-red-300 font-bold py-3 hover:text-red-105 transition-colors mt-4">
                Logout
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}