"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4ede4] text-[#5a4636]">
      {/* Navbar */}
      <motion.nav
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#8c5c3b] text-white shadow-md p-4 flex justify-between items-center"
      >
        <h1 className="text-2xl font-bold">Mzansi Craft Council</h1>
        <div className="space-x-4">
          {[
            "About",
            "Membership",
            "Directory",
            "Events",
            "Contact",
            "Register",
          ].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase()}`}>
              <motion.button className="hover:bg-[#a47551] p-2 rounded">
                {item}
              </motion.button>
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header
        className="relative h-[100vh] bg-cover bg-center flex flex-col items-center justify-center text-center text-black"
        style={{ backgroundImage: "url('/african.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl px-8"
        >
          <h2 className="text-4xl font-semibold drop-shadow-lg text-white">
            A United voice for South African craft. Representing, advocating,
            and creating opportunities for all
          </h2>
          <p className="text-lg text-white mt-4">
            The Mzansi Craft Council (MCC) is South Africa’s national,
            independent craft organization, dedicated to unifying, advocating
            for, and supporting crafters across all disciplines. Whether you are
            a rural artisan, an emerging innovator, or an established master in
            the field, MCC exists to ensure fair representation, access to
            markets, and opportunities to thrive.
          </p>
          <div className="mt-6 space-x-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#d9a36acc] hover:bg-[#c48b50] text-white px-6 py-2 rounded"
            >
              Join the Directory
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-[#5a4636] px-6 py-2 border rounded"
            >
              Explore Craft Categories
            </motion.button>
          </div>
        </motion.div>
      </header>

      {/* Featured Sections */}
      <section className="container mx-auto px-6 py-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Discover South African Craft
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            "National Craft Directory",
            "AI Craft Assist",
            "Market & Export Access",
            "Training & Development",
          ].map((title, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center border border-[#d9a36a]"
            >
              <h4 className="text-xl font-semibold">{title}</h4>
              <p className="text-[#5a4636] mt-2">
                {index === 0 &&
                  "Find artisans by craft type, region, and expertise."}
                {index === 1 &&
                  "Get instant help on funding, policies, and events."}
                {index === 2 &&
                  "Explore exhibitions, buyers, and global opportunities."}
                {index === 3 &&
                  "Offering workshops, mentorship programs, and business skills."}
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                className={`mt-4 text-white px-4 py-2 rounded ${
                  index < 2 ? "bg-[#8c5c3b]" : "bg-[#b33b3b]"
                }`}
              >
                {index === 0 ? "Browse Directory" : "Learn More"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-gradient-to-r from-black to-gray-900 text-white text-center p-4 mt-10">
        <p className="text-sm">
          © {new Date().getFullYear()} Mzansi Craft Council | Designed by
          WebCraft Solutions
        </p>
      </footer>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-[#8c5c3b] text-white p-4 rounded-full shadow-lg hover:bg-[#a47551]"
      >
        🤖 Chat with MCC AI
      </motion.button>
    </div>
  );
}
