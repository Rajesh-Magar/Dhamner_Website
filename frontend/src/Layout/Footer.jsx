import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
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
          <h3 className="text-xl font-bold mb-4 font-devanagari">महत्वाच्या लिंक</h3>
          <div className="w-10 h-1 bg-amber-500 mb-6 rounded-full"></div>

          <ul className="space-y-3 font-devanagari text-sm">
            <li><Link to="/about" className="hover:underline hover:text-amber-300 transition-colors">आमच्याबद्दल</Link></li>
            <li><Link to="/officers" className="hover:underline hover:text-amber-300 transition-colors">अधिकारी/पदाधिकारी</Link></li>
            <li><Link to="/gallery" className="hover:underline hover:text-amber-300 transition-colors">फोटो गॅलरी</Link></li>
          </ul>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-xl font-bold mb-4 font-devanagari">दाखले</h3>
          <div className="w-10 h-1 bg-amber-500 mb-6 rounded-full"></div>

          <ul className="space-y-3 font-devanagari text-sm">
            <li><Link to="/birth" className="hover:underline hover:text-amber-300 transition-colors">जन्म प्रमाणपत्र</Link></li>
            <li><Link to="/death" className="hover:underline hover:text-amber-300 transition-colors">मृत्यु प्रमाणपत्र</Link></li>
            <li><Link to="/marriage" className="hover:underline hover:text-amber-300 transition-colors">विवाह प्रमाणपत्र</Link></li>
            <li><Link to="/business" className="hover:underline hover:text-amber-300 transition-colors">व्यवसाय परवाना</Link></li>
            <li><Link to="/property" className="hover:underline hover:text-amber-300 transition-colors">मालमत्ता प्रमाणपत्र</Link></li>
            <li><Link to="/construction" className="hover:underline hover:text-amber-300 transition-colors">बांधकाम परवानगी</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4 font-devanagari">सोई सुविधा</h3>
          <div className="w-10 h-1 bg-amber-500 mb-6 rounded-full"></div>

          <ul className="space-y-3 font-devanagari text-sm">
            <li><Link to="/tax" className="hover:underline hover:text-amber-300 transition-colors">कर भरणा</Link></li>
            <li><Link to="/self" className="hover:underline hover:text-amber-300 transition-colors">स्वयंघोषणापत्रे</Link></li>
            <li><Link to="/links" className="hover:underline hover:text-amber-300 transition-colors">जनसुविधा महत्वाच्या लिंक</Link></li>
            <li><Link to="/complaint" className="hover:underline hover:text-amber-300 transition-colors">तक्रार विभाग</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4 font-devanagari">संपर्क</h3>
          <div className="w-10 h-1 bg-amber-500 mb-6 rounded-full"></div>

          <div className="space-y-4 text-sm font-devanagari text-green-100">
            <div>
              <p className="font-bold text-white text-base">दूरध्वनी (ग्रामपंचायत)</p>
              <p className="mt-1">+91 9850032987</p>
            </div>

            <div>
              <p className="font-bold text-white text-base">ईमेल</p>
              <p className="mt-1">dhamner189585@gmail.com</p>
            </div>

            <div>
              <p className="font-bold text-white text-base">पत्ता</p>
              <p className="mt-1">धामणेर ता. कोरेगाव , जि. सातारा</p>
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
            <p className="font-bold text-xl text-amber-500">यशवंत ग्रामपंचायत</p>
            <p className="font-bold text-xl text-white">धामणेर</p>
            <p className="text-xs text-green-200 mt-1">ता. कोरेगाव, जि. सातारा</p>
          </div>
        </div>
      </div>
    </footer>
  );
}