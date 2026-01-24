"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.4 },
      });

      // 1. Reveal Sequence: Eyebrow -> Headline -> Subtext
      tl.fromTo(
        eyebrowRef.current,
        { y: "150%", opacity: 0 },
        { y: "0%", opacity: 1, delay: 0.8 },
      )
        .fromTo(
          headlineRef.current,
          { y: "110%", opacity: 0 },
          { y: "0%", opacity: 1 },
          "-=1.1",
        )
        .fromTo(
          subtextRef.current,
          { y: "40%", opacity: 0 },
          { y: "0%", opacity: 1 },
          "-=1.2",
        );

      // Background smooth fade
      gsap.fromTo(
        ".hero-bg",
        { opacity: 0 },
        { opacity: 1, duration: 2.5, ease: "power2.inOut" },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[80vh] w-full flex-col justify-center bg-[url('/images/best-party-hall-restaurant.webp')] bg-center bg-cover px-6 md:px-12 lg:px-24 xl:px-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-5xl">
        <div className="flex flex-col items-start space-y-6 md:space-y-10">
          {/* Headline Mask */}
          <div className="overflow-hidden py-2">
            <h1
              ref={headlineRef}
              className="font-libre text-6xl leading-[1.1] tracking-tight text-white md:text-8xl lg:text-9xl font-bold"
            >
              Our Menu
            </h1>
          </div>

          {/* Subtext Mask */}
          <div className="overflow-hidden py-1">
            <p
              ref={subtextRef}
              className="max-w-2xl font-inter text-lg leading-relaxed text-zinc-200 md:text-xl md:leading-loose"
            >
              A selection of seasonal dishes from the best cafe in Madurai,
              handcrafted with integrity and local craft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
