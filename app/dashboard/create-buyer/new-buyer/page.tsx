import React from "react";

const page = () => {
  return (
    <div className="p-4 space-y-6">

      {/* Create Buyer Form */}
      <h1 className="text-lg sm:text-xl font-semibold mb-4">Create New Buyer</h1>
      <div className="bg-white p-5 rounded-lg shadow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-sm">Buyer Name</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="Enter buyer name"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium text-sm">BID</label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="Enter BID"
            />
          </div>
        </div>

        {/* Form Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
          <button className="px-4 py-2 text-sm rounded-md border hover:bg-gray-100 w-full sm:w-auto">
            Cancel
          </button>
          <button className="px-4 py-2 text-sm rounded-md bg-lime-400 hover:bg-lime-500 font-medium w-full sm:w-auto">
            Save Buyer
          </button>
        </div>
      </div>

      {/* User Details Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5 gap-3">
        <h1 className="text-lg sm:text-2xl font-semibold">User Details</h1>
        <button className="px-4 py-2 text-sm rounded-md bg-lime-400 hover:bg-lime-500 font-medium w-full sm:w-auto">
          Add New User
        </button>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full border-collapse text-sm mt-4">
          <thead className="bg-[#05424781] text-teal-900">
            <tr>
              <th className="border px-3 py-2">
                <input type="checkbox" />
              </th>
              <th className="border px-3 py-2 text-left">First Name</th>
              <th className="border px-3 py-2 text-left">Last Name</th>
              <th className="border px-3 py-2 text-left">Email</th>
              <th className="border px-3 py-2 text-left">User Name</th>
              <th className="border px-3 py-2 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="border px-3 py-2 text-center">
                  <input type="checkbox" />
                </td>
                <td className="border px-3 py-2">User {i + 1}</td>
                <td className="border px-3 py-2">User</td>
                <td className="border px-3 py-2">user{i + 1}@example.com</td>
                <td className="border px-3 py-2">Admin</td>
                <td className="border px-3 py-2 flex flex-col sm:flex-row gap-2 sm:gap-1">
                  <button className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700 text-xs sm:text-sm">
                    Delete
                  </button>
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
