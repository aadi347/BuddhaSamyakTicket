import React, { useState } from "react";
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageDropdown from "./LanguageDropdown";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-black text-white font-sans">
      {/* Main Top Section */}
      <div className="px-6 py-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="text-left pl-14 font-serif">
            <h1 className="text-3xl font-light leading-none">
              <span className="text-lg block">The</span>
              <span className="text-4xl font-semibold">Buddha Samyak</span>
              <span className="text-4xl block">Museum</span>
            </h1>
          </div>

          {/* Right: Icons + Hamburger */}
          <div className="flex items-center gap-6 text-gray-300 text-sm font-medium">
            <LanguageDropdown />
            <button className="flex items-center gap-1 hover:text-white">
              <FaCartShopping />
              Shop
            </button>
            <button className="flex items-center gap-1 hover:text-white">
              <FaMagnifyingGlass />
              Search
            </button>
            <button className="hover:text-white">Donate</button>

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
            <li className="hover:underline underline-offset-8 hover:decoration-white cursor-pointer">Visit</li>
            <li className="hover:underline underline-offset-8 hover:decoration-white cursor-pointer">Exhibitions</li>
            <li className="hover:underline underline-offset-8 hover:decoration-white cursor-pointer">Collection</li>
            <li className="hover:underline underline-offset-8 hover:decoration-white cursor-pointer">Learn</li>
            <li className="hover:underline underline-offset-8 hover:decoration-white cursor-pointer">Membership</li>
            <li className="hover:underline underline-offset-8 hover:decoration-white cursor-pointer">Support us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
