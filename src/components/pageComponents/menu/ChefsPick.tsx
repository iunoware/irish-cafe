"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CHEFS_PICKS = [
  {
    name: "Aged Irish Steak",
    description: "Premium cuts aged for 28 days, served with seasonal roots.",
    src: "/images/signature/steak.png",
  },
  {
    name: "Hearty Lamb Stew",
    description: "A slow-cooked heritage recipe with local farm vegetables.",
    src: "/images/signature/stew.png",
  },
  {
    name: "Signature Dessert",
    description: "Handcrafted seasonal treat finished with house-made cream.",
    src: "/images/signature/dessert.JPG",
  },
];

const ChefsPick = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        textRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
      ).fromTo(
        ".chef-card",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.8",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="bg-white relative py-32 md:py-48 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/clean-gray-paper.png')]" />
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          {/* Left Side: Editorial Introduction */}
          <div ref={textRef} className="lg:w-1/3 flex flex-col justify-center">
            <span className="mb-6 block font-inter text-xs font-bold tracking-[0.4em] text-zinc-400 uppercase">
              Curated Selection
            </span>
            <h2 className="mb-8 font-libre text-4xl leading-tight text-zinc-900 md:text-6xl">
              Chef’s <br /> <span className="italic">Pick.</span>
            </h2>
            <p className="font-inter text-lg leading-relaxed text-zinc-600">
              Each season, our head chef selects a handful of dishes that best
              embody our philosophy of heritage and craft. These are the
              must-experience highlights of our current kitchen.
            </p>
            <div className="mt-12 h-px w-24 bg-zinc-900" />
          </div>

          {/* Right Side: Featured Dish Cards */}
          <div
            ref={cardsRef}
            className="lg:w-2/3 flex flex-col md:flex-row gap-8 lg:gap-12"
          >
            {CHEFS_PICKS.map((dish, idx) => (
              <div key={dish.name} className="chef-card group relative flex-1">
                <div className="relative aspect-3/4 overflow-hidden rounded-sm bg-zinc-200">
                  <Image
                    src={dish.src}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Subtle tint */}
                  <div className="absolute inset-0 bg-zinc-900/5 mix-blend-multiply opacity-50" />
                </div>

                <div className="mt-6">
                  <h3 className="font-libre text-xl text-zinc-900 md:text-2xl">
                    {dish.name}
                  </h3>
                  <p className="mt-2 font-inter text-sm text-zinc-500 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefsPick;
