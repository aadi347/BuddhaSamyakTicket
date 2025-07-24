import React from "react";

const SignupBanner = () => {
  return (
    <div className="flex justify-center items-center min-h-[300px] py-12 px-4">
      {/* Outer container */}
      <div className="bg-white border border-gray-200 p-10 w-full max-w-5xl shadow-md">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Plan your visit 
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Access personalized features, save your favorite exhibits,
and stay updated with the latest events and stories from the Museum.


              </p>
            </div>
            <button className="bg-black hover:bg-white border text-white hover:text-black font-semibold py-4 px-8 text-lg transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupBanner;
