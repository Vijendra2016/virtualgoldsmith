"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── HERO ──────────────────────────────────────────────
      const heroTl = gsap.timeline({ delay: 0.2 });
      heroTl
        .from(".hero-label", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(".hero-heading", {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        }, "-=0.4")
        .from(".hero-sub", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.5")
        .from(".hero-cta", {
          y: 20,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
        }, "-=0.4")
        .from(".hero-scroll", {
          opacity: 0,
          duration: 0.6,
        }, "-=0.2");

      // ── TAGLINE STRIP ─────────────────────────────────────
      gsap.from(".tagline-strip", {
        scrollTrigger: {
          trigger: ".tagline-strip",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // ── INTRO SECTION ─────────────────────────────────────
      gsap.from(".intro-text", {
        scrollTrigger: {
          trigger: ".intro-text",
          start: "top 80%",
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".intro-image", {
        scrollTrigger: {
          trigger: ".intro-image",
          start: "top 80%",
        },
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // ── SERVICES CARDS ────────────────────────────────────
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // ── STATS ─────────────────────────────────────────────
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Animate stat numbers counting up
      document.querySelectorAll(".stat-number").forEach((el) => {
        const raw = el.textContent?.replace(/[^0-9]/g, "") ?? "0";
        const suffix = el.textContent?.replace(/[0-9]/g, "") ?? "";
        const target = parseInt(raw, 10);
        if (!target) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 80%",
          },
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate() {
            el.textContent = Math.round(obj.val) + suffix;
          },
        });
      });

      // ── PORTFOLIO IMAGES ──────────────────────────────────
      gsap.from(".portfolio-img", {
        scrollTrigger: {
          trigger: ".portfolio-section",
          start: "top 80%",
        },
        scale: 0.92,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      // ── WHY US CARDS ──────────────────────────────────────
      gsap.from(".why-card", {
        scrollTrigger: {
          trigger: ".why-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // ── PROCESS STEPS ─────────────────────────────────────
      gsap.from(".process-step", {
        scrollTrigger: {
          trigger: ".process-section",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.18,
        ease: "power3.out",
      });

      // ── SECTION HEADINGS ──────────────────────────────────
      gsap.utils.toArray<HTMLElement>(".section-heading").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 35,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      });

      // ── FINAL CTA ─────────────────────────────────────────
      gsap.from(".final-cta", {
        scrollTrigger: {
          trigger: ".final-cta",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

    });

    return () => ctx.revert();
  }, []);

  return null;
}
