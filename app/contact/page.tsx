import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Virtual Goldsmith",
  description: "Get in touch with Virtual Goldsmith. Reach out for CAD design services, jewelry illustration, virtual inventory, or to book a consultation.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69a58c897d8a8a879d5f45dd_pexels-janakukebal-30541169.jpg"
          alt="Contact Virtual Goldsmith"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex h-full items-end">
          <div className="px-10 pb-10 max-w-4xl">
            <p className="text-white/70 text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
            <h1 className="text-white text-3xl md:text-4xl font-light leading-tight">
              Let's Start a Conversation
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Info */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Ready to bring your design to life?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Whether you have a rough sketch, a detailed brief, or just an idea in your head — reach out and Todd will personally review your project and get back to you promptly.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a
                    href="mailto:todd@virtualgoldsmith.com"
                    className="text-gray-900 font-medium hover:underline"
                  >
                    todd@virtualgoldsmith.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <CalendarDays size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Book a Consultation</p>
                  <Link
                    href="https://thegoldsmithsbench.bloom.io/schedule"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 font-medium hover:underline"
                  >
                    Schedule an appointment →
                  </Link>
                </div>
              </div>
            </div>

            {/* Book Appointment CTA */}
            <Link
              href="https://thegoldsmithsbench.bloom.io/schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              <CalendarDays size={18} />
              Book an Appointment
            </Link>
          </div>

          {/* Right — Form */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-8">Send a Message</h3>

            <form
              action="https://formsubmit.co/todd@virtualgoldsmith.com"
              method="POST"
              className="space-y-6"
            >
              {/* Disable captcha redirect */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://virtualgoldsmith.com/contact?sent=true" />
              <input type="hidden" name="_subject" value="New message from Virtual Goldsmith website" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="Todd"
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
                    placeholder="Michael"
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
                  Service You're Interested In
                </label>
                <select
                  name="service"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                >
                  <option value="">Select a service...</option>
                  <option value="CAD Design">CAD Design</option>
                  <option value="Jewelry Drawing & Illustration">Jewelry Drawing & Illustration</option>
                  <option value="Virtual Inventory">Virtual Inventory</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project or idea..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Prefer to Talk Directly?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Book a call and Todd will walk you through the process, answer your questions, and help you figure out the best path forward.
          </p>
          <Link
            href="https://thegoldsmithsbench.bloom.io/schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-10 py-4 text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
          >
            <CalendarDays size={18} />
            Book an Appointment
          </Link>
        </div>
      </section>

    </div>
  );
}
