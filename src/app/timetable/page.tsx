"use client";

import React from "react";
import { Music, Clock, Award, Calendar, Users } from "lucide-react";

const items = [
  { time: "2:00 PM", title: "Event begins", icon: Clock },
  { time: "3:15 PM", title: "Introduction by the MC", icon: Users },
  { time: "3:30 PM", title: "DJ Wha-Wah (until 6:30 PM)", icon: Music },
  { time: "6:40 PM", title: "Blind tasting live session", icon: Award },
  { time: "7:30 PM", title: "Start award ceremony", icon: Award },
  {
    time: "8:30 PM",
    title: "Live music by The Broken Cymbal (until 11:00 PM)",
    icon: Music,
  },
  { time: "11:30 PM", title: "Event ends", icon: Calendar },
];

export default function EventTimeLine() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-green-500">
        Event Schedule
      </h1>
      <section className="max-w-3xl mx-auto p-6 sm:p-8">
        <ol className="relative border-l-2 border-l-green-400">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={item.time + idx} className="mb-8 ml-6 last:mb-0">
                {/* Circle with icon */}
                <span className="absolute -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-400 ring-4 ring-white text-white shadow-md">
                  <Icon className="h-6 w-6" />
                </span>

                {/* Card */}
                <div className="rounded-md border border-green-200 bg-green-50 p-5 shadow-sm hover:shadow-lg transition-shadow duration-300 ml-5">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <h3 className="text-gray-900 font-semibold text-lg tracking-wide mb-1 sm:mb-0">
                      {item.title}
                    </h3>
                    <time className="text-green-700 font-mono text-sm font-medium self-end sm:self-center">
                      {item.time}
                    </time>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
