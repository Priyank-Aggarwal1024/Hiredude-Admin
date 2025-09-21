import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Textarea from "../components/Textarea";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import { uploadFile, cross, copy, lArrow } from "../assets";
import {
  setJobFormField,
  addSkill,
  removeSkill,
  createNewJob,
  resetJobForm,
  setJobFormSubmitting,
  setJobFormError,
  clearJobFormErrors,
} from "../features/jobs/jobSlice";
import { validateForm } from "../utils/validate";

const CreateJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { jobForm } = useSelector((state) => state.jobs);
  const [currentSkill, setCurrentSkill] = useState("");

  const handleChange = (field, value) => {
    dispatch(setJobFormField({ field, value }));
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleNumericChange = (field) => (e) => {
    const value = e.target.value;
    if (value === "") {
      handleChange(field, "");
      return;
    }
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const rounded = Math.round(numValue * 100) / 100;
      handleChange(field, rounded.toString());
    }
  };

  const handleAddSkill = (e) => {
    if (e.key === "Enter" && currentSkill.trim()) {
      e.preventDefault();
      if (!jobForm.skills.includes(currentSkill.trim())) {
        dispatch(addSkill(currentSkill.trim()));
      }
      setCurrentSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    const skillIndex = jobForm.skills.findIndex(
      (skill) => skill === skillToRemove
    );
    if (skillIndex !== -1) {
      dispatch(removeSkill(skillIndex));
    }
  };

  const handleAssignmentUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleChange("assignmentDoc", file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearJobFormErrors());

    const errors = validateForm(jobForm);
    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([field, error]) => {
        dispatch(setJobFormError({ field, error }));
      });
      return;
    }

    try {
      dispatch(setJobFormSubmitting(true));

      const jobData = {
        companyName: jobForm.companyName,
        website: jobForm.website,
        companyDescription: jobForm.companyDescription,
        assignmentSubmissionTemplate: jobForm.assignmentSubmissionTemplate,
        roleTitle: jobForm.roleTitle,
        roleType: jobForm.roleType,
        workMode: jobForm.workMode,
        stipendSalary: jobForm.stipendSalary,
        currency: jobForm.currency,
        experience: jobForm.experience,
        experienceBasis: jobForm.experienceBasis,
        duration: jobForm.duration,
        location: jobForm.location,
        responsibilities: jobForm.responsibilities,
        requirements: jobForm.requirements,
        skills: jobForm.skills,
        assignmentDocType: jobForm.assignmentDocType,
        assignmentDoc: jobForm.assignmentDoc,
        status: "active",
      };

      dispatch(createNewJob(jobData));
      //   dispatch(resetJobForm());
      navigate("/");
    } catch (error) {
      console.error("Error creating job:", error);
      dispatch(
        setJobFormError({
          field: "general",
          error: "Failed to create job. Please try again.",
        })
      );
    } finally {
      dispatch(setJobFormSubmitting(false));
    }
  };

  return (
    <>
      <div className="w-full px-4 sm:px-6 py-4 bg-slate-50 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2">
            <img
              src={lArrow}
              alt="Back arrow "
              className="cursor-pointer"
              onClick={() => {
                dispatch(resetJobForm());
                navigate("/");
              }}
            />
            <h2 className="text-slate-800 text-lg font-medium">
              Create Job/Internship Application
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleCopy("https://example.com/application")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 transition"
            >
              <span className="text-slate-800 text-sm font-medium">
                Application URL
              </span>
              <img src={copy} alt="Copy" />
            </button>

            <button
              onClick={() => handleCopy("https://example.com/submission")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 transition"
            >
              <span className="text-slate-800 text-sm font-medium">
                Submission URL
              </span>
              <img src={copy} alt="Copy" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 pt-2 pb-6 flex flex-col lg:flex-row gap-6 w-full">
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white rounded-lg border border-slate-200 flex flex-col">
            <div className="px-6 py-4 bg-white border-b border-slate-200 rounded-t-lg">
              <span className="text-[#1d293d] text-base font-semibold">
                Company Info
              </span>
            </div>
            <div className="p-6 flex flex-col gap-5">
              <Input
                label="Company Name"
                required
                placeholder="Eg., Cred"
                value={jobForm.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
              />
              <Input
                label="Website/Socials"
                required
                placeholder="Enter URL"
                value={jobForm.website}
                onChange={(e) => handleChange("website", e.target.value)}
              />
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-1">
                  <span className="text-[#45556c] text-sm font-medium">
                    Company Description
                  </span>
                  <span className="text-[#e7000b] text-sm font-medium">*</span>
                </div>
                <Textarea
                  placeholder="Write here...."
                  value={jobForm.companyDescription}
                  onChange={(e) =>
                    handleChange("companyDescription", e.target.value)
                  }
                  rows={4}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 flex flex-col">
            <div className="px-6 py-4 bg-white border-b border-slate-200 rounded-t-lg">
              <span className="text-[#1d293d] text-base font-semibold">
                Assignment Submission Template
              </span>
            </div>
            <div className="p-6 flex flex-col gap-6">
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-1">
                  <span className="text-[#45556c] text-sm font-medium">
                    Select Template
                  </span>
                  <span className="text-[#e7000b] text-sm font-medium">*</span>
                </div>
                <Select
                  options={[
                    "Default Template",
                    "Design Role Template",
                    "Developer Template",
                  ]}
                  onSelect={(template) =>
                    handleChange("assignmentSubmissionTemplate", [template])
                  }
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 flex flex-col">
            <div className="px-6 py-4 bg-white border-b border-slate-200 rounded-t-lg">
              <span className="text-[#1d293d] text-base font-semibold">
                Role Info
              </span>
            </div>
            <div className="p-6 flex flex-col gap-5">
              <Input
                label="What role are you hiring for"
                required
                placeholder="Eg., Full Stack Developer Intern"
                value={jobForm.roleTitle}
                onChange={(e) => handleChange("roleTitle", e.target.value)}
              />

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1">
                  <span className="text-[#45556c] text-sm font-medium">
                    Type
                  </span>
                  <span className="text-[#e7000b] text-sm font-medium">*</span>
                </div>
                <div className="flex gap-1 flex-wrap">
                  {["internship", "job", "freelance"].map((option) => (
                    <div
                      key={option}
                      onClick={() => handleChange("roleType", option)}
                      className={`px-3.5 py-2 rounded-full border border-[#cad5e2] cursor-pointer text-base font-normal capitalize ${
                        jobForm.roleType === option
                          ? "bg-blue-700 text-slate-200"
                          : "bg-white text-[#62748e]"
                      }`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1">
                  <span className="text-[#45556c] text-sm font-medium">
                    Work Mode
                  </span>
                  <span className="text-[#e7000b] text-sm font-medium">*</span>
                </div>
                <div className="flex gap-1 flex-wrap">
                  {["wfh", "hybrid", "wfo"].map((option) => (
                    <div
                      key={option}
                      onClick={() => handleChange("workMode", option)}
                      className={`px-3.5 py-2 rounded-full border border-[#cad5e2] cursor-pointer text-base font-normal uppercase ${
                        jobForm.workMode === option
                          ? "bg-blue-700 text-slate-200"
                          : "bg-white text-[#62748e]"
                      }`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white rounded-lg border border-slate-200 flex flex-col">
            <div className="px-6 py-4 bg-white border-b border-slate-200 rounded-t-lg">
              <span className="text-[#1d293d] text-base font-semibold">
                Job Details (JD)
              </span>
            </div>
            <div className="p-6 flex flex-col gap-5">
              <Input
                label="Stipend / Salary"
                required
                placeholder="Eg., 20000"
                type="number"
                value={jobForm.stipendSalary}
                onChange={handleNumericChange("stipendSalary")}
                suffix="INR"
              />
              <Input
                label="Experience"
                required
                placeholder="Eg., 2 Yrs"
                value={jobForm.experience}
                onChange={handleNumericChange("experience")}
                suffix="Years"
              />
              <Input
                label="Duration"
                required
                placeholder="Eg., 6 Months"
                value={jobForm.duration}
                onChange={handleNumericChange("duration")}
                suffix="Months"
              />
              <Input
                label="Location"
                required
                placeholder="Eg., Chennai, Tamil Nadu"
                value={jobForm.location}
                onChange={(e) => handleChange("location", e.target.value)}
              />
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-1">
                  <span className="text-[#45556c] text-sm font-medium">
                    Responsibilities
                  </span>
                  <span className="text-[#e7000b] text-sm font-medium">*</span>
                </div>
                <Textarea
                  placeholder="Write here...."
                  value={jobForm.responsibilities}
                  onChange={(e) =>
                    handleChange("responsibilities", e.target.value)
                  }
                  rows={4}
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <Input
                  label="Requirements (Skills)"
                  required
                  placeholder="Eg., Backend"
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  onKeyDown={handleAddSkill}
                />
                <div className="flex flex-wrap gap-2 content-center">
                  {jobForm.skills && jobForm.skills.length > 0 ? (
                    jobForm.skills.slice(0, 3).map((skill, index) => (
                      <div
                        key={index}
                        className="px-2.5 py-1.5 bg-[#eef8f7] rounded-full flex items-center gap-1"
                      >
                        <span className="text-[#1d293d] text-sm font-medium">
                          {skill}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemoveSkill(skill)}
                          className="w-3 h-3 relative flex items-center justify-center hover:bg-red-100 rounded-full"
                        >
                          <img
                            src={cross}
                            alt="Remove"
                            className="w-2.5 h-2.5"
                          />
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="text-[#62748e] text-sm italic">
                      No skills added yet. Press Enter to add skills.
                    </div>
                  )}
                  {jobForm.skills && jobForm.skills.length > 3 && (
                    <div className="px-2.5 py-1.5 bg-[#eef8f7] rounded-full flex items-center gap-1">
                      <span className="text-[#1d293d] text-sm font-medium">
                        +{jobForm.skills.length - 3}
                      </span>
                    </div>
                  )}
                </div>
                {jobForm.errors?.skills && (
                  <div className="text-[#e7000b] text-sm">
                    {jobForm.errors.skills}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 flex flex-col">
            <div className="px-6 py-4 bg-white border-b border-slate-200 flex items-center gap-4 rounded-t-lg">
              <div className="flex-1">
                <span className="text-[#1d293d] text-base font-semibold">
                  Assignment Doc.
                </span>
                <span className="text-[#e7000b] text-base font-normal">*</span>
              </div>
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => handleChange("assignmentDocType", "upload")}
              >
                <div className="w-4 h-4 relative">
                  <div
                    className={`w-4 h-4 left-0 top-0 absolute rounded-full border ${
                      jobForm.assignmentDocType === "upload"
                        ? "border-blue-700"
                        : "border-[#45556c]/60"
                    }`}
                  />
                  {jobForm.assignmentDocType === "upload" && (
                    <div className="w-3 h-3 left-0.5 top-0.5 absolute bg-gradient-to-r from-blue-700 to-blue-700 rounded-full" />
                  )}
                </div>
                <span
                  className={`text-base font-medium ${
                    jobForm.assignmentDocType === "upload"
                      ? "text-blue-700"
                      : "text-[#45556c]"
                  }`}
                >
                  Upload Doc.
                </span>
              </div>
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => handleChange("assignmentDocType", "link")}
              >
                <div className="w-4 h-4 relative">
                  <div
                    className={`w-4 h-4 left-0 top-0 absolute rounded-full border ${
                      jobForm.assignmentDocType === "link"
                        ? "border-blue-700"
                        : "border-[#45556c]/60"
                    }`}
                  />
                  {jobForm.assignmentDocType === "link" && (
                    <div className="w-3 h-3 left-0.5 top-0.5 absolute bg-gradient-to-r from-blue-700 to-blue-700 rounded-full" />
                  )}
                </div>
                <span
                  className={`text-base font-medium ${
                    jobForm.assignmentDocType === "link"
                      ? "text-blue-700"
                      : "text-[#45556c]"
                  }`}
                >
                  Add Link
                </span>
              </div>
            </div>

            <div className="px-6 py-4.5 flex flex-col gap-6">
              {jobForm.assignmentDocType === "upload" ? (
                <div className="h-29 p-3 flex flex-col justify-center items-center gap-2 relative border-[1px] border-[#CAD5E2] rounded-[2px] w-full">
                  <div className="w-10 h-10 relative">
                    <img src={uploadFile} alt="Upload" className="w-10 h-10" />
                  </div>
                  <div className="text-center text-[#a6aaae] text-sm font-normal">
                    Click to upload or drag and drop <br /> (max file size:
                    10MB)
                  </div>
                  <input
                    type="file"
                    onChange={handleAssignmentUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              ) : (
                <Textarea
                  placeholder="Add link"
                  value={jobForm.assignmentDoc}
                  onChange={(e) =>
                    handleChange("assignmentDoc", e.target.value)
                  }
                />
              )}
            </div>
          </div>

          <div className="flex gap-2.5 justify-start">
            <button
              type="button"
              className="w-full px-10 py-2.5 bg-slate-200 rounded-lg flex justify-center items-center gap-2"
              onClick={() => {
                dispatch(resetJobForm());
                navigate("/");
              }}
              disabled={jobForm.isSubmitting}
            >
              <span className="text-[#1d293d] text-sm font-medium">Cancel</span>
            </button>
            <Button
              onClick={handleSubmit}
              disabled={jobForm.isSubmitting}
              type="submit"
              className="w-full"
            >
              {jobForm.isSubmitting ? "Publishing..." : "Publish Application"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateJob;
