import React, { useState } from "react";
import { motion } from "framer-motion";
import DateSelector from "./DateSelector";
import { FaMinus, FaPlus } from "react-icons/fa";
import Ticket from "./Ticket";

const steps = ["Personal Info", "Booking Details", "Confirm"];

const TicketBookingForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    date: "",
    sessionType: "",
    adults: "",
    children: "",
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleChange = (eOrType, op) => {
    if (typeof eOrType === "string") {
      // Custom counter logic for adults/children
      setFormData((prev) => {
        const updatedValue =
          op === "inc" ? prev[eOrType] + 1 : Math.max(0, prev[eOrType] - 1);
        return { ...prev, [eOrType]: updatedValue };
      });
    } else {
      // Input field logic
      const { name, value } = eOrType.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submission logic
  };

  return (
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
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                name="phone"
                type="number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="+91 1234567890"
                required
              />
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
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 mt-6">
              {[
                {
                  id: "radio_1",
                  label: "Slot 1",
                  value: "09:00 am - 01:00 pm",
                },
                {
                  id: "radio_2",
                  label: "Slot 2",
                  value: "01:00 pm - 05:00 pm",
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
                  className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
                >
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                    <div className="relative z-10 flex items-center space-x-3">
                      <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
                        Back
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-6"
                      >
                        <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
                      </svg>
                    </div>
                  </span>
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
                  className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
                >
                  <span className="absolute inset-0 rounded-2xl bg-black p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                    <div className="relative z-10 flex items-center space-x-3">
                      <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-white">
                        Next
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-6"
                      >
                        <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <div className="relative group">
                <button
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
    </div>
  );
};

export default TicketBookingForm;
