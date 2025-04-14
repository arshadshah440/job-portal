import React from "react";
import { useDispatch, useSelector } from "react-redux";
import jobSlice from "../../app/features/jobs/jobSlice";
import JobCards from "../global/JobCards";
function JobList() {
  const joblist = useSelector((state) => state.jobs.JobsList);
  const dispatch = useDispatch();

  return <div className="mx-auto max-w-7xl px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    {joblist.map((job) => {
      return (
        <div key={job.id}>
            <JobCards job={job} />
        </div>
      );
    })}
  </div>;
}

export default JobList;
