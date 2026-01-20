"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const backLayerRef = useRef<HTMLDivElement>(null);
  const midLayerRef = useRef<HTMLDivElement>(null);
  const frontLayerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      // const smoother = ScrollSmoother.create({
      //   smooth: 2,
      //   effects: true,
      // });

      const split = new SplitText(headingRef.current, { type: "lines" });
      gsap.from(split.lines, {
        y: 100,
        opacity: 0,
        stagger: 0.4,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "bottom bottom",
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          // markers: true,
          scrub: true,
        },
      });

      // Background Layer
      tl.to(backLayerRef.current, {
        yPercent: 15,
        // scale: 1.1,
        ease: "none",
      });

      // Mid Layer
      tl.to(
        midLayerRef.current,
        {
          yPercent: -20,
          // ease: "power1.out",
          ease: "none",
        },
        0,
      );

      // Front Layer
      tl.to(
        frontLayerRef.current,
        {
          yPercent: -40,
          xPercent: 5,
          ease: "none",
        },
        0,
      );

      // Text fade
      tl.to(
        textRef.current,
        {
          opacity: 0,
          y: -50,
          ease: "power2.inOut",
        },
        0,
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[110vh] w-full overflow-hidden bg-black"
    >
      {/* bg image */}
      <div
        ref={backLayerRef}
        className="absolute inset-0 z-0 h-[120%] w-full -top-[10%] opacity-60"
      >
        <Image
          src="/images/about-hero-back.png"
          alt="Atmospheric Café Architecture"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* left image */}
      <div
        ref={midLayerRef}
        className="absolute left-[15%] top-[20%] z-10 aspect-4/3 w-[70vw] md:w-[40vw] shadow-2xl brightness-110"
      >
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/images/best-cafe-in-madurai.webp"
            alt="Interior Settings"
            fill
            className="object-cover rounded-sm"
            priority
          />
        </div>
      </div>

      {/* right image */}
      <div
        ref={frontLayerRef}
        className="absolute right-[10%] bottom-[15%] z-20 aspect-3/4 w-[65vw] md:w-[20vw] shadow-2xl"
      >
        <div className="relative h-full w-full overflow-hidden ">
          <Image
            src="/images/the-irish-cafe-about-2.webp"
            alt="Artistic Detail"
            fill
            className="object-cover rounded-sm"
            priority
          />
        </div>
      </div>

      {/* Minimal Editorial Text */}
      <div
        ref={headingRef}
        className="absolute left-[15%] top-[65%] z-30 max-w-sm mix-blend-difference text-white"
      >
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-none opacity-100">
          The <br /> Irish Cafe
        </h1>
        <p className="mt-4 text-xs md:text-sm tracking-[0.2em] uppercase opacity-70 border-l border-white/50 pl-4">
          Madurai • Est. 2024
        </p>
      </div>
    </section>
  );
}
