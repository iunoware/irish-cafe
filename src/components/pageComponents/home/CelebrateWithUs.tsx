"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const eventTypes = [
  {
    title: "Intimate Proposals",
    description:
      "Soft lighting, a quiet corner, and a moment that changes everything. We help you set the stage for your 'Yes'.",
    image: "/images/wedding-events-madurai.jpg",
  },
  {
    title: "Birthday Gatherings",
    description:
      "Celebrate another year with those who matter most. Unhurried conversations over shared plates and fine coffee.",
    image: "/images/events-madurai.jpg",
  },
  {
    title: "Life's Milestones",
    description:
      "From vehicle deliveries to personal triumphs, our space is yours to celebrate the arrivals that matter.",
    image: "/images/birthday-evernts-madurai.jpg",
  },
];

const CelebrateWithUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      ).fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power2.out" },
        "-=0.6",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 md:py-20 bg-[#0a0a0a] text-white overflow-hidden relative"
    >
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] invert" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center space-y-6 mb-20 md:mb-32">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-sans text-neutral-500 font-semibold">
            Moments Matter
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight">
            Celebrate With Us
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400 text-sm md:text-lg font-sans leading-relaxed">
            Our space is more than a café; it's a backdrop for the stories you
            tell and the memories you create. Warm, flexible, and always
            inviting.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {eventTypes.map((event, index) => (
            <div key={index} className="group cursor-default">
              <div className="aspect-4/5 relative rounded-sm overflow-hidden mb-8 shadow-2xl shadow-black/50">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110 brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>
              <div className="space-y-3 px-2">
                <h3 className="text-xl md:text-2xl font-serif text-white">
                  {event.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-400 font-sans leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 md:mt-32 text-center">
          <a
            href="tel:+918148987007"
            className="inline-flex items-center gap-6 group"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-neutral-300 font-medium border-b border-neutral-800 pb-2 group-hover:border-neutral-500 transition-colors duration-500">
              Host your moment
            </span>
            <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-neutral-500 group-hover:bg-white group-hover:text-black transition-all duration-500">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CelebrateWithUs;
