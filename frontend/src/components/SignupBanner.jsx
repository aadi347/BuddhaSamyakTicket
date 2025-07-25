import React from "react";
import { Link } from "react-router-dom";

const SignupBanner = () => {
  return (
    <div className="flex justify-center items-center py-12 px-4">
      {/* Outer container */}
      <div className="bg-white border border-gray-200 p-12 w-full max-w-5xl shadow-md">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4">
                How to reach Buddha Samyak Darshan Museum
              </h2>
              <p className="text-gray-700 text-lg">
                Curious how to get here? Click here to discover the best ways
                to reach Buddha Samyak Darshan Museum and plan your visit with ease!
              </p>
            </div>
            <Link to="/Travel">
              <button className="bg-black hover:bg-white border text-white hover:text-black font-semibold py-4 px-8 text-lg transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Get Directions
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupBanner;
