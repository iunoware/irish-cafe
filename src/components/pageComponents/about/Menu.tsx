import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Menu() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // image container fade in
      // gsap.utils.toArray(".image-container-fade").forEach((el) => {
      //   const element = el as HTMLElement;
      //   gsap.fromTo(
      //     element,
      //     { y: 100, opacity: 0 },
      //     {
      //       y: 0,
      //       opacity: 1,
      //       duration: 0.2,
      //       stagger: 0.3,
      //       scrollTrigger: {
      //         trigger: element,
      //         start: "top 65%",
      //       },
      //     },
      //   );
      // });
      //
      // heading
      // gsap.utils.toArray(".reveal").forEach((el) => {
      //   const element = el as HTMLElement;
      //   const split = new SplitText(element, { type: "chars" });
      //   gsap.from(split.chars, {
      //     y: 100,
      //     opacity: 0,
      //     stagger: 0.02,
      //     scrollTrigger: {
      //       trigger: element,
      //       start: "top 65%",
      //     },
      //   });
      // });
      //
      // para
      // gsap.utils.toArray(".paraReveal").forEach((el) => {
      //   const element = el as HTMLElement;
      //   const split = new SplitText(element, { type: "words" });
      //   gsap.from(split.words, {
      //     y: 100,
      //     opacity: 0,
      //     stagger: 0.02,
      //     scrollTrigger: {
      //       trigger: element,
      //       start: "top 80%",
      //     },
      //   });
      // });

      const panels = gsap.utils.toArray(".panel");

      const totalPanels = 4;

      gsap.to(panels, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          // snap: {
          //   snapTo: 1 / (totalPanels - 1),
          //   duration: 0.5,
          //   ease: "power1.inOut",
          // },
          end: () => "+=" + containerRef.current!.offsetWidth * 3,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative w-full text-black py-24 md:py-40">
      {/* bg texture */}
      <div className="absolute inset-0 opacity-80 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/xv.png')] " />
      </div>

      <div className=" flex flex-row gap-5 h-full overflow-x-clip w-[400%] px-6 md:px-12 lg:px-24">
        {/* Header Section */}
        <div className="flex panel flex-col h-full w-screen md:flex-row justify-center items-start mb-24 md:mb-32 gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl reveal md:text-5xl lg:text-7xl font-serif font-light mb-8 md:mb-12 tracking-tight leading-[1.1]">
              A Thoughtful <br /> Menu
            </h2>
            <p className="paraReveal text-neutral-800 text-base md:text-lg font-light leading-relaxed max-w-md">
              This is not about variety. It is about coherence. Whether it is an Irish
              staple or an Italian classic, the approach remains the same: respect the
              origin, refine the preparation, and trust the ingredient.
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col gap-24 md:gap-32"> */}
        {/* Row 1 */}
        <div className="flex panel flex-col h-full w-screen md:flex-row items-center md:items-end gap-8 md:gap-16">
          <div className="w-full md:w-5/12 order-2 md:order-1 flex flex-col items-end text-right md:pb-12">
            <div className="max-w-xs">
              <span className="reveal block text-xs font-medium tracking-widest text-black uppercase mb-4">
                Italian Roots
              </span>
              <p className="paraReveal text-xl md:text-2xl font-serif text-neutral-800 leading-snug">
                Simple ingredients, demanding complete honesty.
              </p>
            </div>
          </div>
          <div className="w-full md:w-7/12 order-1 md:order-2">
            <div className="image-container-fade relative aspect-4/3 w-full overflow-hidden transition-all duration-700">
              <Image
                src="/images/italian.JPG"
                alt="Italian cuisine details"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </div>
        </div>

        {/* Row 2*/}
        <div className="flex panel flex-col h-full w-screen md:flex-row items-center md:items-start gap-8 md:gap-16 pl-0 md:pl-12 lg:pl-24">
          <div className="w-full md:w-6/12">
            <div className="image-container-fade relative aspect-3/4 md:aspect-4/5 w-full overflow-hidden transition-all duration-700">
              <Image
                src="/images/irish.JPG"
                alt="Authentic Irish warmth"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="w-full md:w-5/12 pt-0 md:pt-16">
            <div className="max-w-xs">
              <span className="reveal block text-xs font-medium tracking-widest text-black uppercase mb-4">
                Irish Heritage
              </span>
              <p className="paraReveal text-xl md:text-2xl font-serif text-neutral-800 leading-snug">
                Authenticity isn&apos;t about rigid tradition. It represents the spirit of
                a place.
              </p>
            </div>
          </div>
        </div>

        {/* Row 3*/}
        <div className="flex panel flex-col h-full w-screen items-center text-center gap-12 mt-8">
          <div className="image-container-fade relative w-full max-w-5xl aspect-video md:aspect-21/9 overflow-hidden transition-all duration-700">
            <Image
              src="/images/american.JPG"
              alt="American comfort food"
              fill
              className="object-cover"
              sizes="90vw"
            />
          </div>
          <div className="max-w-lg mx-auto">
            <span className="reveal block text-xs font-medium tracking-widest text-black uppercase mb-3">
              American Classic
            </span>
            <p className="paraReveal text-lg md:text-xl font-light text-neutral-800">
              Comfort that feels earned, not engineered. A balance of bold flavors and
              careful restraint.
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
