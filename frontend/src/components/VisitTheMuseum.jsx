import React from "react";
import { useTranslation } from "react-i18next";

// Individual Card Component
const VisitInformationCard = ({ description, imageUrl, heading }) => (
  <div className="bg-white hover:bg-black hover:text-white transition-all duration-300 hover:border hover:border-gray-500/30 group rounded-lg overflow-hidden shadow-md">
    <div className="h-52 sm:h-60 md:h-64 w-full overflow-hidden">
      <img
        src={imageUrl}
        alt="card visual"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-bold mb-3">{heading}</h3>
      <p className="text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

// Main Component
const VisitTheMuseum = () => {
  const { t } = useTranslation();

  const visitOptions = [
    {
      heading: t("visit_option_ticket_heading1"),
      description: t("visit_option_ticket_desc1"),
      imageUrl: "https://www.museumnext.com/wp-content/uploads/2022/01/museums_wellbeing_self_confidence-e1654708663370.jpg",
    },
    {
      heading: t("visit_option_verify_heading1"),
      description: t("visit_option_verify_desc1"),
      imageUrl: "https://assets.vogue.com/photos/5f3ab0ac038d1aea7980c03c/master/w_2560%2Cc_limit/GettyImages-873665400.jpg",
    },
    {
      heading: t("visit_option_highlights_heading1"),
      description: t("visit_option_highlights_desc1"),
      imageUrl: "https://observer.com/wp-content/uploads/sites/2/2024/07/Crystal-Bridges-Museum.jpeg?quality=80&w=970",
    },
    {
      heading: t("visit_option_amenities_heading1"),
      description: t("visit_option_amenities_desc1"),
      imageUrl: "https://cdn.sanity.io/images/cxgd3urn/production/cc18d6f637a5e8b4208395a79ae19a17742c3aa9-2320x1473.jpg?w=1200&h=762&q=85&fit=crop&auto=format",
    },
  ];

  return (
    <div className="bg-black w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">
          {t("visit_the_museum_title1")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visitOptions.map((option, idx) => (
            <VisitInformationCard
              key={idx}
              heading={option.heading}
              description={option.description}
              imageUrl={option.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisitTheMuseum;
