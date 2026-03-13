"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg",
    title: "Royal Solitaire Ring",
    category: "CAD Design",
    description: "18k yellow gold solitaire with precision-set 1.5ct round brilliant diamond.",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg",
    title: "Halo Engagement Ring",
    category: "CAD Design",
    description: "Platinum halo setting with pavé band, designed for a 2ct oval center stone.",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a6783f3ecb245ade44d99e_cadringdesign2.jpeg",
    title: "Eternity Band",
    category: "CAD Design",
    description: "Full eternity band in 18k white gold with channel-set princess cut diamonds.",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg",
    title: "Vintage Filigree Ring",
    category: "Jewelry Illustration",
    description: "Hand-illustrated vintage filigree design later translated into a production CAD file.",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58d5f081a4da94ec4e4c6_pexels-cottonbro-9430438.jpg",
    title: "Signature Pendant Necklace",
    category: "Virtual Inventory",
    description: "Photorealistic render of a bespoke pendant created for an online jewelry retailer.",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg",
    title: "Three-Stone Anniversary Ring",
    category: "CAD Design",
    description: "Three-stone ring in rose gold featuring a round brilliant flanked by pear-shaped side stones.",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a6783f3ecb245ade44d99e_cadringdesign2.jpeg",
    title: "Stackable Bands Collection",
    category: "CAD Design",
    description: "A set of five stackable bands designed to be worn together or individually.",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg",
    title: "Bezel-Set Emerald Ring",
    category: "Jewelry Illustration",
    description: "Detailed illustration and CAD for a bezel-set emerald ring in 14k yellow gold.",
  },
];

const categories = ["All", "CAD Design", "Jewelry Illustration", "Virtual Inventory"];

export default function PortfolioClient() {
  const [active, setActive] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  // Entrance animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.from(".port-hero-label", { y: 25, opacity: 0, duration: 0.8, delay: 0.3, ease: "power3.out" });
      gsap.from(".port-hero-heading", { y: 50, opacity: 0, duration: 1, delay: 0.5, ease: "power3.out" });
      gsap.from(".port-hero-cta", { y: 20, opacity: 0, duration: 0.7, delay: 0.8, stagger: 0.15, ease: "power3.out" });

      // Intro
      gsap.from(".port-intro", {
        scrollTrigger: { trigger: ".port-intro", start: "top 85%" },
        y: 30, opacity: 0, duration: 0.9, ease: "power3.out",
      });

      // Filter bar
      gsap.from(".port-filter", {
        scrollTrigger: { trigger: ".port-filter", start: "top 90%" },
        y: 20, opacity: 0, duration: 0.7, ease: "power3.out",
      });

      // Cards
      gsap.from(".port-card", {
        scrollTrigger: { trigger: ".port-grid", start: "top 80%" },
        y: 50, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
      });

      // CTA
      gsap.from(".port-cta", {
        scrollTrigger: { trigger: ".port-cta", start: "top 85%" },
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  // Animate cards when filter changes
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".port-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: "power3.out" }
    );
  }, [active]);

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a66f8ad84af3158804207a_CAD%20JEWELLERY%20SERVICES%20.jpeg"
          alt="Portfolio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex h-full items-end">
          <div className="px-10 pb-10 max-w-4xl">
            <p className="port-hero-label text-white/60 text-xs tracking-[0.4em] uppercase mb-3">
              Selected Works
            </p>
            <h1 className="port-hero-heading text-white text-3xl md:text-5xl font-light leading-tight mb-8">
              Our Portfolio
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="port-hero-cta inline-block rounded-full border border-white px-8 py-3 text-white text-sm hover:bg-white hover:text-black transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                href="https://thegoldsmithsbench.bloom.io/schedule"
                target="_blank"
                rel="noopener noreferrer"
                className="port-hero-cta inline-block rounded-full border border-white px-8 py-3 text-white text-sm hover:bg-white hover:text-black transition-colors duration-300"
              >
                Book A Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="port-intro w-full mx-auto text-center px-6">
          <p className="text-sm tracking-[0.3em] uppercase text-gray-600 mb-4">Selected Works</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8">Design Portfolio</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            A curated selection of our custom jewelry CAD designs, digital illustrations, and virtual inventory renders. Each piece represents our commitment to precision, craftsmanship, and production-ready quality.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="port-filter flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm border transition-all duration-300 cursor-pointer ${
                  active === cat
                    ? "bg-black text-white border-black"
                    : "border-gray-300 text-gray-600 hover:border-black hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="port-grid py-6 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="port-card group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs tracking-widest uppercase text-gray-400">{project.category}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-20 text-lg">No projects found in this category.</p>
          )}
        </div>
      </section>

      {/* Full width image */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <Image
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a66f8ad84af3158804207a_CAD%20JEWELLERY%20SERVICES%20.jpeg"
          alt="Virtual Goldsmith work"
          width={1200}
          height={500}
          className="rounded-2xl object-cover w-full"
        />
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="port-cta max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">Have a Project in Mind?</h2>
          <p className="text-gray-300 text-lg mb-10">
            Every piece in our portfolio started with a conversation. Let us bring your vision to life.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="rounded-full border border-white px-8 py-3 text-white text-sm hover:bg-white hover:text-black transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="https://thegoldsmithsbench.bloom.io/schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white text-black px-8 py-3 text-sm hover:bg-gray-200 transition-colors duration-300"
            >
              Book A Call
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
