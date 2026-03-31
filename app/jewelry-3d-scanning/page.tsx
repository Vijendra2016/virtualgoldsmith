import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, CheckCircle, ArrowRight } from "lucide-react";
import ServiceAnimations from "../components/ServiceAnimations";

export const metadata: Metadata = {
  title: "Jewellery 3D Scanning Service | Reverse Engineering & Digital Archiving | Virtual Goldsmith",
  description:
    "Professional jewellery 3D scanning by master jeweler Todd Michael. Capture existing pieces as accurate digital models for reproduction, repair, redesign, and archiving. 40+ years of goldsmithing expertise behind every scan.",
  keywords: [
    "jewellery 3D scanning service",
    "jewelry 3D scan",
    "jewelry reverse engineering",
    "3D scan jewelry reproduction",
    "jewelry digital archiving",
    "scan to CAD jewelry",
    "jewelry 3D model from scan",
    "heirloom jewelry scanning",
    "estate jewelry 3D scan",
    "jewelry repair 3D scanning",
    "jewelry duplication service",
    "Virtual Goldsmith",
    "Todd Michael jewelry",
  ],
};

const BOOKING_URL = "https://virtualgoldsmith.bloom.io/get-started-11";
const HERO_IMAGE =
  "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69cbce254d97e1b895095ed3_3d-scaning-services.jpg";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is jewellery 3D scanning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jewellery 3D scanning is the process of capturing the precise geometry of an existing piece using a high-resolution scanner, producing an accurate digital model. This model can then be used for reproduction, repair, redesign, resizing, or archiving — without any modification to the original piece.",
      },
    },
    {
      "@type": "Question",
      name: "Can you 3D scan a piece that needs to be reproduced exactly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. 3D scanning captures the exact dimensions and surface geometry of the original piece. The resulting model can be used directly for casting or, where necessary, refined in CAD to correct wear or damage before production.",
      },
    },
    {
      "@type": "Question",
      name: "What file formats are the 3D scan models delivered in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scan data is delivered as STL, OBJ, or STP files depending on your intended use. CAD-ready files are available for manufacturers, casting houses, and 3D printing workflows.",
      },
    },
    {
      "@type": "Question",
      name: "Can a 3D scan be converted into a CAD model for redesign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Scan data serves as the foundation for a fully editable CAD model. This allows you to modify proportions, update settings, change metal profiles, or add decorative elements while maintaining the spirit of the original design.",
      },
    },
    {
      "@type": "Question",
      name: "Is the original piece at risk during 3D scanning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. 3D scanning is a completely non-contact, non-destructive process. The piece is not touched by any tools during scanning. Sentimental or fragile heirlooms can be scanned safely.",
      },
    },
  ],
};

const features = [
  {
    title: "Piece Reproduction Scanning",
    description:
      "Capture an existing piece as a precise digital model for exact reproduction. Ideal for duplicating sold-out designs, replacing lost pieces, or producing matching sets from a single original.",
  },
  {
    title: "Heirloom & Estate Preservation",
    description:
      "Create a permanent digital archive of cherished heirloom and estate pieces. Preserve every detail for future reproduction, insurance documentation, or generational gifting — even if the original is never worn again.",
  },
  {
    title: "Repair & Restoration Reference",
    description:
      "Scan damaged or worn pieces before and after restoration to establish a precise digital reference. Ensures repairs match the original geometry exactly and provides a record for insurance claims.",
  },
  {
    title: "Scan-to-CAD Conversion",
    description:
      "Convert raw scan data into a fully editable CAD model. Enables redesign, resizing, setting changes, and surface modifications while retaining the authentic form of the scanned original.",
  },
  {
    title: "Collection Digitisation",
    description:
      "Digitise an entire collection of existing pieces into an organised digital library. Perfect for retailers, estate buyers, and manufacturers who need accurate digital records of physical inventory.",
  },
  {
    title: "3D Print & Casting Preparation",
    description:
      "Prepare scan-derived models for direct 3D printing in wax or resin for lost-wax casting. Clean, manifold geometry optimised for casting house workflows — ready for production without rework.",
  },
];

const steps = [
  {
    number: "01",
    title: "Send or Ship Your Piece",
    description:
      "Securely send the piece to be scanned, or arrange a local drop-off. Fully insured handling throughout the process. The original is never altered.",
  },
  {
    number: "02",
    title: "High-Resolution Scanning",
    description:
      "The piece is scanned using professional-grade equipment to capture surface geometry, detail, and proportions at exceptional accuracy — all without contact.",
  },
  {
    number: "03",
    title: "Model Cleanup & Refinement",
    description:
      "Scan data is processed, cleaned, and refined into a production-ready digital model. Where needed, worn areas or surface noise are corrected to reflect the design intent.",
  },
  {
    number: "04",
    title: "File Delivery & Piece Return",
    description:
      "Final files are delivered in your chosen format — STL, OBJ, or CAD-ready STP. Your original piece is returned safely. From here, proceed to CAD, printing, or casting.",
  },
];

const galleryImages = [
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69cbcf59028cf31533569aaf_Untitled_Artwork(1).jpg",
    alt: "Jewellery 3D scanning service — capturing ring geometry for reproduction",
    className: "md:col-span-2 h-80",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69cbd0527659885dec163728_Image-61-768x1024.jpg",
    alt: "3D scan to CAD — ring model prepared for casting",
    className: "h-80",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg",
    alt: "Gold ring 3D scan — digital model for heirloom reproduction",
    className: "h-64",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg",
    alt: "Scan-to-CAD conversion — engagement ring ready for redesign",
    className: "h-64",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58d5f081a4da94ec4e4c6_pexels-cottonbro-9430438.jpg",
    alt: "Jewellery 3D scanning process — Virtual Goldsmith",
    className: "md:col-span-2 h-64",
  },
];

const audiences = [
  {
    title: "Independent Jewelers",
    description:
      "Offer clients exact reproductions of discontinued or damaged pieces without manual measurement. Scan the original, produce the model, and proceed directly to casting — saving time and eliminating guesswork.",
  },
  {
    title: "Estate & Antique Dealers",
    description:
      "Digitise estate inventory for insurance, auction documentation, or reproduction licensing. Create a permanent, accurate record of every piece — regardless of whether it sells.",
  },
  {
    title: "Jewelry Designers & Manufacturers",
    description:
      "Bring physical prototypes, hand-carved waxes, or approved samples into the digital workflow. Scan first — then refine, scale, and reproduce in CAD without starting from scratch.",
  },
];

const faqs = [
  {
    question: "What is jewellery 3D scanning?",
    answer:
      "Jewellery 3D scanning is the process of capturing the precise geometry of an existing piece using a high-resolution scanner, producing an accurate digital model. This model can then be used for reproduction, repair, redesign, resizing, or archiving — without any modification to the original piece.",
  },
  {
    question: "Can you 3D scan a piece that needs to be reproduced exactly?",
    answer:
      "Yes. 3D scanning captures the exact dimensions and surface geometry of the original piece. The resulting model can be used directly for casting or, where necessary, refined in CAD to correct wear or damage before production.",
  },
  {
    question: "What file formats are the 3D scan models delivered in?",
    answer:
      "Scan data is delivered as STL, OBJ, or STP files depending on your intended use. CAD-ready files are available for manufacturers, casting houses, and 3D printing workflows.",
  },
  {
    question: "Can a 3D scan be converted into a CAD model for redesign?",
    answer:
      "Absolutely. Scan data serves as the foundation for a fully editable CAD model. This allows you to modify proportions, update settings, change metal profiles, or add decorative elements while maintaining the spirit of the original design.",
  },
  {
    question: "Is the original piece at risk during 3D scanning?",
    answer:
      "No. 3D scanning is a completely non-contact, non-destructive process. The piece is not touched by any tools during scanning. Sentimental or fragile heirlooms can be scanned safely.",
  },
];

export default function Jewelry3DScanningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceAnimations />

      {/* ── HERO ── */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <Image src={HERO_IMAGE} alt="Jewellery 3D scanning service by Virtual Goldsmith" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <div className="relative z-10 w-full max-w-5xl px-8 md:px-14 pb-16">
          <p className="svc-hero-label opacity-0 text-white/60 text-xs tracking-[0.4em] uppercase mb-4">
            Scanning · Reverse Engineering · Digital Archiving
          </p>
          <h1 className="svc-hero-heading opacity-0 text-white text-4xl md:text-6xl font-light leading-tight mb-5">
            Jewellery 3D Scanning Service
          </h1>
          <p className="svc-hero-sub opacity-0 text-white/75 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Capture any existing piece as a precise digital model — ready for reproduction, repair, redesign, or permanent archiving. Non-contact. Non-destructive. Backed by 40+ years of goldsmithing expertise.
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
          <span>40+ Years Goldsmithing Experience</span>
          <span className="hidden md:block text-white/20">|</span>
          <span>Non-Contact · Non-Destructive</span>
          <span className="hidden md:block text-white/20">|</span>
          <span>STL · OBJ · CAD-Ready Files</span>
          <span className="hidden md:block text-white/20">|</span>
          <span>Scan to CAD Conversion Available</span>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="svc-intro-text opacity-0">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">About This Service</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Turn Any Physical Piece Into a Precise Digital Model
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              3D scanning bridges the physical and digital worlds of jewellery — capturing a piece's exact geometry, surface detail, and proportions without a single measurement by hand. The result is an accurate digital model that can be reproduced, modified, or archived indefinitely.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Whether you are reproducing a discontinued design, preserving an heirloom, preparing a hand-carved wax for casting production, or modernising an estate piece, 3D scanning removes the uncertainty of manual reverse engineering. Todd's goldsmithing background means the scan data is interpreted and cleaned by someone who understands how jewellery is actually made — not just how it looks on a screen.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              The original piece is never touched during scanning. No polishing compounds, no contact tools, no risk. Fragile, antique, and sentimental pieces are scanned with the same care as everyday production stock.
            </p>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-black border-b border-black pb-1 hover:gap-4 transition-all duration-300">
              View Our Portfolio <ArrowRight size={15} />
            </Link>
          </div>
          <div className="svc-intro-image opacity-0 relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69cbce254d97e1b895095ed3_3d-scaning-services.jpg"
              alt="Jewellery 3D scanning and digital model preparation by Virtual Goldsmith"
              fill className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="svc-features-section bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">What&apos;s Included</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Every Use Case for Jewellery 3D Scanning</h2>
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Built for Jewelry Professionals</h2>
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">From Physical Piece to Digital Model</h2>
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">3D Scanning Portfolio</h2>
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Common Questions About Jewellery 3D Scanning</h2>
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
        <Image src={HERO_IMAGE} alt="Start your jewellery 3D scanning project with Virtual Goldsmith" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="svc-cta-content opacity-0">
            <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-5">Ready to Start?</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5">Ready to Digitise Your Piece?</h2>
            <p className="text-white/70 text-lg mb-12 leading-relaxed">
              Send your piece — or your brief — and Todd will handle everything from scanning to file delivery. Non-contact, non-destructive, and backed by decades of goldsmithing knowledge.
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
