import React, { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import { arrowDown } from "../assets";

function Select({
  options = [],
  placeholder = "Select Here",
  onSelect,
  className = "",
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const ref = useClickOutside(isOpen, () => setIsOpen(false));

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div ref={ref} className={`relative w-full ${className}`} {...rest}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md flex justify-between items-center"
      >
        <span>{selected || placeholder}</span>
        <img src={arrowDown} alt="" />
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md z-10">
          {options.map((option, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(option)}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
