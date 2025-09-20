import React, { useState, useEffect } from "react";
import { arrow } from "../assets";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const DateTimePicker = ({ value, onChange }) => {
  const today = new Date();
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const initialDate = value instanceof Date ? value : today;

  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth());
  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [selectedTime, setSelectedTime] = useState(formatTime(initialDate));
  useEffect(() => {
    if (value instanceof Date) {
      setCurrentMonth(value.getMonth());
      setCurrentYear(value.getFullYear());
      setSelectedDate(value);
      setSelectedTime(formatTime(value));
    }
  }, [value]);

  const getDaysInMonth = (month, year) =>
    new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const totalDays = getDaysInMonth(currentMonth, currentYear);

  const handleDateClick = (day) => {
    const newDate = new Date(currentYear, currentMonth, day);
    const finalDateTime = new Date(newDate.toDateString() + " " + selectedTime);
    setSelectedDate(finalDateTime);
    if (onChange) onChange(finalDateTime);
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    if (selectedDate) {
      const updated = new Date(
        selectedDate.toDateString() + " " + e.target.value
      );
      setSelectedDate(updated);
      if (onChange) onChange(updated);
    }
  };

  const monthName = new Date(currentYear, currentMonth).toLocaleString(
    "default",
    { month: "long" }
  );

  return (
    <div className="w-full sm:min-w-[370px] relative rounded-lg shadow-lg flex flex-col items-center overflow-hidden bg-white">
      <div className="flex justify-between items-center w-full px-4 py-2">
        <span className="text-black text-base font-medium">
          {monthName} {currentYear}
        </span>
        <div className="flex items-center gap-7">
          <button
            onClick={handlePrevMonth}
            className="text-blue-500 text-lg [&:hover]:opacity-70 cursor-pointer"
          >
            <img src={arrow} alt="Previous Arrow" />
          </button>
          <button
            onClick={handleNextMonth}
            className="text-blue-500 text-lg [&:hover]:opacity-70 cursor-pointer"
          >
            <img src={arrow} alt="Next Arrow" className="rotate-180" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 px-4 text-xs text-gray-500 uppercase w-full">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 px-4 pb-4 w-full">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {Array.from({ length: totalDays }).map((_, i) => {
          const day = i + 1;
          const isToday =
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear();
          const isSelected =
            selectedDate &&
            day === selectedDate.getDate() &&
            currentMonth === selectedDate.getMonth() &&
            currentYear === selectedDate.getFullYear();

          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-sm transition cursor-pointer
                ${isToday ? "text-blue-500 font-semibold" : "text-black"}
                ${
                  isSelected
                    ? "bg-blue-500 text-white"
                    : "[&:hover]:bg-blue-100"
                }
              `}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="flex justify-between items-center w-full px-4 py-3 border-t border-gray-200">
        <span className="text-black text-sm">Time</span>
        <input
          type="time"
          value={selectedTime}
          onChange={handleTimeChange}
          className="px-2 py-1 border rounded-md text-sm"
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
