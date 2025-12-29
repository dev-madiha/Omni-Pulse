import React from "react";
import Button from "@/components/Buttons";

const page = () => {
  return (
    <div>
      <h1 className="text-[26px]">Create a compaign</h1>
      <div className="bg-white p-3">
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
        </form>

        <div className="flex flex-col sm:flex-row  justify-end my-3 gap-3">
          <Button
            text="Save and continue to fields"
            variant="primary"
            onClick={undefined}
          />
          <Button text="Cancel" variant="secondary" onClick={undefined} />
        </div>
      </div>
    </div>
  );
};

export default page;
