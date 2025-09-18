import React, { useState, useEffect} from "react";
import { motion } from "framer-motion";
import DateSelector from "./DateSelector";
import { FaMinus, FaPlus, FaUser, FaPhone, FaEnvelope, FaGlobe, FaUsers, FaChild, FaClock, FaMapMarkerAlt, FaTicketAlt, FaStar, FaCamera, FaWifi, FaParking, FaRestroom } from "react-icons/fa";
import { BiError, BiInfoCircle } from "react-icons/bi";
import Ticket from "./Ticket";
import TicketBookingDialog from "./TicketBookingDialog";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CountrySelector from "./CountrySelector"; 

const steps = ["Personal Info", "Booking Details", "Confirm"];

const TicketBookingForm = () => {
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
  });

  const validateStep = () => {
    const errors = {};

    if (step === 0) {
      if (!formData.fullName.trim()) errors.fullName = "Full name is required.";
      if (!formData.phone.trim() || !/^\d{10,}$/.test(formData.phone))
        errors.phone = "Enter a valid phone number.";
      if (!formData.country.trim()) errors.country = "Country is required.";
      if (
        !formData.email.trim() ||
        !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
      )
        errors.email = "Enter a valid email address.";
    }

    if (step === 1) {
      if (!formData.date) errors.date = "Date is required.";
      if (!formData.sessionType) errors.sessionType = "Select a session slot.";
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
          name === "adults" || name === "children" ? Number(value) : value,
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
              Book Your Museum Visit
            </motion.h1>
            <p className="text-gray-600 text-lg">Experience art, culture and history with us</p>
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
                    <FaClock className="w-5 h-5 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-black">Opening Hours</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Saturday</span>
                    <span className="font-medium text-black">9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-3">
                    <span className="text-gray-400">Sunday</span>
                    <span className="font-medium text-gray-400">Closed</span>
                  </div>
                </div>
              </motion.div>

              {/* Ticket Prices */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl border border-gray-300 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <FaTicketAlt className="w-5 h-5 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-black">Ticket Prices</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Adult</span>
                    <span className="font-medium text-black">₹100</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-3">
                    <span className="text-gray-600">Child (5-12)</span>
                    <span className="font-medium text-black">₹50</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-3">
                    <span className="text-gray-600">Student</span>
                    <span className="font-medium text-black">₹75</span>
                  </div>
                </div>
              </motion.div>

              {/* Facilities */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 rounded-xl border border-gray-300 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                    <BiInfoCircle className="w-5 h-5 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-black">Facilities</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaWifi className="w-3 h-3" />
                    <span>Free WiFi</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaParking className="w-3 h-3" />
                    <span>Parking</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaRestroom className="w-3 h-3" />
                    <span>Restrooms</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCamera className="w-3 h-3" />
                    <span>Photo Zone</span>
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
                            <FaUser className="inline mr-2 text-gray-600" />
                            Full Name *
                          </label>
                          <input
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-0 focus:border-black transition-all duration-200 text-black placeholder-gray-400"
                            placeholder="Enter your full name"
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

                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-semibold text-black mb-2">
                            <FaPhone className="inline mr-2 text-gray-600" />
                            Phone Number *
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-0 focus:border-black transition-all duration-200 text-black placeholder-gray-400"
                            placeholder="+91 1234567890"
                            required
                          />
                          {formErrors.phone && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-600 bg-red-50 py-2 px-3 rounded-lg border border-gray-300 text-sm mt-2 flex items-center gap-2"
                            >
                              <BiError className="text-base flex-shrink-0" />
                              {formErrors.phone}
                            </motion.p>
                          )}
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
                              <FaEnvelope className="inline mr-2 text-gray-600" />
                              Email Address *
                            </label>
                            <input
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-0 focus:border-black transition-all duration-200 text-black placeholder-gray-400"
                              placeholder="example@mail.com"
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

                        {/* Visitor Count */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-300">
                          <h3 className="text-lg font-semibold text-black mb-4">Number of Visitors</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Adults Counter */}
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-3">
                                <FaUsers className="inline mr-2 text-gray-600" />
                                Adults
                              </label>
                              <div className="flex items-center bg-white border border-gray-300 rounded-xl overflow-hidden">
                                <button
                                  type="button"
                                  onClick={() => handleChange("adults", "dec")}
                                  className="w-12 h-12 bg-gray-800 hover:bg-black text-white transition-colors duration-200 focus:outline-none flex items-center justify-center"
                                >
                                  <FaMinus size={14} />
                                </button>
                                <div className="flex-1 px-4 py-3 text-center font-bold text-xl text-black bg-white">
                                  {formData.adults}
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleChange("adults", "inc")}
                                  className="w-12 h-12 bg-gray-800 hover:bg-black text-white transition-colors duration-200 focus:outline-none flex items-center justify-center"
                                >
                                  <FaPlus size={14} />
                                </button>
                              </div>
                            </div>

                            {/* Children Counter */}
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-3">
                                <FaChild className="inline mr-2 text-gray-600" />
                                Children
                              </label>
                              <div className="flex items-center bg-white border border-gray-300 rounded-xl overflow-hidden">
                                <button
                                  type="button"
                                  onClick={() => handleChange("children", "dec")}
                                  className="w-12 h-12 bg-gray-800 hover:bg-black text-white transition-colors duration-200 focus:outline-none flex items-center justify-center"
                                >
                                  <FaMinus size={14} />
                                </button>
                                <div className="flex-1 px-4 py-3 text-center font-bold text-xl text-black bg-white">
                                  {formData.children}
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleChange("children", "inc")}
                                  className="w-12 h-12 bg-gray-800 hover:bg-black text-white transition-colors duration-200 focus:outline-none flex items-center justify-center"
                                >
                                  <FaPlus size={14} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
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
                          <h3 className="text-lg font-semibold text-black mb-4">Choose Your Visit Time</h3>
                          <div className="grid gap-4 sm:grid-cols-2">
                            {[
                              {
                                id: "radio_1",
                                label: "Morning Slot",
                                value: "9:00 AM - 01:00 PM",
                                icon: "🌅"
                              },
                              {
                                id: "radio_2",
                                label: "Afternoon Slot", 
                                value: "01:00 PM - 05:00 PM",
                                icon: "🌇"
                              },
                            ].map(({ id, label, value, icon }) => (
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
                                    <span className="text-2xl">{icon}</span>
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
                          Back
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
                          Next
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
                          Confirm Booking
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-3 space-y-6">
              
              {/* Location & Contact */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl border border-gray-300 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="w-5 h-5 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-black">Location</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-gray-600 leading-relaxed">
                    Buddha Samyak Darshan Museum<br />
                    Near Central Park<br />
                    Exhibition Road, City Center
                  </p>
                  <button className="w-full mt-4 bg-black text-white py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-sm">
                    Get Directions
                  </button>
                </div>
              </motion.div>

              {/* Recent Reviews */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl border border-gray-300 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <FaStar className="w-5 h-5 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-black">Reviews</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">"Amazing collection and peaceful environment"</p>
                    <p className="text-xs text-gray-400 mt-1">- Visitor from Delhi</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">"Well organized and informative displays"</p>
                    <p className="text-xs text-gray-400 mt-1">- Local Visitor</p>
                  </div>
                </div>
              </motion.div>

              {/* Important Guidelines */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 rounded-xl border border-gray-300 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                    <BiInfoCircle className="w-5 h-5 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-black">Guidelines</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Last entry at 4:30 PM</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Photography without flash allowed</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Audio guides available</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Group discounts available</span>
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
