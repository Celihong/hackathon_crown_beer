"use client";

import React from "react";
import { motion } from "framer-motion";
import { Music, Clock, Award, Calendar, Users } from "lucide-react";

export default function EventTimeTable() {
  const items = [
    { time: "2:00 PM", title: "Event begins", icon: Clock },
    { time: "3:15 PM", title: "MC Introduction", icon: Users },
    { time: "3:30 – 6:30 PM", title: "DJ Wha-Wah", icon: Music },
    { time: "6:40 PM", title: "Blind tasting live session", icon: Award },
    { time: "7:30 PM", title: "Award ceremony", icon: Award },
    {
      time: "8:30 – 11:00 PM",
      title: "Live music by The Broken Cymbal",
      icon: Music,
    },
    { time: "11:30 PM", title: "Event ends", icon: Calendar },
  ];

  return (
    <section className="max-w-3xl mx-auto p-6 sm:p-8">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-lime-700">
        Event Schedule
      </h2>
      <ol className="space-y-8">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.li
              key={item.time + idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="flex items-center gap-4 bg-white shadow-md rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow cursor-default"
            >
              {/* Icon box near text */}
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-tr from-lime-400 to-green-600 text-white shadow-md flex-shrink-0">
                <Icon className="h-6 w-6" />
              </div>

              {/* Text content */}
              <div className="flex-1 flex justify-between items-center min-w-0">
                <p className="text-lg font-semibold text-gray-900 truncate">
                  {item.title}
                </p>
                <time className="ml-4 text-sm font-mono text-lime-700 whitespace-nowrap  ">
                  {item.time}
                </time>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
