"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f20d54a8b0267093e59eab_43D02708-DA74-4EA3-9434-2FEB7464B9B4.PNG",
    title: "Royal Solitaire Ring",
    category: "CAD Design",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa033d4c648a1ba1d1c8_CD434081-7251-4C7B-A397-DDF2A7B41FEB.PNG",
    title: "Halo Engagement Ring",
    category: "CAD Design",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0a9fe3f283ca679c90f98_EA7AD74B-4565-491B-8209-6B27ADE4D4A5.PNG",
    title: "Eternity Band",
    category: "CAD Design",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa188662cdba71b6f5c5_1A94ADC7-CE0A-4C4C-8E9A-7DF6B163C747.PNG",
    title: "Illustration 1",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa132dbd216ab3ca19c1_1DDD5D40-0646-4DA3-8054-F6AFE2E2DAC7.PNG",
    title: "Illustration 2",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f210333128dac7df4ee6e8_3B564C6E-3E01-42B3-851D-9EFBDBDC51EE.PNG",
    title: "Illustration 3",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa0d462103439d512560_09FE961B-39EA-40B9-AC80-A183CE4825C9.PNG",
    title: "Illustration 4",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa189f6faa770eb90285_17EC36FB-69B7-4DE0-9053-39ACD9B100D3.PNG",
    title: "Illustration 5",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa18771d529d98885051_737CD516-FDD1-42DE-B3F9-0C6751727EA6.PNG",
    title: "Illustration 6",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f210bb2f3ebbba0260ad49_3588BB56-B24B-41D0-8FBC-0E49BF9338AC.PNG",
    title: "Illustration 7",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0a9fcbaa1909facb3a68a_6566DAAF-C680-4C4D-8849-77D8E56474D6.PNG",
    title: "Illustration 8",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa5360680152fd65a835_666192DE-133C-4BC6-9C03-14818C09C74B.PNG",
    title: "Illustration 9",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa05e581ca467e31d76a_A54DD35F-98AF-4B2F-B9B1-14B01AA4954D.PNG",
    title: "Illustration 10",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa51251b3e8c6c66667f_B1BCCA44-B090-412D-A348-07FAC2977A9E.PNG",
    title: "Illustration 11",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0a9feb339bcae423eb646_CBFE7522-EF78-481E-A54C-06DA1C9F523D.PNG",
    title: "Illustration 12",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa04982da11255743959_D49D86A4-33D7-46DA-B35C-A384A191D712.PNG",
    title: "Illustration 13",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f21240a8b0267093e782e3_IMG_2945.JPG",
    title: "Illustration 14",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f212664a36ed418caf8bed_IMG_2946%20(1).JPG",
    title: "Illustration 15",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f2129b600c707b5cc837ab_IMG_2948%20(1).JPG",
    title: "Illustration 16",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f212c21db6ec75bb4cc0e2_IMG_2950.JPG",
    title: "Illustration 17",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f212ea31f512ef624762c1_IMG_2951%20(1).JPG",
    title: "Illustration 18",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f21311bf3611fc4a32243f_IMG_2952.JPG",
    title: "Illustration 19",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f2133041ca1b34e5bd7247_IMG_2953.JPG",
    title: "Illustration 20",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f21352875b720df142722b_IMG_2954.JPG",
    title: "Illustration 21",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f2137776b6014772ae2ec0_IMG_2957%20(1).JPG",
    title: "Illustration 22",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f21396c11dcc9f2a72096d_IMG_2959.JPG",
    title: "Illustration 23",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f213d60219edc1c4b76bc5_IMG_2960.JPG",
    title: "Illustration 24",
    category: "Jewelry Illustration",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f2156ac8e5be80f14f3266_1acdef51-38e2-408d-b457-900d086ba7d2.JPG",
    title: "Scan 1",
    category: "Jewellery Scans",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f21598410f457853e9a54f_3a04d5e7-0cc8-422d-ae0b-ce7dce6b1365.JPG",
    title: "Scan 2",
    category: "Jewellery Scans",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f215bf66da740919249fd2_5820AF72-47F3-4017-85D1-ABDE47F1002C.JPG",
    title: "Scan 3",
    category: "Jewellery Scans",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f215e68b4bce1864a37ca5_att.QrjkZwEoQUJUtGaNO-jRHmSfRZGnT_B8nuM-2BEAbF8.JPG",
    title: "Scan 4",
    category: "Jewellery Scans",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f216a6c27a33db321df244_IMG_2088.JPG",
    title: "Scan 5",
    category: "Jewellery Scans",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f216cfe1433ca04609b362_IMG_2223.JPG",
    title: "Scan 6",
    category: "Jewellery Scans",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f21712d1b06b563a791807_IMG_2375.JPG",
    title: "Scan 7",
    category: "Jewellery Scans",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f2173eeab70a16dc917672_IMG_2955.JPG",
    title: "Scan 8",
    category: "Jewellery Scans",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f2175c8626cda95d97c5fb_IMG_2956.JPG",
    title: "Scan 9",
    category: "Jewellery Scans",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f21783774101f2463cb308_IMG_5321.JPG",
    title: "Scan 10",
    category: "Jewellery Scans",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f217ba11c6e2ff620e8abf_IMG_5325.JPG",
    title: "Scan 11",
    category: "Jewellery Scans",
  },
  {
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58d5f081a4da94ec4e4c6_pexels-cottonbro-9430438.jpg",
    title: "Signature Pendant Necklace",
    category: "Virtual Inventory",
  },
];

const categories = ["All", "CAD Design", "Jewelry Illustration", "Jewellery Scans", "Virtual Inventory"];

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
                href="https://virtualgoldsmith.bloom.io/get-started-11"
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
                className="port-card group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
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
              href="https://virtualgoldsmith.bloom.io/get-started-11"
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
