
import React, { useState } from "react";
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageDropdown from "./LanguageDropdown";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoMdLogIn } from "react-icons/io";



const Navbar = () => {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="w-full shadow-md bg-black text-white font-sans">
      {/* Main Top Section */}
      <div className="px-6 py-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-4 pl-6 text-white no-underline">
            <img
              src="/buddha.png"
              alt="Logo"
              className="h-20 w-auto object-contain filter invert brightness-0"
            />

            <div className="text-left font-serif">
              <h1 className="text-3xl font-light leading-none">
                <span className="text-lg block">The</span>
                <span className="text-4xl font-semibold">Buddha Samyak</span>
                <span className="text-4xl block">Museum</span>
              </h1>
            </div>
          </Link>


          {/* Right: Icons + Hamburger */}
          <div className="flex items-center gap-6 text-gray-300 text-sm font-medium">
            <LanguageDropdown />

            <button className="flex items-center gap-1 hover:text-white">
              <FaMagnifyingGlass />
              {t('Search')}
            </button>

            <div className="w-full md:w-auto flex justify-end">

              <Link to="/book-ticket">
                <button
                  style={{ fontFamily: '"Playfair Display", serif' }}
                  className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition flex inline-flex items-center gap-2 border border-gray-700 hover:border-gray-100 text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path
                      fillRule="evenodd"
                      d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t('Tickets')}
                </button>
              </Link>
              <Link to="/login">
              <button className="ml-4">
                <IoMdLogIn 
 size={24} className="text-white hover:text-gray-300 transition" />
              </button>
              </Link>
            </div>
            {/* Mobile Hamburger */}
            <div className="md:hidden block ml-4">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Nav Links (in same div but shown below icons) */}
        <div className={`transition-all duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden md:block'} bg-black`}>
          <ul className="flex flex-col md:flex-row justify-end  md:gap-10 gap-4 font-semibold text-md">
            <li className="hover:underline underline-offset-8 hover:decoration-white cursor-pointer">{t('Visit')}</li>
            <li className="hover:underline underline-offset-8 hover:decoration-white cursor-pointer">{t('Exhibitions')}</li>
            <li className="hover:underline underline-offset-8 hover:decoration-white cursor-pointer">{t('Collection')}</li>
            <li className="hover:underline underline-offset-8 hover:decoration-white cursor-pointer">{t('Learn')}</li>
            <li className="hover:underline underline-offset-8 hover:decoration-white cursor-pointer">{t('Membership')}</li>
            <li className="hover:underline underline-offset-8 hover:decoration-white cursor-pointer">{t('Support us')}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
