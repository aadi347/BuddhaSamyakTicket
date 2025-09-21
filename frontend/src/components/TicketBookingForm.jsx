import React, { useState, useEffect} from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import DateSelector from "./DateSelector";
import { Upload, Minus, Plus, User, Phone, Mail, Globe, Users, Baby, Clock, MapPin, Star, Camera, Wifi, Car, Building, Sun, Sunset } from "lucide-react";
import { BiError, BiInfoCircle } from "react-icons/bi";
import Ticket from "./Ticket";
import TicketBookingDialog from "./TicketBookingDialog";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CountrySelector from "./CountrySelector";
import { FaTicket } from "react-icons/fa6";


const TicketBookingForm = () => {
    const { t } = useTranslation();

    const steps = [t("personalInfo"), t("bookingDetails"), t("confirm")];

    const [showDialog, setShowDialog] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        date: "",
        sessionType: "",
        adults: "0",
        children: "0",
        country: "",
        email: "",
        ticketType: "individual", // individual or group
        isStudent: false,
        preIntentLetter: null,
        groupSize: "1"
    });

    // Check if user is a foreign national (not from India)
    const isForeignNational = () => {
        return formData.country && formData.country.toLowerCase() !== 'india';
    };

    // Enhanced ticket price calculation logic
    const calculateTicketPrice = () => {
        const adults = parseInt(formData.adults) || 0;
        const children = parseInt(formData.children) || 0;
        const isForeign = isForeignNational();

        let totalPrice = 0;

        // For now, all tickets are free as requested
        if (formData.ticketType === "group") {
            // Group tickets are free for now
            totalPrice = 0;
        } else {
            // Individual tickets are free for now
            totalPrice = 0;
        }

        // Student group tickets with pre-intent letter are always free
        if (formData.isStudent && formData.preIntentLetter && formData.ticketType === "group") {
            totalPrice = 0;
        }

        return totalPrice;
    };

    // Get ticket type display information
    const getTicketTypeInfo = () => {
        if (formData.ticketType === "group") {
            return {
                type: "Group Ticket",
                maxPersons: 250,
                price: 0 // Free for now
            };
        } else {
            const adults = parseInt(formData.adults) || 0;
            const children = parseInt(formData.children) || 0;
            const isForeign = isForeignNational();

            return {
                type: "Individual Tickets",
                adults: adults,
                children: children,
                isForeign: isForeign,
                price: 0 // Free for now
            };
        }
    };

    const validateStep = () => {
        const errors = {};

        if (step === 0) {
            if (!formData.fullName.trim()) errors.fullName = t("fullNameRequiredError");
            // Phone is now optional - removed validation
            if (!formData.country.trim()) errors.country = t("countryRequiredError");
            // Email is now mandatory
            if (
                !formData.email.trim() ||
                !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
            )
                errors.email = t("emailRequiredError");

            // Validate ticket type specific fields
            if (formData.ticketType === "group") {
                const groupSize = parseInt(formData.groupSize) || 0;
                if (groupSize < 1 || groupSize > 250) {
                    errors.groupSize = "Group size must be between 1 and 250 people";
                }
                // If student group, pre-intent letter is required for free tickets
                if (formData.isStudent && !formData.preIntentLetter) {
                    errors.preIntentLetter = "Pre-intent letter is required for student group tickets";
                }
            } else {
                // For individual tickets, at least one person must be selected
                const totalPersons = (parseInt(formData.adults) || 0) + (parseInt(formData.children) || 0);
                if (totalPersons < 1) {
                    errors.visitors = "Please select at least one visitor";
                }
            }
        }

        if (step === 1) {
            if (!formData.date) errors.date = t("dateRequiredError");
            if (!formData.sessionType) errors.sessionType = t("sessionTypeError");
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleNext = () => {
        if (validateStep()) {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        if (step > 0) setStep(step - 1);
    };

    const handleChange = (eOrType, op) => {
        if (typeof eOrType === "string") {
            setFormData((prev) => {
                const currentValue = Number(prev[eOrType]) || 0;
                const updatedValue =
                    op === "inc" ? currentValue + 1 : Math.max(0, currentValue - 1);
                return { ...prev, [eOrType]: updatedValue };
            });
        } else {
            const { name, value } = eOrType.target;
            setFormData((prev) => ({
                ...prev,
                [name]:
                    name === "adults" || name === "children" || name === "groupSize"
                        ? Number(value) : value,
            }));
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                preIntentLetter: file
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-4xl font-bold text-black mb-2"
                        >
                            {t("bookYourMuseumVisit")}
                        </motion.h1>
                        <p className="text-gray-600 text-lg">{t("experienceArtCulture")}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Left Sidebar */}
                        <div className="lg:col-span-3 space-y-6">

                            {/* Museum Hours */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-xl border border-gray-300 p-6"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-gray-700" />
                                    </div>
                                    <h3 className="font-semibold text-black">{t("openingHours")}</h3>
                                </div>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">{t("mondaySaturday")}</span>
                                        <span className="font-medium text-black">9:00 - 17:00</span>
                                    </div>
                                    <div className="flex justify-between border-t border-gray-200 pt-3">
                                        <span className="text-gray-400">{t("sunday")}</span>
                                        <span className="font-medium text-gray-400">{t("closed")}</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Updated Ticket Prices Widget */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-xl border border-gray-300 p-6"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <FaTicket />

                                    </div>
                                    <h3 className="font-semibold text-black">{t("ticketPrices")}</h3>
                                </div>
                                <div className="space-y-3 text-sm">
                                    {/* Current Status Banner */}
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                                        <div className="flex items-center gap-2">
                                            <Star className="w-4 h-4 text-green-600" />
                                            <span className="text-green-600 font-semibold">FREE ENTRY</span>
                                        </div>
                                        <p className="text-green-700 text-xs mt-1">All tickets are currently free!</p>
                                    </div>

                                    {/* Regular Pricing (for reference) */}
                                    <div className="text-xs text-gray-500 mb-2">Regular Pricing (Currently Free):</div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Adults (13+ years)</span>
                                        <span className="font-medium text-gray-500 line-through">₹50</span>
                                    </div>
                                    <div className="flex justify-between border-t border-gray-200 pt-3">
                                        <span className="text-gray-600">Children (5-12 years)</span>
                                        <span className="font-medium text-gray-500 line-through">₹25</span>
                                    </div>
                                    <div className="flex justify-between border-t border-gray-200 pt-3">
                                        <span className="text-gray-600">Foreign Nationals</span>
                                        <span className="font-medium text-gray-500 line-through">₹250</span>
                                    </div>
                                    <div className="flex justify-between border-t border-gray-200 pt-3">
                                        <span className="text-gray-600">Group Ticket (up to 250)</span>
                                        <span className="font-medium text-green-600">FREE</span>
                                    </div>
                                    <div className="flex justify-between border-t border-gray-200 pt-3">
                                        <span className="text-gray-600">Student Groups*</span>
                                        <span className="font-medium text-green-600">FREE</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">*With pre-intent letter</p>
                                </div>
                            </motion.div>

                            {/* Facilities */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-gray-100 rounded-xl p-6"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                                        <BiInfoCircle className="w-5 h-5 text-gray-700" />
                                    </div>
                                    <h3 className="font-semibold text-black">{t("facilities")}</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Wifi className="w-3 h-3" />
                                        <span>{t("freeWifi")}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Car className="w-3 h-3" />
                                        <span>{t("parking")}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Building className="w-3 h-3" />
                                        <span>{t("restrooms")}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Camera className="w-3 h-3" />
                                        <span>{t("photoZone")}</span>
                                    </div>
                                </div>
                            </motion.div>

                        </div>

                        {/* Main Form - Center */}
                        <div className="lg:col-span-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-2xl border border-gray-300 overflow-hidden"
                            >
                                {/* Step Progress Bar */}
                                <div className="bg-gradient-to-r from-gray-100 to-white px-8 py-6 border-b-2 border-gray-300">
                                    <div className="relative">
                                        <div className="flex justify-between items-center">
                                            {steps.map((label, i) => (
                                                <div key={i} className="flex flex-col items-center flex-1">
                                                    <div className="relative">
                                                        <div
                                                            className={`w-12 h-12 flex items-center justify-center rounded-full font-semibold text-sm transition-all duration-300 border-2 ${
                                                                step >= i
                                                                    ? "bg-black text-white border-black"
                                                                    : "bg-white text-gray-500 border-gray-300"
                                                            }`}
                                                        >
                                                            {i + 1}
                                                        </div>
                                                        {step >= i && (
                                                            <motion.div
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                className="absolute -top-1 -right-1 w-5 h-5 bg-black rounded-full flex items-center justify-center"
                                                            >
                                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                </svg>
                                                            </motion.div>
                                                        )}
                                                    </div>
                                                    <span
                                                        className={`text-sm mt-3 font-medium transition-colors duration-300 ${
                                                            step >= i ? "text-black" : "text-gray-400"
                                                        }`}
                                                    >
                            {label}
                          </span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="absolute top-6 left-[8%] w-[84%] h-0.5 bg-gray-200 -z-10">
                                            <motion.div
                                                className="h-0.5 bg-black"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(step / (steps.length - 1)) * 100}%` }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Form Content */}
                                <div className="p-8">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Step 1: Personal Information */}
                                        {step === 0 && (
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="space-y-6"
                                            >
                                                {/* Full Name */}
                                                <div>
                                                    <label className="block text-sm font-semibold text-black mb-2">
                                                        <User className="inline mr-2 w-4 h-4 text-gray-600" />
                                                        {t("fullNameRequired")}
                                                    </label>
                                                    <input
                                                        name="fullName"
                                                        type="text"
                                                        value={formData.fullName}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-0 focus:border-black transition-all duration-200 text-black placeholder-gray-400"
                                                        placeholder={t("enterFullName")}
                                                        required
                                                    />
                                                    {formErrors.fullName && (
                                                        <motion.p
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="text-red-600 bg-red-50 py-2 px-3 rounded-lg border border-gray-300 text-sm mt-2 flex items-center gap-2"
                                                        >
                                                            <BiError className="text-base flex-shrink-0" />
                                                            {formErrors.fullName}
                                                        </motion.p>
                                                    )}
                                                </div>

                                                {/* Phone (now optional) */}
                                                <div>
                                                    <label className="block text-sm font-semibold text-black mb-2">
                                                        <Phone className="inline mr-2 w-4 h-4 text-gray-600" />
                                                        Phone Number (Optional)
                                                    </label>
                                                    <input
                                                        name="phone"
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={(e) => {
                                                            // Only allow digits and limit to 10 characters
                                                            const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                                            handleChange({
                                                                target: {
                                                                    name: 'phone',
                                                                    value: value
                                                                }
                                                            });
                                                        }}
                                                        onKeyPress={(e) => {
                                                            // Prevent non-numeric input
                                                            if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab') {
                                                                e.preventDefault();
                                                            }
                                                        }}
                                                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-0 focus:border-black transition-all duration-200 text-black placeholder-gray-400"
                                                        placeholder={t("phoneNumberPlaceholder")}
                                                        maxLength={10}
                                                    />
                                                </div>

                                                {/* Country and Email Row */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <CountrySelector
                                                        value={formData.country}
                                                        onChange={(country) => setFormData(prev => ({ ...prev, country }))}
                                                        error={formErrors.country}
                                                    />
                                                    <div>
                                                        <label className="block text-sm font-semibold text-black mb-2">
                                                            <Mail className="inline mr-2 w-4 h-4 text-gray-600" />
                                                            Email Address (Required)
                                                        </label>
                                                        <input
                                                            name="email"
                                                            type="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-0 focus:border-black transition-all duration-200 text-black placeholder-gray-400"
                                                            placeholder={t("emailPlaceholder")}
                                                            required
                                                        />
                                                        {formErrors.email && (
                                                            <motion.p
                                                                initial={{ opacity: 0, y: -10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                className="text-red-600 bg-red-50 py-2 px-3 rounded-lg border border-gray-300 text-sm mt-2 flex items-center gap-2"
                                                            >
                                                                <BiError className="text-base flex-shrink-0" />
                                                                {formErrors.email}
                                                            </motion.p>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Foreign National Detection Alert */}
                                                {isForeignNational() && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="bg-blue-50 border border-blue-200 rounded-lg p-4"
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <Globe className="w-5 h-5 text-blue-600" />
                                                            <span className="text-blue-800 font-semibold">Foreign National Detected</span>
                                                        </div>
                                                        <p className="text-blue-700 text-sm mt-1">
                                                            You will be charged as a Foreign National. Regular price: ₹250 per person (Currently FREE)
                                                        </p>
                                                    </motion.div>
                                                )}

                                                {/* Ticket Type Selection */}
                                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-300">
                                                    <h3 className="text-lg font-semibold text-black mb-4">Ticket Type</h3>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="relative">
                                                            <input
                                                                className="peer sr-only"
                                                                id="individual"
                                                                type="radio"
                                                                name="ticketType"
                                                                value="individual"
                                                                checked={formData.ticketType === "individual"}
                                                                onChange={handleChange}
                                                            />
                                                            <label
                                                                htmlFor="individual"
                                                                className="flex items-center justify-between w-full p-4 bg-white border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 peer-checked:border-black peer-checked:bg-gray-50 transition-all duration-200"
                                                            >
                                                                <div className="flex items-center gap-3">
                                                                    <User className="w-5 h-5 text-gray-600" />
                                                                    <div>
                                                                        <span className="block font-semibold text-black">Individual Tickets</span>
                                                                        <span className="block text-sm text-gray-600">For individual visitors</span>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>

                                                        <div className="relative">
                                                            <input
                                                                className="peer sr-only"
                                                                id="group"
                                                                type="radio"
                                                                name="ticketType"
                                                                value="group"
                                                                checked={formData.ticketType === "group"}
                                                                onChange={handleChange}
                                                            />
                                                            <label
                                                                htmlFor="group"
                                                                className="flex items-center justify-between w-full p-4 bg-white border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 peer-checked:border-black peer-checked:bg-gray-50 transition-all duration-200"
                                                            >
                                                                <div className="flex items-center gap-3">
                                                                    <Users className="w-5 h-5 text-gray-600" />
                                                                    <div>
                                                                        <span className="block font-semibold text-black">Group Ticket</span>
                                                                        <span className="block text-sm text-gray-600">Up to 250 people</span>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Individual Ticket Visitor Count */}
                                                {formData.ticketType === "individual" && (
                                                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-300">
                                                        <h3 className="text-lg font-semibold text-black mb-4">{t("numberOfVisitors")}</h3>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            {/* Adults Counter */}
                                                            <div>
                                                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                                                    <Users className="inline mr-2 w-4 h-4 text-gray-600" />
                                                                    {isForeignNational() ? "Adults (Foreign Nationals)" : "Adults (13+ years)"}
                                                                </label>
                                                                <div className="flex items-center bg-white border border-gray-300 rounded-xl overflow-hidden">
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleChange("adults", "dec")}
                                                                        className="w-12 h-12 bg-gray-800 hover:bg-black text-white transition-colors duration-200 focus:outline-none flex items-center justify-center"
                                                                    >
                                                                        <Minus size={14} />
                                                                    </button>
                                                                    <div className="flex-1 px-4 py-3 text-center font-bold text-xl text-black bg-white">
                                                                        {formData.adults}
                                                                    </div>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleChange("adults", "inc")}
                                                                        className="w-12 h-12 bg-gray-800 hover:bg-black text-white transition-colors duration-200 focus:outline-none flex items-center justify-center"
                                                                    >
                                                                        <Plus size={14} />
                                                                    </button>
                                                                </div>
                                                                {isForeignNational() && (
                                                                    <p className="text-xs text-blue-600 mt-1">Foreign National rate applies</p>
                                                                )}
                                                            </div>

                                                            {/* Children Counter */}
                                                            <div>
                                                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                                                    <Baby className="inline mr-2 w-4 h-4 text-gray-600" />
                                                                    {isForeignNational() ? "Children (Foreign Nationals)" : "Children (5-12 years)"}
                                                                </label>
                                                                <div className="flex items-center bg-white border border-gray-300 rounded-xl overflow-hidden">
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleChange("children", "dec")}
                                                                        className="w-12 h-12 bg-gray-800 hover:bg-black text-white transition-colors duration-200 focus:outline-none flex items-center justify-center"
                                                                    >
                                                                        <Minus size={14} />
                                                                    </button>
                                                                    <div className="flex-1 px-4 py-3 text-center font-bold text-xl text-black bg-white">
                                                                        {formData.children}
                                                                    </div>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleChange("children", "inc")}
                                                                        className="w-12 h-12 bg-gray-800 hover:bg-black text-white transition-colors duration-200 focus:outline-none flex items-center justify-center"
                                                                    >
                                                                        <Plus size={14} />
                                                                    </button>
                                                                </div>
                                                                {isForeignNational() && (
                                                                    <p className="text-xs text-blue-600 mt-1">Foreign National rate applies</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                        {formErrors.visitors && (
                                                            <motion.p
                                                                initial={{ opacity: 0, y: -10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                className="text-red-600 bg-red-50 py-2 px-3 rounded-lg border border-gray-300 text-sm mt-2 flex items-center gap-2"
                                                            >
                                                                <BiError className="text-base flex-shrink-0" />
                                                                {formErrors.visitors}
                                                            </motion.p>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Group Ticket Configuration */}
                                                {formData.ticketType === "group" && (
                                                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-300">
                                                        <h3 className="text-lg font-semibold text-black mb-4">Group Details</h3>

                                                        {/* Group Size */}
                                                        <div className="mb-4">
                                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                                <Users className="inline mr-2 w-4 h-4 text-gray-600" />
                                                                Group Size (Max 250 people)
                                                            </label>
                                                            <input
                                                                name="groupSize"
                                                                type="number"
                                                                min="1"
                                                                max="250"
                                                                value={formData.groupSize}
                                                                onChange={handleChange}
                                                                className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-0 focus:border-black transition-all duration-200 text-black placeholder-gray-400"
                                                                placeholder="Enter group size"
                                                            />
                                                            {formErrors.groupSize && (
                                                                <motion.p
                                                                    initial={{ opacity: 0, y: -10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    className="text-red-600 bg-red-50 py-2 px-3 rounded-lg border border-gray-300 text-sm mt-2 flex items-center gap-2"
                                                                >
                                                                    <BiError className="text-base flex-shrink-0" />
                                                                    {formErrors.groupSize}
                                                                </motion.p>
                                                            )}
                                                        </div>

                                                        {/* Student Group Checkbox */}
                                                        <div className="mb-4">
                                                            <label className="flex items-center gap-3 cursor-pointer">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={formData.isStudent}
                                                                    onChange={(e) => setFormData(prev => ({ ...prev, isStudent: e.target.checked }))}
                                                                    className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                                                />
                                                                <span className="text-sm font-medium text-gray-700">This is a student group</span>
                                                            </label>
                                                        </div>

                                                        {/* Pre-intent Letter Upload for Student Groups */}
                                                        {formData.isStudent && (
                                                            <div>
                                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                                    <Upload className="inline mr-2 w-4 h-4 text-gray-600" />
                                                                    Pre-Intent Letter (Required for free student group tickets)
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    onChange={handleFileUpload}
                                                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                                                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-0 focus:border-black transition-all duration-200 text-black bg-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                                                                />
                                                                {formData.preIntentLetter && (
                                                                    <p className="text-sm text-green-600 mt-2">✓ File uploaded: {formData.preIntentLetter.name}</p>
                                                                )}
                                                                {formErrors.preIntentLetter && (
                                                                    <motion.p
                                                                        initial={{ opacity: 0, y: -10 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        className="text-red-600 bg-red-50 py-2 px-3 rounded-lg border border-gray-300 text-sm mt-2 flex items-center gap-2"
                                                                    >
                                                                        <BiError className="text-base flex-shrink-0" />
                                                                        {formErrors.preIntentLetter}
                                                                    </motion.p>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}

                                        {/* Step 2: Booking Details */}
                                        {step === 1 && (
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="space-y-6"
                                            >
                                                {/* Date Selection */}
                                                <div>
                                                    <DateSelector
                                                        value={formData.date}
                                                        onChange={(date) =>
                                                            setFormData((prev) => ({ ...prev, date }))
                                                        }
                                                    />
                                                    {formErrors.date && (
                                                        <motion.p
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="text-red-600 bg-red-50 py-2 px-3 rounded-lg border border-gray-300 text-sm mt-2 flex items-center gap-2"
                                                        >
                                                            <BiError className="text-base flex-shrink-0" />
                                                            {formErrors.date}
                                                        </motion.p>
                                                    )}
                                                </div>

                                                {/* Time Slot Selection */}
                                                <div>
                                                    <h3 className="text-lg font-semibold text-black mb-4">{t("chooseVisitTime")}</h3>
                                                    <div className="grid gap-4 sm:grid-cols-2">
                                                        {[
                                                            {
                                                                id: "radio_1",
                                                                label: t("morningSlot"),
                                                                value: "10:00 AM - 01:00 PM",
                                                                icon: Sun
                                                            },
                                                            {
                                                                id: "radio_2",
                                                                label: t("afternoonSlot"),
                                                                value: "01:00 PM - 05:00 PM",
                                                                icon: Sunset
                                                            },
                                                        ].map(({ id, label, value, icon: IconComponent }) => (
                                                            <div key={id} className="relative">
                                                                <input
                                                                    className="peer sr-only"
                                                                    id={id}
                                                                    type="radio"
                                                                    name="sessionType"
                                                                    value={value}
                                                                    checked={formData.sessionType === value}
                                                                    onChange={handleChange}
                                                                />
                                                                <label
                                                                    htmlFor={id}
                                                                    className="flex items-center justify-between w-full p-5 bg-white border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 peer-checked:border-black peer-checked:bg-gray-50 transition-all duration-200"
                                                                >
                                                                    <div className="flex items-center gap-3">
                                                                        <IconComponent className="w-6 h-6 text-orange-500" />
                                                                        <div>
                                                                            <span className="block font-semibold text-black">{label}</span>
                                                                            <span className="block text-sm text-gray-600">{value}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-5 h-5 border-2 border-gray-400 rounded-full peer-checked:border-black peer-checked:bg-black flex items-center justify-center">
                                                                        <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {formErrors.sessionType && (
                                                        <motion.p
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="text-red-600 bg-red-50 py-2 px-3 rounded-lg border border-gray-300 text-sm mt-2 flex items-center gap-2"
                                                        >
                                                            <BiError className="text-base flex-shrink-0" />
                                                            {formErrors.sessionType}
                                                        </motion.p>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Step 3: Confirmation */}
                                        {step === 2 && (
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                            >
                                                <Ticket formData={formData} />
                                            </motion.div>
                                        )}

                                        {/* Navigation Buttons */}
                                        <div className="flex justify-between items-center pt-6 border-t border-gray-300">
                                            {step > 0 ? (
                                                <button
                                                    onClick={handleBack}
                                                    type="button"
                                                    className="flex items-center gap-2 px-6 py-3 text-black bg-white border border-gray-300 hover:bg-black hover:text-white rounded-xl font-medium transition-all duration-200 focus:outline-none"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                    </svg>
                                                    {t("back")}
                                                </button>
                                            ) : (
                                                <div />
                                            )}

                                            {step < 2 ? (
                                                <button
                                                    onClick={handleNext}
                                                    type="button"
                                                    className="flex items-center gap-2 px-8 py-3 bg-black hover:bg-gray-800 text-white rounded-xl font-semibold transition-all duration-200 focus:outline-none"
                                                >
                                                    {t("next")}
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => setShowDialog(true)}
                                                    type="submit"
                                                    className="px-8 py-3 bg-black hover:bg-gray-800 text-white rounded-xl font-semibold transition-all duration-200 focus:outline-none flex items-center gap-2"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {t("confirmBooking")}
                                                </button>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-3 space-y-6">
                            {/* Current Booking Summary */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-xl border border-gray-300 p-6"
                            >
                                <h3 className="font-semibold text-black mb-4">Booking Summary</h3>
                                <div className="space-y-3 text-sm">
                                    {/* Nationality Status */}
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Visitor Type:</span>
                                        <span className={`font-medium ${isForeignNational() ? 'text-blue-600' : 'text-black'}`}>
                                            {isForeignNational() ? 'Foreign National' : 'Domestic'}
                                        </span>
                                    </div>

                                    {formData.ticketType === "group" ? (
                                        <>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Ticket Type:</span>
                                                <span className="font-medium text-black">Group Ticket</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Group Size:</span>
                                                <span className="font-medium text-black">{formData.groupSize} people</span>
                                            </div>
                                            {formData.isStudent && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Student Group:</span>
                                                    <span className="font-medium text-green-600">Yes</span>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Adults:</span>
                                                <span className="font-medium text-black">{formData.adults}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Children:</span>
                                                <span className="font-medium text-black">{formData.children}</span>
                                            </div>
                                            {isForeignNational() && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Rate Applied:</span>
                                                    <span className="font-medium text-blue-600">Foreign National</span>
                                                </div>
                                            )}
                                        </>
                                    )}
                                    <div className="border-t border-gray-200 pt-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Total Price:</span>
                                            <span className="font-bold text-green-600 text-lg">FREE</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {showDialog && (
                    <TicketBookingDialog onClose={() => setShowDialog(false)} />
                )}
            </div>
            <Footer />
        </>
    );
};

export default TicketBookingForm;