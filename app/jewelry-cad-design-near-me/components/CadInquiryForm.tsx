'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CadInquiryFormProps {
  cityDisplayName: string;
  citySlug: string;
}

export default function CadInquiryForm({ cityDisplayName, citySlug }: CadInquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = {
      first_name: (form.elements.namedItem('first_name') as HTMLInputElement).value,
      last_name: (form.elements.namedItem('last_name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      client_type: (form.elements.namedItem('client_type') as HTMLSelectElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      location: cityDisplayName,
      source_page: `/jewelry-cad-design-near-me/${citySlug}`,
    };

    try {
      const res = await fetch('/api/send-cad-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
          <option value="Jewelry Drawing & Illustration">Jewelry Drawing &amp; Illustration</option>
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
        disabled={status === 'sending'}
        className="w-full bg-black text-white py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : <>Send My Project Details <ArrowRight size={16} /></>}
      </button>

      {status === 'success' && (
        <p className="text-center text-sm text-green-600 font-medium">
          Message sent! Todd will be in touch within 1 business day.
        </p>
      )}
      {status === 'error' && (
        <p className="text-center text-sm text-red-500">
          Something went wrong. Please try again or email contact@virtualgoldsmith.com directly.
        </p>
      )}

      <p className="text-center text-xs text-gray-400 mt-3">
        No spam. No commitment. Todd personally reviews every inquiry.
      </p>
    </form>
  );
}
