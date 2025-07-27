import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaWeibo,
  FaWeixin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 md:px-6 lg:px-20 py-12 md:py-24">
      {/* Top: Social + Newsletter */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-16 mb-12 md:mb-20">
        {/* Contact + Icons */}
        <div className="space-y-6 md:space-y-10 lg:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold">Connect with us</h2>
          <div className="flex gap-4 md:gap-8 text-2xl md:text-4xl flex-wrap">
            <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
            <FaTwitter className="hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            <FaYoutube className="hover:text-gray-400 cursor-pointer" />
            <FaWeibo className="hover:text-gray-400 cursor-pointer" />
            <FaWeixin className="hover:text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Signup */}
        <div className="lg:w-1/2">
          <form className="flex flex-col sm:flex-row w-full max-w-xl gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email address to receive our newsletter"
              className="flex-grow px-4 md:px-6 py-3 md:py-4 bg-transparent border border-white text-white placeholder-white text-sm md:text-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      {/* Middle: Grid Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 text-base md:text-lg">
        {/* Free entry - Full width on mobile */}
        <div className="md:col-span-1">
          <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">
            Free entry
          </h4>

          {/* Mobile: Split address and opening hours side by side */}
          <div className="grid grid-cols-2 gap-4 md:block">
            {/* Left side: Address and contact */}
            <div>
              <p className="text-sm md:text-base">Great Buddha Stupa</p>
              <p className="text-sm md:text-base">Vaishali, Bihar, India</p>
              <p className="mt-2 md:mt-3 font-medium text-sm md:text-base">
                +91 98765 43210
              </p>
            </div>

            {/* Right side: Opening hours */}
            <div className="mt-0 md:mt-4 lg:mt-5">
              <p className="font-bold mb-1 text-sm md:text-base">
                Opening hours
              </p>
              <p className="text-sm md:text-base">Daily: 09.00–18.00</p>
              <p className="text-sm md:text-base">Last entry: 17.30</p>
            </div>
          </div>
        </div>

        {/* Mobile: About us and Visit side by side */}
        <div className="grid grid-cols-2 gap-4 md:contents">
          {/* About us */}
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">
              About us
            </h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300">
              <li className="text-sm md:text-base">Governance</li>
              <li className="text-sm md:text-base">Our Story</li>
              <li className="text-sm md:text-base">Jobs</li>
              <li className="text-sm md:text-base">Press</li>
              <li className="text-sm md:text-base">Contact us</li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">Visit</h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300">
              <li className="text-sm md:text-base">Temple map</li>
              <li className="text-sm md:text-base">Events</li>
              <li className="text-sm md:text-base">Accessibility</li>
              <li className="text-sm md:text-base">Food and drink</li>
              <li className="text-sm md:text-base">Audio guide</li>
            </ul>
          </div>
        </div>

        {/* Mobile: Commercial and Resources side by side */}
        <div className="grid grid-cols-2 gap-4 md:contents">
          {/* Commercial */}
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">
              Commercial
            </h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300">
              <li className="text-sm md:text-base">Venue hire</li>
              <li className="text-sm md:text-base">Filming</li>
              <li className="text-sm md:text-base">Image licensing</li>
              <li className="text-sm md:text-base">Souvenir store</li>
              <li className="text-sm md:text-base">Travel partners</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">
              Resources
            </h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300">
              <li className="text-sm md:text-base">Study room</li>
              <li className="text-sm md:text-base">Library archive</li>
              <li className="text-sm md:text-base">Teachings</li>
              <li className="text-sm md:text-base">Blog</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 md:mt-20 border-t border-gray-700 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-sm md:text-base text-gray-400 gap-4 md:gap-0">
        <p className="text-center md:text-left">
          © 2025 Bihar Heritage Development Society. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-center md:text-left">
          <a href="#" className="hover:text-white">
            Privacy policy
          </a>
          <a href="#" className="hover:text-white">
            Accessibility
          </a>
          <a href="#" className="hover:text-white">
            Terms of use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
