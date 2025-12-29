import Button from "@/components/Buttons";
import { Flag, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between mb-4">
        <div className="relative w-full lg:max-w-lg">
          <input
            type="text"
            placeholder="Search"
            className="w-full border rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-lime-400 outline-none"
          />
          <span className="absolute right-3 top-2.5 text-gray-400">
            <Search size={18} />
          </span>
        </div>

        <Link
          href="/dashboard/compaign/new-compaign"
          className="w-full lg:w-auto"
        >
          <Button text="➕ Create Campaign" onClick={undefined} />
        </Link>
      </div>

      <h1 className="text-[26px] py-2">Compaigns</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <label className="flex flex-col">
            Compaign Name
            <select className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 mt-1">
              <option value="">Select Name</option>
              <option value="email">A</option>
              <option value="sms">B</option>
              <option value="social-media">Social Media</option>
            </select>
          </label>

          <label className="flex flex-col">
            Currency
            <select className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 mt-1">
              <option value="">Select currency</option>
              <option value="email">a</option>
              <option value="sms">B</option>
              <option value="social-media">Social Media</option>
            </select>
          </label>

          <label className="flex flex-col">
            Validation enabled
            <select className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 mt-1">
              <option value="">Select </option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              <option value="social-media">Social Media</option>
            </select>
          </label>

          <label className="flex flex-col">
            Payout Type{" "}
            <select className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 mt-1">
              <option value="">Select </option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              <option value="social-media">Social Media</option>
            </select>
          </label>

          <label className="flex flex-col">
            method{" "}
            <select className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 mt-1">
              <option value="">Select </option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              <option value="social-media">Social Media</option>
            </select>
          </label>

          <label className="flex flex-col">
            Delivery Type{" "}
            <select className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 mt-1">
              <option value="">Select </option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>9
              <option value="social-media">Social Media</option>
            </select>
          </label>

          <label className="flex flex-col">
            Country
            <select className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 mt-1">
              <option value="">Select your country to filter</option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              <option value="social-media">Social Media</option>
            </select>
          </label>

          <label className="flex flex-col">
            Caps Enable
            <select className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 mt-1">
              <option value="">Select </option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              <option value="social-media">Social Media</option>
            </select>
          </label>

          <label className="flex flex-col">
            Duplication Enabled{" "}
            <select className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 mt-1">
              <option value="">Select </option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              <option value="social-media">Social Media</option>
            </select>
          </label>

          <label className="flex flex-col">
            Columns
            <select className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 mt-1">
              <option value="">Select </option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              <option value="social-media">Social Media</option>
            </select>
          </label>

          <label className="flex flex-col">
            Traffic
            <select className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 mt-1">
              <option value="">Select </option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              <option value="social-media">Social Media</option>
            </select>
          </label>
        </form>
        <div className="flex flex-col sm:flex-row justify-end my-3 gap-3">
          <Button text="Search" onClick={undefined} />
          <Button text="Reset" onClick={undefined} />
        </div>
      </div>
      <h1 className="text-[26px] py-2">Compaign History</h1>
      <div className="overflow-x-auto w-full">
        <table className="min-w-[900px] w-full border-collapse text-sm">
          <thead className="bg-[#05424781] text-teal-900">
            <tr>
              <th className="border px-3 py-2">
                <input type="checkbox" />
              </th>
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
                <td className="border px-3 py-2 text-center">
                  <input type="checkbox" />
                </td>
                <td className="border px-3 py-2">Returnxdig</td>
                <td className="border px-3 py-2 text-center">11</td>
                <td className="border px-3 py-2 text-center">11/12/2025</td>
                <td className="border px-3 py-2 text-center">--------</td>
                <td className="border px-3 py-2 text-center">
                  <Flag />
                </td>
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
      </div>
    </div>
  );
};

export default page;
