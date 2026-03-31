"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Menu, X, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [desktopServiceOpen, setDesktopServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);

  const closeMenus = () => {
    setMobileOpen(false);
    setServiceOpen(false);
    setDesktopServiceOpen(false);
  };

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(announcementRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.1,
      });
      gsap.from(navRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.25,
      });
    });
    return () => ctx.revert();
  }, []);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(e.target as Node)
      ) {
        setDesktopServiceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Announcement */}
      <div ref={announcementRef} className="w-full bg-black text-white text-center text-sm py-2">
        Crafted digitally. Finished by hand. Made to endure.
      </div>

      <header
        ref={navRef}
        className={`w-full bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}
      >

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

          {/* Desktop Menu — lg and up */}
          <nav className="hidden lg:flex items-center space-x-8 text-lg text-gray-700">

            <Link href="/">Home</Link>

            {/* Services — click-based for touch compatibility */}
            <div className="relative" ref={desktopDropdownRef}>
              <button
                className="flex items-center gap-1"
                onClick={() => setDesktopServiceOpen(!desktopServiceOpen)}
              >
                Services <ChevronDown size={16} className={`transition-transform ${desktopServiceOpen ? "rotate-180" : ""}`} />
              </button>

              {desktopServiceOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-white border border-gray-200 shadow-xl w-[320px] p-3 rounded-xl">

                    <Link
                      href="/cad-design-services"
                      onClick={closeMenus}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition group/item"
                    >
                      <Image
                        src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a682564cae3d53a19072dd_menu-3d-cad-design.png"
                        alt="CAD Design"
                        width={36}
                        height={36}
                      />
                      <span className="font-medium text-gray-800 flex-1">CAD Design</span>
                      <span className="text-gray-400 group-hover/item:translate-x-1 transition">→</span>
                    </Link>

                    <Link
                      href="/jewelry-drawing-and-illistration"
                      onClick={closeMenus}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition group/item"
                    >
                      <Image
                        src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a682564cae3d53a19072dd_menu-3d-cad-design.png"
                        alt="Jewelry Drawing"
                        width={36}
                        height={36}
                      />
                      <span className="font-medium text-gray-800 flex-1">Jewelry Drawing & Illustration</span>
                      <span className="text-gray-400 group-hover/item:translate-x-1 transition">→</span>
                    </Link>

                    <Link
                      href="/virtual-inventory"
                      onClick={closeMenus}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition group/item"
                    >
                      <Image
                        src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a682564cae3d53a19072dd_menu-3d-cad-design.png"
                        alt="Virtual Inventory"
                        width={36}
                        height={36}
                      />
                      <span className="font-medium text-gray-800 flex-1">Virtual Inventory</span>
                      <span className="text-gray-400 group-hover/item:translate-x-1 transition">→</span>
                    </Link>

                    <Link
                      href="/jewelry-3d-scanning"
                      onClick={closeMenus}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition group/item"
                    >
                      <Image
                        src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a682564cae3d53a19072dd_menu-3d-cad-design.png"
                        alt="Jewellery 3D Scanning"
                        width={36}
                        height={36}
                      />
                      <span className="font-medium text-gray-800 flex-1">Jewellery 3D Scanning</span>
                      <span className="text-gray-400 group-hover/item:translate-x-1 transition">→</span>
                    </Link>

                  </div>
                </div>
              )}
            </div>

            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>

          </nav>

          {/* Desktop CTA */}
          <Link
            href="https://virtualgoldsmith.bloom.io/get-started-11"
            className="hidden lg:flex items-center bg-black text-white gap-2 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800"
          >
            <CalendarDays size={18} />
            Book Appointment
          </Link>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden text-black"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

        {/* Mobile/Tablet Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-white text-black px-6 py-6 space-y-6">

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
                <ChevronDown size={18} className={`transition-transform ${serviceOpen ? "rotate-180" : ""}`} />
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

                  <Link
                    href="/jewelry-3d-scanning"
                    onClick={closeMenus}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50"
                  >
                    <Image
                      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a682564cae3d53a19072dd_menu-3d-cad-design.png"
                      alt="Jewellery 3D Scanning"
                      width={30}
                      height={30}
                    />
                    Jewellery 3D Scanning
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

            <Link href="/blog" onClick={closeMenus} className="block text-lg">
              Blog
            </Link>

            <Link href="/contact" onClick={closeMenus} className="block text-lg">
              Contact
            </Link>

            {/* Mobile CTA */}
            <Link
              href="https://virtualgoldsmith.bloom.io/get-started-11"
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
