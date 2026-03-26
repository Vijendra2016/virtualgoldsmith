import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, CheckCircle, ArrowRight } from "lucide-react";
import ServiceAnimations from "../components/ServiceAnimations";

export const metadata: Metadata = {
  title: "Jewelry Drawing & Illustration Services | Counter Sketching | Virtual Goldsmith",
  description:
    "Professional jewelry illustration and counter sketching by master jeweler Todd Michael. Design drawings, technical illustrations, and collection concepts for independent jewelers, designers, and manufacturers. 40+ years of goldsmithing expertise.",
  keywords: [
    "jewelry illustration services",
    "jewelry counter sketching",
    "jewelry design drawing",
    "custom jewelry sketch",
    "jewelry design presentation",
    "technical jewelry drawing",
    "jewelry concept art",
    "hand-drawn jewelry design",
    "jewelry collection sketches",
    "jewelry designer illustration",
    "counter sketch jeweler",
    "Virtual Goldsmith",
    "Todd Michael jewelry",
  ],
};

const BOOKING_URL = "https://virtualgoldsmith.bloom.io/get-started-11";
const HERO_IMAGE =
  "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58c897d8a8a879d5f45dd_pexels-janakukebal-30541169.jpg";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is counter sketching in jewelry design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Counter sketching is the practice of drawing a jewelry design quickly and accurately — typically in front of a client at the sales counter — to capture and confirm the design direction before any work begins. It is a traditional goldsmithing skill that bridges the gap between a client's verbal description and the final piece.",
      },
    },
    {
      "@type": "Question",
      name: "What format are jewelry illustrations delivered in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High-resolution PNG and PDF files, optimised for both screen presentation and print. Illustrations are typically delivered at 300dpi or higher. Hand-drawn originals can also be scanned and delivered digitally, or shipped as physical originals on request.",
      },
    },
    {
      "@type": "Question",
      name: "Can you create a jewelry illustration from a description alone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Todd has decades of experience translating verbal descriptions into clear, accurate jewelry design drawings. The more detail you provide — metal, setting style, stone shape, proportions — the more precise the result. Multiple initial concepts can be provided if the direction is open.",
      },
    },
    {
      "@type": "Question",
      name: "Do jewelry illustrations include technical dimensions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technical illustrations include all relevant dimensions, stone sizes, setting specifications, and construction notes for manufacturers. Presentation drawings focus on aesthetics and can include or omit measurements depending on their intended use.",
      },
    },
    {
      "@type": "Question",
      name: "Can a jewelry illustration be converted into a CAD model later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Many clients begin with a jewelry illustration to confirm the design direction with their client or team, then move into CAD production for manufacturing. Virtual Goldsmith handles both stages, making the transition seamless.",
      },
    },
  ],
};

const features = [
  {
    title: "Counter Sketching",
    description:
      "Quick, accurate freehand sketches drawn from client descriptions or references — ideal for in-person or remote client consultations. Capture and confirm design direction before committing to production.",
  },
  {
    title: "Design Proposal Drawings",
    description:
      "Polished, presentation-quality jewelry illustrations to share with clients, investors, or retail partners before committing to manufacturing. Professional visuals that sell the design before the metal is ordered.",
  },
  {
    title: "Technical Construction Drawings",
    description:
      "Precise technical illustrations showing dimensions, stone sizes, setting specifications, metal thickness, and construction details — everything a manufacturer or casting house needs to produce the piece accurately.",
  },
  {
    title: "Collection Concept Sketches",
    description:
      "Multi-piece collection drawings with a consistent design language across rings, pendants, earrings, bracelets, and brooches. Perfect for launching a new collection or presenting a cohesive brand identity.",
  },
  {
    title: "Redesign & Modification Visuals",
    description:
      "Visual explorations showing how an existing piece can be updated, modernised, resized, or reworked. Ideal for estate jewelry renovation, heirloom redesign, or refreshing an older collection.",
  },
  {
    title: "Digital & Hand-Drawn Options",
    description:
      "Delivered as high-resolution digital files ready for email and screen, or as hand-drawn originals for clients who value the tactile quality of traditional draftsmanship. Your preference, your choice.",
  },
];

const steps = [
  {
    number: "01",
    title: "Share Your Brief",
    description:
      "Provide a description, inspiration image, reference piece, or mood board. The more context you share, the more accurate the initial sketches will be.",
  },
  {
    number: "02",
    title: "Initial Sketch Concepts",
    description:
      "Receive initial sketch concepts for review. Multiple directions can be provided if you are exploring design options before committing to one path.",
  },
  {
    number: "03",
    title: "Refine & Revise",
    description:
      "Choose a direction and refine through revision rounds. Proportion, setting style, surface treatment, and decorative details are all adjusted until the drawing is exactly right.",
  },
  {
    number: "04",
    title: "Final Artwork Delivery",
    description:
      "High-resolution files delivered in your preferred format — ready for client presentation, manufacturer hand-off, or CAD conversion.",
  },
];

const galleryImages = [
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a66f8ad84af3158804207a_CAD%20JEWELLERY%20SERVICES%20.jpeg",
    alt: "Jewelry illustration and design drawing services by Virtual Goldsmith",
    className: "md:col-span-2 h-80",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a6783f3ecb245ade44d99e_cadringdesign2.jpeg",
    alt: "Custom ring design illustration - eternity band concept sketch",
    className: "h-80",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg",
    alt: "Jewelry design drawing - gold ring presentation illustration",
    className: "h-64",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg",
    alt: "Counter sketch - custom engagement ring design proposal",
    className: "h-64",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58d5f081a4da94ec4e4c6_pexels-cottonbro-9430438.jpg",
    alt: "Jewelry design illustration process - Todd Michael Virtual Goldsmith",
    className: "md:col-span-2 h-64",
  },
];

const audiences = [
  {
    title: "Independent Jewelers",
    description:
      "Offer professional design drawings to clients at the point of sale. Counter sketches confirm design intent, reduce misunderstandings, and lead to more confident commission decisions.",
  },
  {
    title: "Jewelry Designers",
    description:
      "Get your collection concepts drawn to a professional standard — suitable for presentations, lookbooks, trade show materials, and manufacturer briefs — without hiring a dedicated illustrator.",
  },
  {
    title: "Gemstone Cutters & Lapidaries",
    description:
      "Commission illustrations that showcase your stones in setting proposals, helping clients visualise finished pieces before any metalwork begins.",
  },
];

const faqs = [
  {
    question: "What is counter sketching in jewelry design?",
    answer:
      "Counter sketching is the practice of drawing a jewelry design quickly and accurately — typically in front of a client at the sales counter — to capture and confirm the design direction before any work begins. It is a traditional goldsmithing skill that bridges the gap between a client's verbal description and the final piece.",
  },
  {
    question: "What format are jewelry illustrations delivered in?",
    answer:
      "High-resolution PNG and PDF files, optimised for both screen presentation and print. Illustrations are typically delivered at 300dpi or higher. Hand-drawn originals can also be scanned and delivered digitally, or shipped as physical originals on request.",
  },
  {
    question: "Can you create a jewelry illustration from a description alone?",
    answer:
      "Yes. Todd has decades of experience translating verbal descriptions into clear, accurate jewelry design drawings. The more detail you provide — metal, setting style, stone shape, proportions — the more precise the result. Multiple initial concepts can be provided if the direction is open.",
  },
  {
    question: "Do jewelry illustrations include technical dimensions?",
    answer:
      "Technical illustrations include all relevant dimensions, stone sizes, setting specifications, and construction notes for manufacturers. Presentation drawings focus on aesthetics and can include or omit measurements depending on their intended use.",
  },
  {
    question: "Can a jewelry illustration be converted into a CAD model later?",
    answer:
      "Absolutely. Many clients begin with a jewelry illustration to confirm the design direction with their client or team, then move into CAD production for manufacturing. Virtual Goldsmith handles both stages, making the transition seamless.",
  },
];

export default function JewelryDrawingIllustrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceAnimations />

      {/* ── HERO ── */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <Image src={HERO_IMAGE} alt="Jewelry drawing and illustration services by Virtual Goldsmith" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <div className="relative z-10 w-full max-w-5xl px-8 md:px-14 pb-16">
          <p className="svc-hero-label opacity-0 text-white/60 text-xs tracking-[0.4em] uppercase mb-4">
            Design · Illustration · Counter Sketching
          </p>
          <h1 className="svc-hero-heading opacity-0 text-white text-4xl md:text-6xl font-light leading-tight mb-5">
            Jewelry Drawing &amp; Illustration
          </h1>
          <p className="svc-hero-sub opacity-0 text-white/75 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Professional jewelry illustrations and counter sketches — communicating your vision with clarity, precision, and 40+ years of goldsmithing knowledge behind every line.
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
          <span>Counter Sketching · Technical Drawings</span>
          <span className="hidden md:block text-white/20">|</span>
          <span>Digital & Hand-Drawn</span>
          <span className="hidden md:block text-white/20">|</span>
          <span>CAD Conversion Available</span>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="svc-intro-text opacity-0">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">About This Service</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Communicate Your Vision Before a Single Gram of Metal Is Used
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A well-executed jewelry illustration communicates form, proportion, setting style, and decorative detail in ways that words alone never can. It gives clients, manufacturers, and collaborators a clear, shared visual reference before any material commitment is made — reducing misunderstandings, revision costs, and production errors.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              From in-the-moment counter sketching to polished collection presentations and manufacturer-ready technical drawings, jewelry illustration is where ideas take their first tangible shape. Todd's drawings are not just decorative — they are informed by 40+ years of making, which means every line accounts for structural integrity, setting geometry, and manufacturing reality.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you need a quick counter sketch to close a commission, a detailed technical drawing for your casting house, or a full collection proposal for a buyer meeting, Virtual Goldsmith delivers illustration that works as hard as your jewelry does.
            </p>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-black border-b border-black pb-1 hover:gap-4 transition-all duration-300">
              View Illustration Portfolio <ArrowRight size={15} />
            </Link>
          </div>
          <div className="svc-intro-image opacity-0 relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg"
              alt="Jewelry illustration and counter sketching by Todd Michael - Virtual Goldsmith"
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Every Type of Jewelry Illustration You Need</h2>
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">From Brief to Final Artwork</h2>
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Jewelry Illustration Samples</h2>
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Common Questions About Jewelry Illustration</h2>
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
        <Image src={HERO_IMAGE} alt="Start your jewelry illustration project with Virtual Goldsmith" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="svc-cta-content opacity-0">
            <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-5">Ready to Start?</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5">Ready to See Your Idea on Paper?</h2>
            <p className="text-white/70 text-lg mb-12 leading-relaxed">
              Share your brief and Todd will translate it into a clear, professional jewelry illustration — ready for your client, your manufacturer, or your next collection.
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
