import React, { useState } from "react";
import { doc, download, link, linkedin, search, tick } from "../assets";
import DateInput from "../components/DateInput";
import SelectButton from "../components/SelectButton";
import {
  JobDetailHeader,
  JobDetailNavigation,
  JobDetailTableHeader,
} from "../components/JobDetailComponent";

const JobDetailPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [selectedFilter, setSelectedFilter] = useState("total-application");
  const filterOptions = [
    { value: "assignment-sent", label: "Assignment sent" },
    { value: "assignment-submission", label: "Assignment Submission" },
    { value: "interview", label: "Interview" },
    { value: "shortlisted-candidates", label: "Shortlisted candidates" },
    { value: "profiles-created", label: "Profiles created" },
    { value: "total-application", label: "Total Application" },
  ];
  return (
    <div className="w-full h-screen shadow-sm overflow-y-auto relative">
      <JobDetailHeader />
      <div className="w-full flex-1 flex flex-col items-start h-full">
        <JobDetailNavigation />

        <div className="w-full flex-1 px-6 pt-3 pb-6 flex flex-col items-start gap-6">
          <div className="w-full flex-1 rounded-xl border border-neutral-200 flex flex-col items-start overflow-hidden">
            <JobDetailTableHeader
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              dateTime={dateTime}
              setDateTime={setDateTime}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              options={filterOptions}
            />

            <div className="w-full flex-1 relative bg-white overflow-x-auto custom-scrollbar pb-4">
              <div className="min-w-[1600px] bg-white flex flex-col items-start overflow-hidden">
                <div className="w-full h-12 flex justify-start items-start">
                  <div className="flex-1 h-12 px-4 bg-neutral-100 shadow-table flex justify-start items-center gap-1 min-w-[120px]">
                    <div className="text-neutral-700 text-sm font-medium leading-tight text-center">
                      Applied on
                    </div>
                  </div>
                  <div className="w-48 h-12 px-4 bg-neutral-100 shadow-table flex justify-start items-center gap-1">
                    <div className="text-neutral-700 text-sm font-medium leading-tight text-center">
                      Full name
                    </div>
                  </div>
                  <div className="w-52 h-12 px-4 bg-neutral-100 shadow-table flex justify-start items-center gap-1">
                    <div className="text-neutral-700 text-sm font-medium leading-tight text-center">
                      Email address
                    </div>
                  </div>
                  <div className="w-32 h-12 px-4 bg-neutral-100 shadow-table flex justify-start items-center gap-1">
                    <div className="text-neutral-700 text-sm font-medium leading-tight text-center">
                      WhatsApp
                    </div>
                    <img src={tick} alt="Tick" />
                  </div>
                  <div className="w-36 h-12 px-4 bg-neutral-100 shadow-table flex justify-start items-center gap-1">
                    <div className="text-neutral-700 text-sm font-medium leading-tight text-center">
                      Portfolio/Website
                    </div>
                  </div>
                  <div className="w-28 h-12 px-4 bg-neutral-100 shadow-table flex justify-start items-center gap-1">
                    <div className="text-neutral-700 text-sm font-medium leading-tight text-center">
                      Resume
                    </div>
                  </div>
                  <div className="flex-1 h-12 px-4 bg-neutral-100 shadow-table flex justify-start items-center gap-1 min-w-[120px]">
                    <div className="text-neutral-700 text-sm font-medium leading-tight text-center">
                      Linkedin
                    </div>
                  </div>
                  <div className="w-44 h-12 px-4 bg-neutral-100 shadow-table flex justify-start items-center gap-1">
                    <div className="text-neutral-700 text-sm font-medium leading-tight text-center">
                      City State
                    </div>
                  </div>
                  <div className="w-32 h-12 px-4 bg-neutral-100 shadow-table flex justify-start items-center gap-1">
                    <div className="text-neutral-700 text-sm font-medium leading-tight text-center">
                      Current status
                    </div>
                  </div>
                  <div className="flex-1 h-12 px-4 bg-neutral-100 shadow-table flex justify-start items-center gap-1 min-w-[120px]">
                    <div className="text-neutral-700 text-sm font-medium leading-tight text-center">
                      Experience
                    </div>
                  </div>
                  <div className="w-28 h-12 px-4 bg-neutral-100 shadow-table flex justify-start items-center gap-1">
                    <div className="text-neutral-700 text-sm font-medium leading-tight text-center">
                      Other roles
                    </div>
                  </div>
                  <div className="w-28 h-12 px-4 bg-neutral-100 shadow-table flex justify-start items-center gap-1">
                    <div className="text-neutral-700 text-sm font-medium leading-tight text-center">
                      Student ID
                    </div>
                  </div>
                </div>

                <div className="w-full h-12 flex justify-start items-start">
                  <div className="flex-1 h-12 px-4 border-t border-neutral-100 flex justify-start items-center gap-1 min-w-[120px]">
                    <div className="text-neutral-700 text-sm font-normal leading-tight">
                      18 Aug, 11:45
                    </div>
                  </div>
                  <div className="w-48 h-12 px-4 border-t border-neutral-100 flex justify-start items-center gap-1">
                    <div className="flex-1 text-neutral-700 text-sm font-normal leading-tight">
                      Khushi Parsad
                    </div>
                  </div>
                  <div className="w-52 h-12 px-4 border-t border-neutral-100 flex justify-start items-center gap-1">
                    <div className="flex-1 text-neutral-700 text-sm font-normal leading-tight">
                      khuship8@gmail.com
                    </div>
                  </div>
                  <div className="w-32 h-12 px-4 border-t border-neutral-100 flex justify-start items-center gap-1">
                    <div className="flex-1 text-neutral-700 text-sm font-normal leading-tight">
                      9498573453
                    </div>
                  </div>
                  <div className="w-36 h-12 px-4 border-t border-neutral-100 flex justify-start items-center gap-1.5">
                    <img src={link} alt="Link" />
                    <div className="text-neutral-700 text-sm font-normal leading-tight">
                      View Portfolio
                    </div>
                  </div>
                  <div className="w-28 h-12 px-4 border-t border-neutral-100 flex justify-start items-center gap-1">
                    <div className="flex-1 flex justify-start items-center gap-1">
                      <img src={doc} alt="Document" />
                      <div className="flex-1 text-neutral-700 text-sm font-normal leading-tight">
                        Doc
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 h-12 px-4 border-t border-neutral-100 flex justify-start items-center gap-1 min-w-[120px]">
                    <img src={linkedin} alt="LinkedIn" />
                  </div>
                  <div className="w-44 h-12 px-4 border-t border-neutral-100 flex justify-start items-center gap-1">
                    <div className="text-neutral-700 text-sm font-normal leading-tight">
                      Gurugram, haryana
                    </div>
                  </div>
                  <div className="w-32 h-12 px-4 border-t border-neutral-100 flex justify-start items-center gap-1">
                    <div className="text-neutral-700 text-sm font-normal leading-tight">
                      Intern
                    </div>
                  </div>
                  <div className="flex-1 h-12 px-4 border-t border-neutral-100 flex justify-start items-center gap-1 min-w-[120px]">
                    <div className="text-neutral-700 text-sm font-normal leading-tight">
                      +2
                    </div>
                  </div>
                  <div className="w-28 h-12 px-4 border-t border-neutral-100 flex justify-start items-center gap-1">
                    <div className="text-neutral-700 text-sm font-normal leading-tight">
                      Developer
                    </div>
                  </div>
                  <div className="w-28 h-12 px-4 border-t border-neutral-100 flex justify-start items-center gap-1">
                    <div className="text-neutral-700 text-sm font-normal leading-tight">
                      T9LK2QJ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
