import Image from "next/image";
import CADHeroImageSection from "./HeroImageSection";
import CADProcessSection from "./CADProcessSection";
import type { Metadata } from "next";
import PortfolioSection from "./PortfolioSection";

export const metadata: Metadata = {
  title: "Jewelry CAD Design Services | Virtual Goldsmith",
  description: "Professional jewelry CAD design services for jewelers and brands. Virtual Goldsmith creates accurate, production-ready CAD files for rings, pendants, and custom jewelry designs.",
};


export default function Home() {
  return (
   
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans bg-white">
      
      <main className="flex min-h-screen w-full  flex-col items-center justify-between py-2  bg-white  sm:items-start">
       <CADHeroImageSection/>
      <CADProcessSection/>
      <PortfolioSection/>
       
        
        
      </main>
    </div>
  );
}
