import React, { useState } from "react";
import {
    FaPlane,
    FaCar,
    FaTrain,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { FaPlaneDeparture, FaMapMarkerAlt, FaRoad, FaClock } from "react-icons/fa";

const internationalAirports = [
    {
    name: "Indira Gandhi International Airport (DEL)",
    location: "New Delhi",
    distanceFromPatna: "1000 km",
    connectivity:
      "Global connectivity: USA, UK, Germany, Japan, Australia, UAE. Daily domestic flights to Gaya & Patna.",
    travelTime: "1.5h flight + 2h road / 12–14h train",
  },
  {
    name: "Gaya International Airport (GAY)",
    location: "Gaya, Bihar",
    distanceFromPatna: "100 km (≈2 hours by road)",
    connectivity:
      "Seasonal direct flights from Thailand, Myanmar, Bhutan, Sri Lanka, Vietnam. Domestic flights from Delhi & Kolkata.",
    travelTime: "≈25 minutes (12 km) to museum",
  },
   
  {
    name: "Netaji Subhas Chandra Bose International Airport (CCU)",
    location: "Kolkata, West Bengal",
    distanceFromPatna: "580 km",
    connectivity:
      "Flights from Bangkok, Dubai, London, Dhaka, Kathmandu, Kuala Lumpur. Easy domestic connections to Gaya & Patna.",
    travelTime: "1h flight to Gaya / 8–10h train or road to Bodh Gaya",
  },
 
  {
    name: "Chaudhary Charan Singh International Airport (LKO)",
    location: "Lucknow, Uttar Pradesh",
    distanceFromPatna: "520 km",
    connectivity:
      "Flights from Dubai, Jeddah, Bangkok, Sharjah. Daily domestic flights to Patna & Gaya.",
    travelTime: "1h flight / 10h train or road to Bodh Gaya",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TravelPage = () => {
    const [activeTab, setActiveTab] = useState("airplane");
    const [form, setForm] = useState({
        from: "",
        to: "",
        date: "",
        passengers: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Searching ${activeTab} from ${form.from} to ${form.to} on ${form.date}`);
    };

    const travelInfo = {
        airplane: {
            title: "Travel by Air",
            description:
                "Gaya International Airport (GAY) connects with Delhi, Varanasi, and Kolkata. Book a flight and use local transport to reach the Buddha Samyak Darshan Museum.",
            img: "/airways3.svg",
        },
        car: {
            title: "Travel by Road",
            description:
                "Gaya is accessible by highway. Hire private cabs or use buses from Patna, Ranchi, and other major cities to visit the museum comfortably.",
            img: "/ar.svg",
        },
        train: {
            title: "Travel by Train",
            description:
                "Gaya Junction offers excellent rail connectivity. From there, use autos or taxis to reach the museum within 30 minutes.",
            img: "train.svg",
        },
    };

    const { title, description, img } = travelInfo[activeTab];

    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white">
            {/* Hero Section */}
            <section className="text-center px-4 py-12">
                <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-black drop-shadow-xl tracking-wide">
                    HOW TO REACH
                </h1>
               
            </section>

            {/* Tabs */}
            <section className="flex justify-center mb-6">
                <div className="bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-md flex gap-3">
                    {[{ key: "airplane", icon: <FaPlane /> }, { key: "car", icon: <FaCar /> }, { key: "train", icon: <FaTrain /> }].map((tab) => (
                        <motion.button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            whileHover={{ scale: 1.1 }}
                            className={`text-xl p-3 rounded-full transition-all duration-300 ${activeTab === tab.key
                                ? "bg-black text-white"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                                }`}
                        >
                            {tab.icon}
                        </motion.button>
                    ))}
                </div>
            </section>

            {/* Large Image */}
            <section className="px-6 sm:px-10 lg:px-32">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={img}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-3xl overflow-hidden  mb-10"
                    >
                        <img
                            src={img}
                            alt={title}
                            className="w-full h-[75vh] object-cover object-center"
                        />
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* Info + Form + Map Section */}
            <section className="px-6 sm:px-10 lg:px-32 pb-16">
                <section className="px-6 sm:px-10 lg:px-32 pb-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white tracking-wide">
        Nearest International Airports
      </h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {internationalAirports.map((airport, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="group rounded-3xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <FaPlaneDeparture className="text-black group-hover:scale-110 transition-transform duration-300" />
              {airport.name}
            </h3>

            <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-black" />
                <span>
                  <strong>Location:</strong> {airport.location}
                </span>
              </p>
              <p className="flex items-start gap-2">
                <FaRoad className="mt-1 text-black" />
                <span>
                  <strong>Distance from Patna:</strong> {airport.distanceFromPatna}
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-black mt-1">✈️</span>
                <span>
                  <strong>Connectivity:</strong> {airport.connectivity}
                </span>
              </p>
              <p className="flex items-start gap-2">
                <FaClock className="mt-1 text-black" />
                <span>
                  <strong>Travel Time to Museum:</strong> {airport.travelTime}
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
            </section>


        </div>
        </>
    );
};

export default TravelPage;
