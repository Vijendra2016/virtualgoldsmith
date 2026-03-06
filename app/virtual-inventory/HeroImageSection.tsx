'use client';

import Link from 'next/link';

export default function VirtualInventoryHeroSection() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58d5f081a4da94ec4e4c6_pexels-cottonbro-9430438.jpg"
        alt="Virtual Inventory"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-2 flex h-full items-end">
        <div className="px-10 pb-10 max-w-4xl">
          <h1 className="text-white text-2xl md:text-3xl font-light leading-tight">
            Virtual Inventory
          </h1>

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
            className="inline-block mt-10 ml-4 rounded-full border border-white
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
