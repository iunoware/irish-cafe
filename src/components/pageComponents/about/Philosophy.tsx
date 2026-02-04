import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // image fade in
      gsap.from(imageRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      });

      // para reveal
      // gsap.utils.toArray(".paraReveal").forEach((el) => {
      //   const element = el as HTMLElement;
      //   const split = new SplitText(element, { type: "words" });
      //   gsap.from(split.words, {
      //     y: 100,
      //     opacity: 0,
      //     stagger: 0.01,
      //     scrollTrigger: {
      //       trigger: element,
      //       start: "top 80%",
      //     },
      //   });
      // });

      // fade in animation for text  (new)
      gsap.utils.toArray<HTMLElement>(".paraReveal").forEach((el, i) => {
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

      // text animation by line by line
      gsap.utils.toArray(".text-reveal").forEach((el) => {
        const element = el as HTMLElement;
        const split = new SplitText(element, { type: "chars" });

        // needed to create the timeline because we are using the "+=0.15"
        // 'gsap' only expects 2 arguments, but we can pass 3 arguments in 'tl'
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
          },
        });

        tl.from(
          split.chars,
          {
            y: 100,
            opacity: 0,
            stagger: 0.01,
          },
          "+=0.10",
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="w-full relative text-black py-24 md:py-40">
      {/* bg texture */}
      {/* <div className="absolute inset-0 opacity-80 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/xv.png')] " />
      </div> */}

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-16 lg:gap-24">
          {/* image */}
          <div
            ref={imageRef}
            className="w-full lg:w-7/12 relative aspect-4/5 md:aspect-3/4 lg:aspect-4/5"
          >
            <Image
              src="/images/thought-before-trend.webp"
              alt="Atmospheric corner of the best ambience cafe in Madurai"
              fill
              className="object-cover grayscale-0"
              sizes="(max-width: 768px) 100vw, 60vw"
              loading="lazy"
            />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-4/12 flex flex-col justify-end pb-0 lg:pb-12">
            <h2 className="text-reveal text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-[1.1] mb-12 text-black">
              Thought <br /> Before <br /> Trend
            </h2>

            <div className="space-y-8">
              <p className="paraReveal text-neutral-800 text-base md:text-lg leading-relaxed font-light">
                We do not chase the new. Instead, we refine the necessary as the best
                ambience cafe in Madurai — one where every detail is weighed, measured,
                and considered before it ever reaches your table.
              </p>

              <p className="paraReveal text-neutral-800 text-base md:text-lg leading-relaxed font-light">
                From the acoustic balance of our spaces to the texture of the ceramic in
                your hand, nothing is accidental. We believe that true luxury lies not in
                excess, but in the complete absence of noise.
              </p>
            </div>

            <div className="mt-16 pt-8 border-t border-neutral-200">
              <p className="paraReveal text-sm font-medium tracking-widest uppercase text-neutral-500">
                The Irish Cafe Philosophy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
