import React from "react";

// Card Component
const VisitInformationCard = ({ title, description, imageUrl }) => (
  <div className="bg-white hover:bg-black hover:text-white transition-all duration-300 border border-gray-300 group rounded-lg overflow-hidden shadow-md">
    <div className="h-52 w-full overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-base leading-relaxed">{description}</p>
    </div>
  </div>
);

// Main Component
const VisitInformation = () => {
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
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-10">What’s Online</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visitOptions.map((opt, idx) => (
            <VisitInformationCard
              key={idx}
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

export default VisitInformation;
