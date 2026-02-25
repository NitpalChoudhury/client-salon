"use client";

import { motion } from "framer-motion";

export default function VogueSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20">

      {/* GRID 3x2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

        {/* TOP LEFT IMAGE */}
        <div className="group overflow-hidden relative">
          <img
            src="/vogue/v1.jpg"
            className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* CENTER CARD */}
        <div className="flex items-center justify-center bg-black text-white h-[350px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-6 px-6"
          >
            <h2 className="text-4xl font-bold tracking-wider">
              LOOKS <br /> IN VOGUE
            </h2>

            <a
              href="/gallery"
              className="inline-block px-8 py-3 bg-[#C9A44C] text-white text-lg rounded-sm 
              font-semibold shadow-lg hover:bg-[#b8933f] transition-all"
            >
              View Collection
            </a>
          </motion.div>
        </div>

        {/* TOP RIGHT IMAGE */}
        <div className="group overflow-hidden relative">
          <img
            src="/vogue/v2.jpg"
            className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* BOTTOM LEFT IMAGE */}
        <div className="group overflow-hidden relative">
          <img
            src="/vogue/v3.jpg"
            className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* BOTTOM MIDDLE IMAGE */}
        <div className="group overflow-hidden relative">
          <img
            src="/vogue/v4.jpg"
            className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* BOTTOM RIGHT IMAGE */}
        <div className="group overflow-hidden relative">
          <img
            src="/vogue/v5.jpg"
            className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

      </div>
    </section>
  );
}