import React from "react";
import { doc, link, linkedin, tick } from "../assets";
function JobDataTables({ jobId = "", data = [] }) {
  const pathname = window.location.pathname;
  return (
    <div className="w-full flex-1 relative bg-white overflow-x-auto custom-scrollbar pb-4 h-full">
      {(pathname.includes("total-applications") ||
        pathname === `/job/${jobId}`) && (
        <div className="min-w-[1740px] bg-white flex flex-col overflow-hidden">
          <div className="w-full grid grid-cols-[1.2fr_1.5fr_1.8fr_1.2fr_2fr_1fr_.7fr_1.8fr_1.2fr_1fr_1fr_1fr] bg-neutral-100 shadow-table">
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-medium leading-tight text-center">
                Applied on
              </span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-medium leading-tight text-center">
                Full name
              </span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-medium leading-tight text-center">
                Email address
              </span>
            </div>
            <div className="h-12 px-4 flex items-center gap-1">
              <span className="text-neutral-700 text-sm font-medium leading-tight text-center">
                WhatsApp
              </span>
              <img src={tick} alt="Tick" />
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-medium leading-tight text-center">
                Portfolio/Website
              </span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-medium leading-tight text-center">
                Resume
              </span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-medium leading-tight text-center">
                Linkedin
              </span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-medium leading-tight text-center">
                City State
              </span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-medium leading-tight text-center">
                Current status
              </span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-medium leading-tight text-center">
                Experience
              </span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-medium leading-tight text-center">
                Other roles
              </span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-medium leading-tight text-center">
                Student ID
              </span>
            </div>
          </div>
          <div className="w-full grid grid-cols-[1.2fr_1.5fr_1.8fr_1.2fr_2fr_1fr_.7fr_1.8fr_1.2fr_1fr_1fr_1fr] border-t border-neutral-100">
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-normal">
                18 Aug, 11:45
              </span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-normal">
                Khushi Parsad
              </span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-normal">
                khuship8@gmail.com
              </span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-normal">
                9498573453
              </span>
            </div>
            <div className="h-12 px-4 flex items-center gap-1.5">
              <img src={link} alt="Link" />
              <span className="text-neutral-700 text-sm font-normal">
                View Portfolio
              </span>
            </div>
            <div className="h-12 px-4 flex items-center gap-1">
              <img src={doc} alt="Document" />
              <span className="text-neutral-700 text-sm font-normal">Doc</span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <img src={linkedin} alt="LinkedIn" />
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-normal">
                Gurugram, Haryana
              </span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-normal">
                Intern
              </span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-normal">+2</span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-normal">
                Developer
              </span>
            </div>
            <div className="h-12 px-4 flex items-center">
              <span className="text-neutral-700 text-sm font-normal">
                T9LK2QJ
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobDataTables;
