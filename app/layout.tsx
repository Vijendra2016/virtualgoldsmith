import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContactButtons from "./components/FloatingContactButtons";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Virtual Goldsmith – Expert Jewelry CAD Design Services ",
  description: "Virtual Goldsmith provides professional jewelry CAD design services for rings, pendants, and custom pieces. Get precise, production-ready jewelry designs created by expert CAD designers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
         <main className="w-full">{children}

           <FloatingContactButtons />
        </main> 
        
        <Footer/>
      </body>
    </html>
  );
}
