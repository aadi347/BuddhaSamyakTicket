import React from "react";
import { FaClock, FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const exhibitions = [
    {
        title: "Hiroshige",
        subtitle: "artist of the open road",
        description: "Experience Edo-period Japan through Hiroshige’s iconic landscapes.",
        date: "1 May – 7 September 2025",
        image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/705435/1582576/main-image",
    },
    {
        title: "Ancient India",
        subtitle: "living traditions",
        description: "Explore the enduring cultural practices and sacred art of India.",
        date: "22 May – 19 October 2025",
        image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/38615/1331596/main-image",
    },
];


const MuseumShowcase = () => {
    return (
        <div className="bg-black text-white px-6 md:px-16 py-12 font-sans">
            {/* Top Hero Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-10 border-b border-gray-700">
                <div>
                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Uncover the journey of Samyak<br />
                        through Bihar’s culture and legacy

                    </h1>
                </div>
                <div className="space-y-3 text-base md:text-lg text-white font-medium">
  {/* Ticket Info */}
  <div className="flex items-center gap-3 group transition-transform hover:scale-[1.02]">
    <FaTicketAlt className="text-xl group-hover:rotate-[-10deg] transition-transform duration-300" />
    <span className="cursor-pointer">
      Free entry – <span className="font-semibold">book online</span>
    </span>
  </div>

  {/* Open Time */}
  <div className="flex items-center gap-3 group transition-transform hover:scale-[1.02]">
    <FaClock className="text-xl group-hover:rotate-[10deg] transition-transform duration-300" />
    <span>Open today: <strong>10.00–17.00</strong></span>
  </div>

  {/* Last Entry */}
  <div className="flex items-center gap-3 group transition-transform hover:scale-[1.02]">
    <FaClock className="text-xl group-hover:rotate-[10deg] transition-transform duration-300" />
    <span>Last entry: <strong>16.45</strong></span>
  </div>
</div>

            </div>

            {/* Exhibitions Section */}
            <div className="flex justify-between items-center mt-12 mb-6 ">
                <h2 className="text-3xl md:text-4xl font-semibold">Exhibitions and events</h2>
                <Link to="/exhibitions" className="text-white text-sm hover:underline">
                    See all exhibitions and events →
                </Link>

            </div>

            <div className="grid md:grid-cols-2 gap-10  ">
                {exhibitions.map((item, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-xl bg-black shadow-xl transition-transform duration-300 hover:scale-[1.01]"
                    >
                        <div className="flex h-[440px] ">
                            {/* Text Content */}
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
                                    <p className="text-sm group-hover:text-black text-gray-300 mt-1">
                                        {item.date}
                                    </p>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="w-1/2 overflow-hidden ">
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
            <div className="border-b border-gray-700 pt-20">

            </div>
        </div>
    );
};

export default MuseumShowcase;
