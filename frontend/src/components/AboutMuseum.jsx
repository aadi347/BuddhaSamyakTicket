import React, { useRef } from "react";
import { Instagram, Twitter, Mail, PhoneCall } from "lucide-react";
import Navbar from "./Navbar";
import { useTranslation } from 'react-i18next';

function AboutMuseum() {
  const videoRef = useRef(null);
  const { t } = useTranslation();

  const StayConnected = () => (
    <div className="bg-black/90 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between mt-10 text-white">
      <div className="text-center md:text-left mb-4 md:mb-0 ">
        <h2 className="text-xl font-semibold mb-2">{t("stay_connected_title")}</h2>
        <p className="text-sm pr-36">
          {t("follow_us_description")}
        </p>
      </div>
      <div className="flex gap-6 items-center text-white text-xl">
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-pink-500 transition-all duration-200"
        >
          <Instagram />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="hover:text-blue-400 transition-all duration-200"
        >
          <Twitter />
        </a>
        <a
          href="mailto:info@example.com"
          aria-label="Mail"
          className="hover:text-yellow-400 transition-all duration-200"
        >
          <Mail />
        </a>
        <a
          href="tel:+911234567890"
          aria-label="Call"
          className="hover:text-green-400 transition-all duration-200"
        >
          <PhoneCall />
        </a>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white py-8 bg-white">
        {/* Banner Section */}
        <div className="w-full px-4 md:px-20">
          <div className="relative h-40 md:h-56 flex items-center justify-center rounded-lg overflow-hidden mb-8">
            <img
              src="/topView.jpeg"
              alt="Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 text-center px-4 py-2 rounded-md">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {t("explore_section_title")}
              </h1>
            </div>
          </div>
        </div>

        {/* Stay Connected for large screens */}
        <div className="hidden md:block">
          <div className="w-full px-4 md:px-20">{StayConnected()}</div>
        </div>

        {/* Explore Section */}
        <div className="space-y-6 w-full px-4 md:px-20 mt-10">
          {/* Block 1 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-2/5 bg-white bg-opacity-90 text-black rounded-xl p-4">
              <h2 className="text-3xl font-bold mb-1">
                {t("historical_background_title")}
              </h2>
              <p className="text-lg pt-5 text-justify" style={{ whiteSpace: 'pre-line' }}>
                {t("historical_background_description")}
              </p>
            </div>
            <div
              className="md:w-3/5 rounded-xl overflow-hidden"
             
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl"
              >
                <source src="/sec4stupa.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col-reverse md:flex-row gap-4 my-16">
            <div className="md:w-3/5 rounded-xl overflow-hidden">
              <img
                style={{
                  boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)",
                }}
                src="vc.jpeg"
                alt="Relics"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/5 bg-white bg-opacity-90 text-black rounded-xl p-4">
              <h2 className="text-3xl font-bold mb-1">
                {t("gov_initiative_title")}
              </h2>
              <p className="text-lg pt-5 text-justify" style={{ whiteSpace: 'pre-line' }}>
                {t("gov_initiative_description")}
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-2/5 bg-white bg-opacity-90 text-black rounded-xl p-4">
              <h2 className="text-3xl font-bold mb-1">
                {t("significance_title")}
              </h2>
              <p className="text-xl pt-5 text-justify" style={{ whiteSpace: 'pre-line' }}>
                {t("significance_description")}
              </p>
            </div>
            <div className="md:w-3/5 rounded-xl overflow-hidden">
             <img
              style={{ boxShadow: "-23px 0px 100px 12px rgba(80, 159, 228, 0.14)" }}
              src="gallery.jpeg" 
              alt="Significance"
              className="w-full h-full object-cover"
            />
  
              
            </div>
          </div>
        </div>

        {/* Stay Connected for mobile */}
        <div className="block md:hidden">
          <div className="w-full px-4 md:px-20">{StayConnected()}</div>
        </div>
      </div>
    </>
  );
}

export default AboutMuseum;