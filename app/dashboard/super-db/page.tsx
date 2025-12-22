import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="p-4 md:p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-xl md:text-2xl font-semibold">Super DB</h1>
        <div className="flex flex-col sm:flex-row gap-2">
          <Link href="/dashboard/super-db/history">
            <button className=" cursor-pointer border px-4 py-2 rounded w-full sm:w-auto">
              View History
            </button>
          </Link>
          
          <button className="bg-[#d7fe65] px-4 py-2 rounded w-full sm:w-auto">
            Upload File
          </button>
        </div>
      </div>

      <div className="px-4 md:px-6">
        <div className="bg-white px-4 py-6 rounded shadow w-full sm:w-60 border-r-4 border-[#d7fe65]">
          <p className="text-gray-500">Total Records</p>
          <h2 className="text-2xl font-bold">6M</h2>
        </div>
      </div>

      <div className="px-4 md:px-6">
        <h1 className="py-6 text-[16px] md:text-[18px]">Upload Files</h1>
      </div>

      <div className="px-4 md:px-6">
        <div className="bg-white shadow p-4 sm:p-6 md:p-8 rounded text-center">
          <div className="border-dashed border-2 rounded py-10 sm:py-14 md:py-16 max-w-full md:max-w-3xl mx-auto">
            <p className="mb-2 text-sm md:text-base">
              Drag your file(s) to start uploading
            </p>
            <button className="border px-4 py-1 rounded">Browse files</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
