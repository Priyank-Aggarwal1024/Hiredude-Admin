import React from "react";
import {
  calendar,
  doc,
  email,
  link,
  linkedin,
  location,
  rupee,
  tick,
  user,
  web,
  whatsappGray,
} from "../assets";
import Button from "./Button";
import StatusButton from "./StatusButton";
function JobDataTables({ jobId = "", total = [], submission = [] }) {
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
      {pathname.includes("assignment-submission") && (
        <div className="w-full h-full overflow-y-auto">
          {submission.map((candidateData, idx) => (
            <div
              className="w-full h-auto relative group bg-white shadow-md overflow-hidden border-t border-t-black/10 my-4 p-4 md:p-6 md:px-10"
              key={idx}
            >
              <div
                className="absolute top-2 right-2.5 z-[1] w-[6.875rem] h-[2.375rem] 
               bg-[#f6f6ff] rounded-[10px] outline-1 outline-offset-[-1px] outline-[#e7efff] 
               opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-1 cursor-pointer"
              >
                {" "}
                <div className="text-gradient text-[1.75rem] font-medium leading-tight">
                  {candidateData.interviewScore}
                </div>
                <div className="opacity-70 text-black text-[0.75rem] font-medium leading-[0.8rem]">
                  Interview
                  <br />
                  Score
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-6">
                <div className="col-span-3 flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col items-center gap-1">
                      <img
                        src={linkedin}
                        alt="LinkedIn"
                        className="w-14 h-14 relative"
                      />
                      <div className="text-xs text-[#606060]">
                        <span className="font-medium">ID: </span>
                        <span className="font-normal">{candidateData.id}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-base font-semibold text-gray-900">
                        {candidateData.name}
                      </div>
                      <div className="px-1.5 bg-blue-100 rounded text-sm font-medium text-[#155dfc]">
                        {candidateData.role}
                      </div>
                      <div className="text-sm font-medium text-[#6f6f6f] opacity-70">
                        Experience {candidateData.experience}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <img src={email} alt="Email" />
                      <div className="text-sm font-normal text-[#595959]">
                        {candidateData.email}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <img src={whatsappGray} alt="WhatsApp" />
                      <div className="text-sm font-normal text-[#595959]">
                        {candidateData.phone}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <img src={location} alt="Location" />
                      <div className="text-sm font-normal text-[#595959]">
                        {candidateData.location}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <img src={web} alt="Web" />
                      <div className="text-sm font-normal text-[#595959] underline">
                        {candidateData.portfolio}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <img src={doc} alt="Resume" />
                      <div className="text-sm font-normal text-[#595959]">
                        Resume
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-4 flex flex-col gap-4">
                  <div className="flex flex-col gap-2.5">
                    <div className="text-sm font-semibold text-[#4c4a4a]">
                      Skill
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {candidateData.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="px-3 py-1 bg-[#deeafc]/60 rounded-full border border-gray-200"
                        >
                          <div className="text-sm font-normal text-[#505050]">
                            {skill}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="text-sm font-semibold text-[#4c4a4a]">
                      Tool
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {candidateData.tools.map((tool, index) => (
                        <div
                          key={index}
                          className="px-3 py-1 bg-white/10 rounded-full outline-1 outline-offset-[-1px] outline-[#d0e2ff]"
                        >
                          <div className="text-sm font-normal text-[#327dc0]">
                            {tool}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    <StatusButton status={candidateData.assignmentStatus} />
                    <StatusButton status={candidateData.interviewStatus} />
                  </div>
                </div>
                <div className="col-span-3 flex flex-col gap-5">
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-start gap-1.5">
                      <img src={user} alt="User" />
                      <div className="text-sm">
                        <span className="font-normal text-[#6f6f6f]">
                          Status:{" "}
                        </span>
                        <span className="font-medium text-[#3e3e3e]">
                          {candidateData.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1.5">
                      <img src={rupee} alt="Rupee" />
                      <div className="text-sm">
                        <span className="font-normal text-[#6f6f6f]">
                          Recent Salary:{" "}
                        </span>
                        <span className="font-medium text-[#3e3e3e]">
                          {candidateData.salary}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1.5">
                      <img src={calendar} alt="Calendar" />
                      <div className="text-sm">
                        <span className="font-normal text-[#6f6f6f]">
                          Notice Period:{" "}
                        </span>
                        <span className="font-medium text-[#3e3e3e]">
                          {candidateData.noticePeriod}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3.5">
                    <div className="text-sm font-semibold text-[#4c4a4a]">
                      Preferred
                    </div>

                    <div className="flex flex-col gap-3.5">
                      <div className="text-sm">
                        <span className="font-normal text-[#6f6f6f]">
                          Work Mode:{" "}
                        </span>
                        <span className="font-medium text-[#3e3e3e]">
                          {candidateData.workMode}
                        </span>
                      </div>

                      <div className="text-sm">
                        <span className="font-normal text-[#6f6f6f]">
                          Work Type:{" "}
                        </span>
                        <span className="font-medium text-[#3e3e3e]">
                          {candidateData.workType}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button>Shortlist Profile</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobDataTables;
