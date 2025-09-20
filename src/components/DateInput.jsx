import React, { useState } from "react";
import { arrowDown } from "../assets";
import useClickOutside from "../hooks/useClickOutside";
import DateTimePicker from "./CalendarCard";

function DateInput({ dateTime, setDateTime, minWidth = 140 }) {
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useClickOutside(showPicker, () => setShowPicker(false));
  return (
    <div className="relative" ref={pickerRef} style={{ minWidth: minWidth }}>
      <div
        className={`px-3 py-2 bg-slate-100 rounded-lg flex justify-between items-center h-10 min-w-[${minWidth}px] cursor-pointer`}
        onClick={() => setShowPicker((prev) => !prev)}
      >
        <span className="text-slate-800 text-sm font-medium leading-tight">
          Date
        </span>
        <img src={arrowDown} alt="Arrow Down" />
      </div>

      {showPicker && (
        <div
          className="absolute top-12 right-0 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <DateTimePicker
            onChange={(val) => {
              setDateTime(val);
            }}
            value={dateTime}
          />
        </div>
      )}
    </div>
  );
}

export default DateInput;
