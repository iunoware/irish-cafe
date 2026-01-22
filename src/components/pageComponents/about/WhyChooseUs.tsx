import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";

gsap.registerPlugin(SplitText);

interface Contents {
  id: number;
  image: string;
  alt: string;
  heading: string;
  content: string;
}

const contents: Contents[] = [
  {
    id: 1,
    image: "/images/the-irish-cafe-multi-cuisine.webp",
    alt: "Quiet Luxury Atmosphere",
    heading: "A café shaped by intention, not impulse.",
    content:
      "We believe a café should feel calm, not crowded. Our space is designed to encourage conversation, comfort, and unhurried moments — not rush or distraction. Every element works together to create an environment where people feel present, not pressured.",
  },
  {
    id: 2,
    image: "/images/best-cuisines-in-madurai.webp",
    alt: "Artisan Coffee Craft",
    heading: "Craft over trends.",
    content:
      "We focus on quality that lasts, not ideas that fade. From ingredients to preparation, every detail is chosen with care, patience, and respect for the process. What we serve is intentional - not driven by trends, but by consistency and craftsmanship.",
  },
  {
    id: 3,
    image: "/images/best-cafe-in-madurai.webp",
    alt: "Quiet Luxury Atmosphere",
    heading: "Culture over convenience.",
    content:
      "The Irish Cafe brings together influences from different cultures, thoughtfully interpreted through design, taste, and experience. It’s a place shaped by ideas, not shortcuts - where global sensibilities meet local warmth.",
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

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

      // image container fade in
      gsap.utils.toArray(".image-container-fade").forEach((el) => {
        const element = el as HTMLElement; // we have to use this line for typescript
        gsap.from(element, {
          y: 100,
          opacity: 0,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: element,
            start: "top 65%",
          },
        });
      });

      // heading
      gsap.utils.toArray(".reveal").forEach((el) => {
        const element = el as HTMLElement;
        const split = new SplitText(element, { type: "chars" });
        gsap.from(split.chars, {
          y: 100,
          opacity: 0,
          stagger: 0.01,
          scrollTrigger: {
            trigger: element,
            start: "top 65%",
          },
        });
      });

      // para
      gsap.utils.toArray(".paraReveal").forEach((el) => {
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
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full text-black py-32 md:py-48 px-6 md:px-12 lg:px-24"
    >
      {/* bg texture */}
      {/* <div className="absolute inset-0 opacity-80 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/xv.png')] " />
      </div> */}

      {/* heading */}
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

      {/* image and content */}
      <div className="flex flex-col w-full gap-32 md:gap-48">
        {contents.map((content, index) => (
          <div
            key={content.id}
            className={`flex ${index % 2 === 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"} gap-8 md:gap-16 items-start`}
          >
            <div
              // ref={imageContainerRef}
              className="image-container-fade relative w-full lg:w-[60%] aspect-4/3 lg:aspect-16/10"
            >
              <Image
                ref={imageRef}
                src={content.image}
                alt={content.alt}
                fill
                className="object-cover h-[120%] opacity-90 rounded-sm "
              />
            </div>
            <div className="md:mt-12 max-w-md">
              <h3 className="reveal text-2xl md:text-3xl wrap-break-words font-normal text-black mb-2">
                {content.heading}
              </h3>
              <div className="w-8 h-px bg-white/20 mb-4" />
              <p className="paraReveal text-neutral-800 text-sm md:text-base font-light leading-relaxed">
                {content.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-48 md:mt-64 text-center">
        <p className="reveal text-xl md:text-3xl font-light text-black tracking-wide">
          We know who we are -{" "}
          <span className="text-neutral-600">and that’s enough.</span>
        </p>
      </div> */}
    </section>
  );
}
