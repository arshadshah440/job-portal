import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../global/Loader";
import {
  singlejobfetch,
  selectedSingleJob,
  selectJobStatus,
} from "../../app/features/jobs/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import ApplyToJob from "../pagebasedcomponents/ApplyToJob";

const JobDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const currentjob = useSelector(selectedSingleJob);
  const status = useSelector(selectJobStatus);
  useEffect(() => {
    dispatch(singlejobfetch(slug));
  }, [slug]);
  const [visible, setvisible] = React.useState(false);
  const [jobtitle, setjobtitle] = React.useState("");
  const handleclick = () => {
    setvisible(!visible);
    setjobtitle(currentjob.title);
  };
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <main className="main bg-white  py-6">
        {status == "loading" && <Loader />}
        {status == "failed" && <h1>{error}</h1>}
        {currentjob && currentjob.title && status == "succeeded" && (
          <div className="flex flex-wrap justify-between max-w-6xl mx-auto">
            <div className="job-post w-full md:w-8/12">
              <div className="job-meta mb-4">
                <span className="text-xs text-gray-500">
                  Posted less than a minute ago
                </span>

                <h1 className="job-title text-2xl">{currentjob.title}</h1>

                <span className="job-type bg-indigo-500 text-white p-1 text-xs mr-4">
                  {currentjob.job_type}
                </span>
                <span className="job-location text-xs">
                  {currentjob.job_location}
                </span>
                {/* <span className="remote-job text-xs ml-4">Remote Job</span> */}
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

              <div className="job-description mb-4 mt-8">
                <h3 className="text-xl font-medium">Job Descriptions: </h3>
                <p
                  className="mb-2 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: currentjob.job_description,
                  }}
                />
              </div>

              <div className="job-description mb-4">
                <h3 className="text-xl 	font-medium	">Job Requirements: </h3>
                <p
                  className="mb-2 mt-3"
                  dangerouslySetInnerHTML={{ __html: currentjob.requirements }}
                />
              </div>

              <button
                onClick={() => handleclick(currentjob.job_title)}
                className="w-full  px-3 bg-indigo-500 hover:bg-indigo-600 text-white text-center block rounded-full py-2"
              >
                Apply for this job
              </button>
            </div>

            {currentjob.company && typeof currentjob.company === "object" && (
              <div className="w-full hidden md:block md:w-3/12">
                <div className="employer-info mb-4 text-center ">
                  <div className="img_wrapper border h-40 w-40 rounded-[50%] mb-2 mx-auto border-indigo-100">
                    <img
                      className="h-40 object-contain
                       w-40 inline-block"
                      src={
                        currentjob.company.logo
                          ? currentjob.company.logo
                          : "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      }
                      alt={currentjob.company.name}
                    />
                  </div>

                  <Link
                    to={`/company/${currentjob.company.slug}`}
                    className="text-sm hover:underline"
                  >
                    <h3 className="employer-name text-center text-2xl">
                      {currentjob.company.name}
                    </h3>
                  </Link>
                </div>

                <button
                  onClick={() => handleclick(currentjob.title)}
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
            )}
          </div>
        )}
        {!currentjob.title && status === "succeeded" && <h1>Job not found</h1>}
      </main>
      <ApplyToJob
        visible={visible}
        jobtitle={jobtitle}
        onclose={() => setvisible(!visible)}
      />
    </div>
  );
};

export default JobDetails;
