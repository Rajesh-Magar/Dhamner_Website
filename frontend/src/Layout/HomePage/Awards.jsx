import { useState } from "react";
import { Trophy, Search } from "lucide-react";

export default function Awards() {
  const [search, setSearch] = useState("");

  const awards = [
    { year: "2002-03", text: "संत गाडगेबाबा ग्राम स्वच्छता अभियान - जिल्हा स्तरीय प्रथम पुरस्कार" },
    { year: "2003-04", text: "संत गाडगेबाबा ग्राम स्वच्छता अभियान - जिल्हा स्तरीय प्रथम पुरस्कार" },
    { year: "2004-05", text: "संत गाडगेबाबा ग्राम स्वच्छता अभियान - जिल्हा स्तरीय प्रथम पुरस्कार" },
    { year: "2004-05", text: "राष्ट्रसंत तुकडोजी महाराज स्वच्छ ग्राम स्पर्धा - विभाग स्तरावर द्वितीय पुरस्कार" },
    { year: "2004-05", text: "संत गाडगेबाबा ग्राम स्वच्छता अभियान - राज्य स्तरीय प्रथम पुरस्कार" },
    { year: "2005", text: "राष्ट्रपती डॉ. ए.पी.जे. अब्दुल कलाम यांच्या हस्ते निर्मल ग्राम पुरस्कार" },
    { year: "2007-08", text: "पंचायत राज समिती गाव भेट विशेष प्रशस्तीपत्र" },
    { year: "2007", text: "जिल्हा स्तरीय अनुसूचित निर्मूलन अभियान प्रथम पुरस्कार" },
    { year: "2004-05", text: "यशवंत पंचायत राज अभियान - विभाग स्तर प्रथम पुरस्कार" },
    { year: "2003-04", text: "वसंत राव नाईक पाणी व्यवस्थापन योजना - प्रथम पुरस्कार" },
    { year: "2006-07", text: "शाहू, फुले, आंबेडकर वस्ती सुधार अभियान - जिल्हा स्तरीय द्वितीय पुरस्कार" },
    { year: "2006-07", text: "राज्य स्तरीय प्रथम क्रमांकाचा 'वनश्री' पुरस्कार" },
    { year: "2016-17", text: "तालुका स्तरीय स्मार्ट ग्राम - प्रथम पुरस्कार" },
    { year: "2016-17", text: "जिल्हा स्मार्ट ग्राम - प्रथम पुरस्कार" },
    { year: "2016-17", text: "डॉ. बाबासाहेब आंबेडकर वस्ती - जिल्हा प्रथम पुरस्कार" },
    { year: "2017-18", text: "संत गाडगेबाबा ग्रामस्वच्छता अभियान - जिल्हा स्तरीय तृतीय क्रमांक" },
    { year: "2018-19", text: "तालुका स्मार्ट ग्राम - प्रथम पुरस्कार" },
    { year: "2018-19", text: "जिल्हा स्मार्ट ग्राम - प्रथम पुरस्कार" },
    { year: "2023", text: "'ग्रीन व्हिलेज' प्रथम पुरस्कार भारत फोर्ज लि. पुणे" },
  ];

  const filteredAwards = awards.filter((award) =>
    award.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-16 px-4 md:px-10 bg-gradient-to-br from-green-50/30 via-white to-green-50/20">

      {/* HEADING */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex justify-center items-center gap-3 font-devanagari">
          <Trophy className="text-amber-500 w-9 h-9" />
          प्राप्त पुरस्कार
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
          एकूण पुरस्कार: <span className="font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">{filteredAwards.length}</span>
        </p>
        <div className="relative">
          <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="पुरस्कार शोधा..."
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
              {award.text}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}