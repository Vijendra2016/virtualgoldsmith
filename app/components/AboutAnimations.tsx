"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Hero content
      gsap.from(".about-hero-label", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });
      gsap.from(".about-hero-heading", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });
      gsap.from(".about-hero-cta", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Intro section
      gsap.from(".about-intro-label", {
        scrollTrigger: { trigger: ".about-intro-label", start: "top 85%" },
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });
      gsap.from(".about-intro-heading", {
        scrollTrigger: { trigger: ".about-intro-heading", start: "top 85%" },
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
      gsap.from(".about-intro-text", {
        scrollTrigger: { trigger: ".about-intro-text", start: "top 85%" },
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Story image + text
      gsap.from(".about-story-image", {
        scrollTrigger: { trigger: ".about-story-image", start: "top 80%" },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".about-story-text", {
        scrollTrigger: { trigger: ".about-story-text", start: "top 80%" },
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Values cards
      gsap.from(".about-value-card", {
        scrollTrigger: { trigger: ".about-values-section", start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Stats
      gsap.from(".about-stat-item", {
        scrollTrigger: { trigger: ".about-stats-section", start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Count up stat numbers
      document.querySelectorAll(".about-stat-number").forEach((el) => {
        const raw = el.textContent?.replace(/[^0-9]/g, "") ?? "0";
        const suffix = el.textContent?.replace(/[0-9]/g, "") ?? "";
        const target = parseInt(raw, 10);
        if (!target) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          scrollTrigger: { trigger: ".about-stats-section", start: "top 80%" },
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate() {
            el.textContent = Math.round(obj.val) + suffix;
          },
        });
      });

      // CTA section
      gsap.from(".about-cta-content", {
        scrollTrigger: { trigger: ".about-cta-content", start: "top 85%" },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

    });

    return () => ctx.revert();
  }, []);

  return null;
}
