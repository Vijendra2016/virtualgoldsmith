import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, CalendarDays, CheckCircle } from "lucide-react";
import { cities } from "./cities";

const BASE_URL = "https://virtualgoldsmith.com";
const BOOKING_URL = "https://virtualgoldsmith.bloom.io/get-started-11";
const HERO_IMAGE =
  "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58c897d8a8a879d5f45dd_pexels-janakukebal-30541169.jpg";

export const metadata: Metadata = {
  title: "Jewelry CAD Design Near Me | All US Cities | Virtual Goldsmith",
  description:
    "Find professional jewelry CAD design services near you across the USA. Virtual Goldsmith serves Nashville, Miami, Houston, Atlanta, Las Vegas, San Diego, and more — production-ready 3D jewelry models by master goldsmith Todd Michael.",
  keywords: [
    "jewelry CAD design near me",
    "jewelry CAD designer USA",
    "3D jewelry modeling near me",
    "custom jewelry CAD services",
    "jewelry CAD design United States",
    "remote jewelry CAD designer",
    "Virtual Goldsmith",
    "Todd Michael goldsmith",
  ],
  alternates: {
    canonical: `${BASE_URL}/jewelry-cad-design-near-me`,
  },
};

const hubBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Jewelry CAD Design Near Me",
      item: `${BASE_URL}/jewelry-cad-design-near-me`,
    },
  ],
};

const hubServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Virtual Goldsmith — Jewelry CAD Design Services USA",
  description:
    "Professional jewelry CAD design services available nationwide. Production-ready 3D models, STL files, and native CAD by master goldsmith Todd Michael.",
  url: `${BASE_URL}/jewelry-cad-design-near-me`,
  email: "todd@virtualgoldsmith.com",
  serviceType: "Jewelry CAD Design",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  provider: {
    "@type": "Person",
    name: "Todd Michael",
    description: "Master Goldsmith, 40+ years experience",
  },
};

// Group cities by state for the hub page
const stateGroups = cities.reduce<Record<string, typeof cities>>((acc, city) => {
  const key = city.stateAbbr;
  if (!acc[key]) acc[key] = [];
  acc[key].push(city);
  return acc;
}, {});

const stateOrder = Object.keys(stateGroups).sort();

export default function JewelryCADNearMeHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubServiceSchema) }}
      />

      {/* ── BREADCRUMB ── */}
      <nav className="bg-white border-b border-gray-100 px-6 py-3">
        <div className="max-w-6xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-900 font-medium">Jewelry CAD Design Near Me</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Jewelry CAD design services near me — USA nationwide by Virtual Goldsmith"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <div className="relative z-10 w-full max-w-5xl px-8 md:px-14 pb-16">
          <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-4">
            Nationwide · Remote · Production-Ready
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-light leading-tight mb-5">
            Jewelry CAD Design<br />
            <span className="font-semibold">Near Me — Nationwide</span>
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Professional 3D jewelry modeling by master goldsmith Todd Michael — 40+ years at the bench. Serving jewelers and designers across the USA with production-ready STL, OBJ, and native CAD files.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white text-white px-8 py-3.5 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300"
            >
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
          <span className="hidden md:block text-white/20">|</span>
          <span>Serving All 50 States</span>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">About This Service</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
            Your Local Jewelry CAD Partner — Wherever You Are
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Virtual Goldsmith is a fully remote jewelry CAD design studio operated by master goldsmith Todd Michael. With 40+ years of hands-on goldsmithing experience, Todd provides production-ready 3D jewelry models to independent jewelers, emerging designers, and jewelry manufacturers across the United States.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Our remote-first workflow means no geographic limitations — whether you're in Nashville or New Orleans, Houston or Miami, we deliver the same precision, quality, and turnaround that your clients expect. Select your city below to learn how we serve your local market.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Any Starting Point",
                desc: "Sketch, photo, reference image, or a verbal description — any input is the right input.",
              },
              {
                title: "Production-Ready Output",
                desc: "Files your casting house can use immediately. STL, OBJ, and native CAD formats.",
              },
              {
                title: "Fast Turnaround",
                desc: "Most projects delivered in 3–7 business days. Rush service available.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 items-start">
                <CheckCircle size={20} className="text-black mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITY GRID ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">Service Areas</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Cities We Serve
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              Select your city for tailored information about jewelry CAD design services in your area.
            </p>
          </div>

          {stateOrder.map((stateAbbr) => (
            <div key={stateAbbr} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-lg font-semibold text-gray-900">{stateAbbr}</h3>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stateGroups[stateAbbr].map((city) => (
                  <Link
                    key={city.slug}
                    href={`/jewelry-cad-design-near-me/${city.slug}`}
                    className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-black hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                          <MapPin size={14} className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{city.city}</p>
                          <p className="text-gray-400 text-xs">{city.state}</p>
                        </div>
                      </div>
                      <ArrowRight
                        size={16}
                        className="text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 mt-1"
                      />
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                      {city.heroTagline}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 text-center bg-white rounded-2xl p-10 border border-gray-100">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">Don't See Your City?</p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">We Serve the Entire USA</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Our remote CAD service reaches every city, state, and ZIP code across the United States. If your location isn't listed above, reach out directly — we serve you too.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY VIRTUAL GOLDSMITH ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">Why Virtual Goldsmith</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              The Remote CAD Partner Built for Jewelers
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "40+",
                label: "Years Bench Experience",
                desc: "Real goldsmithing knowledge behind every digital model.",
              },
              {
                number: "500+",
                label: "Custom Projects Delivered",
                desc: "Rings, pendants, earrings, bracelets — every type, every complexity.",
              },
              {
                number: "3–7",
                label: "Business Day Turnaround",
                desc: "Fast, reliable delivery. Rush service available.",
              },
              {
                number: "∞",
                label: "Revision Rounds",
                desc: "We iterate until you're completely satisfied. Revisions aren't extra.",
              },
            ].map((stat) => (
              <div key={stat.number} className="text-center">
                <p className="text-5xl font-semibold text-gray-900 mb-2">{stat.number}</p>
                <p className="text-sm font-medium text-gray-900 mb-2">{stat.label}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Get a jewelry CAD design quote — Virtual Goldsmith serves nationwide"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-5">Nationwide Service</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5">
            Find Your City. Start Your Project.
          </h2>
          <p className="text-white/70 text-lg mb-12 leading-relaxed">
            Professional jewelry CAD design, wherever you are in the USA. Select your city above, or reach out directly — we'll get your project moving.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white text-white px-10 py-4 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300"
            >
              <CalendarDays size={16} /> Book Appointment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
