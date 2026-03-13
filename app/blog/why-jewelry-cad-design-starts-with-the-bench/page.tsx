import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Jewelry CAD Design Starts With the Bench, Not the Screen | Virtual Goldsmith",
  description:
    "Most jewelry CAD designers have never made a piece by hand. Here's why bench experience changes every structural decision in a 3D model — and why it matters for production.",
};

export default function ArticlePage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a66f8ad84af3158804207a_CAD%20JEWELLERY%20SERVICES%20.jpeg"
          alt="Jewelry CAD design bench experience"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="relative z-10 flex h-full items-end">
          <div className="px-10 pb-12 max-w-3xl">
            <span className="inline-block bg-white text-black text-xs font-medium px-3 py-1 rounded-full tracking-wide mb-4">
              CAD Design
            </span>
            <h1 className="text-white text-3xl md:text-5xl font-light leading-tight">
              Why Jewelry CAD Design Starts With the Bench, Not the Screen
            </h1>
          </div>
        </div>
      </section>

      {/* Meta bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-4">
            <span>By Todd Michael</span>
            <span>·</span>
            <span>March 8, 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-1 text-black text-sm hover:gap-2 transition-all">
            <ArrowLeft size={14} /> All Articles
          </Link>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">

          <p className="text-xl text-gray-800 font-medium leading-relaxed">
            There is a gap in most jewelry CAD files that you cannot see on screen. It only shows up at the casting house — in a cracked prong, a stone that does not sit correctly, a shank that is too thin to survive daily wear. It is the gap that forms when someone who has never made a piece of jewelry by hand designs one on a computer.
          </p>

          <p>
            I have spent over 40 years at the bench — cutting metal, setting stones, polishing, casting, and repairing. I have held finished pieces and traced failed ones back to their design. That experience lives in every CAD file I build, even when it is invisible to the eye.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">What the screen cannot tell you</h2>

          <p>
            A 3D model can look perfect on screen and still be unbuildable. Wall thickness that looks fine on a monitor can collapse during casting. A prong that appears sturdy in a render can shear off after six months of wear. An undercut that seems like a minor stylistic detail can make hand finishing nearly impossible.
          </p>

          <p>
            These are not abstract risks. They are things that happen — that cost jewelers money in failed castings, client returns, and remake labour. And they almost always trace back to a design decision made by someone who has never experienced the physical consequences of that decision.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">The decisions bench experience changes</h2>

          <p>
            When I build a CAD model, bench knowledge influences dozens of decisions that a screen-only designer would not think to make:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <strong className="text-gray-900">Wall thickness</strong> — not just what looks proportional on screen, but what will survive the casting process and withstand wear over years
            </li>
            <li>
              <strong className="text-gray-900">Stone seat geometry</strong> — prong height, bezel depth, and girdle clearance built to the actual stone, not approximated
            </li>
            <li>
              <strong className="text-gray-900">Sprue placement</strong> — designing with the casting flow in mind so metal fills the model correctly and porosity is minimised
            </li>
            <li>
              <strong className="text-gray-900">Polishing access</strong> — ensuring every surface can be reached by a polishing wheel or buff without destroying adjacent detail
            </li>
            <li>
              <strong className="text-gray-900">Structural load paths</strong> — understanding where stress concentrates during wear and designing accordingly, particularly in rings that take daily impact
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Why this matters for independent jewelers</h2>

          <p>
            For independent jewelers and small studios, a failed casting is not just a cost — it is a client relationship. A piece that comes back cracked, or that cannot be finished to the standard the client expects, reflects on the jeweler, not the CAD designer.
          </p>

          <p>
            This is why the source of your CAD files matters. A production-ready file should arrive already accounting for everything that happens after the model is printed or waxed. The jeweler should be able to send it to the caster with confidence — not spend time troubleshooting structural issues that should have been solved at the design stage.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">The standard every CAD file should meet</h2>

          <p>
            Every CAD file delivered by Virtual Goldsmith is built against one standard: would I be confident casting this myself? If the answer is anything other than yes, the model is not finished.
          </p>

          <p>
            That standard comes from 40+ years of knowing exactly what happens when a design does not meet it. It is not something that can be learned from software tutorials. It is learned at the bench, piece by piece, over decades — and it is what separates a file that works from one that just looks good on screen.
          </p>

        </div>

        {/* Author note */}
        <div className="mt-16 pt-10 border-t border-gray-100 flex items-start gap-5">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58798bcce5ba0379b9510_ringgold.jpeg"
              alt="Todd Michael"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Todd Michael</p>
            <p className="text-sm text-gray-500 mt-1">Master jeweler and founder of Virtual Goldsmith. 40+ years of hands-on goldsmithing experience across custom design, CAD modeling, and jewelry illustration.</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors">
            <ArrowLeft size={15} /> Back to Blog
          </Link>
          <Link href="/cad-design-services" className="inline-flex items-center gap-2 text-sm font-medium text-black border-b border-black pb-0.5 hover:gap-4 transition-all duration-300">
            Explore CAD Design Services <ArrowRight size={15} />
          </Link>
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Need Production-Ready CAD Files?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Every file from Virtual Goldsmith is built with 40+ years of bench knowledge. Ready to cast, print, or mill from day one.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="rounded-full border border-white px-8 py-3 text-white text-sm hover:bg-white hover:text-black transition-colors duration-300">
              Get a Quote
            </Link>
            <Link href="https://thegoldsmithsbench.bloom.io/schedule" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-3 text-sm hover:bg-gray-200 transition-colors duration-300">
              <CalendarDays size={15} /> Book Appointment
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
