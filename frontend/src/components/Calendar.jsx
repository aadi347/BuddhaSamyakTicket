import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, MapPin } from "lucide-react";
import dayjs from "dayjs";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);

  // Navigate months
  const handlePrevMonth = () => setCurrentMonth(currentMonth.subtract(1, "month"));
  const handleNextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));

  const startOfMonth = currentMonth.startOf("month");
  const daysInMonth = currentMonth.daysInMonth();
  const startDay = startOfMonth.day();

  const today = dayjs();
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const calendarDays = [];

  // Build calendar grid
  for (let i = 0; i < startDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(dayjs(currentMonth).date(i));
  }

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-6xl">
        
        {/* Main Calendar Card */}
        <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden">
          
          {/* Header Section */}
          <div className="bg-black text-white px-8 py-6">
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevMonth}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              
              <div className="text-center">
                <div className="flex items-center gap-3 justify-center mb-1">
                  <CalendarIcon className="w-6 h-6" />
                  <h1 className="text-3xl font-light tracking-wide">
                    {currentMonth.format("MMMM YYYY")}
                  </h1>
                </div>
                <p className="text-white/70 text-sm font-light">
                  {today.format("dddd, MMMM D, YYYY")}
                </p>
              </div>
              
              <button
                onClick={handleNextMonth}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-8">
            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-2 mb-6">
              {daysOfWeek.map((day, i) => (
                <div
                  key={day}
                  className="h-12 flex items-center justify-center text-sm font-medium text-gray-400 uppercase tracking-wider"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((date, index) => {
                const isToday = date && date.isSame(today, "day");
                const isSelected = date && selectedDate && date.isSame(selectedDate, "day");
                const isSunday = date && date.day() === 0;
                const isPastMonth = date && !date.isSame(currentMonth, "month");

                return (
                  <button
                    key={index}
                    onClick={() => date && handleDateSelect(date)}
                    disabled={!date || isPastMonth}
                    className={`
                      h-14 rounded-2xl flex flex-col items-center border border-gray-200 justify-center text-sm font-medium
                      transition-all duration-200 relative group
                      ${!date ? "invisible" : ""}
                      ${isPastMonth 
                        ? "text-gray-300 cursor-not-allowed" 
                        : isToday 
                          ? "bg-black text-white shadow-lg scale-105" 
                          : isSelected
                            ? "bg-gray-900 text-white"
                            : "text-gray-700 hover:bg-gray-50 hover:scale-105 hover:shadow-md"
                      }
                    `}
                  >
                    {date && (
                      <>
                        <span className="text-base">{date.date()}</span>
                        {isSunday && !isPastMonth && (
                          <div className="absolute -bottom-1 w-1 h-1 bg-gray-400 rounded-full"></div>
                        )}
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Opening Hours Card */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Opening Hours</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-600 text-sm">Monday - Saturday</span>
                <span className="font-medium text-gray-900">09:00 - 17:00</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 text-sm">Sunday</span>
                <span className="font-medium text-gray-400">Closed</span>
              </div>
            </div>
          </div>

          {/* Ticket Counter Card */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Ticket Counter</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-600 text-sm">Monday - Saturday</span>
                <span className="font-medium text-gray-900">09:00 - 16:30</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 text-sm">Sunday</span>
                <span className="font-medium text-gray-400">Closed</span>
              </div>
            </div>
          </div>

          {/* Special Tours Card */}
          <div className="bg-black text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <CalendarIcon className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-lg font-semibold">Special Tours</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-white/70 text-sm">Wednesday & Friday</span>
                <span className="font-medium">11:00 & 15:00</span>
              </div>
              <div className="pt-2">
                <span className="inline-block bg-white text-black text-xs font-medium px-3 py-1 rounded-full">
                  Booking Required
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Date Info */}
        {selectedDate && (
          <div className="mt-6 bg-gray-50 border border-gray-100 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Selected Date: {selectedDate.format("dddd, MMMM D, YYYY")}
            </h4>
            <p className="text-gray-600">
              {selectedDate.day() === 0 
                ? "We are closed on Sundays. Please select another date."
                : "We are open from 09:00 AM to 5:00 PM. Ticket counter closes at 4:30 PM."
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
