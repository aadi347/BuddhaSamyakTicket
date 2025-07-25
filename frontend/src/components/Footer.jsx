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
import { Link } from "react-router-dom";

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
            <li>Exhibitions</li>
            <li>Events</li>
            <Link to="/admin
            " className="text-blue-400 hover:underline">
            <li>Admin Login</li>
            </Link>
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
        href="https://www.google.com/maps/place/Buddha+Samyak+Darshan+Museum+%26+Stupa/@25.9942652,85.1153299,17z/data=!4m10!1m2!2m1!1sBuddha+Samyak+Darshan+Museum+%26+Stupa,+X4VC%2BP25,+Vaishali,+Basarh,+Bihar+843143!3m6!1s0x39ed391d4d1060ad:0x60961d6b8f33c717!8m2!3d25.9942639!4d85.1201086!15sCk5CdWRkaGEgU2FteWFrIERhcnNoYW4gTXVzZXVtICYgU3R1cGEsIFg0VkMrUDI1LCBWYWlzaGFsaSwgQmFzYXJoLCBCaWhhciA4NDMxNDNaTCJKYnVkZGhhIHNhbXlhayBkYXJzaGFuIG11c2V1bSAmIHN0dXBhIHg0dmMgcDI1IHZhaXNoYWxpIGJhc2FyaCBiaWhhciA4NDMxNDOSARVhcmNoYWVvbG9naWNhbF9tdXNldW2aASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTmxjemhxUjBSUkVBRaoBnQEQASooIiRidWRkaGEgc2FteWFrIGRhcnNoYW4gbXVzZXVtICYgc3R1cGEoADIfEAEiGzpYAd9cldkEhmupP6H33ePsFjzl34H8ePq-wjJOEAIiSmJ1ZGRoYSBzYW15YWsgZGFyc2hhbiBtdXNldW0gJiBzdHVwYSB4NHZjIHAyNSB2YWlzaGFsaSBiYXNhcmggYmloYXIgODQzMTQz4AEA-gEECAAQLA!16s%2Fg%2F11rbrwj7s7?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D"
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
          src="/buddha3.png"
          alt="Logo"
          className="w-24  rounded-full p-2"
        />
      </div>
    </footer>
  );
};

export default Footer;
