// Input.jsx
import React from "react";

const Input = ({
  label,
  required,
  placeholder,
  value,
  onChange,
  type = "text",
  suffix,
  onKeyDown,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center gap-1">
        <span className="text-[#45556c] text-sm font-medium">{label}</span>
        {required && (
          <span className="text-[#e7000b] text-sm font-medium">*</span>
        )}
      </div>
      <div className="flex items-center gap-1 p-2 bg-white rounded-lg outline-1 outline-[#cad5e2]">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="flex-1 text-base text-[#0f172b] bg-white outline-none"
        />
        {suffix && (
          <span className="text-[#0f172b] text-base font-medium">{suffix}</span>
        )}
      </div>
    </div>
  );
};

export default Input;
