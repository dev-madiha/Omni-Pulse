import { Eye } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded shadow w-52">
        <p className="text-gray-500">Total Records</p>
        <h2 className="text-2xl font-bold">6M</h2>
      </div>
      
      <div>
        <div className="bg-white rounded shadow w-full mt-8">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0542473c]">
                <th className="text-left px-4 py-2">Create Date</th>
                <th className="text-left px-4 py-2">Ping Batch</th>
                <th className="text-left px-4 py-2">Records</th>
                <th className="text-left px-4 py-2">Progress</th>
                <th className="text-left px-4 py-2">Status</th>
                <th className="text-left px-4 py-2">Complete Date</th>
                <th className="text-left px-4 py-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <tr key={item} className="border-t">
                  <td className="px-4 py-2">2024-01-01</td>
                  <td className="px-4 py-2">Batch {item}</td>
                  <td className="px-4 py-2">1M</td>
                  <td className="px-4 py-2">100%</td>
                  <td className="px-4 py-2">Completed</td>
                  <td className="px-4 py-2">2024-01-02</td>
                  <td className="px-4 py-2 h-6 w-6">
                    <Eye />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
