"use client";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#D1AC3A] text-black pt-16">

      {/* LOGO */}
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-[0.25em]">LOOKS</h1>
        <p className="tracking-[0.6em] text-lg mt-2 font-medium">SALON</p>

        <p className="mt-6 text-sm max-w-3xl mx-auto">
          The Exclusive Unisex Salon in your town acquainted with world-class tools and professionals 
          for stunning looks and absolute luxury.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 text-2xl mt-8">
          <FaFacebook className="cursor-pointer hover:text-white transition" />
          <FaTwitter className="cursor-pointer hover:text-white transition" />
          <FaInstagram className="cursor-pointer hover:text-white transition" />
        </div>
      </div>

      {/* MENU LINKS */}
      <div className="flex justify-center flex-wrap gap-10 mt-14 text-sm font-semibold">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About Us</a>
        <a href="/services" className="hover:underline">Services</a>
        <a href="/gallery" className="hover:underline">Collection</a>
        {/* <a href="/franchise" className="hover:underline">Franchise</a> */}
        {/* <a href="/academy" className="hover:underline">Academy</a> */}
        {/* <a href="/eshop" className="hover:underline">e-Shop</a> */}
        {/* <a href="/contact" className="hover:underline">Contact</a> */}
        <a href="/contact" className="hover:underline">Book Appointment</a>
        {/* <a href="/salon-finder" className="hover:underline">Salon Finder</a> */}
        <a href="/offers" className="hover:underline">Offers</a>
      </div>

      {/* BOTTOM BORDER */}
      <div className="w-full h-[1px] bg-black/30 mt-10"></div>

      {/* COPYRIGHT ROW */}
      <div className="flex flex-col md:flex-row bg-white justify-between items-center px-10 py-5 text-xs">

        <p>© {new Date().getFullYear()}, Looks Salon. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <button className="hover:underline">Site Map</button>
          <button className="hover:underline">Disclaimer</button>
          <button className="hover:underline">Privacy Policy</button>
        </div>

        <p className="opacity-50 hover:underline cursor-pointer">
          <a href="https://www.nitpal.site/" className="hover:underline font-bold">Designed by Nitpal Choudhury</a>
        </p>
      </div>
    </footer>
  );
}