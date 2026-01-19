"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutTeaser() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-white py-24 md:py-48 px-6 md:px-12 overflow-hidden"
    >
      {/* Subtle Texture Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/clean-gray-paper.png')]" />
      </div>

      <div ref={contentRef} className="max-w-7xl mx-auto opacity-0">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
          {/* Text Content - Minimal & Confident */}
          <div className="w-full md:w-[40%] space-y-12">
            <div className="space-y-6">
              <span className="font-serif italic text-2xl md:text-3xl text-zinc-400 block">
                The Story
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-zinc-900 leading-tight tracking-tight">
                Crafted in Madurai, Inspired by{" "}
                <span className="italic">the World.</span>
              </h2>
            </div>

            <div className="space-y-8">
              <p className="font-sans text-zinc-500 text-sm md:text-lg leading-relaxed tracking-wide">
                What began as a passion for global culinary traditions has
                evolved into Madurai’s most celebrated dining destination. We
                bring the heart of Irish hospitality to the local table.
              </p>

              <Link
                href="/about"
                className="group inline-flex items-center gap-4 font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-zinc-900 font-medium"
              >
                Read our story
                <span className="w-8 h-px bg-zinc-900 group-hover:w-16 transition-all duration-500" />
              </Link>
            </div>
          </div>

          {/* Image Side - Atmospheric visual weight */}
          <div className="w-full md:w-[60%] relative">
            <div className="aspect-16/10 rounded-sm md:aspect-4/3 lg:aspect-video relative overflow-hidden shadow-[30px_30px_70px_rgba(0,0,0,0.05)] border border-zinc-50">
              <Image
                src="/images/the-irish-cafe-about.webp"
                alt="The Irish Cafe Story"
                fill
                className="object-cover transition-transform duration-3000 hover:scale-105 brightness-[0.98]"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply opacity-20 pointer-events-none" />
            </div>

            {/* Subtle Editorial Label */}
            <div className="absolute -bottom-6 right-6 hidden md:block">
              <span className="font-sans text-[9px] uppercase tracking-[0.6em] text-zinc-300 vertical-text origin-bottom-right rotate-180">
                Est. 2024 / Heritage
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
