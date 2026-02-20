'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function LineRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray('.line')

      gsap.from(lines, {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out'
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-black text-white px-6"
    >
      <div className="overflow-hidden text-5xl md:text-7xl font-bold leading-tight space-y-4">
        <div className="overflow-hidden">
          <div className="line">We build powerful</div>
        </div>
        <div className="overflow-hidden">
          <div className="line">Shopify experiences</div>
        </div>
        <div className="overflow-hidden">
          <div className="line">that convert visitors</div>
        </div>
        <div className="overflow-hidden">
          <div className="line">into customers.</div>
        </div>
      </div>
    </section>
  )
}