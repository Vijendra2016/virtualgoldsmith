import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, CheckCircle, ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import ServiceAnimations from "../../components/ServiceAnimations";
import { cities, getCityBySlug, getAllCitySlugs } from "../cities";

const BOOKING_URL = "https://thegoldsmithsbench.bloom.io/schedule";
const HERO_IMAGE =
  "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58c897d8a8a879d5f45dd_pexels-janakukebal-30541169.jpg";
const BASE_URL = "https://virtualgoldsmith.com";

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const cityData = getCityBySlug(citySlug);
  if (!cityData) return { title: "Not Found" };

  return {
    title: `Jewelry CAD Design Services Near ${cityData.displayName} | Virtual Goldsmith`,
    description: cityData.metaDescription,
    keywords: [
      `jewelry CAD design ${cityData.city}`,
      `jewelry CAD design near me ${cityData.stateAbbr}`,
      `3D jewelry modeling ${cityData.city}`,
      `custom jewelry CAD ${cityData.city} ${cityData.stateAbbr}`,
      `jewelry CAD designer near ${cityData.city}`,
      `STL file jewelry ${cityData.city}`,
      `jewelry 3D printing ${cityData.city}`,
      `custom ring CAD ${cityData.city}`,
      `engagement ring CAD design ${cityData.city}`,
      `jewelry casting file ${cityData.stateAbbr}`,
      "Virtual Goldsmith",
      "Todd Michael jeweler",
    ],
    alternates: {
      canonical: `${BASE_URL}/jewelry-cad-design-near-me/${cityData.slug}`,
    },
    openGraph: {
      title: `Jewelry CAD Design Services Near ${cityData.displayName} | Virtual Goldsmith`,
      description: cityData.metaDescription,
      url: `${BASE_URL}/jewelry-cad-design-near-me/${cityData.slug}`,
      images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: `Jewelry CAD design services near ${cityData.displayName}` }],
    },
  };
}

const features = [
  {
    title: "Sketch-to-CAD Conversion",
    description:
      "Any starting point works — pencil sketch, phone photo, magazine reference, or verbal description. We turn concepts into precise 3D models.",
  },
  {
    title: "Production-Ready Files",
    description:
      "STL, OBJ, and native CAD formats built for lost-wax casting, resin printing, and CNC milling. Delivered ready to send to your caster.",
  },
  {
    title: "Precise Stone Seat Modeling",
    description:
      "Prong, bezel, channel, pavé, and flush settings built to exact stone dimensions — every seat modeled to actual girdle diameter and depth.",
  },
  {
    title: "Unlimited Revision Rounds",
    description:
      "We iterate until the model is exactly right. Revisions are part of the process, not an add-on cost.",
  },
  {
    title: "40+ Years Manufacturing Insight",
    description:
      "Wall thickness, undercuts, sprue placement, polishing access — manufacturing realities are built in from the first line.",
  },
  {
    title: "Fast, Reliable Turnaround",
    description:
      "Most projects completed in 3–7 business days. Rush service available when your client deadline is tight.",
  },
];

const steps = [
  {
    number: "01",
    title: "Share Your Reference",
    description:
      "Send a sketch, photo, or description. Include stone sizes, metal preferences, and any specific details that matter.",
  },
  {
    number: "02",
    title: "Brief & Scope",
    description:
      "Todd reviews your project, asks clarifying questions, and confirms the approach and turnaround timeline before work begins.",
  },
  {
    number: "03",
    title: "3D Modeling & Revisions",
    description:
      "You receive screenshots or renders for review. Revisions continue until every detail matches your vision perfectly.",
  },
  {
    number: "04",
    title: "Final Production Files",
    description:
      "Production-ready files in your required format — sized and structured for your casting house, printer, or CNC mill.",
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
    alt: "3D CAD ring design — halo engagement ring model",
    className: "h-80",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a6783f3ecb245ade44d99e_cadringdesign2.jpeg",
    alt: "Jewelry CAD model — eternity band 3D design",
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

const sharedFaqs = [
  {
    question: "What file formats do you deliver for jewelry CAD design?",
    answer:
      "We deliver STL, OBJ, and native CAD files (3DM for Rhino, ZPR for ZBrush, or whichever format your casting house or 3D printer requires). Just let us know what you need and we'll deliver accordingly.",
  },
  {
    question: "Do I need to provide a sketch to start a CAD project?",
    answer:
      "Not at all. We work from any starting point — a rough sketch, a photograph, an online reference, or a verbal description. Todd's 40+ years of goldsmithing experience means he can translate almost any vision into an accurate 3D model.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Multiple revision rounds are included in every project. Our goal is a model you're completely satisfied with before the final files are sent. We iterate until it matches your vision precisely.",
  },
  {
    question: "How long does a typical CAD project take?",
    answer:
      "Most standard projects — rings, pendants, simple earrings — are completed in 3–7 business days. Complex pieces with intricate stonework or custom mechanisms may take longer. Rush turnaround is available on request.",
  },
  {
    question: "Can you model an existing piece for reproduction or redesign?",
    answer:
      "Yes. Send the physical piece, a set of photographs, or precise measurements and we'll build an accurate digital replica — ideal for reproduction, resizing, updating a vintage design, or creating a matching companion piece.",
  },
];

export default async function CityCADPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const cityData = getCityBySlug(citySlug);
  if (!cityData) notFound();

  const allFaqs = [...cityData.cityFaqs, ...sharedFaqs];

  // ── SCHEMAS ──────────────────────────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Jewelry CAD Design Near Me",
        item: `${BASE_URL}/jewelry-cad-design-near-me`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Jewelry CAD Design — ${cityData.displayName}`,
        item: `${BASE_URL}/jewelry-cad-design-near-me/${cityData.slug}`,
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Virtual Goldsmith",
    url: BASE_URL,
    email: "todd@virtualgoldsmith.com",
    logo: `${BASE_URL}/logo.png`,
    description:
      "Professional jewelry CAD design, illustration, and virtual inventory services by master goldsmith Todd Michael — 40+ years of bench experience.",
    founder: {
      "@type": "Person",
      name: "Todd Michael",
      jobTitle: "Master Goldsmith & CAD Designer",
    },
    sameAs: [],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Jewelry CAD Design Services — ${cityData.displayName}`,
    description: `Professional jewelry CAD design services for ${cityData.city}-area jewelers and designers. Production-ready 3D models, STL and native CAD files by master goldsmith Todd Michael.`,
    url: `${BASE_URL}/jewelry-cad-design-near-me/${cityData.slug}`,
    email: "todd@virtualgoldsmith.com",
    priceRange: "$$",
    serviceType: "Jewelry CAD Design",
    areaServed: [
      {
        "@type": "City",
        name: cityData.city,
        addressRegion: cityData.stateAbbr,
        addressCountry: "US",
      },
      {
        "@type": "AdministrativeArea",
        name: cityData.state,
      },
    ],
    provider: {
      "@type": "Person",
      name: "Todd Michael",
      description: "Master Goldsmith with 40+ years of bench experience",
      worksFor: {
        "@type": "Organization",
        name: "Virtual Goldsmith",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Jewelry CAD Design Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Ring CAD Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engagement Ring 3D Modeling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pendant CAD Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sketch-to-CAD Conversion" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heirloom Jewelry Reproduction" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "STL File Production for 3D Printing" } },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* ── SCHEMA INJECTION ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ServiceAnimations />

      {/* ── BREADCRUMB ── */}
      <nav className="bg-white border-b border-gray-100 px-6 py-3">
        <div className="max-w-6xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <li>
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <Link href="/jewelry-cad-design-near-me" className="hover:text-black transition-colors">
                Jewelry CAD Design Near Me
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-900 font-medium">{cityData.displayName}</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt={`Jewelry CAD design services near ${cityData.displayName} by Virtual Goldsmith`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <div className="relative z-10 w-full max-w-5xl px-8 md:px-14 pb-16">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={14} className="text-white/60" />
            <p className="svc-hero-label opacity-0 text-white/60 text-xs tracking-[0.4em] uppercase">
              {cityData.displayName}
            </p>
          </div>
          <h1 className="svc-hero-heading opacity-0 text-white text-4xl md:text-6xl font-light leading-tight mb-5">
            Jewelry CAD Design<br />
            <span className="font-semibold">Near {cityData.displayName}</span>
          </h1>
          <p className="svc-hero-sub opacity-0 text-white/75 text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
            {cityData.heroTagline}
          </p>
          <p className="svc-hero-sub opacity-0 text-white/65 text-base max-w-2xl mb-10 leading-relaxed">
            Production-ready 3D jewelry models — built by master goldsmith Todd Michael with 40+ years at the bench. STL, OBJ, and native CAD files ready for casting, printing, or CNC.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#get-a-quote"
              className="svc-hero-cta opacity-0 inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Get a Free Quote <ArrowRight size={16} />
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="svc-hero-cta opacity-0 inline-flex items-center gap-2 border border-white text-white px-8 py-3.5 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300"
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
          <span>Serving {cityData.displayName}</span>
        </div>
      </div>

      {/* ── LOCAL INTRO ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="svc-intro-text opacity-0">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">
              Serving {cityData.displayName}
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              {cityData.localIntroHeading}
            </h2>
            {cityData.localIntroParagraphs.map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">
                {para}
              </p>
            ))}
            <ul className="mt-6 space-y-2 mb-8">
              {cityData.localHighlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-black mt-0.5 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-black border-b border-black pb-1 hover:gap-4 transition-all duration-300"
            >
              View CAD Portfolio <ArrowRight size={15} />
            </Link>
          </div>
          <div className="svc-intro-image opacity-0 relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg"
              alt={`Jewelry CAD design for ${cityData.city} jewelers — custom ring model by Virtual Goldsmith`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── LEAD CAPTURE FORM ── */}
      <section
        id="get-a-quote"
        className="py-24 px-6 bg-gray-950 text-white"
        aria-label="Get a free jewelry CAD design quote"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Value Copy */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-white/50 mb-4">
              Free Quote · No Commitment
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
              Get Your Free Jewelry CAD Quote
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Tell us about your project and Todd will personally review it and respond with a quote, timeline, and any questions — usually within one business day.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: "01",
                  title: "Any Starting Point",
                  desc: "Sketch, photo, reference image, or just a description. Any input works.",
                },
                {
                  icon: "02",
                  title: "Production-Ready Output",
                  desc: "STL, OBJ, and native CAD files ready for your casting house or 3D printer.",
                },
                {
                  icon: "03",
                  title: "40+ Years of Bench Experience",
                  desc: "Manufacturing insight built into every model from the first revision.",
                },
                {
                  icon: "04",
                  title: "3–7 Business Day Turnaround",
                  desc: "Rush delivery available for {city} clients with tight deadlines.".replace(
                    "{city}",
                    cityData.city
                  ),
                },
              ].map((item) => (
                <div key={item.icon} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold text-white/60">{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-white/50 text-sm mb-3">Prefer to talk first?</p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300"
              >
                <CalendarDays size={16} /> Book a Free Consultation
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Start Your {cityData.city} CAD Project
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              Todd personally reviews every inquiry and responds within 1 business day.
            </p>

            <form
              action="https://formsubmit.co/todd@virtualgoldsmith.com"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value={`${BASE_URL}/contact?sent=true`}
              />
              <input
                type="hidden"
                name="_subject"
                value={`New CAD Quote Request — ${cityData.displayName}`}
              />
              <input
                type="hidden"
                name="location"
                value={cityData.displayName}
              />
              <input type="hidden" name="source_page" value={`/jewelry-cad-design-near-me/${cityData.slug}`} />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="First name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    placeholder="Last name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  I Am a...
                </label>
                <select
                  name="client_type"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                >
                  <option value="">Select your role...</option>
                  <option value="Independent Jeweler">Independent Jeweler</option>
                  <option value="Jewelry Designer">Jewelry Designer</option>
                  <option value="Jewelry Manufacturer">Jewelry Manufacturer / Casting House</option>
                  <option value="Retail Jewelry Store">Retail Jewelry Store</option>
                  <option value="Private Client">Private Client (Custom Commission)</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed
                </label>
                <select
                  name="service"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                >
                  <option value="">Select a service...</option>
                  <option value="CAD Design">Jewelry CAD Design</option>
                  <option value="Jewelry Drawing & Illustration">Jewelry Drawing & Illustration</option>
                  <option value="Virtual Inventory">Virtual Inventory / 3D Renders</option>
                  <option value="Multiple Services">Multiple Services</option>
                  <option value="Not Sure">Not Sure — Need Guidance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={`Describe your project — piece type, style, stone sizes, any references, and your timeline. The more detail you share, the faster Todd can respond with an accurate quote.`}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Send My Project Details <ArrowRight size={16} />
              </button>

              <p className="text-center text-xs text-gray-400 mt-3">
                No spam. No commitment. Todd personally reviews every inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="svc-features-section bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">What's Included</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Everything {cityData.city} Jewelers Need
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="svc-feature-card opacity-0 bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Built for {cityData.city}'s Jewelry Professionals
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Independent Jewelers",
                description: `Scale your custom order capacity without adding bench staff. Get production-ready CAD files for client commissions, repairs, and reproductions — built for ${cityData.city}'s market.`,
              },
              {
                title: "Emerging Jewelry Designers",
                description: `Turn sketches and concepts into manufacturable 3D models without investing in expensive CAD software. ${cityData.city}'s design community deserves professional CAD support.`,
              },
              {
                title: "Jewelry Manufacturers & Casting Houses",
                description:
                  "Receive fully prepared STL and CAD files built with manufacturing tolerances in mind. Less rework, fewer rejections, more efficient production runs.",
              },
            ].map((a) => (
              <div
                key={a.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Simple. Collaborative. Precise.
            </h2>
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Jewelry CAD Design Samples
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className={`svc-gallery-img opacity-0 relative overflow-hidden rounded-2xl ${img.className}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-black border-b border-black pb-1 hover:gap-4 transition-all duration-300"
            >
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Questions About Jewelry CAD Design Near {cityData.displayName}
            </h2>
          </div>
          <div>
            {allFaqs.map((faq) => (
              <div
                key={faq.question}
                className="svc-faq-item opacity-0 border-b border-gray-200 py-6"
              >
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER CITIES ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">Also Serving</p>
            <h2 className="text-2xl font-semibold text-gray-900">
              Jewelry CAD Design Services Across the USA
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {cities
              .filter((c) => c.slug !== cityData.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/jewelry-cad-design-near-me/${c.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700 hover:border-black hover:text-black transition-colors duration-200"
                >
                  <MapPin size={12} />
                  {c.displayName}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt={`Start your jewelry CAD design project — serving ${cityData.displayName}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="svc-cta-content opacity-0">
            <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-5">
              Serving {cityData.displayName}
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5">
              Ready to Start Your {cityData.city} CAD Project?
            </h2>
            <p className="text-white/70 text-lg mb-12 leading-relaxed">
              Share your sketch, photo, or idea and Todd will turn it into a production-ready 3D jewelry model — built to manufacture from day one. Serving {cityData.displayName} and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#get-a-quote"
                className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Get a Free Quote <ArrowRight size={16} />
              </a>
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
        </div>
      </section>
    </>
  );
}
