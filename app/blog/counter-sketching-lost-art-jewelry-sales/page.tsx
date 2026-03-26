import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Counter Sketching: The Lost Art That Still Closes Custom Orders | Virtual Goldsmith",
  description:
    "Counter sketching is one of the most powerful tools a jeweler can have at the sales counter. Learn how this traditional skill closes custom commissions and builds client confidence.",
};

export default function ArticlePage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg"
          alt="Counter sketching jewelry design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="relative z-10 flex h-full items-end">
          <div className="px-10 pb-12 max-w-3xl">
            <span className="inline-block bg-white text-black text-xs font-medium px-3 py-1 rounded-full tracking-wide mb-4">
              Jewelry Illustration
            </span>
            <h1 className="text-white text-3xl md:text-5xl font-light leading-tight">
              Counter Sketching: The Lost Art That Still Closes Custom Orders
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
            <span>February 24, 2026</span>
            <span>·</span>
            <span>4 min read</span>
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
            A client walks in with a vague idea — something about their grandmother's ring, a stone they inherited, a style they saw somewhere online. They are not sure exactly what they want. What happens next determines whether they leave with a commission or walk out to think about it.
          </p>

          <p>
            For a jeweler who can sketch, the answer is simple: you pick up a pencil and draw it in front of them. Right there. In two minutes, you have made the abstract tangible. The client can see their idea — respond to it, refine it, get excited about it. The commission closes.
          </p>

          <p>
            This is counter sketching. And in an industry increasingly dominated by CAD renderings and 3D prints, it remains one of the most powerful sales tools a jeweler can have.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Why the sketch works when words do not</h2>

          <p>
            Clients struggle to describe jewelry. They reach for analogies, gestures, and half-remembered references. "Kind of like this, but more delicate — and maybe the stone sits a bit higher?" That sentence could describe twenty different rings.
          </p>

          <p>
            A sketch cuts through that ambiguity immediately. When you draw in front of a client, two things happen: the design takes shape, and the conversation becomes concrete. The client stops describing and starts reacting. "Yes — but can the band be thinner?" Now you are refining, not guessing.
          </p>

          <p>
            The sketch is also a commitment mechanism. Once a client has watched their idea come to life on paper — has pointed to it, discussed it, and nodded at it — the psychological distance between idea and order collapses. The piece already feels real to them.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">What makes a counter sketch different from a rendering</h2>

          <p>
            A photorealistic CAD rendering is impressive. But it comes after the design has been decided — it is a confirmation, not a conversation. It takes days, not minutes. And it does not happen at the counter, in the moment when the client is most engaged.
          </p>

          <p>
            A counter sketch is a live design tool. It is imperfect by design — the roughness signals that this is a working drawing, not a finished proposal. That makes it easier for clients to suggest changes without feeling like they are rejecting something completed. The conversation stays fluid.
          </p>

          <p>
            The best counter sketches are not technically perfect. They are clear, proportionally accurate, and fast. They show the setting style, the stone relationship, the overall silhouette. Everything a client needs to say yes — and nothing that slows you down.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">A skill worth developing — or outsourcing</h2>

          <p>
            Counter sketching is a learnable skill, but it takes time to develop confidence. Not every jeweler has it, and that is not a failing — it is just a gap in the toolkit that can be filled.
          </p>

          <p>
            For jewelers who want the capability without the years of practice, outsourcing counter sketches and design drawings to someone with the skill is entirely practical. The key is turnaround — a counter sketch needs to arrive fast enough to keep the conversation going, whether that means same-day or next-morning delivery for remote consultations.
          </p>

          <p>
            The goal is always the same: give the client something to react to. Once they can see the piece, the sale takes care of itself.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">The bottom line</h2>

          <p>
            Digital tools have transformed jewelry design in genuine and valuable ways. But the counter sketch has not been replaced — it has just been underused. For closing custom commissions, building client confidence, and keeping design conversations alive in the moment, nothing works quite as well as a clear, fast drawing done in front of the person who is about to say yes.
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
          <Link href="/jewelry-drawing-and-illistration" className="inline-flex items-center gap-2 text-sm font-medium text-black border-b border-black pb-0.5 hover:gap-4 transition-all duration-300">
            Explore Illustration Services <ArrowRight size={15} />
          </Link>
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Need Professional Jewelry Illustrations?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Counter sketches, design proposals, and technical drawings — delivered fast by a master jeweler with 40+ years of experience.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="rounded-full border border-white px-8 py-3 text-white text-sm hover:bg-white hover:text-black transition-colors duration-300">
              Get a Quote
            </Link>
            <Link href="https://virtualgoldsmith.bloom.io/get-started-11" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-3 text-sm hover:bg-gray-200 transition-colors duration-300">
              <CalendarDays size={15} /> Book Appointment
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
