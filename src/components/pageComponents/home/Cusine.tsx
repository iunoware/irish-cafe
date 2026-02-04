"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Cusine() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);
  const contentRef3 = useRef<HTMLDivElement>(null);

  const imageRef = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);
  const imageRef3 = useRef<HTMLDivElement>(null);

  const cuisines = [
    {
      name: "Irish",
      tagline: "AUTHENTIC COMFORT",
      image: "/images/irish.JPG",
      alt: "BEST Cafés in Madurai",
      layout: "large-left",
    },
    {
      name: "Italian",
      tagline: "REFINED CLASSICS",
      image: "/images/italian.webp",
      alt: "Cafés in Madurai",
      layout: "offset-right",
    },
    {
      name: "American",
      tagline: "BOLD MODERN SPIRIT",
      image: "/images/DSC00125.webp",
      alt: "cafes like Starbucks in Madurai",
      layout: "centered-overlap",
    },
  ];

  useGSAP(
    () => {
      const blocks = [
        { image: imageRef.current, content: contentRef.current },
        { image: imageRef2.current, content: contentRef2.current },
        { image: imageRef3.current, content: contentRef3.current },
      ];

      blocks.forEach(({ image, content }) => {
        if (!image || !content) return;

        const textItems = Array.from(content.children);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });

        // image animation
        tl.from(image, {
          opacity: 0,
          y: 40,
          duration: 1.2,
          ease: "power3.out",
        });

        // text animation (after image)
        tl.from(
          textItems,
          {
            opacity: 0,
            y: 24,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
          },
          "-=0.6", // overlap for smoothness
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-24 md:py-18 px-6 overflow-hidden"
    >
      {/* Subtle Background Detail */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/clean-gray-paper.png')]" />
      </div>

      <h2 className="pb-25 tracking-tight leading-[1.1] italic text-transparent bg-clip-text bg-linear-to-r from-gray-600 via-gray-800 to-black text-center text-4xl md:text-7xl">
        The Cuisines
      </h2>

      <div className="max-w-7xl mx-auto space-y-32 md:space-y-64">
        {/* Irish - Large Left */}
        <div className="flex flex-col md:flex-row items-end gap-12 md:gap-24 relative">
          <div className="w-full md:w-[70%] relative z-10">
            <div
              ref={imageRef}
              className="aspect-4/5  rounded-sm md:aspect-video relative overflow-hidden"
            >
              <Image
                src={cuisines[0].image}
                alt={cuisines[0].alt}
                fill
                loading="lazy"
                className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
              {/* <div className="absolute inset-0 bg-black/5" /> */}
            </div>
          </div>
          <div ref={contentRef} className="w-full md:w-[30%] space-y-6 pb-8">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-medium">
              Section 01
            </span>
            <h3 className="font-serif text-4xl md:text-6xl text-zinc-900 tracking-tight">
              Irish
            </h3>
            <p className="font-sans text-zinc-500 text-xs md:text-sm tracking-[0.3em]">
              {cuisines[0].tagline}
            </p>
          </div>
        </div>

        {/* Italian - Offset Right */}
        <div className="flex flex-col md:flex-row-reverse items-start gap-12 md:gap-24 relative">
          <div className="w-full md:w-[65%] relative z-10 md:mt-24">
            <div
              ref={imageRef2}
              className="aspect-4/5 rounded-sm md:aspect-4/3 relative overflow-hidden"
            >
              <Image
                src={cuisines[1].image}
                alt={cuisines[1].alt}
                fill
                loading="lazy"
                className="object-cover brightness-[0.9] scale-105 hover:scale-100 transition-transform duration-1000"
              />
              {/* <div className="absolute inset-0 bg-black/5" /> */}
            </div>
          </div>
          <div
            ref={contentRef2}
            className="w-full md:w-[35%] space-y-6 text-left md:text-right pt-12 md:sticky md:top-32"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-medium">
              Section 02
            </span>
            <h3 className="font-serif text-4xl md:text-6xl text-zinc-900 tracking-tight">
              Italian
            </h3>
            <p className="font-sans text-zinc-500 text-xs md:text-sm tracking-[0.3em]">
              {cuisines[1].tagline}
            </p>
          </div>
        </div>

        {/* American - Centered Overlap */}
        {/* <div className="relative flex flex-col items-center">
          <div className="w-full md:w-[80%] relative z-10">
            <div
              ref={imageRef3}
              className="aspect-4/5 rounded-sm md:aspect-21/9 relative overflow-hidden"
            >
              <Image
                src={cuisines[2].image}
                alt="American Cuisine"
                fill
                className="object-cover brightness-[0.9] hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>
          <div
            ref={contentRef3}
            className="w-full md:w-auto md:absolute md:-bottom-20 md:right-32 rounded-sm bg-white bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] md:p-12 z-20 space-y-4 md:shadow-2xl md:shadow-zinc-100 flex flex-col items-center md:items-end mt-8"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-medium">
              Section 03
            </span>
            <h3 className="font-serif text-4xl md:text-6xl text-zinc-900 tracking-tight">
              American
            </h3>
            <p className="font-sans text-zinc-500 text-xs md:text-sm tracking-[0.3em]">
              {cuisines[2].tagline}
            </p>
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row items-end gap-12 md:gap-24 relative">
          <div className="w-full md:w-[70%] relative z-10">
            <div
              ref={imageRef}
              className="aspect-4/5 rounded-sm md:aspect-video relative overflow-hidden"
            >
              <Image
                src={cuisines[2].image}
                alt={cuisines[2].alt}
                fill
                loading="lazy"
                className="object-cover brightness-[0.9] scale-105 hover:scale-100 transition-transform duration-1000"
              />
              {/* <div className="absolute inset-0 bg-black/5" /> */}
            </div>
          </div>
          <div ref={contentRef} className="w-full md:w-[30%] space-y-6 pb-8">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-medium">
              Section 03
            </span>
            <h3 className="font-serif text-4xl md:text-6xl text-zinc-900 tracking-tight">
              American
            </h3>
            <p className="font-sans text-zinc-500 text-xs md:text-sm tracking-[0.3em]">
              {cuisines[2].tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
