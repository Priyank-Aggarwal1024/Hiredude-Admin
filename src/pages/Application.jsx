import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import DateTimePicker from "../components/CalendarCard";
import { addTask, arrowDown, link, search, threeDot } from "../assets";
import ToggleButton from "../components/ToggleButton";
import { useSelector } from "react-redux";
import JobActionPopup from "../components/JobActionPopup";
import useClickOutside from "../hooks/useClickOutside";
import { useNavigate } from "react-router-dom";
import DateInput from "../components/DateInput";

function Application() {
  const { jobs } = useSelector((state) => state.jobs);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [statusValue, setStatusValue] = useState("Status");
  const [showAction, setShowAction] = useState(null);
  const [dateTime, setDateTime] = useState(new Date());

  const actionRef = useClickOutside(
    showAction !== null,
    () => setShowAction(null),
    [".three-dot-action"]
  );
  return (
    <div className="w-full h-full pt-4 pl-4 pr-6 pb-6 bg-[#F8FAFC] flex flex-col gap-7">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col justify-start items-start gap-1 w-full">
          <h2 className="text-slate-800 text-2xl font-semibold leading-8">
            Applications
          </h2>
          <p className="text-slate-500 text-base font-normal leading-tight">
            Create and manage role-specific job or internship forms
          </p>
        </div>

        <div className="w-full h-full flex items-center justify-end">
          <Button onClick={() => navigate("/create-job")}>
            Create Application
          </Button>
        </div>
      </div>

      <div className="w-full h-full rounded-[12px] border border-neutral-200">
        <div className="px-4 py-3 bg-white flex justify-between items-center w-full rounded-t-[12px]">
          <div className="flex-1 flex justify-start items-center gap-3">
            <div className="flex-1 px-3 py-2 bg-white rounded-md outline-1 outline-slate-200 flex justify-between items-center overflow-hidden">
              <div className="flex items-center gap-2.5 min-w-[200px] w-full">
                <img src={search} alt="Search Icon" />
                <input
                  type="text"
                  placeholder="Name"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="flex-1 text-slate-800 w-full text-sm font-normal leading-tight outline-none bg-transparent placeholder:text-slate-400"
                />
              </div>
              <div className="px-2 py-1.5 bg-slate-100 rounded-sm flex items-cente cursor-pointerr">
                <span className="opacity-50 text-slate-800 text-xs font-medium">
                  Search
                </span>
              </div>
            </div>

            <div className="relative">
              <select
                value={statusValue}
                onChange={(e) => setStatusValue(e.target.value)}
                className="px-3 py-2 bg-slate-100 rounded-lg h-10 min-w-[90px] text-slate-800 text-sm font-medium leading-tight outline-none cursor-pointer appearance-none pr-8"
              >
                <option value="Status">Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <img src={arrowDown} alt="Arrow Down" />
              </div>
            </div>
            <DateInput dateTime={dateTime} setDateTime={setDateTime} />
          </div>
        </div>
        <div className="w-full max-w-full relative bg-white overflow-x-auto h-full custom-scrollbar">
          <div className="min-w-[1780px] grid grid-cols-[1.5fr_2fr_2fr_1fr_1fr_1fr_1fr_1fr_2fr_1.5fr_1fr] border-b border-gray-200">
            {[
              "Created On",
              "Company Name",
              "Role",
              "Type",
              "Stipend",
              "Responses",
              "Assignment submission",
              "Shortlisted",
              "Application Status",
              "Application ID",
              "Actions",
            ].map((col, idx) => (
              <div
                key={idx}
                className="px-4 h-12 bg-slate-100 flex items-center w-full justify-center"
              >
                <span className="text-slate-700 text-sm font-medium">
                  {col}
                </span>
              </div>
            ))}
          </div>
          {jobs.length === 0 ? (
            <div className="max-w-md w-full flex flex-col justify-start items-center gap-3">
              <img src={addTask} alt="Add Task" />
              <div className="max-w-xs text-center text-[#505050] text-base font-normal leading-normal">
                Create and manage role-specific job or internship forms
              </div>

              <Button className="w-48" onClick={() => navigate("/create-job")}>
                Create Application
              </Button>
            </div>
          ) : (
            <>
              {jobs.map((row, idx) => (
                <div
                  key={idx}
                  className="min-w-[1780px] grid grid-cols-[1.5fr_2fr_2fr_1fr_1fr_1fr_1fr_1fr_2fr_1.5fr_1fr] border-b border-gray-100 [&:hover]:bg-gray-50"
                >
                  <div className="px-4 h-12 flex items-center justify-center">
                    <span className="text-slate-700 text-sm text-center">
                      {row?.date}
                    </span>
                  </div>
                  <div className="px-4 h-12 flex items-center justify-center">
                    <span className="text-slate-700 text-sm text-center">
                      {row?.company}
                    </span>
                  </div>
                  <div className="px-4 h-12 flex items-center justify-center">
                    <span className="text-slate-700 text-sm text-center">
                      {row?.role}
                    </span>
                  </div>
                  <div className="px-4 h-12 flex items-center justify-center">
                    <span className="text-slate-700 text-sm text-center">
                      {row?.type}
                    </span>
                  </div>
                  <div className="px-4 h-12 flex items-center justify-center">
                    <span className="text-slate-700 text-sm text-center">
                      {row?.stipend} {row?.currency}
                    </span>
                  </div>
                  <div className="px-4 h-12 flex items-center justify-center gap-2">
                    <span className="text-slate-700 text-sm">
                      {row?.responses}
                    </span>
                    <img src={link} alt="Link" className="cursor-pointer" />
                  </div>
                  <div className="px-4 h-12 flex items-center justify-center">
                    <span className="text-slate-700 text-sm text-center">
                      {row?.submission}
                    </span>
                  </div>
                  <div className="px-4 h-12 flex items-center justify-center">
                    <span className="text-slate-700 text-sm text-center">
                      {row?.shortlisted}
                    </span>
                  </div>
                  <div className="px-4 h-12 flex items-center gap-2 justify-center">
                    <ToggleButton value={row?.status === "active"} />
                    <span
                      className={`text-sm font-medium ${
                        row?.status === "active"
                          ? "text-green-800"
                          : "text-gray-400"
                      }`}
                    >
                      {row?.status}
                    </span>
                  </div>
                  <div className="px-4 h-12 flex items-center justify-center">
                    <span className="text-slate-700 text-sm text-center">
                      {row?.appId}
                    </span>
                  </div>
                  <div
                    className="px-4 h-12 flex items-center justify-center relative"
                    onClick={() =>
                      setShowAction(showAction == null ? row?.appId : null)
                    }
                  >
                    <img
                      src={threeDot}
                      alt="Three Dot"
                      className="cursor-pointer three-dot-action"
                    />
                    {showAction == row?.appId && (
                      <div
                        className="absolute right-4 top-full z-[50]"
                        onClick={(e) => e.stopPropagation()}
                        ref={actionRef}
                      >
                        <JobActionPopup
                          appLink={row?.applicationUrl}
                          assignmentLink={row?.viewAssignmentUrl}
                          submissionLink={row?.submissionUrl}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Application;
