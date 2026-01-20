"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom top",
        },
      });

      tl.from(imageRef.current, {
        opacity: 0,
        y: 100,
        scale: 1.05,
        duration: 1,
      }).from(contentRef.current?.children || [], {
        opacity: 0,
        y: 30,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative bg-white py-24 md:py-48 px-6">
      {/* Subtle Background Texture - Grainy effect using CSS-only approach if possible, or just clean zinc */}
      <div className="absolute inset-0 opacity-60 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-white bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-stretch gap-16 md:gap-0 relative">
          {/* Large Dominant Image Area - Occupies major visual weight */}
          <div className="w-full md:w-[65%] relative z-10">
            <div
              ref={imageRef}
              className="aspect-4/5 md:aspect-16/11 relative overflow-hidden group"
            >
              <Image
                src="/images/DSC01521.JPG"
                alt="Atmospheric Interior of The Irish Cafe"
                fill
                className="object-cover brightness-[0.85] transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              {/* Subtle Overlay to integrate text better if they overlap */}
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Floating Editorial Micro-label for mobile/tablet */}
            <div className="absolute -top-6 -left-2 md:hidden bg-white py-3 px-6 z-20 shadow-sm">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-medium">
                Philosophy
              </span>
            </div>
          </div>

          {/* Calm Editorial Text Block - Layered/Paired transition */}
          <div className="w-full md:w-[45%] md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-20 md:pl-24">
            <div
              ref={contentRef}
              className="bg-white md:p-16 space-y-8 md:shadow-[40px_40px_80px_rgba(0,0,0,0.03)] border-zinc-100"
            >
              <div className="space-y-6">
                <span className="hidden md:block font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-zinc-400 font-medium">
                  Our Philosophy
                </span>

                <h2 className="font-serif text-3xl font-semibold md:text-5xl text-zinc-900 leading-[1.2] md:leading-[1.15] tracking-tight">
                  More than a meal — an experience shaped by{" "}
                  <span className="italic text-transparent bg-clip-text bg-linear-to-r from-gray-500 to-gray-600 font-medium">
                    {" "}
                    time and taste.
                  </span>
                </h2>
              </div>

              <div className="w-12 h-px bg-zinc-200" />

              <p className="font-sans text-zinc-500 text-sm md:text-lg leading-relaxed tracking-wide">
                At The Irish Cafe, food is approached with intention. From
                carefully composed flavours to thoughtfully designed spaces,
                every element is created to invite unhurried dining and
                meaningful moments at the table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
