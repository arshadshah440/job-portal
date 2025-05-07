import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createJob,
  selectJobStatus,
  errorMessage,
  newJobslug,
} from "../../app/features/jobs/jobSlice";
import { UserId } from "../../app/features/auth/registerSlice";
import Loader from "../global/Loader";
const AddJob = () => {
  // const count = useSelector((state) => state.jobs.JobsList);
  const status = useSelector(selectJobStatus);
  const error = useSelector(errorMessage);
  const newjobslug = useSelector(newJobslug);
  const userid = useSelector(UserId);

  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    company_name: "",
    job_location: "",
    salary_range: "",
    required_experience: "",
    job_description: "",
    job_type: "",
    requirements: "",
    user_id: userid,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSuccessMessage("Job added successfully!");
    dispatch(createJob(formData));
    setFormData({
      title: "",
      company_name: "",
      job_location: "",
      salary_range: "",
      required_experience: "",
      job_description: "",
      job_type: "",
      requirements: "",
      user_id: userid,
    });
    setTimeout(() => {
      navigate("/jobs");
      setSuccessMessage("");
    }, 3000);

    // You can add API call or form validation here
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add a Job</h2>

      {status == "loading" && <Loader />}
      {status == "failed" && <h1>{error}</h1>}
      {successMessage == "" && (
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Frontend Developer"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Google"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Required Experience
            </label>
            <input
              type="text"
              name="required_experience"
              value={formData.required_experience}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="3 years"
              required
            />
          </div>

          {/* job_location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Location
            </label>
            <input
              type="text"
              name="job_location"
              value={formData.job_location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. New York, Remote"
            />
          </div>
          {/* Job Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Type
            </label>
            <select
              name="job_type"
              value={formData.job_type}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>
          {/* Salary Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Salary Range
            </label>
            <select
              name="salary_range"
              value={formData.salary_range}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="$0 - $5k">Select type</option>
              <option value="$5k - $10k">$5k - $10k</option>
              <option value="10k - $25k">$10k - $25k</option>
              <option value="$25k - $50k">$25k - $50k</option>
              <option value="$50k - $100k">$50k - $100k</option>
            </select>
          </div>

          {/* job_description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Description
            </label>
            <textarea
              name="job_description"
              value={formData.job_description}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe the role and responsibilities..."
              required
            />
          </div>

          {/* requirements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Requirements
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe the Requirements"
              required
            />
          </div>
          {successMessage && (
            <div className="mt-5 p-4 rounded-xl bg-green-100 border border-green-400 text-green-800 text-sm">
              {successMessage}
            </div>
          )}
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
            >
              {successMessage ? "Job Posted" : "Post Job"}
            </button>
          </div>
        </form>
      )}

      {successMessage && (
        <div className="mt-5 p-4 rounded-xl bg-green-100 border border-green-400 text-green-800 text-sm">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default AddJob;
