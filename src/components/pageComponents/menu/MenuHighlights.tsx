"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHTS = [
  {
    category: "Coffee & Brews",
    items: [
      {
        src: "/images/c-2.png",
        span: "col-span-2 row-span-2",
        alt: "Specialty coffee brewing at our Cafes in Madurai",
        dish: "Irish Coffee",
      },
      {
        src: "/images/c-1.png",
        span: "col-span-1 row-span-1",
        alt: "Artisan espresso",
        dish: "Cappuccino ",
      },
    ],
  },
  {
    category: "Signature Plates",
    items: [
      {
        src: "/images/mob-hero.jpg",
        span: "col-span-1 row-span-2",
        alt: "Grilled premium steak in our Cafe in Madurai bypass",
        dish: "Pasta Alfredo ",
      },
      {
        src: "/images/DSC00126.jpg",
        span: "col-span-2 row-span-1",
        alt: "Traditional Irish Stew at the best cafe in Madurai",
        dish: "Lamb Dish",
      },
      {
        src: "/images/good-1.jpeg",
        span: "col-span-1 row-span-1",
        alt: "House-made pasta",
        dish: "Loaded Potatoes",
      },
      {
        src: "/images/DSC00130.JPG",
        span: "col-span-1 row-span-1",
        alt: "Signature Dish",
        dish: "Signature Dish",
      },
    ],
  },
  {
    category: "Bakery & Desserts",
    items: [
      {
        src: "/images/des-1.jpeg",
        span: "col-span-2 row-span-2",
        alt: "Handcrafted dessert at our aesthetic cafe in Madurai",
        dish: "Hazelnut Chocolate Pie",
      },
      {
        src: "/images/cheeseCake.heic",
        span: "col-span-1 row-span-1",
        alt: "Freshly baked pastries",
        dish: "Cheese Cake",
      },
    ],
  },
];

const MenuHighlights = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Entrance Animations for each category section
      const categories = gsap.utils.toArray<HTMLElement>(".category-group");

      categories.forEach((group) => {
        const title = group.querySelector(".category-title");
        const cards = group.querySelectorAll(".image-card");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: group,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        tl.fromTo(
          title,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        ).fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=1",
        );
      });

      // 2. Parallax Animations for images within their wrappers
      // We only apply this on screens larger than mobile for better performance
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const parallaxImages = gsap.utils.toArray<HTMLElement>(".parallax-img");

        parallaxImages.forEach((img) => {
          const speedAttr =
            (img.closest(".image-card") as HTMLElement)?.dataset.speed || "0";
          const speed = parseFloat(speedAttr) * 100; // Convert to pixels

          gsap.to(img, {
            y: speed,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".image-card"),
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="bg-white relative py-32 md:py-18">
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/clean-gray-paper.png')]" />
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {HIGHLIGHTS.map((group) => (
          <div key={group.category} className="category-group mb-32 last:mb-0">
            {/* Category Label */}
            <div className="mb-16 flex items-center gap-6">
              <div className="h-px w-16 bg-zinc-900" />
              <h2 className="category-title font-libre text-3xl tracking-tight text-zinc-900 md:text-5xl">
                {group.category}
              </h2>
            </div>

            {/* Editorial Grid */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
              {group.items.map((item, itemIdx) => {
                let speed = 0.5;
                const colPos = itemIdx % 4;
                if (colPos === 0) speed = -1.5;
                else if (colPos === 3) speed = 1.5;

                // Aspect ratio logic for Next.js Image fill
                let aspectClass = "aspect-square";
                if (item.span.includes("col-span-2") && item.span.includes("row-span-1"))
                  aspectClass = "aspect-[2/1]";
                if (item.span.includes("col-span-1") && item.span.includes("row-span-2"))
                  aspectClass = "aspect-[9/16]";

                return (
                  <div
                    key={itemIdx}
                    data-speed={speed}
                    className={`image-card group relative overflow-hidden rounded-sm bg-zinc-50 ${item.span} ${aspectClass}`}
                  >
                    {/* The Image itself is oversized to allow for parallax drift within the overflow-hidden parent */}
                    <div className="parallax-img absolute -inset-y-20 left-0 right-0 h-[calc(100%+160px)] w-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Subtle Overlay to enhance premium feel */}
                    <div className="absolute inset-0 bg-black/5 opacity-40 transition-opacity duration-700 group-hover:opacity-0" />

                    {/* Optional: Micro-category label for accessibility/UX */}
                    <div className="absolute bottom-4 left-4 z-10 translate-y-4 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="font-inter mix-blend-difference text-[10px] font-bold tracking-[0.3em] text-white uppercase drop-shadow-sm">
                        {/* {group.category.split(" ")[0]} */}
                        {item.dish}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuHighlights;
