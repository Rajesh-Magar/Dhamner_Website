import { useLang } from "../../context/LanguageContext";

const content = {
  mr: {
    title: "ग्रामपंचायतीविषयी",
    heading: "महाराष्ट्राच्या नकाशावर ठळकपणे उभे राहणारे आदर्श गाव",
    intro: "धामणेर गावात स्वच्छता, सिमेंट रस्ते, पाणी व्यवस्थापन, शिक्षण आणि सामाजिक एकता यावर विशेष भर दिला जातो. ग्रामस्थांच्या एकजुटीमुळे विविध विकासकामे यशस्वीपणे राबवली जात आहेत. तसेच शेती हा मुख्य व्यवसाय असून कृष्णा नदीच्या पाण्यामुळे येथे शेतीला मोठा आधार मिळतो.",
    devTitle: "विकासाची नांदी: लोकसहभागातून क्रांती",
    devDesc: "धामणेर हे केवळ एक गाव नसून, एक प्रगत आणि आदर्श ग्रामसंस्कृतीचे प्रतीक बनत आहे. ग्रामस्थांचा एकोपा, पर्यावरणपूरक उपक्रम आणि विकासाची सततची धडपड यामुळे हे गाव इतर गावांसाठी प्रेरणादायी ठरत आहे.",
    completedWorks: "पूर्ण झालेली कामे",
    infraTitle: "पायाभूत सुविधा: विकासाचा भक्कम आधार",
    infra: [
      { strong: "पाणंद रस्ते:", text: "गावातील सर्व पाणंद रस्ते अतिक्रमणमुक्त करून खुले करण्यात आले." },
      { strong: "आधुनिक रस्ते:", text: "सिमेंट-काँक्रीट रस्ते आणि वृक्षारोपणामुळे गावाचा विकास वेगाने झाला." },
      { strong: "LED स्ट्रीट लाईट:", text: "गावातील सर्व रस्त्यांवर एलईडी दिवे बसवण्यात आले आहेत." },
      { strong: "पूर्ण गाव CCTV कॅमेरा:", text: "गावाची सुरक्षा वाढवण्यासाठी सर्वत्र CCTV कॅमेरे बसवण्यात आले आहेत, ज्यामुळे गुन्हेगारीवर नियंत्रण ठेवता येते." },
      { strong: "पूर्ण गाव ऑडिओ सिस्टम:", text: "सार्वजनिक सूचना व माहिती देण्यासाठी संपूर्ण गावात ऑडिओ सिस्टम बसवण्यात आली आहे." },
    ],
    waterTitle: "पाणी व जलसंधारण",
    water: [
      { strong: "वॉटर एटीएम:", text: "गावात स्वच्छ व शुद्ध पिण्याचे पाणी उपलब्ध करून देण्यासाठी वॉटर एटीएम बसवण्यात आले आहे." },
      { strong: "पिण्याचे पाणी:", text: "शुद्ध आणि सुरक्षित पिण्याच्या पाण्याची सुविधा उपलब्ध आहे." },
      { strong: "तलाव / विहिरी पुनरुज्जीवन:", text: "तलाव, नाले आणि विहिरींचे पुनरुज्जीवन करून पाणीसाठा वाढवण्यात आला आहे." },
      { strong: "जलसंधारण (वनराई, गॅबियन बंधारे):", text: "पाण्याचे संवर्धन करण्यासाठी वनराई व गॅबियन बंधारे बांधण्यात आले आहेत, ज्यामुळे भूजल पातळी वाढली आहे." },
    ],
    energyTitle: "ऊर्जा व पर्यावरण",
    energy: [
      { strong: "सोलर नेट मीटरिंग (शासकीय इमारती):", text: "सर्व शासकीय व निमशासकीय इमारतींवर सोलर नेट मीटरिंग प्रणाली बसवण्यात आली आहे." },
      { strong: "सोलर सुविधा (घरांवर):", text: "गावातील प्रत्येक घरावर सोलर नेट मीटरिंग सुविधा उपलब्ध करून देण्यात आली आहे." },
      { strong: "होम कंपोस्टिंग सिस्टम:", text: "कचरा व्यवस्थापनासाठी घरगुती कंपोस्टिंग प्रणाली राबवण्यात आली आहे." },
      { strong: "बायोगॅस सुविधा:", text: "स्वच्छता व ऊर्जा निर्मितीसाठी मानवी विष्ठेवर आधारित बायोगॅस प्रकल्प राबवण्यात आला आहे." },
    ],
    healthTitle: "आरोग्य व तंत्रज्ञान",
    healthItems: [
      { strong: "आरोग्य केंद्र:", text: "गावात आधुनिक आरोग्य सुविधा उपलब्ध आहेत." },
      { strong: "टेलीमेडिसीन सेंटर:", text: "आरोग्य सेवा अधिक सुलभ करण्यासाठी टेलीमेडिसीन सेंटर उपलब्ध आहे." },
      { strong: "ग्रामपंचायत अँब्युलन्स:", text: "आपत्कालीन परिस्थितीत त्वरित सेवा देण्यासाठी ग्रामपंचायतीकडे अँब्युलन्स उपलब्ध आहे." },
      { strong: "AI लॅब:", text: "विद्यार्थ्यांसाठी आधुनिक तंत्रज्ञानाची ओळख करून देण्यासाठी AI लॅब सुरू करण्यात आली आहे." },
    ],
    digitalTitle: "डिजिटल व स्मार्ट सुविधा",
    digital: [
      { strong: "WiFi Village:", text: "गावात मोफत WiFi सुविधा उपलब्ध करून देण्यात आली आहे." },
      { strong: "पूर्ण गाव ऑडिओ सिस्टम:", text: "सार्वजनिक सूचना व माहिती देण्यासाठी संपूर्ण गावात ऑडिओ सिस्टम बसवण्यात आली आहे." },
      { strong: "GIS प्रणाली:", text: "GIS आधारित डिजिटल मॅपिंग प्रणाली वापरून सर्व घरांची व सुविधांची माहिती व्यवस्थापित केली जाते." },
    ],
    educationTitle: "शिक्षण व विद्यार्थी सुविधा",
    educationItems: [
      { strong: "डिजिटल शाळा:", text: "विद्यार्थ्यांसाठी आधुनिक डिजिटल वर्ग उपलब्ध आहेत." },
      { strong: "अभ्यासिका:", text: "स्पर्धा परीक्षांसाठी विद्यार्थ्यांना वातानुकूलित अभ्यासिका उपलब्ध आहे." },
      { strong: "विद्यार्थ्यांसाठी फ्री सायकल सेवा:", text: "विद्यार्थ्यांच्या सोयीसाठी मोफत सायकल सेवा उपलब्ध आहे." },
      { strong: "AI लॅब:", text: "विद्यार्थ्यांसाठी आधुनिक तंत्रज्ञानाची ओळख करून देण्यासाठी AI लॅब सुरू करण्यात आली आहे." },
    ],
    agriTitle: "शेती व कृषी विकास",
    agri: [
      { strong: "माती परीक्षण:", text: "शेतकऱ्यांसाठी माती परीक्षण सुविधा उपलब्ध करून देण्यात आली आहे." },
      { strong: "शेतकरी उत्पादक संस्था (FPO):", text: "शेतकऱ्यांना एकत्र करून त्यांच्या उत्पादनाचे चांगले दर मिळवण्यासाठी FPO स्थापन करण्यात आले आहे." },
      { strong: "महिला व पुरुष FPO:", text: "महिला व पुरुषांसाठी स्वतंत्र उत्पादक गट तयार करून आर्थिक सक्षमीकरण साधले आहे." },
    ],
    employTitle: "रोजगार व उद्योग",
    employ: [
      { strong: "गारमेंट सेंटर:", text: "गावातील युवक-युवतींसाठी रोजगार निर्मितीच्या दृष्टीने गारमेंट सेंटर सुरू करण्यात आले आहे." },
      { strong: "लिज्जत पापड उद्योग:", text: "महिलांसाठी स्वावलंबन निर्माण करण्यासाठी लिज्जत पापड उद्योग सुरू करण्यात आला आहे." },
    ],
    sportsTitle: "क्रीडा व आरोग्य",
    sports: [
      { strong: "इंडोर जिम:", text: "नागरिकांच्या आरोग्यासाठी आधुनिक इंडोर जिम सुविधा उपलब्ध आहे." },
      { strong: "ओपन जिम:", text: "मोकळ्या जागेत व्यायामासाठी ओपन जिम बसवण्यात आली आहे." },
      { strong: "क्रीडासंकुल:", text: "गावात क्रीडा संकुल उभारण्यात आले आहे, ज्यामुळे युवकांना क्रीडा क्षेत्रात संधी मिळते." },
    ],
    ongoingWorks: "सुरू असलेली कामे",
    ongoing: [
      { strong: "वॉर्ड क्रमांक ३ मध्ये गटर बांधकाम काम सुरू" },
      { strong: "बेघर वसाहत मध्ये पाण्याची टाकी बांधणे काम सुरू" },
    ],
  },
  en: {
    title: "About Gram Panchayat",
    heading: "A Model Village Standing Prominently on the Map of Maharashtra",
    intro: "Dhamner village places special emphasis on cleanliness, cement roads, water management, education and social unity. Various development works are being successfully carried out due to the unity of the villagers. Agriculture is the main occupation and the Krishna river provides great support for farming here.",
    devTitle: "Dawn of Development: Revolution Through Public Participation",
    devDesc: "Dhamner is not just a village, but is becoming a symbol of a progressive and ideal village culture. The unity of the villagers, eco-friendly initiatives and the constant pursuit of development are making this village an inspiration for other villages.",
    completedWorks: "Completed Works",
    infraTitle: "Infrastructure: A Strong Foundation for Development",
    infra: [
      { strong: "Rural Roads:", text: "All rural roads in the village have been cleared of encroachments and opened." },
      { strong: "Modern Roads:", text: "The village has developed rapidly with cement-concrete roads and tree plantation." },
      { strong: "LED Street Lights:", text: "LED lights have been installed on all roads in the village." },
      { strong: "Village-wide CCTV:", text: "CCTV cameras have been installed throughout the village to enhance security and control crime." },
      { strong: "Village-wide Audio System:", text: "An audio system has been installed throughout the village for public announcements and information." },
    ],
    waterTitle: "Water & Water Conservation",
    water: [
      { strong: "Water ATM:", text: "A water ATM has been installed in the village to provide clean and pure drinking water to citizens." },
      { strong: "Drinking Water:", text: "Clean and safe drinking water facilities are available." },
      { strong: "Lake/Well Revival:", text: "Lakes, streams and wells have been revived to increase water storage." },
      { strong: "Water Conservation (Gabion Dams):", text: "Vanrai and gabion dams have been built to conserve water, increasing groundwater levels." },
    ],
    energyTitle: "Energy & Environment",
    energy: [
      { strong: "Solar Net Metering (Government Buildings):", text: "Solar net metering systems have been installed on all government and semi-government buildings." },
      { strong: "Solar Facility (On Houses):", text: "Solar net metering facility has been made available on every house in the village." },
      { strong: "Home Composting System:", text: "A home composting system has been implemented for waste management, producing organic fertilizer." },
      { strong: "Biogas Facility:", text: "A biogas project based on human waste has been implemented for sanitation and energy generation." },
    ],
    healthTitle: "Health & Technology",
    healthItems: [
      { strong: "Health Center:", text: "Modern health facilities are available in the village." },
      { strong: "Telemedicine Center:", text: "A telemedicine center is available to make health services more accessible." },
      { strong: "GP Ambulance:", text: "An ambulance is available at the Gram Panchayat for immediate service in emergencies." },
      { strong: "AI Lab:", text: "An AI lab has been started to introduce students to modern technology." },
    ],
    digitalTitle: "Digital & Smart Facilities",
    digital: [
      { strong: "WiFi Village:", text: "Free WiFi facility has been made available in the village, promoting digital services and education." },
      { strong: "Village-wide Audio System:", text: "An audio system has been installed throughout the village for public announcements." },
      { strong: "GIS System:", text: "GIS-based digital mapping system is used to manage information about all houses and facilities in our village." },
    ],
    educationTitle: "Education & Student Facilities",
    educationItems: [
      { strong: "Digital School:", text: "Modern digital classrooms are available for students." },
      { strong: "Study Room:", text: "An air-conditioned study room is available for students preparing for competitive exams." },
      { strong: "Free Bicycle Service for Students:", text: "A free bicycle service is available for students, making it easier to travel for education." },
      { strong: "AI Lab:", text: "An AI lab has been started to introduce students to modern technology." },
    ],
    agriTitle: "Agriculture & Agricultural Development",
    agri: [
      { strong: "Soil Testing:", text: "Soil testing facility has been made available for farmers, providing information on soil nutrients." },
      { strong: "Farmer Producer Organization (FPO):", text: "An FPO has been established to bring farmers together and get better prices for their produce." },
      { strong: "Women & Men FPO:", text: "Separate producer groups for women and men have been formed to achieve economic empowerment." },
    ],
    employTitle: "Employment & Industry",
    employ: [
      { strong: "Garment Center:", text: "A garment center has been started to create employment opportunities for the youth of the village." },
      { strong: "Lijjat Papad Industry:", text: "The Lijjat Papad industry has been started to create self-reliance for women." },
    ],
    sportsTitle: "Sports & Health",
    sports: [
      { strong: "Indoor Gym:", text: "A modern indoor gym facility is available for the health of citizens." },
      { strong: "Open Gym:", text: "An open gym has been installed in an open area for exercise." },
      { strong: "Sports Complex:", text: "A sports complex has been built in the village, giving youth opportunities in sports." },
    ],
    ongoingWorks: "Ongoing Works",
    ongoing: [
      { strong: "Gutter construction work in progress in Ward No. 3" },
      { strong: "Water tank construction work in progress in Beghar Vasahat" },
    ],
  },
};

function Section({ title, items }) {
  return (
    <>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10 md:mt-12 mb-3 sm:mb-4">{title}</h3>
      <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4 text-gray-700 leading-7 text-sm sm:text-base md:text-lg">
        {items.map((item, i) => (
          <li key={i}>
            {item.strong && <strong>{item.strong} </strong>}{item.text || ""}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function AboutVillage() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <div className="bg-green-700 w-full py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">{c.title}</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center">{c.heading}</h2>
        <p className="text-gray-700 leading-7 sm:leading-8 mb-8 sm:mb-10 text-sm sm:text-base md:text-lg text-justify">{c.intro}</p>

        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">{c.devTitle}</h3>
        <p className="text-gray-700 leading-7 sm:leading-8 mb-8 sm:mb-10 text-sm sm:text-base md:text-lg text-justify">{c.devDesc}</p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center">{c.completedWorks}</h2>

        <Section title={c.infraTitle} items={c.infra} />
        <Section title={c.waterTitle} items={c.water} />
        <Section title={c.energyTitle} items={c.energy} />
        <Section title={c.healthTitle} items={c.healthItems} />
        <Section title={c.digitalTitle} items={c.digital} />
        <Section title={c.educationTitle} items={c.educationItems} />
        <Section title={c.agriTitle} items={c.agri} />
        <Section title={c.employTitle} items={c.employ} />
        <Section title={c.sportsTitle} items={c.sports} />

        <br />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center">{c.ongoingWorks}</h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4 text-gray-700 leading-7 text-sm sm:text-base md:text-lg">
          {c.ongoing.map((item, i) => <li key={i}><strong>{item.strong}</strong></li>)}
        </ul>
      </div>
    </div>
  );
}
