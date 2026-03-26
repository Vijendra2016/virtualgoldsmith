import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Jewelry Design Blog | Tips, Insights & Industry Knowledge | Virtual Goldsmith",
  description:
    "Expert jewelry design articles from master jeweler Todd Michael. CAD design tips, illustration techniques, virtual inventory insights, and industry knowledge for independent jewelers and designers.",
};

const posts = [
  {
    slug: "why-jewelry-cad-design-starts-with-the-bench",
    title: "Why Jewelry CAD Design Starts With the Bench, Not the Screen",
    excerpt:
      "Most CAD designers have never made a piece of jewelry by hand. Here's why that gap in experience shows up in the finished file — and how bench knowledge changes every structural decision.",
    category: "CAD Design",
    date: "March 8, 2026",
    readTime: "5 min read",
    image:
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a66f8ad84af3158804207a_CAD%20JEWELLERY%20SERVICES%20.jpeg",
  },
  {
    slug: "counter-sketching-lost-art-jewelry-sales",
    title: "Counter Sketching: The Lost Art That Still Closes Custom Orders",
    excerpt:
      "Before CAD, before 3D printing, there was the counter sketch — a fast, confident drawing done in front of the client to confirm the design. It still works. Here's why every jeweler should master it.",
    category: "Jewelry Illustration",
    date: "February 24, 2026",
    readTime: "4 min read",
    image:
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a678462104709c7dfa52f0_cadringdesign4.jpeg",
  },
  {
    slug: "virtual-inventory-vs-jewelry-photography",
    title: "Virtual Inventory vs. Traditional Jewelry Photography: What's Right for Your Business?",
    excerpt:
      "A photo shoot feels familiar. A 3D render feels new. But when you run the numbers — cost, consistency, colorways, and scalability — the comparison is more interesting than most jewelers expect.",
    category: "Virtual Inventory",
    date: "February 10, 2026",
    readTime: "6 min read",
    image:
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58d5f081a4da94ec4e4c6_pexels-cottonbro-9430438.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58c897d8a8a879d5f45dd_pexels-janakukebal-30541169.jpg"
          alt="Virtual Goldsmith Jewelry Design Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/10" />
        <div className="relative z-10 flex h-full items-end">
          <div className="px-10 pb-12 max-w-3xl">
            <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-3">From the Studio</p>
            <h1 className="text-white text-4xl md:text-5xl font-light leading-tight">
              The Virtual Goldsmith Blog
            </h1>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-3 gap-10">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-black text-xs font-medium px-3 py-1 rounded-full tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-400 tracking-wide uppercase mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900 leading-snug mb-3 group-hover:text-gray-600 transition-colors duration-200">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-black group-hover:gap-4 transition-all duration-300">
                  Read Article <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Work Together?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Whether you need CAD design, jewelry illustration, or a digital catalog — Virtual Goldsmith is ready to help.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="rounded-full border border-white px-8 py-3 text-white text-sm hover:bg-white hover:text-black transition-colors duration-300"
            >
              Get in Touch
            </Link>
            <Link
              href="https://virtualgoldsmith.bloom.io/get-started-11"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white text-black px-8 py-3 text-sm hover:bg-gray-200 transition-colors duration-300"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
