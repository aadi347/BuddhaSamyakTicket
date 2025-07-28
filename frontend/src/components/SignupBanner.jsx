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
                बुद्ध सम्यक् दर्शन संग्रहालय पहुँचने का मार्ग
              </h2>
              <p className="text-gray-700 text-lg">
                यहाँ कैसे पहुँचें? जानने के लिए क्लिक करें — बुद्ध सम्यक् दर्शन संग्रहालय तक पहुँचने के सर्वोत्तम मार्ग जानिए और अपनी यात्रा की योजना आसानी से बनाएं!
              </p>
            </div>
            <Link to="/Travel">
              <button className="bg-black hover:bg-white border text-white hover:text-black font-semibold py-4 px-8 text-lg transition-all duration-300 hover:scale-105 whitespace-nowrap">
                दिशा-निर्देश प्राप्त करें
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupBanner;
