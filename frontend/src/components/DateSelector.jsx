import { useEffect, useState } from "react";

export default function DateSelector({ value, onChange }) {
  const [currentDate, setCurrentDate] = useState(() =>
    value ? new Date(value) : new Date()
  );
  const [selectedDate, setSelectedDate] = useState(() =>
    value ? new Date(value) : null
  );
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to midnight

  useEffect(() => {
    if (value) {
      const parsed = new Date(value);
      if (!isNaN(parsed)) {
        setSelectedDate(parsed);
        setCurrentDate(parsed);
      }
    }
  }, [value]);

  const handleToggleCalendar = () => {
    setIsCalendarOpen((prev) => !prev);
  };

const handleDayClick = (day) => {
  const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
  clickedDate.setHours(0, 0, 0, 0);

  if (clickedDate >= today) {
    setSelectedDate(clickedDate);

    // ✅ Format date as dd/mm/yy
    const dd = String(clickedDate.getDate()).padStart(2, '0');
    const mm = String(clickedDate.getMonth() + 1).padStart(2, '0');
    const yy = String(clickedDate.getFullYear()).slice(-2);

    const formattedDate = `${dd}/${mm}/${yy}`;

    // ✅ Call the onChange prop with the formatted date
    onChange?.(formattedDate);

    setIsCalendarOpen(false);
  }
};



  const handlePrevMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const handleCancel = () => {
    setSelectedDate(null);
    onChange(null);
    setIsCalendarOpen(false);
  };

  const handleApply = () => {
    setIsCalendarOpen(false);
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const blanks = [...Array((firstDay + 6) % 7)].map((_, idx) => (
      <div key={`blank-${idx}`} />
    ));

    const days = [...Array(daysInMonth)].map((_, i) => {
      const day = i + 1;
      const dateObj = new Date(year, month, day);
      dateObj.setHours(0, 0, 0, 0);

      const isSelected =
        selectedDate &&
        day === selectedDate.getDate() &&
        month === selectedDate.getMonth() &&
        year === selectedDate.getFullYear();

      const isDisabled = dateObj < today;

      return (
        <div
          key={day}
          onClick={() => !isDisabled && handleDayClick(day)}
          className={`flex h-[38px] w-[38px] items-center justify-center rounded-[7px] border-[.5px] mb-2
            ${isDisabled ? "opacity-30 pointer-events-none" : "cursor-pointer"}
            ${
              isSelected
                ? "bg-black text-white"
                : "border-transparent text-dark hover:border-stroke hover:bg-gray-2 dark:text-white dark:hover:border-dark-3 dark:hover:bg-dark"
            }
            sm:h-[46px] sm:w-[47px]`}
        >
          {day}
        </div>
      );
    });

    return [...blanks, ...days];
  };

  return (
    <section className="bg-white dark:bg-dark">
      <div className="container">
        <div className="mx-auto w-full max-w-[510px]">
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Pick a date"
              readOnly
              onClick={handleToggleCalendar}
              value={
                selectedDate
                  ? selectedDate.toLocaleDateString("en-US")
                  : ""
              }
              className="h-12 w-full p-3 appearance-none rounded-lg border border-gray-200 bg-white pl-12 pr-4 text-dark outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
            />
            <span
              onClick={handleToggleCalendar}
              className="absolute inset-y-0 left-0 flex h-12 w-12 items-center justify-center text-dark-5 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
  <path fill-rule="evenodd" d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z" clip-rule="evenodd" />
</svg>

            </span>
          </div>

          {isCalendarOpen && (
            <div className="w-full flex-col rounded-xl bg-white border border-gray-200 p-4 shadow-four sm:p-[30px] dark:bg-dark-2 dark:shadow-box-dark">
              <div className="flex items-center justify-between pb-4">
                <button onClick={handlePrevMonth} className="calendar-nav">
                  ◀
                </button>
                <span className="text-xl font-medium capitalize text-dark dark:text-white">
                  {currentDate.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <button onClick={handleNextMonth} className="calendar-nav">
                  ▶
                </button>
              </div>

              <div className="grid grid-cols-7 justify-between text-center pb-2 pt-4 text-sm font-medium capitalize text-body-color sm:text-lg dark:text-dark-6">
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                  <span
                    key={d}
                    className="flex h-[38px] w-[38px] items-center justify-center sm:h-[46px] sm:w-[47px]"
                  >
                    {d}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-7 text-center text-sm font-medium sm:text-lg">
                {generateCalendarDays()}
              </div>

              <div className="flex items-center space-x-3 pt-4 sm:space-x-5">
                <button
                  onClick={handleCancel}
                  className="flex h-[50px] w-full items-center justify-center rounded-md bg-dark text-base font-medium text-white hover:bg-opacity-90"
                >
                  Remove
                </button>
                <button
                  onClick={handleApply}
                  className="flex h-[50px] w-full items-center justify-center rounded-md bg-primary text-base font-medium text-white hover:bg-blue-dark"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
