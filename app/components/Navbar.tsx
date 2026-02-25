"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  // Sticky scroll shadow
  useEffect(() => {
    const handler = () => setScroll(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const menu = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "SERVICES", link: "/services" },
    // { name: "E-SHOP", link: "/shop" },
    // { name: "FRANCHISE", link: "/franchise" },
    // { name: "ACADEMY", link: "/academy" },
    { name: "CONTACT", link: "/contact" },
    { name: "OFFERS", link: "/offers" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all
          ${scroll ? "bg-black shadow-lg" : "bg-black"}
        `}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT — LOGO */}
          <div className="flex flex-col leading-none tracking-widest">
            <span className="text-4xl font-bold text-white">YOUR</span>
            <span className="text-sm text-gray-300 tracking-[0.5em] mt-0">SALON</span>
          </div>

          {/* CENTER — MENU */}
          <div className="hidden lg:flex gap-8 text-white font-semibold text-sm tracking-wide">
            {menu.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className={`transition-all ${
                  pathname === item.link ? "text-yellow-400" : "hover:text-yellow-500"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* RIGHT — BUTTONS / SOCIAL */}
          <div className="hidden lg:flex items-center gap-6 text-white">

            {/* Book Button */}
            <a
              href="/contact"
              className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded-sm 
              text-sm font-semibold hover:bg-yellow-500 hover:text-black transition-all"
            >
              Book Appointment
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-lg">
              <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
              <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
              <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setOpen(true)}
          >
            <HiMenu />
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed top-0 right-0 w-72 h-full bg-black/95 z-[999] p-6">
          <button className="absolute top-5 right-5 text-white text-3xl" onClick={() => setOpen(false)}>
            <HiX />
          </button>

          <div className="mt-20 flex flex-col gap-5 text-white text-lg font-medium">
            {menu.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setOpen(false)}
                className="hover:text-yellow-500"
              >
                {item.name}
              </a>
            ))}

            <hr className="border-gray-700 my-4" />

            <a
              href="/contact"
              className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded-sm text-center"
            >
              Book Appointment
            </a>

            <div className="flex gap-4 pt-4 text-xl">
              <FaFacebookF className="hover:text-yellow-500" />
              <FaTwitter className="hover:text-yellow-500" />
              <FaInstagram className="hover:text-yellow-500" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}