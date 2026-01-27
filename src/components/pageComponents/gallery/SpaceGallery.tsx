"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  // 1
  {
    src: "/images/best-cafe-in-madurai.webp",
    alt: "Wide interior of our aesthetic cafe in Madurai",
    className: "md:col-span-8 md:row-span-2",
    aspect: "aspect-[16/10] md:aspect-auto md:h-full",
  },
  // 2
  {
    src: "/images/irish-cafe-heritage.webp",
    alt: "Detail of seating area in the best ambience cafe in Madurai",
    className: "md:col-span-4 md:row-span-1",
    aspect: "aspect-square md:aspect-auto md:h-full",
  },
  // 3
  {
    src: "/images/DSC00050.JPG",
    alt: "Atmospheric corner at the best cafe in Madurai",
    className: "md:col-span-4 md:row-span-1",
    aspect: "aspect-square md:aspect-auto md:h-full",
  },
  // 4
  {
    src: "/images/DSC01369.jpg",
    alt: "Minimal tabletop scene in an aesthetic cafe in Madurai",
    className: "md:col-span-4 md:row-span-2",
    aspect: "aspect-[3/4] md:aspect-auto md:h-full",
  },
  // 5
  {
    src: "/images/DSC01328.JPG",
    alt: "Light falling on surfaces",
    className: "md:col-span-5 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
  // 7
  {
    src: "/images/DSC01466.jpg",
    alt: "Architectural detail",
    className: "md:col-span-3 md:row-span-2",
    aspect: "aspect-[2/3] md:aspect-auto md:h-full",
  },
  // 6
  {
    src: "/images/ambient.webp",
    alt: "Calm cafe atmosphere",
    className: "md:col-span-5 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
  // 8
  {
    src: "/images/DSC01300.JPG",
    alt: "Interior perspective",
    className: "md:col-span-4 md:row-span-1",
    aspect: "aspect-square md:aspect-auto md:h-full",
  },
  // 9
  {
    src: "/images/the-irish-cafe-about.webp",
    alt: "Quiet moment",
    className: "md:col-span-5 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
];

export default function Gallery() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // animation for images
      gsap.utils.toArray<HTMLElement>(".bento-item").forEach((img, i) => {
        gsap.from(img, {
          opacity: 0,
          // y: 30,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
          },
          delay: i * 0.05,
        });
      });

      // fade in animation for text
      gsap.utils.toArray<HTMLElement>(".text-reveal").forEach((el, i) => {
        gsap.from(el, {
          y: 20,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          delay: i * 0.1,
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="w-full relative py-24 md:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Editorial Heading Block */}
        <div className="mb-20 md:mb-32 max-w-sm">
          <h2 className="text-reveal text-3xl md:text-4xl font-serif font-light tracking-tight text-neutral-900 mb-6">
            The Space
          </h2>
          <div className="text-reveal w-12 h-1px bg-neutral-300 mb-6"></div>
          <p className="text-reveal text-sm md:text-base font-sans tracking-wide text-neutral-500 font-light leading-relaxed uppercase">
            Experience the best ambience cafe <br />
            in Madurai. Slowly considered.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 md:auto-rows-[250px] lg:auto-rows-[300px]">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`group bento-item relative rounded-md overflow-hidden bg-neutral-100 ${img.className}`}
            >
              <div className={`relative w-full parallax-img ${img.aspect}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover rounded-md transition-all duration-1000 group-hover:scale-105 "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
