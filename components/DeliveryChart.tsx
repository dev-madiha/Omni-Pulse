
"use client";

import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,Legend,} from "recharts";

const data = [
  { name: "Batch 1", Delivered: 30, Expired: 20, Undelivered: 50, Blacklisted: 30 },
  { name: "Batch 2", Delivered: 50, Expired: 30, Undelivered: 45, Blacklisted: 20 },
  { name: "Batch 3", Delivered: 45, Expired: 60, Undelivered: 20, Blacklisted: 35 },
  { name: "Batch 4", Delivered: 40, Expired: 55, Undelivered: 35, Blacklisted: 45 },
  { name: "Batch 5", Delivered: 55, Expired: 45, Undelivered: 50, Blacklisted: 55 },
];


export default function DeliveryChart() {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h3 className="font-medium mb-4">Delivery Status Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Delivered" fill="#9FE870" />
          <Bar dataKey="Expired" fill="#F4C76A" />
          <Bar dataKey="Undelivered" fill="#E07A6F" />
          <Bar dataKey="Blacklisted" fill="#3F5E60" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
