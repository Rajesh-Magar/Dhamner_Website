import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { lang, t } = useLang();

  return (
    <footer className="relative bg-gradient-to-b from-green-800 to-green-950 text-white pt-16 pb-10 overflow-hidden">
      
      {/* Background Chakra Image */}
      <img
        src="/chakra.png"
        className="absolute left-20 bottom-10 opacity-10 w-[350px] pointer-events-none"
        alt="chakra"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6 relative z-10">

        {/* Important Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 font-devanagari">{t.importantLinks}</h3>
          <div className="w-10 h-1 bg-amber-500 mb-6 rounded-full"></div>

          <ul className="space-y-3 font-devanagari text-sm">
            <li><Link to="/about" className="hover:underline hover:text-amber-300 transition-colors">{t.aboutVillage}</Link></li>
            <li><Link to="/officers" className="hover:underline hover:text-amber-300 transition-colors">{t.officers}</Link></li>
            <li><Link to="/gallery" className="hover:underline hover:text-amber-300 transition-colors">{t.photoGallery}</Link></li>
            <li><Link to="/dashboard" className="hover:underline hover:text-amber-300 transition-colors">{t.dashboard}</Link></li>
            <li><Link to="/projects" className="hover:underline hover:text-amber-300 transition-colors">{t.projects}</Link></li>
            <li><Link to="/budget" className="hover:underline hover:text-amber-300 transition-colors">{t.budget}</Link></li>
          </ul>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-xl font-bold mb-4 font-devanagari">{t.documents}</h3>
          <div className="w-10 h-1 bg-amber-500 mb-6 rounded-full"></div>

          <ul className="space-y-3 font-devanagari text-sm">
            <li><Link to="/birth" className="hover:underline hover:text-amber-300 transition-colors">{t.birthCert}</Link></li>
            <li><Link to="/death" className="hover:underline hover:text-amber-300 transition-colors">{t.deathCert}</Link></li>
            <li><Link to="/marriage" className="hover:underline hover:text-amber-300 transition-colors">{t.marriageCert}</Link></li>
            <li><Link to="/business" className="hover:underline hover:text-amber-300 transition-colors">{t.businessCert}</Link></li>
            <li><Link to="/property" className="hover:underline hover:text-amber-300 transition-colors">{t.propertyCert}</Link></li>
            <li><Link to="/construction" className="hover:underline hover:text-amber-300 transition-colors">{t.buildingPerm}</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4 font-devanagari">{t.services}</h3>
          <div className="w-10 h-1 bg-amber-500 mb-6 rounded-full"></div>

          <ul className="space-y-3 font-devanagari text-sm">
            <li><Link to="/tax" className="hover:underline hover:text-amber-300 transition-colors">{t.tax}</Link></li>
            <li><Link to="/self" className="hover:underline hover:text-amber-300 transition-colors">{t.selfDeclaration}</Link></li>
            <li><Link to="/links" className="hover:underline hover:text-amber-300 transition-colors">{t.importantLinks}</Link></li>
            <li><Link to="/complaint" className="hover:underline hover:text-amber-300 transition-colors">{t.complaint}</Link></li>
            <li><Link to="/employment" className="hover:underline hover:text-amber-300 transition-colors">{t.employment}</Link></li>
            <li><Link to="/environment" className="hover:underline hover:text-amber-300 transition-colors">{t.environment}</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4 font-devanagari">{t.contact}</h3>
          <div className="w-10 h-1 bg-amber-500 mb-6 rounded-full"></div>

          <div className="space-y-4 text-sm font-devanagari text-green-100">
            <div>
              <p className="font-bold text-white text-base">{t.phone}</p>
              <p className="mt-1 font-medium">+91 9850032987</p>
            </div>

            <div>
              <p className="font-bold text-white text-base">{t.email}</p>
              <p className="mt-1 font-medium text-amber-300">dhamner189585@gmail.com</p>
            </div>

            <div>
              <p className="font-bold text-white text-base">{lang === "en" ? "Address" : "पत्ता"}</p>
              <p className="mt-1">{lang === "en" ? "Dhamner, Tal. Koregaon, Dist. Satara" : "धामणेर ता. कोरेगाव , जि. सातारा"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-green-700/60 mt-12 pt-6 text-center text-sm">
        
        <div className="flex justify-center gap-6 mb-6 text-green-200">
          <Link to="/terms" className="hover:underline hover:text-white transition-colors">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:underline hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/disclaimer" className="hover:underline hover:text-white transition-colors">Disclaimer</Link>
        </div>

        {/* Bottom Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 px-4">
          <div className="flex items-center gap-4 bg-white/5 py-2 px-4 rounded-xl border border-white/10 backdrop-blur-sm">
            <img
              src="/assets/HD-wallpaper-satyamev-jayate-bharat-civil-service-history-ias-india-indian-ips-lion-emblem-motivation-removebg-preview.png"
              className="h-[80px] w-auto object-contain"
              alt="emblem"
            />
            <img
              src="/assets/Seal_of_Maharashtra.svg.png"
              className="h-[50px] w-auto object-contain"
              alt="seal"
            />
            <img
              src="/assets/Gemini_Generated_Image_7qc6v97qc6v97qc6-removebg-preview.png"
              className="h-[55px] w-auto object-contain"
              alt="logo"
            />
          </div>

          <div className="text-left font-devanagari">
            <p className="font-bold text-xl text-amber-500">{lang === "en" ? "Yeshwant Grampanchayat" : "यशवंत ग्रामपंचायत"}</p>
            <p className="font-bold text-xl text-white">{lang === "en" ? "Dhamner" : "धामणेर"}</p>
            <p className="text-xs text-green-200 mt-1">{lang === "en" ? "Tal. Koregaon, Dist. Satara" : "ता. कोरेगाव, जि. सातारा"}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}