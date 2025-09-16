import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, MapPin } from "lucide-react";
import dayjs from "dayjs";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

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

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-black mb-2">Visit Calendar</h1>
          <p className="text-gray-600">Plan your visit to Buddha Samyak Darshan Museum</p>
        </div>

        {/* Main Calendar */}
        <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden">
          
          {/* Calendar Header */}
          <div className="bg-black text-white px-6 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevMonth}
                className="w-8 h-8 rounded-lg border border-gray-500 hover:bg-white hover:text-black transition-all duration-200 flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <h2 className="text-xl font-bold">
                {currentMonth.format("MMMM YYYY")}
              </h2>
              
              <button
                onClick={handleNextMonth}
                className="w-8 h-8 rounded-lg border border-gray-500 hover:bg-white hover:text-black transition-all duration-200 flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-6">
            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {daysOfWeek.map((day, index) => (
                <div
                  key={day}
                  className={`h-8 flex items-center justify-center text-xs font-medium
                    ${index === 0 ? 'text-gray-400' : 'text-gray-600'}
                  `}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((date, index) => {
                const isToday = date && date.isSame(today, "day");
                const isSunday = date && date.day() === 0;
                const isPastMonth = date && !date.isSame(currentMonth, "month");
                const isPast = date && date.isBefore(today, "day");

                return (
                  <div
                    key={index}
                    className={`
                      h-10 rounded-lg border border-gray-200 flex items-center justify-center text-sm
                      ${!date ? "invisible" : ""}
                      ${isPastMonth || isPast
                        ? "text-gray-300 cursor-not-allowed" 
                        : isSunday
                          ? "text-gray-300 bg-gray-50 cursor-not-allowed opacity-50"
                          : isToday 
                            ? "bg-black text-white border-black" 
                            : "text-gray-700 hover:bg-gray-100 cursor-pointer"
                      }
                    `}
                  >
                    {date && date.date()}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Opening Hours */}
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-semibold text-black">Opening Hours</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Mon - Sat</span>
                <span className="font-medium text-black">09:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="font-medium text-gray-400">Closed</span>
              </div>
            </div>
          </div>

          {/* Ticket Counter */}
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-semibold text-black">Ticket Counter</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Mon - Sat</span>
                <span className="font-medium text-black">09:00 - 16:30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="font-medium text-gray-400">Closed</span>
              </div>
            </div>
          </div>

          {/* Special Notice */}
          <div className="bg-black text-white rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <CalendarIcon className="w-4 h-4 text-black" />
              </div>
              <h3 className="font-semibold">Notice</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Closed</span>
                <span className="font-medium">Sundays</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Last Entry</span>
                <span className="font-medium">16:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
