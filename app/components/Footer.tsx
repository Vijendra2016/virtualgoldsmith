'use client';

import Link from 'next/link';
import Image from 'next/image';

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
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 py-24">

        {/* 3 Column Layout */}
        <div className="grid md:grid-cols-3 gap-16">

          {/* Column 1 - Goldsmith Services */}
          <div>
            <h4 className="mb-6 font-semibold text-lg">Goldsmith Services</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="#">Custom Jewelry Design</Link></li>
              <li><Link href="#">Bespoke Engagement Rings</Link></li>
              <li><Link href="#">Luxury Wedding Bands</Link></li>
              <li><Link href="#">Jewelry Restoration</Link></li>
              <li><Link href="#">Private Commission Work</Link></li>
            </ul>
          </div>

          {/* Column 2 - Craftsmanship */}
          <div>
            <h4 className="mb-6 font-semibold text-lg">Craftsmanship</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="#">Handcrafted Gold Pieces</Link></li>
              <li><Link href="#">Precious Stone Setting</Link></li>
              <li><Link href="#">CAD Jewelry Modeling</Link></li>
              <li><Link href="#">Ethical Gold Sourcing</Link></li>
              <li><Link href="#">Luxury Jewelry Consultation</Link></li>
            </ul>
          </div>

          {/* Column 3 - Connect */}
          <div>
            <h4 className="mb-6 font-semibold text-lg">Connect</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link 
                  href="https://www.linkedin.com/company/commercetasker-%E2%80%93-vited-ecommerce-experts" 
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/CommerceTasker" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </li>
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">Pinterest</Link></li>
            </ul>
          </div>

        </div>

        {/* Logo */}
        <div className="flex justify-center my-20">
          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6996f964449ca4a2351dd1ce_Virtaul_Gold_Smith__1_-removebg-preview.png"
            alt="Virtual Gold Smith Logo"
            width={1400}
            height={250}
            className="w-full max-w-5xl"
          />
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col md:flex-row justify-between gap-6 text-sm text-white/70">
          <p>©2026 Virtual Gold Smith by Todd Michael.</p>
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
