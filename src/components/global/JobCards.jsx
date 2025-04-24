import React from "react";
import linkedin from "../../assets/img/linkedin.jpg";

const JobCards = ({ job }) => {
  return (
    <div>
      <div className="m-5">
        <div className="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
          <div className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
            <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
              <img
                src={linkedin}
                alt=""
                className="h-full w-full object-cover text-gray-700"
              />
            </div>
          </div>
          <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
            {job.company &&
              typeof job.company === "object" &&
              !Array.isArray(job.company) &&
              job.company.name && (
                <h3 className="text-sm text-gray-600">{job.company.name}</h3>
              )}

            <div className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">
              {" "}
              {job.title}{" "}
            </div>
            <p
              className="overflow-hidden pr-7 text-sm"
              dangerouslySetInnerHTML={{ __html: job.job_description }}
            />

            <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
              <div className="">
                Experience:
                <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                  {" "}
                  {job.required_experience}{" "}
                </span>
              </div>
              <div className="">
                Salary:
                <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                  {job.salary_range}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCards;
