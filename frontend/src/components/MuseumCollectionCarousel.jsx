import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";

// Slide content
const slides = [
  {
    title: "Seated Buddha - Sarnath",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZYBl8_WD_mWUjAXWlTHwyRmyF8lknHcGhw&s",
  },
  {
    title: "Bodhisattva Avalokiteshvara",
    image: "https://cdn.britannica.com/57/133057-050-AC74BBA2/Avalokiteshvara-bodhisattva-compassion-Mount-Jiuhua-China-province.jpg",
  },
  {
    title: "Amaravati Stupa Panel",
    image: "https://tricycle.org/wp-content/uploads/2025/06/Amaravati_Stupa_relief_at_Museum%E2%80%94-Amaravati-Maha-Stupa-relief-at-Museum-in-Chennai-India-scaled.jpg",
  },
  {
    title: "Birth of Buddha - Gandhara Style",
    image: "https://www.shutterstock.com/image-photo/osaka-japan-december-4-2023-260nw-2401947087.jpg",
  },
  {
    title: "Buddha Head - Mathura",
    image: "https://images.metmuseum.org/CRDImages/as/original/DP267831.jpg",
  },
  {
    title: "Buddha's First Sermon - Sarnath",
    image: "https://images.metmuseum.org/CRDImages/as/original/4%20DP314867r4_61A.jpg",
  },
];



// Parallax Card Component (no blur)
const ParallaxCard = ({ title, image }) => {
  return (
    <motion.div
      className="relative bg-black rounded-md overflow-hidden h-[400px] w-full cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      <motion.img
        src={image}
        alt={title}
        className="object-cover w-full h-full transition-transform duration-500"
        whileHover={{ scale: 1.1 }}
      />
      <div className="absolute inset-0 bg-black/30 flex items-end p-4">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
};

// Main Carousel
const ExploreCollectionCarousel = () => {
  return (
    <div className="bg-black py-12 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-3xl font-bold">Explore the collection</h2>
          <a href="#" className="text-white hover:underline flex items-center gap-1">
            See all →
          </a>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <ParallaxCard title={slide.title} image={slide.image} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="swiper-button-prev absolute top-1/2 left-0 z-10 transform -translate-y-1/2 text-white opacity-40 hover:opacity-100 transition-all duration-300 text-3xl px-2 cursor-pointer">
          <IoIosArrowBack />
        </div>
        <div className="swiper-button-next absolute top-1/2 right-0 z-10 transform -translate-y-1/2 text-white opacity-40 hover:opacity-100 transition-all duration-300 text-3xl px-2 cursor-pointer">
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default ExploreCollectionCarousel;
