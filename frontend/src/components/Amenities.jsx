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
      title: "Collection Online",
      description:
        "Access over five million objects with high‑definition images you can explore in detail.",
      imageUrl:
        "https://content.jdmagicbox.com/comp/def_content/museums/gyphhuhj4f-museums-7-jejqq.jpg",
    },
    {
      title: "Virtual Museum Tours",
      description:
        "Explore more than 60 galleries via virtual tours, including the Rosetta Stone and Egyptian Sculpture Gallery.",
      imageUrl:
        "https://content.jdmagicbox.com/comp/def_content/museums/7effij2pmq-museums-6-0yd38.jpg",
    },
    {
      title: "Podcasts & Blog",
      description:
        "Tune into Curator’s Corner and explore our podcast and blog for curator interviews and behind‑the‑scenes stories.",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/8d/9d/4b/caption.jpg?w=500&h=500&s=1",
    },
    {
      title: "Virtual Visits for Schools",
      description:
        "Live, interactive workshops for schools—explore ancient Egypt, Roman Britain, and more with expert educators.",
      imageUrl:
        "https://asset---north-carolina.bldg15.net/img/2/2/22045e1a-5e66-4a46-9d38-1da0c27ba328/North%20Carolina%20Museum%20of%20Art%20Gallery%20Interior%20with%20Woman-fit(1000,600).e5da5ebc.jpg",
    },
  ];

  return (
    <div className="bg-black w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       < div className="flex justify-between items-center mb-8">
                  <h2 className="text-white text-3xl font-bold">
                    Amenities
                  </h2>
                  <Link
                    to="/collection"
                    className="text-white hover:underline flex items-center gap-1"
                  >
                    See all →
                  </Link>
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
