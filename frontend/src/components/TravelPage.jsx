import React, { useState } from "react";
import {
    FaPlane,
    FaCar,
    FaTrain,
    FaMapMarkerAlt,
    FaClock,
    FaMoneyBillWave,
    FaInfoCircle,
    FaDirections
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import Navbar from "./Navbar";
import Footer from "./Footer";

const TravelPage = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState("airplane");

    const travelData = {
        airplane: {
            title: t("byAir"),
            icon: <FaPlane className="w-5 h-5" />,
            mainHub: "Patna Airport (PAT)",
            distance: "55 km",
            duration: "1 hour",
            costRange: "₹800-1200 (taxi)",
            description: t("airDescription"),
            routes: [
                {
                    from: t("newDelhi"),
                    duration: "2h 15m",
                    frequency: t("daily"),
                    cost: "₹4,500-9,000",
                    airlines: "IndiGo, Air India, SpiceJet",
                    bookingTip: t("multipleDailyFlights")
                },
                {
                    from: t("kolkata"),
                    duration: "1h 30m",
                    frequency: t("daily"),
                    cost: "₹3,800-7,000",
                    airlines: "IndiGo, SpiceJet",
                    bookingTip: t("earlyMorningCheaper")
                },
                {
                    from: t("mumbai"),
                    duration: "2h 45m",
                    frequency: t("daily"),
                    cost: "₹5,500-12,000",
                    airlines: "Air India, IndiGo",
                    bookingTip: t("connectViaDelhi")
                }
            ],
            alternateHub: {
                name: "Gaya Airport (GAY)",
                distance: "25 km",
                duration: "30 min",
                note: "Limited flights but closer to museum"
            },
            localTransport: [
                { option: t("prepaidTaxi"), cost: "₹1000-1200", time: "1 hour", note: t("fromPatnaAirport") },
                { option: t("privateCab"), cost: "₹800-1000", time: "1 hour", note: t("olaUberAvailable") },
                { option: t("airportBusLocal"), cost: "₹200-300", time: "2 hours", note: t("budgetOptionTransfers") }
            ],
            tips: [
                t("patnaAirportTip"),
                t("prebookTaxiTip"),
                t("gayaAirportTip")
            ]
        },
        train: {
            title: t("byTrain"),
            icon: <FaTrain className="w-5 h-5" />,
            mainHub: "Vaishali Railway Station",
            distance: "12 km",
            duration: "25 min",
            costRange: "₹150-250 (auto/taxi)",
            description: t("trainDescription"),
            routes: [
                {
                    from: t("patna"),
                    duration: "1.5-2 hours",
                    frequency: t("multipleDaiy"),
                    cost: "₹50-200",
                    airlines: "Passenger, MEMU trains",
                    bookingTip: t("frequentLocalTrains")
                },
                {
                    from: t("newDelhi"),
                    duration: "12-15 hours",
                    frequency: t("daily"),
                    cost: "₹500-3500",
                    airlines: "Connect via Patna Junction",
                    bookingTip: t("takeMainLineTrain")
                },
                {
                    from: t("kolkata"),
                    duration: "10-12 hours",
                    frequency: t("daily"),
                    cost: "₹400-2500",
                    airlines: "Connect via Patna Junction",
                    bookingTip: t("directTrainsPatna")
                }
            ],
            localTransport: [
                { option: t("autoRickshaw"), cost: "₹120-180", time: "25 min", note: t("sharedAutosAvailable") },
                { option: t("taxiCab"), cost: "₹200-250", time: "20 min", note: t("moreComfortableOption") },
                { option: t("localBus"), cost: "₹30-50", time: "35 min", note: t("budgetFriendly") }
            ],
            tips: [
                t("vaishaliStationTip"),
                t("keepTicketsSafeTip"),
                t("localTrainsCrowdedTip")
            ]
        },
        car: {
            title: t("byRoad"),
            icon: <FaCar className="w-5 h-5" />,
            mainHub: "NH 77 & SH 54",
            distance: t("directAccess"),
            duration: "Varies",
            costRange: "Fuel + Tolls",
            description: t("roadDescription"),
            routes: [
                {
                    from: t("patna"),
                    duration: "1.5-2 hours",
                    frequency: "65 km",
                    cost: "₹600-900",
                    airlines: "Via NH 77",
                    bookingTip: t("wellMaintainedHighway")
                },
                {
                    from: t("muzaffarpur"),
                    duration: "45-60 minutes",
                    frequency: "35 km",
                    cost: "₹300-500",
                    airlines: "Via SH 54",
                    bookingTip: t("shortestRoute")
                },
                {
                    from: t("darbhanga"),
                    duration: "2-2.5 hours",
                    frequency: "80 km",
                    cost: "₹800-1200",
                    airlines: "Via SH 56 & NH 77",
                    bookingTip: t("scenicRoute")
                }
            ],
            localTransport: [
                { option: t("ownVehicle"), cost: t("fuelOnly"), time: t("directAccess"), note: t("freeParkingMuseum") },
                { option: t("rentalCar"), cost: "₹2500-4000/day", time: t("directAccess"), note: t("withoutDriver") },
                { option: t("taxiRoundTrip"), cost: "₹10-15/km", time: t("directAccess"), note: t("negotiateFullDay") }
            ],
            tips: [
                t("gpsRecommendedTip"),
                t("carryEmergencyKitTip"),
                t("fuelStationsAvailableTip")
            ]
        }
    };

    const currentTravel = travelData[activeTab];

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            {/* Compact Header Section */}
            <section className="bg-black py-12">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-light mb-4 tracking-wide">
                            {t("howToReach")}
                        </h1>
                        <p className="text-xl text-gray-300 mb-2">
                            {t("buddhaMuseumLocation")}
                        </p>
                        <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
                            <FaMapMarkerAlt className="w-4 h-4" />
                            {t("museumAddress")}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Compact Transport Mode Selection */}
            <section className="py-8 bg-gray-900">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Object.entries(travelData).map(([key, data]) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`
                                    p-4 rounded-xl border transition-all duration-300 text-left backdrop-blur-sm
                                    ${activeTab === key
                                    ? "border-gray-400 bg-gray-800/50 text-white"
                                    : "border-gray-700 bg-gray-800/20 hover:border-gray-600 hover:bg-gray-800/30"
                                }
                                `}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    {data.icon}
                                    <h3 className="text-lg font-medium">{data.title}</h3>
                                </div>
                                <p className={`text-sm ${activeTab === key ? 'text-gray-300' : 'text-gray-400'}`}>
                                    {data.description}
                                </p>
                                <div className="mt-3 flex items-center justify-between text-sm">
                                    <span className="text-gray-300">{data.distance}</span>
                                    <span className="text-gray-300">{data.duration}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compact Detailed Information */}
            <section className="py-12">
                <div className="max-w-5xl mx-auto px-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Compact Overview */}
                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                    <div className="bg-gray-800/50 rounded-lg p-3">
                                        <FaMapMarkerAlt className="w-5 h-5 mx-auto mb-2 text-gray-400" />
                                        <h4 className="font-medium text-sm mb-1 text-white">{t("mainHub")}</h4>
                                        <p className="text-xs text-gray-300">{currentTravel.mainHub}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-3">
                                        <FaDirections className="w-5 h-5 mx-auto mb-2 text-gray-400" />
                                        <h4 className="font-medium text-sm mb-1 text-white">{t("distance")}</h4>
                                        <p className="text-xs text-gray-300">{currentTravel.distance}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-3">
                                        <FaClock className="w-5 h-5 mx-auto mb-2 text-gray-400" />
                                        <h4 className="font-medium text-sm mb-1 text-white">{t("travelTime")}</h4>
                                        <p className="text-xs text-gray-300">{currentTravel.duration}</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-3">
                                        <FaMoneyBillWave className="w-5 h-5 mx-auto mb-2 text-gray-400" />
                                        <h4 className="font-medium text-sm mb-1 text-white">{t("localCost")}</h4>
                                        <p className="text-xs text-gray-300">{currentTravel.costRange}</p>
                                    </div>
                                </div>

                                {/* Alternate Hub for Air Travel */}
                                {activeTab === 'airplane' && currentTravel.alternateHub && (
                                    <div className="mt-4 p-3 bg-gray-700/50 backdrop-blur-sm rounded-lg border border-gray-600">
                                        <h4 className="font-medium mb-1 text-white text-sm">{t("alternativeAirport")}</h4>
                                        <p className="text-xs text-gray-300">
                                            <strong>{currentTravel.alternateHub.name}</strong> - {currentTravel.alternateHub.distance} ({currentTravel.alternateHub.duration})<br />
                                            <em>{currentTravel.alternateHub.note}</em>
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Compact Routes */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-medium mb-6 text-center text-white">{t("popularRoutes")}</h2>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                    {currentTravel.routes.map((route, index) => (
                                        <div key={route.from} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-gray-600 transition-all duration-300">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-lg font-medium text-white">{route.from}</h3>
                                                <span className="text-lg font-bold text-gray-300">{route.cost}</span>
                                            </div>

                                            <div className="space-y-2 mb-3 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-400">{t("duration")}:</span>
                                                    <span className="text-gray-300">{route.duration}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-400">{t("frequency")}:</span>
                                                    <span className="text-gray-300">{route.frequency}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-400">{t("options")}:</span>
                                                    <span className="text-gray-300 text-xs text-right">{route.airlines}</span>
                                                </div>
                                            </div>

                                            <div className="bg-gray-700/50 rounded-lg p-2 border border-gray-600">
                                                <div className="flex items-start gap-2">
                                                    <FaInfoCircle className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                                                    <p className="text-xs text-gray-300">{route.bookingTip}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Compact Local Transportation */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-medium mb-6 text-center text-white">{t("localTransportation")}</h2>
                                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
                                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700">
                                        {currentTravel.localTransport.map((transport, index) => (
                                            <div key={index} className="p-4">
                                                <h4 className="font-medium text-white mb-2">{transport.option}</h4>
                                                <div className="space-y-1 mb-2 text-sm">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-400">{t("cost")}:</span>
                                                        <span className="text-gray-300">{transport.cost}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-400">{t("time")}:</span>
                                                        <span className="text-gray-300">{transport.time}</span>
                                                    </div>
                                                </div>
                                                <p className="text-xs text-gray-400">{transport.note}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Compact Travel Tips */}
                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                                <h2 className="text-xl font-medium mb-4 flex items-center gap-3 text-white">
                                    <FaInfoCircle className="text-gray-400" />
                                    {t("travelTips")}
                                </h2>
                                <ul className="space-y-2">
                                    {currentTravel.tips.map((tip, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-sm text-gray-300">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
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
