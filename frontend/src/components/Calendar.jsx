import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Clock3, CalendarDays } from "lucide-react";
import dayjs from "dayjs";
import Navbar from "./Navbar";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  // Navigate months
  const handlePrevMonth = () => setCurrentMonth(currentMonth.subtract(1, "month"));
  const handleNextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));

  const startOfMonth = currentMonth.startOf("month");
  const daysInMonth = currentMonth.daysInMonth();
  const startDay = startOfMonth.day(); // Sunday = 0

  const today = dayjs();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calendarDays = [];

  for (let i = 0; i < startDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(dayjs(currentMonth).date(i));
  }

  return (
    <>
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center p-10">
      <div className="w-full max-w-5xl bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="text-2xl font-bold flex items-center gap-2">
            <CalendarDays className="w-6 h-6 text-gray-500" />
            {currentMonth.format("MMMM YYYY")}
          </div>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 text-center mb-4 font-medium">
          {daysOfWeek.map((day, i) => (
            <div
              key={day}
              className={`py-2 border-b border-t border-gray-200 dark:border-white ${
                i === 0 ? "text-red-500" : ""
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-2 text-center">
          {calendarDays.map((date, index) => {
            const isToday = date && date.isSame(today, "day");
            const isSunday = date && date.day() === 0;

            return (
              <div
                key={index}
                className={`aspect-square rounded-xl flex flex-col items-center justify-center border border-gray-200 dark:border-white transition-all relative p-2
                  ${
                    date
                      ? isToday
                        ? "bg-black text-white dark:bg-white dark:text-black font-bold"
                        : "hover:bg-black hover:drop-shadow-2xl transform ease-in-out duration-300 hover:scale-105 hover:text-white dark:hover:bg-white dark:hover:text-black"
                      : "bg-transparent border-none"
                  }`}
              >
                {date && (
                  <>
                    <div className="text-lg font-semibold">{date.date()}</div>
                    {isSunday && (
                      <div className="text-xs absolute bottom-1 text-red-500 font-semibold">Closed</div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Opening Hours */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
  {/* Block 1 - Opening Hours */}
  <div className="p-4  border-gray-200 dark:border-white border-r">
    <div className="flex items-center gap-2 mb-2 text-xl font-semibold">
      <Clock3 className="w-5 h-5" />
      Opening Hours
    </div>
    <p className="text-sm">
      Monday – Saturday: <strong>09:00 AM to 5:00 PM</strong>
    </p>
    <p className="text-sm text-red-500 font-medium">Sunday: Closed</p>
  </div>

  {/* Block 2 - Ticket Counter */}
  <div className="p-4 border-r border-gray-200 dark:border-white">
    <div className="flex items-center gap-2 mb-2 text-xl font-semibold">
      <Clock3 className="w-5 h-5" />
      Ticket Counter
    </div>
    <p className="text-sm">
      Monday – Saturday: <strong>09:00 AM to 4:30 PM</strong>
    </p>
    <p className="text-sm text-red-500 font-medium">Sunday: Closed</p>
  </div>

  {/* Block 3 - Special Tours */}
  <div className="p-4  border-gray-200 dark:border-white">
    <div className="flex items-center gap-2 mb-2 text-xl font-semibold">
      <Clock3 className="w-5 h-5" />
      Special Tours
    </div>
    <p className="text-sm">
      Wednesday & Friday: <strong>11:00 AM & 3:00 PM</strong>
    </p>
    <p className="text-sm text-green-600 font-medium">Booking Required</p>
  </div>
</div>

      </div>
    </div>
    </>
  );
};

export default Calendar;
