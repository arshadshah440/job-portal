import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { filterJob } from "../../app/features/jobs/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import ApplyToJob from "../pagebasedcomponents/ApplyToJob";

const JobDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterJob(id));
  }, []);
  const currentjob = useSelector((state) => state.jobs.CurrentJob);
  const [visible, setvisible] = React.useState(false);
  const [jobtitle, setjobtitle] = React.useState("");
  const handleclick = () => {
    setvisible(!visible);
    setjobtitle(currentjob.job_title);
  };
  return (
    <div>
      <main className="main bg-white px-6 md:px-16 py-6">
        <div className="flex flex-wrap justify-between max-w-6xl mx-auto">
          <div className="job-post w-full md:w-8/12">
            <div className="job-meta mb-4">
              <span className="text-xs text-gray-500">
                Posted less than a minute ago
              </span>

              <h1 className="job-title text-2xl">{currentjob.job_title}</h1>

              <span className="job-type bg-indigo-500 text-white p-1 text-xs mr-4">
                Full-time
              </span>
              <span className="job-location text-xs">{currentjob.location}</span>
              <span className="remote-job text-xs ml-4">Remote Job</span>
            </div>

            {/* admin controls */}
            {/* <div className="admin-controls block md:hidden text-sm mb-4 border-t border-b py-2">
          <h5 className="text-gray-700 mb-2">Admin controls</h5>
          <div className="controls mb-2">
            <a href="#" className="border border-2 text-indigo-500 hover:text-white rounded border-indigo-500 hover:bg-indigo-500 p-1 mr-1">View</a>
          <a href="#" className="border border-2 text-indigo-500 hover:text-white rounded border-indigo-500 hover:bg-indigo-500 p-1 mr-1">Edit</a>
          <a href="#" className="border border-2 text-indigo-500 hover:text-white rounded border-indigo-500 hover:bg-indigo-500 p-1">Delete</a>
          </div>
        </div> */}

            <div className="job-description mb-4">
              <h3 className="text-xl">Job Descriptions: </h3>
              <p className="mb-2 mt-3">{currentjob.description}</p>
            </div>

            <button
              onClick={() => handleclick(currentjob.job_title)}
              className="w-full  px-3 bg-indigo-500 hover:bg-indigo-600 text-white text-center block rounded-full py-2"
            >
              Apply for this job
            </button>
          </div>

          <div className="w-full hidden md:block md:w-3/12">
            <div className="employer-info mb-4 text-center ">
              <img
                className="h-40 w-40 inline-block"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt=""
              />
              <a href="#" className="text-sm hover:underline">
                <h3 className="employer-name text-center">Github</h3>
              </a>
            </div>

            <button
              onClick={() => handleclick(currentjob.job_title)}
              className="w-full px-3 bg-indigo-500 hover:bg-indigo-600 text-white text-center block rounded-full py-2 mb-4"
            >
              Apply for this job
            </button>

            {/* <div className="admin-controls text-center text-sm">
              <h5 className="text-gray-700 mb-2">Admin controls</h5>
              <div className="controls">
                <a
                  href="#"
                  className="border border-2 text-indigo-500 hover:text-white rounded border-indigo-500 hover:bg-indigo-500 p-1 mr-1"
                >
                  View
                </a>
                <a
                  href="#"
                  className="border border-2 text-indigo-500 hover:text-white rounded border-indigo-500 hover:bg-indigo-500 p-1 mr-1"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="border border-2 text-indigo-500 hover:text-white rounded border-indigo-500 hover:bg-indigo-500 p-1"
                >
                  Delete
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </main>
      <ApplyToJob visible={visible} jobtitle={jobtitle} onclose={() => setvisible(!visible)}/>
    </div>
  );
};

export default JobDetails;
