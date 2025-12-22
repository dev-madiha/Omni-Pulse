import { Eye } from "lucide-react";
import React from "react";

const page = () => {
  return (

    <div>
      <div className="bg-white p-4 rounded shadow w-52">
        <p className="text-gray-500">Availabel SMS </p>
        <h2 className="text-2xl font-bold">10,00,000</h2>
      </div>

      <div>
        <h1 className="my-6 text-[26px]">Create New SMS Batch</h1>
        <div>
          <form className="bg-white rounded shadow p-6  w-full">
            <div className=" grid-cols-1 grid lg:grid-cols-2  lg:gap-6">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Batch Name</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter batch name"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Schedule Date
                </label>
                <input
                  type="date"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1  lg:grid-cols-2 lg:gap-6 ">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Select Client
                </label>
                <select className="w-full border rounded px-3 py-2">
                  <option value="">Select Client</option>
                  <option value="1">A</option>
                  <option value="2">B</option>
                  <option value="3">C</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Select Number
                </label>
                <select className="w-full border rounded px-3 py-2">
                  <option value="">Select number</option>
                  <option value="1">+1 234 567 890</option>
                  <option value="2">+91 98765 43210</option>
                  <option value="3">+44 7700 900123</option>
                </select>
              </div>
            </div>
          </form>

          <div>
            <h1 className="text-[26px] my-4">SMS Batch History</h1>
            <div>
              <div className="bg-white rounded shadow w-full ">
                <table className="w-full rounded-full">
                  <thead>
                    <tr className="bg-[#0542473c]">
                      <th className="text-left px-4 py-2">Create Date</th>
                      <th className="text-left px-4 py-2">Schedule Date</th>
                      <th className="text-left px-4 py-2">Batch Name</th>
                      <th className="text-left px-4 py-2">Status</th>
                      <th className="text-left px-4 py-2">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                      <tr key={item} className="border-t border-gray-300">
                        <td className="px-4 py-2">11-12-2025 {item}</td>
                        <td className="px-4 py-2">2024-01-0{item}</td>
                        <td className="px-4 py-2">King Price {item}</td>
                        <td className="px-4 py-2">Complete</td>
                        <td className="px-4 py-2">
                          <Eye />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
