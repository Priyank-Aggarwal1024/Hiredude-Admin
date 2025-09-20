import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { download, lArrow, link, search, whatsapp } from "../assets";
import SelectButton from "./SelectButton";
import DateInput from "./DateInput";
import ToggleButton from "./ToggleButton";

function JobDetailHeader({
  onChange = () => {},
  value = false,
  applicationData = {},
}) {
  const navigate = useNavigate();

  return (
    <div className="w-full px-6 py-5 bg-neutral-50 flex flex-col items-center gap-5 h-fitsticky top-0 z-40">
      <div className="w-full min-w-48 rounded-lg flex justify-start items-center gap-3 overflow-hidden flex-wrap">
        <div className="p-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src={lArrow} alt="Back Arrow" />
        </div>

        <div className="flex-1 flex flex-col justify-start items-start gap-2 min-w-[240px]">
          <div className="w-full flex justify-start items-center gap-2 flex-wrap">
            <div className="text-neutral-800 text-base font-medium leading-tight">
              {applicationData.jobTitle || ""}
            </div>
            <div className="w-px h-5 bg-neutral-300"></div>
            <div className="flex justify-start items-center gap-1">
              <div className="text-neutral-700 text-sm font-normal leading-tight">
                {applicationData.companyName || ""}
              </div>
              <img
                src={link}
                alt="Company Link"
                onClick={() =>
                  window.open(applicationData.companyLink, "_blank")
                }
                className="cursor-pointer [&:hover]:opacity-80 w-3.5 h-3.5"
              />
            </div>
            <div
              className={`w-11 h-5 px-1 py-1 ${
                applicationData.jobStatus === "Open"
                  ? "bg-green-100"
                  : "bg-red-100"
              } rounded-sm flex justify-center items-center gap-1 overflow-hidden`}
            >
              <div className="text-success-900 text-xs font-medium leading-3">
                {applicationData.jobStatus || "Open"}
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2 flex-wrap">
            <div className="text-neutral-700 text-sm font-normal leading-tight">
              {applicationData.jobId || ""}
            </div>
            <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
            <div className="text-neutral-700 text-sm font-normal leading-tight">
              {applicationData.jobPostedOn || ""}
            </div>
            <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
            <div className="text-neutral-700 text-sm font-normal leading-tight">
              {applicationData.jobType || ""}
            </div>
            <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
            <div className="text-neutral-700 text-sm font-normal leading-tight">
              {applicationData.jobSalary || ""}
            </div>
          </div>
        </div>

        <div className="flex justify-start items-start gap-2.5">
          {window.location.pathname.includes("shortlisted-candidates") && (
            <div className="w-60 h-12 px-4 inline-flex justify-start items-center gap-1">
              <div className="text-[#334155] text-base font-normal leading-tight">
                Enable Calling Mode
              </div>
              <ToggleButton onChange={onChange} value={value} />
            </div>
          )}
          <div
            className="px-3 py-2.5 bg-slate-200 rounded-lg flex justify-center items-center gap-2 cursor-pointer [&:hover]:bg-slate-300"
            onClick={() => navigate("/")}
          >
            <div className="text-slate-800 text-sm font-medium leading-tight">
              Close Application
            </div>
          </div>
          <div
            className="px-3 py-2.5 bg-white rounded-lg shadow-custom border border-slate-200 flex justify-center items-center gap-2 cursor-pointer [&:hover]:bg-gray-50"
            onClick={() => window.open(applicationData.jdLink, "_blank")}
          >
            <div className="text-slate-800 text-sm font-medium leading-tight">
              View JD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function JobDetailNavigation({
  applicationData = {
    totalApplications: 0,
    totalShortlisted: 0,
    totalInterviewed: 0,
    assignmentSubmissions: 0,
    assignmentSent: 0,
  },
}) {
  const params = useParams();
  const location = window.location.pathname;

  const linkClass = ({ isActive }) =>
    `flex-1 p-4 rounded-lg flex flex-col justify-start items-start gap-1.5 overflow-hidden
     ${
       isActive
         ? "border-2 border-blue-700 bg-sky-50"
         : "border border-slate-200 bg-white"
     }`;

  return (
    <div className="w-full px-6 grid grid-cols-5 gap-2">
      <NavLink
        to={`/job/${params.jobId}/total-applications`}
        className={({ isActive }) =>
          `flex-1 p-4 rounded-lg flex flex-col justify-start items-start gap-1.5 overflow-hidden ${
            isActive || location === `/job/${params.jobId}`
              ? "border-2 border-blue-700 bg-sky-50"
              : "border border-slate-200 bg-white"
          }`
        }
      >
        <div className="w-full text-neutral-500 text-base font-normal leading-tight">
          Total Applications
        </div>
        <div className="w-full text-neutral-800 text-3xl font-semibold leading-9">
          {applicationData.totalApplications || 0}
        </div>
      </NavLink>

      <NavLink
        to={`/job/${params.jobId}/assignment-sent`}
        className={linkClass}
      >
        <div className="w-full flex justify-start items-start gap-0.5">
          <div className="text-neutral-500 text-base font-normal leading-tight">
            Assignment sent
          </div>
          <img src={whatsapp} alt="WhatsApp" />
        </div>
        <div className="w-full text-neutral-800 text-3xl font-semibold leading-9">
          {applicationData.assignmentSent || 0}
        </div>
      </NavLink>

      <NavLink
        to={`/job/${params.jobId}/assignment-submission`}
        className={linkClass}
      >
        <div className="w-full text-neutral-500 text-base font-normal leading-tight">
          Assignment submission
        </div>
        <div className="w-full text-neutral-800 text-3xl font-semibold leading-9">
          {applicationData.assignmentSubmissions || 0}
        </div>
      </NavLink>

      <NavLink to={`/job/${params.jobId}/interview`} className={linkClass}>
        <div className="w-full text-neutral-500 text-base font-normal leading-tight">
          Interview
        </div>
        <div className="w-full text-neutral-800 text-3xl font-semibold leading-9">
          {applicationData.totalInterviewed || 0}
        </div>
      </NavLink>

      <NavLink
        to={`/job/${params.jobId}/shortlisted-candidates`}
        className={linkClass}
      >
        <div className="w-full text-neutral-500 text-base font-normal leading-tight">
          Shortlisted Candidates
        </div>
        <div className="w-full text-neutral-800 text-3xl font-semibold leading-9">
          {applicationData.totalShortlisted || 0}
        </div>
      </NavLink>
    </div>
  );
}
function JobDetailTableHeader({
  searchValue,
  setSearchValue,
  dateTime,
  setDateTime,
  selectedFilter,
  setSelectedFilter,
  options,
}) {
  return (
    <div className="w-full px-4 py-3 bg-white flex justify-between items-center flex-wrap gap-3">
      <div className="flex-1 flex justify-start items-center gap-3 flex-wrap">
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
        <DateInput
          dateTime={dateTime}
          setDateTime={setDateTime}
          minWidth={102}
        />
        <SelectButton
          options={options}
          selectedValue={selectedFilter}
          onSelect={setSelectedFilter}
          minWidth={192}
          placeholder="Select filter"
        />
        <div className="p-[1px] rounded-lg bg-gradient-to-r from-[#4CB7A3] to-[#1D4ED8] cursor-pointer">
          <div className="w-20 h-10 px-3 py-2 rounded-lg bg-white flex justify-center items-center gap-1 hover:bg-gray-50">
            <img src={download} alt="Download" />
            <div className="text-blue-700 text-sm font-medium leading-tight">
              Export
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { JobDetailHeader, JobDetailNavigation, JobDetailTableHeader };
