"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
    // Handle form submission logic
  };

  return (
    <>
      <nav className="bg-[#8c5c3b] text-white shadow-md p-4 flex justify-between items-center">
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
      </nav>

      <div
        className="min-h-screen flex flex-col items-center p-6 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/african.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl text-white text-center">
          <motion.h1
            className="text-4xl font-extrabold my-6 text-[#f4ede4]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>

          <motion.p
            className="text-lg max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Have a question or need assistance? Reach out to us, and we’ll get
            back to you as soon as possible.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <motion.div
              className="bg-white text-[#5a4636] p-6 rounded-2xl shadow-lg border border-[#d9a36a] flex flex-col gap-4 relative z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#8c5c3b] text-xl" />
                <p className="text-sm">3 Payne Road, Durban, South Africa</p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-[#8c5c3b] text-xl" />
                <p className="text-sm">+27 12 345 6789</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#8c5c3b] text-xl" />
                <p className="text-sm">info@mzansicraftcouncil.co.za</p>
              </div>

              <iframe
                className="rounded-xl w-full h-80 mt-4"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.793719775787!2d31.063863175582988!3d-29.72573397508572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef705ec3a19b91f%3A0xa6db01dbe37d78c9!2sGateway%20Theatre%20Of%20Shopping!5e0!3m2!1sen!2sza!4v1741902391104!5m2!1sen!2sza"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white text-[#5a4636] p-6 rounded-2xl shadow-lg border border-[#d9a36a] flex flex-col gap-4 relative z-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-[#d9a36a] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-[#d9a36a] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 border rounded-lg h-28 focus:ring focus:ring-[#d9a36a] transition-all"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#8c5c3b] text-white p-3 rounded-lg text-lg font-semibold hover:bg-[#a47551] transition-all shadow-md"
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
      <footer className="bg-gradient-to-r from-black to-gray-900 text-white text-center p-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Mzansi Craft Council | Designed by
          WebCraft Solutions
        </p>
      </footer>
    </>
  );
}
