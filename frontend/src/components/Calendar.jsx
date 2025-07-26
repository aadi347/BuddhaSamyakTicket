import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dayjs from "dayjs";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  // Navigate months
  const handlePrevMonth = () => setCurrentMonth(currentMonth.subtract(1, "month"));
  const handleNextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));

  const startOfMonth = currentMonth.startOf("month");
  const endOfMonth = currentMonth.endOf("month");

  const daysInMonth = currentMonth.daysInMonth();
  const startDay = startOfMonth.day(); // Sunday = 0, Monday = 1...

  const today = dayjs();

  // Days of the week
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Create array for days to display in calendar
  const calendarDays = [];

  // Fill initial empty slots before 1st day
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }

  // Fill actual days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(dayjs(currentMonth).date(i));
  }

  return (
    <div className="max-w-xl mx-auto rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {currentMonth.format("MMMM YYYY")}
        </h2>
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition"
        >
          <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-2 text-sm text-center mb-2 text-gray-500 dark:text-gray-400">
        {daysOfWeek.map((day) => (
          <div key={day} className="font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((date, index) => {
          const isToday = date && date.isSame(today, "day");

          return (
            <div
              key={index}
              className={`aspect-square text-sm rounded-lg flex items-center justify-center transition
                ${
                  date
                    ? isToday
                      ? "bg-blue-600 text-white font-bold"
                      : "text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                    : "bg-transparent pointer-events-none"
                }`}
            >
              {date ? date.date() : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
