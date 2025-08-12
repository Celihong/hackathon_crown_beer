import Link from "next/link";
import { Beer } from "../utils/beers";

export default function BeerCard({ beer }: { beer: Beer }) {
  return (
    <div className="border rounded p-4 shadow-sm flex flex-col justify-between">
      <div>
        <div className="text-sm text-gray-500">{beer.brewery}</div>
        <h3 className="font-bold text-lg">{beer.name}</h3>
        <div className="text-sm">{beer.style}</div>
      </div>
      <div className="mt-4 flex gap-2">
        <Link
          href={`/vote/${beer.id}`}
          className="flex-1 text-center bg-yellow-400 text-black py-2 rounded"
        >
          Vote
        </Link>
        <Link href="#" className="flex-1 text-center border py-2 rounded">
          Learn more
        </Link>
      </div>
    </div>
  );
}
