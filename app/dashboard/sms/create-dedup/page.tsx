import Button from "@/components/Buttons";
import { Eye } from "lucide-react";
import Link from "next/link";

import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="bg-white p-4 rounded shadow w-52">
          <p className="text-gray-500">Total Records</p>
          <h2 className="text-2xl font-bold">100,00,00</h2>
        </div>
        <Link href="/dashboard/sms/create-batch">
          <Button text=" ➕ Create Batch" onClick={undefined} />
        </Link>
      </div>
      <h1 className="text-[26px] py-2">SMS batch History</h1>
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
