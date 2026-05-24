import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import axios from "axios";
import { Sun, Cloud, CloudSun, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, CloudFog, Phone, Mail, Clock, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const weatherTranslations = {
  mr: {
    title: "धामणेर हवामान",
    humidity: "आद्रता",
    windSpeed: "वाऱ्याचा वेग",
    sunny: "स्वच्छ आकाश",
    partlyCloudy: "अंशतः ढगाळ",
    overcast: "पूर्णपणे ढगाळ",
    foggy: "धुके",
    rainy: "पाऊस",
    stormy: "वादळी पाऊस",
    snowy: "बर्फवृष्टी",
    kmh: "किमी/तास",
  },
  en: {
    title: "DHAMNER WEATHER",
    humidity: "HUMIDITY",
    windSpeed: "WIND SPEED",
    sunny: "Sunny",
    partlyCloudy: "Partly Cloudy",
    overcast: "Overcast",
    foggy: "Foggy",
    rainy: "Rainy",
    stormy: "Stormy",
    snowy: "Snowy",
    kmh: "km/h",
  }
};

export default function Footer() {
  const { lang, t } = useLang();
  const [weather, setWeather] = useState({
    temp: 31,
    conditionCode: 3,
    humidity: 56,
    windSpeed: 10,
    loading: true
  });

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=17.6983&longitude=74.1651&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m"
        );
        
        if (response.data && response.data.current) {
          const current = response.data.current;
          setWeather({
            temp: Math.round(current.temperature_2m),
            conditionCode: current.weather_code,
            humidity: current.relative_humidity_2m,
            windSpeed: Math.round(current.wind_speed_10m),
            loading: false
          });
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
        setWeather(prev => ({ ...prev, loading: false }));
      }
    };

    fetchWeather();
  }, []);

  const tWeather = weatherTranslations[lang] || weatherTranslations.en;

  const getWeatherDetails = (code) => {
    if (code === 0) return { text: tWeather.sunny, icon: "sun" };
    if (code === 1 || code === 2) return { text: tWeather.partlyCloudy, icon: "cloud-sun" };
    if (code === 3) return { text: tWeather.overcast, icon: "cloud" };
    if (code === 45 || code === 48) return { text: tWeather.foggy, icon: "fog" };
    if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { text: tWeather.rainy, icon: "rain" };
    if ([71, 73, 75, 77, 85, 86].includes(code)) return { text: tWeather.snowy, icon: "snow" };
    if ([95, 96, 99].includes(code)) return { text: tWeather.stormy, icon: "storm" };
    return { text: tWeather.partlyCloudy, icon: "cloud-sun" };
  };

  const weatherDetails = getWeatherDetails(weather.conditionCode);

  return (
    <footer className="relative bg-gradient-to-b from-green-800 to-green-950 text-white pt-16 pb-10 overflow-hidden">
      


      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6 relative z-10">

        {/* Important Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 font-devanagari">{t.importantLinks}</h3>
          <div className="w-10 h-1 bg-amber-500 mb-6 rounded-full"></div>

          <ul className="space-y-3 font-devanagari text-sm">
            <li><Link to="/about" className="hover:underline hover:text-amber-300 transition-colors">{t.aboutVillage}</Link></li>

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

          <ul className="space-y-4 text-sm font-devanagari text-green-100">
            {/* Phone */}
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-amber-500 shrink-0" />
              <a href="tel:+919850032987" className="hover:underline hover:text-amber-300 transition-colors font-medium">
                +91 9850032987
              </a>
            </li>

            {/* Email */}
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-amber-500 shrink-0" />
              <a href="mailto:dhamner189585@gmail.com" className="hover:underline hover:text-amber-300 transition-colors font-medium">
                dhamner189585@gmail.com
              </a>
            </li>

            {/* Office Hours */}
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-amber-500 shrink-0" />
              <span className="font-medium">
                {lang === "en" ? "9:15 AM to 6:15 PM" : "सकाळी ९.१५ ते सायंकाळी ६.१५"}
              </span>
            </li>

            {/* Address */}
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-amber-500 shrink-0 mt-0.5" />
              <span>
                {lang === "en" ? "Dhamner, Tal. Koregaon, Dist. Satara" : "धामणेर ता. कोरेगाव , जि. सातारा"}
              </span>
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="mt-6 pt-4 border-t border-green-700/40">
            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider font-devanagari">
              {lang === "en" ? "Connect With Us" : "आमच्याशी जोडा"}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1GrVSgNoso/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500 flex items-center justify-center text-green-200 hover:text-amber-400 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/yashwantgrampanchyat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500 flex items-center justify-center text-green-200 hover:text-amber-400 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@YashvantgrampanchayatDhamner"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500 flex items-center justify-center text-green-200 hover:text-amber-400 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-green-700/60 mt-12 pt-6 text-center text-sm">
        
        <div className="flex justify-center mb-6 text-green-200">
          <Link to="/sitemap" className="hover:underline hover:text-white transition-colors tracking-wider font-semibold">
            {lang === "en" ? "SITEMAP" : "साईटमॅप"}
          </Link>
        </div>

        {/* Bottom Logos and Weather Info Row */}
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 px-6 max-w-7xl mx-auto mt-6">
          
          {/* Logos and Title */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="w-full max-w-[340px] md:w-[320px] h-[150px] bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 flex items-center justify-center gap-6 shadow-xl">
              <img
                src="/assets/HD-wallpaper-satyamev-jayate-bharat-civil-service-history-ias-india-indian-ips-lion-emblem-motivation-removebg-preview.png"
                className="h-[95px] w-auto object-contain hover:scale-105 transition-transform duration-300"
                alt="emblem"
              />
              <img
                src="/assets/Seal_of_Maharashtra.svg.png"
                className="h-[60px] w-auto object-contain hover:scale-105 transition-transform duration-300"
                alt="seal"
              />
              <img
                src="/assets/Gemini_Generated_Image_7qc6v97qc6v97qc6-removebg-preview.png"
                className="h-[65px] w-auto object-contain hover:scale-105 transition-transform duration-300"
                alt="logo"
              />
            </div>

            <div className="text-left font-devanagari">
              <p className="font-bold text-xl text-amber-500">{lang === "en" ? "Yeshwant Grampanchayat" : "यशवंत ग्रामपंचायत"}</p>
              <p className="font-bold text-xl text-white">{lang === "en" ? "Dhamner" : "धामणेर"}</p>
              <p className="text-xs text-green-200 mt-1">{lang === "en" ? "Tal. Koregaon, Dist. Satara" : "ता. कोरेगाव, जि. सातारा"}</p>
            </div>
          </div>

          {/* Realtime Weather Widget */}
          <div className="relative w-full max-w-[340px] md:w-[320px] h-[150px] bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 rounded-3xl p-5 text-white shadow-xl overflow-hidden border border-white/10 select-none text-left flex flex-col justify-between">
            {/* Faint Sun Background Watermark */}
            <Sun className="absolute -right-6 -bottom-6 text-white/5 w-36 h-36 pointer-events-none animate-[spin_60s_linear_infinite]" />

            {/* Top row */}
            <div className="flex items-center gap-4 relative z-10">
              {/* Icon Container */}
              <div className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 shadow-inner">
                {weatherDetails.icon === "sun" && <Sun className="text-amber-400 drop-shadow-md animate-[pulse_3s_ease-in-out_infinite]" size={24} />}
                {weatherDetails.icon === "cloud-sun" && <CloudSun className="text-amber-200 drop-shadow-md" size={24} />}
                {weatherDetails.icon === "cloud" && <Cloud className="text-white/90 drop-shadow-md" size={24} />}
                {weatherDetails.icon === "fog" && <CloudFog className="text-slate-300 drop-shadow-md" size={24} />}
                {weatherDetails.icon === "rain" && <CloudRain className="text-sky-300 drop-shadow-md" size={24} />}
                {weatherDetails.icon === "snow" && <CloudSnow className="text-slate-100 drop-shadow-md" size={24} />}
                {weatherDetails.icon === "storm" && <CloudLightning className="text-yellow-400 drop-shadow-md animate-bounce" size={24} />}
              </div>

              {/* Title & Condition */}
              <div>
                <span className="text-[10px] tracking-widest font-extrabold text-white/60 block uppercase leading-none mb-1">
                  {tWeather.title}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold leading-none tracking-tight">
                    {weather.temp}°C
                  </span>
                  <span className="text-[10px] font-semibold bg-white/10 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10 text-white/90">
                    {weatherDetails.text}
                  </span>
                </div>
              </div>
            </div>

            {/* Separator line */}
            <div className="h-[1px] bg-white/10 w-full relative z-10 my-1"></div>

            {/* Bottom row (Humidity & Wind) */}
            <div className="flex justify-between items-center relative z-10 text-xs font-semibold px-1">
              {/* Humidity */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                  <Droplets className="text-white/70" size={16} />
                </div>
                <div>
                  <span className="text-[9px] text-white/50 block uppercase leading-none mb-0.5">{tWeather.humidity}</span>
                  <span className="text-sm font-bold text-white">{weather.humidity}%</span>
                </div>
              </div>

              {/* Wind Speed */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                  <Wind className="text-white/70 animate-[pulse_2s_ease-in-out_infinite]" size={16} />
                </div>
                <div>
                  <span className="text-[9px] text-white/50 block uppercase leading-none mb-0.5">{tWeather.windSpeed}</span>
                  <span className="text-sm font-bold text-white">
                    {weather.windSpeed} {tWeather.kmh}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}