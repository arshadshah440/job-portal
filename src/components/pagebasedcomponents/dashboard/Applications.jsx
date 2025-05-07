import React from 'react'

const Applications = () => {
  return (
    <>   
    <section id="applications" className="tab-section hidden">
      <h2 className="text-xl font-semibold mb-4">Applications</h2>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Applicant</th>
              <th className="p-2">Job</th>
              <th className="p-2">Status</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">Alice Johnson</td>
              <td className="p-2">Frontend Developer</td>
              <td className="p-2 text-yellow-600">Pending</td>
              <td className="p-2">2025-05-01</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Mark Chen</td>
              <td className="p-2">UI/UX Designer</td>
              <td className="p-2 text-green-600">Reviewed</td>
              <td className="p-2">2025-04-29</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section></>
  )
}

export default Applications