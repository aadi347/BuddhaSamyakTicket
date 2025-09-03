import React, { useRef, useState } from "react";
import { Instagram, Twitter, Mail, PhoneCall, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Navbar from "./Navbar";
import { useTranslation } from 'react-i18next';

function AboutMuseum() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const { t } = useTranslation();

  const ContentBlock = ({ children, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="flex flex-col gap-8"
      >
        {children}
      </motion.div>
    );
  };

  const StayConnected = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-black to-gray-900 rounded-3xl p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between shadow-2xl border border-gray-800"
    >
      <div className="text-center lg:text-left mb-8 lg:mb-0 flex-1">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
          {t("stay_connected_title")}
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
          {t("follow_us_description")}
        </p>
      </div>
      
      <div className="flex gap-6 lg:gap-8 flex-shrink-0">
        {[
          { icon: Instagram, color: "hover:text-pink-500", label: "Instagram" },
          { icon: Twitter, color: "hover:text-blue-400", label: "Twitter" },
          { icon: Mail, color: "hover:text-yellow-400", label: "Email" },
          { icon: PhoneCall, color: "hover:text-green-400", label: "Phone" }
        ].map(({ icon: Icon, color, label }, index) => (
          <motion.a
            key={label}
            href="#"
            aria-label={label}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className={`w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white ${color} transition-all duration-300 hover:bg-white/20 hover:shadow-lg`}
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/topView.jpeg"
            alt="Museum Overview"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-wider mb-8">
              ABOUT THE
              <span className="block font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                MUSEUM
              </span>
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="h-1 bg-white mx-auto mb-8"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed"
            >
              {t("explore_section_title")}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white text-black">
        
        {/* Stay Connected Section */}
        <div className="py-20 px-6 lg:px-20">
          <StayConnected />
        </div>

        {/* Content Blocks */}
        <div className="py-20 px-6 lg:px-20 space-y-20 max-w-6xl mx-auto">
          
          {/* Historical Background */}
          <ContentBlock index={0}>
            {/* Text Section */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  {t("historical_background_title")}
                </h2>
                <div className="w-20 h-1 bg-black mb-8"></div>
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed font-light" style={{ whiteSpace: 'pre-line' }}>
                  {t("historical_background_description")}
                </p>
              </motion.div>
            </motion.div>
            
            {/* Video Section */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-[400px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src="https://res.cloudinary.com/dnjmxt0kz/video/upload/v1754050153/sec4stupa_lap6sb.mov" type="video/mp4" />
                </video>
                
                {/* Video Controls */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                
              </div>
            </div>
          </ContentBlock>

          {/* Government Initiative */}
          <ContentBlock index={1}>
            {/* Text Section */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  {t("gov_initiative_title")}
                </h2>
                <div className="w-20 h-1 bg-black mb-8"></div>
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed font-light" style={{ whiteSpace: 'pre-line' }}>
                  {t("gov_initiative_description")}
                </p>
              </motion.div>
            </motion.div>
            
            {/* Image Section */}
            <div className="relative group">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="vc.jpeg"
                  alt="Government Initiative"
                  className="w-full h-[400px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </div>
          </ContentBlock>

          {/* Significance */}
          <ContentBlock index={2}>
            {/* Text Section */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  {t("significance_title")}
                </h2>
                <div className="w-20 h-1 bg-black mb-8"></div>
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed font-light" style={{ whiteSpace: 'pre-line' }}>
                  {t("significance_description")}
                </p>
              </motion.div>
            </motion.div>
            
            {/* Image Section */}
            <div className="relative group">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-l from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="gallery.jpeg"
                  alt="Cultural Significance"
                  className="w-full h-[400px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </div>
          </ContentBlock>
        </div>
      </div>
    </>
  );
}

export default AboutMuseum;
