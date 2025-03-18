"use client";

import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f4ede4] text-[#5a4636]">
      {/* Navbar */}
      <nav className="bg-[#8c5c3b] text-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mzansi Craft Council</h1>
        <div className="space-x-4">
          {/* <Link href="/">
            <button className="hover:bg-[#a47551] p-2 rounded">Home</button>
          </Link> */}
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

      {/* About Section with Background Image */}
      <section
        className="relative container mx-auto px-6 py-8 text-center bg-cover bg-center h-[80vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/african3.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold mb-4 text-white text-center">
            Our Story
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-white">
            The Mzansi Craft Council (MCC) was born out of a need for true
            representation in South Africa’s craft sector. For too long,
            crafters—particularly those in rural and historically
            underrepresented communities—have struggled with barriers to market
            access, fair selection for exhibitions, and financial
            sustainability. Through dialogues at key industry gatherings like
            the Craft Bosberaad, it became evident that the sector lacked a
            fully representative, independent body dedicated solely to craft.
            MCC was established to unify crafters across all disciplines,
            advocate for policy changes, and create a national craft directory
            that ensures visibility for all artisans. MCC is not just an
            organization; it’s a movement to build a stronger, more sustainable
            craft ecosystem where crafters of all backgrounds have equal access
            to opportunities.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-[#d9a36a] text-center">
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="mt-2">
            To create a unified, representative, and sustainable craft sector in
            South Africa by advocating for crafters, ensuring fair
            opportunities, and fostering an environment where traditional and
            contemporary craftsmanship can thrive.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-[#d9a36a] text-center">
          <h3 className="text-2xl font-semibold">Our Vision</h3>
          <p className="mt-2">
            A future where South African craft is globally recognized and
            valued, uplifting communities and preserving cultural heritage.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-[#d9a36a] text-center">
          <h3 className="text-2xl font-semibold">Our Values</h3>
          <p className="mt-2">
            Authenticity, inclusivity, sustainability, and empowerment are at
            the heart of everything we do.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h3 className="text-3xl font-bold mb-4">Join Us in Elevating Craft</h3>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Become a part of the MCC community and gain access to invaluable
          resources, mentorship, and market opportunities.
        </p>
        <button className="bg-[#d9a36a] hover:bg-[#c48b50] text-white px-6 py-2 rounded">
          Become a Member
        </button>
      </section>
      <footer className="bg-gradient-to-r from-black to-gray-900 text-white text-center p-4 mt-10">
        <p className="text-sm">
          © {new Date().getFullYear()} Mzansi Craft Council | Designed by
          WebCraft Solutions
        </p>
      </footer>
    </div>
  );
}
