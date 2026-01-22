"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    quote:
      "Been to this place twice, it's a simple and a cozy place with very nice food. The best option to hang out with friends and take lots of photos. Their pasta varieties and desserts are must try. They offer dishes at a reasonable price.",
    author: "Kaviya",
  },
  {
    quote:
      "This place has my heart and soul..the service was great and most importantly the food was awesome, I tried the Shepherd's pie it's was delicious and the pizza's are to die for...",
    author: "linda evangeline",
  },
  {
    quote:
      "Small cafe with cozy atmosphere and awesome food. Highlights were the prawn cocktail and bolognese spaghetti. Would definitely recommend. The fish burger was good too.",
    author: "Jelliffe Jeganathan",
  },
];

const TestimonialReel = () => {
  const containerRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        videoWrapperRef.current,
        {
          opacity: 0,
          scale: 0.95,
          y: 40,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
        },
      ).fromTo(
        infoRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
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
      className="w-full py-24 md:py-40 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Section Label */}
        <div className="mb-16 text-center space-y-4">
          <h1 className=" md:text-6xl text-4xl uppercase tracking-tight text-black font-semibold">
            What People Say
          </h1>
          <div className="h-px w-8 bg-neutral-200 mx-auto"></div>
        </div>

        {/* Vertical Reel Container */}
        <div className="w-full h-full flex md:flex-row flex-col items-center justify-center">
          <div
            ref={videoWrapperRef}
            onClick={handlePlayToggle}
            className="relative w-full md:mr-20 max-w-85 aspect-9/16 rounded-4xl overflow-hidden bg-neutral-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group cursor-pointer border-8 border-white ring-1 ring-neutral-100"
          >
            <video
              ref={videoRef}
              src="/files/review.mp4"
              poster="/images/cover.jpg"
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full aspect-9/16 object-cover"
            >
              Your browser does not support the video tag.
            </video>

            {/* Subtle Play Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors duration-500">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
                  <svg
                    className="w-6 h-6 text-white fill-current ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
          <div className="h-full pt-5 md:pt-0 flex flex-col items-center justify-center">
            <div ref={infoRef} className=" text-center space-y-3">
              <h3 className="text-2xl md:text-3xl font-serif text-neutral-900">
                Actor Ashish Vidyarthi
              </h3>
              <p className="text-sm md:text-base font-sans text-neutral-500 tracking-wide  font-medium">
                About "The Irish Cafe"
              </p>
            </div>
            <a
              href="https://www.instagram.com/theirish.cafe?igsh=cTB2N3lvYWs1YjMw"
              target="_blank"
              className="inline-block mt-10 group relative font-sans text-[11px] bg-black uppercase tracking-[0.3em] py-4 px-10 border border-white/30 hover:border-black transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 text-white  group-hover:text-black transition-colors duration-500">
                View More
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            </a>
          </div>
        </div>

        {/* Guest Information */}
        <div ref={infoRef} className="mt-12 text-center space-y-3">
          <h3 className="text-3xl font-serif text-neutral-900">
            Loved by Our Guests
          </h3>
          {/* <p className="text-sm md:text-base font-sans text-neutral-500 tracking-wide  font-medium">
            About "The Irish Cafe"
          </p> */}
        </div>

        {/* Below testimonial */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 pt-10 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="space-y-6 p-8 border border-neutral-100 rounded-sm hover:border-neutral-200 transition-colors duration-300"
            >
              <div className="text-amber-600/40">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                </svg>
              </div>
              <p className="text-lg text-neutral-800 font-sans leading-relaxed italic">
                "{item.quote}"
              </p>
              <div className="pt-4 border-t border-neutral-50">
                <p className="text-sm font-semibold uppercase tracking-widest text-neutral-900">
                  — {item.author}
                </p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://www.google.com/search?sca_esv=06655e5bf07ee195&sxsrf=ANbL-n6VjIqgvtOxIuyNQM07_w8LRZaXgw:1769076338554&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOT5eeCnKx7UJdoIM-sISq-f10WmzCurl99BLbEm5xz_3JaygDDZDfR2bXOJDyI_QbTfHhxl27Qm7Cs4rDCRz--PSgCQT&q=The+Irish+cafe+Reviews&sa=X&ved=2ahUKEwjJyvX18p6SAxWkT2wGHZMKGSgQ0bkNegQILhAF&biw=1600&bih=749&dpr=1&aic=0"
          target="_blank"
          className="inline-block mt-10 group relative font-sans text-[11px] bg-black uppercase tracking-[0.3em] py-4 px-10 border border-white/30 hover:border-black transition-all duration-500 overflow-hidden"
        >
          <span className="relative z-10 text-white  group-hover:text-black transition-colors duration-500">
            See more Reviews
          </span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
        </a>
      </div>
    </section>
  );
};

export default TestimonialReel;
