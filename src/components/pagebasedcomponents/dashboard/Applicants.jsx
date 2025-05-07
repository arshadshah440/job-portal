import React from "react";

const Applicants = () => {
  return (
    <>
      <section id="applicant" className="tab-section hidden">
        <h2 className="text-xl font-semibold mb-4">Applicants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">John Smith</h3>
            <p className="text-sm text-gray-500">Frontend Dev</p>
            <p className="text-sm mt-2 text-gray-600">Experience: 3 years</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">Lisa Ray</h3>
            <p className="text-sm text-gray-500">UI/UX Designer</p>
            <p className="text-sm mt-2 text-gray-600">Experience: 4 years</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Applicants;
