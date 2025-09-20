import React from "react";
import { doc, link, linkedin, tick } from "../assets";
function JobDataTables({ jobId = "", total = [] }) {
  const pathname = window.location.pathname;
  return (
    <div className="w-full flex-1 relative bg-white overflow-x-auto custom-scrollbar h-full">
      {(pathname.includes("total-applications") ||
        pathname === `/job/${jobId}`) && (
        <div className="min-w-[1740px] bg-white flex flex-col overflow-hidden">
          <div className="w-full grid grid-cols-[1.2fr_1.5fr_1.8fr_1.2fr_2fr_1fr_.7fr_1.8fr_1.2fr_1fr_1fr_1fr] bg-neutral-100 shadow-table">
            {[
              "Applied on",
              "Full name",
              "Email address",
              <>
                <div className="flex items-center gap-1">
                  <span>WhatsApp</span>
                  <img src={tick} alt="Tick" />
                </div>
              </>,
              "Portfolio/Website",
              "Resume",
              "Linkedin",
              "City State",
              "Current status",
              "Experience",
              "Other roles",
              "Student ID",
            ].map((header, i) => (
              <div
                key={i}
                className="h-12 px-4 flex items-center text-neutral-700 text-sm font-medium leading-tight text-center"
              >
                {header}
              </div>
            ))}
          </div>
          {total.map((applicant, i) => (
            <div
              key={i}
              className="w-full grid grid-cols-[1.2fr_1.5fr_1.8fr_1.2fr_2fr_1fr_.7fr_1.8fr_1.2fr_1fr_1fr_1fr] border-t border-neutral-100"
            >
              <div className="h-12 px-4 flex items-center">
                <span className="text-neutral-700 text-sm font-normal">
                  {applicant.appliedOn}
                </span>
              </div>
              <div className="h-12 px-4 flex items-center">
                <span className="text-neutral-700 text-sm font-normal">
                  {applicant.fullName}
                </span>
              </div>
              <div className="h-12 px-4 flex items-center">
                <span className="text-neutral-700 text-sm font-normal">
                  {applicant.email}
                </span>
              </div>
              <div className="h-12 px-4 flex items-center">
                <span className="text-neutral-700 text-sm font-normal">
                  {applicant.whatsapp}
                </span>
              </div>
              <div className="h-12 px-4 flex items-center gap-1.5">
                <img src={link} alt="Link" />
                <span className="text-neutral-700 text-sm font-normal">
                  {applicant.portfolio}
                </span>
              </div>
              <div className="h-12 px-4 flex items-center gap-1">
                <img src={doc} alt="Document" />
                <span className="text-neutral-700 text-sm font-normal">
                  {applicant.resume}
                </span>
              </div>
              <div className="h-12 px-4 flex items-center">
                {applicant.linkedin && <img src={linkedin} alt="LinkedIn" />}
              </div>
              <div className="h-12 px-4 flex items-center">
                <span className="text-neutral-700 text-sm font-normal">
                  {applicant.city}
                </span>
              </div>
              <div className="h-12 px-4 flex items-center">
                <span className="text-neutral-700 text-sm font-normal">
                  {applicant.status}
                </span>
              </div>
              <div className="h-12 px-4 flex items-center">
                <span className="text-neutral-700 text-sm font-normal">
                  {applicant.experience}
                </span>
              </div>
              <div className="h-12 px-4 flex items-center">
                <span className="text-neutral-700 text-sm font-normal">
                  {applicant.role}
                </span>
              </div>
              <div className="h-12 px-4 flex items-center">
                <span className="text-neutral-700 text-sm font-normal">
                  {applicant.studentId}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobDataTables;
