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
            img: "https://news.mit.edu/sites/default/files/images/202408/MIT_Airline-Safety-01.jpg",
        },
        car: {
            title: "Travel by Road",
            description:
                "Gaya is accessible by highway. Hire private cabs or use buses from Patna, Ranchi, and other major cities to visit the museum comfortably.",
            img: "https://images.unsplash.com/photo-1532931899774-fbd4de0008fb?fm=jpg&q=60&w=3000",
        },
        train: {
            title: "Travel by Train",
            description:
                "Gaya Junction offers excellent rail connectivity. From there, use autos or taxis to reach the museum within 30 minutes.",
            img: "https://static.toiimg.com/photo/msid-92440904,width-96,height-65.cms",
        },
    };

    const { title, description, img } = travelInfo[activeTab];

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white">
            {/* Hero Section */}
            <section className="text-center px-4 py-12">
                <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 drop-shadow-xl tracking-wide">
                    HOW TO REACH
                </h1>
                <p className="text-xl font-medium mt-2 text-gray-600 dark:text-gray-300">
                    Buddha Samyak Darshan Museum
                </p>
                <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                    Explore travel options via air, train, or road and plan your visit to this cultural and spiritual landmark.
                </p>
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
                                ? "bg-blue-600 text-white"
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
                        className="rounded-3xl overflow-hidden shadow-xl mb-10"
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
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Left Side: Info + Form */}
                    <div className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 space-y-6">
                        <h2 className="text-3xl font-semibold text-blue-700 dark:text-purple-300">
                            {title}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">{description}</p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="grid gap-4 text-black dark:text-white">
                            <input
                                name="from"
                                type="text"
                                placeholder="From"
                                value={form.from}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 dark:border-gray-600 p-3 rounded-xl shadow-sm"
                            />
                            <input
                                name="to"
                                type="text"
                                placeholder="To"
                                value={form.to}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 dark:border-gray-600 p-3 rounded-xl shadow-sm"
                            />
                            <input
                                name="date"
                                type="date"
                                value={form.date}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 dark:border-gray-600 p-3 rounded-xl shadow-sm"
                            />
                            <input
                                name="passengers"
                                type="number"
                                min="1"
                                value={form.passengers}
                                onChange={handleChange}
                                className="border border-gray-300 dark:border-gray-600 p-3 rounded-xl shadow-sm"
                                placeholder="Passengers"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold shadow-md"
                            >
                                Search {activeTab === "airplane" ? "Flights" : activeTab === "car" ? "Rides" : "Trains"}
                            </motion.button>
                        </form>
                    </div>

                    {/* Right Side: Map */}
                    <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                        <iframe
                            title="Buddha Samyak Darshan Museum Location"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14339.210530853977!2d85.136007!3d25.685895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed752fa588fc4f%3A0xb8de460f7a48dc96!2sBuddha%20Samyak%20Darshan%20Museum%20And%20Memorial%20Stupa!5e0!3m2!1sen!2sin!4v1721895373923!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>



                </div>
            </section>


        </div>
    );
};

export default TravelPage;
