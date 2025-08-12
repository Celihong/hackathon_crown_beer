import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cambodian Craft Beer Crown 2025",
  description: "Vote for your favorite beer and explore the breweries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-amber-50 text-gray-900">
        {/* Header */}
        <header className="bg-amber-600 text-white shadow-md">
          <div className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-xl font-bold">
              Cambodian Craft Beer Crown 2025
            </h1>
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
                className="bg-white text-amber-600 font-semibold px-3 py-1 rounded hover:bg-gray-100"
              >
                Vote Now
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto p-4">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4 mt-6">
          © 2025 Cambodian Craft Beer Association
        </footer>
      </body>
    </html>
  );
}
