"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const breweries = [
  {
    name: "Sak Pub",
    description:
      "Serving handcrafted small batch beers in a welcoming atmosphere since 2021.",
    image: "/images/sakpub.png",
    location: { lat: 11.5584, lng: 104.9282 },
  },
  {
    name: "Project Brews",
    description:
      "A Kampot-based microbrewery making modern hoppy beers since 2020.",
    image: "/images/projectbrews.png",
    location: { lat: 10.611, lng: 104.1815 },
  },
  {
    name: "Black Bamboo",
    description:
      "First island craft brewery in Cambodia, located on Silk Island with river views.",
    image: "/images/Blackbamboo.png",
    location: { lat: 11.4333, lng: 104.9333 },
  },
  {
    name: "Botanico Brewing Company",
    description:
      "One of the oldest breweries in Phnom Penh, creating beers with local ingredients.",
    image: "/images/botanico.png",
    location: { lat: 11.5655, lng: 104.916 },
  },
  {
    name: "Riel Brewing and Distilling",
    description:
      "Pioneers in Cambodia's craft beer scene with creative, high-quality recipes.",
    image: "/images/rielbrewing.png",
    location: { lat: 11.5621, lng: 104.9166 },
  },
  {
    name: "Fuzzy Logic",
    description:
      "Established in 2014, known for balanced beers like Thunderslap IPA & John Lemon.",
    image: "/images/fuzzylogic.png",
    location: { lat: 11.5659, lng: 104.919 },
  },
  {
    name: "Chug Lab",
    description:
      "Nano brewery in Phnom Penh, heavy metal-themed tap house in BKK3.",
    image: "/images/chuglab.png",
    location: { lat: 11.57, lng: 104.927 },
  },
  {
    name: "Brew Khnear",
    description:
      "Focused on work/life balance with solid and creative beers using traditional methods.",
    image: "/images/brewkhnear.png",
    location: { lat: 11.565, lng: 104.92 },
  },
  {
    name: "Funghi Art",
    description:
      "Innovating Cambodian rice fermentation into beers, sake, shochu, and gin.",
    image: "/images/funghiart.png",
    location: { lat: 11.563, lng: 104.918 },
  },
  {
    name: "Jaya-Vara Meadery",
    description:
      "Crafting unique meads & beers with local ingredients for the past 3 years.",
    image: "/images/jayavara.png",
    location: { lat: 11.564, lng: 104.917 },
  },
  {
    name: "Krama Craft Brewery",
    description:
      "Siem Reap brewery blending Cambodian ingredients with creative brewing.",
    image: "/images/kramacraft.png",
    location: { lat: 13.3633, lng: 103.86 },
  },
];

export default function BreweriesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 sm:px-6 py-10">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-green-800 text-center mb-10">
          Breweries at the Cambodian Craft Beer Crown 2025
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {breweries.map((brewery, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md border border-green-100 overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* Margin top above image */}
              {brewery.image && (
                <div className="relative w-full h-36 mt-6">
                  <Image
                    src={brewery.image}
                    alt={brewery.name}
                    fill
                    className="object-contain bg-white"
                  />
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="p-4 flex flex-col flex-grow"
              >
                <h2 className="text-lg font-semibold text-green-700 mb-2">
                  {brewery.name}
                </h2>

                <p className="text-gray-600 mb-4">{brewery.description}</p>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${brewery.location.lat},${brewery.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-colors self-start"
                >
                  📍 Find Us
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
