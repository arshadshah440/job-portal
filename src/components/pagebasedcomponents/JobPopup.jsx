import React from "react";

const JobPopup = ({ visible,job,onclose }) => {
  return (
    <div className={visible ? "block" : "hidden"}>
      <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center">
        <div className="bg-white w-full max-w-2xl mx-auto rounded-2xl shadow-2xl z-50 p-6 sm:p-8 relative">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            aria-label="Close"  onClick={onclose}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
               strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="mb-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              {job.job_title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              at{" "}
              <span className="font-medium text-gray-700">
                {job.company_name}
              </span>
            </p>
          </div>
          <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
            <div className="">
              Experience:
              <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                {" "}
                {job.experience}{" "}
              </span>
            </div>
            <div className="">
              Salary:
              <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                {job.salary_range}
              </span>
            </div>
          </div>

          <div className="max-h-64 mt-5 overflow-y-auto text-gray-700 text-sm leading-relaxed space-y-3">
            <p>
             {job.description}
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-sm font-medium">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPopup;
