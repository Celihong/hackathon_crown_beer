import Link from "next/link";

export default function HomePage() {
  return (
    <section className="text-center space-y-6">
      <h2 className="text-3xl font-bold text-amber-700">
        Welcome to the Cambodian Craft Beer Crown 2025!
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-700">
        Join us on <strong>16th August 2025</strong> from{" "}
        <strong>2:00 PM – 11:30 PM</strong> at{" "}
        <strong>Botanico Craft Beer Garden</strong>, Street 29. Experience
        Cambodia’s finest craft beers, meet the brewers, enjoy live music, and
        cast your vote for the People’s Choice Award!
      </p>

      {/* Quick voting link */}
      <div className="mt-6">
        <Link
          href="/vote"
          className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow hover:bg-amber-700"
        >
          Start Voting 🍺
        </Link>
      </div>

      {/* Event Highlights */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-amber-600 mb-2">
            Meet the Breweries
          </h3>
          <p>
            Discover 11 incredible breweries from across Cambodia and learn
            their unique stories.
          </p>
          <Link
            href="/breweries"
            className="text-amber-600 font-semibold hover:underline"
          >
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-amber-600 mb-2">
            Event Timetable
          </h3>
          <p>
            Check out the live music, DJ sets, and award ceremonies scheduled
            throughout the day.
          </p>
          <Link
            href="/timetable"
            className="text-amber-600 font-semibold hover:underline"
          >
            View Schedule →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-amber-600 mb-2">Awards</h3>
          <p>
            Learn about the Main Award, People’s Choice Award, and Brewer’s
            Choice Award.
          </p>
          <Link
            href="/awards"
            className="text-amber-600 font-semibold hover:underline"
          >
            See Awards →
          </Link>
        </div>
      </div>
    </section>
  );
}
