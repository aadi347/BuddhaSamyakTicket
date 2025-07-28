import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ExploreMore() {
  const content = [
    { title: "Buddha Samyak", url: "/bgImage.jpeg" },
    { title: "Visitors Center", url: "visitorsCenter.jpeg" },
    { title: "Lake View", url: "" },
    { title: "City Lights", url: "" },
    { title: "Serene Lake", url: "" },
    { title: "Wild Forest", url: "" },
    { title: "Colorful Street", url: "" },
    { title: "Golden Hour", url: "" },
    { title: "Peaceful Bridge", url: "" },
    { title: "Old Town", url: "" },
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-black px-4 py-8 md:px-20">
      <h2 className="text-2xl font-bold mb-6 text-center"></h2>

      <div className="space-y-6">
        {[0, 1, 2, 3, 4].map((rowIndex) => {
          const isEven = rowIndex % 2 === 0;
          const big = content[rowIndex * 2];
          const small = content[rowIndex * 2 + 1];

          return (
            <div key={rowIndex} className="flex flex-col md:flex-row gap-4">
              {isEven ? (
                <>
                  {/* Big Cell */}
                  <div className="flex-1 relative rounded-2xl overflow-hidden shadow-lg h-72">
                    <img
                      src={big.url}
                      alt={big.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 text-xl font-bold text-white drop-shadow-lg">
                      {big.title}
                    </div>
                  </div>

                  {/* Small Cell */}
                  <div className="w-full md:w-1/3 relative rounded-2xl overflow-hidden shadow-lg h-72">
                    <img
                      src={small.url}
                      alt={small.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 text-xl font-bold  text-white drop-shadow-lg">
                      {small.title}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Small Cell */}
                  <div className="w-full md:w-1/3 relative rounded-2xl overflow-hidden shadow-lg h-72">
                    <img
                      src={small.url}
                      alt={small.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-lg">
                      {small.title}
                    </div>
                  </div>

                  {/* Big Cell */}
                  <div className="flex-1 relative rounded-2xl overflow-hidden shadow-lg h-72">
                    <img
                      src={big.url}
                      alt={big.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 drop-shadow-lg">
                      {big.title}
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default ExploreMore;
