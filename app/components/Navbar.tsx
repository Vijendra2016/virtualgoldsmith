"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full  bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        


        <Link href="/" className="px-4 py-1" >
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6995b58e5542fc97efa6a1b6_Virtaul%20Gold%20Smith.png"
              alt="ShopifyTasker Logo"
              width={200}
              height={50}
              className="h-auto"
              priority
            />
          </Link>
          

        {/* Center - Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <Link href="/shop" className="hover:text-black transition">
            About
          </Link>
          <Link href="/client-portal" className="hover:text-black transition">
            Portfolio
          </Link>
          <Link href="/3d-scanning" className="hover:text-black transition">
            Resume
          </Link>
          <Link href="/blog" className="hover:text-black transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-black transition">
          Services
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
