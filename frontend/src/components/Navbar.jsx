import React, { useState } from 'react';
import { FaSearch, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-black text-white">
      {/* Upper Navbar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 border-b border-gray-200">
        {/* Left Side: Search + Language */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-1 ml-2">
            <FaGlobe />
            <select className="text-sm outline-none">
              <option>EN</option>
              <option>HI</option>
              <option>FR</option>
            </select>
          </div>
        </div>

        {/* Center: Brand Name */}
        <div
        style={{ fontFamily: '"Playfair Display", serif' }}
        className="text-xl  my-2 md:my-0 text-center w-full md:w-auto py-4 ">
          Buddha Samyak Museum
        </div>

        {/* Right Side: Book Ticket Button */}
        <div className="w-full md:w-auto flex justify-end">
          <button
          style={{ fontFamily: '"Playfair Display", serif' }}
          className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition flex inline-flex items-center gap-2 border border-gray-700 hover:border-gray-100 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clip-rule="evenodd" />
            </svg>
            Tickets
          </button>
        </div>
      </div>

      {/* Lower Navbar - Navigation */}
      <div className="md:flex justify-center items-center text-center py-2 px-4 relative bg-black/90 text-white">
        {/* Hamburger (Mobile only) */}
        <div className="md:hidden absolute right-4 top-2">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Nav Links */}
        <ul
          style={{ fontFamily: '"Playfair Display", serif' }}  
          className={`flex-col md:flex-row md:flex gap-10 py-4 text-center md:text-left text-md font-bold w-full md:w-auto ${
            menuOpen ? 'flex ' : 'hidden md:flex py-4'
          }`}
        >
          <li className="py-2 md:py-0"><a href="#">Home</a></li>
          <li className="py-2 md:py-0"><a href="#">About</a></li>
          <li className="py-2 md:py-0"><a href="#">Events</a></li>
          <li className="py-2 md:py-0"><a href="#">Gallery</a></li>
          <li className="py-2 md:py-0"><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
