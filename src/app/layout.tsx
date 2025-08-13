import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Assuming you're using this font
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";     

// Initialize the font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Cambodian Craft Beer Crown 2025",
  description: "A description of my awesome Next.js app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col min-h-screen bg-amber-50 text-gray-900`}>
        <Header />
        <main className="flex-1 container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}