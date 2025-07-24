import React from "react";

// Individual Card Component
const VisitInformationCard = ({ description, imageUrl }) => {
  return (
    <div className="bg-white hover:bg-black hover:text-white transition-all duration-300 border border-gray-300 group rounded-lg overflow-hidden shadow-md">
      <div className="h-52 sm:h-60 md:h-64 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt="card visual"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <p className="text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Main Component
const VisitInformation = () => {
  const visitOptions = [
    {
      description:
        "Book tickets and plan your day including exhibitions, facilities, access, food and travel.",
      imageUrl:
        "https://www.museumnext.com/wp-content/uploads/2022/01/museums_wellbeing_self_confidence-e1654708663370.jpg",
    },
    {
      description:
        "Navigate the Museum with ease, using our floor-by-floor plan and discover what not to miss.",
      imageUrl:
        "https://assets.vogue.com/photos/5f3ab0ac038d1aea7980c03c/master/w_2560%2Cc_limit/GettyImages-873665400.jpg",
    },
    {
      description:
        "Walk through two million years of history and culture across more than 50 galleries.",
      imageUrl:
        "https://observer.com/wp-content/uploads/sites/2/2024/07/Crystal-Bridges-Museum.jpeg?quality=80&w=970",
    },
    {
      description:
        "From family facilities to activities and events, discover how to make the most of your day at the Museum.",
      imageUrl:
        "https://cdn.sanity.io/images/cxgd3urn/production/cc18d6f637a5e8b4208395a79ae19a17742c3aa9-2320x1473.jpg?w=1200&h=762&q=85&fit=crop&auto=format",
    },
  ];

  return (
    <div className="bg-black w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">
          Visit the Museum
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visitOptions.map((option, index) => (
            <VisitInformationCard
              key={index}
              description={option.description}
              imageUrl={option.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisitInformation;
