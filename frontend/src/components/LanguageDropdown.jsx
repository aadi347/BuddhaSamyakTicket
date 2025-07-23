import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "th", label: "Thai" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中国人" },
  { code: "ko", label: "한국인" },
];

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState("English");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang) => {
    setSelected(lang.label);
    i18n.changeLanguage(lang.code);
    setOpen(false);
  };

  return (
    <div className="relative flex items-center gap-2 cursor-pointer" ref={dropdownRef}>
      <div
        style={{ fontFamily: '"Playfair Display", serif' }}
        onClick={() => setOpen(!open)}
        className="bg-white px-3 py-1.5 rounded-full text-sm text-black font-medium shadow hover:bg-gray-100 transition"
      >
        {selected}
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-10 left-8 z-30 w-40 bg-black/40 backdrop-blur-lg rounded-md shadow-xl overflow-hidden"
          >
            

            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => handleLanguageChange(lang)}
                className={`px-4 py-2 hover:bg-gray-100 text-sm transition ${
                  selected === lang.label ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                {lang.label}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageDropdown;
