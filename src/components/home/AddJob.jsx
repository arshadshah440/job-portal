import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addJob } from "../../app/features/jobs/jobSlice";

const AddJob = () => {
  const count = useSelector((state) => state.jobs.JobsList);

  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    id: count.length + 1,
    job_title: "",
    company_name: "",
    location: "",
    salary_range: "",
    experience: "",
    description: "",
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
    dispatch(addJob(formData));
    setFormData({
      id: count.length + 1,
      job_title: "",
      company_name: "",
      location: "",
      salary_range: "",
      experience: "",
      description: "",
    });

    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);

    // You can add API call or form validation here
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add a Job</h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Title
          </label>
          <input
            type="text"
            name="job_title"
            value={formData.job_title}
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
            Experience
          </label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="3 years"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. New York, Remote"
          />
        </div>

        {/* Job Type */}
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
            <option value="">Select type</option>
            <option value="full-time">$50k - $100k</option>
            <option value="part-time">$25k - $50k</option>
            <option value="contract">$10k - $25k</option>
            <option value="internship">$5k - $10k</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the role and responsibilities..."
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
    </div>
  );
};

export default AddJob;
