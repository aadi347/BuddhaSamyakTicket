import React from "react";
import { FaClock, FaTicketAlt } from "react-icons/fa";

const exhibitions = [
    {
        title: "Hiroshige",
        subtitle: "artist of the open road",
        date: "1 May – 7 September 2025",
        image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/705435/1582576/main-image",
    },
    {
        title: "Ancient India",
        subtitle: "living traditions",
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
                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                        <FaTicketAlt className="text-lg" />
                        <span>
                            Free entry – <u>book online</u>
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaClock className="text-lg" />
                        <span>Open today: 10.00–17.00</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaClock className="text-lg" />
                        <span>Last entry: 16.45</span>
                    </div>
                </div>
            </div>

            {/* Exhibitions Section */}
            <div className="flex justify-between items-center mt-12 mb-6 ">
                <h2 className="text-3xl md:text-4xl font-semibold">Exhibitions and events</h2>
                <button className="text-white text-sm hover:underline">
                    See all exhibitions and events →
                </button>
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
