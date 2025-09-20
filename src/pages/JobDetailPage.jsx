import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import {
  JobDetailHeader,
  JobDetailNavigation,
  JobDetailTableHeader,
} from "../components/JobDetailComponent";
import JobDataTables from "../components/JobDataTables";
import { useNavigate, useParams } from "react-router-dom";
const applicationData = {
  totalApplications: 120,
  totalShortlisted: 10,
  totalInterviewed: 25,
  assignmentSubmissions: 30,
  assignmentSent: 50,
  companyName: "Zomato",
  jobTitle: "Frontend Developer",
  jobType: "Internship",
  jobStatus: "Open",
  jobPostedOn: "24 Aug 2025, 10:00 AM",
  jobSalary: "₹20K - ₹25K",
  jobId: "Q7X3B9K",
  companyLink: "https://www.zomato.com",
  jdLink: "https://www.zomato.com/careers/frontend-developer-jd.pdf",
  total: [
    {
      appliedOn: "18 Aug, 11:45",
      fullName: "Khushi Parsad",
      email: "khuship8@gmail.com",
      whatsapp: "9498573453",
      portfolio: "View Portfolio",
      resume: "Doc",
      linkedin: true,
      city: "Gurugram, Haryana",
      status: "Intern",
      experience: "+2",
      role: "Developer",
      studentId: "T9LK2QJ",
    },
  ],
};
const JobDetailPage = () => {
  const { jobId, filter } = useParams();
  const [searchValue, setSearchValue] = useState("");
  const [enableCalling, setEnableCalling] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [selectedFilter, setSelectedFilter] = useState(
    filter || "total-applications"
  );

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
    if (filter && filter !== selectedFilter) {
      setSelectedFilter(filter);
    }
  }, [filter]);

  useEffect(() => {
    if (selectedFilter && selectedFilter !== filter) {
      navigate(`/job/${jobId}/${selectedFilter}`);
    }
  }, [selectedFilter]);

  return (
    <div className="w-full h-screen shadow-sm overflow-y-auto relative flex flex-col">
      <JobDetailHeader
        onChange={setEnableCalling}
        value={enableCalling}
        applicationData={applicationData}
      />
      <JobDetailNavigation applicationData={applicationData} />

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
          <div className="w-full flex-1 relative bg-white overflow-x-auto custom-scrollbar">
            <JobDataTables jobId={jobId} total={applicationData.total} />
          </div>
        </div>
      </div>
      {["assignment-submission", "shortlisted-candidates"].includes(
        selectedFilter
      ) && (
        <div className="px-6 pb-3">
          <Pagination
            currentPage={1}
            perPage={10}
            totalEntries={applicationData.total.length}
          />
        </div>
      )}
    </div>
  );
};

export default JobDetailPage;
