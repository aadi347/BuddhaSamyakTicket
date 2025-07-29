import React from "react";
import { FaClock, FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  WiDaySunny,
  WiHumidity,
  WiStrongWind,
  WiThermometer,
} from "react-icons/wi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import WeatherInfo from "./WeatherInfo";

const exhibitions = [
  {
    title: "हिरोशिगे",
    subtitle: "खुले मार्ग का कलाकार",
    description: "हिरोशिगे के प्रतिष्ठित दृश्यों के माध्यम से एडो कालीन जापान का अनुभव करें।",
    date: "1 मई – 7 सितंबर 2025",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/705435/1582576/main-image",
  },
  {
    title: "प्राचीन भारत",
    subtitle: "जीवित परंपराएँ",
    description: "भारत की सतत सांस्कृतिक परंपराओं और पवित्र कला की खोज करें।",
    date: "22 मई – 19 अक्टूबर 2025",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/38615/1331596/main-image",
  },
]



const MuseumShowcase = () => {
  const weather = {
    temperature: "34°C",
    condition: "Sunny",
    humidity: "46%",
    wind: "12 km/h",
  };

  const DepartmentLogo = () => (
    <img
      src="/DepartmentofArtandCultureLogo.jpeg" // Replace with your actual logo path or URL
      alt="Department of Art and Culture Logo"
      className="h-20 w-auto object-contain"
    />
  );
  return (
    <div className="bg-black text-white px-6 md:px-16 py-12 font-sans">
      {/*const TopHeroSection*/}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8 pb-10 border-b border-gray-700">
        {/* Left Side: Logo above text on mobile, inline on desktop */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div>
            <DepartmentLogo />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold leading-tight text-white max-w-lg">
              कला एवं संस्कृति विभाग
            </h1>
            <p className="text-sm md:text-base text-gray-400 mt-1">
              बिहार सरकार के कला एवं संस्कृति विभाग की ओर से आपका हार्दिक स्वागत
              है। आइए, हमारे साथ जुड़ें और भारत की गौरवशाली सांस्कृतिक विरासत की
              समृद्ध यात्रा का अनुभव करें।
            </p>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gray-500 opacity-40 self-stretch" />

        {/* दाहिनी ओर: टिकट जानकारी बॉक्स */}
        <div className="text-white rounded-lg shadow-lg p-5 w-full md:min-w-[320px] md:max-w-[350px]">
          <Link to="/book-ticket" className="block">
            <div className="flex items-center gap-3 group transition-transform hover:scale-[1.05] cursor-pointer border border-gray-500/30 rounded-lg p-4 bg-white/10 hover:bg-white/20">
              <FaTicketAlt className="text-white text-2xl group-hover:rotate-[-10deg] transition-transform duration-300" />
              <span className="font-semibold text-white">
                नि:शुल्क प्रवेश –{" "}
                <span className="font-bold">ऑनलाइन बुक करें</span>
              </span>
            </div>
          </Link>

          <div className="mt-5 space-y-3 text-gray-700 font-medium text-sm md:text-base border border-gray-500/30 rounded-lg p-4 bg-white/10 hover:bg-white/20">
            <div className="flex items-center gap-3">
              <FaClock className="text-white text-lg" />
              <span className="text-white">
                आज खुला है: <strong>29-07-2025</strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaClock className="text-white text-lg" />
              <span className="text-white">
                प्रवेश समय: <strong>9:00 – 5:00</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <WeatherInfo />
      </div>

        {/* Exhibitions Section */}
        <div className="flex justify-between items-center mt-12 mb-6 ">
          <h2 className="text-3xl md:text-4xl font-semibold">
            प्रदर्शनियाँ एवं कार्यक्रम
          </h2>
          <Link
            to="/exhibitions"
            className="text-white text-sm hover:underline"
          >
            सभी प्रदर्शनियाँ एवं कार्यक्रम देखें →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-10  ">
          {exhibitions.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl bg-black shadow-xl transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="flex h-[440px] ">
                {/* Text Content */}
                <div className="w-1/2 p-8 flex flex-col justify-between transition-all duration-300 group-hover:bg-white">
                  <div>
                    <h3 className="text-white group-hover:text-black text-2xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-black mt-1 text-lg">
                      {item.subtitle}
                    </p>
                    {item.description && (
                      <p className="text-gray-400 group-hover:text-black mt-2 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                <div>
                  <p className="text-sm group-hover:text-black text-gray-400">
                    Exhibition
                  </p>
                  <p className="text-sm group-hover:text-black text-gray-300 mt-1">
                    {item.date}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="w-1/2 overflow-hidden ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-r-xl transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-b border-gray-700 pt-20"></div>
    </div>
  );
};

export default MuseumShowcase;
