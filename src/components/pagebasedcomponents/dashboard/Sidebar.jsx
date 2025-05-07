import React from "react";

const Sidebar = () => {
  const showTab = (tabId) => {
    document
      .querySelectorAll(".tab-section")
      .forEach((el) => el.classList.add("hidden"));
    document.getElementById(tabId).classList.remove("hidden");
        // console.log(tabId);


  };
  return (
    <div>
      <aside className="w-64 bg-white shadow-lg md:block pb-6">
        <div className="p-6 text-xl font-bold border-b border-gray-200">
          My Dashboard
        </div>
        <nav className="mt-4 space-y-1 px-4">
          <button
            onClick={() => showTab("overview")}
            className="block w-full text-left py-2 px-4 rounded hover:bg-gray-100"
          >
            🏠 Overview
          </button>
          <button
            onClick={() => showTab("job")}
            className="block w-full text-left py-2 px-4 rounded hover:bg-gray-100"
          >
            💼 Job
          </button>
          <button
            onClick={() => showTab("applications")}
            className="block w-full text-left py-2 px-4 rounded hover:bg-gray-100"
          >
            📄 Applications
          </button>
          <button
            onClick={() => showTab("applicant")}
            className="block w-full text-left py-2 px-4 rounded hover:bg-gray-100"
          >
            👤 Applicant
          </button>
          <button
            onClick={() => showTab("settings")}
            className="block w-full text-left py-2 px-4 rounded hover:bg-gray-100"
          >
            ⚙️ Settings
          </button>
          <button
            onClick={() => showTab("Logging out...")}
            className="block w-full text-left py-2 px-4 rounded hover:bg-gray-100 text-red-500"
          >
            🚪 Logout
          </button>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
