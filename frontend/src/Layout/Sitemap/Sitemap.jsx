import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";
import { searchIndex } from "../../utils/searchIndex";
import { 
  Home, Map as MapIcon, Info, Phone, FileText, Globe, Sparkles, 
  Layers, Settings, ShieldCheck, Clipboard, ExternalLink, HelpCircle, ArrowRight, Search 
} from "lucide-react";

const sitemapTranslations = {
  mr: {
    title: "वेबसाईट नकाशा (Sitemap)",
    subtitle: "यशवंत ग्रामपंचायत धामणेर संकेतस्थळाची संपूर्ण रचना आणि अंतर्गत दुवे",
    searchPlaceholder: "नकाशात शोधा (उदा. जन्म प्रमाणपत्र, कर भरणा)...",
    quickLinks: "जलद दुवे (Quick Links)",
    categories: "मुख्य विभाग व वर्गीकृत सेवा",
    allPages: "एकूण पाने",
    noResults: "तुमच्या शोधाशी जुळणारा कोणताही दुवा आढळला नाही.",
    backHome: "मुख्य पृष्ठावर जा",
    externalLink: "बाह्य दुवा",
  },
  en: {
    title: "Website Sitemap",
    subtitle: "Complete hierarchy and navigation map of Yeshwant Grampanchayat Dhamner",
    searchPlaceholder: "Search sitemap (e.g. birth certificate, tax)...",
    quickLinks: "Quick Links",
    categories: "Main Categories & Services",
    allPages: "Total Pages",
    noResults: "No matching links found in the sitemap.",
    backHome: "Go to Homepage",
    externalLink: "External Link",
  }
};

const getCategoryIcon = (key) => {
  switch (key) {
    case "home": return <Home className="w-5 h-5" />;
    case "about": return <Info className="w-5 h-5" />;
    case "schemes": return <HelpCircle className="w-5 h-5" />;
    case "services": return <Settings className="w-5 h-5" />;
    case "departments": return <Layers className="w-5 h-5" />;
    case "documents": return <Clipboard className="w-5 h-5" />;
    case "map": return <MapIcon className="w-5 h-5" />;
    case "rti": return <ShieldCheck className="w-5 h-5" />;
    case "contact": return <Phone className="w-5 h-5" />;
    case "gis": return <Globe className="w-5 h-5" />;
    case "newFeatures": return <Sparkles className="w-5 h-5" />;
    default: return <FileText className="w-5 h-5" />;
  }
};

export default function Sitemap() {
  const { lang, t } = useLang();
  const [searchQuery, setSearchQuery] = useState("");
  const s = sitemapTranslations[lang] || sitemapTranslations.en;

  // Filter matching pages from searchIndex
  const filteredPages = searchIndex.filter(item => {
    if (!searchQuery) return true;
    const title = t[item.tKey] || item.tKey || "";
    const category = t[item.categoryKey] || item.categoryKey || "";
    const matchesTitle = title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesKeywords = item.keywords?.some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTitle || matchesCategory || matchesKeywords;
  });

  // Group pages by categoryKey dynamically
  const grouped = {};
  filteredPages.forEach(item => {
    const cat = item.categoryKey || "other";
    if (!grouped[cat]) {
      grouped[cat] = [];
    }
    grouped[cat].push(item);
  });

  // Separate single-item categories into Quick Links and multi-item/main categories into Cards
  const mainCategoryKeys = ["about", "schemes", "services", "departments", "documents", "newFeatures"];
  const mainGroups = {};
  const quickLinksList = [];

  Object.keys(grouped).forEach(cat => {
    if (mainCategoryKeys.includes(cat) || grouped[cat].length > 1) {
      mainGroups[cat] = grouped[cat];
    } else {
      quickLinksList.push(...grouped[cat]);
    }
  });

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Dynamic Header / Hero */}
      <div className="relative bg-gradient-to-r from-green-800 via-green-700 to-green-900 text-white py-12 sm:py-16 text-center shadow-lg overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent)] pointer-events-none"></div>
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-green-500/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 font-devanagari">
            {s.title}
          </h1>
          <p className="text-green-100/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium font-devanagari">
            {s.subtitle}
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-4 sm:p-5 max-w-3xl mx-auto backdrop-blur-md">
          <div className="relative flex items-center">
            <Search className="absolute left-4 text-green-700 w-5 h-5 pointer-events-none" />
            <input
              type="text"
              placeholder={s.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 bg-slate-50 border border-slate-200 focus:border-green-600 focus:bg-white rounded-xl text-slate-800 placeholder-slate-400 font-medium focus:ring-2 focus:ring-green-500/20 transition-all outline-none font-devanagari text-sm sm:text-base"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 text-slate-400 hover:text-slate-600 font-bold text-sm cursor-pointer hover:scale-105 active:scale-95 transition-transform"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Quick Links Row (dynamic pills) */}
        {quickLinksList.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6 border-b border-green-100 pb-2">
              <Globe className="w-5 h-5 text-amber-500" />
              <h2 className="text-lg sm:text-xl font-bold text-green-950 font-devanagari">{s.quickLinks}</h2>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {quickLinksList.map((item, idx) => {
                const label = t[item.tKey] || item.tKey;
                const isExt = item.isExternal;
                const pillContent = (
                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white hover:bg-green-50/40 border border-green-100 hover:border-green-300 hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5 group">
                    <span className="text-green-700 group-hover:text-amber-500 transition-colors">
                      {getCategoryIcon(item.categoryKey)}
                    </span>
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-green-950 transition-colors font-devanagari">
                      {label}
                    </span>
                    {isExt && <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-500 transition-colors" />}
                  </div>
                );
                return isExt ? (
                  <a key={idx} href={item.path} target="_blank" rel="noopener noreferrer" className="block select-none">{pillContent}</a>
                ) : (
                  <Link key={idx} to={item.path} className="block select-none">{pillContent}</Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Categorized Grid */}
        <div>
          <div className="flex items-center gap-2 mb-8 border-b border-green-100 pb-2">
            <Layers className="w-5 h-5 text-amber-500" />
            <h2 className="text-lg sm:text-xl font-bold text-green-950 font-devanagari">{s.categories}</h2>
            <span className="ml-auto text-xs sm:text-sm font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full font-devanagari">
              {s.allPages}: {filteredPages.length}
            </span>
          </div>

          {filteredPages.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-green-100 shadow-sm max-w-lg mx-auto">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-600 font-medium font-devanagari px-4">{s.noResults}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {Object.keys(mainGroups).map((catKey) => {
                const pages = mainGroups[catKey];
                if (!pages || pages.length === 0) return null;
                return (
                  <div 
                    key={catKey}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-amber-400/50 hover:shadow-md transition-all duration-300 flex flex-col group/card"
                  >
                    {/* Card Header */}
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                      <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-700 group-hover/card:bg-green-700 group-hover/card:text-white transition-all duration-300 shadow-sm">
                        {getCategoryIcon(catKey)}
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-lg text-green-950 group-hover/card:text-green-800 transition-colors font-devanagari leading-none mb-1">
                          {t[catKey] || catKey}
                        </h3>
                        <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                          {catKey}
                        </span>
                      </div>
                      <span className="ml-auto text-xs font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                        {pages.length}
                      </span>
                    </div>

                    {/* Links List */}
                    <ul className="space-y-2.5 flex-1">
                      {pages.map((item, index) => {
                        const pageTitle = t[item.tKey] || item.tKey;
                        const isExt = item.isExternal;
                        
                        const linkInner = (
                          <div className="flex items-start gap-2 text-sm font-medium text-slate-600 hover:text-green-800 transition-colors group/item py-0.5">
                            <ArrowRight className="w-4 h-4 mt-0.5 text-slate-300 group-hover/item:text-amber-500 group-hover/item:translate-x-0.5 transition-all shrink-0" />
                            <span className="font-devanagari transition-colors break-words">
                              {pageTitle}
                            </span>
                            {isExt && (
                              <ExternalLink className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                            )}
                          </div>
                        );

                        return (
                          <li key={index} className="list-none">
                            {isExt ? (
                              <a
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                              >
                                {linkInner}
                              </a>
                            ) : (
                              <Link
                                to={item.path}
                                className="block"
                              >
                                {linkInner}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
