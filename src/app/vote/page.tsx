"use client";

import Link from "next/link";

export default function VotePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4 py-12">
      <h1 className="text-4xl font-extrabold text-green-700 mb-6 text-center">
        🍺 Vote for Your Favorite Brewery!
      </h1>
      <p className="max-w-xl text-center text-green-900 mb-8">
        Thank you for joining the Cambodian Craft Beer Crown 2025!  
        Click the button below to go to the voting form.
      </p>

      <a
        href="https://forms.gle/LPZFNjGQymjVju8B8"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        🍺 Go to Voting Form
      </a>

      <Link
        href="/"
        className="mt-10 text-green-700 font-semibold hover:underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
