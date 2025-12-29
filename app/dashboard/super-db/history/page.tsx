import React from "react";
import { RefreshCw, XCircle, CheckCircle } from "lucide-react";

const historyData = [
  {
    id: 1,
    file: "Main File 1.csv",
    status: "success",
  },
  {
    id: 2,
    file: "Main File 2.xlsx",
    status: "failed",
  },
  {
    id: 3,
    file: "Main File 3.xlsx",
    status: "failed",
  },
  {
    id: 4,
    file: "Main File 4.csv",
    status: "success",
  },
  {
    id: 5,
    file: "Main File 5.csv",
    status: "success",
  },
  {
    id: 6,
    file: "Main File 6.xlsx",
    status: "failed",
  },
];

const page = () => {
  return (
    
    <div className="p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-semibold mb-6">
        History
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {historyData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded shadow p-4 flex flex-col gap-3"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-medium">{item.file}</h2>
              {item.status === "success" ? (
                <span className="flex items-center gap-1 text-green-600 bg-green-100 px-2 py-1 rounded text-sm">
                  Success <CheckCircle size={14} />
                </span>
              ) : (
                <span className="flex items-center gap-1 text-red-600 bg-red-100 px-2 py-1 rounded text-sm">
                  Retry <RefreshCw size={14} />
                  <XCircle size={14} />
                </span>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
              <p>
                <span className="font-medium">Total Records:</span>{" "}
                1 Million
              </p>
              <p>
                <span className="font-medium">Duplicate:</span>{" "}
                23,564
              </p>
              <p>
                <span className="font-medium">
                  Successful Added:
                </span>{" "}
                23,283
              </p>
              <p>
                <span className="font-medium">User Name:</span>{" "}
                Mukhtar
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                Mukhtar@gmail.com
              </p>
              <p>
                <span className="font-medium">
                  Upload Date:
                </span>{" "}
                11-12-2025
              </p>
              <p>
                <span className="font-medium">Save Date:</span>{" "}
                12-12-2025
              </p>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default page;
