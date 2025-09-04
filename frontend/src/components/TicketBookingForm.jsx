import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DateSelector from "./DateSelector";
import { FaMinus, FaPlus } from "react-icons/fa";
import Ticket from "./Ticket";
import TicketBookingDialog from "./TicketBookingDialog";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BiError } from "react-icons/bi";

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
      // Custom counter logic for adults/children
      setFormData((prev) => {
        const currentValue = Number(prev[eOrType]) || 0; // Ensure it's a number
        const updatedValue =
          op === "inc" ? currentValue + 1 : Math.max(0, currentValue - 1);
        return { ...prev, [eOrType]: updatedValue };
      });
    } else {
      // Input field logic
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
    // submission logic
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <>
      <Navbar />
      <div className="bg-white p-6 max-w-xl mx-auto mt-10 rounded-xl ">
        {/* Step Progress Bar */}
        <div className="relative mb-8">
          <div className="flex justify-between items-center">
            {steps.map((label, i) => (
              <div key={i} className="flex flex-col items-center w-full">
                <div
                  className={`z-10 w-10 h-10 flex items-center justify-center rounded-full font-bold text-white ${
                    step >= i ? "bg-black" : "bg-gray-300"
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`text-xs mt-2 ${
                    step >= i ? "text-black font-medium" : "text-gray-400"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute top-5 left-[5%] w-[90%] h-1 bg-gray-300 z-0 rounded-full">
            <motion.div
              className="h-1 bg-black rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(step / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 0 && (
            <>
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
                {formErrors.fullName && (
                  <p className="text-red-500 bg-red-50 py-1 pl-2 rounded border border-red-200 text-sm mt-1 flex items-center gap-1">
                    <BiError className="text-lg" />
                    {formErrors.fullName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="+91 1234567890"
                  required
                />
                {formErrors.phone && (
                  <p className="text-red-500 bg-red-50 py-1 pl-2 rounded border border-red-200 text-sm mt-1 flex items-center gap-1">
                    <BiError className="text-lg" />
                    {formErrors.phone}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium">Country</label>
                  <input
                    name="country" // ✅ FIXED
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="India"
                    required
                  />
                  {formErrors.country && (
                    <p className="text-red-500 bg-red-50 py-1 pl-2 rounded border border-red-200 text-sm mt-1 flex items-center gap-1">
                      <BiError className="text-lg" />
                      {formErrors.country}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    name="email" // ✅ FIXED
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="example@mail.com"
                    required
                  />
                  {formErrors.email && (
                    <p className="text-red-500 bg-red-50 py-1 pl-2 rounded border border-red-200 text-sm mt-1 flex items-center gap-1">
                      <BiError className="text-lg" />
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm font-semibold text-gray-700">
                    Number of Adults
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                    <button
                      type="button"
                      onClick={() => handleChange("adults", "dec")}
                      className="px-3 py-4 bg-gray-700 hover:bg-gray-800 text-white"
                    >
                      <FaMinus size={12} />
                    </button>
                    <input
                      type="number"
                      readOnly
                      className="w-full text-center px-4 py-2 focus:outline-none"
                      value={formData.adults}
                    />

                    <button
                      type="button"
                      onClick={() => handleChange("adults", "inc")}
                      className="px-3 py-4 bg-gray-700 hover:bg-gray-800 text-white"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>
                  {formErrors.adults && (
                    <p className="text-red-500 bg-red-50 py-1 pl-2 rounded border border-red-200 text-sm mt-1 flex items-center gap-1">
                      <BiError className="text-lg" />
                      {formErrors.adults}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-1 text-sm font-semibold text-gray-700">
                    Number of Children
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                    <button
                      type="button"
                      onClick={() => handleChange("children", "dec")}
                      className="px-3 py-4 bg-gray-700 hover:bg-gray-800 text-white"
                    >
                      <FaMinus size={12} />
                    </button>
                    <input
                      type="number"
                      readOnly
                      className="w-full text-center px-4 py-2 focus:outline-none"
                      value={formData.children}
                    />

                    <button
                      type="button"
                      onClick={() => handleChange("children", "inc")}
                      className="px-3 py-4 bg-gray-700 hover:bg-gray-800 text-white"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>
                  {formErrors.children && (
                    <p className="text-red-500 bg-red-50 py-1 pl-2 rounded border border-red-200 text-sm mt-1 flex items-center gap-1">
                      <BiError className="text-lg" />
                      {formErrors.children}
                    </p>
                  )}
                </div>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div>
                <DateSelector
                  value={formData.date} // format 'YYYY-MM-DD'
                  onChange={(date) =>
                    setFormData((prev) => ({
                      ...prev,
                      date, // string like '2025-07-20'
                    }))
                  }
                />
               {formErrors.date && (
                    <p className="text-red-500 bg-red-50 py-1 pl-2 rounded border border-red-200 text-sm mt-1 flex items-center gap-1">
                      <BiError className="text-lg" />
                      {formErrors.date}
                    </p>
                  )}
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 mt-6">
                {[
                  {
                    id: "radio_1",
                    label: "Slot 1",
                    value: "9:00 AM - 01:00 AM",
                  },
                  {
                    id: "radio_2",
                    label: "Slot 2",
                    value: "01:00 PM - 05:00 PM",
                  },
                ].map(({ id, label, value }) => (
                  <div key={id} className="relative">
                    <input
                      className="peer hidden"
                      id={id}
                      type="radio"
                      name="sessionType"
                      value={value}
                      checked={formData.sessionType === value}
                      onChange={handleChange}
                    />
                    {formErrors.sessionType && (
                    <p className="text-red-500 bg-red-50 py-1 pl-2 rounded border border-red-200 text-sm mt-1 flex items-center gap-1">
                      <BiError className="text-lg" />
                      {formErrors.sessionType}
                    </p>
                  )}
                    <span className="absolute right-4 top-1/2 block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-black"></span>
                    <label
                      htmlFor={id}
                      className="block h-full cursor-pointer rounded-lg p-4 border border-gray-200 drop-shadow-2xl peer-checked:bg-black peer-checked:text-white"
                    >
                      <span className="font-medium">{label}</span>
                      <span className="block text-xs uppercase">{value}</span>
                    </label>
                  </div>
                ))}
              </div>
            </>
          )}

          {step === 2 && <Ticket formData={formData} />}

          <div className="flex justify-between pt-4">
            {step > 0 ? (
              <div className="flex items-center justify-center">
                <div className="relative group">
                  <button
                    onClick={handleBack}
                    type="button"
                    class="text-white bg-black hover:bg-black hover:scale-105 duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Back
                  </button>
                </div>
              </div>
            ) : (
              <div />
            )}

            {step < 2 ? (
              <div className="flex items-center justify-center">
                <div className="relative group">
                  <button
                    onClick={handleNext}
                    type="button"
                    class="text-white bg-black hover:bg-black hover:scale-105 duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Next
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <div className="relative group">
                  <button
                    onClick={() => setShowDialog(true)}
                    type="submit"
                    className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
                  >
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                      <div className="relative z-10 flex items-center space-x-3">
                        <span className="transition-all duration-500 group-hover:text-emerald-300">
                          Confirm Booking
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="size-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
        {showDialog && (
          <TicketBookingDialog onClose={() => setShowDialog(false)} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default TicketBookingForm;
