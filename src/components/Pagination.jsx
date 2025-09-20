import React from "react";

const Pagination = ({
  currentPage = 1,
  onPageChange = () => {},
  perPage = 10,
  totalEntries = 0,
}) => {
  const totalPages = Math.ceil(totalEntries / perPage);

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    const pages = [];

    // Always show first page
    pages.push(1);

    // Show ellipsis if needed
    if (currentPage > 3) {
      pages.push("...");
    }

    // Middle range
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }

    // Ellipsis before last
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    // Always show last page
    if (!pages.includes(totalPages)) {
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
      {/* Entries info */}
      <p className="text-slate-600 text-sm">
        Showing {(currentPage - 1) * perPage + 1} to{" "}
        {Math.min(currentPage * perPage, totalEntries)} of {totalEntries}{" "}
        entries
      </p>

      {/* Pagination buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-3 py-2 text-sm rounded-lg border border-teal-500 text-teal-600 [&:hover]:bg-teal-50 disabled:opacity-50"
        >
          Previous
        </button>

        {visiblePages.map((page, idx) =>
          page === "..." ? (
            <span
              key={`ellipsis-${idx}`}
              className="w-9 h-9 flex items-center justify-center text-slate-400"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm ${
                currentPage === page
                  ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white"
                  : "bg-white border border-slate-200 text-teal-600 [&:hover]:bg-slate-100"
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-2 text-sm rounded-lg border border-teal-500 text-teal-600 [&:hover]:bg-teal-50 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
