"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Ambience() {
  const sectionRef = useRef<HTMLElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const sideImagesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Anchor Image Animation
      gsap.fromTo(
        anchorRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 1.05,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: anchorRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Side Images Staggered Animation
      const sideImages = gsap.utils.toArray(".side-image");
      gsap.fromTo(
        sideImages,
        {
          opacity: 0,
          y: 40,
          scale: 1.03,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sideImagesRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      // Text Animation
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
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
      className="relative bg-white py-24 md:py-18 px-6 md:px-12 overflow-hidden"
    >
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/clean-gray-paper.png')]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Visual Anchor - Dominant Interior Image */}
          <div
            ref={anchorRef}
            className="w-full lg:w-[60%] relative z-10 opacity-0"
          >
            <div className="aspect-4/5 rounded-sm md:aspect-video lg:aspect-4/5 relative overflow-hidden shadow-[40px_40px_80px_rgba(0,0,0,0.06)] group">
              <Image
                src="/images/DSC01466.JPG"
                alt="The Irish Cafe Interior"
                fill
                className="object-cover transition-transform duration-2000 group-hover:scale-100 scale-105 brightness-[0.98]"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply opacity-20 pointer-events-none" />
            </div>
          </div>

          {/* Side Content & Supporting Imagery */}
          <div className="w-full lg:w-[40%] flex flex-col gap-16 lg:gap-24 lg:pt-12">
            {/* Minimal Editorial Text */}
            <div ref={textRef} className="space-y-8 opacity-0">
              <div className="space-y-4">
                <span className="font-serif italic text-3xl md:text-5xl text-zinc-900 leading-tight block">
                  A sanctuary of unhurried <br className="hidden md:block" />
                  <span className="not-italic">conversations.</span>
                </span>
                <div className="w-12 h-px bg-zinc-200" />
              </div>

              <p className="font-sans text-zinc-500 text-sm md:text-lg leading-relaxed tracking-wide max-w-sm">
                Step into a space shaped for comfort and connection. Soft
                lighting, tactile finishes, and a carefully curated soundtrack
                set the tone for lingering conversations and relaxed dining,
                long after the last course is served.
              </p>
            </div>

            {/* Supporting Images */}
            <div
              ref={sideImagesRef}
              className="grid grid-cols-2 gap-6 md:gap-12 relative z-20"
            >
              <div className="side-image w-full rounded-sm aspect-square relative overflow-hidden shadow-2xl opacity-0 mt-8">
                <Image
                  src="/images/DSC01369.JPG"
                  alt="Interior Detail"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  sizes="20vw"
                />
              </div>
              <div className="side-image rounded-sm w-full aspect-3/4 relative overflow-hidden shadow-2xl opacity-0 -mt-12">
                <Image
                  src="/images/DSC01328.JPG"
                  alt="Atmospheric Lighting"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  sizes="20vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Detail */}
        <div className="mt-24 md:mt-18 flex justify-center md:justify-end">
          <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.6em] text-zinc-300 font-light rotate-0 md:-rotate-90 origin-right">
            Atmosphere / Experience
          </span>
        </div>
      </div>
    </section>
  );
}
