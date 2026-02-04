"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WoodFiredPizza() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const sideImage1Ref = useRef<HTMLDivElement>(null);
  const sideImage2Ref = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 768;

      // Main image reveal
      gsap.fromTo(
        mainImageRef.current,
        {
          scale: 1.1,
          opacity: 0,
          clipPath: isMobile ? "inset(0% 0% 0% 0%)" : "inset(10% 10% 10% 10%)",
        },
        {
          scale: 1,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainImageRef.current,
            start: "top 80%",
          },
        },
      );

      // Side images reveal
      [sideImage1Ref.current, sideImage2Ref.current].forEach((img, i) => {
        if (!img) return;
        gsap.fromTo(
          img,
          {
            y: 30,
            opacity: 0,
            scale: 1.05,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: isMobile ? 0 : 0.2 + i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
            },
          },
        );
      });

      // Text reveal
      gsap.fromTo(
        textGroupRef.current?.children || [],
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textGroupRef.current,
            start: "top 85%",
          },
        },
      );

      // Subtle parallax on scroll for desktop
      if (!isMobile) {
        gsap.to(mainImageRef.current, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-white py-24 md:py-48 px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/clean-gray-paper.png')]" />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">
        {/* Decorative Side Image 1 - Oven Flame */}
        <div className="order-2 md:order-1 md:col-span-3 self-start md:mt-20">
          <div
            ref={sideImage1Ref}
            className="relative aspect-3/4 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
          >
            <Image
              src="/images/pizza-oven.png"
              alt="Wood fired oven flames"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* Main Central Presentation */}
        <div className="order-1 md:order-2 col-span-12 md:col-span-6 flex flex-col items-center text-center space-y-10 md:space-y-12">
          <div ref={textGroupRef} className="z-10 relative">
            <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-zinc-400 mb-6 block">
              The Signature Craft
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl text-zinc-900 leading-[0.9] mb-8">
              Fire, <br />
              <span className="italic md:pl-12 text-zinc-700">
                Flour & Time
              </span>
            </h2>
            <p className="font-sans text-sm md:text-md text-zinc-600 max-w-md mx-auto leading-relaxed tracking-wider">
              Hand-stretched dough, blistering heat, and the unmistakable aroma
              of oak-fired stone. An ancient technique, perfected daily in our
              kitchen.
            </p>
          </div>

          <div
            ref={mainImageRef}
            className="relative w-full aspect-4/5 sm:aspect-square overflow-hidden rounded-sm shadow-2xl"
          >
            <Image
              src="/images/DSC00139.jpg"
              alt="Freshly baked Wood-fired Pizza"
              fill
              className="object-cover scale-105 hover:scale-100 transition-all duration-1000"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Decorative Side Image 2 - Pizza Entering Oven */}
        <div className="order-3 md:order-3 md:col-span-3 self-end md:mb-20">
          <div
            ref={sideImage2Ref}
            className="relative aspect-3/4 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
          >
            <Image
              src="/images/DSC00146.jpg"
              alt="Pizza entering wood-fired oven"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-zinc-100 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-50/30 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
