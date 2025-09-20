import React, { useEffect, useState } from "react";
import { doc, download, link, linkedin, search, tick } from "../assets";
import DateInput from "../components/DateInput";
import SelectButton from "../components/SelectButton";
import {
  JobDetailHeader,
  JobDetailNavigation,
  JobDetailTableHeader,
} from "../components/JobDetailComponent";
import JobDataTables from "../components/JobDataTables";
import { useNavigate, useParams } from "react-router-dom";

const JobDetailPage = () => {
  const { jobId } = useParams();
  const [searchValue, setSearchValue] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [selectedFilter, setSelectedFilter] = useState("total-applications");
  const navigate = useNavigate();
  const filterOptions = [
    { value: "assignment-sent", label: "Assignment sent" },
    { value: "assignment-submission", label: "Assignment Submission" },
    { value: "interview", label: "Interview" },
    { value: "shortlisted-candidates", label: "Shortlisted candidates" },
    { value: "profiles-created", label: "Profiles created" },
    { value: "total-applications", label: "Total Application" },
  ];
  useEffect(() => {
    navigate(`/job/${jobId}/${selectedFilter}`);
  }, [selectedFilter]);

  return (
    <div className="w-full h-screen shadow-sm overflow-y-auto relative flex flex-col">
      <JobDetailHeader />
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
            <JobDataTables jobId={jobId} data={[]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
