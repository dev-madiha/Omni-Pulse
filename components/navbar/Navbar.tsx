
"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";
import {
  Bell,
  ChevronDown,
  UserRoundX,
  Menu,
  X,
} from "lucide-react";

const routeMap: Record<string, string> = {
  "/dashboard/pings": "Pings",
  "/dashboard/sms": "SMS",
  "/dashboard/shedule-sms": "Schedule SMS",
  "/dashboard/super-db": "Super DB",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const currentLabel = routeMap[pathname] || "Super DB";

  return (
    
    <nav className="bg-[#d7fe65] px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-40">
          <Image
            src="/images/logo-img (2).png"
            alt="Omni Pulse Logo"
            width={120}
            height={60}
            priority
          />
          <div className="relative hidden md:block">
            <button
              onClick={() => setOpen(!open)}
              className=" cursor-pointer flex items-center gap-2 font-medium"
            >
              {currentLabel}
              <ChevronDown />
            </button>
            {open && (
              <div className="absolute top-full left-0 mt-2 z-50">
                <Dropdown close={() => setOpen(false)} />
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Bell className="h-5 w-5 cursor-pointer" />
          <button className="border border-gray-500 flex items-center gap-2 px-3 py-2">
            <UserRoundX className="h-4 w-4" />
            <span className="text-[16px] font-medium">
              Marci Fumons
            </span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mt-4 md:hidden bg-white rounded-lg shadow p-4 space-y-4">
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center cursor-pointer justify-between w-full font-medium"
            >
              {currentLabel}
              <ChevronDown />
            </button>

            {open && (
              <div className="mt-2">
                <Dropdown close={() => setOpen(false)} />
              </div>
            )}
          </div>

          <button className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </button>

          <button className="flex items-center gap-2">
            <UserRoundX className="h-4 w-4" />
            Marci Fumons
          </button>
        </div>
      )}
    </nav>
  );
}
