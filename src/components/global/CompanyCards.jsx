import React from "react";
import { Link } from "react-router-dom";

const CompanyCards = ({ company }) => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <div className="img_wrapper border h-12 w-12 rounded-[50%]  border-indigo-100">
            <img
              src={
                company?.acf_fields?.logo
                  ? company?.acf_fields?.logo
                  : "https://avatar.iran.liara.run/public/boy"
              }
              alt="Company Logo"
              className="w-12 h-12 p-1  rounded-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{company?.acf_fields?.company_title}</h2>
            <p className="text-sm text-gray-500">{company?.acf_fields?.company_location}</p>
          </div>
        </div>
        <p
          className="text-gray-600 text-base h-[48px] restricttotwo_ar"
          dangerouslySetInnerHTML={{ __html: company?.acf_fields?.about_company }}
        />
        <Link
          to={`/company/${company.id}`}
          className="w-full  px-3 bg-indigo-500 hover:bg-indigo-600 text-white text-center rounded-full py-2 inline-block"
        >
          View Profile →
        </Link>
      </div>
    </div>
  );
};

export default CompanyCards;
