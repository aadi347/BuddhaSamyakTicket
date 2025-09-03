import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ExploreMore() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const content = [
    { 
      title: "Buddha Samyak Darshan", 
      url: "/bgImage.jpeg",
      description: "Main stupa and museum complex showcasing Buddhist heritage"
    },
    { 
      title: "Visitors Center", 
      url: "visitorsCenter.jpeg",
      description: "Modern facilities for guest orientation and information"
    },
    { 
      title: "Ancient Artifacts", 
      url: "/bgImage.jpeg",
      description: "Historical relics and archaeological discoveries"
    },
    { 
      title: "Meditation Hall", 
      url: "/bgImage.jpeg",
      description: "Peaceful space for contemplation and prayer"
    },
    { 
      title: "Sacred Gardens", 
      url: "/bgImage.jpeg",
      description: "Beautifully landscaped grounds for reflection"
    },
    { 
      title: "Cultural Exhibits", 
      url: "/bgImage.jpeg",
      description: "Interactive displays of Buddhist culture"
    },
    { 
      title: "Pilgrimage Path", 
      url: "/bgImage.jpeg",
      description: "Traditional walking route around the stupa"
    },
    { 
      title: "Research Library", 
      url: "/bgImage.jpeg",
      description: "Extensive collection of Buddhist literature"
    },
    { 
      title: "Prayer Wheels", 
      url: "/bgImage.jpeg",
      description: "Traditional Tibetan prayer wheels installation"
    },
    { 
      title: "Lotus Pond", 
      url: "/bgImage.jpeg",
      description: "Serene water feature with sacred lotus flowers"
    }
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % content.length 
      : (currentImageIndex - 1 + content.length) % content.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(content[newIndex]);
  };

  // Fixed Bento grid layout configuration
  const getBentoLayout = (index) => {
    const layouts = [
      { cols: 8, rows: 2 },  // Large feature
      { cols: 4, rows: 1 },  // Small top right
      { cols: 4, rows: 1 },  // Small bottom right
      { cols: 6, rows: 1 },  // Medium left
      { cols: 6, rows: 1 },  // Medium right
      { cols: 4, rows: 2 },  // Tall left
      { cols: 8, rows: 1 },  // Wide right
      { cols: 12, rows: 1 }, // Full width
      { cols: 6, rows: 1 },  // Medium left
      { cols: 6, rows: 1 }   // Medium right
    ];
    return layouts[index % layouts.length];
  };

  const getItemStyle = (index) => {
    const layout = getBentoLayout(index);
    const heights = {
      1: 'h-[280px]',
      2: 'h-[576px]'  // 280 * 2 + gap
    };
    
    return {
      gridColumn: `span ${layout.cols}`,
      gridRow: `span ${layout.rows}`,
      height: heights[layout.rows]
    };
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-black text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-thin tracking-wider mb-6"
          >
            EXPLORE
            <span className="block font-bold">MORE</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-white mx-auto mb-8"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto"
          >
            Discover the beauty, heritage, and spiritual essence of Buddha Samyak Darshan Museum through our curated gallery
          </motion.p>
        </div>
      </div>

      {/* Bento Grid Gallery */}
      <div className="bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Fixed Grid Container */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {content.map((item, index) => {
              const itemStyle = getItemStyle(index);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  style={{
                    gridColumn: itemStyle.gridColumn,
                    gridRow: itemStyle.gridRow
                  }}
                  onClick={() => openModal(item, index)}
                >
                  <div className={`${itemStyle.height} relative rounded-3xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-800`}>
                    
                    {/* Image */}
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Always visible overlay for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Enhanced hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                    
                    {/* Content Overlay - Always visible on mobile, hover on desktop */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-white">
                      {/* Mobile: Always visible */}
                      <div className="md:hidden">
                        <h3 className="text-lg font-bold mb-1 drop-shadow-lg">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-200 opacity-90">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Desktop: Hover effect */}
                      <div className="hidden md:block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="text-xl lg:text-2xl font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm lg:text-base text-gray-200 mb-4 line-clamp-3">
                          {item.description}
                        </p>
                        
                        {/* Expand Icon */}
                        <div className="flex justify-end">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors duration-300">
                            <FaExpand className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal for Image Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <div className="relative w-full max-w-5xl">
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-black/70 transition-all duration-300"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-black/70 transition-all duration-300"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="aspect-video relative bg-gray-100">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {selectedImage.description}
                  </p>
                  
                  {/* Image Counter */}
                  <div className="mt-6 text-center">
                    <span className="text-sm text-gray-400">
                      {currentImageIndex + 1} of {content.length}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default ExploreMore;
