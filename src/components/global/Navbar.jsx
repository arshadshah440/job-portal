import React from "react";
import logo from "../../assets/img/logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { logout, UserId } from "../../app/features/auth/registerSlice";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector(UserId);
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };
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
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      `${
                        isActive ? "active bg-black text-white" : "text-white"
                      }   hover:bg-gray-900 rounded-md px-3 py-2`
                    }
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `${
                        isActive ? "active bg-black text-white" : "text-white"
                      }   hover:bg-gray-900 rounded-md px-3 py-2`
                    }
                  >
                    Login
                  </NavLink>
                </div>
              </div>
              {userId && (
                <div>
                  {/* <!-- Profile dropdown --> */}
                  <div className="relative ml-3 myaccountbtn_ar">
                    <div>
                      <button
                        type="button"
                        className="relative  flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="size-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
                    </div>

                    <div
                      className="absolute hidden myaccountdropdown_ar right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex="-1"
                    >
                      {/* <!-- Active: "bg-gray-100 outline-hidden", Not Active: "" --> */}
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </Link>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-1"
                      >
                        Settings
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                        onClick={handleLogout}
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
