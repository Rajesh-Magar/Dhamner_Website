import { Trophy, Image, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";

export default function Awards() {
  const { lang } = useLang();

  const content = {
    mr: {
      title: "प्राप्त पुरस्कार",
      totalCount: "एकूण पुरस्कार:",
      galleryBtn: "फोटो गॅलरी",
      yashogathaBtn: "धामणेर यशोगाथा"
    },
    en: {
      title: "Awards Received",
      totalCount: "Total Awards:",
      galleryBtn: "Photo Gallery",
      yashogathaBtn: "Dhamner Success Story"
    }
  };

  const t = content[lang] || content.mr;

  const awards = [
    { year: "2002-03", mr: "संत गाडगेबाबा ग्राम स्वच्छता अभियान - जिल्हा स्तरीय प्रथम पुरस्कार", en: "Sant Gadgebaba Gram Swachata Abhiyan - District Level First Prize" },
    { year: "2003-04", mr: "संत गाडगेबाबा ग्राम स्वच्छता अभियान - जिल्हा स्तरीय प्रथम पुरस्कार", en: "Sant Gadgebaba Gram Swachata Abhiyan - District Level First Prize" },
    { year: "2004-05", mr: "संत गाडगेबाबा ग्राम स्वच्छता अभियान - जिल्हा स्तरीय प्रथम पुरस्कार", en: "Sant Gadgebaba Gram Swachata Abhiyan - District Level First Prize" },
    { year: "2004-05", mr: "राष्ट्रसंत तुकडोजी महाराज स्वच्छ ग्राम स्पर्धा - विभाग स्तरावर द्वितीय पुरस्कार", en: "Rashtrasant Tukadoji Maharaj Clean Village Competition - Division Level Second Prize" },
    { year: "2004-05", mr: "संत गाडगेबाबा ग्राम स्वच्छता अभियान - राज्य स्तरीय प्रथम पुरस्कार", en: "Sant Gadgebaba Gram Swachata Abhiyan - State Level First Prize" },
    { year: "2005", mr: "राष्ट्रपती डॉ. ए.पी.जे. अब्दुल कलाम यांच्या हस्ते निर्मल ग्राम पुरस्कार", en: "Nirmal Gram Award by President Dr. A.P.J. Abdul Kalam" },
    { year: "2007-08", mr: "पंचायत राज समिती गाव भेट विशेष प्रशस्तीपत्र", en: "Panchayat Raj Committee Village Visit Special Certificate of Appreciation" },
    { year: "2007", mr: "जिल्हा स्तरीय अनुसूचित निर्मूलन अभियान प्रथम पुरस्कार", en: "District Level Scheduled Castes Eradication Campaign First Prize" },
    { year: "2004-05", mr: "यशवंत पंचायत राज अभियान - विभाग स्तर प्रथम पुरस्कार", en: "Yeshwant Panchayat Raj Abhiyan - Division Level First Prize" },
    { year: "2003-04", mr: "वसंत राव नाईक पाणी व्यवस्थापन योजना - प्रथम पुरस्कार", en: "Vasantrao Naik Water Management Scheme - First Prize" },
    { year: "2006-07", mr: "शाहू, फुले, आंबेडकर वस्ती सुधार अभियान - जिल्हा स्तरीय द्वितीय पुरस्कार", en: "Shahu, Phule, Ambedkar Settlement Improvement Campaign - District Level Second Prize" },
    { year: "2006-07", mr: "राज्य स्तरीय प्रथम क्रमांकाचा 'वनश्री' पुरस्कार", en: "State Level First Rank 'Vanashree' Award" },
    { year: "2016-17", mr: "तालुका स्तरीय स्मार्ट ग्राम - प्रथम पुरस्कार", en: "Taluka Level Smart Village - First Prize" },
    { year: "2016-17", mr: "जिल्हा स्मार्ट ग्राम - प्रथम पुरस्कार", en: "District Smart Village - First Prize" },
    { year: "2016-17", mr: "डॉ. बाबासाहेब आंबेडकर वस्ती - जिल्हा प्रथम पुरस्कार", en: "Dr. Babasaheb Ambedkar Basti - District First Prize" },
    { year: "2021-22", mr: "तालुका स्मार्ट ग्राम - प्रथम पुरस्कार", en: "Taluka Smart Village - First Prize" },
    { year: "2021-22", mr: "जिल्हा स्मार्ट ग्राम - प्रथम पुरस्कार", en: "District Smart Village - First Prize" },
    { year: "2023", mr: "ग्रीन व्हिलेज प्लॅटिनियम नामांकन आयसीबीसी हैदराबाद", en: "Green Village Platinum Nomination ICBC Hyderabad" },
    { year: "2025-26", mr: "संत गाडगेबाबा ग्रामस्वच्छता अभियान तालुकास्तरीय प्रथम क्रमांक", en: "Sant Gadgebaba Gram Swachata Abhiyan Taluka Level First Rank" },
    { year: "2025-26", mr: "मुख्यमंत्री समृद्ध पंचायत राज अभियान तालुकास्तरीय प्रथम क्रमांक", en: "Chief Minister Samruddha Panchayat Raj Abhiyan Taluka Level First Rank" },
  ];

  return (
    <div className="py-16 px-4 md:px-10 bg-gradient-to-br from-green-50/30 via-white to-green-50/20">

      {/* HEADING */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex justify-center items-center gap-3 font-devanagari">
          <Trophy className="text-amber-500 w-9 h-9" />
          {t.title}
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="w-16 h-[2px] bg-gradient-to-r from-transparent to-green-700"></span>
          <span className="w-3 h-3 bg-amber-600 rotate-45"></span>
          <span className="w-16 h-[2px] bg-gradient-to-l from-transparent to-green-700"></span>
        </div>
      </div>

      {/* TOTAL COUNT & QUICK LINKS */}
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <p className="text-gray-600 mb-6 text-sm">
          {t.totalCount} <span className="font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">{awards.length}</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/gallery" 
            className="flex items-center gap-2 px-6 py-3 bg-white border border-green-600 text-green-700 font-bold rounded-full hover:bg-green-50 transition-colors shadow-sm w-full sm:w-auto justify-center"
          >
            <Image className="w-5 h-5" />
            {t.galleryBtn}
          </Link>
          <Link 
            to="/yashogatha" 
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors shadow-md w-full sm:w-auto justify-center"
          >
            <BookOpen className="w-5 h-5" />
            {t.yashogathaBtn}
          </Link>
        </div>
      </div>

      {/* AWARDS GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {awards.map((award, index) => (
          <div
            key={index}
            className="group p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-green-600/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1.5"
          >
            {/* ICON & YEAR */}
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-lg bg-amber-50 group-hover:bg-amber-100 transition-colors duration-300">
                <Trophy className="text-amber-600 w-5 h-5 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
              </div>
              <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full group-hover:bg-green-100 transition-colors duration-300">{award.year}</span>
            </div>

            {/* TEXT */}
            <p className="text-gray-800 leading-relaxed font-devanagari group-hover:text-green-800 transition-colors duration-300 text-sm md:text-base font-semibold">
              {award[lang] || award.mr}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}