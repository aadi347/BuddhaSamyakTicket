import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Phone,
    Mail,
    Calendar,
    Clock,
    Ticket as TicketIcon,
    MapPin,
    CheckCircle,
    AlertCircle,
    ArrowLeft,
    ArrowRight,
    Users,
    Baby
} from 'lucide-react';
import Navbar from "../components/Navbar.jsx";
import Ticket from "../components/Ticket.jsx";
import TicketBookingDialog from "../components/TicketBookingDialog.jsx"; // Import the dialog

const CounterTicketBooking = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [counterformData, setcounterformData] = useState({
        name: '',
        mobile: '',
        email: '',
        adults: 1,
        children: 0,
        date: '',
        slot: '',
        ticketId: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showTicket, setShowTicket] = useState(false);
    const [ticketData, setTicketData] = useState(null);
    const [showDialog, setShowDialog] = useState(false);

    const totalSteps = 3;

    // Auto-set date and slot on component mount
    useEffect(() => {
        const today = new Date();
        const currentHour = today.getHours();

        // Set today's date
        const todayString = today.toISOString().split('T')[0];

        // Determine slot based on current time (just Slot 1 or Slot 2)
        const currentSlot = currentHour < 13 ? 'Slot 1' : 'Slot 2';

        // Generate ticket ID
        const ticketId = `TKT${Date.now()}`;

        setcounterformData(prev => ({
            ...prev,
            date: todayString,
            slot: currentSlot,
            ticketId: ticketId
        }));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setcounterformData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleNumberChange = (field, increment) => {
        setcounterformData(prev => ({
            ...prev,
            [field]: Math.max(0, prev[field] + increment)
        }));
    };

    const validateStep = (step) => {
        const newErrors = {};

        if (step === 1) {
            if (!counterformData.name.trim()) {
                newErrors.name = 'Name is required';
            }
            if (!counterformData.mobile.trim()) {
                newErrors.mobile = 'Mobile number is required';
            } else if (!/^\d{10}$/.test(counterformData.mobile)) {
                newErrors.mobile = 'Mobile number must be 10 digits';
            }
            if (counterformData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(counterformData.email)) {
                newErrors.email = 'Please enter a valid email address';
            }
        } else if (step === 2) {
            if (counterformData.adults === 0 && counterformData.children === 0) {
                newErrors.visitors = 'At least one visitor is required';
            }
        }

        return newErrors;
    };

    const nextStep = () => {
        const stepErrors = validateStep(currentStep);
        if (Object.keys(stepErrors).length > 0) {
            setErrors(stepErrors);
            return;
        }

        setErrors({});
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    // Function to convert counterformData to format expected by Ticket.jsx
    const convertToTicketFormat = (data) => {
        return {
            fullName: data.name,
            phone: data.mobile,
            email: data.email || 'Not provided',
            country: 'India',
            adults: data.adults,
            children: data.children,
            date: data.date,
            sessionType: data.slot,
            ticketId: data.ticketId
        };
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);

            // Convert data to ticket format and show ticket
            const convertedData = convertToTicketFormat(counterformData);
            setTicketData(convertedData);
            setShowTicket(true);
            setShowDialog(true); // Show the dialog

            console.log('Ticket Data:', convertedData);
        }, 2000);
    };

    const handleBackToForm = () => {
        setShowTicket(false);
        setShowDialog(false);
        setCurrentStep(1);
        // Reset form
        setcounterformData({
            name: '',
            mobile: '',
            email: '',
            adults: 1,
            children: 0,
            date: new Date().toISOString().split('T')[0],
            slot: new Date().getHours() < 13 ? 'Slot 1' : 'Slot 2',
            ticketId: `TKT${Date.now()}`
        });
        setTicketData(null);
    };

    const handleCloseDialog = () => {
        setShowDialog(false);
        // Don't reset form immediately, let user see the ticket
    };

    // Step content components
    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-5"
                    >
                        <div className="text-center mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Details</h3>
                            <p className="text-sm text-gray-600">Let's start with your basic information</p>
                        </div>

                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    name="name"
                                    value={counterformData.name}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white ${
                                        errors.name ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Enter your full name"
                                />
                            </div>
                            {errors.name && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-1 text-sm text-red-600 flex items-center gap-1"
                                >
                                    <AlertCircle size={14} />
                                    {errors.name}
                                </motion.p>
                            )}
                        </div>

                        {/* Mobile Number Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Mobile Number <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={counterformData.mobile}
                                    onChange={handleInputChange}
                                    maxLength={10}
                                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white ${
                                        errors.mobile ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Enter 10-digit mobile number"
                                />
                            </div>
                            {errors.mobile && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-1 text-sm text-red-600 flex items-center gap-1"
                                >
                                    <AlertCircle size={14} />
                                    {errors.mobile}
                                </motion.p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address <span className="text-gray-400">(Optional)</span>
                            </label>
                            <div className="relative">
                                <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={counterformData.email}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white ${
                                        errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Enter email address"
                                />
                            </div>
                            {errors.email && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-1 text-sm text-red-600 flex items-center gap-1"
                                >
                                    <AlertCircle size={14} />
                                    {errors.email}
                                </motion.p>
                            )}
                        </div>
                    </motion.div>
                );

            case 2:
                return (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="text-center mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Visitor Count</h3>
                            <p className="text-sm text-gray-600">How many people will be visiting?</p>
                        </div>

                        {/* Adults Counter */}
                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-white rounded-lg border border-gray-200">
                                        <Users size={24} className="text-gray-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Adults</h4>
                                        <p className="text-sm text-gray-600">Age 18 and above</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button
                                        type="button"
                                        onClick={() => handleNumberChange('adults', -1)}
                                        className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200"
                                    >
                                        -
                                    </button>
                                    <span className="text-xl font-semibold text-gray-800 min-w-[2rem] text-center">
                                        {counterformData.adults}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => handleNumberChange('adults', 1)}
                                        className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Children Counter */}
                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-white rounded-lg border border-gray-200">
                                        <Baby size={24} className="text-gray-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Children</h4>
                                        <p className="text-sm text-gray-600">Under 18 years</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button
                                        type="button"
                                        onClick={() => handleNumberChange('children', -1)}
                                        className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200"
                                    >
                                        -
                                    </button>
                                    <span className="text-xl font-semibold text-gray-800 min-w-[2rem] text-center">
                                        {counterformData.children}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => handleNumberChange('children', 1)}
                                        className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Total Summary */}
                        <div className="bg-white rounded-lg p-4 border border-gray-300">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-gray-800">Total Visitors:</span>
                                <span className="text-2xl font-bold text-gray-900">
                                    {counterformData.adults + counterformData.children}
                                </span>
                            </div>
                        </div>

                        {errors.visitors && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-sm text-red-600 flex items-center gap-1 justify-center"
                            >
                                <AlertCircle size={14} />
                                {errors.visitors}
                            </motion.p>
                        )}
                    </motion.div>
                );

            case 3:
                return (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="text-center mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Details</h3>
                            <p className="text-sm text-gray-600">Confirm your visit date and time slot</p>
                        </div>

                        {/* Date and Slot Info */}
                        <div className="space-y-4">
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Visit Date
                                </label>
                                <div className="relative">
                                    <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="date"
                                        name="date"
                                        value={counterformData.date}
                                        readOnly
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed text-gray-600"
                                    />
                                </div>
                                <p className="mt-2 text-xs text-gray-500">Today's date (auto-selected)</p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Time Slot
                                </label>
                                <div className="relative">
                                    <Clock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        name="slot"
                                        value={counterformData.slot}
                                        readOnly
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed text-gray-600"
                                    />
                                </div>
                                <p className="mt-2 text-xs text-gray-500">
                                    {counterformData.slot === 'Slot 1' ? '9:00 AM - 1:00 PM' : '1:00 PM - 6:00 PM'} (auto-selected based on current time)
                                </p>
                            </div>
                        </div>

                        {/* Booking Summary */}
                        <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
                            <h4 className="font-semibold text-gray-800 mb-4">Booking Summary</h4>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Name:</span>
                                    <span className="font-medium text-gray-800">{counterformData.name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Phone:</span>
                                    <span className="font-medium text-gray-800">{counterformData.mobile}</span>
                                </div>
                                {counterformData.email && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Email:</span>
                                        <span className="font-medium text-gray-800">{counterformData.email}</span>
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Adults:</span>
                                    <span className="font-medium text-gray-800">{counterformData.adults}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Children:</span>
                                    <span className="font-medium text-gray-800">{counterformData.children}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Date:</span>
                                    <span className="font-medium text-gray-800">{counterformData.date}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Time Slot:</span>
                                    <span className="font-medium text-gray-800">{counterformData.slot}</span>
                                </div>
                                <hr className="my-3" />
                                <div className="flex justify-between font-semibold">
                                    <span className="text-gray-800">Total Visitors:</span>
                                    <span className="text-gray-800">{counterformData.adults + counterformData.children}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );

            default:
                return null;
        }
    };

    // Show ticket if generated
    if (showTicket && ticketData) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="max-w-4xl mx-auto p-4">
                    {/* Header with back button */}
                    <div className="flex items-center justify-between mb-6">
                        <button
                            onClick={handleBackToForm}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                        >
                            <ArrowLeft size={18} />
                            New Booking
                        </button>
                    </div>

                    {/* Success message */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
                    >
                        <div className="flex items-center gap-3 text-green-800">
                            <CheckCircle size={20} />
                            <div>
                                <p className="font-medium">Ticket Generated Successfully!</p>
                                <p className="text-sm">Visitor: {ticketData.fullName} | Total: {ticketData.adults + ticketData.children} persons</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Ticket Component */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Ticket formData={ticketData} />
                    </motion.div>

                    {/* Dialog */}
                    {showDialog && (
                        <TicketBookingDialog
                            open={showDialog}
                            onClose={handleCloseDialog}
                        />
                    )}
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-2xl mx-auto p-4">


                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >

                    <div className="flex justify-center mb-4">
                        <img
                            src="https://buddhasamyak.bihar.gov.in/buddha3.png"
                            alt="Buddha Logo"
                            className="w-16 h-16 object-contain"
                        />
                    </div>

                    <h1
                        className="text-2xl font-bold text-gray-900 mb-2"
                        style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                        बुद्ध सम्यक दर्शन संग्रहालय-सह-स्मृति स्तूप
                    </h1>
                    <p className="text-gray-600 text-sm mb-1">Buddha Samyak Darshan Museum & Memorial Stupa</p>
                    <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                        <MapPin size={14} />
                        <span>Vaishali, Bihar</span>
                    </div>
                </motion.div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600">Step {currentStep} of {totalSteps}</span>
                        <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                            className="bg-black h-2 rounded-full"
                            initial={{ width: "33%" }}
                            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                >
                    {/* Form Header */}
                    <div className="bg-gray-900 text-white px-6 py-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/10 rounded">
                                <TicketIcon size={20} />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">Counter Ticket Booking</h2>
                                <p className="text-sm text-gray-300">Complete all steps to generate ticket</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Content */}
                    <div className="p-6 min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {renderStepContent()}
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                            <button
                                type="button"
                                onClick={prevStep}
                                disabled={currentStep === 1}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                    currentStep === 1
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                <ArrowLeft size={18} />
                                Previous
                            </button>

                            {currentStep < totalSteps ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium"
                                >
                                    Next
                                    <ArrowRight size={18} />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                            Generating...
                                        </>
                                    ) : (
                                        <>
                                            <TicketIcon size={18} />
                                            Generate Ticket
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Info Notice */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                    className="mt-6 p-4 bg-white border border-gray-200 rounded-lg"
                >
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Important Information:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Timing: 10 am - 5pm</li>
                        <li>• Please carry a valid ID proof for verification</li>
                        <li>• Tickets are non-transferable and non-refundable</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default CounterTicketBooking;
