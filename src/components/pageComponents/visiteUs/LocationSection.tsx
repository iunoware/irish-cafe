"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LocationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        textRef.current?.children || [],
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power2.out",
        },
      ).fromTo(
        mapRef.current,
        {
          opacity: 0,
          scale: 0.98,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.8",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Text Content */}
        <div ref={textRef} className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-sans text-neutral-400 font-semibold">
              Location
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-neutral-900 leading-tight">
              The Irish Cafe, <br />
              Madurai
            </h3>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-sans text-neutral-500 font-medium">
                Address
              </h4>
              <p className="text-lg md:text-xl text-neutral-800 font-sans leading-relaxed">
                558, 4th West Street, <br />
                KK Nagar, Madurai. Recognized <br />
                among the best restaurants in Madurai.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-sans text-neutral-500 font-medium">
                Landmarks
              </h4>
              <p className="text-base text-neutral-600 font-sans leading-relaxed">
                Located near the KK Nagar Arch, our multi-cuisine cafe in Madurai near me
                is a premier cafe in Madurai bypass choice.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://maps.app.goo.gl/8M8Rfu7nsBW2bPoNA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-sm font-medium tracking-wide transition-transform active:scale-95 hover:bg-neutral-800 rounded-sm"
            >
              Get Directions
            </a>
            <a
              href="tel:+918148987007"
              className="inline-flex items-center justify-center px-8 py-4 border border-neutral-200 text-neutral-900 text-sm font-medium tracking-wide transition-all hover:bg-neutral-50 active:scale-95 rounded-sm"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Interactive Map */}
        <div
          ref={mapRef}
          className="lg:col-span-7 w-full h-100 md:h-125 lg:h-150 bg-neutral-100 rounded-sm overflow-hidden shadow-xl shadow-neutral-100 relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.063303314997!2d78.14315114816284!3d9.93263962765152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5f956f5ecc3%3A0x9463396a37d3e38b!2sThe+Irish+cafe!5e0!3m2!1sen!2sin!4v1769061961983!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0.2] contrast-[1.1] opacity-90"
            title="The Irish Cafe Location"
          ></iframe>

          {/* Subtle Overlay to make it feel more integrated */}
          <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
