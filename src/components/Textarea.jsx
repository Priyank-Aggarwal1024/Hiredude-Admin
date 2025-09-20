import React from "react";

const Textarea = ({
  label,
  required,
  placeholder,
  value,
  onChange,
  rows = 4,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center gap-1">
        <span className="text-[#45556c] text-sm font-medium">{label}</span>
        {required && (
          <span className="text-[#e7000b] text-sm font-medium">*</span>
        )}
      </div>
      <textarea
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 bg-white rounded-lg outline-1 outline-[#cad5e2] text-base text-[#0f172b]"
      />
    </div>
  );
};

export default Textarea;
