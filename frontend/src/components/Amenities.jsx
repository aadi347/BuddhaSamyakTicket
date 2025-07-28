import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Card Component
const VisitInformationCard = ({ title, description, imageUrl, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    className="bg-white hover:bg-black hover:text-white  transition-all duration-300 hover:border hover:border-gray-500/30 group rounded-lg overflow-hidden shadow-md"
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
      <p className="text-base text-gray-600  leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

// Main Component
const Amenities = () => {
  const visitOptions = [
    {
    title: "Meditation Center",
    description:
      "Experience tranquility in our serene meditation halls designed to help you reflect and reconnect with inner peace.",
    imageUrl: "/meditationCenter.png",
  },
  {
    title: "Visitor Center",
    description:
      "Begin your journey here with essential information, guided assistance, and a preview of everything the site has to offer.",
    imageUrl: "/visitorsCenter.jpeg",
  },
  {
    title: "Library",
    description:
      "Discover ancient scriptures, Buddhist texts, and historical manuscripts in a peaceful and scholarly setting.",
    imageUrl: "/library.png",
  },
  {
    title: "Cafeteria",
    description:
      "Relax and recharge with a variety of wholesome meals and beverages in our clean and comfortable dining space.",
    imageUrl: "Cafeteria.webp",
  },
  ];

  return (
    <div className="bg-black w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       < div className="flex justify-between items-center mb-8">
                  <h2 className="text-white text-3xl font-bold">
                    Amenities
                  </h2>
                  {/* <Link
                    to="/collection"
                    className="text-white hover:underline flex items-center gap-1"
                  >
                    See all →
                  </Link> */}
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
