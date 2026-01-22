"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FoodGallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Staggered fade in for images
      // const images = gsap.utils.toArray<HTMLElement>(".craft-image");
      // images.forEach((img, i) => {
      //   gsap.from(img, {
      //     opacity: 0,
      //     y: 40,
      //     duration: 1.2,
      //     ease: "power2.out",
      //     scrollTrigger: {
      //       trigger: img,
      //       start: "top 85%",
      //       toggleActions: "play none none reverse",
      //     },
      //     delay: i * 0.1,
      //   });
      // });

      gsap.utils.toArray<HTMLElement>(".craft-image").forEach((img, i) => {
        gsap.from(img, {
          opacity: 0,
          y: 40,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.1,
        });
      });

      // Text reveal
      gsap.utils.toArray(".craft-text").forEach((el) => {
        const element = el as HTMLElement;
        gsap.from(element, {
          opacity: 0,
          x: -20,
          duration: 1,
          // stagger: 2,
          // ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full relative bg-[#F4F4F0] py-24 md:py-40 text-[#1A1A1A] overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-0 relative">
          {/* 1. Text Block - Positioning: Top Left / Floating */}
          <div className="md:col-span-3 md:sticky md:top-32 h-fit z-20 mb-12 md:mb-0">
            <h2 className="craft-text text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight leading-none mb-6 text-neutral-900">
              Quietly <br /> Obsessive.
            </h2>
            <div className="w-12 h-px bg-neutral-300 mb-6"></div>
            <p className="craft-text text-sm md:text-base font-sans tracking-wide text-neutral-600 font-light">
              Process over presentation. <br />
              Craft before comfort.
            </p>
          </div>

          {/* 2. Primary Anchor Image - Positioning: Right Dominant */}
          <div className="md:col-start-5 md:col-span-8 relative mb-12 md:mb-24 craft-image">
            <div className="relative w-full aspect-4/3 md:aspect-16/10 overflow-hidden bg-neutral-200">
              <Image
                src="/images/DSC01328.jpg"
                alt="Barista pouring coffee with focus and precision"
                fill
                className="object-cover grayscale-10 opacity-90 hover:scale-[1.02] transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 70vw"
                priority
              />
            </div>
          </div>

          {/* 3. Detail 1: Process Texture - Positioning: Offset Left below text */}
          <div className="md:col-start-3 md:col-span-4 relative mb-8 md:mb-0 md:-mt-32 z-10 craft-image">
            <div className="relative w-full aspect-3/4 overflow-hidden bg-neutral-200 shadow-sm">
              <Image
                src="/images/DSC01328.jpg"
                alt="Close up texture of flour and dough"
                fill
                className="object-cover grayscale-15 opacity-90 hover:scale-[1.02] transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* 4. Detail 2: Material/Tool - Positioning: Bottom Right small */}
          <div className="md:col-start-8 md:col-span-4 relative md:mt-12 craft-image">
            <div className="relative w-full aspect-square overflow-hidden bg-neutral-200">
              <Image
                src="/images/DSC01328.jpg"
                alt="Ceramic cup detail"
                fill
                className="object-cover grayscale-20 opacity-90 hover:scale-[1.02] transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* 5. Micro Detail - Positioning: Far Right / Edge */}
          {/* <div className="hidden md:block md:col-start-12 md:col-span-1 relative mt-48 craft-image">
             <div className="w-full h-32 bg-neutral-300"></div>
           </div> */}
        </div>
      </div>
    </section>
  );
}
