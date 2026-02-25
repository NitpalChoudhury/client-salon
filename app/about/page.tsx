"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="bg-black text-white font-poppins">

      {/* ---------------------- HERO SECTION ---------------------- */}
      <section className="relative h-[80vh] w-full flex items-center justify-start">
        <img
          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt="Salon Hero"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 px-6 md:px-20 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-yellow-400 leading-tight">
            A Legacy of Grooming Excellence
          </h1>
          <p className="text-gray-300 text-lg mt-6">
            Where tradition meets modern style. Unmatched quality. Unmatched experience.
          </p>
        </motion.div>
      </section>

      {/* ---------------------- IMAGE + TEXT SECTION ---------------------- */}
      <section className="py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-white/10 shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552"
            className="w-full h-[480px] object-cover"
            alt="Salon Interior"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-playfair font-semibold text-yellow-400 mb-6">
            Our Story
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            At <span className="text-yellow-400 font-bold">Looks Unisex Salon</span>, 
            we elevate grooming into an art form. With premium products, expert stylists, 
            and an atmosphere crafted for comfort, our clients receive more than a service — 
            they experience transformation.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            For years, we’ve set the benchmark for quality grooming with modern techniques, 
            international standards, and dedication to excellence.
          </p>
        </motion.div>
      </section>

      {/* ---------------------- WHY CHOOSE US ---------------------- */}
      <section className="py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-16">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-playfair font-semibold text-yellow-400 mb-4">
            Why Choose Us?
          </h2>

          <ul className="space-y-4 text-lg text-gray-300">
            <li>✓ Certified, expert stylists</li>
            <li>✓ Premium grooming products</li>
            <li>✓ Luxury salon environment</li>
            <li>✓ Personalized modern styling</li>
            <li>✓ Safe, hygienic & comfortable setup</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed text-lg"
        >
          With clients ranging from professionals to celebrities, we tailor every look 
          to match personality, lifestyle, and preference — ensuring every visit leaves 
          you confident and refreshed.
        </motion.div>

      </section>

      {/* ---------------------- GALLERY SECTION ---------------------- */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-4xl font-playfair font-semibold text-yellow-400 text-center mb-14">
          Our Salon Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* IMAGE GRID 1 */}
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
            className="w-full h-[260px] object-cover rounded-xl"
          />

          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
            className="w-full h-[260px] object-cover rounded-xl"
          />

          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1"
            className="w-full h-[260px] object-cover rounded-xl"
          />

          {/* IMAGE GRID 2 */}
          <img
            src="https://images.unsplash.com/photo-1516397281156-ca07cf9746fc"
            className="w-full h-[260px] object-cover rounded-xl"
          />

          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3b"
            className="w-full h-[260px] object-cover rounded-xl"
          />

          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
            className="w-full h-[260px] object-cover rounded-xl"
          />

        </div>
      </section>

      {/* ---------------------- MISSION BLOCK ---------------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 p-10 mx-6 md:mx-20 
                   rounded-2xl mt-20 text-center shadow-xl backdrop-blur-lg"
      >
        <h3 className="text-3xl font-playfair font-semibold text-yellow-400 mb-4">
          Our Mission
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          To inspire confidence through world-class grooming —  
          delivering luxury, comfort, and style in every experience.
        </p>
      </motion.div>

      <div className="h-24"></div>

    </main>
  );
}