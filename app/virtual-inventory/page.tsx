import type { Metadata } from "next";
import VirtualInventoryHeroSection from "./HeroImageSection";
import VirtualInventoryProcessSection from "./ProcessSection";
import VirtualInventoryPortfolioSection from "./PortfolioSection";

export const metadata: Metadata = {
  title: "Virtual Inventory | Virtual Goldsmith",
  description: "Transform your physical jewelry collection into a stunning digital catalog with our Virtual Inventory service. Photorealistic renders and precise CAD models for online retail and e-commerce.",
};

export default function VirtualInventoryPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans bg-white">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-2 bg-white sm:items-start">
        <VirtualInventoryHeroSection />
        <VirtualInventoryProcessSection />
        <VirtualInventoryPortfolioSection />
      </main>
    </div>
  );
}
