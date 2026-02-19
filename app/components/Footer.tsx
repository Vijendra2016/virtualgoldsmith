'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden">
      
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/695d08f1b730f58126d5636f_footerimage.png" // put image in public/images
          alt="Footer background"
          fill
          priority
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

   
      <div className="mx-auto max-w-[1440px] px-6 py-24">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Newsletter */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight max-w-xl">
              Keep in the loop with the CommerceTasker® newsletter.
            </h2>

            <div className="mt-10 relative max-w-xl">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/40 pb-3 pr-12 outline-none placeholder:text-white/60"
              />
              <button className="absolute right-0 bottom-2 text-xl">
                →
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-16">
            <div>
              <h4 className="mb-6 font-semibold">Shopfy Plus</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/hire-shopify-plus-developer">Hire Shopify Plus Developer</Link></li>
                <li><Link href="#">Hire Checkout Extension Developer</Link></li>
                <li><Link href="#">Hire Shopify Function Developer</Link></li>
                <li><Link href="/hire-rust-shopify-function-developer">Hire Rust Shopify Function Developer</Link></li>
                <li><Link href="#">Hire Shopify b2b Developer</Link></li>
              </ul>
            </div>
                 
                 <div>
              <h4 className="mb-6 font-semibold">Shopify Migration Services</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/shopify-migration-services/woocommerce-to-shopify">Woocommerce to Shopify migration</Link></li>
                <li><Link href="/shopify-migration-services/magento-to-shopify">Magento to Shopify Migration</Link></li>
                <li><Link href="/shopify-migration-services/wix-to-shopify">Wix to Shopify Migration</Link></li>
                <li><Link href="/hire-rust-shopify-function-developer">Squarespace to Shopify Migration</Link></li>
                <li><Link href="#">Custom to Shopify Migration</Link></li>
              </ul>
            </div>



            <div>
              <h4 className="mb-6 font-semibold">Connect</h4>
              <ul className="space-y-3 text-sm">
             
                
                <li><Link href="https://www.linkedin.com/company/commercetasker-%E2%80%93-vited-ecommerce-experts">LinkedIn</Link></li>
                <li><Link href="https://github.com/CommerceTasker" target="_blank" rel="noopener noreferrer">GitHub</Link></li>
                   <li><Link href="#">Facebook</Link></li>
                <li><Link href="#">X</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center my-20">
          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/695f3f9ac085d28e2bccdea4_Commercetaskernewlogo-white.png"
            alt="ShopifyTasker Logo"
            width={1400}
            height={250}
            className="w-full max-w-5xl"
          />
        </div>

        {/* Bottom */}
        <div className="mt-32 flex flex-col md:flex-row justify-between gap-6 text-sm text-white/70">
          <p>©2026 CommerceTasker – Vited Ecommerce Experts.</p>
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
