import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";

export default function BrandEssence() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // image parallax
      tl.to([imageRef.current, bgRef.current], {
        y: "15%",
      });

      // image container fade in animation
      gsap.from(imageContainerRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 80%",
        },
      });

      // para word by word animation
      gsap.utils.toArray(paraRef.current).forEach((el) => {
        const element = el as HTMLElement;
        const split = new SplitText(element, { type: "words" });
        gsap.from(split.words, {
          y: 100,
          opacity: 0,
          stagger: 0.01,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
          },
        });
      });

      const split = new SplitText([headingRef.current, spanRef.current], {
        type: "chars",
      });

      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 65%",
        },
      });

      textTl.from(
        split.chars,
        {
          y: 80,
          opacity: 0,
          stagger: 0.03,
        },
        "-=0.1",
      );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative w-full overflow-clip pt-20">
      {/* bg texture */}
      {/* <div ref={bgRef} className="absolute inset-0 opacity-80 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/xv.png')] " />
      </div> */}

      <div className="flex flex-col-reverse md:flex-row-reverse w-full h-screen">
        {/* left image */}
        <div
          ref={imageContainerRef}
          className="relative w-full h-screen rounded-tl-sm rounded-bl-sm md:h-auto overflow-hidden"
        >
          {/* <div className="absolute inset-0 "> */}
          <Image
            ref={imageRef}
            src="/images/irish-cafe-heritage.webp"
            alt="Luxury Café Interior"
            fill
            className="object-cover rounded-tl-sm rounded-bl-sm"
          />
          {/* </div> */}
        </div>

        {/* right text */}
        <div className="relative w-full md:w-[45%] flex flex-col justify-center px-8 py-16 md:px-12 lg:px-16 space-y-8 md:space-y-12">
          <div className="w-12 h-px hidden md:block" />

          <div className="space-y-6">
            {/* Eyebrow */}
            <span
              ref={spanRef}
              className="block text-xs tracking-[0.25em] text-zinc-800 uppercase font-medium"
            >
              Brand Essence
            </span>

            {/* Headline */}
            <h2
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-black"
            >
              Heritage <br />
              <span className="text-zinc-900">&</span> Harmony.
            </h2>

            {/* Paragraph */}
            <p
              ref={paraRef}
              className="max-w-xs text-sm md:text-base leading-relaxed text-zinc-900 font-light"
            >
              A precise convergence of Irish warmth, Italian culinary tradition, and
              American boldness. We curate an atmosphere where quality is felt, not just
              seen.
            </p>
          </div>

          {/* Optional: Very subtle background branding element */}
          {/* <div className="absolute bottom-4 right-4 text-[10rem] leading-none font-bold text-white/5 pointer-events-none select-none overflow-hidden -z-10 hidden lg:block">
            IC
          </div> */}
        </div>
      </div>
    </section>
  );
}
