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
    <footer className="bg-black text-white px-6 md:px-20 py-24">
      {/* Top: Social + Newsletter */}
      <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
        {/* Contact + Icons */}
        <div className="space-y-10 lg:w-1/2">
          <h2 className="text-4xl font-bold">Connect with us</h2>
          <div className="flex gap-8 text-4xl">
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
          <form className="flex w-full max-w-xl">
            <input
              type="email"
              placeholder="Enter your email address to receive our newsletter"
              className="flex-grow px-6 py-4 bg-transparent border border-white text-white placeholder-white text-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-8 text-lg"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      {/* Middle: Grid Sections */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-lg">
        {/* Free entry */}
        <div>
          <h4 className="font-bold text-xl mb-4">Free entry</h4>
          <p>Great Buddha Stupa</p>
          <p>Vaishali, Bihar, India</p>
          <p className="mt-3 font-medium">+91 98765 43210</p>
          <div className="mt-5">
            <p className="font-bold mb-1">Opening hours</p>
            <p>Daily: 09.00–18.00</p>
            <p>Last entry: 17.30</p>
          </div>
        </div>

        {/* About us */}
        <div>
          <h4 className="font-bold text-xl mb-4">About us</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Governance</li>
            <li>Our Story</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Visit */}
        <div>
          <h4 className="font-bold text-xl mb-4">Visit</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Temple map</li>
            <li>Events</li>
            <li>Accessibility</li>
            <li>Food and drink</li>
            <li>Audio guide</li>
          </ul>
        </div>

        {/* Commercial */}
        <div>
          <h4 className="font-bold text-xl mb-4">Commercial</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Venue hire</li>
            <li>Filming</li>
            <li>Image licensing</li>
            <li>Souvenir store</li>
            <li>Travel partners</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-bold text-xl mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Study room</li>
            <li>Library archive</li>
            <li>Teachings</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-20 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-base text-gray-400">
        <p>© 2025 Bihar Heritage Development Society. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy policy</a>
          <a href="#" className="hover:text-white">Accessibility</a>
          <a href="#" className="hover:text-white">Terms of use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
