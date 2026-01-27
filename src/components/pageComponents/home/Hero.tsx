"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

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
      tl.to(imageRef.current, {
        yPercent: 15,
        // scale: 1.1,
        ease: "none",
      });

      // 1️⃣ Parallax-like image movement (scroll-based)
      // gsap.to(imageRef.current, {
      //   yPercent: 15, // subtle parallax
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: containerRef.current,
      //     start: "top bottom",
      //     end: "bottom top",
      //     scrub: true,
      //   },
      // });

      // 2️⃣ Text fade-up on page load (once)
      gsap.from(textRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(contentRef.current, {
        y: 40,
        ease: "power2.inOut",
        duration: 2,
        opacity: 0,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-start md:items-center justify-start text-white bg-black"
    >
      {/* Background Image with subtle zoom-in effect */}
      <div ref={imageRef} className="back-layer absolute w-full h-full">
        <Image
          src="/images/2.jpg"
          alt="The Irish Cafe Interior — one of the BEST Cafés in Madurai"
          fill
          className="object-cover object-center scale-105 hidden md:block animate-subtle-zoom"
          // loading="lazy"
        />
        <Image
          src="/images/mob-hero.jpg"
          alt="Best Cafe in Madurai — The Irish Cafe"
          fill
          className="object-cover object-center block md:hidden animate-subtle-zoom"
          // loading="lazy"
        />
        {/* Editorial Overlay */}
        <div className="absolute inset-0 block md:hidden bg-black/30" />
      </div>
      {/* <div className="absolute inset-0">
        <Image
          src="/images/food.png"
          alt="The Irish Cafe Interior"
          fill
          className="object-cover z-20 object-top brightness-[0.7] scale-105 animate-subtle-zoom"
          priority
        />
      </div> */}

      <div className="relative z-10 pt-20 text-start px-10 md:px-26 space-y-8 animate-fade-in-up">
        <div className="overflow-hidden">
          <p className="font-sans hidden md:block text-black md:text-white uppercase tracking-[0.4em] text-[10px] md:text-xs opacity-70 animate-slide-up animation-delay-200">
            Est. 2024 — Madurai
          </p>
        </div>

        <div className="overflow-hidden">
          <h1
            ref={textRef}
            className="text-5xl headline md:text-7xl text-black md:text-white mix-blend-difference font-serif animate-slide-up animation-delay-400"
          >
            The Irish Cafe
          </h1>
        </div>

        <div className="overflow-hidden">
          <p
            ref={contentRef}
            className="font-serif headline italic text-lg   md:text-white md:text-xl mix-blend-difference opacity-90 max-w-lg mx-auto leading-relaxed animate-slide-up animation-delay-600"
          >
            Where tradition meets the temple city. Experience one of the BEST Cafés in
            Madurai, offering premium coffee and authentic Irish hospitality.
          </p>
        </div>

        <div className="md:pt-8 flex gap-10 animate-fade-in animation-delay-1000">
          <a
            target="_blank"
            href="https://www.google.com/maps/reserve/v/dine/c/8CBFs_l4fvM?source=pa&opi=89978449&hl=en-IN&gei=yvNxacS3E6aMnesPrsafqQc&sourceurl=https://www.google.com/search?gs_ssp%3DeJzj4tVP1zc0LE7OKqqoLDA3YLRSNagwTjIwSDZNszQ1SzNNTU42tjKosDQxMza2NEs0Nk8xTjW2SPISyizKLM5QSE5MS1XITUwpLUrMBAApqRZs%26q%3Dirish%2Bcafe%2Bmadurai%26oq%3Dirish%2Bcafe%26gs_lcrp%3DEgZjaHJvbWUqDQgBEC4YrwEYxwEYgAQyCQgAEEUYORiABDINCAEQLhivARjHARiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCTkwMzZqMGoxNagCCLACAfEFLCjrNoRidPrxBSwo6zaEYnT6%26sourceid%3Dchrome%26ie%3DUTF-8"
            className="inline-block group relative font-sans text-[11px] bg-white uppercase tracking-[0.3em] py-2 px-4 md:py-4 md:px-10 border border-white/30 hover:border-black transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 text-black  group-hover:text-white transition-colors duration-500">
              Reserve a table
            </span>
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
          </a>
          <a
            href="https://www.zomato.com/madurai/the-irish-cafe-kk-nagar"
            target="_blank"
            className="inline-block h-fit w-fit group relative font-sans text-[11px] uppercase tracking-[0.3em] py-2 px-4 md:py-4 md:px-10 border border-white/30 hover:border-white transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              Order Online
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
          </a>
        </div>
      </div>
      {/* <div className="w-full z-10 h-full flex items-center justify-center">
        <h1 className="text-9xl absolute top-65 font-semibold ">Irish Cafe</h1>
      </div> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-40 animate-fade-in animation-delay-1500">
        <span className="font-sans text-[9px] uppercase tracking-[0.4em] vertical-text">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
