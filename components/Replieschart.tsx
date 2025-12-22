"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Batch 1", optedIn: 20, optedOut: 50, unCertain: 30 },
  { name: "Batch 2", optedIn: 30, optedOut: 45, unCertain: 20 },
  { name: "Batch 3", optedIn: 60, optedOut: 20, unCertain: 35 },
  { name: "Batch 4", optedIn: 55, optedOut: 35, unCertain: 45 },
  { name: "Batch 5", optedIn: 45, optedOut: 50, unCertain: 55 },
];

export default function DeliveryChart() {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h3 className="font-medium mb-4">Replies Status Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="optedIn" fill="#d7fe65" />
          <Bar dataKey="optedOut" fill="#054347" />
          <Bar dataKey="unCertain" fill="#9fb7a5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
