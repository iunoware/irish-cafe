"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MenuCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Reveal Animation
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          scale: 0.98,
          y: 30,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center bg-white py-12 md:py-10"
    >
      {/* Background Texture for the section */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/clean-gray-paper.png')]" />
      </div>

      {/* The Physical Menu Card */}
      <div
        ref={cardRef}
        className="relative z-10 w-full border-4! border-black max-w-112.5 mx-6 bg-black px-8 py-16 text-center transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:px-12 md:py-24"
        style={{
          border: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
        }}
      >
        {/* Card Internal Texture */}
        <div className="absolute inset-0 opacity-80 pointer-events-none rounded-sm">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <span className="mb-6 block font-inter text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase">
            The Irish Cafe
          </span>

          <h2 className="mb-8 font-libre text-3xl font-normal tracking-tight text-zinc-200 md:text-5xl uppercase">
            Menu
          </h2>

          <div className="mb-12 h-px w-8 bg-zinc-200" />

          <p className="mb-16 font-inter text-sm leading-relaxed text-zinc-300 italic md:text-base">
            Our complete collection of seasonal{" "}
            <br className="hidden md:block" />
            food and artisan beverages is available{" "}
            <br className="hidden md:block" />
            to view in our house menu.
          </p>

          <a
            href="/files/menu.pdf"
            target="_blank"
            className="group flex flex-col items-center"
          >
            <span className="font-libre text-lg text-zinc-100 transition-colors group-hover:text-white md:text-xl">
              View Full Menu
            </span>
            <div className="mt-2 h-px w-20 bg-zinc-600 transition-all duration-500 group-hover:w-32 group-hover:bg-zinc-500" />
            <span className="mt-4 font-inter text-[9px] font-bold tracking-widest text-zinc-300 uppercase">
              (Digital PDF)
            </span>
          </a>
        </div>

        {/* Decorative corner detail */}
        <div className="absolute top-4 left-4 h-4 w-4 border-t border-l border-zinc-100" />
        <div className="absolute top-4 right-4 h-4 w-4 border-t border-r border-zinc-100" />
        <div className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-zinc-100" />
        <div className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-zinc-100" />
      </div>
    </section>
  );
};

export default MenuCTA;
