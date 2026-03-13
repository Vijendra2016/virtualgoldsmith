'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, CalendarDays } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6996f6c089797d2f7bf76c3d_footerforvirtualgoldsmith.png"
          alt="Footer background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">

        {/* Top — 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6995b58e5542fc97efa6a1b6_Virtaul%20Gold%20Smith.png"
              alt="Virtual Goldsmith"
              width={160}
              height={55}
              className="mb-5 brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Professional CAD design, jewelry illustration, and virtual inventory services — built for independent jewelers, designers, and gemstone cutters.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:todd@virtualgoldsmith.com"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail size={15} />
                todd@virtualgoldsmith.com
              </a>
              <Link
                href="https://thegoldsmithsbench.bloom.io/schedule"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <CalendarDays size={15} />
                Book an Appointment
              </Link>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-[0.15em] uppercase mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/cad-design-services" className="hover:text-white transition-colors">
                  CAD Design Services
                </Link>
              </li>
              <li>
                <Link href="/jewelry-drawing-and-illistration" className="hover:text-white transition-colors">
                  Jewelry Drawing & Illustration
                </Link>
              </li>
              <li>
                <Link href="/virtual-inventory" className="hover:text-white transition-colors">
                  Virtual Inventory
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="https://thegoldsmithsbench.bloom.io/schedule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-[0.15em] uppercase mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Todd Michael
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 — Latest Articles */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-[0.15em] uppercase mb-6">From the Blog</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <Link href="/blog/why-jewelry-cad-design-starts-with-the-bench" className="hover:text-white transition-colors leading-snug block">
                  Why Jewelry CAD Design Starts With the Bench
                </Link>
              </li>
              <li>
                <Link href="/blog/counter-sketching-lost-art-jewelry-sales" className="hover:text-white transition-colors leading-snug block">
                  Counter Sketching: The Lost Art That Closes Orders
                </Link>
              </li>
              <li>
                <Link href="/blog/virtual-inventory-vs-jewelry-photography" className="hover:text-white transition-colors leading-snug block">
                  Virtual Inventory vs. Traditional Photography
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Large wordmark */}
        <div className="flex justify-center py-14">
          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6996f964449ca4a2351dd1ce_Virtaul_Gold_Smith__1_-removebg-preview.png"
            alt="Virtual Goldsmith"
            width={1400}
            height={250}
            className="w-full max-w-4xl opacity-20"
          />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10 text-xs text-white/40">
          <p>© 2026 Virtual Goldsmith by Todd Michael. All rights reserved.</p>
          <p className="italic text-white/30">Crafted digitally. Finished by hand. Made to endure.</p>
        </div>

      </div>
    </footer>
  );
}
