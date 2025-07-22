import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from 'react-icons/fa6';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="w-full z-0 bg-black text-white px-6 md:px-16 pt-12 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        <div>
          <h3 className="font-bold text-lg mb-4">ABOUT</h3>
          <ul className="space-y-2 text-sm">
            <p>
              Discover the rich heritage of Buddhism through rare artifacts, immersive exhibits, and sacred art. The Buddha Samyak Museum offers a spiritual and cultural journey into the life and teachings of Lord Buddha.
            </p>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">OUR WEBSITES</h3>
          <ul className="space-y-2 text-sm">
            <li>Online ticketing service</li>
            <li>Online Boutique</li>
            <li>Collection</li>
            <li>Corpus</li>
            <li>Donate</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
  <h3 className="font-bold text-lg mb-4">CONTACT</h3>
  <ul className="space-y-4 text-sm text-gray-300">
    <li className="flex items-start gap-2">
      <FaMapMarkerAlt className="mt-1 text-white" />
      <span>Buddha Samyak Darshan Museum & Stupa, X4VC+P25, Vaishali, Basarh, Bihar 843143</span>
    </li>
    <li className="flex items-center gap-2">
      <FaPhoneAlt className="text-white" />
      <span>0612-2508445</span>
    </li>
    <li className="flex items-center gap-2">
      <FaEnvelope className="text-white" />
      <span>heritageofbihar@gmail.com</span>
    </li>
    <li className="flex items-center gap-2 cursor-pointer hover:text-white transition">
      <FaLocationArrow className="text-white" />
      <a
        href="https://www.google.com/maps/search/Buddha+Samyak+Darshan+Museum+%26+Stupa,+X4VC%2BP25,+Vaishali,+Basarh,+Bihar+843143/@25.9945109,85.118543,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Location
      </a>
    </li>
  </ul>
</div>
        <div>
          <h3 className="font-bold text-lg mb-4">FOLLOW US</h3>
          <div className="flex items-center gap-4 mb-6">
            <FaFacebookF className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaXTwitter className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaYoutube className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaLinkedinIn className="text-xl hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-400 gap-4">
        <div className="flex flex-wrap gap-6">
          <span>© 2025 Bihar Heritage Development Society. All rights reserved.</span>
        
        </div>
        <img
          src="/buddha.png"
          alt="Logo"
          className="w-24 bg-white/80 rounded-full p-2"
        />
      </div>
    </footer>
  );
};

export default Footer;
