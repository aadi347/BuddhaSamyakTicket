import React, { useEffect } from "react";




const exhibitionCards = [
  {
    title: "Hiroshige",
    subtitle: "artist of the open road",
    description: "Experience the beauty of Edo-period Japan through Hiroshige's masterful prints.",
    date: "1 May – 7 September 2025",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/705435/1582576/main-image",
  },
  {
    title: "Ancient India",
    subtitle: "living traditions",
    description: "Delve into centuries of vibrant Indian cultural traditions and heritage.",
    date: "22 May – 19 October 2025",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/38615/1331596/main-image",
  },
  {
    title: "The Maurya Legacy",
    subtitle: "Rise of Empire",
    description: "Uncover the foundations of one of India’s greatest empires and its cultural zenith.",
    date: "12 June – 28 October 2025",
    image: "https://images.metmuseum.org/CRDImages/as/original/DP234170.jpg",
  },
  {
    title: "Nalanda Rediscovered",
    subtitle: "A Buddhist revival",
    description: "Journey into the rediscovery of Nalanda, the ancient center of learning and faith.",
    date: "5 July – 15 November 2025",
    image: "https://images.metmuseum.org/CRDImages/as/original/DP131206.jpg",
  },
  {
    title: "The Gupta Aesthetics",
    subtitle: "Art and Enlightenment",
    description: "Explore a golden age of Indian art and intellectual achievement.",
    date: "10 August – 5 December 2025",
    image: "https://images.metmuseum.org/CRDImages/as/original/DP251139.jpg",
  },
  {
    title: "The Sacred Path",
    subtitle: "Pilgrimages in India",
    description: "Discover the spiritual landscapes that define sacred Indian journeys.",
    date: "20 September – 31 December 2025",
    image: "https://images.metmuseum.org/CRDImages/as/original/DP214456.jpg",
  },
];

const ExhibitionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white px-6 md:px-16 py-12 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-12 pb-12">
        {/* Left Description */}
        <div className="md:w-1/3">
          <h2 className="text-4xl font-semibold mb-4">Exhibitions & Events</h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Dive deep into our seasonal and permanent exhibitions. Explore artistic expressions from across centuries, ancient civilizations, and spiritual journeys through curated visuals and historical storytelling.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-10 md:w-2/3 w-full">
          {exhibitionCards.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl bg-black shadow-xl transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="flex h-[440px]">
                {/* Text */}
                <div className="w-1/2 p-8 flex flex-col justify-between transition-all duration-300 group-hover:bg-white">
                  <div>
                    <h3 className="text-white group-hover:text-black text-2xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-black mt-1 text-lg">
                      {item.subtitle}
                    </p>
                    {item.description && (
                      <p className="text-gray-400 group-hover:text-black mt-2 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div>
                    <p className="text-sm group-hover:text-black text-gray-400">Exhibition</p>
                    <p className="text-sm group-hover:text-black text-gray-300 mt-1">{item.date}</p>
                  </div>
                </div>

                {/* Image */}
                <div className="w-1/2 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-r-xl transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExhibitionPage;
