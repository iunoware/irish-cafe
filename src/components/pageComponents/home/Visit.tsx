"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Visit() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-24 md:py-48 px-6 md:px-12 overflow-hidden select-none"
    >
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/clean-gray-paper.png')]" />
      </div>

      <div ref={contentRef} className="max-w-7xl mx-auto opacity-0">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          {/* Image Side - Atmospheric & Welcoming */}
          <div className="w-full lg:w-[45%] relative">
            <div className="aspect-4/5 relative overflow-hidden shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border border-zinc-100">
              <Image
                src="/images/DSC01521.JPG"
                alt="The Irish Cafe Entrance/Atmosphere"
                fill
                loading="lazy"
                className="object-cover brightness-[0.9] hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply opacity-20 pointer-events-none" />
            </div>
          </div>

          {/* Content Side - Information Hierarchy */}
          <div className="w-full lg:w-[55%] space-y-16">
            {/* Heading Block */}
            <div className="space-y-6">
              <h2 className="font-serif italic text-5xl md:text-7xl text-zinc-900 tracking-tight">
                Visit <span className="not-italic">Us</span>
              </h2>
              <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-zinc-400 font-medium">
                Experience International Dining in Madurai
              </p>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-12">
              {/* Address */}
              <div className="space-y-4">
                <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-zinc-400">
                  Location
                </span>
                <p className="font-sans text-zinc-900 text-sm md:text-base leading-relaxed tracking-wide">
                  558, 4th West Street, <br />
                  Opp to Tamil Sangam Building, <br />
                  KK Nagar, Madurai — 625020
                </p>
              </div>

              {/* Timings */}
              <div className="space-y-4">
                <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-zinc-400">
                  Hours
                </span>
                <p className="font-sans text-zinc-900 text-sm md:text-base leading-relaxed tracking-wide">
                  Monday — Sunday <br />
                  12:00 PM — 12:00 AM
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-zinc-400">
                  Contact
                </span>
                <a
                  href="tel:+918148987007"
                  className="font-sans text-zinc-900 text-sm md:text-base block hover:pl-2 transition-all duration-300"
                >
                  +91 81489 87007
                </a>
              </div>

              {/* Directions Button */}
              <div className="flex items-end">
                <a
                  href="https://www.google.com/maps/dir//The+Irish+Cafe,+558,+4th+West+St,+KK+Nagar,+Madurai,+Tamil+Nadu+625020/@9.9392224,78.1480556,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-4 font-sans text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-zinc-900 font-semibold"
                >
                  Get Directions
                  <span className="w-8 h-px bg-zinc-900 group-hover:w-12 transition-all duration-500" />
                </a>
              </div>
            </div>

            {/* Minimal Map Embed - Styled with grayscale filter */}
            <div className="w-full aspect-video md:aspect-21/9 lg:aspect-video relative overflow-hidden grayscale contrast-125 opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 border border-zinc-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.147285513837!2d78.14548077503028!3d9.9217631901799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c592ed831513%3A0xe543fa0f15c92842!2sThe%20Irish%20Cafe!5e0!3m2!1sen!2sin!4v1705658000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Closing Bon Vivant Note */}
        <div className="mt-32 pt-24 border-t border-zinc-100 text-center">
          <p className="font-serif italic text-3xl md:text-5xl text-zinc-300">
            We invite you to the <span className="not-italic text-zinc-400">table.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
