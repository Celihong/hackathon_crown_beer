import Link from "next/link";

export default function QuickLinkBar() {
  return (
    <div className="bg-white shadow-md p-4 rounded flex items-center justify-between gap-4">
      <div>
        <div className="text-sm text-gray-500">Scan to open</div>
        <div className="font-semibold">Voting / Judging Sheet</div>
      </div>
      <div className="flex items-center gap-4">
        <img src="/qr.png" alt="QR" width={96} height={96} />
        <Link href="/vote" className="bg-black text-white px-4 py-2 rounded">
          Open Vote
        </Link>
      </div>
    </div>
  );
}
