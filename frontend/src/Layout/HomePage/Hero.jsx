import { useLang } from "../../context/LanguageContext";

const content = {
  mr: {
    title: "यशवंत ग्रामपंचायत धामणेर",
    tagline: "ध्यास विकासाचा, वेग प्रगतीचा",
    desc: "धामणेर सातारा जिल्ह्यातील कोरेगाव तालुक्यातील एक गाव, कृष्णामाईच्या काठावर वसलेलं. निसर्गाचा वरदहस्त लाभलेलं. काळ्याशार शेतसरीनं वेढलेलं. त्याचबरोबर एक संपन्न असा आध्यात्मिक वारसा असलेलं. कधीकाळी इथं वैदिकांचं पुण्यक्षेत्र होतं, ज्याला धर्मपुरी या नावानं ओळखलं जात असे. तसेच गावाच्या उत्तरेस जवळच असलेल्या निगडी गांवाचे रंगनाथ स्वामी यांनी ज्ञानपीठ चालवलेलं होतं. त्या ठिकाणी श्रावणात मोठी यात्रा भरत असे. धामणेरच्या जवळच कृष्णामाईच्या डोहात राष्ट्रसंत श्री समर्थ रामदास स्वामींनी आंग्लाई देवी व प्रभू रामचंद्र यांच्या मूर्ती सापडल्या होत्या.",
    servicesBtn: "सुविधा पहा",
    aboutBtn: "आमच्याबद्दल वाचा",
    districtTag: "जिल्हा सातारा • कोरेगाव तालुका",
  },
  en: {
    title: "Yashwant Gram Panchayat Dhamner",
    tagline: "Pursuit of Development, Speed of Progress",
    desc: "Dhamner is a village in Koregaon taluka of Satara district, situated on the banks of the Krishna river. Blessed by nature, surrounded by dark fertile farmlands, and endowed with a rich spiritual heritage. This place was once a sacred site of the Vedics, known as Dharmapuri. The Jnanapeeth run by Ranganath Swami of the nearby village Nigadi was here. A great fair was held here during Shravan. Near Dhamner, in the pool of the Krishna river, Rashtrasnant Shri Samarth Ramdas Swami found the idols of Anglai Devi and Lord Ramchandra.",
    servicesBtn: "View Services",
    aboutBtn: "Read About Us",
    districtTag: "District Satara • Taluka Koregaon",
  },
};

export default function Hero() {
  const { lang } = useLang();
  const c = content[lang];
  return (
    <>
      <section className="relative w-full min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/village.jpg')" }}></div>
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-700/80 border border-green-500/30 text-xs md:text-sm font-bold tracking-wider uppercase mb-6 animate-pulse">
              {c.districtTag}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-md">
              {lang === "en" ? (
                <>Yashwant Gram Panchayat <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Dhamner</span></>
              ) : (
                <>यशवंत ग्रामपंचायत <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">धामणेर</span></>
              )}
            </h1>

            <h2 className="text-green-400 text-xl sm:text-2xl md:text-3xl mt-4 font-bold tracking-wide drop-shadow-sm">
              {c.tagline}
            </h2>

            <p className="mt-8 text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium drop-shadow-sm text-justify">
              {c.desc}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#services" 
                className="px-8 py-3.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-bold shadow-lg shadow-green-900/30 hover:shadow-green-900/50 hover:translate-y-[-2px] transition duration-200 text-sm md:text-base cursor-pointer"
              >
                {c.servicesBtn}
              </a>
              <a 
                href="#about" 
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white rounded-2xl font-bold backdrop-blur-sm hover:translate-y-[-2px] transition duration-200 text-sm md:text-base cursor-pointer"
              >
                {c.aboutBtn}
              </a>
            </div>
          </div>

          {/* Right Logo */}
          <div className="flex justify-center items-center z-10">
            <div className="relative group">
              {/* Glow backdrop effect */}
              <div className="absolute inset-0 bg-green-500/25 rounded-full blur-3xl group-hover:bg-green-500/35 transition duration-500"></div>
              <img
                src="/assets/Gemini_Generated_Image_7qc6v97qc6v97qc6-removebg-preview.png"
                alt="Gram Panchayat Logo"
                className="relative w-52 sm:w-64 md:w-80 lg:w-[420px] object-contain hover:scale-102 transition duration-500 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
