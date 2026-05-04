"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { VirtualInventoryProduct } from "@/app/virtual-inventory/products";

export default function VirtualInventoryDetailClient({
  product,
}: {
  product: VirtualInventoryProduct;
}) {
  const [activeImage, setActiveImage] = useState(product.mainImage);

  return (
    <div className="bg-white min-h-screen">

      {/* Back nav */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-black transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Portfolio
        </Link>
      </div>

      {/* Main product section */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: images */}
          <div>
            {/* Main image */}
            <div className="rounded-xl overflow-hidden bg-gray-50 aspect-square flex items-center justify-center">
              <img
                src={activeImage}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            {product.thumbnails.length > 1 && (
              <div className="flex gap-3 mt-4">
                {product.thumbnails.map((thumb, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(thumb)}
                    className={`rounded-lg overflow-hidden border-2 transition-all duration-200 w-20 h-20 flex-shrink-0 ${
                      activeImage === thumb
                        ? "border-black"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={thumb}
                      alt={`View ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: details */}
          <div className="flex flex-col gap-6">

            {/* Title */}
            <h1 className="text-3xl font-semibold text-gray-900">{product.title}</h1>

            {/* Short description box */}
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Overview</p>
              <p className="text-gray-700 text-sm leading-relaxed">{product.shortDescription}</p>
            </div>

            {/* Full description box */}
            <div className="border border-gray-900 rounded-lg p-5">
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-3">Full Description</p>
              <p className="text-gray-800 leading-relaxed">{product.fullDescription}</p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href={product.inquireLink}
                className="inline-block rounded-full bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors duration-300"
              >
                Inquire
              </Link>
              <Link
                href={product.startProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-black text-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-colors duration-300"
              >
                Start a Project
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Matching Items */}
      {product.matchingItems && product.matchingItems.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="border-t border-gray-200 pt-12">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Matching Items</p>
            <div className="grid grid-cols-3 gap-4">
              {product.matchingItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/portfolio/virtual-inventory/${item.id}`}
                  className="group block rounded-xl overflow-hidden border border-gray-100 hover:border-gray-300 transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm text-gray-700 font-medium">{item.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
