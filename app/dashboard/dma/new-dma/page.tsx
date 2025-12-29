import { Eye } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="p-4 space-y-6">

      {/* Top Card */}
      <div className="bg-white p-4 rounded shadow w-full sm:w-52">
        <p className="text-gray-500 text-sm">Total Records</p>
        <h2 className="text-2xl font-bold">6M</h2>
      </div>

      {/* Form Section */}
      <h1 className="text-xl sm:text-[26px] py-3">Create New DMA</h1>
      <form className="bg-white rounded shadow p-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select Number</label>
            <select className="w-full border rounded px-3 py-2">
              <option value="">Select Number</option>
              <option value="1">A</option>
              <option value="2">B</option>
              <option value="3">C</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select Client</label>
            <select className="w-full border rounded px-3 py-2">
              <option value="">Select Client</option>
              <option value="1">A</option>
              <option value="2">B</option>
              <option value="3">C</option>
            </select>
          </div>
        </div>
      </form>

      {/* Table Section */}
      <h1 className="text-xl sm:text-[26px] py-3">DMA History</h1>
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-[600px] w-full border-collapse">
          <thead>
            <tr className="bg-[#0542473c] text-sm sm:text-base">
              <th className="text-left px-4 py-3">Create Date</th>
              <th className="text-left px-4 py-3">DMA Batch</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Complete Date</th>
              <th className="text-left px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <tr key={item} className="border-t text-sm sm:text-base">
                <td className="px-4 py-3">2024-01-01</td>
                <td className="px-4 py-3">Batch {item}</td>
                <td className="px-4 py-3">Completed</td>
                <td className="px-4 py-3">2024-01-02</td>
                <td className="px-4 py-3">
                  <Eye className="w-5 h-5 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default page;
