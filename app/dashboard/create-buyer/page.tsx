
import Button from "@/components/Buttons";
import { Flag, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {

  return (

    <div className=" min-h-screen p-4 space-y-6">
      <div className=" bg-white p-4 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-lg">
          <input
            type="text"
            placeholder="Search"
            className="w-full border rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-lime-400 outline-none"
          />
          <span className="absolute right-3 top-2.5 text-gray-400">
            <Search />
          </span>
        </div>

        <Link href="/dashboard/create-buyer/new-buyer" className="w-full sm:w-auto">
          <Button text="➕ Create New Buyer" onClick={undefined} />
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
        <h1 className="text-lg sm:text-xl font-semibold mb-3">Buyers History</h1>
        <div className="flex flex-wrap gap-2 mb-4 text-xs">
          <button className="bg-teal-100 text-teal-700 px-3 py-1 rounded">
            Active (23)
          </button>
          <button className="bg-red-100 text-red-600 px-3 py-1 rounded">
            Inactive (23)
          </button>
        </div>

        <table className="min-w-[800px] w-full border-collapse text-sm sm:text-base">
          <thead className="bg-[#05424781] text-teal-900">
            <tr>
              <th className="border px-3 py-2"><input type="checkbox" /></th>
              <th className="border px-3 py-2 text-left">Name</th>
              <th className="border px-3 py-2">BID</th>
              <th className="border px-3 py-2">Created</th>
              <th className="border px-3 py-2">Last Login</th>
              <th className="border px-3 py-2">Location</th>
              <th className="border px-3 py-2">Balance</th>
              <th className="border px-3 py-2">Cap</th>
              <th className="border px-3 py-2">Portal Access</th>
              <th className="border px-3 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {[...Array(8)].map((_, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="border px-3 py-2 text-center"><input type="checkbox" /></td>
                <td className="border px-3 py-2">Returnxdig</td>
                <td className="border px-3 py-2 text-center">
                    11
                    </td>
                <td className="border px-3 py-2 text-center">11/12/2025</td>
                <td className="border px-3 py-2 text-center">--------</td>
                <td className="border px-3 py-2 text-center"><Flag /></td>
                <td className="border px-3 py-2 text-center">0.00</td>
                <td className="border px-3 py-2 text-center">capp</td>
                <td className="border px-3 py-2 text-center">
                  {i % 2 === 0 ? (
                    <span className="text-red-500 font-bold">✖</span>
                  ) : (
                    <span className="text-green-600 font-bold">✔</span>
                  )}
                </td>
                <td className="border px-3 py-2 text-center">
                  <button className="bg-teal-700 text-white text-xs px-3 py-1 rounded">
                    Select ▾
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-wrap items-center gap-3 mt-4 text-xs">
          <span>With selected:</span>
          <button className="bg-red-100 text-red-600 px-2 py-1 rounded">Delete</button>
          <button className="bg-orange-100 text-orange-700 px-2 py-1 rounded">Disable</button>
          <span>Download:</span>
          <button className="bg-green-100 text-green-700 px-2 py-1 rounded">Excel</button>
          <button className="bg-orange-100 text-orange-700 px-2 py-1 rounded">CSV</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
