import React, { useState } from "react";
import {
    FaPlane,
    FaCar,
    FaTrain,
    FaMapMarkerAlt,
    FaClock,
    FaMoneyBillWave,
    FaInfoCircle,
    FaPhone,
    FaDirections
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TravelPage = () => {
    const [activeTab, setActiveTab] = useState("airplane");

    const travelData = {
        airplane: {
            title: "By Air",
            icon: <FaPlane className="w-6 h-6" />,
            mainHub: "Patna Airport (PAT)",
            distance: "55 km",
            duration: "1 hour",
            costRange: "₹800-1200 (taxi)",
            description: "Nearest airport with excellent connectivity from major cities",
            routes: [
                {
                    from: "New Delhi",
                    duration: "2h 15m",
                    frequency: "Daily",
                    cost: "₹4,500-9,000",
                    airlines: "IndiGo, Air India, SpiceJet",
                    bookingTip: "Multiple daily flights - book 2 weeks ahead"
                },
                {
                    from: "Kolkata", 
                    duration: "1h 30m",
                    frequency: "Daily",
                    cost: "₹3,800-7,000",
                    airlines: "IndiGo, SpiceJet",
                    bookingTip: "Early morning flights are cheaper"
                },
                {
                    from: "Mumbai",
                    duration: "2h 45m", 
                    frequency: "Daily",
                    cost: "₹5,500-12,000",
                    airlines: "Air India, IndiGo",
                    bookingTip: "Connect via Delhi for better rates"
                }
            ],
            alternateHub: {
                name: "Gaya Airport (GAY)",
                distance: "25 km",
                duration: "30 min",
                note: "Limited flights but closer to museum"
            },
            localTransport: [
                { option: "Prepaid Taxi", cost: "₹1000-1200", time: "1 hour", note: "From Patna Airport" },
                { option: "Private Cab", cost: "₹800-1000", time: "1 hour", note: "Ola/Uber available" },
                { option: "Airport Bus + Local", cost: "₹200-300", time: "2 hours", note: "Budget option with transfers" }
            ],
            tips: [
                "Patna Airport has modern facilities and good connectivity",
                "Pre-book taxi or cab to avoid overcharging",
                "Alternative: Gaya Airport (25km) has limited flights but closer"
            ]
        },
        train: {
            title: "By Train",
            icon: <FaTrain className="w-6 h-6" />,
            mainHub: "Vaishali Railway Station",
            distance: "12 km",
            duration: "25 min",
            costRange: "₹150-250 (auto/taxi)",
            description: "Direct access to Vaishali - most convenient for museum visits",
            routes: [
                {
                    from: "Patna Junction",
                    duration: "1.5-2 hours",
                    frequency: "Multiple daily",
                    cost: "₹50-200",
                    airlines: "Passenger, MEMU trains",
                    bookingTip: "Frequent local trains - unreserved available"
                },
                {
                    from: "New Delhi",
                    duration: "12-15 hours",
                    frequency: "Daily",
                    cost: "₹500-3500",
                    airlines: "Connect via Patna Junction",
                    bookingTip: "Take main line train to Patna, then local"
                },
                {
                    from: "Kolkata",
                    duration: "10-12 hours",
                    frequency: "Daily",
                    cost: "₹400-2500",
                    airlines: "Connect via Patna Junction",
                    bookingTip: "Direct trains to Patna, then local connection"
                }
            ],
            localTransport: [
                { option: "Auto Rickshaw", cost: "₹120-180", time: "25 min", note: "Shared autos available" },
                { option: "Taxi/Cab", cost: "₹200-250", time: "20 min", note: "More comfortable option" },
                { option: "Local Bus", cost: "₹30-50", time: "35 min", note: "Budget friendly" }
            ],
            tips: [
                "Vaishali station is small but well connected to Patna",
                "Keep tickets safe for railway checking",
                "Local trains are frequent but can be crowded"
            ]
        },
        car: {
            title: "By Road",
            icon: <FaCar className="w-6 h-6" />,
            mainHub: "NH 77 & SH 54",
            distance: "Direct",
            duration: "Varies",
            costRange: "Fuel + Tolls",
            description: "Most flexible option with good road connectivity",
            routes: [
                {
                    from: "Patna",
                    duration: "1.5-2 hours",
                    frequency: "65 km",
                    cost: "₹600-900",
                    airlines: "Via NH 77",
                    bookingTip: "Well-maintained highway - avoid peak hours"
                },
                {
                    from: "Muzaffarpur",
                    duration: "45-60 minutes",
                    frequency: "35 km", 
                    cost: "₹300-500",
                    airlines: "Via SH 54",
                    bookingTip: "Shortest route with good road conditions"
                },
                {
                    from: "Darbhanga", 
                    duration: "2-2.5 hours",
                    frequency: "80 km",
                    cost: "₹800-1200",
                    airlines: "Via SH 56 & NH 77",
                    bookingTip: "Scenic route through rural Bihar"
                }
            ],
            localTransport: [
                { option: "Own Vehicle", cost: "Fuel only", time: "Direct", note: "Free parking at museum" },
                { option: "Rental Car", cost: "₹2500-4000/day", time: "Direct", note: "With/without driver" },
                { option: "Taxi (Round Trip)", cost: "₹10-15/km", time: "Direct", note: "Negotiate for full day" }
            ],
            tips: [
                "GPS navigation recommended for rural areas",
                "Carry emergency kit and phone charger",
                "Fuel stations available on NH 77"
            ]
        }
    };

    const currentTravel = travelData[activeTab];

    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />
            
            {/* Header Section */}
            <section className="bg-black text-white py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            How to Reach
                        </h1>
                        <p className="text-xl text-gray-300 mb-2">
                            Buddha Samyak Darshan Museum
                        </p>
                        <p className="text-gray-400 flex items-center justify-center gap-2">
                            <FaMapMarkerAlt className="w-4 h-4" />
                            Vaishali, Basarh, Bihar 844128
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Transport Mode Selection */}
            <section className="py-12 bg-gray-100">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Object.entries(travelData).map(([key, data]) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`
                                    p-6 rounded-2xl border-2 transition-all duration-300 text-left
                                    ${activeTab === key 
                                        ? "border-black bg-black text-white" 
                                        : "border-gray-300 bg-white hover:border-gray-500"
                                    }
                                `}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    {data.icon}
                                    <h3 className="text-xl font-bold">{data.title}</h3>
                                </div>
                                <p className={`text-sm ${activeTab === key ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {data.description}
                                </p>
                                <div className="mt-4 flex items-center justify-between text-sm">
                                    <span className="font-medium">{data.distance}</span>
                                    <span className="font-medium">{data.duration}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Information */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Overview */}
                            <div className="bg-gray-100 rounded-2xl p-8 mb-12">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                                    <div>
                                        <FaMapMarkerAlt className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                                        <h4 className="font-bold text-lg mb-2">Main Hub</h4>
                                        <p className="text-gray-700">{currentTravel.mainHub}</p>
                                    </div>
                                    <div>
                                        <FaDirections className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                                        <h4 className="font-bold text-lg mb-2">Distance</h4>
                                        <p className="text-gray-700">{currentTravel.distance}</p>
                                    </div>
                                    <div>
                                        <FaClock className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                                        <h4 className="font-bold text-lg mb-2">Travel Time</h4>
                                        <p className="text-gray-700">{currentTravel.duration}</p>
                                    </div>
                                    <div>
                                        <FaMoneyBillWave className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                                        <h4 className="font-bold text-lg mb-2">Local Cost</h4>
                                        <p className="text-gray-700">{currentTravel.costRange}</p>
                                    </div>
                                </div>

                                {/* Alternate Hub for Air Travel */}
                                {activeTab === 'airplane' && currentTravel.alternateHub && (
                                    <div className="mt-8 p-4 bg-gray-200 rounded-xl">
                                        <h4 className="font-bold mb-2">Alternative Airport</h4>
                                        <p className="text-sm text-gray-700">
                                            <strong>{currentTravel.alternateHub.name}</strong> - {currentTravel.alternateHub.distance} ({currentTravel.alternateHub.duration})<br />
                                            <em>{currentTravel.alternateHub.note}</em>
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Routes */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-8 text-center">Popular Routes</h2>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {currentTravel.routes.map((route, index) => (
                                        <div key={route.from} className="bg-white border-2 border-gray-300 rounded-2xl p-6 hover:border-black transition-all duration-300">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold">{route.from}</h3>
                                                <span className="text-2xl font-bold text-gray-800">{route.cost}</span>
                                            </div>
                                            
                                            <div className="space-y-3 mb-4">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Duration:</span>
                                                    <span className="font-medium">{route.duration}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Frequency:</span>
                                                    <span className="font-medium">{route.frequency}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Options:</span>
                                                    <span className="font-medium text-sm text-right">{route.airlines}</span>
                                                </div>
                                            </div>

                                            <div className="bg-gray-100 rounded-lg p-3">
                                                <div className="flex items-start gap-2">
                                                    <FaInfoCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                                                    <p className="text-sm text-gray-800">{route.bookingTip}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Local Transportation */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-8 text-center">Local Transportation</h2>
                                <div className="bg-white border-2 border-gray-300 rounded-2xl overflow-hidden">
                                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300">
                                        {currentTravel.localTransport.map((transport, index) => (
                                            <div key={index} className="p-6">
                                                <h4 className="font-bold text-lg mb-2">{transport.option}</h4>
                                                <div className="space-y-2 mb-4">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Cost:</span>
                                                        <span className="font-medium text-gray-800">{transport.cost}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Time:</span>
                                                        <span className="font-medium">{transport.time}</span>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-600">{transport.note}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Travel Tips */}
                            <div className="bg-gray-200 border border-gray-400 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <FaInfoCircle className="text-gray-600" />
                                    Travel Tips
                                </h2>
                                <ul className="space-y-3">
                                    {currentTravel.tips.map((tip, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-800">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Emergency Contacts */}
                            <div className="mt-12 bg-black text-white rounded-2xl p-8">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <FaPhone />
                                    Emergency Contacts
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="font-bold mb-2">Museum Helpline</h4>
                                        <p className="text-gray-300">+91-XXXX-XXXXXX</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2">Tourist Helpline Bihar</h4>
                                        <p className="text-gray-300">1363</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2">Police Emergency</h4>
                                        <p className="text-gray-300">100</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TravelPage;
