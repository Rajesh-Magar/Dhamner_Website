import { useState } from "react";
import { Trophy, Search } from "lucide-react";
import { useLang } from "../../context/LanguageContext";

export default function Awards() {
  const { lang } = useLang();
  const [search, setSearch] = useState("");

  const content = {
    mr: {
      title: "प्राप्त पुरस्कार",
      totalCount: "एकूण पुरस्कार:",
      searchPlaceholder: "पुरस्कार शोधा...",
    },
    en: {
      title: "Awards Received",
      totalCount: "Total Awards:",
      searchPlaceholder: "Search awards...",
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
    { year: "2017-18", mr: "संत गाडगेबाबा ग्रामस्वच्छता अभियान - जिल्हा स्तरीय तृतीय क्रमांक", en: "Sant Gadgebaba Gram Swachata Abhiyan - District Level Third Prize" },
    { year: "2018-19", mr: "तालुका स्मार्ट ग्राम - प्रथम पुरस्कार", en: "Taluka Smart Village - First Prize" },
    { year: "2018-19", mr: "जिल्हा स्मार्ट ग्राम - प्रथम पुरस्कार", en: "District Smart Village - First Prize" },
    { year: "2023", mr: "'ग्रीन व्हिलेज' प्रथम पुरस्कार भारत फोर्ज लि. पुणे", en: "'Green Village' First Prize Bharat Forge Ltd. Pune" },
  ];

  const filteredAwards = awards.filter((award) => {
    const textVal = award[lang] || award.mr || "";
    return textVal.toLowerCase().includes(search.toLowerCase());
  });

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

      {/* TOTAL COUNT & SEARCH */}
      <div className="max-w-md mx-auto mb-10 text-center">
        <p className="text-gray-600 mb-4 text-sm">
          {t.totalCount} <span className="font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">{filteredAwards.length}</span>
        </p>
        <div className="relative">
          <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm bg-white text-gray-900 font-devanagari transition-all duration-300 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* AWARDS GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {filteredAwards.map((award, index) => (
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