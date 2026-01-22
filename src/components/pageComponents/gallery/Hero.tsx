"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import Image from "next/image";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.fromTo(
        headlineRef.current,
        { y: "110%", opacity: 0 },
        { y: "0%", opacity: 1 },
      ).fromTo(subtextRef.current, { y: "40%", opacity: 0 }, { y: "0%", opacity: 1 });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[70vh] w-full flex-col justify-center bg-[url('/images/best-party-hall-restaurant.webp')] bg-center bg-cover px-6 md:px-12 lg:px-24 xl:px-32 overflow-hidden"
    >
      {/* bg texture */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 max-w-5xl">
        <div className="flex flex-col items-start space-y-6 md:space-y-10">
          {/* Headline Mask */}
          <div className="overflow-hidden py-2">
            <h1
              ref={headlineRef}
              className="font-libre text-6xl leading-[1.1] tracking-tight text-white md:text-8xl lg:text-9xl font-bold"
            >
              Our Moments
            </h1>
          </div>

          {/* Subtext Mask */}
          <div className="overflow-hidden py-1">
            <p
              ref={subtextRef}
              className="max-w-2xl font-inter text-lg leading-relaxed text-white md:text-xl md:leading-loose"
            >
              A collection of moments, spaces, and details — captured as they are.
              Unstaged, unhurried, and shaped by intention rather than spectacle.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative hairline */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-zinc-900/30 hidden lg:block" />
    </section>
  );
};

export default Hero;
