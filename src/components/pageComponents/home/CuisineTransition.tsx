"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CuisineTransition() {
  const containerRef = useRef<HTMLElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Sequence: Image 1 Reveal
      tl.fromTo(
        img1Ref.current,
        { clipPath: "inset(20% 20% 20% 20%)", opacity: 0, scale: 1.15 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.inOut",
        }
      );

      // Sequence: Image 2 Slide In
      tl.fromTo(
        img2Ref.current,
        { x: "-30%", y: "20%", opacity: 0, scale: 0.9, rotate: -5 },
        {
          x: "0%",
          y: "0%",
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Sequence: Image 3 Reveal
      tl.fromTo(
        img3Ref.current,
        { y: "40%", opacity: 0, scale: 1.1 },
        { y: "0%", opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.7"
      );

      // Sequence: Text Fade In
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-white overflow-hidden flex items-center justify-center px-6 md:px-0"
    >
      {/* Subtle Grain Background */}
      <div className="absolute inset-0 opacity-80 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/xv.png')] scale-150" />
      </div>

      <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
        {/* Image 1: Primary Foundation */}
        <div
          ref={img1Ref}
          className="absolute z-10 w-[85%] md:w-[75%] aspect-video md:aspect-21/10 overflow-hidden"
        >
          <Image
            src="/images/irish.JPG"
            alt="Cuisine Foundation"
            fill
            className="object-cover "
            priority
          />
        </div>

        {/* Image 2: Secondary Overlap */}
        <div
          ref={img2Ref}
          className="absolute z-20 left-[5%] md:left-[10%] bottom-[15%] md:bottom-[10%] w-[50%] md:w-[35%] aspect-4/5 overflow-hidden border border-white/5"
        >
          <Image
            src="/images/italian.JPG"
            alt="Cuisine Layer"
            fill
            className="object-cover  shadow-2xl"
          />
        </div>

        {/* Image 3: Detail Texture */}
        <div
          ref={img3Ref}
          className="absolute z-30 right-[5%] md:right-[15%] top-[15%] md:top-[12%] w-[45%] md:w-[25%] aspect-square overflow-hidden border border-white/5"
        >
          <Image
            src="/images/american.JPG"
            alt="Cuisine Detail"
            fill
            className="object-cover  shadow-2xl"
          />
        </div>

        {/* Editorial Text Overlay */}
        <div
          ref={textRef}
          className="absolute bottom-12 md:bottom-10 right-6 md:-right-10 z-40 text-right space-y-2"
        >
          <span className="font-sans text-[10px] md:text-sm uppercase tracking-[0.5em] text-transparent bg-clip-text font-bold bg-linear-to-r from-gray-400 to-gray-600 ">
            A meeting of global flavours.
          </span>
          <h2 className="font-serif text-3xl md:text-6xl text-black tracking-tighter leading-tight">
            Where cuisines <span className="italic">converse.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
