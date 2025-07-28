import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 md:px-6 lg:px-20 py-12 md:py-24">
      {/* Top: Social + Newsletter */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-16 mb-12 md:mb-20">
        {/* Contact + Icons */}
        <div className="space-y-6 md:space-y-10 lg:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold">हमसे जुड़ें</h2>
          <div className="flex gap-4 md:gap-8 text-2xl md:text-4xl flex-wrap">
            <a target="_blank" href="https://www.facebook.com/ArtCultureYouth" aria-label="Facebook">
              <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
            </a>
            <a target="_blank" href="https://x.com/ArtCultureYouth" aria-label="Twitter">
              <FaTwitter className="hover:text-gray-400 cursor-pointer" />
            </a>
            <a target="_blank" href="https://www.instagram.com/artcultureyouth" aria-label="Instagram">
              <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            </a>
            <a target="_blank" href="https://www.youtube.com/@ArtCultureYouth" aria-label="YouTube">
              <FaYoutube className="hover:text-gray-400 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Signup */}
        <div className="lg:w-1/2">
          <form className="flex flex-col sm:flex-row w-full max-w-xl gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="हमारा न्यूज़लेटर प्राप्त करने के लिए अपना ईमेल दर्ज करें"
              className="flex-grow px-4 md:px-6 py-3 md:py-4 bg-transparent border border-white text-white placeholder-white text-sm md:text-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg"
            >
              साइन अप करें
            </button>
          </form>
        </div>
      </div>

      {/* Middle: Grid Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 text-base md:text-lg">
        {/* Free entry - Full width on mobile */}
        <div className="md:col-span-1">
          <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">
            निःशुल्क प्रवेश
          </h4>

          <div className="grid grid-cols-2 gap-4 md:block">
            <div>
              <p className="text-sm md:text-base">ग्रेट बुद्ध स्तूप</p>
              <p className="text-sm md:text-base">वैशाली, बिहार, भारत</p>
              <p className="mt-2 md:mt-3 font-medium text-sm md:text-base">
                +91 98765 43210
              </p>
            </div>

            <div className="mt-0 md:mt-4 lg:mt-5">
              <p className="font-bold mb-1 text-sm md:text-base">
                खुलने का समय
              </p>
              <p className="text-sm md:text-base">प्रतिदिन: 09.00–18.00</p>
              <p className="text-sm md:text-base">अंतिम प्रवेश: 17.30</p>
            </div>
          </div>
        </div>

        {/* About and Visit */}
        <div className="grid grid-cols-2 gap-4 md:contents">
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">
              हमारे बारे में
            </h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300">
              <li className="text-sm md:text-base">शासन व्यवस्था</li>
              <li className="text-sm md:text-base">हमारी कहानी</li>
              <li className="text-sm md:text-base">नौकरियाँ</li>
              <li className="text-sm md:text-base">प्रेस</li>
              <li className="text-sm md:text-base">संपर्क करें</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">भ्रमण</h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300">
              <li className="text-sm md:text-base">मंदिर मानचित्र</li>
              <li className="text-sm md:text-base">कार्यक्रम</li>
              <li className="text-sm md:text-base">सुलभता</li>
              <li className="text-sm md:text-base">भोजन एवं पेय</li>
              <li className="text-sm md:text-base">ऑडियो गाइड</li>
            </ul>
          </div>
        </div>

        {/* Commercial and Resources */}
        <div className="grid grid-cols-2 gap-4 md:contents">
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">
              वाणिज्यिक
            </h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300">
              <li className="text-sm md:text-base">स्थल किराया</li>
              <li className="text-sm md:text-base">फिल्मांकन</li>
              <li className="text-sm md:text-base">छवि लाइसेंसिंग</li>
              <li className="text-sm md:text-base">स्मृति चिन्ह स्टोर</li>
              <li className="text-sm md:text-base">यात्रा साझेदार</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">
              संसाधन
            </h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300">
              <li className="text-sm md:text-base">अध्ययन कक्ष</li>
              <li className="text-sm md:text-base">पुस्तकालय अभिलेखागार</li>
              <li className="text-sm md:text-base">उपदेश</li>
              <li className="text-sm md:text-base">ब्लॉग</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 md:mt-20 border-t border-gray-700 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-sm md:text-base text-gray-400 gap-4 md:gap-0">
        <p className="text-center md:text-left">
          ©️ 2025 बिहार विरासत विकास समिति. सर्वाधिकार सुरक्षित।
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-center md:text-left">
          <a href="#" className="hover:text-white">
            गोपनीयता नीति
          </a>
          <a href="#" className="hover:text-white">
            सुलभता
          </a>
          <a href="#" className="hover:text-white">
            उपयोग की शर्तें
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;