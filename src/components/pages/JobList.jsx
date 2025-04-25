import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jobSlice from "../../app/features/jobs/jobSlice";
import Hero from "../pagebasedcomponents/Hero";
import {
  selectJobsList,
  selectJobStatus,
  fetchjobs,
  errorMessage,
} from "../../app/features/jobs/jobSlice";
import JobCards from "../global/JobCards";
import JobPopup from "../pagebasedcomponents/JobPopup";
import Loader from "../global/Loader";

function JobList({ishome = false}) {
  const joblist = useSelector(selectJobsList);
  const status = useSelector(selectJobStatus);
  const error = useSelector(errorMessage);
  const dispatch = useDispatch();
  const [currentjob, setcurrentjob] = React.useState({});
  const [visible, setvisible] = React.useState(false);

  const handleClick = (job) => {
    setcurrentjob(job);
    setvisible(true);
  };

  useEffect(() => {
    dispatch(fetchjobs());
  }, []);

  return (
    <>
     {!ishome &&
      <Hero
        title="Your Ideal React Job Awaits"
        subtitle="Find the React job that fits your skills and needs"
      />
     }

      {status == "loading" && <Loader />}
      {status == "failed" && <h1>{error}</h1>}
      <div className="mx-auto max-w-7xl py-[60px] px-2 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {status == "succeeded" &&
          joblist.map((job) => {
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
    </>
  );
}

export default JobList;
