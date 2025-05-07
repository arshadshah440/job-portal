import React from "react";
import { Link } from "react-router-dom";
import JobCards from "../../global/JobCards";
import { useSelector } from "react-redux";
import { selectJobsList } from "../../../app/features/jobs/jobSlice";

const JobLists = () => {
  const joblist = useSelector(selectJobsList);
  return (
    <>
      <section id="job" className="tab-section hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold h-[28px]">Jobs</h2>
          <Link to="/add-job" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-blue-700">Create New Job</Link>
         
        </div>
        <div className="bg-white rounded-lg shadow-sm space-y-3">
        

          <div className="mt-4 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {joblist.map((job) => {
              return (
                <div key={job.id}>
                  <Link to={`/jobs/${job.slug}`}>
                    <JobCards job={job} onClick={() => handleClick(job)} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobLists;
