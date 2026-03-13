import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio | Virtual Goldsmith",
  description: "Browse the Virtual Goldsmith portfolio — a curated collection of custom jewelry CAD designs, digital renders, and finished pieces spanning rings, pendants, bracelets, and more.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
