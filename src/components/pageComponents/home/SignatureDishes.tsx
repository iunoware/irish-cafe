"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    name: "Classic Irish Stew",
    image: "/images/DSC00130.webp",
    alt: "Coffee Shop at Heritage Madurai Hotel",
    containerStyle: "w-full md:w-[60%] ml-0 mr-auto",
    aspectRatio: "aspect-[4/5] md:aspect-[16/10]",
    zIndex: "z-10",
  },
  {
    name: "Pasta Alfredo",
    image: "/images/best-cuisines-in-madurai.webp",
    alt: "Best cafe in Madurai for couples",
    containerStyle: "w-[85%] md:w-[42%] ml-auto mr-0 md:-mt-[15%] relative",
    aspectRatio: "aspect-[4/5]",
    zIndex: "z-20",
  },
  {
    name: "Dry-Aged Wagyu",
    image: "/images/DSC00126.JPG",
    alt: "Aesthetic cafe in Madurai",
    containerStyle: "w-full  md:w-[55%] mx-auto md:-mt-[10%]",
    aspectRatio: "aspect-[16/9]",
    zIndex: "z-10",
  },
  {
    name: "Brownie with Ice cream",
    image: "/images/DSC01471.JPG",
    alt: "Best cafe in Madurai near me",
    containerStyle:
      "w-[75%] md:w-[32%] ml-[10%] object-right mr-auto md:ml-auto md:mr-[8%] md:-mt-[18%]",
    aspectRatio: "aspect-square",
    zIndex: "z-30",
  },
];

export default function SignatureDishes() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".dish-item");

      items.forEach((item) => {
        const img = (item as HTMLElement).querySelector(".dish-image-wrapper");
        const text = (item as HTMLElement).querySelector(".dish-text");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item as HTMLElement,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        tl.fromTo(
          img,
          {
            opacity: 0,
            y: 30,
            scale: 1.05,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          },
        ).fromTo(
          text,
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-24 md:py-18 px-6 md:px-12 overflow-hidden"
    >
      {/* Texture Background - Subtle and premium */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/clean-gray-paper.png')]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Editorial Heading using Bon Vivant */}
        <div className="mb-32 md:mb-26">
          <h2 className="font-serif text-5xl md:text-8xl text-zinc-900 leading-[1.1] mb-8 tracking-tight">
            Our <br className="hidden md:block" />
            <span className="md:pl-32 italic">Signatures</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:pl-32">
            <span className="w-16 h-px bg-zinc-200 hidden md:block mt-3" />
            <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-zinc-400 font-medium">
              Curated for the refined palate
            </p>
          </div>
        </div>

        {/* Asymmetrical Image-Led Layout */}
        <div className="flex flex-col gap-32 md:gap-0">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className={`dish-item ${dish.containerStyle} ${dish.zIndex}`}
            >
              <div className="dish-image-wrapper relative group overflow-hidden shadow-[30px_30px_80px_rgba(0,0,0,0.04)]">
                <div
                  className={`${dish.aspectRatio} relative rounded-sm overflow-hidden transition-all duration-1000`}
                >
                  <Image
                    src={dish.image}
                    alt={dish.alt}
                    fill
                    loading="lazy"
                    className="object-cover scale-105 transition-transform duration-1000 group-hover:scale-100 brightness-[0.98]"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    // priority={index === 0}
                  />
                  {/* Subtle Grainy Overlay on Image */}
                  <div className="absolute inset-0 bg-black/20 mix-blend-multiply opacity-20 pointer-events-none" />
                </div>
              </div>

              <div className="dish-text mt-8 flex items-center justify-between md:justify-start gap-6 opacity-0">
                <div
                  style={{ mixBlendMode: "difference" }}
                  className="flex  items-center gap-4"
                >
                  <span
                    className={`${index == 1 ? "text-black md:bg-clip-text md:text-transparent md:bg-linear-to-r from-99%  from-white to-black" : "text-black"}   font-serif mix-blend-difference text-md md:text-xl uppercase tracking-[0.4em] font-light`}
                  >
                    {dish.name}
                  </span>
                </div>
                <div className="flex-1 h-px bg-zinc-100 hidden md:block" />
                {/* <span className="font-sans text-[10px] text-zinc-300 font-medium tracking-widest uppercase">
                  Selection 0{index + 1}
                </span> */}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <a
            href="/menu"
            className="inline-block mt-10 group relative font-sans text-[11px] bg-black uppercase tracking-[0.3em] py-4 px-10 border border-white/30 hover:border-black transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 text-white  group-hover:text-black transition-colors duration-500">
              View Full Menu
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
          </a>
        </div>
      </div>
    </section>
  );
}
