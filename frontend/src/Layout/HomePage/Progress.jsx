import { HeartHandshake, Dumbbell, Trophy, Leaf, Building2, Library } from "lucide-react";
import { useLang } from "../../context/LanguageContext";

const content = {
  mr: {
    heading: "लोकसहभागातून समृद्धीकडे",
    sub: "धामणेर - एक छोटंसं, तरीही स्वप्नांनी भारलेलं गाव. कधी काळी या गावाने पाण्यासाठी वनवण केली, अंधारात रात्र काढली, धुळकट रस्त्यांवर पायवाटा शोधल्या आणि मुलांना मोडकळलेल्या शाळांमध्ये शिक्षणाचं भविष्य शोधताना पाहिलं. पण हीच धामणेर आज \"कात टाकतेय.\"",
    facilities: [
      { icon: Trophy, title: "हिराजी अप्पाजी धामणेकर क्रीडांगण", desc: "सार्वजनिक कार्यक्रमांचे स्टेज व खेळांचे मैदान" },
      { icon: Library, title: "जागृती वाचनालय धामणेर", desc: "कादंबरी व मासिके, सर्व वर्तमानपत्रे" },
      { icon: HeartHandshake, title: "माणुसकीची भिंत", desc: "गरीब गरजूंना कपडे व इतर वापरलेल्या गोष्टी मोफत मिळण्याची सुविधा केंद्र" },
      { icon: Dumbbell, title: "व्यायाम शाळा धामणेर", desc: "व्यायामाचे सर्व साहित्य आहे" },
      { icon: Building2, title: "रमनलाल वाडीलाल शाह बालउद्यान", desc: "घसरगुंडी, झोपाळा" },
      { icon: Leaf, title: "मारुती नाना-नानी पार्क धामणेर", desc: "ज्येष्ठ नागरिक आणि चिमुकल्यांसाठी गावामध्ये विकसित केलेले हे नाना-नानी पार्क म्हणजे विरंगुळ्याचे एक सुंदर ठिकाण आहे." },
    ],
  },
  en: {
    heading: "Towards Prosperity Through Public Participation",
    sub: "Dhamner — a small village, yet filled with dreams. Once this village wandered for water, spent nights in darkness, searched for paths on dusty roads, and watched children look for the future of education in crumbling schools. But this very Dhamner is now \"reinventing itself.\"",
    facilities: [
      { icon: Trophy, title: "Hiraji Appaji Dhamnekar Sports Ground", desc: "Stage for public events and playground for sports" },
      { icon: Library, title: "Jagruti Reading Room Dhamner", desc: "Novels, magazines and all newspapers" },
      { icon: HeartHandshake, title: "Wall of Humanity (Manuski Chi Bhint)", desc: "A facility center to provide free clothes and other used items to the poor and needy" },
      { icon: Dumbbell, title: "Vyayam Shala Dhamner", desc: "All exercise equipment available" },
      { icon: Building2, title: "Ramanlal Vadilal Shah Children's Garden", desc: "Slides, swings for children" },
      { icon: Leaf, title: "Maruti Nana-Nani Park Dhamner", desc: "This Nana-Nani Park developed in the village for senior citizens and young children is a beautiful recreational place." },
    ],
  },
};

export default function Progress() {
  const { lang } = useLang();
  const c = content[lang];
  return (
    <div className="bg-gray-100 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 Heading Section */}
        <div className="text-center mb-14">
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-devanagari">
            {c.heading}
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-16 h-[2px] bg-gradient-to-r from-transparent to-green-700"></span>
            <span className="w-3 h-3 bg-amber-600 rotate-45"></span>
            <span className="w-16 h-[2px] bg-gradient-to-l from-transparent to-green-700"></span>
          </div>

          {/* Paragraph */}
          <p className="text-gray-600 max-w-5xl mx-auto leading-relaxed text-sm md:text-base">
            {c.sub}
          </p>

        </div>

        {/* 🔥 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {c.facilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center overflow-hidden group transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                {/* Top border accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                {/* Subtle gradient bg hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-green-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10">
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-amber-50 group-hover:bg-green-50 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-amber-600 group-hover:text-green-700 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-devanagari">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
