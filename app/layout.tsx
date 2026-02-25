import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar"; // 👈 IMPORTANT: Navbar imported globally
import Footer from "./components/Footer"; // 👈 IMPORTANT: Footer imported globally
import { Poppins, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Luxury Salon – Premium Grooming & Styling",
  description:
    "Experience premium grooming, haircuts, beard styling & spa treatments at Luxury Salon.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} ${playfair.variable} bg-black text-white overflow-x-hidden scroll-smooth antialiased`}>
        {/* 🔥 Navbar Will Now Show on EVERY Page */}
        <Navbar />

        {/* Spacing so content doesn’t overlap navbar */}
        <div className="pt-20 min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}