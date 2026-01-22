"use strict";

"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// const Hero = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const eyebrowRef = useRef<HTMLSpanElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const subtextRef = useRef<HTMLParagraphElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);

//   useGSAP(
//     () => {
//       const tl = gsap.timeline({
//         defaults: { ease: "power2.out", duration: 1.4 },
//       });

//       // Reset initial states
//       gsap.set([eyebrowRef.current, titleRef.current, subtextRef.current], {
//         yPercent: 105,
//         opacity: 0,
//       });
//       gsap.set(imageRef.current, {
//         opacity: 0,
//         scale: 1.05,
//       });

//       // Animation sequence
//       tl.to(eyebrowRef.current, {
//         yPercent: 0,
//         opacity: 1,
//         duration: 1.2,
//       })
//         .to(
//           titleRef.current,
//           {
//             yPercent: 0,
//             opacity: 1,
//             stagger: 0.1,
//           },
//           "-=0.8",
//         )
//         .to(
//           subtextRef.current,
//           {
//             yPercent: 0,
//             opacity: 1,
//           },
//           "-=1",
//         )
//         .to(
//           imageRef.current,
//           {
//             opacity: 1,
//             scale: 1,
//             duration: 2,
//             ease: "sine.out",
//           },
//           "-=1.2",
//         );
//     },
//     { scope: containerRef },
//   );

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-[80vh] bg-black flex flex-col items-start justify-center px-6 py-20 text-center overflow-hidden"
//     >
//       <div className="absolute inset-0 opacity-40 pointer-events-none">
//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]" />
//       </div>
//       <div className="w-full flex items-start justify-start flex-col z-10">
//         {/* Eyebrow */}
//         <div className="overflow-hidden mb-6">
//           <span
//             ref={eyebrowRef}
//             className="block text-[10px] md:text-xs uppercase tracking-[0.4em] font-sans text-zinc-200 font-semibold"
//           >
//             VISIT US
//           </span>
//         </div>

//         {/* Headline */}
//         <div className="overflow-hidden mb-8">
//           <h1
//             ref={titleRef}
//             className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1]"
//           >
//             A Warm Welcome <br className="hidden md:block" />
//             Awaits Within
//           </h1>
//         </div>

//         {/* Subtext */}
//         <div className="overflow-hidden max-w-2xl  mb-16">
//           <p
//             ref={subtextRef}
//             className="text-base md:text-lg text-neutral-300 font-sans leading-relaxed"
//           >
//             Leave the rush behind. Step into our world of slow-brewed tradition,
//             freshly baked aromas, and the simple joy of shared presence.
//           </p>
//         </div>

//         {/* Subtle Image Reveal */}
//         {/* <div
//           ref={imageRef}
//           className="relative w-full aspect-video md:aspect-21/9 rounded-sm overflow-hidden shadow-2xl shadow-neutral-200"
//         >
//           <img
//             src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop"
//             alt="Warm café interior"
//             className="w-full h-full object-cover grayscale-[0.2] brightness-[0.95]"
//           />
//           <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
//         </div>*/}
//       </div>

//       {/* Background Decorative Element */}
//       {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-20">
//         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//           <filter id="noiseFilter">
//             <feTurbulence
//               type="fractalNoise"
//               baseFrequency="0.65"
//               numOctaves="3"
//               stitchTiles="stitch"
//             />
//           </filter>
//           <rect width="100%" height="100%" filter="url(#noiseFilter)" />
//         </svg>
//       </div> */}
//     </section>
//   );
// };

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
      className="relative flex min-h-[70vh] w-full flex-col items-start justify-end bg-black px-6 md:px-12 lg:px-24 xl:px-32 overflow-hidden"
    >
      {/* Editorial Background Texture */}
      <div className="hero-bg absolute inset-0 z-0 opacity-0">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-80 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/bg.JPG')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      </div>
      <div className="inset-0 absolute bg-black/20"></div>

      <div className="relative z-10 max-w-5xl pb-10">
        <div className="flex flex-col items-start space-y-6 md:space-y-5">
          {/* Headline Mask */}
          <div className="overflow-hidden py-2">
            <h1
              ref={headlineRef}
              className="font-libre mix-blend-difference text-6xl leading-[1.1] tracking-tight text-white md:text-8xl lg:text-6xl font-bold"
            >
              VISIT US
            </h1>
          </div>

          {/* Subtext Mask */}
          <div className="overflow-hidden py-1">
            <p
              ref={subtextRef}
              className="max-w-2xl font-inter text-sm leading-relaxed text-zinc-300 md:text-xl md:leading-loose"
            >
              Leave the rush behind. Step into our world of slow-brewed
              tradition, freshly baked aromas, and the simple joy of shared
              presence.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative hairline */}
      {/* <div className="absolute left-1/2 top-0 h-full w-px bg-zinc-900/30 hidden lg:block" /> */}
    </section>
  );
};

export default Hero;
