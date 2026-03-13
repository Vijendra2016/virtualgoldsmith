import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AboutAnimations from "../components/AboutAnimations";

export const metadata: Metadata = {
  title: "About | Virtual Goldsmith",
  description: "Learn about Virtual Goldsmith — over 40 years of custom jewelry experience combined with cutting-edge digital design technology.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <AboutAnimations />

      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58c897d8a8a879d5f45dd_pexels-janakukebal-30541169.jpg"
          alt="About Virtual Goldsmith"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-end">
          <div className="px-10 pb-10 max-w-4xl">
            <p className="about-hero-label text-white/60 text-xs tracking-[0.4em] uppercase mb-3">
              Our Story
            </p>
            <h1 className="about-hero-heading text-white text-3xl md:text-5xl font-light leading-tight mb-8">
              About Virtual Goldsmith
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="about-hero-cta inline-block rounded-full border border-white px-8 py-3 text-white text-sm hover:bg-white hover:text-black transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                href="https://thegoldsmithsbench.bloom.io/schedule"
                target="_blank"
                rel="noopener noreferrer"
                className="about-hero-cta inline-block rounded-full border border-white px-8 py-3 text-white text-sm hover:bg-white hover:text-black transition-colors duration-300"
              >
                Book A Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="w-full mx-auto text-center px-6">
          <p className="about-intro-label text-sm tracking-[0.3em] uppercase text-gray-600 mb-4">
            Our Story
          </p>
          <h2 className="about-intro-heading text-4xl md:text-5xl font-semibold text-gray-900 mb-8">
            Crafted Digitally. Finished by Hand.
          </h2>
          <p className="about-intro-text text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Virtual Goldsmith was created by Todd Michael as a practical tool for independent jewelers, emerging jewelry designers, and gemstone cutters looking for an edge. It provides the advantage of additional support without the burden of added labor costs.
          </p>
        </div>
      </section>

      {/* Story + Image */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="about-story-image">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg"
              alt="Goldsmith at work"
              width={600}
              height={500}
              className="rounded-2xl object-cover w-full"
            />
          </div>
          <div className="about-story-text space-y-6">
            <h3 className="text-3xl font-semibold text-gray-900">
              40+ Years at the Bench
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Drawing on decades of experience as a master jeweler, Todd combines traditional skills such as jewelry design, counter sketching, and manufacturing with modern technologies including in-house CAD design, 3D scanning, and jewelry illustration.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The result is a resource built to help jewelry professionals work smarter, design with greater precision, and bring ideas to life more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-gray-600 mb-4">What We Stand For</p>
            <h2 className="text-4xl font-semibold text-gray-900">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision",
                desc: "Every model is built to exact tolerances. We design with production in mind from the very first line, ensuring nothing gets lost in translation between digital and physical.",
              },
              {
                title: "Craftsmanship",
                desc: "We treat digital design the same way a goldsmith treats metal — with patience, skill, and respect for the material. No shortcuts. No compromises on quality.",
              },
              {
                title: "Partnership",
                desc: "We don't just take a brief and disappear. We work alongside our clients throughout the entire process, offering guidance, revisions, and honest feedback at every stage.",
              },
            ].map((v) => (
              <div key={v.title} className="about-value-card bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-section py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "40+", label: "Years of Experience" },
              { number: "500+", label: "Projects Completed" },
              { number: "100%", label: "Production-Ready Files" },
              { number: "50+", label: "Clients Worldwide" },
            ].map((s) => (
              <div key={s.label} className="about-stat-item">
                <p className="about-stat-number text-5xl font-semibold text-gray-900 mb-2">{s.number}</p>
                <p className="text-gray-600 text-sm tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="about-cta-content max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-300 text-lg mb-10">
            Whether you have a finished sketch or just an idea, we would love to hear about your vision.
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
