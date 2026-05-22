import { useState } from "react";
import { Mail, Phone, Clock, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // ⭐ NEW

  const menuItems = [
    { name: "मुख्य पृष्ठ", link: "/" },

    {
      name: "आमच्याविषयी",
      link: "/about",
      dropdown: [
        { name: "आमच्याबद्दल", link: "/about" },
        { name: "अधिकारी/पदाधिकारी", link: "/officers" },
        { name: "फोटो गॅलरी", link: "/gallery" },
        { name: "धामणेरची यशोगाथा ", link: "/yashogatha" },
      ],
    },

    {
      name: "शासकीय योजना",
      link: "/schemes",
      dropdown: [
        { name: "जलजीवन मिशन", link: "https://water.maharashtra.gov.in/" },
        { name: "आयुष्मान भारत योजना", link: "/ayushman" },
        { name: "पेसा निधी योजना", link: "/pesa" },
        { name: "प्रधानमंत्री मातृ वंदना योजना", link: "/pmmvy" },
        { name: "भाग्यश्री योजना", link: "/ladki" },
        { name: "रमाई आवास योजना", link: "/ramai" },
        { name: "लाडकी बहिण योजना", link: "/ladki-bahin" },
        {name : "शबरी आवास योजना", link : "/shabari"},
        { name: "स्वच्छ भारत मिशन", link: "/swachh" },
        { name: "१५वा वित्त आयोग", link: "/finance15" },
      ],
    },

    {
      name: "लाभार्थी योजना",
      link: "/beneficiary",
      dropdown: [
        { name: "शबरी आवास योजना", link: "/shabari" },
        { name: "रमाई आवास योजना", link: "/ramai" },
      ],
    },

    {
      name: "सोई सुविधा",
      link: "/services",
      dropdown: [
        { name: "कर भरणा", link: "/tax" },
        { name: "स्वयंघोषणापत्रे", link: "/self" },
        { name: "महत्वाच्या लिंक", link: "/links" },
        { name: "तक्रार विभाग", link: "/complaint" },
        { name: "आधार दुरुस्ती", link: "/aadhaar" },
      ],
    },

    {
      name: "विभाग",
      link: "/department",
      dropdown: [
        { name: "कृषी", link: "/agriculture" },
        { name: "आरोग्य", link: "/health" },
        { name: "पशुसंवर्धन", link: "/animal" },
      ],
    },

    {
      name: "दाखले",
      link: "/documents",
      dropdown: [
        { name: "जन्म प्रमाणपत्र", link: "/birth" },
        { name: "मृत्यू प्रमाणपत्रासाठी अर्ज", link: "/death" },
        { name: "विवाह प्रमाणपत्र अर्ज", link: "/marriage" },
        { name: "रहिवासी प्रमाणपत्र", link: "/residence" },
        { name: "व्यवसाय परवाना प्रमाणपत्र", link: "/business" },
        { name: "मालमत्ता प्रमाणपत्र", link: "/property" },
        { name: "बांधकाम परवानगी अर्ज", link: "/construction" },
        { name: "थकबाकी नसल्याचे प्रमाणपत्र", link: "/no-dues" },
        { name: "वयाचा दाखला", link: "/age-proof" },
        { name: "जमिनीचा उतारा", link: "/land-record" },
        { name: "७/१२ उतारा", link: "/712" },
        { name: "प्रॉपर्टी कार्ड", link: "/property-card" },
        { name: "मालमत्ता हस्तांतरण", link: "/transfer" },
      ],
    },

   { name: "GIS पोर्टल ", link: "https://gis.grampanchayatdhamner.in/admin/login" },
    { name: "नकाशा", link: "/map" },
    { name: " माहितीचा अधिकार  ", link: "/information" },
    { name: "संपर्क ", link: "/help" },
  ];

  return (
    <div className="w-full shadow-md sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300">

      {/* 🔝 TOP HEADER */}
      <div className="bg-white px-4 lg:px-10 py-3 flex flex-col lg:flex-row justify-between items-center gap-4 border-b border-gray-100">

        <div className="flex items-center gap-2">
          <img src="/assets/HD-wallpaper-satyamev-jayate-bharat-civil-service-history-ias-india-indian-ips-lion-emblem-motivation-removebg-preview.png" className="h-[75px] md:h-[85px] w-auto object-contain" alt="Emblem" />
          <img src="/assets/Seal_of_Maharashtra.svg.png" className="h-[45px] md:h-[55px] ml-[-10px]" alt="Seal" />
          <img src="/assets/Gemini_Generated_Image_7qc6v97qc6v97qc6-removebg-preview.png" className="h-[55px] md:h-[65px]" alt="Logo" />

          <div className="ml-2">
            <h1 className="text-lg lg:text-2xl font-extrabold text-green-800 tracking-tight">यशवंत ग्रामपंचायत धामणेर</h1>
            <p className="text-xs md:text-sm font-semibold text-orange-600">ता - कोरेगाव, जि - सातारा</p>
          </div>
        </div>

        <div className="hidden lg:flex gap-8 text-gray-700">
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-green-700" />
            <div>
              <p className="font-semibold text-xs text-gray-500 uppercase">ईमेल</p>
              <p className="text-xs font-medium text-gray-800">dhamner189585@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} className="text-green-700" />
            <div>
              <p className="font-semibold text-xs text-gray-500 uppercase">कार्यालयीन वेळ</p>
              <p className="text-xs font-medium text-gray-800">सकाळी ९.१५ ते सायंकाळी ६.१५</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={18} className="text-green-700" />
            <div>
              <p className="font-semibold text-xs text-gray-500 uppercase">दूरध्वनी</p>
              <p className="text-xs font-medium text-gray-800">+91 9850032987</p>
            </div>
          </div>
        </div>

        <button 
          className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={26} className="text-green-800" /> : <Menu size={26} className="text-green-800" />}
        </button>
      </div>

      {/* 🔻 DESKTOP NAV */}
      <div className="hidden lg:flex justify-center gap-6 py-3 bg-gradient-to-r from-green-50/50 via-white to-green-50/50 border-b border-gray-100 text-sm font-semibold text-gray-700">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group pb-1">
            <div className="flex items-center gap-1 cursor-pointer py-1 px-2 rounded-lg hover:text-green-700 hover:bg-green-50/80 transition-all duration-200">
              <Link to={item.link} className={index === 0 ? "text-green-700 font-extrabold" : ""}>
                {item.name}
              </Link>
              {item.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />}
            </div>

            {item.dropdown && (
              <div className="absolute left-0 mt-2 w-64 max-h-80 overflow-y-auto bg-white/95 backdrop-blur-md text-gray-800 shadow-2xl rounded-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 custom-scrollbar py-2">
                {item.dropdown.map((sub, i) => (
                  <Link 
                    key={i} 
                    to={sub.link} 
                    className="block px-5 py-2.5 hover:bg-green-50 hover:text-green-700 hover:pl-7 transition-all duration-200 text-xs font-medium border-b border-gray-50/50 last:border-b-0"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 📱 MOBILE MENU WITH DROPDOWN */}
      {open && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 px-6 py-4 space-y-3 max-h-[75vh] overflow-y-auto shadow-inner custom-scrollbar">

          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-50 pb-2 last:border-b-0 last:pb-0">

              {/* MAIN */}
              <div
                className="flex justify-between items-center py-2 font-semibold text-gray-800 hover:text-green-700 cursor-pointer"
                onClick={() =>
                  item.dropdown
                    ? setActiveMenu(activeMenu === index ? null : index)
                    : null
                }
              >
                <Link to={item.link} onClick={() => !item.dropdown && setOpen(false)} className="text-sm">
                  {item.name}
                </Link>

                {item.dropdown && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      activeMenu === index ? "rotate-180 text-green-700" : "text-gray-500"
                    }`}
                  />
                )}
              </div>

              {/* DROPDOWN */}
              {item.dropdown && activeMenu === index && (
                <div className="ml-3 mt-1 bg-green-50/40 rounded-xl p-2 space-y-1 text-xs">
                  {item.dropdown.map((sub, i) => (
                    <Link
                      key={i}
                      to={sub.link}
                      className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-green-100 hover:text-green-800 transition"
                      onClick={() => setOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>
      )}
    </div>
  );
}