import { createSlice } from "@reduxjs/toolkit";
import { mockJobs } from "../../data/data";

const initialJobsState = {
  jobs: mockJobs,
  isLoading: false,
  error: null,
  currentJob: null,
  filters: {
    status: "all",
    jobType: "all",
    workMode: "all",
  },
  searchQuery: "",
  sortBy: "createdOn",
  sortOrder: "desc",
};

const initialJobFormState = {
  companyName: "",
  website: "",
  companyDescription: "",
  assignmentSubmissionTemplate: [],
  roleTitle: "",
  roleType: "internship",
  workMode: "wfh",
  stipendSalary: "",
  currency: "INR",
  experience: "",
  experienceBasis: "monthly",
  duration: "",
  location: "",
  responsibilities: "",
  requirements: "",
  skills: [],
  assignmentDocType: "link",
  assignmentDoc: "",
  status: "active",
  isSubmitting: false,
  errors: {},
  isValid: false,
};

const initialState = {
  ...initialJobsState,
  jobForm: initialJobFormState,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    createNewJob: (state, action) => {
      const newJob = {
        id: Date.now().toString(),
        createdOn: new Date().toISOString(),
        companyName: action.payload.companyName,
        jobTitle: action.payload.roleTitle,
        jobType: action.payload.roleType,
        salaryRange: `${action.payload.currency} ${action.payload.stipendSalary}`,
        applicationsReceived: 0,
        shortlisted: 0,
        selected: 0,
        status: action.payload.status,
        jobCode: `JOB-${Date.now()}`,
        totalResponses: 0,
        applicationUrl: "",
        responseUrl: "",
        submissionUrl: "",
        viewAssignmentUrl: "",
        website: action.payload.website,
        companyDescription: action.payload.companyDescription,
        assignmentSubmissionTemplate:
          action.payload.assignmentSubmissionTemplate,
        workMode: action.payload.workMode,
        stipendSalary: action.payload.stipendSalary,
        currency: action.payload.currency,
        experience: action.payload.experience,
        experienceBasis: action.payload.experienceBasis,
        duration: action.payload.duration,
        location: action.payload.location,
        responsibilities: action.payload.responsibilities,
        requirements: action.payload.requirements,
        skills: action.payload.skills,
        assignmentDocType: action.payload.assignmentDocType,
        assignmentDoc: action.payload.assignmentDoc,
      };
      state.jobs.unshift(newJob);
      console.log(newJob);
      state.jobForm = initialJobFormState;
    },
    updateJob: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.jobs.findIndex((job) => job.id === id);
      if (index !== -1) {
        state.jobs[index] = { ...state.jobs[index], ...updates };
      }
    },
    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
    },
    setCurrentJob: (state, action) => {
      state.currentJob = action.payload;
    },
    clearCurrentJob: (state) => {
      state.currentJob = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    clearFilters: (state) => {
      state.filters = initialJobsState.filters;
      state.searchQuery = "";
      state.sortBy = "createdOn";
      state.sortOrder = "desc";
    },
    setJobFormField: (state, action) => {
      const { field, value } = action.payload;
      state.jobForm[field] = value;
      if (state.jobForm.errors[field]) {
        delete state.jobForm.errors[field];
      }
    },
    setJobFormFields: (state, action) => {
      state.jobForm = { ...state.jobForm, ...action.payload };
    },
    setJobFormError: (state, action) => {
      const { field, error } = action.payload;
      state.jobForm.errors[field] = error;
    },
    setJobFormErrors: (state, action) => {
      state.jobForm.errors = action.payload;
    },
    clearJobFormErrors: (state) => {
      state.jobForm.errors = {};
    },
    setJobFormSubmitting: (state, action) => {
      state.jobForm.isSubmitting = action.payload;
    },
    setJobFormValid: (state, action) => {
      state.jobForm.isValid = action.payload;
    },
    resetJobForm: (state) => {
      state.jobForm = initialJobFormState;
    },
    loadJobIntoForm: (state, action) => {
      const job = action.payload;
      state.jobForm = {
        ...initialJobFormState,
        companyName: job.companyName || "",
        website: job.website || "",
        companyDescription: job.companyDescription || "",
        assignmentSubmissionTemplate: job.assignmentSubmissionTemplate || [],
        roleTitle: job.roleTitle || "",
        roleType: job.roleType || "internship",
        workMode: job.workMode || "wfh",
        stipendSalary: job.stipendSalary || "",
        currency: job.currency || "INR",
        experience: job.experience || "",
        experienceBasis: job.experienceBasis || "monthly",
        duration: job.duration || "",
        location: job.location || "",
        responsibilities: job.responsibilities || "",
        requirements: job.requirements || "",
        skills: job.skills || [],
        assignmentDocType: job.assignmentDocType || "link",
        assignmentDoc: job.assignmentDoc || "",
        status: job.status || "active",
      };
    },
    addSkill: (state, action) => {
      const skill = action.payload.trim();
      if (skill && !state.jobForm.skills.includes(skill)) {
        state.jobForm.skills.push(skill);
      }
    },
    removeSkill: (state, action) => {
      state.jobForm.skills = state.jobForm.skills.filter(
        (skill, index) => index !== action.payload
      );
    },
    clearSkills: (state) => {
      state.jobForm.skills = [];
    },
    addAssignmentTemplate: (state, action) => {
      state.jobForm.assignmentSubmissionTemplate.push(action.payload);
    },
    removeAssignmentTemplate: (state, action) => {
      state.jobForm.assignmentSubmissionTemplate =
        state.jobForm.assignmentSubmissionTemplate.filter(
          (template, index) => index !== action.payload
        );
    },
    updateAssignmentTemplate: (state, action) => {
      const { index, template } = action.payload;
      state.jobForm.assignmentSubmissionTemplate[index] = template;
    },
    clearAssignmentTemplates: (state) => {
      state.jobForm.assignmentSubmissionTemplate = [];
    },
    updateJobStats: (state, action) => {
      const { jobId, stats } = action.payload;
      const job = state.jobs.find((job) => job.id === jobId);
      if (job) {
        job.applicationsReceived =
          stats.applicationsReceived || job.applicationsReceived;
        job.shortlisted = stats.shortlisted || job.shortlisted;
        job.selected = stats.selected || job.selected;
        job.totalResponses = stats.totalResponses || job.totalResponses;
      }
    },
    resetJobsState: (state) => {
      return initialState;
    },
  },
});

export const {
  setJobs,
  createNewJob,
  updateJob,
  deleteJob,
  setCurrentJob,
  clearCurrentJob,
  setLoading,
  setError,
  clearError,
  setFilters,
  setSearchQuery,
  setSortBy,
  setSortOrder,
  clearFilters,
  setJobFormField,
  setJobFormFields,
  setJobFormError,
  setJobFormErrors,
  clearJobFormErrors,
  setJobFormSubmitting,
  setJobFormValid,
  resetJobForm,
  loadJobIntoForm,
  addSkill,
  removeSkill,
  clearSkills,
  addAssignmentTemplate,
  removeAssignmentTemplate,
  updateAssignmentTemplate,
  clearAssignmentTemplates,
  updateJobStats,
  resetJobsState,
} = jobSlice.actions;

export default jobSlice.reducer;
