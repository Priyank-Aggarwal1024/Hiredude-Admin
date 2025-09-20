import React, { useState } from "react";
import { copy } from "../assets";

const JobActionPopup = ({
  appLink,
  submissionLink,
  assignmentLink,
  onEdit,
  onDelete,
}) => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  const LinkItem = ({ link, label, type }) => (
    <a
      href={link}
      rel="noopener noreferrer"
      className="group cursor-pointer w-full px-2 py-1.5 rounded-md flex justify-between items-center text-slate-800 text-sm font-medium [&:hover]:bg-slate-100 transition"
    >
      <span>{label}</span>
      <img
        src={copy}
        alt="Copy"
        className={`w-4 h-4 opacity-70 group-hover:opacity-100 transition ${
          copied === type ? "text-green-600" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          handleCopy(link, type);
        }}
      />
    </a>
  );

  return (
    <div className="w-[200px] bg-white rounded-md shadow-md outline-1 outline-slate-200 flex flex-col overflow-hidden">
      <div className="p-1 bg-white border-b border-slate-200 flex flex-col gap-1">
        <LinkItem link={appLink} label="Application URL" type="app" />
        <LinkItem
          link={submissionLink}
          label="Submission URL"
          type="submission"
        />
        <LinkItem
          link={assignmentLink}
          label="View Assignment"
          type="assignment"
        />
      </div>

      <div className="p-1 bg-white border-t border-slate-200 flex flex-col">
        <button
          onClick={onEdit}
          className="w-full cursor-pointer px-2 py-1.5 rounded-md flex justify-start items-center text-slate-800 text-sm font-medium [&:hover]:bg-slate-100 transition"
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="w-full cursor-pointer px-2 py-1.5 rounded-md flex justify-start items-center text-red-600 text-sm font-medium [&:hover]:bg-red-50 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobActionPopup;
