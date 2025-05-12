import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../global/Loader";
import {
  singlecompanyfetch,
  selectedSingleCompany,
  selectCompanyStatus,
  selectCompanyError,
} from "../../app/features/company/companySlice";
import { UserId } from "../../app/features/auth/registerSlice";

import { useDispatch, useSelector } from "react-redux";
import JobCards from "../global/JobCards";

const CompanyDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const company = useSelector(selectedSingleCompany);
  const status = useSelector(selectCompanyStatus);
  const error = useSelector(selectCompanyError);
  const userid = useSelector(UserId);

  useEffect(() => {
    dispatch(singlecompanyfetch(slug));
  }, [userid]);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <main className="main bg-white  py-6">
          {status == "loading" && <Loader />}
          {status == "failed" && <h1>{error}</h1>}
          {company && company.user_login && status == "succeeded" && (
            <div>
              <div className="w-100 mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
                {/* <!-- Company Header --> */}
                <div className="flex items-center space-x-4">
                  <img
                    src={
                      company?.acf_fields?.logo
                        ? company?.acf_fields?.logo
                        : "https://avatar.iran.liara.run/public/boy"
                    }
                    alt="Company Logo"
                    className="w-24 h-24 rounded-full border"
                  />
                  <div>
                    <h1 className="text-3xl font-bold">
                      {company?.acf_fields?.company_title}
                    </h1>
                    <p className="text-sm text-gray-500">
                      {company?.acf_fields?.company_location} · Founded in{" "}
                      {company?.acf_fields?.company_founded_year}
                    </p>
                  </div>
                </div>

                {/* <!-- Description --> */}
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-2">
                    About the Company
                  </h2>
                  <p
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: company?.acf_fields?.about_company,
                    }}
                  />
                </div>

                {/* <!-- Stats --> */}

                <div className="mt-6 grid grid-cols-2 gap-6">
                  {company?.acf_fields?.company_total_employees && (
                    <div>
                      <h3 className="text-sm text-gray-500">Employees</h3>
                      <p className="text-lg font-medium">
                        {company?.acf_fields?.company_total_employees}
                      </p>
                    </div>
                  )}

                  {company?.acf_fields?.company_revenue_generates && (
                    <div>
                      <h3 className="text-sm text-gray-500">Revenue</h3>
                      <p className="text-lg font-medium">
                        {company?.acf_fields?.company_revenue_generates}
                      </p>
                    </div>
                  )}
                </div>

                {/* <!-- Contact Info --> */}
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-2">Contact</h2>
                  <ul className="text-gray-700 space-y-1">
                    {company?.acf_fields?.company_email && (
                      <li>📧 Email: {company?.acf_fields?.company_email}</li>
                    )}
                    {company?.acf_fields?.company_website && (
                      <li>
                        🌐 Website:{" "}
                        <a href="#" className="text-blue-600 underline">
                          {company?.acf_fields?.company_website}
                        </a>
                      </li>
                    )}
                    {company?.acf_fields?.company_contact_number && (
                      <li>
                        📞 Phone: {company?.acf_fields?.company_contact_number}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="mx-auto max-w-7xl px-2 py-10">
                {Array.isArray(company.related_jobs) &&
                  company.related_jobs.length > 0 && (
                    <>
                      <h2 className="text-2xl font-semibold mb-2">
                        Related Jobs
                      </h2>
                      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
                        {company.related_jobs.map((job) => (
                          <div key={job.id}>
                            <Link to={`/jobs/${job.slug}`}>
                              <JobCards job={job} />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
              </div>
            </div>
          )}

          {!company.user_login && status === "succeeded" && (
            <h1>Job not found</h1>
          )}
        </main>
      </div>
    </div>
  );
};

export default CompanyDetails;
