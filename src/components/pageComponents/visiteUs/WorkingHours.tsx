"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WorkingHours = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="w-full py-24 md:py-20 overflow-hidden">
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto px-6 text-center space-y-12"
      >
        <div className="space-y-4">
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-sans text-neutral-400 font-semibold">
            Opening Hours
          </h2>
          <div className="h-px w-8 bg-neutral-200 mx-auto"></div>
        </div>

        <div className="space-y-4">
          <p className="text-5xl md:text-7xl lg:text-8xl font-serif text-neutral-900 leading-tight">
            12:00 PM <span className="text-neutral-300 mx-2 md:mx-4">–</span>{" "}
            11:00 PM
          </p>
          <p className="text-sm md:text-base uppercase tracking-[0.2em] font-sans text-neutral-500 font-medium">
            Monday — Sunday
          </p>
        </div>

        <div className="pt-8">
          <p className="text-lg md:text-xl font-serif italic text-neutral-400">
            Open All Days
          </p>
        </div>
      </div>

      {/* Subtle bottom detail */}
      <div className="mt-16 flex justify-center opacity-[0.05] pointer-events-none">
        <svg
          width="200"
          height="20"
          viewBox="0 0 200 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10C50 10 50 0 100 0C150 0 150 10 200 10"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M0 20C50 20 50 10 100 10C150 10 150 20 200 20"
            stroke="black"
            strokeWidth="0.5"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default WorkingHours;
