import React, { useState } from "react";
import {
    FaPlane,
    FaCar,
    FaTrain,
    FaMapMarkerAlt,
    FaClock,
    FaRoute,
    FaArrowRight,
    FaCheckCircle
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const TravelPage = () => {
    const [activeTab, setActiveTab] = useState("airplane");

    const travelData = {
        airplane: {
            title: "Journey by Air",
            icon: <FaPlane className="w-8 h-8" />,
            mainHub: "Gaya Airport (GAY)",
            distance: "25 km from museum",
            duration: "30-45 minutes drive",
            routes: [
                {
                    from: "New Delhi",
                    duration: "1h 30m",
                    frequency: "Daily flights",
                    airlines: "IndiGo, Air India"
                },
                {
                    from: "Kolkata",
                    duration: "1h 15m", 
                    frequency: "Daily flights",
                    airlines: "SpiceJet, IndiGo"
                },
                {
                    from: "Mumbai",
                    duration: "2h 20m",
                    frequency: "3 weekly",
                    airlines: "Air India"
                }
            ],
            finalStep: "Take taxi/cab from airport to museum (₹300-500)"
        },
        train: {
            title: "Journey by Rail",
            icon: <FaTrain className="w-8 h-8" />,
            mainHub: "Gaya Junction",
            distance: "8 km from museum",
            duration: "20-30 minutes drive",
            routes: [
                {
                    from: "New Delhi",
                    duration: "11-14 hours",
                    frequency: "Multiple daily",
                    airlines: "Rajdhani, Mahabodhi Exp"
                },
                {
                    from: "Kolkata",
                    duration: "8-10 hours",
                    frequency: "Daily trains",
                    airlines: "Howrah Exp, Gaya Exp"
                },
                {
                    from: "Patna",
                    duration: "3-4 hours",
                    frequency: "Multiple daily",
                    airlines: "Intercity, Passenger"
                }
            ],
            finalStep: "Auto-rickshaw or taxi from station (₹100-200)"
        },
        car: {
            title: "Journey by Road",
            icon: <FaCar className="w-8 h-8" />,
            mainHub: "NH 83 & SH 54",
            distance: "Direct access",
            duration: "Varies by origin",
            routes: [
                {
                    from: "Patna",
                    duration: "2.5-3 hours",
                    frequency: "110 km drive",
                    airlines: "Via NH 83"
                },
                {
                    from: "Ranchi",
                    duration: "4-5 hours",
                    frequency: "180 km drive", 
                    airlines: "Via NH 23"
                },
                {
                    from: "Varanasi",
                    duration: "5-6 hours",
                    frequency: "250 km drive",
                    airlines: "Via NH 2"
                }
            ],
            finalStep: "Direct parking available at museum premises"
        }
    };

    const currentTravel = travelData[activeTab];

    return (
        <div className="min-h-screen bg-white text-black font-sans">
            
            {/* Hero Section */}
            <section className="relative bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
                <div className="relative z-10 px-6 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-thin tracking-wider mb-4">
                            HOW TO
                            <span className="block font-bold">REACH</span>
                        </h1>
                        <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                        <p className="text-xl md:text-2xl font-light tracking-wide">
                            Buddha Samyak Darshan Museum & Stupa
                        </p>
                        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
                            X4VC+P25, Vaishali, Basarh, Bihar 844128
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Navigation Tabs */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex justify-center mb-8">
                        <div className=" p-2 ">
                            {Object.entries(travelData).map(([key, data]) => (
                                <motion.button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                        flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300
                                        ${activeTab === key 
                                            ? "bg-black text-white shadow-lg" 
                                            : "text-gray-600 hover:text-black hover:bg-gray-100"
                                        }
                                    `}
                                >
                                    {data.icon}
                                    <span className="hidden sm:inline">{data.title}</span>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Header Info */}
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full mb-6">
                                    {currentTravel.icon}
                                    <h2 className="text-2xl font-semibold">{currentTravel.title}</h2>
                                </div>
                                
                                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                    <div className="text-center">
                                        <FaMapMarkerAlt className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                                        <h3 className="font-semibold mb-1">Main Hub</h3>
                                        <p className="text-gray-600">{currentTravel.mainHub}</p>
                                    </div>
                                    <div className="text-center">
                                        <FaRoute className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                                        <h3 className="font-semibold mb-1">Distance</h3>
                                        <p className="text-gray-600">{currentTravel.distance}</p>
                                    </div>
                                    <div className="text-center">
                                        <FaClock className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                                        <h3 className="font-semibold mb-1">Travel Time</h3>
                                        <p className="text-gray-600">{currentTravel.duration}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Routes Grid */}
                            <div className="grid lg:grid-cols-3 gap-8 mb-12">
                                {currentTravel.routes.map((route, index) => (
                                    <motion.div
                                        key={route.from}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-black transition-all duration-300 hover:shadow-xl group"
                                    >
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-xl font-bold">{route.from}</h3>
                                            <FaArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                                        </div>
                                        
                                        <div className="space-y-4">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Duration</span>
                                                <span className="font-semibold">{route.duration}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Frequency</span>
                                                <span className="font-semibold">{route.frequency}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Options</span>
                                                <span className="font-semibold text-right text-sm">{route.airlines}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Final Step */}
                            <div className="bg-black text-white rounded-3xl p-8 text-center">
                                <FaCheckCircle className="w-12 h-12 mx-auto mb-4" />
                                <h3 className="text-2xl font-semibold mb-4">Final Step</h3>
                                <p className="text-xl font-light">{currentTravel.finalStep}</p>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

        </div>
    );
};

export default TravelPage;
