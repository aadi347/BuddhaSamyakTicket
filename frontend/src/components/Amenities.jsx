import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

// Card Component
const VisitInformationCard = ({ title, description, imageUrl, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    className="bg-white hover:bg-black hover:text-white transition-all duration-300 hover:border hover:border-gray-500/30 group rounded-lg overflow-hidden shadow-md"
  >
    <div className="h-52 sm:h-60 md:h-64 w-full overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

// Main Component
const Amenities = () => {
  const { t } = useTranslation();

  const visitOptions = [
    {
      title: t("Meditation Center"),
      description: t("Meditation Center Description"),
      imageUrl: "/meditationCenter.png",
    },
    {
      title: t("Visitor Center"),
      description: t("Visitor Center Description"),
      imageUrl: "/visitorsCenter.jpeg",
    },
    {
      title: t("Library"),
      description: t("Library Description"),
      imageUrl: "/library.png",
    },
    {
      title: t("Cafeteria"),
      description: t("Cafeteria Description"),
      imageUrl: "cafeteria2.jpeg",
    },
  ];

  return (
    <div className="bg-black w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-3xl font-bold">
            {t("Amenities")}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visitOptions.map((opt, idx) => (
            <VisitInformationCard
              key={idx}
              index={idx}
              title={opt.title}
              description={opt.description}
              imageUrl={opt.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
