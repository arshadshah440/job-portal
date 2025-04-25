import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import companySlice from "../../app/features/company/companySlice";
import {
  fetchcompany,
  selectCompanyList,
  selectCompanyStatus,
  selectCompanyError,
} from "../../app/features/company/companySlice";
import CompanyCards from "../global/CompanyCards";
import Loader from "../global/Loader";
import Hero from "../pagebasedcomponents/Hero";

const Companies = () => {
  const dispatch = useDispatch();
  const companyList = useSelector(selectCompanyList);
  const status = useSelector(selectCompanyStatus);
  const error = useSelector(selectCompanyError);

  useEffect(() => {
    dispatch(fetchcompany());
  }, []);

  return (
    <>

      <Hero title="Company Listing" subtitle="Find the Company that fits your skills and needs" />
      {status == "loading" && <Loader />}
      {status == "failed" && <h1>{error}</h1>}
      <div className="mx-auto pt-[60px] gap-10 max-w-7xl px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {status == "succeeded" &&
          companyList.map((company) => {
            return (
              <div key={company.id}>
                <Link to={`/company/${company.slug}`}>
                  <CompanyCards company={company} />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Companies;
