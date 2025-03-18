"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaSearch,
} from "react-icons/fa";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "National Craft Exhibition 2025",
    date: "June 15, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Cape Town International Convention Centre",
    description:
      "A grand showcase of South Africa’s finest handcrafted goods. Meet buyers, network with artisans, and discover the latest craft trends.",
  },
  {
    id: 2,
    title: "Funding & Grant Application Workshop",
    date: "July 5, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Virtual (Zoom)",
    description:
      "A free workshop guiding crafters on how to apply for grants, funding programs, and business support.",
  },
  {
    id: 3,
    title: "Craft Business Masterclass",
    date: "August 20, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Johannesburg Craft Hub",
    description:
      "Learn how to scale your craft business, attract buyers, and market your handmade products effectively.",
  },
  {
    id: 4,
    title: "Sustainable Craft & Eco-Friendly Design Conference",
    date: "September 12, 2025",
    time: "11:00 AM - 6:00 PM",
    location: "Durban Art Gallery",
    description:
      "A conference focusing on sustainable craft practices, ethical sourcing, and eco-friendly design innovations.",
  },
  {
    id: 5,
    title: "Mzansi Craft Council Annual General Meeting",
    date: "October 25, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Pretoria National Cultural Center",
    description:
      "An open forum for MCC members to discuss industry challenges, future opportunities, and elect new representatives.",
  },
];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#8c5c3b] text-white shadow-md p-4 flex justify-between items-center"
      >
        <h1 className="text-2xl font-bold">Mzansi Craft Council</h1>
        <div className="space-x-4">
          <Link href="/">
            <button className="hover:bg-[#a47551] p-2 rounded">Home</button>
          </Link>
          <Link href="/about">
            <button className="hover:bg-[#a47551] p-2 rounded">About</button>
          </Link>
          <Link href="/membership">
            <button className="hover:bg-[#a47551] p-2 rounded">
              Membership
            </button>
          </Link>
          <Link href="/directory">
            <button className="hover:bg-[#a47551] p-2 rounded">
              Directory
            </button>
          </Link>
          <Link href="/event">
            <button className="hover:bg-[#a47551] p-2 rounded">Events</button>
          </Link>
          <Link href="/contact">
            <button className="hover:bg-[#a47551] p-2 rounded">Contact</button>
          </Link>
          <Link href="/crafter">
            <button className="hover:bg-[#a47551] p-2 rounded">Register</button>
          </Link>
        </div>
      </motion.nav>

      <div
        className="h-[170vh] bg-cover bg-center relative flex flex-col items-center p-10 text-[#5a4636] bg-fixed "
        style={{ backgroundImage: "url('/african1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 w-full max-w-4xl text-center"
        >
          <h1 className="text-3xl font-bold my-6 text-white">
            Events & Opportunities
          </h1>
          <p className="text-lg text-center max-w-3xl mb-6 text-white">
            Stay updated on upcoming craft fairs, exhibitions, workshops, and
            funding opportunities.
          </p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center mb-6 text-white"
          >
            <div className="w-full max-w-lg relative">
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl space-y-6"
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  className="bg-white p-6 rounded-lg shadow-lg border border-[#d9a36a]"
                >
                  <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#8c5c3b]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-[#8c5c3b]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#8c5c3b]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-400 text-center">
                No events match your search.
              </p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
