import { Crown, Users, Gift, Medal } from "lucide-react";

export default function AwardsPage() {
  const awards = [
    {
      title: "Main Award",
      subtitle: "Gold, Silver & Bronze",
      description:
        "This award is judged by a group of six international experts, according to the BJCP score sheet in a blind tasting mode. Some of the judges are BJCP certified.",
      icon: <Crown size={40} className="text-yellow-500" />,
      medals: [
        { label: "Gold", color: "text-yellow-500" },
        { label: "Silver", color: "text-gray-400" },
        { label: "Bronze", color: "text-orange-500" },
      ],
    },
    {
      title: "People's Choice Award",
      subtitle: "Voted by all guests",
      description:
        "This is the award judged by you – all our guests. To judge, please use the judging form on this website and submit one judging per beer.",
      icon: <Users size={40} className="text-blue-500" />,
    },
    {
      title: "Brewer's Choice Award",
      subtitle: "Voted by participating brewers",
      description:
        "All brewers participating are also present at the event. The brewers judge their fellow competitors' creations.",
      icon: <Gift size={40} className="text-green-500" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Competition Awards
        </h2>
        <p className="text-gray-600 mt-2">
          Three prestigious categories await our winners
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {awards.map((award, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="mb-4">{award.icon}</div>
            <h3 className="text-lg font-bold text-gray-900">{award.title}</h3>
            <p className="mt-1 mb-3 inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
              {award.subtitle}
            </p>
            <p className="text-gray-600 text-sm">{award.description}</p>

            {award.medals && (
              <div className="flex space-x-6 mt-4">
                {award.medals.map((medal, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-xs font-medium"
                  >
                    <Medal size={20} className={medal.color} />
                    <span className="mt-1">{medal.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
