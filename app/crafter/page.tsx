"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CrafterRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    craftType: "",
    location: "",
    portfolio: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Handle form submission logic
  };

  return (
    <>
      <nav className="bg-[#8c5c3b] text-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mzansi Craft Council</h1>
        <div className="space-x-4">
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
          <h1 className="text-4xl font-extrabold my-6 text-[#f4ede4]">
            Register as a Crafter
          </h1>

          <p className="text-lg max-w-2xl mx-auto mb-6">
            Join the Mzansi Craft Council’s National Craft Directory and gain
            visibility, networking opportunities, and market access.
          </p>

          <form
            className="bg-white text-[#5a4636] p-6 rounded-2xl shadow-lg border border-[#d9a36a] flex flex-col gap-4 relative z-10"
            onSubmit={handleSubmit}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-[#d9a36a] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Craft Type</label>
              <select
                name="craftType"
                value={formData.craftType}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-[#d9a36a] transition-all"
              >
                <option value="">Select Craft Category</option>
                <option value="Basketry">Basketry</option>
                <option value="Pottery">Pottery & Ceramics</option>
                <option value="Beadwork">Beadwork</option>
                <option value="Textile">Textile & Weaving</option>
                <option value="Woodcraft">Woodcraft & Carving</option>
                <option value="Leatherwork">Leatherwork</option>
                <option value="Recycled Art">Recycled & Sustainable Art</option>
                <option value="Wire Art">Telephone Wire Art</option>
                <option value="Metalwork">Metalwork</option>
                <option value="Mixed-Media">Mixed-Media Craft</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-[#d9a36a] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Portfolio / Website (Optional)
              </label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-[#d9a36a] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Brief Description of Your Work
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-lg h-28 focus:ring focus:ring-[#d9a36a] transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#8c5c3b] text-white p-3 rounded-lg text-lg font-semibold hover:bg-[#a47551] transition-all shadow-md"
            >
              Register Now
            </button>
          </form>

          <p className="mt-6 text-center">
            Already registered?{" "}
            <Link href="/directory" className="text-[#a47551] font-semibold">
              View the Craft Directory
            </Link>
          </p>
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
