import { useLang } from "../../context/LanguageContext";
import { Eye, Target, Star, Map, Users, HeartPulse, FileCheck, Landmark, MessageSquare, BookOpen, TreePine, PhoneCall, Image } from "lucide-react";
import { Link } from "react-router-dom";

const content = {
  mr: {
    title: "ग्रामपंचायतीविषयी",
    historyTitle: "गावाचा इतिहास",
    historyP1: "धामणेर सातारा जिल्ह्यातील कोरेगाव तालुक्यातील एक गांव, कृष्णामाईच्या काठावर वसलेलं. निसर्गाचा वरदहस्त लाभलेलं. काळ्याशार शेतसरीनं वेढलेलं. त्याचबरोबर एक संपन्न असा आध्यात्मिक वारसा असलेलं. कधीकाळी इथं वैदिकांचं पुण्यक्षेत्र होतं, ज्याला धर्मपुरी या नावानं ओळखलं जात असे. तसेच गावाच्या उत्तरेस जवळच असलेल्या निगडी गांवचे रंगनाथ स्वामी यांनी ज्ञानपीठ चालवलेलं होतं. त्या ठिकाणी श्रावणात मोठी यात्रा भरत असे.",
    historyP2: "धामणेरच्या जवळच कृष्णामाईच्या डोहात राष्ट्रसंत श्री समर्थ रामदास स्वामींना आंग्लाई देवी व प्रभू रामचंद्र यांच्या मूर्ती सापडल्या होत्या. याच मूर्तींची प्रतिष्ठापना स्वामींनी अनुक्रमे सज्जनगड व चाफळ या क्षेत्री विधिवत केली, असा इतिहास आहे. म्हणजे साक्षात समर्थांचा पावन पदस्पर्श इथल्या मातीला झालेला होता.",
    historyP3: "आधुनिक काळातील महान समाजसुधारक संत, संतश्रेष्ठ श्री. गाडगेमहाराज यांनी १९२३ साली सुमारे दोन वर्षे इथं वास्तव्य केलं होतं. धामणेर",
    vissionTitle: "दृष्टीकोन",
    vissionDesc: "स्वच्छता, आधुनिक तंत्रज्ञान आणि लोकसहभागातून धामणेर गावाला महाराष्ट्रातील एक अग्रगण्य आणि सर्वार्थाने स्वयंपूर्ण 'आदर्श डिजिटल ग्राम' बनवणे.",
    missionTitle: "ध्येय",
    missionDesc: "पर्यावरणपूरक उपक्रम, उत्तम शिक्षण, अद्ययावत आरोग्य सुविधा आणि कृषी विकासावर भर देऊन ग्रामस्थांचे जीवनमान उंचावणे आणि शाश्वत विकास साधणे.",
    valuesTitle: "मूलभूत मूल्ये",
    valuesDesc: "ग्रामस्थांचा एकोपा, पारदर्शकता, निसर्ग संवर्धन, सामाजिक बांधिलकी आणि सर्वसमावेशक विकास.",
    officersSubtitle: "ग्रामपंचायत संरचना (सदस्य व पदाधिकारी)",
    members: [
      { name: "श्री.चंद्रकांत शंकर व्होवाळे", role: "सरपंच/प्रशासक", img: "/members/Sarpanch chandrakant howale.jpg.jpeg" },
      { name: "श्री.प्रवीण वामन क्षीरसागर", role: "उपसरपंच", img: "/members/upsarpanch pravin kshirsagar.jpg.jpeg" },
      { name: "श्री.प्रशांत विठ्ठल फडतरे", role: "ग्रामसेवक अधिकारी", img: "/members/WhatsApp Image 2026-03-17 at 6.13.49 PM.jpeg" },
      { name: "सौ. शैलजा गजानना क्षीरसागर", role: "ग्राप सदस्य", img: "/members/shailaja.jpg.jpeg" },
      { name: "सौ.शितल अजित निंबाळकर", role: "ग्राप सदस्य", img: "/members/Shital Ajit Nimbalkar.jpg.jpeg" },
      { name: "सौ.भारती मुगट माने", role: "ग्राप सदस्य", img: "/members/bharati M Mane.jpg.jpeg" },
      { name: "श्री.निलेश विश्वास क्षीरसागर", role: "ग्राप सदस्य", img: "/members/nilesh vilas kshirsagar.jpg.jpeg" },
      { name: "सौ.मनीषा दत्तात्रेय वळकुंदे", role: "ग्राप सदस्य", img: "/members/manisha.jpg.jpeg" },
      { name: "श्री.रविंद्र रामसिंग धामणेरकर", role: "ग्राप सदस्य", img: "/members/Ravindra Dhamnerkar.jpg.jpeg" },
      { name: "सौ.कार्तिकी संतोष क्षीरसागर", role: "ग्राप सदस्य", img: "/members/kartiki.jpg.jpeg" },
    ],
    rolesTitle: "भूमिका व जबाबदाऱ्या",
    rolesDesc: "ग्रामपंचायतीचा विकास आणि पारदर्शकता टिकवून ठेवण्यासाठी सदस्यांच्या प्रमुख जबाबदाऱ्या.",
    roles: [
      { title: "विकासाचे नियोजन", desc: "रस्ते, पाणी, स्वच्छता आणि पायाभूत सुविधांचा आराखडा तयार करून गावाचा सर्वांगीण विकास साधणे.", icon: "Map" },
      { title: "ग्रामसभा सहभाग व निर्णय", desc: "ग्रामस्थांच्या समस्या जाणून घेणे आणि बहुमताने लोकहिताचे निर्णय अमलात आणणे.", icon: "Users" },
      { title: "स्वच्छता व सार्वजनिक आरोग्य", desc: "गावातील परिसर स्वच्छ ठेवणे, साथीच्या रोगांवर नियंत्रण मिळवणे आणि वैद्यकीय सुविधा पोहोचवणे.", icon: "HeartPulse" },
      { title: "शासकीय योजनांची प्रभावी अंमलबजावणी", desc: "विविध शासकीय योजनांचा लाभ खऱ्या आणि पात्र लाभार्थ्यांपर्यंत पोहोचवणे.", icon: "FileCheck" },
      { title: "पारदर्शक आर्थिक व्यवस्थापन", desc: "ग्रामपंचायतीच्या निधीचा आणि अनुदानाचा योग्य वापर करून विकासकामांची माहिती जनतेला देणे.", icon: "Landmark" },
      { title: "तक्रार निवारण व सामाजिक सलोखा", desc: "ग्रामस्थांच्या अडीअडचणी सोडवणे आणि गावातील एकोपा टिकवून ठेवण्यासाठी मध्यस्थी करणे.", icon: "MessageSquare" },
      { title: "शिक्षण व सामाजिक सक्षमीकरण", desc: "शाळा, अंगणवाड्यांचा दर्जा सुधारणे आणि महिला बचत गट व युवक मंडळांना प्रोत्साहन देणे.", icon: "BookOpen" },
      { title: "पर्यावरण संवर्धन व शाश्वत विकास", desc: "वृक्षारोपण, पाणी संवर्धन मोहीम राबवणे आणि प्लास्टिकमुक्तीसाठी जनजागृती करणे.", icon: "TreePine" },
    ],
    contactsTitle: "मुख्य संपर्क क्रमांक / आपत्कालीन क्रमांक",
    contactsCol1: "सेवा / पद",
    contactsCol2: "संपर्क क्रमांक",
    galleryBtn: "फोटो गॅलरी",
    yashogathaBtn: "धामणेर यशोगाथा",
    contacts: [
      { service: "ग्रामसेवक अधिकारी", number: "+91 98502 37563" },
      { service: "सरपंच/प्रशासक", number: "+91 9850032987" },
      { service: "उपसरपंच", number: "+91 99752 40321" },
      { service: "आपत्कालीन सेवा", number: "108" },
      { service: "आरोग्य सल्ला", number: "104" },
      { service: "जननी सेवा", number: "102" },
      { service: "कोविड मार्गदर्शन", number: "1075" },
      { service: "व्यसनमुक्ती", number: "1800112356" },
      { service: "गर्भधारणा पूर्व व प्रसवपूर्व निदान तंत्र (PCPNDT)", number: "18002334475" },
      { service: "क्षयरोग विषयक मार्गदर्शन", number: "1800116666" },
      { service: "कुष्ठरोग विषयक मार्गदर्शन", number: "022-24114000" },
      { service: "महिला व बाल विकास विषयक सेवा", number: "8080809063" }
    ],
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
    historyTitle: "History of the Village",
    historyP1: "Dhamner is a village in Koregaon taluka of Satara district, situated on the banks of Krishnamai. Blessed by nature and surrounded by lush green fields, it has a rich spiritual heritage. Once a holy place for Vedic scholars, it was known as Dharmapuri. Nearby to the north, Ranganath Swami of Nigadi village ran a Jnanpeeth, where a large fair was held in the month of Shravan.",
    historyP2: "Near Dhamner, in the deep waters of Krishnamai, the national saint Shri Samarth Ramdas Swami found the idols of Goddess Anglai and Lord Ramchandra. History has it that he formally installed these idols at Sajjangad and Chaphal respectively. This means the soil here has been touched by the holy feet of Samarth Ramdas Swami himself.",
    historyP3: "The great modern social reformer saint, Santshreshtha Shri. Gadge Maharaj, resided here for about two years in 1923. Dhamner",
    vissionTitle: "Vision",
    vissionDesc: "To make Dhamner a leading, fully self-reliant 'Ideal Digital Village' in Maharashtra through cleanliness, modern technology, and public participation.",
    missionTitle: "Mission",
    missionDesc: "To elevate the standard of living of the villagers and achieve sustainable development by focusing on eco-friendly initiatives, excellent education, modern healthcare, and agricultural growth.",
    valuesTitle: "Core Values",
    valuesDesc: "Unity among villagers, transparency, nature conservation, social commitment, and inclusive development.",
    officersSubtitle: "Gram Panchayat Members & Officials",
    members: [
      { name: "Shri. Chandrakant Shankar Vhovale", role: "Sarpanch/Administrator", img: "/members/Sarpanch chandrakant howale.jpg.jpeg" },
      { name: "Shri. Pravin Vaman Kshirsagar", role: "Upsarpanch", img: "/members/upsarpanch pravin kshirsagar.jpg.jpeg" },
      { name: "Shri. Prashant Vitthal Phadtare", role: "Gram Sevak Officer", img: "/members/WhatsApp Image 2026-03-17 at 6.13.49 PM.jpeg" },
      { name: "Sau. Shailaja Gajanan Kshirsagar", role: "GP Member", img: "/members/shailaja.jpg.jpeg" },
      { name: "Sau. Shital Ajit Nimbalkar", role: "GP Member", img: "/members/Shital Ajit Nimbalkar.jpg.jpeg" },
      { name: "Sau. Bharati Mugat Mane", role: "GP Member", img: "/members/bharati M Mane.jpg.jpeg" },
      { name: "Shri. Nilesh Vishwas Kshirsagar", role: "GP Member", img: "/members/nilesh vilas kshirsagar.jpg.jpeg" },
      { name: "Sau. Manisha Dattatreya Valkunde", role: "GP Member", img: "/members/manisha.jpg.jpeg" },
      { name: "Shri. Ravindra Ramsingh Dhamnerkar", role: "GP Member", img: "/members/Ravindra Dhamnerkar.jpg.jpeg" },
      { name: "Sau. Kartiki Santosh Kshirsagar", role: "GP Member", img: "/members/kartiki.jpg.jpeg" },
    ],
    rolesTitle: "Roles & Responsibilities",
    rolesDesc: "Key responsibilities of the members to maintain the development and transparency of the Gram Panchayat.",
    roles: [
      { title: "Development Planning", desc: "Creating blueprints for roads, water supply, sanitation, and infrastructure to ensure holistic village development.", icon: "Map" },
      { title: "Gram Sabha Participation", desc: "Listening to villagers' concerns and implementing decisions made in the public interest.", icon: "Users" },
      { title: "Health & Sanitation", desc: "Maintaining cleanliness in the village, preventing epidemics, and ensuring access to healthcare facilities.", icon: "HeartPulse" },
      { title: "Effective Scheme Implementation", desc: "Delivering the benefits of government schemes to the truly eligible beneficiaries.", icon: "FileCheck" },
      { title: "Transparent Financial Management", desc: "Utilizing Gram Panchayat funds responsibly and keeping the public informed about expenditures.", icon: "Landmark" },
      { title: "Grievance Redressal", desc: "Addressing the difficulties of villagers and mediating to maintain harmony and social unity.", icon: "MessageSquare" },
      { title: "Education & Social Empowerment", desc: "Improving schools and Anganwadis while encouraging women's self-help groups and youth clubs.", icon: "BookOpen" },
      { title: "Environmental Conservation", desc: "Promoting tree plantation, water conservation initiatives, and raising awareness for a plastic-free environment.", icon: "TreePine" },
    ],
    contactsTitle: "Main Contact Numbers / Emergency Numbers",
    contactsCol1: "Service / Designation",
    contactsCol2: "Contact Number",
    galleryBtn: "Photo Gallery",
    yashogathaBtn: "Dhamner Success Story",
    contacts: [
      { service: "Gram Sevak Officer", number: "+91 98502 37563" },
      { service: "Sarpanch/Administrator", number: "+91 9850032987" },
      { service: "Upsarpanch", number: "+91 99752 40321" },
      { service: "Emergency Medical Services", number: "108" },
      { service: "Health Advisory Helpline", number: "104" },
      { service: "Janani Referral Services", number: "102" },
      { service: "National COVID-19 Helpline", number: "1075" },
      { service: "De-addiction Helpline", number: "1800112356" },
      { service: "PCPNDT Helpline (Pre-Natal Diagnostics)", number: "18002334475" },
      { service: "Tuberculosis Information Helpline", number: "1800116666" },
      { service: "Leprosy Information & Guidance", number: "022-24114000" },
      { service: "Women & Child Development Services Helpline", number: "8080809063" }
    ],
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
        {/* Village History Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 pb-10 border-b border-gray-100">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-6 relative pb-2 inline-block">
              {c.historyTitle}
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 rounded-full"></span>
            </h2>
            <div className="text-gray-700 space-y-4 text-sm sm:text-base md:text-lg text-justify leading-relaxed">
              <p>{c.historyP1}</p>
              <p>{c.historyP2}</p>
              <p>{c.historyP3}</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end px-4">
            <div className="relative group p-4 drop-shadow-2xl">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-orange-400 via-green-500 to-green-600 blur-xl opacity-30 group-hover:opacity-60 transition duration-700"
                style={{ 
                  WebkitMaskImage: `radial-gradient(ellipse at 50% 50%, black 40%, transparent 55%), radial-gradient(circle at 20% 20%, black 15%, transparent 25%), radial-gradient(circle at 80% 20%, black 18%, transparent 28%), radial-gradient(circle at 85% 80%, black 15%, transparent 25%), radial-gradient(circle at 20% 80%, black 16%, transparent 26%), radial-gradient(circle at 10% 50%, black 12%, transparent 20%), radial-gradient(circle at 90% 50%, black 14%, transparent 22%), radial-gradient(circle at 50% 10%, black 12%, transparent 20%), radial-gradient(circle at 50% 90%, black 14%, transparent 22%)`,
                  maskImage: `radial-gradient(ellipse at 50% 50%, black 40%, transparent 55%), radial-gradient(circle at 20% 20%, black 15%, transparent 25%), radial-gradient(circle at 80% 20%, black 18%, transparent 28%), radial-gradient(circle at 85% 80%, black 15%, transparent 25%), radial-gradient(circle at 20% 80%, black 16%, transparent 26%), radial-gradient(circle at 10% 50%, black 12%, transparent 20%), radial-gradient(circle at 90% 50%, black 14%, transparent 22%), radial-gradient(circle at 50% 10%, black 12%, transparent 20%), radial-gradient(circle at 50% 90%, black 14%, transparent 22%)`
                }}
              ></div>
              <img 
                src="/Swami samarth maharaj Final.webp" 
                alt={c.historyTitle} 
                className="relative w-full max-w-[380px] lg:max-w-[500px] object-cover transition-transform duration-700 hover:scale-[1.03]" 
                style={{ 
                  WebkitMaskImage: `radial-gradient(ellipse at 50% 50%, black 40%, transparent 52%), radial-gradient(circle at 20% 20%, black 15%, transparent 22%), radial-gradient(circle at 80% 20%, black 18%, transparent 25%), radial-gradient(circle at 85% 80%, black 15%, transparent 22%), radial-gradient(circle at 20% 80%, black 16%, transparent 23%), radial-gradient(circle at 10% 50%, black 12%, transparent 18%), radial-gradient(circle at 90% 50%, black 14%, transparent 20%), radial-gradient(circle at 50% 10%, black 12%, transparent 18%), radial-gradient(circle at 50% 90%, black 14%, transparent 20%), radial-gradient(circle at 35% 5%, black 8%, transparent 14%), radial-gradient(circle at 65% 95%, black 10%, transparent 16%)`,
                  maskImage: `radial-gradient(ellipse at 50% 50%, black 40%, transparent 52%), radial-gradient(circle at 20% 20%, black 15%, transparent 22%), radial-gradient(circle at 80% 20%, black 18%, transparent 25%), radial-gradient(circle at 85% 80%, black 15%, transparent 22%), radial-gradient(circle at 20% 80%, black 16%, transparent 23%), radial-gradient(circle at 10% 50%, black 12%, transparent 18%), radial-gradient(circle at 90% 50%, black 14%, transparent 20%), radial-gradient(circle at 50% 10%, black 12%, transparent 18%), radial-gradient(circle at 50% 90%, black 14%, transparent 20%), radial-gradient(circle at 35% 5%, black 8%, transparent 14%), radial-gradient(circle at 65% 95%, black 10%, transparent 16%)`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat"
                }}
              />
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20">
          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-orange-400 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Eye className="text-orange-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{c.vissionTitle}</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{c.vissionDesc}</p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Target className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{c.missionTitle}</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{c.missionDesc}</p>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Star className="text-blue-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{c.valuesTitle}</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{c.valuesDesc}</p>
          </div>
        </div>

        {/* Members Section */}
        <div className="mb-16 sm:mb-20 pb-10 border-b border-gray-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-8 sm:mb-12 text-center">{c.officersSubtitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {c.members.map((member, index) => (
              <div key={index} className="bg-white border border-gray-100 shadow-md rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-green-100 rounded-full blur-md opacity-60"></div>
                  <img src={member.img} alt={member.name} className="relative w-28 h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 mx-auto rounded-xl object-cover shadow-sm border-2 border-white" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-gray-800">{member.name}</h3>
                <p className="text-green-600 font-medium text-xs sm:text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Roles and Responsibilities Section */}
        <div className="mb-16 sm:mb-20 pb-10 border-b border-gray-100">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-4">{c.rolesTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">{c.rolesDesc}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {c.roles.map((role, index) => {
              const iconMap = {
                Map: <Map className="text-amber-500 w-6 h-6" />,
                Users: <Users className="text-blue-500 w-6 h-6" />,
                HeartPulse: <HeartPulse className="text-red-500 w-6 h-6" />,
                FileCheck: <FileCheck className="text-green-500 w-6 h-6" />,
                Landmark: <Landmark className="text-indigo-500 w-6 h-6" />,
                MessageSquare: <MessageSquare className="text-purple-500 w-6 h-6" />,
                BookOpen: <BookOpen className="text-teal-500 w-6 h-6" />,
                TreePine: <TreePine className="text-emerald-500 w-6 h-6" />
              };
              
              return (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition duration-300 group">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {iconMap[role.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{role.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{role.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contacts Section */}
        <div className="mb-16 sm:mb-20 pb-10 border-b border-gray-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-8 sm:mb-12 text-center">{c.contactsTitle}</h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gradient-to-r from-green-600 to-green-500 text-white">
                  <tr>
                    <th className="p-4 sm:p-5 font-semibold text-sm sm:text-base">{c.contactsCol1}</th>
                    <th className="p-4 sm:p-5 font-semibold text-sm sm:text-base text-right">{c.contactsCol2}</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm sm:text-base divide-y divide-gray-100">
                  {c.contacts.map((contact, index) => (
                    <tr key={index} className="hover:bg-green-50 transition-colors duration-200">
                      <td className="p-4 sm:p-5 font-medium flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                          <PhoneCall className="w-4 h-4 text-green-600" />
                        </div>
                        {contact.service}
                      </td>
                      <td className="p-4 sm:p-5 font-bold text-gray-900 text-right tracking-wide">{contact.number}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link 
            to="/gallery" 
            className="flex items-center gap-2 px-6 py-3 bg-white border border-green-600 text-green-700 font-bold rounded-full hover:bg-green-50 transition-colors shadow-sm w-full sm:w-auto justify-center"
          >
            <Image className="w-5 h-5" />
            {c.galleryBtn}
          </Link>
          <Link 
            to="/yashogatha" 
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors shadow-md w-full sm:w-auto justify-center"
          >
            <BookOpen className="w-5 h-5" />
            {c.yashogathaBtn}
          </Link>
        </div>
      </div>
    </div>
  );
}
