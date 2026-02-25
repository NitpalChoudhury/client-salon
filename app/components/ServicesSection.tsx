"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  return (

    <section
      
    >
      {/* SECOND SECTION – GENTS & LADIES */}
          <h2 className="text-4xl font-bold bg-w text-center mb-12 tracking-wider text-black drop-shadow-lg">
          OUR SERVICES
        </h2>

      <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/bg.png')" }}
      >

      <div className="w-full py-20 bg-white/10 backdrop-blur-sm mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* GENTS */}
          <div className="relative flex justify-center items-center bg-white/20 backdrop-blur-md">
            <img
              src="/gents.jpg"
              className="w-full h-[500px] object-cover opacity-90"
            />
            <h1 className="absolute text-4xl font-bold tracking-wide text-black drop-shadow-lg">
              GENTS
            </h1>
          </div>

          {/* LADIES */}
          <div className="relative flex justify-center items-center bg-white/20 backdrop-blur-md">
            <img
              src="/ladies.png"
              className="w-full h-[500px] object-cover opacity-90"
            />
            <h1 className="absolute text-4xl font-bold tracking-wide text-black drop-shadow-lg">
              LADIES
            </h1>
          </div>
        </div>
          {/* FIRST SECTION – FORM */}
      <div className="w-full flex justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white w-full max-w-5xl rounded-xl shadow-2xl p-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
            Let's not wait for the “Perfect Look”
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Book An Appointment Now!
          </p>

          {/* FORM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input className="border-b p-2 bg-transparent outline-none text-gray-800 placeholder:text-gray-500" placeholder="Name*" />
            <input className="border-b p-2 bg-transparent outline-none text-gray-800 placeholder:text-gray-500" placeholder="Gender*" />
            <input className="border-b p-2 bg-transparent outline-none text-gray-800 placeholder:text-gray-500" placeholder="Contact*" />
            <input className="border-b p-2 bg-transparent outline-none text-gray-800 placeholder:text-gray-500" placeholder="Service Type*" />
            <input className="border-b p-2 bg-transparent outline-none text-gray-800 placeholder:text-gray-500" placeholder="Email ID" />
            <input type="date" className="border-b p-2 bg-transparent outline-none text-gray-800 placeholder:text-gray-500" />
            <input className="border-b p-2 bg-transparent outline-none text-gray-800 placeholder:text-gray-500" placeholder="City*" />
            <input className="border-b p-2 bg-transparent outline-none text-gray-800 placeholder:text-gray-500" placeholder="Preferred Time*" />
          </div>

          <div className="flex justify-center mt-10">
            <button className="bg-yellow-500 text-black px-10 py-3 font-semibold rounded-md hover:bg-yellow-400 transition">
              Book Appointment
            </button>
          </div>
        </motion.div>
      </div>
      </div>
      </section>

    </section>
  );
}