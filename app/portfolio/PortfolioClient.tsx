"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { VirtualInventoryProduct } from "@/app/virtual-inventory/products";

gsap.registerPlugin(ScrollTrigger);

const staticProjects = [
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f20d54a8b0267093e59eab_43D02708-DA74-4EA3-9434-2FEB7464B9B4.PNG", category: "CAD Design" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa033d4c648a1ba1d1c8_CD434081-7251-4C7B-A397-DDF2A7B41FEB.PNG", category: "CAD Design" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0a9fe3f283ca679c90f98_EA7AD74B-4565-491B-8209-6B27ADE4D4A5.PNG", category: "CAD Design" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa188662cdba71b6f5c5_1A94ADC7-CE0A-4C4C-8E9A-7DF6B163C747.PNG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa132dbd216ab3ca19c1_1DDD5D40-0646-4DA3-8054-F6AFE2E2DAC7.PNG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f210333128dac7df4ee6e8_3B564C6E-3E01-42B3-851D-9EFBDBDC51EE.PNG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa0d462103439d512560_09FE961B-39EA-40B9-AC80-A183CE4825C9.PNG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa189f6faa770eb90285_17EC36FB-69B7-4DE0-9053-39ACD9B100D3.PNG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa18771d529d98885051_737CD516-FDD1-42DE-B3F9-0C6751727EA6.PNG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f210bb2f3ebbba0260ad49_3588BB56-B24B-41D0-8FBC-0E49BF9338AC.PNG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0a9fcbaa1909facb3a68a_6566DAAF-C680-4C4D-8849-77D8E56474D6.PNG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa5360680152fd65a835_666192DE-133C-4BC6-9C03-14818C09C74B.PNG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa05e581ca467e31d76a_A54DD35F-98AF-4B2F-B9B1-14B01AA4954D.PNG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa51251b3e8c6c66667f_B1BCCA44-B090-412D-A348-07FAC2977A9E.PNG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0a9feb339bcae423eb646_CBFE7522-EF78-481E-A54C-06DA1C9F523D.PNG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f0aa04982da11255743959_D49D86A4-33D7-46DA-B35C-A384A191D712.PNG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f21240a8b0267093e782e3_IMG_2945.JPG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f212664a36ed418caf8bed_IMG_2946%20(1).JPG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f2129b600c707b5cc837ab_IMG_2948%20(1).JPG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f212c21db6ec75bb4cc0e2_IMG_2950.JPG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f212ea31f512ef624762c1_IMG_2951%20(1).JPG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f21311bf3611fc4a32243f_IMG_2952.JPG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f2133041ca1b34e5bd7247_IMG_2953.JPG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f21352875b720df142722b_IMG_2954.JPG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f2137776b6014772ae2ec0_IMG_2957%20(1).JPG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f21396c11dcc9f2a72096d_IMG_2959.JPG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f213d60219edc1c4b76bc5_IMG_2960.JPG", category: "Jewelry Illustration" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f2156ac8e5be80f14f3266_1acdef51-38e2-408d-b457-900d086ba7d2.JPG", category: "Jewellery Scans" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f21598410f457853e9a54f_3a04d5e7-0cc8-422d-ae0b-ce7dce6b1365.JPG", category: "Jewellery Scans" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f215bf66da740919249fd2_5820AF72-47F3-4017-85D1-ABDE47F1002C.JPG", category: "Jewellery Scans" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f215e68b4bce1864a37ca5_att.QrjkZwEoQUJUtGaNO-jRHmSfRZGnT_B8nuM-2BEAbF8.JPG", category: "Jewellery Scans" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f216a6c27a33db321df244_IMG_2088.JPG", category: "Jewellery Scans" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f216cfe1433ca04609b362_IMG_2223.JPG", category: "Jewellery Scans" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f21712d1b06b563a791807_IMG_2375.JPG", category: "Jewellery Scans" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f2173eeab70a16dc917672_IMG_2955.JPG", category: "Jewellery Scans" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f2175c8626cda95d97c5fb_IMG_2956.JPG", category: "Jewellery Scans" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f21783774101f2463cb308_IMG_5321.JPG", category: "Jewellery Scans" },
  { image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69f217ba11c6e2ff620e8abf_IMG_5325.JPG", category: "Jewellery Scans" },
];

const categories = ["All", "CAD Design", "Jewelry Illustration", "Jewellery Scans", "Virtual Inventory"];

export default function PortfolioClient({ virtualInventoryProducts }: { virtualInventoryProducts: VirtualInventoryProduct[] }) {
  const projects = [
    ...staticProjects,
    ...virtualInventoryProducts.map((p) => ({
      image: p.mainImage,
      category: "Virtual Inventory" as const,
      virtualInventoryId: p.id,
      title: p.title,
    })),
  ];

  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const router = useRouter();

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const openLightbox = (index: number) => {
    const project = filtered[index];
    if ("virtualInventoryId" in project && project.virtualInventoryId) {
      router.push(`/portfolio/virtual-inventory/${project.virtualInventoryId}`);
      return;
    }
    setLightboxIndex(index);
  };
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  // Entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".port-hero-label", { y: 25, opacity: 0, duration: 0.8, delay: 0.3, ease: "power3.out" });
      gsap.from(".port-hero-heading", { y: 50, opacity: 0, duration: 1, delay: 0.5, ease: "power3.out" });
      gsap.from(".port-hero-cta", { y: 20, opacity: 0, duration: 0.7, delay: 0.8, stagger: 0.15, ease: "power3.out" });
      gsap.from(".port-intro", {
        scrollTrigger: { trigger: ".port-intro", start: "top 85%" },
        y: 30, opacity: 0, duration: 0.9, ease: "power3.out",
      });
      gsap.from(".port-filter", {
        scrollTrigger: { trigger: ".port-filter", start: "top 90%" },
        y: 20, opacity: 0, duration: 0.7, ease: "power3.out",
      });
      gsap.from(".port-cta", {
        scrollTrigger: { trigger: ".port-cta", start: "top 85%" },
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

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
          <p className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">Selected Works</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8">Design Portfolio</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A curated selection of our custom jewelry CAD designs, digital illustrations, and virtual inventory renders. Each piece represents our commitment to precision, craftsmanship, and production-ready quality.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-10">
        <div className="port-filter flex flex-wrap gap-3 justify-center px-6">
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
      </section>

      {/* Masonry Grid */}
      <section className="px-4 md:px-8 pb-24 max-w-[1600px] mx-auto">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {filtered.map((project, i) => {
            const isVI = "virtualInventoryId" in project && project.virtualInventoryId;
            return (
              <div
                key={project.image + i}
                className="break-inside-avoid mb-4 overflow-hidden rounded-xl cursor-pointer group relative"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={project.image}
                  alt={project.category}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl" />
                {!!isVI && (
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/90 text-black text-xs px-3 py-1 rounded-full font-medium">
                      View Details →
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-20 text-lg">No projects found in this category.</p>
        )}
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition z-10 p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={40} />
          </button>

          <div
            className="max-w-5xl max-h-[90vh] w-full px-16 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].image}
              alt={filtered[lightboxIndex].category}
              className="max-h-[85vh] max-w-full object-contain rounded-lg"
            />
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition z-10 p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={40} />
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightboxIndex + 1} / {filtered.length}
          </p>
        </div>
      )}

    </div>
  );
}
