import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, CheckCircle, ArrowRight } from "lucide-react";
import ServiceAnimations from "../components/ServiceAnimations";

export const metadata: Metadata = {
  title: "Jewelry CAD Design Services | Custom 3D Jewelry Modeling | Virtual Goldsmith",
  description:
    "Professional jewelry CAD design services by master jeweler Todd Michael. Production-ready 3D models for rings, pendants, engagement rings & custom pieces. STL, OBJ & native CAD files. 40+ years bench experience. Serving independent jewelers, designers & manufacturers.",
  keywords: [
    "jewelry CAD design services",
    "custom jewelry CAD",
    "3D jewelry modeling",
    "jewelry CAD file",
    "production-ready jewelry CAD",
    "jewelry 3D printing file",
    "jewelry casting file",
    "STL file jewelry",
    "custom ring CAD design",
    "engagement ring CAD design",
    "pendant CAD design",
    "jewelry manufacturer CAD",
    "Virtual Goldsmith",
    "Todd Michael jeweler",
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
      name: "What file formats do you deliver for jewelry CAD design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We deliver STL, OBJ, and native CAD files (3DM for Rhino, ZPR for ZBrush, or the format required by your casting house or 3D printer). If you need a specific format for your manufacturer, wax printer, or CNC mill, just let us know and we will deliver accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to provide a sketch to start a jewelry CAD project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. We work from any starting point — a rough pencil sketch, a photograph of an existing piece, a reference image from online, or even a verbal description. Todd's 40+ years of goldsmithing experience means he can translate almost any vision into an accurate 3D model.",
      },
    },
    {
      "@type": "Question",
      name: "How many revisions are included in a CAD design project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We include multiple revision rounds in every CAD project. Our goal is to deliver a model that you are completely satisfied with before final files are sent. We iterate until the 3D model matches your vision precisely.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical jewelry CAD design project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most standard jewelry CAD projects — rings, pendants, simple earrings — are completed within 3 to 7 business days. More complex pieces with intricate stonework, engraving, or custom mechanisms may take longer. Rush turnaround is available on request.",
      },
    },
    {
      "@type": "Question",
      name: "Can you CAD model an existing piece of jewelry for reproduction or redesign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Send us the physical piece, a set of photos, or precise measurements and we will build an accurate digital replica. This is ideal for reproduction, resizing, updating a vintage design, or creating a matching companion piece.",
      },
    },
  ],
};

const features = [
  {
    title: "Sketch-to-CAD Conversion",
    description:
      "We work from any reference: pencil sketches, phone photos, magazine clippings, or verbal descriptions. Any starting point is the right starting point.",
  },
  {
    title: "Production-Ready Files",
    description:
      "Every file is built for manufacturing. STL, OBJ, and native CAD formats optimised for lost-wax casting, resin 3D printing, and CNC milling — delivered ready to send to your caster.",
  },
  {
    title: "Precise Stone Seat Modeling",
    description:
      "Prong, bezel, channel, pavé, and flush settings built to exact stone dimensions. No guessing at the bench — every seat is modeled to the actual girdle diameter and depth of your stones.",
  },
  {
    title: "Unlimited Revision Rounds",
    description:
      "We iterate until the model is exactly right. Proportion adjustments, shank profile changes, stone repositioning — revisions are part of the process, not an add-on cost.",
  },
  {
    title: "40+ Years of Manufacturing Insight",
    description:
      "Every structural decision is informed by decades at the bench. Wall thickness, undercuts, sprue placement, polishing access — manufacturing realities are built in from the first line, not flagged after the fact.",
  },
  {
    title: "Fast, Reliable Turnaround",
    description:
      "Professional workflows and deep expertise mean most projects are completed in 3 to 7 business days. Rush service is available when deadlines are tight.",
  },
];

const steps = [
  {
    number: "01",
    title: "Share Your Reference",
    description:
      "Send a sketch, photo, reference image, or written description. Include any stone sizes, metal preferences, and specific details that are important to you.",
  },
  {
    number: "02",
    title: "Brief & Scope",
    description:
      "Todd reviews your project, asks any clarifying questions, and confirms the approach, expected complexity, and turnaround timeline before work begins.",
  },
  {
    number: "03",
    title: "3D Modeling & Revisions",
    description:
      "You receive the 3D model with screenshots or renders for review. Revisions are made until every detail — proportion, stonework, surface — matches your vision.",
  },
  {
    number: "04",
    title: "Final Production Files",
    description:
      "Production-ready files in your required format, sized and structured for your casting house, 3D printer, or CNC mill. Ready to manufacture.",
  },
];

const galleryImages = [
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a66f8ad84af3158804207a_CAD%20JEWELLERY%20SERVICES%20.jpeg",
    alt: "Custom jewelry CAD design services by Virtual Goldsmith",
    className: "md:col-span-2 h-80",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg",
    alt: "3D CAD ring design - halo engagement ring model",
    className: "h-80",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a6783f3ecb245ade44d99e_cadringdesign2.jpeg",
    alt: "Jewelry CAD model - eternity band 3D design",
    className: "h-64",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg",
    alt: "Production-ready custom gold ring CAD file",
    className: "h-64",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58d5f081a4da94ec4e4c6_pexels-cottonbro-9430438.jpg",
    alt: "Jewelry design and CAD modeling process",
    className: "md:col-span-2 h-64",
  },
];

const audiences = [
  {
    title: "Independent Jewelers",
    description:
      "Scale your custom order capacity without adding bench staff. Get production-ready CAD files for client commissions, repairs, and reproductions — fast.",
  },
  {
    title: "Emerging Jewelry Designers",
    description:
      "Turn your sketches and concepts into manufacturable 3D models without investing in expensive CAD software or training. Focus on design; we handle the technical execution.",
  },
  {
    title: "Jewelry Manufacturers & Casting Houses",
    description:
      "Receive fully prepared STL and CAD files built with manufacturing tolerances in mind. Less rework, fewer rejections, more efficient production runs.",
  },
];

const faqs = [
  {
    question: "What file formats do you deliver for jewelry CAD design?",
    answer:
      "We deliver STL, OBJ, and native CAD files (3DM for Rhino, ZPR for ZBrush, or the format required by your casting house or 3D printer). If you need a specific format for your manufacturer, wax printer, or CNC mill, just let us know and we will deliver accordingly.",
  },
  {
    question: "Do I need to provide a sketch to start a jewelry CAD project?",
    answer:
      "Not at all. We work from any starting point — a rough pencil sketch, a photograph of an existing piece, a reference image from online, or even a verbal description. Todd's 40+ years of goldsmithing experience means he can translate almost any vision into an accurate 3D model.",
  },
  {
    question: "How many revisions are included in a CAD design project?",
    answer:
      "We include multiple revision rounds in every CAD project. Our goal is to deliver a model that you are completely satisfied with before final files are sent. We iterate until the 3D model matches your vision precisely.",
  },
  {
    question: "How long does a typical jewelry CAD design project take?",
    answer:
      "Most standard jewelry CAD projects — rings, pendants, simple earrings — are completed within 3 to 7 business days. More complex pieces with intricate stonework, engraving, or custom mechanisms may take longer. Rush turnaround is available on request.",
  },
  {
    question: "Can you CAD model an existing piece of jewelry for reproduction or redesign?",
    answer:
      "Yes. Send us the physical piece, a set of photos, or precise measurements and we will build an accurate digital replica. This is ideal for reproduction, resizing, updating a vintage design, or creating a matching companion piece.",
  },
];

export default function CADDesignServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceAnimations />

      {/* ── HERO ── */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <Image src={HERO_IMAGE} alt="Jewelry CAD design services by Virtual Goldsmith" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <div className="relative z-10 w-full max-w-5xl px-8 md:px-14 pb-16">
          <p className="svc-hero-label opacity-0 text-white/60 text-xs tracking-[0.4em] uppercase mb-4">
            Precision · Production-Ready · Professional
          </p>
          <h1 className="svc-hero-heading opacity-0 text-white text-4xl md:text-6xl font-light leading-tight mb-5">
            Jewelry CAD Design Services
          </h1>
          <p className="svc-hero-sub opacity-0 text-white/75 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            From sketch to production-ready 3D model — built by a master jeweler with 40+ years at the bench. STL, OBJ, and native CAD files ready for casting, printing, or CNC.
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
          <span>40+ Years Bench Experience</span>
          <span className="hidden md:block text-white/20">|</span>
          <span>500+ Custom Projects</span>
          <span className="hidden md:block text-white/20">|</span>
          <span>STL · OBJ · Native CAD</span>
          <span className="hidden md:block text-white/20">|</span>
          <span>3–7 Day Turnaround</span>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="svc-intro-text opacity-0">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">About This Service</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              From Any Starting Point to a Perfect 3D Model
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Whether you are starting from a rough pencil sketch, a photograph of an existing piece, or a verbal description, our jewelry CAD design service transforms your concept into a precise, production-ready 3D model. Every CAD file is built with manufacturing in mind — wall thickness, stone seats, sprue placement, and polishing access are all considered before the first revision is sent.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Todd Michael brings over 40 years of hands-on goldsmithing to every model. That depth of bench experience means structural integrity, accurate prong and bezel geometry, and real-world wearability are built in from the start — not flagged by your casting house after the fact.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We work with independent jewelers, emerging designers, and jewelry manufacturers across rings, engagement rings, pendants, earrings, bracelets, and bespoke custom pieces of all complexity.
            </p>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-black border-b border-black pb-1 hover:gap-4 transition-all duration-300">
              View CAD Portfolio <ArrowRight size={15} />
            </Link>
          </div>
          <div className="svc-intro-image opacity-0 relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg"
              alt="Custom jewelry CAD design process - ring model by Virtual Goldsmith"
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Everything You Need, Nothing You Don't</h2>
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Simple. Collaborative. Precise.</h2>
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Jewelry CAD Design Samples</h2>
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Common Questions About Jewelry CAD Design</h2>
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
        <Image src={HERO_IMAGE} alt="Start your custom jewelry CAD design project" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="svc-cta-content opacity-0">
            <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-5">Ready to Start?</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5">Ready to Start Your CAD Project?</h2>
            <p className="text-white/70 text-lg mb-12 leading-relaxed">
              Share your sketch, photo, or idea and Todd will turn it into a production-ready 3D jewelry model — built to manufacture from day one.
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
