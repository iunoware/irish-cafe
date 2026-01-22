"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HandDrawnPatterns = () => (
  <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
    {/* Top Right Flourish */}
    <svg
      className="absolute top-4 right-4 w-24 h-24"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M10,80 Q30,20 80,10 M20,70 Q40,40 70,30"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="85" cy="15" r="2" fill="currentColor" />
      <circle cx="75" cy="35" r="1.5" fill="currentColor" />
    </svg>

    {/* Bottom Left Floral Motif */}
    <svg
      className="absolute bottom-6 left-6 w-32 h-32"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
    >
      <path d="M10,90 Q50,80 60,40 Q70,70 90,60" strokeWidth="1" strokeLinecap="round" />
      <circle cx="60" cy="40" r="3" fill="currentColor" opacity="0.5" />
      <path
        d="M55,35 Q60,20 65,35 Q80,40 65,45 Q60,60 55,45 Q40,40 55,35"
        strokeWidth="1"
      />
    </svg>

    {/* Scattered Sparkles */}
    <svg
      className="absolute top-1/4 left-12 w-6 h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12,2 L13,11 L22,12 L13,13 L12,22 L11,13 L2,12 L11,11 L12,2 Z" />
    </svg>
    <svg
      className="absolute top-1/2 right-16 w-4 h-4"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12,2 L13,11 L22,12 L13,13 L12,22 L11,13 L2,12 L11,11 L12,2 Z" />
    </svg>
    <svg
      className="absolute bottom-1/3 left-1/4 w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12,2 L13,11 L22,12 L13,13 L12,22 L11,13 L2,12 L11,11 L12,2 Z" />
    </svg>

    {/* Hand-drawn underline-ish strokes */}
    <svg
      className="absolute top-1/3 right-1/4 w-20 h-4"
      viewBox="0 0 100 20"
      fill="none"
      stroke="currentColor"
    >
      <path d="M5,10 Q50,15 95,8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

export default function WelcomeBoard() {
  const containerRef = useRef<HTMLElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        boardRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
      className="relative py-24 md:py-48 px-6 overflow-hidden flex items-center justify-center select-text"
    >
      {/* Quiet Surrounding Space Texture */}
      {/* <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/clean-gray-paper.png')]" />
      </div> */}

      {/* The Physical Board Object */}
      <div
        ref={boardRef}
        className="relative z-10 w-full max-w-lg md:max-w-2xl opacity-0 transform-gpu"
      >
        {/* Wooden Frame - Deep, Rich, Textured Brown */}
        <div className="bg-[#2a1b0e] bg-[url('https://www.transparenttextures.com/patterns/paper-3.png')] p-4 md:p-8 rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4),0_0_20px_rgba(42,27,14,0.3)] border-b-12 border-r-[6px] border-[#1a1109] relative">
          {/* Inner Chalkboard Surface */}
          <div className="relative bg-[#181818] rounded-sm py-16 md:py-28 px-8 md:px-16 border-[3px] border-zinc-900 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden text-zinc-100">
            {/* Pattern & Texture Layer */}
            <div className="absolute inset-0 opacity-100 mix-blend-overlay pointer-events-none">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-1.png')] invert" />
            </div>

            {/* Hand-drawn Decorative Patterns */}
            <HandDrawnPatterns />

            {/* Content Group */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Handwritten Welcome phrase */}
              <div className="mb-14 text-center">
                <span className="font-serif italic text-5xl md:text-7xl block transform -rotate-2 leading-none mb-3 tracking-tight">
                  Welcome
                </span>
                <span className="font-serif text-xl md:text-2xl text-zinc-400 block rotate-1">
                  Please, come on in.
                </span>
              </div>

              {/* Main invitation sentence */}
              <div className="mb-20 text-center max-w-sm">
                <p className="font-sans text-xs md:text-sm uppercase tracking-[0.4em] text-zinc-300 leading-relaxed font-light">
                  A sanctuary for those <br />
                  who appreciate{" "}
                  <span className="text-zinc-100 font-medium">unhurried</span> <br />
                  flavours & comfort.
                </p>
                <div className="mt-8 flex justify-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-zinc-600" />
                  <div className="w-1 h-1 rounded-full bg-zinc-600" />
                  <div className="w-1 h-1 rounded-full bg-zinc-600" />
                </div>
              </div>

              {/* Functional Details - Chalkboard Style */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-16">
                <div className="space-y-6 text-center md:text-left">
                  <div className="space-y-1">
                    <span className="font-serif italic text-lg text-zinc-500">
                      Every Day
                    </span>
                    <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-zinc-200">
                      12:00 PM — 12:00 AM
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-serif italic text-lg text-zinc-500">
                      Find Us
                    </span>
                    <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-zinc-200 leading-relaxed">
                      558, 4th West Street, <br /> KK Nagar, Madurai
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-end justify-between space-y-8">
                  <div className="space-y-1 text-center md:text-right">
                    <span className="font-serif italic text-lg text-zinc-500">
                      Say Hello
                    </span>
                    <a
                      href="tel:+918148987007"
                      className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-zinc-200 block hover:text-white transition-colors duration-300"
                    >
                      +91 81489 87007
                    </a>
                  </div>

                  {/* Written CTA link */}
                  <a
                    href="https://www.google.com/maps/dir//The+Irish+Cafe,+558,+4th+West+St,+KK+Nagar,+Madurai,+Tamil+Nadu+625020/@9.9392224,78.1480556,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 text-zinc-100 transform hover:scale-105 transition-all duration-500"
                  >
                    <span className="font-serif italic text-2xl md:text-3xl tracking-tight group-hover:text-zinc-400 transition-colors">
                      Find the way
                    </span>
                    <svg
                      width="40"
                      height="14"
                      viewBox="0 0 40 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform group-hover:translate-x-2 transition-transform duration-700"
                    >
                      <path
                        d="M1 7H38M38 7L32 1M38 7L32 13"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Board Depth detail - Conceptual floor reflection */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] h-12 bg-black opacity-10 blur-3xl pointer-events-none rounded-full" />
      </div>

      {/* Ground Level Branding */}
      <div className="absolute bottom-12 left-0 right-0 text-center">
        <span className="font-sans text-[8px] uppercase tracking-[0.9em] text-zinc-800">
          The Irish Cafe — Heritage
        </span>
      </div>
    </section>
  );
}
