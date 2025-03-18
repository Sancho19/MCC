"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Membership() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-[#5a4636]"
      style={{ backgroundImage: "url('/african.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Navbar */}
      <motion.nav
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#8c5c3b] text-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50"
      >
        <h1 className="text-2xl font-bold">Mzansi Craft Council</h1>
        <div className="space-x-4">
          {[
            { href: "/", label: "Home" },
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

      {/* Membership Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 py-24 text-center relative z-10"
      >
        <motion.h2
          className="text-4xl font-bold text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Membership
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Becoming a member of the Mzansi Craft Council means joining a national
          movement that is reshaping the future of craft in South Africa.
          Membership offers visibility, advocacy, resources, and opportunities
          to help your craft business grow and thrive.
        </motion.p>

        {/* Membership Plans */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {[
            {
              title: "Visibility & Recognition",
              text: "Your profile will be included in the National Craft Directory, making it easier for buyers, galleries, and collectors to find you.",
              color: "bg-[#8c5c3b]",
            },
            {
              title: "Access to Exhibitions & Markets",
              text: "MCC will work to ensure fair selection processes for local and international craft exhibitions",
              color: "bg-[#8c5c3b]",
            },
            {
              title: "Advocacy & Policy Representation",
              text: "MCC is actively engaging with policymakers to ensure that the needs of crafters are heard and addressed.",
              color: "bg-[#8c5c3b]",
            },
            {
              title: "Training & Development",
              text: "Gain access to workshops, business mentorship, and masterclasses to improve your craft and business skills.",
              color: "bg-[#6d8c3b]",
            },
            {
              title: "Funding & Grant Opportunities",
              text: "Stay updated on grants, funding programs, and industry financial resources available to crafters.",
              color: "bg-[#b33b3b]",
            },
            {
              title: "Networking & Collaborations",
              text: "Connect with fellow artisans, designers, and craft industry leaders to create new opportunities.",
              color: "bg-[#b33b3b]",
            },
          ].map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-[#d9a36a] text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold">{plan.title}</h3>
              <p className="text-[#5a4636] mt-2">{plan.text}</p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className={`${plan.color} text-white px-4 py-2 rounded mt-4`}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
