'use client';

import Image from 'next/image';
import Link from 'next/link';

type Card = {
  image: string;
  title: string;
  description: string;
  href: string;
};

interface ShowcaseSectionProps {
  cards: Card[];
}

export default function ShowcaseSection({ cards }: ShowcaseSectionProps) {
  return (
    <section className="w-full  py-10">
      <div className="w-full mx-auto px-6 grid md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="group">
            
            {/* Image */}
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-black">
                {card.title}
              </h3>

              <p className="text-gray-700 text-base leading-relaxed max-w-xl">
                {card.description}
              </p>

              <Link
                href={card.href}
                className="inline-flex items-center gap-2 font-medium text-black group-hover:gap-3 transition-all duration-300"
              >
                Explore
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
