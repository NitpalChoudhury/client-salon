"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const images = [
    "/hero/hero1.jpg",  
    "/hero/hero2.jpg",
    "/hero/hero3.jpg",
  ];

  return (
    <section className="relative w-full h-screen">
      {/* SLIDER */}
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url('${img}')` }}
            >
              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/70" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* FLOATING PARTICLES */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-40"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
              }}
              animate={{
                y: ["0%", "100%"],
                scale: [0.2, 0.5, 0.2],
                opacity: [0.1, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      )}

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center px-8 md:px-24 z-20">
        <div className="max-w-3xl text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.25em] text-yellow-400 text-md mb-4"
          >
            Unleash Your True Style
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r 
            from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
          >
            A Luxury Grooming  
            <br /> Experience for Men
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            Haircuts • Beard Styling • Spa Treatments  
            <br /> Where elegance meets skill.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 flex gap-5"
          >
            <a
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black rounded-xl font-semibold shadow-xl hover:shadow-yellow-500/40"
            >
              Book Now
            </a>

            <a
              href="/services"
              className="px-8 py-3 border border-yellow-400/60 text-yellow-400 rounded-xl text-lg hover:bg-yellow-400 hover:text-black transition-all"
            >
              Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}