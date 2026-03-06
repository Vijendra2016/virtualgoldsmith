"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

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

      <header className="w-full bg-white sticky top-0 z-50">

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

            {/* Services */}
            <div className="relative group">

              <button className="flex items-center gap-1">
                Services <ChevronDown size={16} />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">

                <div className="bg-white border border-gray-200 shadow-xl w-[320px] p-3 rounded-xl">

                  <Link
                    href="/cad-design-services"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition group/item"
                  >
                    <Image
                      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a682564cae3d53a19072dd_menu-3d-cad-design.png"
                      alt="CAD Design"
                      width={36}
                      height={36}
                    />

                    <span className="font-medium text-gray-800 flex-1">
                      CAD Design
                    </span>

                    <span className="text-gray-400 group-hover/item:translate-x-1 transition">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/jewelry-drawing-and-illistration"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition group/item"
                  >
                    <Image
                      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a682564cae3d53a19072dd_menu-3d-cad-design.png"
                      alt="Jewelry Drawing"
                      width={36}
                      height={36}
                    />

                    <span className="font-medium text-gray-800 flex-1">
                      Jewelry Drawing & Illustration
                    </span>

                    <span className="text-gray-400 group-hover/item:translate-x-1 transition">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/virtual-inventory"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition group/item"
                  >
                    <Image
                      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a682564cae3d53a19072dd_menu-3d-cad-design.png"
                      alt="Virtual Inventory"
                      width={36}
                      height={36}
                    />

                    <span className="font-medium text-gray-800 flex-1">
                      Virtual Inventory
                    </span>

                    <span className="text-gray-400 group-hover/item:translate-x-1 transition">
                      →
                    </span>
                  </Link>

                </div>

              </div>

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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-white text-black px-6 py-6 space-y-6">

            <Link href="/" onClick={closeMenus} className="block text-lg">
              Home
            </Link>

            {/* Mobile Services */}
            <div>

              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="flex items-center justify-between w-full text-lg"
              >
                Services
                <ChevronDown size={18} />
              </button>

              {serviceOpen && (
                <div className="mt-4 space-y-3">

                  <Link
                    href="/cad-design-services"
                    onClick={closeMenus}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50"
                  >
                    <Image
                      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a682564cae3d53a19072dd_menu-3d-cad-design.png"
                      alt="CAD Design"
                      width={30}
                      height={30}
                    />
                    CAD Design
                  </Link>

                  <Link
                    href="/jewelry-drawing-and-illistration"
                    onClick={closeMenus}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50"
                  >
                    <Image
                      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a682564cae3d53a19072dd_menu-3d-cad-design.png"
                      alt="Jewelry Drawing"
                      width={30}
                      height={30}
                    />
                    Jewelry Drawing & Illustration
                  </Link>

                  <Link
                    href="/virtual-inventory"
                    onClick={closeMenus}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50"
                  >
                    <Image
                      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a682564cae3d53a19072dd_menu-3d-cad-design.png"
                      alt="Virtual Inventory"
                      width={30}
                      height={30}
                    />
                    Virtual Inventory
                  </Link>

                </div>
              )}

            </div>

            <Link href="/about" onClick={closeMenus} className="block text-lg">
              About
            </Link>

            <Link href="/portfolio" onClick={closeMenus} className="block text-lg">
              Portfolio
            </Link>

            <Link href="/resume" onClick={closeMenus} className="block text-lg">
              Resume
            </Link>

            <Link href="/blog" onClick={closeMenus} className="block text-lg">
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