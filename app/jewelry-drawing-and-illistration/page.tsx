import Image from "next/image";
import CADHeroImageSection from "./HeroImageSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jewelry CAD Design Services | Virtual Goldsmith",
  description: "Professional jewelry CAD design services for jewelers and brands. Virtual Goldsmith creates accurate, production-ready CAD files for rings, pendants, and custom jewelry designs.",
};


export default function Home() {
  return (
   
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans bg-white">
      
      <main className="flex min-h-screen w-full  flex-col items-center justify-between py-2  bg-white  sm:items-start">
       <CADHeroImageSection/>
      <div className="w-full mt-8 mx-auto text-center px-6">

        {/* Top Label */}
        <p className="text-sm tracking-[0.3em] uppercase text-gray-600 mb-4">
Top-Rated CAD Design Services for Jewelry Manufacturers
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8">
          CAD Design Services
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed">
          Our CAD design services are built to meet clients at any starting point, whether it begins with a simple sketch on a napkin, a reference photo, or a collection of inspiration images. With more than 40 years of hands-on custom jewelry experience, we bring a deep understanding of how to listen carefully to each client’s goals, preferences, and practical needs before the design process even begins.

        </p>

         

      </div>
       
        
        
      </main>
    </div>
  );
}
