import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, CheckCircle, ArrowRight } from "lucide-react";
import ServiceAnimations from "../components/ServiceAnimations";

export const metadata: Metadata = {
  title: "Virtual Jewelry Inventory | Digital Jewelry Catalog & 3D Renders | Virtual Goldsmith",
  description:
    "Transform your physical jewelry collection into a professional digital catalog. Photorealistic 3D renders, accurate CAD models, and e-commerce-ready images — no photo shoot required. Serving independent jewelers, retail brands, and online jewelry stores.",
  keywords: [
    "virtual jewelry inventory",
    "digital jewelry catalog",
    "jewelry 3D renders",
    "photorealistic jewelry renders",
    "jewelry product photography alternative",
    "jewelry e-commerce images",
    "jewelry online catalog",
    "jewelry CGI",
    "jewelry visualization service",
    "jewelry digital catalog service",
    "3D jewelry rendering",
    "jewelry render service",
    "Virtual Goldsmith",
    "Todd Michael jeweler",
  ],
};

const BOOKING_URL = "https://thegoldsmithsbench.bloom.io/schedule";
const HERO_IMAGE =
  "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58d5f081a4da94ec4e4c6_pexels-cottonbro-9430438.jpg";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to send my physical jewelry for virtual inventory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. If you have existing CAD files or high-quality reference photos, we can work from those. For the most dimensionally accurate result, physical pieces or existing production CAD files are ideal. We will advise on what we need after reviewing your collection.",
      },
    },
    {
      "@type": "Question",
      name: "What image resolutions do you deliver for virtual jewelry inventory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We deliver high-resolution renders typically at 3000×3000px or larger, suitable for print, large-format display, and high-DPI screens. Web-optimised versions (compressed for fast loading) are included as standard. Custom resolutions and aspect ratios are available on request.",
      },
    },
    {
      "@type": "Question",
      name: "Can you show the same jewelry design in multiple metal colors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and this is one of the biggest advantages of virtual inventory over traditional photography. Once the 3D model is complete, rendering the same piece in yellow gold, white gold, rose gold, platinum, or any other material is fast and cost-effective. No additional physical samples are needed.",
      },
    },
    {
      "@type": "Question",
      name: "How long does virtual jewelry inventory take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Individual pieces are typically rendered within 2 to 4 business days from when the 3D model is approved. Full collections are scoped and quoted per project based on the number of pieces, complexity, and number of colorway variations required.",
      },
    },
    {
      "@type": "Question",
      name: "Is virtual jewelry inventory cheaper than a traditional photo shoot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most cases, yes — particularly for collections with multiple designs, colorways, or stone options. Virtual inventory eliminates studio rental, photographer fees, styling costs, and the logistical complexity of handling physical inventory for photography. Once a model is built, producing additional renders is highly efficient.",
      },
    },
  ],
};

const features = [
  {
    title: "Photorealistic 3D Renders",
    description:
      "Studio-quality images of every piece in your collection, rendered from multiple angles with accurate metal finishes, gemstone colors, and reflective surface detail — indistinguishable from professional photography.",
  },
  {
    title: "Full Collection Digitization",
    description:
      "We digitize your entire jewelry inventory into production-accurate 3D models, piece by piece. Whether you have 10 designs or 1,000, every piece is captured with consistent quality and precision.",
  },
  {
    title: "E-Commerce Ready Deliverables",
    description:
      "Web-optimised images sized and formatted for Shopify, WooCommerce, BigCommerce, Etsy, and all major platforms. High-DPI retina versions included. Product-page ready from day one.",
  },
  {
    title: "Multiple Colorways Without Re-Shooting",
    description:
      "Show the same design in yellow gold, white gold, rose gold, platinum, or any metal and stone combination — all from a single 3D model. Colorway variations at a fraction of traditional photography cost.",
  },
  {
    title: "Consistent, Cohesive Presentation",
    description:
      "Every piece in your catalog rendered with the same lighting setup, background, and style guide — delivering a polished, professional look that reinforces your brand across all sales channels.",
  },
  {
    title: "Scales With Your Business",
    description:
      "Virtual inventory grows with your collection. New designs are added efficiently using the same model pipeline. No re-booking photographers, no shipping insurance, no logistics headaches.",
  },
];

const steps = [
  {
    number: "01",
    title: "Submit Your Collection",
    description:
      "Send physical pieces, existing CAD files, or reference photographs of each item. Include metal types, stone details, and any specific finish requirements for each design.",
  },
  {
    number: "02",
    title: "3D Modeling",
    description:
      "We build precise 3D models of every piece — or refine your existing CAD files — with accurate proportions, stone seats, metal thickness, and surface detail.",
  },
  {
    number: "03",
    title: "Rendering & Styling",
    description:
      "Photorealistic renders are produced in your chosen colorways, angles, and lighting style. You review and approve before final delivery.",
  },
  {
    number: "04",
    title: "Delivery & Integration",
    description:
      "High-resolution and web-optimised files delivered, ready to upload to your e-commerce store, catalog, social media, or marketing materials.",
  },
];

const galleryImages = [
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a66f8ad84af3158804207a_CAD%20JEWELLERY%20SERVICES%20.jpeg",
    alt: "Virtual jewelry inventory - photorealistic ring renders by Virtual Goldsmith",
    className: "md:col-span-2 h-80",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg",
    alt: "3D jewelry render - halo engagement ring digital catalog image",
    className: "h-80",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a6783f3ecb245ade44d99e_cadringdesign2.jpeg",
    alt: "Photorealistic jewelry 3D render - eternity band e-commerce product image",
    className: "h-64",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg",
    alt: "Virtual jewelry inventory render - yellow gold ring digital product photo",
    className: "h-64",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58d5f081a4da94ec4e4c6_pexels-cottonbro-9430438.jpg",
    alt: "Jewelry digital catalog creation process - Virtual Goldsmith",
    className: "md:col-span-2 h-64",
  },
];

const audiences = [
  {
    title: "Independent Jewelers",
    description:
      "Build a professional online presence without the cost and complexity of traditional product photography. Present your full collection online with consistent, high-quality imagery.",
  },
  {
    title: "Jewelry Retail Brands",
    description:
      "Scale your digital catalog efficiently as your collection grows. Present every design in every colorway without multiplying your photography budget.",
  },
  {
    title: "Online Jewelry Stores",
    description:
      "High-resolution, e-commerce-ready renders that load fast, display beautifully on retina screens, and convert browsers into buyers — delivered in the exact formats your platform requires.",
  },
];

const faqs = [
  {
    question: "Do I need to send my physical jewelry for virtual inventory?",
    answer:
      "Not necessarily. If you have existing CAD files or high-quality reference photos, we can work from those. For the most dimensionally accurate result, physical pieces or existing production CAD files are ideal. We will advise on what we need after reviewing your collection.",
  },
  {
    question: "What image resolutions do you deliver for virtual jewelry inventory?",
    answer:
      "We deliver high-resolution renders typically at 3000×3000px or larger, suitable for print, large-format display, and high-DPI screens. Web-optimised versions (compressed for fast loading) are included as standard. Custom resolutions and aspect ratios are available on request.",
  },
  {
    question: "Can you show the same jewelry design in multiple metal colors?",
    answer:
      "Yes, and this is one of the biggest advantages of virtual inventory over traditional photography. Once the 3D model is complete, rendering the same piece in yellow gold, white gold, rose gold, platinum, or any other material is fast and cost-effective. No additional physical samples are needed.",
  },
  {
    question: "How long does virtual jewelry inventory take?",
    answer:
      "Individual pieces are typically rendered within 2 to 4 business days from when the 3D model is approved. Full collections are scoped and quoted per project based on the number of pieces, complexity, and number of colorway variations required.",
  },
  {
    question: "Is virtual jewelry inventory cheaper than a traditional photo shoot?",
    answer:
      "In most cases, yes — particularly for collections with multiple designs, colorways, or stone options. Virtual inventory eliminates studio rental, photographer fees, styling costs, and the logistical complexity of handling physical inventory for photography. Once a model is built, producing additional renders is highly efficient.",
  },
];

export default function VirtualInventoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceAnimations />

      {/* ── HERO ── */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <Image src={HERO_IMAGE} alt="Virtual jewelry inventory and digital catalog service by Virtual Goldsmith" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <div className="relative z-10 w-full max-w-5xl px-8 md:px-14 pb-16">
          <p className="svc-hero-label opacity-0 text-white/60 text-xs tracking-[0.4em] uppercase mb-4">
            Digital Catalog · Photorealistic Renders · E-Commerce Ready
          </p>
          <h1 className="svc-hero-heading opacity-0 text-white text-4xl md:text-6xl font-light leading-tight mb-5">
            Virtual Jewelry Inventory
          </h1>
          <p className="svc-hero-sub opacity-0 text-white/75 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Transform your physical jewelry collection into a stunning digital catalog with photorealistic 3D renders — no photo shoot required, no physical samples needed.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="svc-hero-cta opacity-0 inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300">
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="svc-hero-cta opacity-0 inline-flex items-center gap-2 border border-white text-white px-8 py-3.5 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300">
              <CalendarDays size={16} /> Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-black text-white py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between gap-6 text-center text-sm text-white/60 tracking-widest uppercase">
          <span>No Photo Shoot Required</span>
          <span className="hidden md:block text-white/20">|</span>
          <span>Multiple Colorways From One Model</span>
          <span className="hidden md:block text-white/20">|</span>
          <span>E-Commerce Ready Files</span>
          <span className="hidden md:block text-white/20">|</span>
          <span>2–4 Day Turnaround Per Piece</span>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="svc-intro-text opacity-0">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">About This Service</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Your Entire Jewelry Collection, Digitized and Ready to Sell
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Traditional jewelry photography is expensive, logistically complex, and hard to keep consistent across a growing collection. Virtual inventory replaces all of that with production-accurate 3D models and photorealistic renders that are indistinguishable from studio photography — at a fraction of the cost and without putting your physical pieces at risk.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every render captures the metal finish, gemstone color, cut facets, surface reflections, and proportions of your pieces with precision. And because it starts with a 3D model, the same design can be rendered in yellow gold, white gold, rose gold, platinum, or any stone combination — no additional samples required.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you are an independent jeweler building your first online store, a retail brand scaling a large catalog, or a manufacturer needing consistent product imagery, virtual inventory gives you studio-quality visuals that work across every sales channel.
            </p>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-black border-b border-black pb-1 hover:gap-4 transition-all duration-300">
              View Render Portfolio <ArrowRight size={15} />
            </Link>
          </div>
          <div className="svc-intro-image opacity-0 relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg"
              alt="Photorealistic virtual jewelry inventory render - gold ring digital catalog"
              fill className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="svc-features-section bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">What's Included</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Everything Your Digital Catalog Needs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="svc-feature-card opacity-0 bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <CheckCircle size={22} className="text-black mb-4" />
                <h3 className="font-semibold text-gray-900 text-lg mb-3">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">Who This Service Is For</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Built for Jewelry Businesses</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((a) => (
              <div key={a.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="svc-process-section bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">From Physical Collection to Digital Catalog</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.number} className="svc-process-step opacity-0">
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center mb-6">
                  <span className="text-sm font-semibold text-black">{s.number}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="svc-gallery-section py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">Our Work</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Virtual Inventory Samples</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div key={img.src} className={`svc-gallery-img opacity-0 relative overflow-hidden rounded-2xl ${img.className}`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-black border-b border-black pb-1 hover:gap-4 transition-all duration-300">
              View Full Portfolio <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="svc-faq-section bg-gray-50 py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Common Questions About Virtual Jewelry Inventory</h2>
          </div>
          <div>
            {faqs.map((faq) => (
              <div key={faq.question} className="svc-faq-item opacity-0 border-b border-gray-200 py-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-32 overflow-hidden">
        <Image src={HERO_IMAGE} alt="Build your digital jewelry catalog with Virtual Goldsmith" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="svc-cta-content opacity-0">
            <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-5">Ready to Start?</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5">Ready to Build Your Digital Catalog?</h2>
            <p className="text-white/70 text-lg mb-12 leading-relaxed">
              Share your collection details and we will create a professional virtual inventory that showcases every piece at its best — ready to sell, anywhere.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white text-white px-10 py-4 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300">
                <CalendarDays size={16} /> Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
