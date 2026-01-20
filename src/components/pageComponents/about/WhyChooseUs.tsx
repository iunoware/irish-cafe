import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";

gsap.registerPlugin(SplitText);

const contents = [
  {
    image: "/images/about-hero-back.png",
    alt: "Quiet Luxury Atmosphere",
    heading: "A space designed to be felt.",
    content:
      "Space designed for conversation, not consumption. Calm, considered interiors that invite you to stay.",
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
        },
      });

      tl.from(spanRef.current, {
        y: "100",
        opacity: 0,
      });

      gsap.utils.toArray(".reveal").forEach((el) => {
        const element = el as HTMLElement;
        const split = new SplitText(element, { type: "lines" });
        gsap.from(split.lines, {
          y: 100,
          opacity: 0,
          stagger: 0.4,
          scrollTrigger: {
            trigger: element,
            start: "top 65%",
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full text-black py-32 md:py-48 px-6 md:px-12 lg:px-24"
    >
      {/* bg texture */}
      <div className="absolute inset-0 opacity-80 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/xv.png')] " />
      </div>

      <div className="max-w-4xl mx-auto mb-32 md:mb-48">
        <span
          ref={spanRef}
          className="block text-xs md:text-sm tracking-[0.3em] text-neutral-800 uppercase font-medium mb-6"
        >
          Not Just Another Café
        </span>
        <h2
          // ref={headingRef}
          className="reveal text-4xl md:text-6xl font-light leading-tight tracking-tight text-black"
        >
          Our way of doing things <br />
          <span className="text-neutral-800">A deliberate way of serving</span>
          {/* Intention in every detail. <br />
          <span className="text-neutral-800">Excellence by design.</span> */}
        </h2>
      </div>

      <div className="flex flex-col w-full gap-32 md:gap-48">
        {/* image 1 */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="relative w-full md:w-[60%] aspect-4/3 md:aspect-16/10">
            <Image
              src="/images/about-hero-back.png"
              alt="Quiet Luxury Atmosphere"
              fill
              className="object-cover opacity-90 rounded-sm "
            />
          </div>
          <div className="md:mt-12 max-w-md">
            <h3 className="reveal text-2xl md:text-3xl font-normal text-black mb-2">
              A space designed to be felt.
            </h3>
            <div className="w-8 h-px bg-white/20 mb-4" />
            <p className="reveal text-neutral-800 text-sm md:text-base font-light leading-relaxed">
              Space designed for conversation, not consumption. Calm, considered interiors
              that invite you to stay.
            </p>
          </div>
        </div>

        {/* image 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-start">
          <div className="relative w-full md:w-[60%] aspect-4/3 md:aspect-16/10">
            <Image
              src="/images/brand-essence-front.png"
              alt="Artisan Coffee Craft"
              fill
              className="object-cover opacity-90 rounded-sm grayscale-20"
            />
          </div>
          <div className="md:mt-12 max-w-md">
            <h3 className="reveal text-2xl md:text-3xl font-normal text-black mb-2">
              Craft over trends.
            </h3>
            <div className="w-8 h-px bg-white/20 mb-4" />
            <p className="reveal text-neutral-800 text-sm md:text-base font-light leading-relaxed">
              We respect the ingredient, not the hype.
            </p>
          </div>
        </div>

        {/* image 3 */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="relative w-full md:w-[60%] aspect-4/3 md:aspect-16/10">
            <Image
              src="/images/about-hero-mid.png"
              alt="Quiet Luxury Atmosphere"
              fill
              className="object-cover opacity-90 rounded-sm grayscale-20"
            />
          </div>
          <div className="md:mt-12 max-w-md">
            <h3 className="reveal text-2xl md:text-3xl font-normal text-black mb-2">
              Culture over convenience.
            </h3>
            <div className="w-8 h-px bg-white/20 mb-4" />
            <p className="reveal text-neutral-800 text-sm md:text-base font-light leading-relaxed">
              A meeting point of global sensibilities.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-48 md:mt-64 text-center">
        <p className="reveal text-xl md:text-3xl font-light text-black tracking-wide">
          We know who we are -{" "}
          <span className="text-neutral-600">and that’s enough.</span>
        </p>
      </div>
    </section>
  );
}
