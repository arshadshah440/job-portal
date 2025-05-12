import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ApplyToJob = ({ visible, jobtitle, onclose }) => {
  const [showthanyou, setShowthanyou] = useState(false);

  const [formData, setFormData] = useState({
    job_title: jobtitle,
    applicant_name: "",
    applicant_email: "",
    applicant_phone: "",
    applicant_gender: "",
    applicant_experience: "",
    location: "",
    current_salary: 0,
    expected_salary: 0,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      job_title: jobtitle,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowthanyou(true); // dispatch(addJob(formData));
    setFormData({
      job_title: jobtitle,
      applicant_name: "",
      applicant_email: "",
      applicant_phone: "",
      applicant_gender: "",
      applicant_experience: "",
      location: "",
      current_salary: 0,
      expected_salary: 0,
      description: "",
    });

    // setTimeout(() => {
    //   setSuccessMessage("");
    // }, 2000);
  };
  return (
    <div>
      <div className={visible ? "block" : "hidden"}>
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center">
          <div className="bg-white max-h-[90vh] overflow-scroll w-full max-w-2xl mx-auto rounded-2xl shadow-2xl z-50 p-6 sm:p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              aria-label="Close"
              onClick={onclose}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className={showthanyou ? "hidden" : "block"}>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Apply to Job
              </h2>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Job Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="job_title"
                    value={jobtitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Frontend Developer"
                    disabled
                    required
                  />
                </div>

                {/* Applicant Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Applicant Name
                  </label>
                  <input
                    type="text"
                    name="applicant_name"
                    value={formData.applicant_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>

                {/* Applicant Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Applicant Email
                  </label>
                  <input
                    type="text"
                    name="applicant_email"
                    value={formData.applicant_email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. johndoe@gmail.com"
                    required
                  />
                </div>

                {/* Applicant Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Applicant Phone
                  </label>
                  <input
                    type="text"
                    name="applicant_phone"
                    value={formData.applicant_phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Applicant Gender */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </p>

                  <div className="flex items-center content-center">
                    <input
                      type="radio"
                      name="applicant_gender"
                      checked={formData.applicant_gender == "male"}
                      value="male"
                      onChange={handleChange}
                      className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <label className="block text-sm font-medium text-gray-700 mb-0 mx-3">
                      Male
                    </label>
                    <input
                      type="radio"
                      name="applicant_gender"
                      checked={formData.applicant_gender == "female"}
                      value="female"
                      onChange={handleChange}
                      className=" px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <label className="block text-sm font-medium text-gray-700 mb-0 mx-3">
                      Female
                    </label>
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Experience
                  </label>
                  <input
                    type="text"
                    name="applicant_experience"
                    value={formData.applicant_experience}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g 3+ years"
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

                {/* Current Salary */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Salary(PKR)
                  </label>
                  <input
                    type="number"
                    name="current_salary"
                    value={formData.current_salary}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Expected Salary */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expected Salary(PKR)
                  </label>
                  <input
                    type="number"
                    name="expected_salary"
                    value={formData.expected_salary}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
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
                    placeholder="Cover Letter..."
                    required
                  />
                </div>
                {/* {successMessage && (
            <div className="mt-5 p-4 rounded-xl bg-green-100 border border-green-400 text-green-800 text-sm">
              {successMessage}
            </div>
          )} */}
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className={showthanyou ? "block" : "hidden"}>
              <div className=" text-center">
                <div className="text-indigo-500 text-6xl mb-4">✅</div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank You!
                </h1>
                <p className="text-gray-600 mb-6">
                  We’ve received your submission. We’ll get back to you shortly.
                </p>
                <Link
                  to="/"
                  className="inline-block px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyToJob;
