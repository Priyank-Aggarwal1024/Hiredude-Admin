import React from "react";
import { link } from "../assets";

const statusConfig = {
  Submitted: {
    label: "Assignment Submitted",
    color: "#16a149",
    bg: "bg-[#16a149]/10 hover:bg-[#16a149]/20",
    showIcon: true,
  },
  Completed: {
    label: "Assignment Completed",
    color: "#16a149",
    bg: "bg-[#16a149]/10 hover:bg-[#16a149]/20",
    showIcon: true,
  },
  Pending: {
    label: "Interview Pending",
    color: "#db8b00",
    bg: "bg-[#fff3dd] hover:bg-[#ffe9c9]",
    showIcon: false,
  },
  Shortlisted: {
    label: "Profile Shortlisted",
    color: "#2563eb",
    bg: "bg-blue-50 hover:bg-blue-100",
    showIcon: false,
  },
  Default: {
    label: "Unknown Status",
    color: "#6b7280",
    bg: "bg-gray-100 hover:bg-gray-200",
    showIcon: false,
  },
};

export default function StatusButton({ status, onClick, disabled = false }) {
  const cfg = statusConfig[status] || statusConfig.Default;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-1.5 rounded-lg shadow-[0px_1px_3px_rgba(241,245,249,1)] 
                 outline-1 outline-offset-[-1px] outline-slate-200 
                 inline-flex justify-center items-center gap-2 transition 
                 ${cfg.bg} 
                 ${
                   disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                 }`}
    >
      <span
        className="text-sm font-medium leading-tight"
        style={{ color: cfg.color }}
      >
        {cfg.label}
      </span>

      {cfg.showIcon && (
        <div className="relative w-[15px] h-[15px] overflow-hidden">
          <img src={link} alt="Link" />
        </div>
      )}
    </button>
  );
}
