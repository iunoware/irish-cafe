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
      className="relative flex min-h-[70vh] w-full flex-col justify-center bg-black px-6 md:px-12 lg:px-24 xl:px-32 overflow-hidden"
    >
      {/* Editorial Background Texture */}
      <div className="hero-bg absolute inset-0 z-0 opacity-0">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl">
        <div className="flex flex-col items-start space-y-6 md:space-y-10">
          {/* Eyebrow Mask */}
          {/* <div className="overflow-hidden py-1">
            <div className="flex items-center gap-4">
              <div className="h-px w-6 bg-zinc-800" />
              <span
                ref={eyebrowRef}
                className="block font-inter text-xs font-bold tracking-[0.5em] text-zinc-500 uppercase md:text-sm"
              >
                MENU
              </span>
            </div>
          </div> */}

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
              className="max-w-2xl font-inter text-lg leading-relaxed text-zinc-400 md:text-xl md:leading-loose"
            >
              A selection of our kitchen’s traditionally prepared seasonal
              dishes, handcrafted with integrity and local craft.
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
