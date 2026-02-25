"use client";

import { motion } from "framer-motion";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-black font-poppins pt-32 px-6 md:px-20 pb-20">

      {/* PAGE HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-black tracking-wide"
      >
        Book an Appointment
      </motion.h1>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT: CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">
            Contact Details
          </h2>

          <div className="flex items-center gap-4 text-lg text-gray-700">
            <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
            Guwahati, Assam — LuxurySalon Studio
          </div>

          <div className="flex items-center gap-4 text-lg text-gray-700">
            <FaPhone className="text-yellow-500 text-2xl" />
            +91 98765 43210
          </div>

          <div className="flex items-center gap-4 text-lg text-gray-700">
            <FaEnvelope className="text-yellow-500 text-2xl" />
            luxurysalon@gmail.com
          </div>

          {/* MAP */}
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 mt-6">
            <iframe
              className="w-full h-64 rounded-xl"
              src="https://maps.google.com/maps?q=Guwahati&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </motion.div>

        {/* RIGHT: FORM CARD */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-2xl border border-gray-200 p-10 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold text-yellow-500 mb-8">
            Send a Message
          </h3>

          {/* NAME */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Name</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl text-black focus:border-yellow-500 outline-none"
              placeholder="Your Name"
              required
            />
          </div>

          {/* PHONE */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Phone</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl text-black focus:border-yellow-500 outline-none"
              placeholder="Your Phone Number"
              required
            />
          </div>

          {/* SERVICE */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Service</label>
            <select
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl text-black focus:border-yellow-500 outline-none"
              required
            >
              <option value="">Select a Service</option>
              <option>Haircut & Styling</option>
              <option>Beard Grooming</option>
              <option>Facial & Spa</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Message</label>
            <textarea
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl text-black focus:border-yellow-500 outline-none"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-xl text-lg hover:bg-yellow-600 transition-all shadow-md"
          >
            Submit
          </button>
        </motion.form>

      </div>
    </main>
  );
}