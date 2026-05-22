import React from "react";
import { useLang } from "../../context/LanguageContext";

const Health = () => {
  const { lang } = useLang();

  const localTexts = {
    mr: {
      pageTitle: "सरकारी आरोग्य योजनांची माहिती",
      sec1Title: "1) रीपोर्ट",
      sec2Title: "2) विविध आरोग्य योजना",
      sec3Title: "3) महत्वाचे दूरध्वनी क्रमांक",
      srNo: "अनुक्रमांक",
      softwareName: "सॉफ्टवेअर नाव",
      info: "माहिती / तपशील",
      website: "संकेतस्थळ",
      scheme: "योजना",
      beneficiary: "लाभार्थी",
      benefit: "लाभ",
      condition: "अटी",
      service: "सेवा",
      phone: "क्रमांक",
      phoneService: "सेवा",
      open: "उघडा",
      reports: [
        {
          id: 1,
          name: "Aadhar Based Biomatric System",
          desc: "आधार आधारित बायोमेट्रिक प्रणाली (Aadhar-based biometric system) म्हणजे आधार कार्डसोबत जोडलेल्या बायोमेट्रिक माहिती (fingerprint, iris) चा वापर करून व्यक्तीची ओळख प्रमाणीकरण (authentication) करण्याची प्रणाली. विशेषतः सरकारी कार्यालये, आणि इतर ठिकाणी कर्मचाऱ्यांची उपस्थिती नोंदवण्यासाठी (attendance), तसेच इतर ओळख प्रमाणीकरण प्रक्रियेसाठी याचा उपयोग केला जातो.",
          url: "http://mhphfwdbct.attendance.gov.in/",
          isLink: true
        },
        {
          id: 2,
          name: "DHIS-2",
          desc: "DHIS2 चा वापर राष्ट्रीय आरोग्य अधिकारी आणि आंतरराष्ट्रीय आरोग्य कार्यक्रम आणि संघटना एचआयव्ही, टीबी आणि मलेरिया यासारख्या विशिष्ट रोगांशी संबंधित आरोग्य कार्यक्रमांच्या व्यवस्थापनासाठी तसेच रोग देखरेख, नियमित लसीकरण आणि मातृत्व यासारख्या सामान्य सार्वजनिक आरोग्य कार्यक्रमांसाठी देखील करतात.",
          url: "http://115.124.111.208/mh/dhis-web-commons/security/login.action",
          isLink: true
        },
        {
          id: 3,
          name: "E-Medicine (AUSHADHI)",
          desc: "“ई-औषध” (E-Aushadhi) म्हणजे औषध माहिती व व्यवस्थापन प्रणाली.",
          url: "220.156.189.73",
          isLink: false
        },
        {
          id: 4,
          name: "E-Office",
          desc: "ई-ऑफिस प्रणाली:\n• इलेक्ट्रॉनिक फाइल्स तयार करणे\n• नोट्स व टिप्पण्या\n• फायली ट्रॅकिंग\n• कागदपत्रे शोधणे\n• कार्यक्षमता वाढवणे",
          url: "eoffice.gov.in",
          isLink: false
        },
        {
          id: 6,
          name: "Health Facility Information",
          desc: "रुग्णालये, दवाखाने, प्राथमिक आरोग्य केंद्र माहिती Ayushman Bharat Registry द्वारे मिळते.",
          url: "arogya.maharashtra.gov.in",
          isLink: false
        },
        {
          id: 7,
          name: "HMIS",
          desc: "आरोग्य व्यवस्थापन माहिती प्रणाली (HMIS) आरोग्य डेटा गोळा, विश्लेषण व निर्णय घेण्यासाठी वापरली जाते. ती जिल्हा, राज्य व राष्ट्रीय स्तरावर उपयोगी असते. लसीकरण, प्रसूती, आजार उपचार, संसाधन व्यवस्थापन इत्यादींसाठी महत्वाची आहे.",
          url: "nrhm-mis.nic.in",
          isLink: false
        },
        {
          id: 9,
          name: "HRMS",
          desc: "HRMS ही मानव संसाधन व्यवस्थापन प्रणाली आहे जी कर्मचारी माहिती, वेतन, उपस्थिती व व्यवस्थापनासाठी वापरली जाते.",
          url: "http://103.23.150.101/nrhmspma",
          isLink: true
        },
        {
          id: 11,
          name: "IDSP",
          desc: "एकात्मिक रोग देखरेख कार्यक्रम — रोग ओळख व नियंत्रणासाठी.",
          url: "idsp.nic.in",
          isLink: false
        }
      ],
      schemes: [
        {
          id: 1,
          name: "जननी सुरक्षा योजना",
          beneficiary: "SC/ST व BPL माता",
          benefit: "ग्रामीण ₹700\nशहरी ₹600\nघरी प्रसूती ₹500",
          conditions: "शासकीय प्रसूती आवश्यक",
          service: "ONLINE"
        },
        {
          id: 2,
          name: "गरोदर महिला योजना",
          beneficiary: "SC/ST व BPL",
          benefit: "₹4000",
          conditions: "अट नाही",
          service: "OFFLINE"
        },
        {
          id: 3,
          name: "ABHA CARD",
          beneficiary: "सर्व",
          benefit: "युनिक हेल्थ आयडी",
          conditions: "सर्वांसाठी",
          service: "ONLINE"
        },
        {
          id: 4,
          name: "मातृत्व अनुदान योजना",
          beneficiary: "अनुसूचित जमाती",
          benefit: "गरोदर मातांना औषधी व आहारासाठी ४०० रुपये",
          conditions: "फक्त अनुसूचित जमाती साठी आदिवासी मातेच्या तिसऱ्या खेप पर्यंत बिगरआदिवासी भागातील दुसऱ्या खेप पर्यंत",
          service: "OFFLINE"
        },
        {
          id: 5,
          name: "जननी शिशु सुरक्षा योजना (JSSK)",
          beneficiary: "सर्व प्रवर्ग",
          benefit: "गरोदर मातेच्या संदर्भ सेवा व सोनोग्राफी तपासणीसाठी तसेच एक वर्षातील आजारी बालकांना संदर्भ सेवेसाठी मोफत सुविधा",
          conditions: "सर्व प्रवर्गातील गरोदर मातांसाठी व एका वर्षातील आजारी बालकांसाठी",
          service: "OFFLINE"
        }
      ],
      contacts: [
        { number: "108", service: "आपत्कालीन सेवा" },
        { number: "104", service: "आरोग्य सल्ला" },
        { number: "102", service: "जननी सेवा" },
        { number: "1075", service: "कोविड मार्गदर्शन" },
        { number: "1800112356", service: "व्यसनमुक्ती" },
        { number: "18002334475", service: "गर्भधारणा पूर्व व प्रसवपूर्व निदान तंत्र (PCPNDT)" },
        { number: "1800116666", service: "क्षयरोग  विषयक मार्गदर्शन" },
        { number: "022-24114000", service: "कुष्ठरोग विषयक मार्गदर्शन" },
        { number: "8080809063", service: "महिला व बाल विकास विषयक सेवा" }
      ]
    },
    en: {
      pageTitle: "Government Health Schemes Information",
      sec1Title: "1) Reports & Applications",
      sec2Title: "2) Various Health Schemes",
      sec3Title: "3) Important Contact Numbers",
      srNo: "Sr.No",
      softwareName: "Software Name",
      info: "Information & Description",
      website: "Website",
      scheme: "Scheme",
      beneficiary: "Beneficiary",
      benefit: "Benefits",
      condition: "Conditions",
      service: "Service Mode",
      phone: "Number",
      phoneService: "Service",
      open: "Open",
      reports: [
        {
          id: 1,
          name: "Aadhar Based Biometric System",
          desc: "An Aadhaar-based biometric system authenticates identity using registered fingerprints or iris scans linked to an Aadhaar card. It is widely used in government offices for staff attendance recording and secure identification verification.",
          url: "http://mhphfwdbct.attendance.gov.in/",
          isLink: true
        },
        {
          id: 2,
          name: "DHIS-2",
          desc: "DHIS2 is used by national health authorities, international programs, and organizations like WHO to manage specific disease programs (HIV, TB, Malaria), as well as general public health activities like disease surveillance, immunization, and maternal care tracking.",
          url: "http://115.124.111.208/mh/dhis-web-commons/security/login.action",
          isLink: true
        },
        {
          id: 3,
          name: "E-Medicine (AUSHADHI)",
          desc: "\"E-Aushadhi\" stands for Electronic Medicine and Inventory Management System for drugs.",
          url: "220.156.189.73",
          isLink: false
        },
        {
          id: 4,
          name: "E-Office",
          desc: "E-Office System:\n• Electronic files creation\n• Notes and comments management\n• File tracking\n• Document search\n• Efficiency improvement",
          url: "eoffice.gov.in",
          isLink: false
        },
        {
          id: 6,
          name: "Health Facility Information",
          desc: "Information about hospitals, clinics, and Primary Health Centers is obtained through the Ayushman Bharat Registry.",
          url: "arogya.maharashtra.gov.in",
          isLink: false
        },
        {
          id: 7,
          name: "HMIS",
          desc: "Health Management Information System (HMIS) is used to gather, analyze, and base decisions on health data. It is vital at district, state, and national levels for monitoring immunization, delivery care, disease treatments, and resources.",
          url: "nrhm-mis.nic.in",
          isLink: false
        },
        {
          id: 9,
          name: "HRMS",
          desc: "HRMS is a Human Resource Management System used for employee details, salaries, attendance records, and administrative management.",
          url: "http://103.23.150.101/nrhmspma",
          isLink: true
        },
        {
          id: 11,
          name: "IDSP",
          desc: "Integrated Disease Surveillance Programme (IDSP) — Used for early detection and response to disease outbreaks.",
          url: "idsp.nic.in",
          isLink: false
        }
      ],
      schemes: [
        {
          id: 1,
          name: "Janani Suraksha Yojana",
          beneficiary: "SC/ST and BPL Mothers",
          benefit: "Rural: ₹700\nUrban: ₹600\nHome Delivery: ₹500",
          conditions: "Delivery in government hospitals required",
          service: "ONLINE"
        },
        {
          id: 2,
          name: "Pregnant Women Scheme",
          beneficiary: "SC/ST and BPL",
          benefit: "₹4000",
          conditions: "No condition",
          service: "OFFLINE"
        },
        {
          id: 3,
          name: "ABHA CARD",
          beneficiary: "All Citizens",
          benefit: "Unique Health ID",
          conditions: "For all citizens",
          service: "ONLINE"
        },
        {
          id: 4,
          name: "Maternity Subsidy Scheme",
          beneficiary: "Scheduled Tribes (ST)",
          benefit: "₹400 to pregnant mothers for medicine and nutrition",
          conditions: "Only for ST mothers: up to 3rd pregnancy in tribal areas, up to 2nd pregnancy in non-tribal areas",
          service: "OFFLINE"
        },
        {
          id: 5,
          name: "Janani Shishu Suraksha Karyakram (JSSK)",
          beneficiary: "All Categories",
          benefit: "Free referral services and sonography tests for pregnant mothers; free treatment for sick infants up to 1 year",
          conditions: "For all pregnant mothers and sick infants below 1 year",
          service: "OFFLINE"
        }
      ],
      contacts: [
        { number: "108", service: "Emergency Medical Services" },
        { number: "104", service: "Health Advisory Helpline" },
        { number: "102", service: "Janani Referral Services" },
        { number: "1075", service: "National COVID-19 Helpline" },
        { number: "1800112356", service: "De-addiction Helpline" },
        { number: "18002334475", service: "PCPNDT Helpline (Pre-Natal Diagnostics)" },
        { number: "1800116666", service: "Tuberculosis Information Helpline" },
        { number: "022-24114000", service: "Leprosy Information & Guidance" },
        { number: "8080809063", service: "Women & Child Development Services Helpline" }
      ]
    }
  };

  const t = localTexts[lang] || localTexts.mr;

  return (
    <div className="w-full px-4 md:px-10 py-10 bg-gray-50 text-gray-800">
      {/* ================= HEADING ================= */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-blue-900 border-b pb-4 max-w-4xl mx-auto">
        {t.pageTitle}
      </h1>

      {/* ================= 1) REPORT ================= */}
      <h2 className="text-2xl font-bold mb-4 text-green-700 max-w-6xl mx-auto">
        {t.sec1Title}
      </h2>

      <div className="overflow-x-auto mb-10 max-w-6xl mx-auto rounded-xl shadow border border-gray-200 bg-white">
        <table className="w-full text-left border-collapse">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4 font-semibold">{t.srNo}</th>
              <th className="p-4 font-semibold">{t.softwareName}</th>
              <th className="p-4 font-semibold">{t.info}</th>
              <th className="p-4 font-semibold">{t.website}</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-700">
            {t.reports.map((report) => (
              <tr key={report.id} className="border-b hover:bg-gray-50 align-top">
                <td className="p-4 font-medium text-center">{report.id}</td>
                <td className="p-4 font-bold text-blue-900">{report.name}</td>
                <td className="p-4 whitespace-pre-line leading-relaxed">{report.desc}</td>
                <td className="p-4 font-semibold">
                  {report.isLink ? (
                    <a
                      href={report.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {t.open}
                    </a>
                  ) : (
                    <span className="text-gray-500">{report.url}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= 2) SCHEMES ================= */}
      <h2 className="text-2xl font-bold mb-4 text-green-700 max-w-6xl mx-auto">
        {t.sec2Title}
      </h2>

      <div className="overflow-x-auto mb-10 max-w-6xl mx-auto rounded-xl shadow border border-gray-200 bg-white">
        <table className="w-full text-left border-collapse">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-4 font-semibold">{t.srNo}</th>
              <th className="p-4 font-semibold">{t.scheme}</th>
              <th className="p-4 font-semibold">{t.beneficiary}</th>
              <th className="p-4 font-semibold">{t.benefit}</th>
              <th className="p-4 font-semibold">{t.condition}</th>
              <th className="p-4 font-semibold">{t.service}</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-700">
            {t.schemes.map((sch) => (
              <tr key={sch.id} className="border-b hover:bg-gray-50 align-top">
                <td className="p-4 font-medium text-center">{sch.id}</td>
                <td className="p-4 font-bold text-blue-950">{sch.name}</td>
                <td className="p-4">{sch.beneficiary}</td>
                <td className="p-4 whitespace-pre-line leading-relaxed">{sch.benefit}</td>
                <td className="p-4 leading-relaxed">{sch.conditions}</td>
                <td className="p-4 font-semibold text-center">
                  <span className={`px-2 py-1 rounded text-xs ${
                    sch.service === "ONLINE" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                  }`}>
                    {sch.service}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= 3) CONTACT ================= */}
      <h2 className="text-2xl font-bold mb-4 text-green-700 max-w-6xl mx-auto">
        {t.sec3Title}
      </h2>

      <div className="overflow-x-auto max-w-3xl mx-auto rounded-xl shadow border border-gray-200 bg-white mb-6">
        <table className="w-full text-left border-collapse">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="p-4 font-semibold">{t.phone}</th>
              <th className="p-4 font-semibold">{t.phoneService}</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-700">
            {t.contacts.map((c, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-4 font-bold text-red-600 text-lg">{c.number}</td>
                <td className="p-4 font-medium">{c.service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Health;