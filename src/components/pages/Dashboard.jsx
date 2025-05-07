import React from "react";
import { useEffect } from "react";
import Sidebar from "../pagebasedcomponents/dashboard/Sidebar";
import Overview from "../pagebasedcomponents/dashboard/Overview";
import JobLists from "../pagebasedcomponents/dashboard/JobLists";
import Applications from "../pagebasedcomponents/dashboard/Applications";
import Applicants from "../pagebasedcomponents/dashboard/Applicants";
import ProfileSettings from "../pagebasedcomponents/dashboard/ProfileSettings";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchjobs,
  selectJobStatus,
  errorMessage,
} from "../../app/features/jobs/jobSlice";
import { UserId } from "../../app/features/auth/registerSlice";
import Loader from "../global/Loader";

const Dashboard = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectJobStatus);
  const error = useSelector(errorMessage);
  const userid = useSelector(UserId);

  useEffect(() => {
    dispatch(fetchjobs({filter_by_company: userid ? userid : 0}));
  }, []);
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-5">
      <div className="flex my-6 bg-white-50 space-y-6">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col px-10">
          {status == "loading" && <Loader />}
          {status == "failed" && <h1>{error}</h1>}
          {status === "succeeded" && (
            <>
              <Overview />
              <JobLists />
              <Applications />
              <Applicants />
              <ProfileSettings />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
