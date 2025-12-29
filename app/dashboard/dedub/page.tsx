import React from "react";
import Link from "next/link";
import { Eye } from "lucide-react";
import Button from "@/components/Buttons";

const page = () => {
  return (
    <div className="p-4 space-y-6">

      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        {/* Card */}
        <div className="bg-white p-4 rounded shadow w-full sm:w-52">
          <p className="text-gray-500 text-sm">Total Records</p>
          <h2 className="text-2xl font-bold">100,00,00</h2>
        </div>

        {/* Button */}
        <Link href="/dashboard/dedub/create-dedup" className="w-full sm:w-auto">
          <Button text="➕ Create Dedub" onClick={undefined} />
        </Link>
      </div>

      {/* Heading */}
      <h1 className="text-xl sm:text-2xl font-semibold mb-4">Dedup History</h1>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-[600px] w-full border-collapse">
          <thead>
            <tr className="bg-[#0542473c] text-sm sm:text-base">
              <th className="text-left px-4 py-3">Create Date</th>
              <th className="text-left px-4 py-3">Dedup Batch</th>
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
