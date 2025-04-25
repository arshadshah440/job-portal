import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../global/Loader";
import {
  singlecompanyfetch,
  selectedSingleCompany,
  selectCompanyStatus,
  selectCompanyError,
} from "../../app/features/company/companySlice";

import { useDispatch, useSelector } from "react-redux";

const CompanyDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const company = useSelector(selectedSingleCompany);
  const status = useSelector(selectCompanyStatus);
  const error = useSelector(selectCompanyError);

  useEffect(() => {
    dispatch(singlecompanyfetch(slug));
    console.log(company);
  }, [slug]);
  return (
    <div>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <main className="main bg-white  py-6">
          {status == "loading" && <Loader />}
          {status == "failed" && <h1>{error}</h1>}
          {console.log(company, status)}
          {company && company.title && status == "succeeded" && (
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
              {/* <!-- Company Header --> */}
              <div className="flex items-center space-x-4">
                <img
                  src={
                    company.featured_image
                      ? company.featured_image
                      : "https://via.placeholder.com/60x60"
                  }
                  alt="Company Logo"
                  className="w-24 h-24 rounded-full border"
                />
                <div>
                  <h1 className="text-3xl font-bold">{company.title}</h1>
                  <p className="text-sm text-gray-500">
                    {company.company_location} · Founded in {company.company_founded_year}
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
                  dangerouslySetInnerHTML={{ __html: company.about_company }}
                />
              </div>

              {/* <!-- Stats --> */}
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm text-gray-500">Employees</h3>
                  <p className="text-lg font-medium">{company.company_total_employees}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Revenue</h3>
                  <p className="text-lg font-medium">{company.company_revenue_generates}</p>
                </div>
              </div>

              {/* <!-- Contact Info --> */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Contact</h2>
                <ul className="text-gray-700 space-y-1">
                  <li>📧 Email: {company.company_email}</li>
                  <li>
                    🌐 Website:{" "}
                    <a href="#" className="text-blue-600 underline">
                      {company.company_website}
                    </a>
                  </li>
                  <li>📞 Phone: {company.company_contact_number}</li>
                </ul>
              </div>
            </div>
          )}
          {!company.title && status === "succeeded" && <h1>Job not found</h1>}
        </main>
      </div>
    </div>
  );
};

export default CompanyDetails;
