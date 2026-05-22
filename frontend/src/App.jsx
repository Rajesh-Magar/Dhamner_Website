import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowUp } from "lucide-react";

import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import AboutVillage from "./Layout/Ourself/AboutVillage";
import Members from "./Layout/Ourself/Members";
import PhotoGallery from "./Layout/Ourself/photogallery";
import HomePage from './Layout/HomePage/HomePage.jsx';
import Ayushman from './Layout/Government Services/Ayushman.jsx';
import Pesa from './Layout/Government Services/Pesa.jsx';
import PMMVY from './Layout/Government Services/PMMVY.jsx';
import Bhagyashree from './Layout/Government Services/Bhagyashree.jsx';
import Ramai from './Layout/Government Services/Ramai.jsx';
import LadkiBahin from './Layout/Government Services/LadkiBahin.jsx';
import ShabariAwas from './Layout/Government Services/ShabariAwas.jsx';
import SwatchhBharat from './Layout/Government Services/SwatchhBharat.jsx';
import FinanceCommission15 from './Layout/Government Services/FinanceCommission15.jsx';
import TaxForm from './Layout/Services/TaxForm.jsx';
import SelfDeclarationPage from './Layout/Services/SelfDeclarationPage.jsx';
import ImportantLinks from './Layout/Services/ImportantLinks.jsx';
import ComplaintPage from './Layout/Services/ComplaintPage.jsx';
import AadhaarSection from './Layout/Services/AadhaarSection.jsx';
import BirthDocument from './Layout/Documents/BirthDocument.jsx';
import DeathDocument from './Layout/Documents/DeathDocument.jsx';
import MarriageDocument from './Layout/Documents/MarriageDocument.jsx';
import ResidenceDocument from './Layout/Documents/ResidenceDocument.jsx';
import BussinessDocument from './Layout/Documents/BussinessDocument.jsx';
import PropertyDocument from './Layout/Documents/PropertyDocument.jsx';
import BuildingPermission from "./Layout/Documents/BuildingPermission.jsx";
import NoDues from "./Layout/Documents/NoDues.jsx";
import AgeDocument from "./Layout/Documents/AgeDocument.jsx";
import Land8ADocument from "./Layout/Documents/Land8ADocument.jsx";
import Land712Document from "./Layout/Documents/Land712Document.jsx";
import PropertyCard from "./Layout/Documents/PropertyCard.jsx";
import PropertyTransfer from "./Layout/Documents/PropertyTransfer.jsx";
import DocumentsSection from "./Layout/Documents/DocumentsPage.jsx";
import GovernmentSchemes from "./Layout/Government Services/GovernmentSchemes.jsx";
import DepartmentPage from "./Layout/Division/DepartmentPage.jsx";
import ServicesPage from "./Layout/Services/ServicesPage.jsx";
import Krushi from './Layout/Division/agriculture.jsx';
import PashuSanvardhan from "./Layout/Division/animal.jsx";
import Contact from "./Layout/Contact/contact.jsx";
import Map from "./Layout/Map/map.jsx";
import Health from "./Layout/Division/health.jsx";
import Yashogatha from "./Layout/Ourself/yashogatha.jsx";
import MahitichaAdhikar from "./Layout/mahitichaAdhikar/information.jsx";
import ThankYou from "./Layout/ThankYou/ThankYou.jsx";


// ✅ New Framework Modules
import DashboardPage from "./Layout/Dashboard/DashboardPage.jsx";
import ProjectsPage from "./Layout/Projects/ProjectsPage.jsx";
import AnnouncementsPage from "./Layout/Announcements/AnnouncementsPage.jsx";
import BudgetPage from "./Layout/Budget/BudgetPage.jsx";
import EmploymentPage from "./Layout/Employment/EmploymentPage.jsx";
import EducationPage from "./Layout/Education/EducationPage.jsx";
import EnvironmentPage from "./Layout/Environment/EnvironmentPage.jsx";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  const [showScroll, setShowScroll] = useState(false);

  // 🔝 Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 🚀 Scroll to top button visibility listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 🔥 Backend Wake-up Call (runs once when app loads)
  useEffect(() => {
    axios.get(`${window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? "http://localhost:5000" : "https://dhamner-website.onrender.com"}`)
      .then(() => console.log("Backend awakened"))
      .catch(() => console.log("Wakeup failed"));
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutVillage />} />
        <Route path="/officers" element={<Members />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/ayushman" element={<Ayushman />} />
        <Route path="/pesa" element={<Pesa />} />
        <Route path='/pmmvy' element={<PMMVY/>}/>
        <Route path='/ladki' element={<Bhagyashree/>}/>
        <Route path='/ramai' element={<Ramai/>}/>
        <Route path='/ladki-bahin' element={<LadkiBahin/>}/>
        <Route path='/shabari' element={<ShabariAwas/>}/>
        <Route path='/swachh' element={<SwatchhBharat/>}/>
        <Route path='/finance15' element={<FinanceCommission15/>}/>
        <Route path='/tax' element={<TaxForm/>}/>
        <Route path='/self' element={<SelfDeclarationPage/>}/>
        <Route path='/links' element={<ImportantLinks/>}/>
        <Route path='/complaint' element={<ComplaintPage/>}/>
        <Route path='/Aadhaar' element={<AadhaarSection/>}/>
        <Route path='/birth' element={<BirthDocument/>}/>
        <Route path='/death' element={<DeathDocument/>}/>
        <Route path='/marriage' element={<MarriageDocument/>}/>
        <Route path='/residence' element={<ResidenceDocument/>}/>
        <Route path='/business' element={<BussinessDocument/>}/>
        <Route path='/property' element={<PropertyDocument/>}/>
        <Route path='/construction' element={<BuildingPermission/>}/>
        <Route path='/no-dues' element={<NoDues/>}/>
        <Route path='/age-proof' element={<AgeDocument/>}/>
        <Route path='/land-record' element={<Land8ADocument/>}/>
        <Route path='/712' element={<Land712Document/>}/>
        <Route path='/property-card' element={<PropertyCard/>}/>
        <Route path='/transfer' element={<PropertyTransfer/>}/>
        <Route path='/documents' element={<DocumentsSection/>}/>
        <Route path='/schemes' element={<GovernmentSchemes/>}/>
        <Route path='/department' element={<DepartmentPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/agriculture' element={<Krushi />} />
        <Route path='/animal' element={<PashuSanvardhan />} />
        <Route path='/help' element={<Contact />} />
        <Route path='/map' element={<Map />} />
        <Route path='/health' element={<Health />} />
        <Route path='/yashogatha' element={<Yashogatha />} />
        <Route path='/information' element={<MahitichaAdhikar />} />
        <Route path='/thank-you' element={<ThankYou />} />


        {/* ✅ New Framework Module Routes */}
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/announcements' element={<AnnouncementsPage />} />
        <Route path='/budget' element={<BudgetPage />} />
        <Route path='/employment' element={<EmploymentPage />} />
        <Route path='/education' element={<EducationPage />} />
        <Route path='/environment' element={<EnvironmentPage />} />
      </Routes>

      <Footer />

      {/* 🚀 Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-green-700 hover:bg-green-800 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 border border-green-500/20 group cursor-pointer ${
          showScroll ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 invisible pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
      </button>
    </>
  );
}

export default App;