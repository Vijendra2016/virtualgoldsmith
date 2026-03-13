import type { Metadata } from "next";
import { Tenor_Sans, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContactButtons from "./components/FloatingContactButtons";

const tenorSans = Tenor_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const raleway = Raleway({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Virtual Goldsmith – Expert Jewelry CAD Design Services",
  description: "Virtual Goldsmith provides professional jewelry CAD design services for rings, pendants, and custom pieces. Get precise, production-ready jewelry designs created by expert CAD designers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tenorSans.variable} ${raleway.variable} antialiased`}>
        <Navbar />
        <main className="w-full">
          {children}
          <FloatingContactButtons />
        </main>
        <Footer />
      </body>
    </html>
  );
}
