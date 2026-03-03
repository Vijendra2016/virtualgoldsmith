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
      {/* Announcement */}
      <div className="w-full bg-black text-white text-center text-sm py-2">
        Crafted digitally. Finished by hand. Made to endure. 
      </div>

      <header className="w-full bg-white sticky top-0 z-50 ">

        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" onClick={closeMenus}>
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6995b58e5542fc97efa6a1b6_Virtaul%20Gold%20Smith.png"
              alt="Logo"
              width={150}
              height={60}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 text-lg text-gray-700">

            <Link href="/">Home</Link>

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
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    CAD Design
                  </Link>

                </div>
              )}
            </div>

            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/blog">Blog</Link>

          </nav>

          {/* Desktop CTA */}
          <Link
            href="/book-appointment"
            className="hidden md:flex items-center bg-black text-white gap-2 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800"
          >
            <CalendarDays size={18} />
            Book Appointment
          </Link>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-white  text-black px-6 py-6 space-y-5 text-lg">

            <Link href="/" onClick={closeMenus} className="block">
              Home
            </Link>

            {/* Services */}
            <div>
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="flex items-center justify-between w-full"
              >
                Services
                <ChevronDown size={18} />
              </button>

              {serviceOpen && (
                <div className="mt-3 ml-3 space-y-3 text-gray-600">

                  <Link
                    href="/cad-design-services"
                    onClick={closeMenus}
                    className="block"
                  >
                    CAD Design
                  </Link>

                </div>
              )}
            </div>

            <Link href="/about" onClick={closeMenus} className="block">
              About
            </Link>

            <Link href="/portfolio" onClick={closeMenus} className="block">
              Portfolio
            </Link>

            <Link href="/resume" onClick={closeMenus} className="block">
              Resume
            </Link>

            <Link href="/blog" onClick={closeMenus} className="block">
              Blog
            </Link>

            {/* Mobile CTA */}
            <Link
              href="/book-appointment"
              onClick={closeMenus}
              className="flex items-center justify-center bg-black text-white gap-2 text-sm font-medium px-4 py-3 rounded-full mt-4"
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