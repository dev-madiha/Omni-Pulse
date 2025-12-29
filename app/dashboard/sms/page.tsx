
import Button from "@/components/Buttons";
import DeliveryChart from "@/components/DeliveryChart";
import Replieschart from "@/components/Replieschart";
import Link from "next/link";

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
      <div className="flex flex-col sm:flex-row bg-white p-3 gap-3 sm:justify-between sm:items-center mb-6">
        <input
          type="date"
          className="border rounded px-3 py-2 text-sm w-full sm:w-auto"
        />

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link href="/dashboard/sms/create-dedup" className="w-full sm:w-auto">
            <Button text="Create Dedup" variant="primary" onClick={undefined} />
          </Link>

          <div className="w-full sm:w-auto">
            <Button
              text="Shedule SMS"
              variant="secondary"
              onClick={undefined}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-4 rounded shadow border-r-4 ${item.borderColor}`}
          >
            <p className="text-xs sm:text-sm text-gray-500">{item.label}</p>
            <h3 className="text-lg sm:text-xl font-semibold mt-1">
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <DeliveryChart />
        <Replieschart />
      </div>
    </>
  );
}
