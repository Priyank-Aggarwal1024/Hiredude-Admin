import React from "react";

const ToggleButton = ({ value = false, onChange }) => {
  const toggle = () => {
    if (onChange) onChange(!value);
  };

  return (
    <div
      className="relative w-10 h-5 rounded-full cursor-pointer"
      onClick={toggle}
    >
      <div
        className={`absolute left-1 top-[3px] inset-0 rounded-full transition-colors duration-300 w-8 h-3.5  ${
          value ? "bg-gradient-to-r from-[#4cb7a3] to-blue-700" : "bg-gray-300"
        }`}
      />
      <div
        className={`absolute top-[1px] left-[2px] w-[18px] h-[18px] bg-white rounded-full shadow-sm transition-all duration-300 ${
          value ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </div>
  );
};

export default ToggleButton;
