import Button from "@/components/Buttons";
import { Eye } from "lucide-react";
import React from "react";
const page = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded shadow w-full sm:w-52">
        <p className="text-gray-500">Total Records</p>
        <h2 className="text-2xl font-bold">100,00,00</h2>
      </div>

      <h1 className="text-[27px] py-2">Create New SMS Batch</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col text-sm font-medium">
            Campaign Name
            <select className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 mt-1">
              <option value="">Select Name</option>
              <option>A</option>
              <option>B</option>
            </select>
          </label>

          <label className="flex flex-col text-sm font-medium">
            Currency
            <select className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 mt-1">
              <option value="">Select Currency</option>
            </select>
          </label>

          <label className="flex flex-col text-sm font-medium">
            Validation Enabled
            <select className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 mt-1">
              <option value="">Select</option>
            </select>
          </label>

          <label className="flex flex-col text-sm font-medium">
            Payout Type
            <select className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 mt-1">
              <option value="">Select</option>
            </select>
          </label>
        </form>

        <div className="flex flex-col sm:flex-row justify-end my-4 gap-3">
          <Button text="Create batch" variant="primary" onClick={undefined} />
          <Button text="Cancel" variant="secondary" onClick={undefined} />
        </div>
      </div>

      <h1 className="text-[26px] py-2">SMS Batch History</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-[700px] w-full">
          <thead>
            <tr className="bg-[#0542473c] text-sm">
              <th className="text-left px-4 py-3">Create Date</th>
              <th className="text-left px-4 py-3">Dedup Batch</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Complete Date</th>
              <th className="text-left px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <tr key={item} className="border-t text-sm">
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
