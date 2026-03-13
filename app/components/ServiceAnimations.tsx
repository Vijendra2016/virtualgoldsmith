"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations — on mount
      gsap.fromTo(
        ".svc-hero-label",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" }
      );

      gsap.fromTo(
        ".svc-hero-heading",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.5, ease: "power3.out" }
      );

      gsap.fromTo(
        ".svc-hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: "power3.out" }
      );

      gsap.fromTo(
        ".svc-hero-cta",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.9,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      // Intro section — scroll-triggered
      gsap.fromTo(
        ".svc-intro-text",
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".svc-intro-text",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".svc-intro-image",
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".svc-intro-image",
            start: "top 85%",
          },
        }
      );

      // Feature cards
      gsap.fromTo(
        ".svc-feature-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".svc-features-section",
            start: "top 80%",
          },
        }
      );

      // Process steps
      gsap.fromTo(
        ".svc-process-step",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".svc-process-section",
            start: "top 80%",
          },
        }
      );

      // Gallery images
      gsap.fromTo(
        ".svc-gallery-img",
        { opacity: 0, scale: 0.92 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".svc-gallery-section",
            start: "top 80%",
          },
        }
      );

      // FAQ items
      gsap.fromTo(
        ".svc-faq-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".svc-faq-section",
            start: "top 80%",
          },
        }
      );

      // CTA content
      gsap.fromTo(
        ".svc-cta-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".svc-cta-content",
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return null;
}
