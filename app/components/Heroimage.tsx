'use client';

import Link from 'next/link';

export default function HeroImageSection() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6995b8ca5cf0844656374fb5_Headingimage.png"
        alt="eCommerce growth"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-2 flex h-full items-end">
        <div className="px-10 pb-10 max-w-4xl">
          <h1 className="text-white text-2xl md:text-3xl font-light leading-tight">
            Virtual goldsmith services — available for bespoke commissions, precision redesign, or ongoing private advisory.
  <br />
Crafted digitally. Finished by hand. Made to endure.         </h1>

          <Link
            href="/contact"
            className="inline-block mt-10 rounded-full border border-white 
                       px-8 py-3 text-white text-sm 
                       hover:bg-white hover:text-black 
                       transition-colors duration-300"
          >
            Contact
          </Link>

          <Link
            href="https://calendly.com/commercetasker/discovery-call"
            className="inline-block mt-10 rounded-full border border-white 
                       px-8 py-3 text-white text-sm 
                       hover:bg-white hover:text-black 
                       transition-colors duration-300"
          >
            Book A Call 
          </Link>
        </div>
      </div>
    </section>
  );
}
