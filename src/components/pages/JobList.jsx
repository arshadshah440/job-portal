import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jobSlice from "../../app/features/jobs/jobSlice";
import JobCards from "../global/JobCards";
import JobPopup from "../pagebasedcomponents/JobPopup";
function JobList() {
  const joblist = useSelector((state) => state.jobs.JobsList);
  const dispatch = useDispatch();
  const [currentjob, setcurrentjob] = React.useState({});
  const [visible, setvisible] = React.useState(false);

  const handleClick = (job) => {
    setcurrentjob(job);
    setvisible(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {joblist.map((job) => {
        return (
          <div key={job.id}>
            <Link to={`/jobs/${job.id}`}>
              <JobCards job={job} onClick={() => handleClick(job)} />
            </Link>
          </div>
        );
      })}
      <JobPopup
        visible={visible}
        job={currentjob}
        onclose={() => setvisible(!visible)}
      />
    </div>
  );
}

export default JobList;
