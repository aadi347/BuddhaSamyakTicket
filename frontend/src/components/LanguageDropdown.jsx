import React, { useState, useRef, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const languages = ["English", "हिन्दी", "française", "日本語", "中国人"];

const LanguageDropdown = () => {
  const [selected, setSelected] = useState("English");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative flex items-center gap-2 cursor-pointer"
      ref={dropdownRef}
    >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
</svg>

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
            style={{ fontFamily: '"Playfair Display", serif' }}
            className="absolute top-10 left-8 z-30 w-40 bg-black/40 backdrop-blur-lg rounded-md shadow-xl overflow-hidden"
          >
            {languages.map((lang) => (
              <li
                key={lang}
                onClick={() => {
                  setSelected(lang);
                  setOpen(false);
                }}
                style={{ fontFamily: '"Playfair Display", serif' }}
                className={`px-4 py-2 hover:bg-gray-100 text-sm transition ${
                  selected === lang ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                {lang}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageDropdown;
