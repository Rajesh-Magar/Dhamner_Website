import { useLang } from "../../context/LanguageContext";

const localTexts = {
  mr: {
    heroTitle: <>जनसुविधेसाठी <br /> महत्वाच्या लिंक्स</>,
    colSrNo: "अ.क्र.",
    colDescription: "तपशील",
    colLink: "लिंक",
    links: [
      { id: 1, name: "संगणकीकृत ग्रंथालय करिता ग्रामपंचायत वेबसाईट", url: "https://www.esahity.com/" },
      { id: 2, name: "रेल्वे तिकीट बुकिंग (IRCTC)", url: "https://www.irctc.co.in/nget/train-search" },
      { id: 3, name: "पासपोर्ट अर्ज सेवा", url: "https://passportindia.gov.in" },
      { id: 4, name: "ड्रायव्हिंग लायसन्स, वाहन नोंदणी (RC), इ.", url: "https://parivahan.gov.in" },
      { id: 5, name: "मतदार ओळखपत्र नोंदणी/दुरुस्ती", url: "https://voterportal.eci.gov.in" },
      { id: 6, name: "शासकीय कागदपत्रांचे डिजिटल स्टोरेज (डिजीलॉकर)", url: "https://digilocker.gov.in" },
      { id: 7, name: "कॉमन सर्व्हिस सेंटर (CSC) पोर्टल", url: "https://sewa.csc.gov.in" },
      { id: 8, name: "पीएम-किसान लाभार्थी यादी आणि स्थिती", url: "https://pmkisan.gov.in" },
      { id: 9, name: "थेट लाभ हस्तांतरण (DBT) पेमेंट ट्रॅकिंग (PFMS)", url: "https://pfms.nic.in" },
      { id: 10, name: "UPI, AePS आणि वित्तीय पायाभूत सुविधा (NPCI)", url: "https://npci.org.in" },
      { id: 11, name: "विमा योजना: पीएमजेजेबीवाय, पीएमएसबीवाय, एपीवाय", url: "https://jansuraksha.gov.in" },
      { id: 12, name: "राष्ट्रीय शिष्यवृत्ती पोर्टल (NSP)", url: "https://scholarships.gov.in" },
      { id: 13, name: "राष्ट्रीय परीक्षा संस्था (NTA) परीक्षा (NEET, JEE, इ.)", url: "https://nta.ac.in" },
      { id: 14, name: "NCERT पाठ्यपुस्तके आणि अभ्यासक्रम", url: "https://ncert.nic.in" },
      { id: 15, name: "विद्यापीठ अनुदान आयोग (UGC) अद्यतने", url: "https://ugc.ac.in" },
      { id: 16, name: "CBSE बोर्ड परीक्षा माहिती आणि निकाल", url: "https://cbse.gov.in" },
      { id: 17, name: "आयुष्मान भारत (PM-JAY) आरोग्य कार्ड", url: "https://ayushmanbharat.gov.in" },
      { id: 18, name: "आरोग्य मंत्रालय (MoHFW) अद्यतने", url: "https://mohfw.gov.in" },
      { id: 19, name: "सामाजिक कल्याण योजना आणि तपशील", url: "https://socialjustice.gov.in" },
      { id: 20, name: "कोणत्याही शासकीय विभागाकडे तक्रार नोंदवणे (PGPortal)", url: "https://pgportal.gov.in" },
      { id: 21, name: "ऑनलाइन माहिती अधिकार (RTI) अर्ज दाखल करणे", url: "https://rtionline.gov.in" },
      { id: 22, name: "भारतीय न्यायालयांमधील खटल्यांची स्थिती (eCourts)", url: "https://ecourts.gov.in" },
      { id: 23, name: "ग्राहक तक्रारी पोर्टल", url: "https://consumerhelpline.gov.in" },
      { id: 24, name: "भारताचे राष्ट्रीय पोर्टल (India.gov.in)", url: "https://india.gov.in" },
      { id: 25, name: "नागरिक सहभाग मंच (MyGov)", url: "https://mygov.in" },
      { id: 26, name: "आधार कार्ड सेवा (UIDAI)", url: "https://uidai.gov.in" },
      { id: 27, name: "पंतप्रधानांचे अधिकृत संकेतस्थळ", url: "https://pmindia.gov.in" },
      { id: 28, name: "मनरेगा (MGNREGA) जॉब कार्ड आणि योजना", url: "https://nrega.nic.in" },
      { id: 29, name: "आयकर विवरणपत्र भरणे आणि पॅन कार्ड सेवा", url: "https://incometax.gov.in" },
      { id: 30, name: "भविष्य निर्वाह निधी (EPF) आणि UAN माहिती", url: "https://epfindia.gov.in" },
      { id: 31, name: "ई-श्रम (e-SHRAM) कार्ड", url: "https://eshram.gov.in" }
    ]
  },
  en: {
    heroTitle: <>Important Links <br /> for Public Services</>,
    colSrNo: "S.No.",
    colDescription: "Description",
    colLink: "Link",
    links: [
      { id: 1, name: "Gram Panchayat Website for Computerized Library", url: "https://www.esahity.com/" },
      { id: 2, name: "Train Booking (IRCTC)", url: "https://www.irctc.co.in/nget/train-search" },
      { id: 3, name: "Passport Application Services", url: "https://passportindia.gov.in" },
      { id: 4, name: "Driving License, Vehicle RC, etc.", url: "https://parivahan.gov.in" },
      { id: 5, name: "Voter ID Registration/Correction", url: "https://voterportal.eci.gov.in" },
      { id: 6, name: "Digital storage of government documents (DigiLocker)", url: "https://digilocker.gov.in" },
      { id: 7, name: "Common Service Center (CSC) Portal", url: "https://sewa.csc.gov.in" },
      { id: 8, name: "PM-KISAN Beneficiary List and Status", url: "https://pmkisan.gov.in" },
      { id: 9, name: "Track DBT Payments (PFMS)", url: "https://pfms.nic.in" },
      { id: 10, name: "UPI, AePS, and Financial Infrastructure (NPCI)", url: "https://npci.org.in" },
      { id: 11, name: "Insurance Schemes: PMJJBY, PMSBY, APY", url: "https://jansuraksha.gov.in" },
      { id: 12, name: "National Scholarship Portal (NSP)", url: "https://scholarships.gov.in" },
      { id: 13, name: "National Testing Agency exams (NEET, JEE, etc.)", url: "https://nta.ac.in" },
      { id: 14, name: "NCERT Textbooks and Curriculum", url: "https://ncert.nic.in" },
      { id: 15, name: "University Grants Commission (UGC) Updates", url: "https://ugc.ac.in" },
      { id: 16, name: "CBSE Board Exam Info and Results", url: "https://cbse.gov.in" },
      { id: 17, name: "Ayushman Bharat (PM-JAY) Health Card", url: "https://ayushmanbharat.gov.in" },
      { id: 18, name: "Ministry of Health (MoHFW) Updates", url: "https://mohfw.gov.in" },
      { id: 19, name: "Social Welfare Schemes & Details", url: "https://socialjustice.gov.in" },
      { id: 20, name: "Lodge Complaints to Any Govt Dept (PGPortal)", url: "https://pgportal.gov.in" },
      { id: 21, name: "File RTI Applications Online", url: "https://rtionline.gov.in" },
      { id: 22, name: "Case Status in Indian Courts (eCourts)", url: "https://ecourts.gov.in" },
      { id: 23, name: "Consumer Complaints Portal", url: "https://consumerhelpline.gov.in" },
      { id: 24, name: "National Portal of India (India.gov.in)", url: "https://india.gov.in" },
      { id: 25, name: "Citizen Engagement Platform (MyGov)", url: "https://mygov.in" },
      { id: 26, name: "Aadhaar Card Services (UIDAI)", url: "https://uidai.gov.in" },
      { id: 27, name: "Prime Minister’s Official Site", url: "https://pmindia.gov.in" },
      { id: 28, name: "MGNREGA Job Card & Scheme", url: "https://nrega.nic.in" },
      { id: 29, name: "Income Tax Filing & PAN Services", url: "https://incometax.gov.in" },
      { id: 30, name: "Provident Fund (EPF) & UAN Info", url: "https://epfindia.gov.in" },
      { id: 31, name: "e-SHRAM Card", url: "https://eshram.gov.in" }
    ]
  }
};

export default function ImportantLinks() {
  const { lang } = useLang();
  const t = localTexts[lang] || localTexts.mr;

  return (
    <div className="w-full">
      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow">
            {t.heroTitle}
          </h1>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/assets/Browser-Links-Logo.png"
            alt="links"
            className="w-64 md:w-96 lg:w-[420px]"
          />
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="overflow-x-auto px-4 md:px-10 py-10 bg-gray-100">
        <table className="min-w-full border border-gray-300 bg-white rounded-lg overflow-hidden">
          {/* Header */}
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3 border">{t.colSrNo}</th>
              <th className="p-3 border">{t.colDescription}</th>
              <th className="p-3 border">{t.colLink}</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {t.links.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100 transition">
                <td className="p-3 border text-center">{item.id}</td>

                <td className="p-3 border">{item.name}</td>

                <td className="p-3 border">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline break-all"
                  >
                    {item.url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
