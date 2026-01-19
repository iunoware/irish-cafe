import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function BrandEssence() {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLElement>(null);

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

      tl.to(imageRef.current, {
        yPercent: 25,
        ease: "none",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden h-[110vh] bg-[#f7f7f7]"
    >
      <div className="flex flex-col md:flex-row w-full min-h-[90vh]">
        {/* left image */}
        <div className="relative w-full h-[120%] -bottom-[10%] md:h-auto overflow-hidden">
          <div className="absolute inset-0 ">
            <Image
              ref={imageRef}
              src="/images/irish-cafe-heritage.webp"
              alt="Luxury Café Interior"
              fill
              className="object-cover opacity-90"
              priority
            />

            {/* <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" /> */}
          </div>
        </div>

        {/* right text */}
        <div className="relative w-full md:w-[30%] flex flex-col justify-center px-8 py-16 md:px-12 lg:px-16 space-y-8 md:space-y-12">
          <div className="w-12 h-px hidden md:block" />

          <div className="space-y-6">
            {/* Eyebrow */}
            <span className="block text-xs tracking-[0.25em] text-zinc-800 uppercase font-medium">
              Brand Essence
            </span>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-black">
              Heritage <br />
              <span className="text-zinc-900">&</span> Harmony.
            </h2>

            {/* Paragraph */}
            <p className="max-w-xs text-sm md:text-base leading-relaxed text-zinc-900 font-light">
              A precise convergence of Irish warmth, Italian culinary tradition, and
              American boldness. We curate an atmosphere where quality is felt, not just
              seen.
            </p>
          </div>

          {/* Optional: Very subtle background branding element */}
          <div className="absolute bottom-4 right-4 text-[10rem] leading-none font-bold text-white/5 pointer-events-none select-none overflow-hidden -z-10 hidden lg:block">
            IC
          </div>
        </div>
      </div>
    </section>
  );
}
