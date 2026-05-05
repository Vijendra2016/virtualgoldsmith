import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";
import { getProducts } from "@/lib/getProducts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Portfolio | Virtual Goldsmith",
  description: "Browse the Virtual Goldsmith portfolio — a curated collection of custom jewelry CAD designs, digital renders, and finished pieces spanning rings, pendants, bracelets, and more.",
};

export default function PortfolioPage() {
  const products = getProducts();
  return <PortfolioClient virtualInventoryProducts={products} />;
}
