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
import { FaBell } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { useTranslation } from "react-i18next";


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

  const { t } = useTranslation();

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
             {t("art&culture")}
            </h1>
            <p className="text-sm md:text-base text-gray-400 mt-1">
              {t("art&culture_description")}
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
              {t("TicketBooking")}
              </span>
            </div>
          </Link>

          <div className="mt-5 space-y-3 text-gray-700 font-medium text-sm md:text-base border border-gray-500/30 rounded-lg p-4 bg-white/10 hover:bg-white/20">
            <div className="flex items-center gap-3">
              <FaBell className="text-white text-lg animate-pulse" />
              <span className="text-white text-xs">
              {t("Notification")}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaClock className="text-white text-lg animate-spin" />
              <span className="text-white text-xs">
                {t("Time")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <WeatherInfo />
      </div>

        {/* Exhibitions Section */}
       

        
   
    </div>
  );
};

export default MuseumShowcase;
