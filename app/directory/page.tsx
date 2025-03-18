"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Directory() {
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
            { href: "/about", label: "About" },
            { href: "/membership", label: "Membership" },
            { href: "/directory", label: "Directory" },
            { href: "/event", label: "Events" },
            { href: "/contact", label: "Contact" },
            { href: "/crafter", label: "Register" },
          ].map((link, index) => (
            <Link key={index} href={link.href}>
              <motion.button className="hover:bg-[#a47551] p-2 rounded">
                {link.label}
              </motion.button>
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Background Section with Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[150vh] bg-cover bg-center flex flex-col items-center justify-center text-center text-black"
        style={{ backgroundImage: "url('/african2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Directory Search */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 py-8 relative z-10"
        >
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">
            Find a Crafter
          </h2>
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-white p-3 rounded-full shadow-lg w-3/4 max-w-2xl border border-[#d9a36a]"
            >
              <input
                placeholder="Search crafters, categories, or locations..."
                className="flex-1 px-4 py-2 rounded-full border-none outline-none text-[#5a4636] bg-transparent placeholder-[#8c5c3b]"
              />
              <button className="ml-3 bg-[#8c5c3b] hover:bg-[#a47551] text-white px-4 py-2 rounded-full">
                Search
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Crafters */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="container mx-auto px-6 py-6 relative z-10"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-white">
            Featured Crafters
          </h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((crafter) => (
              <motion.div
                key={crafter}
                className="bg-white p-6 rounded-lg shadow-md text-center border border-[#d9a36a]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: crafter * 0.2 }}
              >
                <h4 className="text-xl font-semibold">Crafter Name</h4>
                <p className="text-[#5a4636] mt-2">Specialization | Location</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="mt-4 bg-[#8c5c3b] text-white px-4 py-2 rounded"
                >
                  View Profile
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white text-center py-12"
          >
            <h3 className="text-3xl font-bold">Join the Directory</h3>
            <p className="mt-2 text-lg">
              Get listed and gain visibility in South Africa’s craft industry.
            </p>
            <Link href="/crafter">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-4 bg-white hover:bg-[#8c5c3b] hover:text-white text-[#8c5c3b] px-6 py-2 rounded text-lg"
              >
                Register Now
              </motion.button>
            </Link>
          </motion.section>
        </motion.section>
      </motion.div>

      <footer className="bg-gradient-to-r from-black to-gray-900 text-white text-center p-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Mzansi Craft Council | Designed by
          WebCraft Solutions
        </p>
      </footer>
    </div>
  );
}
