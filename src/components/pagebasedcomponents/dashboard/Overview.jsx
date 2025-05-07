import React from "react";
import { useSelector } from "react-redux";
import {totalavailablejobs} from "../../../app/features/jobs/jobSlice";
const Overview = () => {
  const totaljobs = useSelector(totalavailablejobs);
  return (
    <div>
      <section id="overview" className="tab-section">
        <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-sm text-gray-500">Total Jobs</h2>
            <p className="text-2xl font-semibold mt-1">{totaljobs}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-sm text-gray-500">Applicants</h2>
            <p className="text-2xl font-semibold mt-1">135</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-sm text-gray-500">Pending Apps</h2>
            <p className="text-2xl font-semibold mt-1">12</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-sm text-gray-500">Interviews</h2>
            <p className="text-2xl font-semibold mt-1">5</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
