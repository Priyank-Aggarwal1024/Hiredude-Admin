import React, { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import { arrowDown } from "../assets";

function SelectButton({
  options = [],
  selectedValue,
  onSelect,
  minWidth = 192,
  placeholder = "Select an option",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useClickOutside(isOpen, () => setIsOpen(false));

  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
  };

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  return (
    <div
      className={`relative ${className}`}
      ref={selectRef}
      style={{ minWidth: `${minWidth}px` }}
    >
      <div
        className="w-full h-10 px-3 py-2 bg-[#F1F5F9] rounded-lg flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="text-neutral-800 text-sm font-medium leading-tight">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <img src={arrowDown} alt="Arrow Down" className="cursor-pointer" />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-md shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)] border border-neutral-200 z-10">
          <div className="p-1 flex flex-col">
            {options.map((option, index) => (
              <div
                key={option.value}
                className={`pl-2 pr-2.5 py-1.5 rounded-md flex justify-start items-center cursor-pointer ${
                  selectedValue === option.value
                    ? "bg-slate-300"
                    : "bg-white hover:bg-neutral-100"
                } ${index !== options.length - 1 ? "mb-1" : ""}`}
                onClick={() => handleSelect(option.value)}
              >
                <span className="text-slate-700 text-sm font-medium leading-tight">
                  {option.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectButton;
