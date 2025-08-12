// app/breweries/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const breweries = [
  {
    name: "Sak Pub",
    description:
      "Serving handcrafted small batch beers in a welcoming atmosphere since 2021.",
    image: "/images/sakpub.png",
    location: { lat: 11.5584, lng: 104.9282 }, // Phnom Penh example
  },
  {
    name: "Project Brews",
    description:
      "A Kampot-based microbrewery making modern hoppy beers since 2020.",
    image: "/images/projectbrews.png",
    location: { lat: 10.611, lng: 104.1815 }, // Kampot example
  },
  {
    name: "Black Bamboo",
    description:
      "First island craft brewery in Cambodia, located on Silk Island with river views.",
    image: "/images/Blackbamboo.png",
    location: { lat: 11.4333, lng: 104.9333 }, // Silk Island approx
  },
  {
    name: "Botanico Brewing Company",
    description:
      "One of the oldest breweries in Phnom Penh, creating beers with local ingredients.",
    image: "/images/botanico.png",
    location: { lat: 11.5655, lng: 104.916 }, // Phnom Penh approx
  },
  {
    name: "Riel Brewing and Distilling",
    description:
      "Pioneers in Cambodia's craft beer scene with creative, high-quality recipes.",
    image: "/images/rielbrewing.png",
    location: { lat: 11.5621, lng: 104.9166 }, // Phnom Penh approx
  },
  {
    name: "Fuzzy Logic",
    description:
      "Established in 2014, known for balanced beers like Thunderslap IPA & John Lemon.",
    image: "/images/fuzzylogic.png",
    location: { lat: 11.5659, lng: 104.919 }, // Phnom Penh approx
  },
  {
    name: "Chug Lab",
    description:
      "Nano brewery in Phnom Penh, heavy metal-themed tap house in BKK3.",
    image: "/images/chuglab.png",
    location: { lat: 11.57, lng: 104.927 }, // Phnom Penh approx
  },
  {
    name: "Brew Khnear",
    description:
      "Focused on work/life balance with solid and creative beers using traditional methods.",
    image: "/images/brewkhnear.png",
    location: { lat: 11.565, lng: 104.92 }, // Phnom Penh approx
  },
  {
    name: "Funghi Art",
    description:
      "Innovating Cambodian rice fermentation into beers, sake, shochu, and gin.",
    image: "/images/funghiart.png",
    location: { lat: 11.563, lng: 104.918 }, // Phnom Penh approx
  },
  {
    name: "Jaya-Vara Meadery",
    description:
      "Crafting unique meads & beers with local ingredients for the past 3 years.",
    image: "/images/jayavara.png",
    location: { lat: 11.564, lng: 104.917 }, // Phnom Penh approx
  },
  {
    name: "Krama Craft Brewery",
    description:
      "Siem Reap brewery blending Cambodian ingredients with creative brewing.",
    image: "/images/kramacraft.png",
    location: { lat: 13.3633, lng: 103.86 }, // Siem Reap approx
  },
];

export default function BreweriesPage() {
  const [selectedBrewery, setSelectedBrewery] = useState<any>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 sm:px-6 py-10">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-green-800 text-center mb-10">
          Breweries at the Cambodian Craft Beer Crown 2025
        </h1>

        {/* Brewery Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {breweries.map((brewery, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedBrewery(brewery)}
              className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg border border-green-100 overflow-hidden transition-all duration-300"
            >
              {brewery.image && (
                <div className="relative w-full h-36">
                  <Image
                    src={brewery.image}
                    alt={brewery.name}
                    fill
                    className="object-contain bg-white"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-green-700">
                  {brewery.name}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedBrewery && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Frosted Glass Background */}
              <div
                onClick={() => setSelectedBrewery(null)}
                className="absolute inset-0 bg-black/30 backdrop-blur-md"
              />

              <motion.div
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.y > 100) setSelectedBrewery(null); // swipe down to close
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-lg z-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedBrewery(null)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-lg"
                >
                  ✕
                </button>

                {/* Image */}
                {selectedBrewery.image && (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-white">
                    <Image
                      src={selectedBrewery.image}
                      alt={selectedBrewery.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                {/* Details */}
                <h2 className="text-2xl font-bold text-green-700 mb-2">
                  {selectedBrewery.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {selectedBrewery.description}
                </p>

                {/* Find Us Button */}
                {selectedBrewery.location ? (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${selectedBrewery.location.lat},${selectedBrewery.location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-colors"
                  >
                    📍 Find Us
                  </a>
                ) : (
                  // fallback to name search if location missing
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      selectedBrewery.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-colors"
                  >
                    📍 Find Us
                  </a>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
