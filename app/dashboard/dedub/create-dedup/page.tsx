import { Eye } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded shadow w-52">
        <p className="text-gray-500">Total Records</p>
        <h2 className="text-2xl font-bold">6M</h2>
      </div>
      <h1 className="text-[26px] py-3 ">Create New Dedup</h1>
      <div>
        <form className="bg-white rounded shadow p-6  w-full ">
          <div className="grid grid-cols-2 gap-6">
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

            <div className="justify-end items-end flex gap-3">
              <button className=" border border-gray-200 rounded p-2">
                Cancel
              </button>
              <button className="bg-[#D7fe65] rounded  p-2">
                Create Dedup
              </button>
            </div>
          </div>
        </form>
      </div>
      <h1 className="text-[26px] py-3">Dedup History</h1>
      <div>
        <table className="w-full">
          <thead>
            <tr className="bg-[#0542473c]">
              <th className="text-left px-4 py-3">Create Date</th>
              <th className="text-left px-4 py-3">Dedup Batch</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Complete Date</th>
              <th className="text-left px-4 py-3">Action</th>
            </tr>
          </thead>
          
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <tr key={item} className="border-t">
                <td className="px-4 py-3">2024-01-01</td>
                <td className="px-4 py-3">Batch {item}</td>
                <td className="px-4 py-3">Completed</td>
                <td className="px-4 py-3">2024-01-02</td>
                <td className="px-4 py-3">
                  <Eye />
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
