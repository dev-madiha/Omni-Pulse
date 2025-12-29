import Link from "next/link";

export default function Dropdown({ close }: { close: () => void }) {
  return (
    <div className="w-55 rounded-md bg-white shadow-lg border">
      <ul className="flex flex-col ">
        <Link
          href="/dashboard/super-db"
          onClick={close}
          className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200 "
        >
          Super DB
        </Link>

        <Link
          href="/dashboard/pings"
          onClick={close}
          className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
        >
          Pings
        </Link>

        <Link
          href="/dashboard/sms"
          onClick={close}
          className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
        >
          SMS
        </Link>

        <Link
          href="/dashboard/shedule-sms"
          onClick={close}
          className="block px-4 py-2 hover:bg-gray-100 "
        >
          Schedule SMS
        </Link>
        <Link
          href="/dashboard/dma"
          onClick={close}
          className="block px-4 py-2 hover:bg-gray-100 "
        >
          DMA
        </Link>
        <Link
          href="/dashboard/dedub"
          onClick={close}
          className="block px-4 py-2 hover:bg-gray-100 "
        >
          Dedub
        </Link>
         <Link
          href="/dashboard/create-buyer"
          onClick={close}
          className="block px-4 py-2 hover:bg-gray-100 "
        >
          Create Buyer
        </Link>
         <Link
          href="/dashboard/compaign"
          onClick={close}
          className="block px-4 py-2 hover:bg-gray-100 "
        >
          Compaign
        </Link>
      </ul>
    </div>
  );
}
