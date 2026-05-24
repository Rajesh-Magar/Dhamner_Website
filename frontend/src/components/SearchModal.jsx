import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, FileText, Landmark, Award, ShieldAlert, Settings, Map, BookOpen, UserCheck, Image, HelpCircle, LayoutDashboard, Calendar, Percent, Users, GraduationCap, Leaf, ArrowRight, ExternalLink } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { searchIndex } from "../utils/searchIndex";

export default function SearchModal({ isOpen, onClose }) {
  const { lang, t } = useLang();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Define Category Icon Mapper
  const getCategoryIcon = (categoryKey) => {
    const iconClass = "w-4 h-4";
    switch (categoryKey) {
      case "home":
        return <Landmark className={`${iconClass} text-green-700`} />;
      case "about":
        return <UserCheck className={`${iconClass} text-blue-700`} />;
      case "schemes":
        return <Award className={`${iconClass} text-orange-600`} />;
      case "services":
        return <Settings className={`${iconClass} text-indigo-700`} />;
      case "departments":
        return <Landmark className={`${iconClass} text-teal-700`} />;
      case "documents":
        return <FileText className={`${iconClass} text-emerald-700`} />;
      case "map":
        return <Map className={`${iconClass} text-rose-600`} />;
      case "rti":
        return <BookOpen className={`${iconClass} text-cyan-700`} />;
      case "contact":
        return <HelpCircle className={`${iconClass} text-amber-700`} />;
      case "newFeatures":
        return <LayoutDashboard className={`${iconClass} text-purple-700`} />;
      default:
        return <ArrowRight className={`${iconClass} text-gray-500`} />;
    }
  };

  // Perform search matching
  useEffect(() => {
    if (!isOpen) return;

    if (!query.trim()) {
      // Show default "Popular Pages" when query is empty
      const popularPaths = ["/birth", "/tax", "/schemes", "/help", "/dashboard"];
      const popular = searchIndex.filter((item) => popularPaths.includes(item.path));
      setResults(popular);
      setSelectedIndex(0);
      return;
    }

    const cleanQuery = query.toLowerCase().trim();

    const filtered = searchIndex
      .map((item) => {
        // Retrieve translated names or use fallback
        const titleText = t[item.tKey] || "";
        const categoryText = t[item.categoryKey] || "";
        
        // Match score calculation
        let score = 0;
        
        // Direct title match
        if (titleText.toLowerCase() === cleanQuery) score += 100;
        else if (titleText.toLowerCase().startsWith(cleanQuery)) score += 50;
        else if (titleText.toLowerCase().includes(cleanQuery)) score += 25;

        // Custom keyword matching
        const keywordMatchCount = item.keywords.filter((kw) => 
          kw.toLowerCase().includes(cleanQuery) || cleanQuery.includes(kw.toLowerCase())
        ).length;
        score += keywordMatchCount * 10;

        // Category match
        if (categoryText.toLowerCase().includes(cleanQuery)) score += 5;

        return { ...item, score, titleText, categoryText };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.titleText.localeCompare(b.titleText)); // Sort by relevance then alphabetically

    setResults(filtered);
    setSelectedIndex(0);
  }, [query, isOpen, t]);

  // Handle navigate item
  const handleSelect = (item) => {
    onClose();
    if (item.isExternal) {
      window.open(item.path, "_blank", "noopener,noreferrer");
    } else {
      navigate(item.path);
    }
  };

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (results[selectedIndex]) {
          handleSelect(results[selectedIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  // Handle click outside modal container to close
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-start justify-center pt-[10vh] px-4 md:px-0 transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="bg-white/95 backdrop-blur-md rounded-2xl w-full max-w-xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col scale-in-animation animate-[scaleIn_0.2s_ease-out] max-h-[75vh]"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100 bg-gray-50/50">
          <Search size={20} className="text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent outline-none border-none text-gray-800 text-sm md:text-base placeholder-gray-400"
            placeholder={t.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button 
              onClick={() => setQuery("")}
              className="p-1 rounded-full hover:bg-gray-200 transition-colors shrink-0 text-gray-400 hover:text-gray-600"
              aria-label="Clear Search"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-200/60 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors shrink-0 md:block hidden"
          >
            Esc
          </button>
        </div>

        {/* Results / Empty Lists */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-3 max-h-[50vh]">
          {/* Header Title */}
          <div className="text-[10px] md:text-xs font-bold text-gray-400 tracking-wider uppercase px-3 pb-2 pt-1">
            {!query.trim() ? t.popularPages : `${t.search} (${results.length})`}
          </div>

          {results.length > 0 ? (
            <div className="space-y-1">
              {results.map((item, index) => {
                const isActive = index === selectedIndex;
                const displayTitle = t[item.tKey] || item.titleText || "";
                const displayCategory = t[item.categoryKey] || item.categoryText || "";

                return (
                  <div
                    key={item.path}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer transition-all duration-150 border-l-4 ${
                      isActive 
                        ? "bg-green-50/90 border-green-700 text-green-900 pl-4" 
                        : "bg-transparent border-transparent text-gray-700 hover:bg-gray-50 pl-3"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg shrink-0 ${
                        isActive ? "bg-white text-green-700 shadow-xs" : "bg-gray-100 text-gray-500"
                      }`}>
                        {getCategoryIcon(item.categoryKey)}
                      </div>
                      <div>
                        <div className={`text-xs md:text-sm font-semibold transition-colors ${
                          isActive ? "text-green-800" : "text-gray-800"
                        }`}>
                          {displayTitle}
                        </div>
                        <div className="text-[10px] text-gray-400 capitalize mt-0.5">
                          {displayCategory}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-400 shrink-0">
                      {item.isExternal ? (
                        <ExternalLink size={14} className="opacity-60" />
                      ) : (
                        <ArrowRight size={14} className={`transition-transform duration-200 ${
                          isActive ? "translate-x-0.5 opacity-80 text-green-700" : "opacity-40"
                        }`} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
              <ShieldAlert size={36} className="text-gray-300 mb-2" />
              <div className="text-sm font-semibold text-gray-500">{t.noResults}</div>
            </div>
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2 bg-gray-50/60 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400">
          <div className="flex items-center gap-3">
            <span>↑↓ {lang === "mr" ? "नेव्हिगेट" : "Navigate"}</span>
            <span>↵ {lang === "mr" ? "निवडा" : "Select"}</span>
          </div>
          <div>{t.pressEsc}</div>
        </div>
      </div>
    </div>
  );
}
