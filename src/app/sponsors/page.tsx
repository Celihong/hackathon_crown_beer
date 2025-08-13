import Image from "next/image";

const sponsors = [
  {
    name: "BERTIE",
    description: "Official event partner.",
    logo: "BertiePNH logo-3.png",
  },
  {
    name: "BOTANICO",
    description: "Premium beer supplier.",
    logo: "botanico.png",
  },
  {
    name: "CRAFT BEER ASSOCIATION",
    description: "Local food provider.",
    logo: "CBAC LOGO fa-color.png",
  },
  {
    name: "THAI TAN",
    description: "Community supporter.",
    logo: "Copy of Logo ThaiTan(eng) (1).png",
  },
  {
    name: "YAKIMA CHIEF",
    description: "Craft beer enthusiast group.",
    logo: "Copy of Logo Yakima Chief Hops.png",
  },
  {
    name: "SKAI TECH",
    description: "Event logistics partner.",
    logo: "SKAI_Tech.png",
  },
];

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 sm:px-6 py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-6 text-center">
        Sponsors
      </h1>

      <p className="max-w-3xl mx-auto text-center text-gray-700 mb-12 text-base sm:text-lg">
        We thank our generous sponsors who make the Cambodian Craft Beer Crown 2025 possible.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
        {sponsors.map(({ name, description, logo }, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center space-y-4 sm:space-y-5 hover:shadow-xl transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="w-40 h-40 sm:w-44 sm:h-44 bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
              <Image
                src={`/images/${logo}`} // keep exact path
                alt={`${name} Logo`}
                width={170}
                height={170}
                className="object-contain"
                draggable={false}
              />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-green-700 text-center">
              {name}
            </h2>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              {description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
