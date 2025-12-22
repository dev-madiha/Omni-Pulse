

import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-4">
      <div className="flex lg:justify-between  flex-col gap-4 items-center mb-6">
        <div className="bg-white p-4 rounded shadow w-52">
          <p className="text-gray-500">Total Records</p>
          <h2 className="text-2xl font-bold">6M</h2>
        </div>

        <Link href="/dashboard/dma/new-dma">
          <button className=" cursor-pointer border px-4 py-2 rounded w-full sm:w-auto">
            New DMA
          </button>
        </Link>
      </div>

      <h1 className="text-lg font-semibold mb-3">DMA History</h1>
      <div className=" bg-white rounded shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0542473c]">
              <th className="text-left px-4 py-3">Create Date</th>
              <th className="text-left px-4 py-3">DMA Batch</th>
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
