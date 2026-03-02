"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 text-center text-xl">
          Crafted digitally. Finished by hand. Made to endure.
        </div>
      </div>

      {/* Navbar */}
      <header className="w-full bg-white sticky top-0 z-50 ">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6995b58e5542fc97efa6a1b6_Virtaul%20Gold%20Smith.png"
              alt="Logo"
              width={150}
              height={60}
              priority
              className=" w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-10 text-lg font-thin text-gray-700">

            <Link href="/" className="hover:text-black">
              Home
            </Link>

            {/* Services Dropdown (Second Item) */}
            <div className="relative">
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="flex items-center gap-1 hover:text-black"
              >
                Services <ChevronDown size={16} />
              </button>

              {serviceOpen && (
                <div className="absolute top-8 left-0 bg-white border rounded-lg shadow-lg w-52 py-2">

                  <Link
                    href="/services/cad-design"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    CAD Design
                  </Link>

                  <Link
                    href="/services/3d-modeling"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    3D Modeling
                  </Link>

                  <Link
                    href="/services/jewelry-rendering"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Jewelry Rendering
                  </Link>

                </div>
              )}
            </div>

            <Link href="/about" className="hover:text-black">
              About
            </Link>

            <Link href="/portfolio" className="hover:text-black">
              Portfolio
            </Link>

            <Link href="/resume" className="hover:text-black">
              Resume
            </Link>

            <Link href="/blog" className="hover:text-black">
              Blog
            </Link>

          </nav>

          {/* CTA */}
          <Link
            href="/book-appointment"
            className="hidden md:flex items-center bg-black text-white gap-2 text-sm font-medium border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            <CalendarDays size={18} />
            Book Appointment
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden px-6 pb-6 space-y-4 text-gray-700">

            <Link href="/" className="block">
              Home
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="flex items-center gap-2"
              >
                Services <ChevronDown size={16} />
              </button>

              {serviceOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/services/cad-design" className="block">
                    CAD Design
                  </Link>

                  <Link href="/services/3d-modeling" className="block">
                    3D Modeling
                  </Link>

                  <Link href="/services/jewelry-rendering" className="block">
                    Jewelry Rendering
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="block">
              About
            </Link>

            <Link href="/portfolio" className="block">
              Portfolio
            </Link>

            <Link href="/resume" className="block">
              Resume
            </Link>

            <Link href="/blog" className="block">
              Blog
            </Link>

            <Link
              href="/book-appointment"
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg w-fit"
            >
              <CalendarDays size={18} />
              Book Appointment
            </Link>
          </div>
        )}
      </header>
    </>
  );
}