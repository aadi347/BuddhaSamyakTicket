import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";


const Login = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center border-10 rounded-xl border-white"
      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqC6vWB4BQcNY7-g8tU6p030iJG2iSEmISQ35Hf3F_PsfVjdc9RxocbYe3PYR1ixbo4ME6WPNDJUbQ8hBDKuKot3JeU5JcmGvol0y3LLmF7EaErmt_HhaRFOtzDEwYgHPJLGQ-r=s1360-w1360-h1020-rw')" }} // replace with your image path
    >
      <div className="bg-opacity-80 w-screen h-screen  mx-auto rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Buddha Samyak Museum</h2>
            <p className="text-gray-600">Discover the journey of enlightenment and ancient history. Login to explore more.</p>
          </div>

<div className="flex gap-4 mt-10 bg-white/80 backdrop-blur-md p-4 rounded-lg">
            <div className="flex items-center justify-center gap-4">
            <a href="#" className="text-black hover:text-blue-800 text-2xl">
              <i className="fab fa-facebook"><FaFacebook /></i>
            </a>
            <a href="#" className="text-black hover:text-blue-600 text-2xl">
              <i className="fab fa-twitter"><AiFillInstagram /></i>
            </a>
            <a href="#" className="text-black hover:text-pink-700 text-2xl">
              <i className="fab fa-instagram"><IoLogoTwitter /></i>
            </a>
            <a href="#" className="text-black hover:text-red-800 text-2xl">
              <i className="fab fa-youtube"><IoLogoLinkedin /></i>
            </a>
          </div>
          </div>    
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-10 bg-black/60 backdrop-blur-md  ">
          <h3 className="text-2xl font-semibold mb-6 text-center">Login</h3>

          <div className="max-w-sm mx-auto space-y-6">
            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                className="peer py-2.5 sm:py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-300 text-sm focus:border-blue-500 focus:ring-0"
                placeholder="Enter email"
              />
              <div className="absolute inset-y-0 start-0 flex items-center ps-2">
                <svg className="size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                  stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                className="peer py-2.5 sm:py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-300 text-sm focus:border-blue-500 focus:ring-0"
                placeholder="Enter password"
              />
              <div className="absolute inset-y-0 start-0 flex items-center ps-2">
                <svg className="size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                  stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
                  <circle cx="16.5" cy="7.5" r=".5" />
                </svg>
              </div>
            </div>

            <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition">
              Login
            </button>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
