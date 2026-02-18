'use client';

import Link from 'next/link';

export default function HeroImageSection() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/695b5c7a517bcce3c046a407_Homebannerimage.png"
        alt="eCommerce growth"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-2 flex h-full items-end">
        <div className="px-10 pb-10 max-w-4xl">
          <h1 className="text-white text-2xl md:text-3xl font-light leading-tight">
            We provide elite eCommerce developers—available for  <br />
single tasks, ongoing projects, or monthly support, delivering results that drive growth.          </h1>

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
