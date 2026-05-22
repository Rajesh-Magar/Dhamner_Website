import { useState } from "react";
import { Mail, Phone, Clock, Menu, X, ChevronDown, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const { lang, t, toggleLang } = useLang();

  const menuItems = [
    { name: t.home, link: "/" },
    {
      name: t.about,
      link: "/about",
      dropdown: [
        { name: t.aboutVillage, link: "/about" },
        { name: t.officers, link: "/officers" },
        { name: t.photoGallery, link: "/gallery" },
        { name: t.achievements, link: "/yashogatha" },
      ],
    },
    {
      name: t.schemes,
      link: "/schemes",
      dropdown: [
        { name: t.jalJeevan, link: "https://water.maharashtra.gov.in/" },
        { name: t.ayushman, link: "/ayushman" },
        { name: t.pesa, link: "/pesa" },
        { name: t.pmmvy, link: "/pmmvy" },
        { name: t.bhagyashree, link: "/ladki" },
        { name: t.ramai, link: "/ramai" },
        { name: t.ladkiBahin, link: "/ladki-bahin" },
        { name: t.shabari, link: "/shabari" },
        { name: t.swachh, link: "/swachh" },
        { name: t.finance15, link: "/finance15" },
      ],
    },
    {
      name: t.services,
      link: "/services",
      dropdown: [
        { name: t.tax, link: "/tax" },
        { name: t.selfDeclaration, link: "/self" },
        { name: t.importantLinks, link: "/links" },
        { name: t.complaint, link: "/complaint" },
        { name: t.aadhaar, link: "/Aadhaar" },
      ],
    },
    {
      name: t.departments,
      link: "/department",
      dropdown: [
        { name: t.agriculture, link: "/agriculture" },
        { name: t.health, link: "/health" },
        { name: t.animal, link: "/animal" },
      ],
    },
    {
      name: t.documents,
      link: "/documents",
      dropdown: [
        { name: t.birthCert, link: "/birth" },
        { name: t.deathCert, link: "/death" },
        { name: t.marriageCert, link: "/marriage" },
        { name: t.residenceCert, link: "/residence" },
        { name: t.businessCert, link: "/business" },
        { name: t.propertyCert, link: "/property" },
        { name: t.buildingPerm, link: "/construction" },
        { name: t.noDues, link: "/no-dues" },
        { name: t.ageProof, link: "/age-proof" },
        { name: t.landRecord, link: "/land-record" },
        { name: t.extract712, link: "/712" },
        { name: t.propertyCard, link: "/property-card" },
        { name: t.propertyTransfer, link: "/transfer" },
      ],
    },
    { name: t.gis, link: "https://gis.grampanchayatdhamner.in/admin/login" },
    { name: t.map, link: "/map" },
    { name: t.rti, link: "/information" },
    { name: t.contact, link: "/help" },
    {
      name: t.newFeatures,
      link: "#",
      dropdown: [
        { name: t.dashboard, link: "/dashboard" },
        { name: t.projects, link: "/projects" },
        { name: t.announcements, link: "/announcements" },
        { name: t.budget, link: "/budget" },
        { name: t.employment, link: "/employment" },
        { name: t.education, link: "/education" },
        { name: t.environment, link: "/environment" },
      ],
    },
  ];

  return (
    <div className="w-full shadow-md sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300">

      {/* 🔝 TOP HEADER */}
      <div className="bg-white px-4 lg:px-10 py-3 flex flex-col lg:flex-row justify-between items-center gap-4 border-b border-gray-100">

        <div className="flex items-center gap-2">
          <img src="/assets/HD-wallpaper-satyamev-jayate-bharat-civil-service-history-ias-india-indian-ips-lion-emblem-motivation-removebg-preview.png" className="hidden md:block h-[75px] md:h-[85px] w-auto object-contain" alt="Emblem" />
          <img src="/assets/Seal_of_Maharashtra.svg.png" className="hidden md:block h-[45px] md:h-[55px] ml-[-10px]" alt="Seal" />
          <img src="/assets/Gemini_Generated_Image_7qc6v97qc6v97qc6-removebg-preview.png" className="h-[55px] md:h-[65px]" alt="Logo" />

          <div className="ml-2">
            <h1 className="text-lg lg:text-2xl font-extrabold text-green-800 tracking-tight">
              {lang === "mr" ? "यशवंत ग्रामपंचायत धामणेर" : "Yeshwant Gram Panchayat Dhamner"}
            </h1>
            <p className="text-xs md:text-sm font-semibold text-orange-600">
              {lang === "mr" ? "ध्यास विकासाचा, वेग प्रगतीचा" : "Pursuit of Development, Speed of Progress"}
            </p>
          </div>
        </div>

        <div className="hidden lg:flex gap-6 text-gray-700 items-center">
          <div className="flex flex-col gap-1.5 border-r border-gray-200 pr-6 py-0.5">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-green-700 shrink-0" />
              <div className="text-xs text-gray-800">
                <span className="font-semibold text-gray-500 uppercase mr-1.5 text-[10px]">{t.email}:</span>
                <a href="mailto:dhamner189585@gmail.com" className="hover:text-green-700 transition-colors">dhamner189585@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-green-700 shrink-0" />
              <div className="text-xs text-gray-800">
                <span className="font-semibold text-gray-500 uppercase mr-1.5 text-[10px]">{t.officeHours}:</span>
                {t.officeHoursVal}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-green-700 shrink-0" />
              <div className="text-xs text-gray-800">
                <span className="font-semibold text-gray-500 uppercase mr-1.5 text-[10px]">{t.phone}:</span>
                <a href="tel:+919850032987" className="hover:text-green-700 transition-colors">+91 9850032987</a>
              </div>
            </div>
          </div>

          {/* Language Toggle Button */}
          <button
            id="lang-toggle-desktop"
            onClick={toggleLang}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-4 py-2 rounded-full text-sm font-bold transition-all shadow-md shrink-0"
            aria-label="Toggle Language"
          >
            <Globe size={16} />
            {lang === "mr" ? "English" : "मराठी"}
          </button>
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
              {item.link === "#" ? (
                <span className={index === 0 ? "text-green-700 font-extrabold" : ""}>
                  {item.name}
                </span>
              ) : (
                <Link 
                  to={item.link} 
                  className={index === 0 ? "text-green-700 font-extrabold" : ""}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {item.name}
                </Link>
              )}
              {item.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />}
            </div>
            {item.dropdown && (
              <div className="absolute left-0 mt-2 w-64 max-h-80 overflow-y-auto bg-white/95 backdrop-blur-md text-gray-800 shadow-2xl rounded-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 custom-scrollbar py-2">
                {item.dropdown.map((sub, i) => (
                  <Link 
                    key={i} 
                    to={sub.link} 
                    target={sub.link.startsWith("http") ? "_blank" : undefined}
                    rel={sub.link.startsWith("http") ? "noopener noreferrer" : undefined}
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
          {/* Mobile Language Toggle */}
          <button
            id="lang-toggle-mobile"
            onClick={toggleLang}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold transition-all w-full justify-center mb-2 active:scale-95 shadow-md"
          >
            <Globe size={16} />
            {lang === "mr" ? "Switch to English" : "मराठीत बदला"}
          </button>

          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-50 pb-2 last:border-b-0 last:pb-0">

              {/* MAIN */}
              <div
                className="flex justify-between items-center py-2 font-semibold text-gray-800 hover:text-green-700 cursor-pointer"
                onClick={() =>
                  item.dropdown ? setActiveMenu(activeMenu === index ? null : index) : null
                }
              >
                {item.link === "#" ? (
                  <span className="text-sm">{item.name}</span>
                ) : (
                  <Link 
                    to={item.link} 
                    onClick={() => !item.dropdown && setOpen(false)} 
                    className="text-sm"
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.name}
                  </Link>
                )}

                {item.dropdown && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      activeMenu === index ? "rotate-180 text-green-700" : "text-gray-500"
                    }`}
                  />
                )}
              </div>
              {item.dropdown && activeMenu === index && (
                <div className="ml-3 mt-1 bg-green-50/40 rounded-xl p-2 space-y-1 text-xs">
                  {item.dropdown.map((sub, i) => (
                    <Link
                      key={i}
                      to={sub.link}
                      target={sub.link.startsWith("http") ? "_blank" : undefined}
                      rel={sub.link.startsWith("http") ? "noopener noreferrer" : undefined}
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