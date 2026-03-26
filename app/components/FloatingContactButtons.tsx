'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Video } from 'lucide-react';

export default function FloatingContactButtons() {
  const [openItem, setOpenItem] = useState<'call' | 'location' | null>(null);

  const toggle = (item: 'call' | 'location') => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
<div className="fixed right-1 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1 pointer-events-auto">

      {/* CALL */}
      <div
        className={`flex items-center justify-end rounded-full bg-black shadow-lg cursor-pointer overflow-hidden transition-all duration-300
        ${openItem === 'call' ? 'w-full' : 'w-10 ml-auto'}`}
        onClick={() => toggle('call')}
      >
        <div className="w-10 h-10 flex items-center justify-center shrink-0">
          <Phone className="text-white  w-5 h-5" />
        </div>

        {openItem === 'call' && (
         <Link
  href="tel:+12487709617"
  className="text-white font-light pr-5 whitespace-nowrap"
>
  Connect Over Phone
</Link>
        )}
      </div>

      {/* LOCATION */}
      <div
        className={`flex items-center justify-end rounded-full bg-black shadow-lg cursor-pointer overflow-hidden transition-all duration-300
        ${openItem === 'location' ? 'w-full' : 'w-10 ml-auto'}`}
        onClick={() => toggle('location')}
      >
        <div className="w-10 h-10 flex items-center justify-center shrink-0">
          < Video  className="text-white w-5 h-5" />
        </div>

        {openItem === 'location' && (
          <Link
            href="https://virtualgoldsmith.bloom.io/get-started-11"
            target="_blank"
            className="text-white font-light pr-5 whitespace-nowrap"
          >
                       Book Appointment

          </Link>
        )}
        
      </div>
    </div>
  );
}
