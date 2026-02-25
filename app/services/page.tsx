"use client";

import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

export default function ServicesPage() {
  return (
    <main className="bg-white text-black font-poppins pt-28 pb-20">

      {/* ======================== WOMEN SECTION ======================== */}
      <section>

        {/* WOMEN BANNER */}
        <div className="relative overflow-hidden">
          <img
            src="/banner/women-banner.jpg"
            className="w-full h-[260px] sm:h-[350px] md:h-[450px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 bg-white rotate-[2deg] origin-left translate-y-6 sm:translate-y-10"></div>
        </div>

        {/* WOMEN HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mt-10 sm:mt-12 tracking-wide"
        >
          LADIES / BEAUTY CARE
        </motion.h2>

        {/* WOMEN SERVICES SECTION */}
        <div className="mt-10 sm:mt-14 px-4 sm:px-10 md:px-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Women Image */}
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            src="/banner/women-service.jpg"
            className="w-full h-[260px] sm:h-[330px] md:h-[380px] object-cover rounded-xl shadow-xl"
          />

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">

            <ServiceColumn
              title="Facials & Rituals"
              items={["Bleach", "Luxury Facials/Rituals", "Clean Ups"]}
            />

            <ServiceColumn
              title="Hand & Feet"
              items={["Manicure", "Spa Pedicure", "Pedicure"]}
            />

            <ServiceColumn
              title="Nail Care"
              items={["Nail Paint", "Nail Art", "Nail Filling"]}
            />

            <ServiceColumn
              title="Hair Treatments"
              items={["Hair Spa", "Keratin", "Smoothing"]}
            />

          </div>
        </div>
      </section>

      {/* ======================== MEN SECTION ======================== */}
      <section className="mt-20 sm:mt-32">

        {/* MEN BANNER */}
        <div className="relative overflow-hidden">
          <img
            src="/banner/men-banner.jpg"
            className="w-full h-[260px] sm:h-[350px] md:h-[450px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 bg-white rotate-[2deg] origin-left translate-y-6 sm:translate-y-10"></div>
        </div>

        {/* MEN HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mt-10 sm:mt-12 tracking-wide"
        >
          GENTS / GROOMING CARE
        </motion.h2>

        {/* MEN SERVICE SECTION */}
        <div className="mt-10 sm:mt-14 px-4 sm:px-10 md:px-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Men Grooming Image */}
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            src="/banner/men-service.jpeg"
            className="w-full h-[260px] sm:h-[330px] md:h-[380px] object-cover rounded-xl shadow-xl"
          />

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">

            <ServiceColumn
              title="Hair Styling"
              items={[
                "Hair Cut",
                "Ironing",
                "Global Colouring",
                "Blow Dry",
                "Root Touch Up",
                "Shampoo & Conditioning",
              ]}
            />

            <ServiceColumn
              title="Make Up"
              items={[
                "Party Make Up",
                "Engagement Make Up",
                "Bridal & Reception Make Up",
                "Base Make Up",
                "Eye Make Up",
              ]}
            />

            <ServiceColumn
              title="Hair Texture"
              items={[
                "Rebonding",
                "Perming",
                "Keratin",
                "Colour Protection",
                "Smoothening",
              ]}
            />

            <ServiceColumn
              title="Hair Treatments"
              items={[
                "Spa Treatments",
                "Volumizing",
                "Advanced Hair Moisturising",
                "Scalp Treatments",
              ]}
            />
          </div>
        </div>
      </section>

    </main>
  );
}

/* REUSABLE COLUMN */
function ServiceColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-lg sm:text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-2 sm:space-y-3 text-gray-800 text-sm sm:text-base">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 sm:gap-3">
            <FaCircle className="text-yellow-500 text-xs" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}