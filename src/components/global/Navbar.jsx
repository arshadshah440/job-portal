import React from "react";
import logo from "../../assets/img/logo.png";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <NavLink to="/" className="flex flex-shrink-0 items-center mr-4">
                <img className="h-10 w-auto" src={logo} alt="React Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  React Jobs
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive ? "active bg-black text-white" : "text-white"
                      }   hover:bg-gray-900 rounded-md px-3 py-2`
                    }
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/jobs"
                    className={({ isActive }) =>
                      `${
                        isActive ? "active bg-black text-white" : "text-white"
                      }   hover:bg-gray-900 rounded-md px-3 py-2`
                    }
                  >
                    Jobs
                  </NavLink>
                  <NavLink
                    to="/add-job"
                    className={({ isActive }) =>
                      `${
                        isActive ? "active bg-black text-white" : "text-white"
                      }   hover:bg-gray-900 rounded-md px-3 py-2`
                    }
                  >
                    Add Job
                  </NavLink>
                  <NavLink
                    to="/companies"
                    className={({ isActive }) =>
                      `${
                        isActive ? "active bg-black text-white" : "text-white"
                      }   hover:bg-gray-900 rounded-md px-3 py-2`
                    }
                  >
                    Companies
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
