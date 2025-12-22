
import DeliveryChart from "@/components/DeliveryChart";
import Replieschart from "@/components/Replieschart";

interface StatItem {
  label: string;
  value: number;
  borderColor: string;
}

const stats: StatItem[] = [
  { label: "Total Schedule", value: 91, borderColor: "border-green-400" },
  { label: "Delivered", value: 55, borderColor: "border-lime-400" },
  { label: "Expired", value: 40, borderColor: "border-yellow-400" },
  { label: "Undelivered", value: 30, borderColor: "border-red-400" },
  { label: "Blacklisted", value: 10, borderColor: "border-gray-400" },
  { label: "Total Replies", value: 91, borderColor: "border-teal-400" },
  { label: "Opted-in", value: 55, borderColor: "border-lime-500" },
  { label: "Opted-out", value: 40, borderColor: "border-emerald-600" },
  { label: "Uncertain", value: 30, borderColor: "border-slate-400" },
];

export default function StatsCards() {
  return (
    <>
      <div className="flex bg-white p-3 justify-between items-center mb-6">
        <input type="date" className="border rounded px-3 py-2 text-sm" />
        <button className="bg-lime-400 px-4 py-2 rounded text-sm font-medium">
          Schedule SMS
        </button>
      </div>
         
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-4 rounded shadow border-r-4 ${item.borderColor}`}
          >
            <p className="text-sm text-gray-500">{item.label}</p>
            <h3 className="text-xl font-semibold mt-1">{item.value}</h3>
          </div>
        ))}
      </div>
      <DeliveryChart />
      <Replieschart />
    </>
  );
}
