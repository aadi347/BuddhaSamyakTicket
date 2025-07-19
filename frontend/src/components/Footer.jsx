import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full z-0 bg-black text-white px-6 md:px-16 pt-12 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        <div>
          <h3 className="font-bold text-lg mb-4">ABOUT</h3>
          <ul className="space-y-2 text-sm">
            <li>The Louvre in France and around the world</li>
            <li>Visitor rules</li>
            <li>Loans and long-term loans</li>
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
          <ul className="space-y-2 text-sm">
            <li>FAQ</li>
            <li>Contact us</li>
            <li>Give us your feedback!</li>
            <li>Jobs (in French)</li>
            <li>Private event and film shoots</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">FOLLOW US</h3>
          <div className="flex items-center gap-4 mb-6">
            <FaFacebookF className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaXTwitter className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaYoutube className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaPinterestP className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaLinkedinIn className="text-xl hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-400 gap-4">
        <div className="flex flex-wrap gap-6">
          <span>Legal Notice</span>
          <span>Privacy policy</span>
          <span>Cookies</span>
          <span>Credits (in French)</span>
          <span>Copyrights</span>
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
