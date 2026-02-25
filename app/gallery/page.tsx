"use client";

import { motion } from "framer-motion";

const premiumGallery = [
  "/gallery/pro1.jpg",
  "/gallery/pro2.jpg",
  "/gallery/pro3.jpg",
  "/gallery/pro4.jpg",
  "/gallery/pro5.jpg",
  "/gallery/pro6.jpg",
  "/gallery/pro7.jpg",
  "/gallery/pro8.jpg",
  "/gallery/pro9.jpg",
  "/gallery/pro10.jpg",
];

export default function LuxuryLookGallery() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 md:px-20 pb-28">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold text-center text-yellow-400 tracking-wide"
      >
        LuxuryLook Showcase
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-center text-gray-400 text-lg mt-4 max-w-2xl mx-auto"
      >
        A premium collection of grooming transformations, luxury salon interior,  
        and professional styling captured in elegant frames.
      </motion.p>

      {/* MASONRY GRID */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 mt-16 space-y-6">
        {premiumGallery.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/10
                       hover:border-yellow-400  transition-all duration-500 group
                       shadow-[0px_0px_25px_rgba(255,215,0,0.15)]"
          >
            
            {/* IMAGE */}
            <img
              src={src}
              className="w-full rounded-2xl mb-6 object-cover group-hover:scale-110 
                         transition-transform duration-[1.2s]"
              alt={`luxury-${index}`}
            />

            {/* GOLDEN OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
              <div>
                <p className="text-yellow-400 text-xl font-semibold uppercase drop-shadow-lg">
                  Signature Look
                </p>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </main>
  );
}