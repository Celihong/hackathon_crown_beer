import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          Cambodian Craft Beer Crown 2025
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/breweries" className="hover:underline">
            Breweries
          </Link>
          <Link href="/timetable" className="hover:underline">
            Timetable
          </Link>
          <Link href="/awards" className="hover:underline">
            Awards
          </Link>
          <Link
            href="/vote"
            className="font-semibold bg-yellow-400 text-black px-3 py-1 rounded"
          >
            Vote
          </Link>
        </nav>
      </div>
    </header>
  );
}
