"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left - Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-2xl font-serif italic tracking-wide">
            Todd Michael
          </span>
          <span className="text-xs tracking-[0.2em] uppercase text-gray-500">
            The Goldsmiths Bench
          </span>
        </Link>

        {/* Center - Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <Link href="/shop" className="hover:text-black transition">
            Shop
          </Link>
          <Link href="/client-portal" className="hover:text-black transition">
            Client Portal
          </Link>
          <Link href="/3d-scanning" className="hover:text-black transition">
            3D Scanning
          </Link>
          <Link href="/blog" className="hover:text-black transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-black transition">
            Contact Us
          </Link>
        </nav>

        {/* Right - Appointment Button */}
        <Link
          href="/book-appointment"
          className="hidden md:flex items-center gap-2 text-sm font-medium border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <CalendarDays size={18} />
          Book an Appointment
        </Link>
      </div>
    </header>
  );
}
