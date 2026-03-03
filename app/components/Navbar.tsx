"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [serviceOpen, setServiceOpen] = useState<boolean>(false);

  const closeMenus = () => {
    setMobileOpen(false);
    setServiceOpen(false);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 text-center text-xl">
          Crafted digitally. Finished by hand. Made to endure.
        </div>
      </div>

      {/* Navbar */}
      <header className="w-full bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenus}>
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6995b58e5542fc97efa6a1b6_Virtaul%20Gold%20Smith.png"
              alt="Logo"
              width={150}
              height={60}
              priority
              className="w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-10 text-lg font-thin text-gray-700">

            <Link href="/" onClick={closeMenus}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button className="flex items-center gap-1">
                Services <ChevronDown size={16} />
              </button>

              {serviceOpen && (
                <div className="absolute top-8 left-0 bg-white border rounded-lg shadow-lg w-52 py-2">

                  <Link
                    href="/cad-design-services"
                    onClick={closeMenus}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    CAD Design
                  </Link>

                  <Link
                    href="/services/3d-modeling"
                    onClick={closeMenus}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    3D Modeling
                  </Link>

                  <Link
                    href="/services/jewelry-rendering"
                    onClick={closeMenus}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Jewelry Rendering
                  </Link>

                </div>
              )}
            </div>

            <Link href="/about" onClick={closeMenus}>
              About
            </Link>

            <Link href="/portfolio" onClick={closeMenus}>
              Portfolio
            </Link>

            <Link href="/resume" onClick={closeMenus}>
              Resume
            </Link>

            <Link href="/blog" onClick={closeMenus}>
              Blog
            </Link>

          </nav>

          {/* CTA */}
          <Link
            href="/book-appointment"
            onClick={closeMenus}
            className="hidden md:flex items-center bg-black text-white gap-2 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800"
          
          
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

            <Link href="/" onClick={closeMenus}>
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

                  <Link href="/cad-design-services" onClick={closeMenus}>
                    CAD Design
                  </Link>

                  <Link href="/services/3d-modeling" onClick={closeMenus}>
                    3D Modeling
                  </Link>

                  <Link href="/services/jewelry-rendering" onClick={closeMenus}>
                    Jewelry Rendering
                  </Link>

                </div>
              )}
            </div>

            <Link href="/about" onClick={closeMenus}>
              About
            </Link>

            <Link href="/portfolio" onClick={closeMenus}>
              Portfolio
            </Link>

            <Link href="/resume" onClick={closeMenus}>
              Resume
            </Link>

            <Link href="/blog" onClick={closeMenus}>
              Blog
            </Link>

            <Link
              href="/book-appointment"
              onClick={closeMenus}
                         className="hidden md:flex items-center bg-black text-white gap-2 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800"

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