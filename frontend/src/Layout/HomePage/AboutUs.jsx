import { Link } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";

const content = {
  mr: {
    desc: "सातारा जिल्ह्यातील कोरेगाव तालुक्यातील धामणेर गाव हे आदर्श गावाचे उत्तम उदाहरण आहे. कृष्णा नदीच्या काठावर वसलेले हे गाव नैसर्गिक सौंदर्य, समृद्ध शेती आणि सामाजिक एकोप्यामुळे विशेष ओळख निर्माण करत आहे. गावातील ग्रामस्थांचा सहभाग, लोकसहकार्य आणि विकासाची दृष्टी यामुळे धामणेरने प्रगतीचा आदर्श मार्ग स्वीकारला आहे.",
    btn: "अधिक जाणून घ्या",
  },
  en: {
    desc: "Dhamner village in Koregaon taluka of Satara district is an excellent example of a model village. Situated on the banks of the Krishna river, this village is making a special mark due to its natural beauty, rich agriculture and social unity. Due to the participation of villagers, public cooperation and a vision for development, Dhamner has adopted an ideal path of progress.",
    btn: "Learn More",
  },
};

export default function AboutUs() {
  const { lang } = useLang();
  const c = content[lang];
  return (
    <>
      <section className="bg-gray-100 py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-md aspect-video rounded-3xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/DSRRktI0REo"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-green-700 text-base md:text-lg leading-relaxed">{c.desc}</p>
            <Link to="/about">
              <button className="bg-green-700 text-white px-8 py-4 rounded-full text-lg hover:bg-green-800 transition">
                {c.btn}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
