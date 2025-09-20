import React from "react";
import { NavLink } from "react-router-dom";
import { application, candidate, companies, logo, threeDot } from "../assets";
import { useSelector } from "react-redux";
import { getNameInitials } from "../utils/utils";
export default function Sidebar() {
  const admin = useSelector((state) => state.admin);
  return (
    <div className="w-[250px] h-full min-h-screen overflow-y-auto py-10 bg-white border-r border-slate-200 flex flex-col justify-start items-start gap-5">
      <div className="px-5 py-2.5 flex items-center gap-2 h-10">
        <NavLink to="/" className="relative flex items-center gap-2">
          <img src={logo} alt="Logo Hiredude" className="w-30 h-5 rounded-md" />
        </NavLink>
      </div>

      <div className="px-4 flex flex-col gap-2 w-full h-full">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2.5 rounded-lg flex items-center gap-2 w-full ${
              isActive || window.location.pathname.includes("/job")
                ? "bg-slate-100"
                : "bg-white"
            }`
          }
        >
          <img
            src={application}
            alt="Application"
            className="w-5 h-5 relative"
          />
          <span className="flex-1 text-[#314158] text-sm font-medium leading-tight">
            Applications
          </span>
        </NavLink>

        <NavLink
          to="/hired-candidates"
          className={({ isActive }) =>
            `p-2.5 rounded-lg flex items-center gap-2 w-full ${
              isActive ? "bg-slate-100" : "bg-white"
            }`
          }
        >
          <img src={candidate} alt="Candidate" className="w-5 h-5 relative" />
          <span className="flex-1 text-[#314158] text-sm font-medium leading-tight">
            Hired Candidates
          </span>
        </NavLink>

        <NavLink
          to="/companies"
          className={({ isActive }) =>
            `p-2.5 rounded-lg flex items-center gap-2 w-full ${
              isActive ? "bg-slate-100" : "bg-white"
            }`
          }
        >
          <img src={companies} alt="Companies" className="w-5 h-5 relative" />
          <span className="flex-1 text-[#314158] text-sm font-medium leading-tight">
            Companies
          </span>
        </NavLink>

        <NavLink
          to="/master-database"
          className={({ isActive }) =>
            `p-2.5 rounded-lg flex items-center gap-2 w-full ${
              isActive ? "bg-slate-100" : "bg-white"
            }`
          }
        >
          <img
            src={companies}
            alt="Master Data Base"
            className="w-5 h-5 relative"
          />
          <span className="flex-1 text-[#314158] text-sm font-medium leading-tight">
            Master Data Base
          </span>
        </NavLink>
      </div>

      <div className="px-4 flex items-center gap-2 w-full h-8 mt-auto">
        <div className="w-8 h-8 flex items-center justify-center bg-slate-200 rounded-lg">
          <span className="text-[#62748e] text-xs font-normal leading-none">
            {getNameInitials(admin.name)}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#314158] text-sm font-medium leading-none">
            {admin.name}
          </span>
          <span className="text-[#62748e] text-xs font-normal leading-none">
            {admin.email}
          </span>
        </div>
        <div className="ml-auto w-[18px] h-[18px] flex flex-col justify-between">
          <img
            src={threeDot}
            alt="Three Dot"
            className="rotate-90 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
