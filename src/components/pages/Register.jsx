import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import registerSlice from "../../app/features/auth/registerSlice";
import {
  UserId,
  Status,
  Error,
  AccessToken,
  register,
} from "../../app/features/auth/registerSlice";
import Loader from "../global/Loader";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    role: "employee",
    password: "",
    confirmpassword: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const error = useSelector(Error);
  const userid = useSelector(UserId);
  const token = useSelector(AccessToken);
  const status = useSelector(Status);
  useEffect(() => {
    if (userid) {
      setSuccessMessage("You Have Registere Successfully! Redirecting...");
      setTimeout(() => {
        navigate("/jobs");
        setSuccessMessage("");
      }, 3000);
    }
  }, [userid]);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formdata);
    dispatch(register(formdata));
    setFormdata({
      username: "",
      email: "",
      role: "",
      password: "",
      confirmpassword: "",
    });
  };
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      {status == "loading" && <Loader />}

      {!successMessage && error && <div className="text-red-500">{error}</div>}
      {!successMessage && !error && status == "idle" && (
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Register
          </h2>

          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <label
                className="block mb-1 text-sm font-medium text-gray-700"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formdata.username}
                onChange={onChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label
                className="block mb-1 text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formdata.email}
                onChange={onChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <span className="block mb-1 text-sm font-medium text-gray-700">
                Select User Type
              </span>
              <div className="flex items-center space-x-4 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="company"
                    checked={formdata.role === "company"}
                    onChange={onChange}
                    className="text-indigo-600 focus:ring-indigo-500"
                    required
                  />
                  <span className="ml-2 text-gray-700 text-sm">Company</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="employee"
                    checked={formdata.role === "employee"}
                    onChange={onChange}
                    className="text-indigo-600 focus:ring-indigo-500"
                    required
                  />
                  <span className="ml-2 text-gray-700 text-sm">Employee</span>
                </label>
              </div>
            </div>

            <div>
              <label
                className="block mb-1 text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formdata.password}
                onChange={onChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label
                className="block mb-1 text-sm font-medium text-gray-700"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                value={formdata.confirmpassword}
                onChange={onChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-semibold"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      )}
      {successMessage && (
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <div className="mt-5 p-4 rounded-xl bg-green-100 border border-green-400 text-green-800 text-sm">
            {successMessage}
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
