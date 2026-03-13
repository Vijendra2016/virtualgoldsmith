import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import HomeAnimations from "./components/HomeAnimations";

export const metadata: Metadata = {
  title: "Virtual Goldsmith | CAD Design, Jewelry Illustration & Digital Inventory",
  description: "Virtual Goldsmith by Todd Michael — professional CAD design, jewelry illustration, and virtual inventory services for independent jewelers, designers, and gemstone cutters.",
};

const BOOK_URL = "https://thegoldsmithsbench.bloom.io/schedule";

const services = [
  {
    label: "Service 01",
    title: "CAD Design",
    description:
      "Precision-built 3D jewelry models from any starting point — sketch, photo, or concept. Every file is production-ready and built by someone who has made thousands of pieces by hand.",
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a66f8ad84af3158804207a_CAD%20JEWELLERY%20SERVICES%20.jpeg",
    href: "/cad-design-services",
  },
  {
    label: "Service 02",
    title: "Jewelry Drawing & Illustration",
    description:
      "Counter sketches, design presentations, and detailed illustrations that communicate your vision clearly — to clients, manufacturers, and yourself.",
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg",
    href: "/jewelry-drawing-and-illistration",
  },
  {
    label: "Service 03",
    title: "Virtual Inventory",
    description:
      "Turn your physical collection into a polished digital catalog. Photorealistic renders and accurate 3D models, ready for e-commerce, print, and online retail — no photo shoot required.",
    image: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58d5f081a4da94ec4e4c6_pexels-cottonbro-9430438.jpg",
    href: "/virtual-inventory",
  },
];

const stats = [
  { number: "40+", label: "Years at the Bench" },
  { number: "500+", label: "Projects Completed" },
  { number: "3", label: "Core Services" },
  { number: "100%", label: "Production-Ready Files" },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <HomeAnimations />

      {/* ─── HERO ─── */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58c897d8a8a879d5f45dd_pexels-janakukebal-30541169.jpg"
          alt="Virtual Goldsmith"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        <div className="relative z-10 flex h-full flex-col justify-end pb-16 px-6 md:px-14 max-w-5xl">
          <p className="hero-label text-white/60 text-xs tracking-[0.4em] uppercase mb-5">
            Virtual Goldsmith by Todd Michael
          </p>
          <h1 className="hero-heading text-white text-4xl md:text-6xl font-light leading-tight mb-6">
            Jewelry design tools
            <br />
            built for professionals.
          </h1>
          <p className="hero-sub text-white/75 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            CAD design, jewelry illustration, and virtual inventory — crafted digitally, finished by hand, made to endure.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="hero-cta inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Get in Touch
            </Link>
            <Link
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta inline-flex items-center gap-2 border border-white text-white px-8 py-3.5 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300"
            >
              <CalendarDays size={16} />
              Book Appointment
            </Link>
          </div>
        </div>

        <div className="hero-scroll absolute bottom-6 right-8 text-white/40 text-xs tracking-widest rotate-90 hidden md:block">
          SCROLL
        </div>
      </section>

      {/* ─── TAGLINE STRIP ─── */}
      <section className="tagline-strip bg-black text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm tracking-[0.3em] uppercase text-white/60">
            Serving independent jewelers · emerging designers · gemstone cutters
          </p>
          <p className="text-sm text-white/80 italic">
            "Additional support without the burden of added labor costs."
          </p>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="intro-text">
            <p className="section-heading text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">About Virtual Goldsmith</p>
            <h2 className="section-heading text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Decades of craft.<br />Modern precision.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Virtual Goldsmith was created by Todd Michael as a practical tool for independent jewelers, emerging jewelry designers, and gemstone cutters looking for an edge. Drawing on decades of experience as a master jeweler, Todd combines traditional skills with modern technologies including in-house CAD design, 3D rendering, and jewelry illustration.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              The result is a resource built to help jewelry professionals work smarter, design with greater precision, and bring ideas to life more efficiently.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-black border-b border-black pb-1 hover:gap-4 transition-all duration-300"
            >
              Learn More About Todd <ArrowRight size={16} />
            </Link>
          </div>
          <div className="intro-image relative">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg"
              alt="Goldsmith at work"
              width={600}
              height={700}
              className="w-full h-[520px] object-cover rounded-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-black text-white px-6 py-5 rounded-xl hidden md:block">
              <p className="text-3xl font-semibold">40+</p>
              <p className="text-xs text-white/60 tracking-wider uppercase mt-1">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="services-section py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="section-heading text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">What We Do</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="section-heading text-4xl md:text-5xl font-semibold text-gray-900">Our Services</h2>
              <Link
                href="/contact"
                className="text-sm font-medium text-black border-b border-black pb-1 self-start md:self-auto hover:opacity-60 transition"
              >
                Work With Us →
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="service-card group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">{service.label}</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-black group-hover:gap-3 transition-all duration-300">
                    Explore <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="stats-section py-20 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <p className="stat-number text-5xl md:text-6xl font-semibold mb-2">{s.number}</p>
              <p className="text-white/50 text-xs tracking-widest uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PORTFOLIO ─── */}
      <section className="portfolio-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="section-heading text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">Our Work</p>
              <h2 className="section-heading text-4xl md:text-5xl font-semibold text-gray-900">Featured Projects</h2>
            </div>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-black border-b border-black pb-1 self-start md:self-auto hover:opacity-60 transition"
            >
              View Full Portfolio →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="portfolio-img md:col-span-2 relative h-72 md:h-96 overflow-hidden rounded-2xl">
              <Image
                src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a66f8ad84af3158804207a_CAD%20JEWELLERY%20SERVICES%20.jpeg"
                alt="CAD Jewellery Services"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="portfolio-img relative h-72 md:h-96 overflow-hidden rounded-2xl">
              <Image
                src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg"
                alt="Custom CAD ring"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="portfolio-img relative h-60 overflow-hidden rounded-2xl">
              <Image
                src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a6783f3ecb245ade44d99e_cadringdesign2.jpeg"
                alt="Jewelry CAD model"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="portfolio-img relative h-60 overflow-hidden rounded-2xl">
              <Image
                src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg"
                alt="Gold ring design"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="portfolio-img relative h-60 overflow-hidden rounded-2xl">
              <Image
                src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58d5f081a4da94ec4e4c6_pexels-cottonbro-9430438.jpg"
                alt="Jewelry design studio"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="why-section py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-heading text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">Why Virtual Goldsmith</p>
            <h2 className="section-heading text-4xl md:text-5xl font-semibold text-gray-900">
              The advantage is built in
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Bench-Trained Precision",
                desc: "Every digital design is informed by decades of hands-on goldsmithing. We anticipate manufacturing challenges before they become costly problems.",
              },
              {
                number: "02",
                title: "No Extra Labor Costs",
                desc: "Get the equivalent of an in-house design department without hiring one. Virtual Goldsmith scales with your workload on demand.",
              },
              {
                number: "03",
                title: "Traditional Meets Digital",
                desc: "Counter sketching, jewelry illustration, CAD modeling, and 3D rendering — all under one roof, from one master jeweler.",
              },
            ].map((item) => (
              <div key={item.number} className="why-card bg-white rounded-2xl p-8 border border-gray-100">
                <p className="text-5xl font-semibold text-gray-100 mb-4">{item.number}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="process-section py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-heading text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">How It Works</p>
            <h2 className="section-heading text-4xl font-semibold text-gray-900">Simple. Collaborative. Precise.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Share Your Idea", desc: "Send a sketch, photo, reference image, or just a description. Any starting point works." },
              { step: "02", title: "Design Review", desc: "Todd reviews your project and confirms the scope, approach, and timeline." },
              { step: "03", title: "Design & Revise", desc: "Receive your CAD, illustration, or renders with revision rounds until it's perfect." },
              { step: "04", title: "Production Ready", desc: "Get final files ready for casting, printing, or your manufacturing workflow." },
            ].map((item) => (
              <div key={item.step} className="process-step text-center px-4">
                <div className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center mx-auto mb-6">
                  <span className="text-sm font-semibold text-black">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative py-32 overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58c897d8a8a879d5f45dd_pexels-janakukebal-30541169.jpg"
          alt="Start your project"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="final-cta relative z-10 max-w-3xl mx-auto text-center px-6">
          <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-5">Ready to Start?</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Let's bring your design to life.
          </h2>
          <p className="text-white/70 text-lg mb-12 leading-relaxed">
            Whether you have a finished sketch or just an idea — Virtual Goldsmith is ready to help you work smarter and design with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Get in Touch
            </Link>
            <Link
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white text-white px-10 py-4 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300"
            >
              <CalendarDays size={16} />
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
