import { createContext, useContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const translations = {
  mr: {
    // ─── Navbar ───────────────────────────────────────────────
    home: "मुख्य पृष्ठ",
    about: "आमच्याविषयी",
    schemes: "शासकीय योजना",
    beneficiary: "लाभार्थी योजना",
    services: "सोई सुविधा",
    departments: "विभाग",
    documents: "दाखले",
    gis: "GIS पोर्टल",
    map: "नकाशा",
    rti: "माहितीचा अधिकार",
    contact: "संपर्क",
    dashboard: "डॅशबोर्ड",
    projects: "प्रकल्प",
    announcements: "घोषणा",
    budget: "बजेट",
    employment: "रोजगार",
    education: "शिक्षण",
    environment: "पर्यावरण",
    newFeatures: "इतर वैशिष्ट्ये",
    // ─── Navbar Dropdown ─────────────────────────────────────
    aboutVillage: "आमच्याबद्दल",
    officers: "अधिकारी/पदाधिकारी",
    photoGallery: "फोटो गॅलरी",
    achievements: "धामणेरची यशोगाथा",
    jalJeevan: "जलजीवन मिशन",
    ayushman: "आयुष्मान भारत योजना",
    pesa: "पेसा निधी योजना",
    pmmvy: "प्रधानमंत्री मातृ वंदना योजना",
    bhagyashree: "भाग्यश्री योजना",
    ramai: "रमाई आवास योजना",
    ladkiBahin: "लाडकी बहिण योजना",
    shabari: "शबरी आवास योजना",
    swachh: "स्वच्छ भारत मिशन",
    finance15: "१५वा वित्त आयोग",
    tax: "कर भरणा",
    selfDeclaration: "स्वयंघोषणापत्रे",
    importantLinks: "महत्वाच्या लिंक",
    complaint: "तक्रार विभाग",
    aadhaar: "आधार दुरुस्ती",
    agriculture: "कृषी",
    health: "आरोग्य",
    animal: "पशुसंवर्धन",
    birthCert: "जन्म प्रमाणपत्र",
    deathCert: "मृत्यू प्रमाणपत्रासाठी अर्ज",
    marriageCert: "विवाह प्रमाणपत्र अर्ज",
    residenceCert: "रहिवासी प्रमाणपत्र",
    businessCert: "व्यवसाय परवाना प्रमाणपत्र",
    propertyCert: "मालमत्ता प्रमाणपत्र",
    buildingPerm: "बांधकाम परवानगी अर्ज",
    noDues: "थकबाकी नसल्याचे प्रमाणपत्र",
    ageProof: "वयाचा दाखला",
    landRecord: "जमिनीचा उतारा",
    extract712: "७/१२ उतारा",
    propertyCard: "प्रॉपर्टी कार्ड",
    propertyTransfer: "मालमत्ता हस्तांतरण",
    // ─── Dashboard ───────────────────────────────────────────
    villageProgress: "माझे गाव, माझी प्रगती",
    population: "लोकसंख्या",
    literacy: "साक्षरता दर",
    totalArea: "एकूण क्षेत्र",
    wards: "वार्ड",
    households: "घरे",
    cleanliness: "स्वच्छता",
    powerSupply: "वीज पुरवठा",
    fundUtilization: "निधी वापर",
    tapConnections: "नळ जोडणी",
    // ─── Projects ────────────────────────────────────────────
    projectsTitle: "प्रमुख प्रकल्प व उपक्रम",
    completed: "पूर्ण",
    ongoing: "प्रगतीपथावर",
    proposed: "प्रस्तावित",
    // ─── Budget ──────────────────────────────────────────────
    budgetTitle: "वित्त व बजेट पारदर्शकता",
    income: "उत्पन्न",
    expenditure: "खर्च",
    // ─── Announcements ───────────────────────────────────────
    announcementsTitle: "घोषणा व परिपत्रके",
    // ─── Employment ──────────────────────────────────────────
    employmentTitle: "रोजगार व कौशल्य विकास",
    // ─── Education ───────────────────────────────────────────
    educationTitle: "शिक्षण व युवा कोपरा",
    // ─── Environment ─────────────────────────────────────────
    environmentTitle: "पर्यावरण व शाश्वतता",
    // ─── About Village ───────────────────────────────────────
    aboutPageTitle: "ग्रामपंचायतीविषयी",
    aboutHeading: "महाराष्ट्राच्या नकाशावर ठळकपणे उभे राहणारे आदर्श गाव",
    aboutIntro: "धामणेर गावात स्वच्छता, सिमेंट रस्ते, पाणी व्यवस्थापन, शिक्षण आणि सामाजिक एकता यावर विशेष भर दिला जातो. ग्रामस्थांच्या एकजुटीमुळे विविध विकासकामे यशस्वीपणे राबवली जात आहेत. तसेच शेती हा मुख्य व्यवसाय असून कृष्णा नदीच्या पाण्यामुळे येथे शेतीला मोठा आधार मिळतो.",
    completedWorks: "पूर्ण झालेली कामे",
    ongoingWorks: "सुरू असलेली कामे",
    // ─── Common ──────────────────────────────────────────────
    readMore: "अधिक वाचा",
    download: "डाउनलोड",
    applyNow: "अर्ज करा",
    viewAll: "सर्व पहा",
    search: "शोधा",
    backToHome: "मुख्य पृष्ठावर जा",
    officeHours: "कार्यालयीन वेळ",
    officeHoursVal: "सकाळी ९.१५ ते सायंकाळी ६.१५",
    email: "ईमेल",
    phone: "दूरध्वनी",
    searchPlaceholder: "सेवा, प्रमाणपत्रे किंवा पाने शोधा...",
    noResults: "तुमच्या शोधाशी जुळणारे कोणतेही निकाल आढळले नाहीत.",
    popularPages: "लोकप्रिय पाने",
    pressEsc: "बंद करण्यासाठी ESC दाबा",
  },
  en: {
    // ─── Navbar ───────────────────────────────────────────────
    home: "Home",
    about: "About Us",
    schemes: "Government Schemes",
    beneficiary: "Beneficiary Schemes",
    services: "Services",
    departments: "Departments",
    documents: "Documents",
    gis: "GIS Portal",
    map: "Map",
    rti: "Right to Information",
    contact: "Contact",
    dashboard: "Dashboard",
    projects: "Projects",
    announcements: "Announcements",
    budget: "Budget",
    employment: "Employment",
    education: "Education",
    environment: "Environment",
    newFeatures: "Other Features",
    // ─── Navbar Dropdown ─────────────────────────────────────
    aboutVillage: "About Village",
    officers: "Officers",
    photoGallery: "Photo Gallery",
    achievements: "Village Achievements",
    jalJeevan: "Jal Jeevan Mission",
    ayushman: "Ayushman Bharat",
    pesa: "PESA Fund Scheme",
    pmmvy: "PMMVY",
    bhagyashree: "Bhagyashree Scheme",
    ramai: "Ramai Awas Yojana",
    ladkiBahin: "Ladki Bahin Scheme",
    shabari: "Shabari Awas Yojana",
    swachh: "Swachh Bharat Mission",
    finance15: "15th Finance Commission",
    tax: "Tax Payment",
    selfDeclaration: "Self Declaration",
    importantLinks: "Important Links",
    complaint: "Grievance",
    aadhaar: "Aadhaar Correction",
    agriculture: "Agriculture",
    health: "Health",
    animal: "Animal Husbandry",
    birthCert: "Birth Certificate",
    deathCert: "Death Certificate",
    marriageCert: "Marriage Certificate",
    residenceCert: "Residence Certificate",
    businessCert: "Business License",
    propertyCert: "Property Document",
    buildingPerm: "Building Permission",
    noDues: "No Dues Certificate",
    ageProof: "Age Certificate",
    landRecord: "Land Record 8A",
    extract712: "7/12 Extract",
    propertyCard: "Property Card",
    propertyTransfer: "Property Transfer",
    // ─── Dashboard ───────────────────────────────────────────
    villageProgress: "My Village, My Progress",
    population: "Population",
    literacy: "Literacy Rate",
    totalArea: "Total Area",
    wards: "Wards",
    households: "Households",
    cleanliness: "Cleanliness",
    powerSupply: "Power Supply",
    fundUtilization: "Fund Utilization",
    tapConnections: "Tap Connections",
    // ─── Projects ────────────────────────────────────────────
    projectsTitle: "Key Projects & Initiatives",
    completed: "Completed",
    ongoing: "Ongoing",
    proposed: "Proposed",
    // ─── Budget ──────────────────────────────────────────────
    budgetTitle: "Finance & Budget Transparency",
    income: "Income",
    expenditure: "Expenditure",
    // ─── Announcements ───────────────────────────────────────
    announcementsTitle: "Announcements & Circulars",
    // ─── Employment ──────────────────────────────────────────
    employmentTitle: "Employment & Skill Development",
    // ─── Education ───────────────────────────────────────────
    educationTitle: "Education & Youth Corner",
    // ─── Environment ─────────────────────────────────────────
    environmentTitle: "Environment & Sustainability",
    // ─── About Village ───────────────────────────────────────
    aboutPageTitle: "About Gram Panchayat",
    aboutHeading: "A Model Village Standing Prominently on the Map of Maharashtra",
    aboutIntro: "Dhamner village places special emphasis on cleanliness, cement roads, water management, education and social unity. Various development works are being successfully carried out due to the unity of the villagers. Agriculture is the main occupation and the Krishna river provides great support for farming here.",
    completedWorks: "Completed Works",
    ongoingWorks: "Ongoing Works",
    // ─── Common ──────────────────────────────────────────────
    readMore: "Read More",
    download: "Download",
    applyNow: "Apply Now",
    viewAll: "View All",
    search: "Search",
    backToHome: "Back to Home",
    officeHours: "Office Hours",
    officeHoursVal: "9:15 AM – 6:15 PM",
    email: "Email",
    phone: "Phone",
    searchPlaceholder: "Search for services, certificates, pages...",
    noResults: "No results found matching your query.",
    popularPages: "Popular Pages",
    pressEsc: "Press ESC to close",
  },
};

export function LanguageProvider({ children }) {
  // Persist chosen language across page navigations and refreshes
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("gp_lang") || "mr"; }
    catch { return "mr"; }
  });

  useEffect(() => {
    try { localStorage.setItem("gp_lang", lang); } catch {}
    // Set html lang attribute for accessibility & SEO
    document.documentElement.lang = lang === "mr" ? "mr" : "en";
  }, [lang]);

  const t = translations[lang];
  const toggleLang = () => setLang((l) => (l === "mr" ? "en" : "mr"));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
