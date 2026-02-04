// "use client";

// import { useGSAP } from "@gsap/react";
import Image from "next/image";
// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const foodImages = [
  // 1
  {
    src: "/images/DSC00178.JPG",
    alt: "White sauce pasta at our multi-cuisine cafe in Madurai",
    dishName: "white sauce pasta",
    className: "md:col-span-4 md:row-span-2",
    aspect: "aspect-[3/4] md:aspect-auto md:h-full",
  },
  // 2
  {
    src: "/images/DSC00126.JPG",
    alt: "Irish cafe Lamb Dish - a must-try in Madurai",
    dishName: "Lamb Dish",
    className: "md:col-span-8 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
  // 3
  {
    src: "/images/DSC01547.jpg",
    alt: "Fresh ingredients at the best cafe in Madurai",
    dishName: "dish-3",
    className: "md:col-span-4 md:row-span-1",
    aspect: "aspect-square md:aspect-auto md:h-full",
  },
  // 4
  {
    src: "/images/DSC00130.webp",
    alt: "Signature dish",
    dishName: "dish-4",
    className: "md:col-span-4 md:row-span-2",
    aspect: "aspect-[3/4] md:aspect-auto md:h-full",
  },
  // 5
  {
    src: "/images/DSC01425.webp",
    alt: "Irish cafe Shepherd's pie",
    dishName: "SHEPHERD'S PIE",
    className: "md:col-span-5 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
  // 6
  {
    src: "/images/DSC00139.webp",
    alt: "Texture and taste",
    dishName: "Wood Fire Pizza",
    className: "md:col-span-3 md:row-span-1",
    aspect: "aspect-square md:aspect-auto md:h-full",
  },
  // 7
  {
    src: "/images/italian.webp",
    alt: "Italian heritage",
    dishName: "dish-7",
    className: "md:col-span-4 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
  // 8
  {
    src: "/images/american.webp",
    alt: "American bold flavors",
    dishName: "dish-8",
    className: "md:col-span-4 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
  // 9
  {
    src: "/images/DSC00146.webp",
    alt: "Irish cafe Wood Fire Pizza",
    dishName: "Wood Fire Pizza",
    className: "md:col-span-4 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
  // 10
  {
    src: "/images/DSC00161.webp",
    alt: "Irish cafe Cocktail Prawns",
    dishName: "Cocktail Prawns",
    className: "md:col-span-4 md:row-span-2",
    aspect: "aspect-[3/4] md:aspect-auto md:h-full",
  },
  // 11
  {
    src: "/images/DSC00125.webp",
    alt: "Roasted Chicken Burger at our multi-cuisine cafe in Madurai",
    dishName: "Roasted Chicken Burger",
    className: "md:col-span-8 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
  // 12
  {
    src: "/images/DSC00153.webp",
    alt: "American bold flavors",
    dishName: "dish-12",
    className: "md:col-span-4 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
  // 13
  {
    src: "/images/DSC00110.webp",
    alt: "French fries at the best cafe in Madurai",
    dishName: "french fries",
    className: "md:col-span-4 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
  // 14
  {
    src: "/images/DSC00077.webp",
    alt: "Grilled chicken steak",
    dishName: "grilled chicken steak",
    className: "md:col-span-8 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
  // 15
  {
    src: "/images/DSC00070.webp",
    alt: "Club Sandwich",
    dishName: "Club Sandwich",
    className: "md:col-span-4 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
  // 16
  {
    src: "/images/tuscan-cheesy-chicken.jpeg",
    alt: "Tuscan cheesy chicken at our multi-cuisine cafe in Madurai",
    dishName: "Tuscan cheesy chicken",
    className: "md:col-span-4 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
  // 17
  {
    src: "/images/oven-roasted-potatoes.jpeg",
    alt: "Loaded potatoes",
    dishName: "loaded Potatoes",
    className: "md:col-span-8 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
];

export default function FoodGallery() {
  // const containerRef = useRef<HTMLDivElement>(null);

  // useGSAP(
  //   () => {
  //     // 1
  //     // animation for images
  //     // gsap.utils.toArray<HTMLElement>(".bento-item").forEach((img, i) => {
  //     //   gsap.from(img, {
  //     //     opacity: 0,
  //     //     // y: 30,
  //     //     duration: 1,
  //     //     ease: "power2.out",
  //     //     scrollTrigger: {
  //     //       trigger: img,
  //     //       start: "top 90%",
  //     //     },
  //     //     delay: i * 0.05,
  //     //   });
  //     // });

  //     // 2
  //     // gsap.utils.toArray<HTMLElement>(".bento-item").forEach((img) => {
  //     //   gsap.from(img, {
  //     //     opacity: 0,
  //     //     stagger: 0.08,
  //     //     duration: 1,
  //     //     scrollTrigger: {
  //     //       trigger: containerRef.current,
  //     //       start: "top 90%",
  //     //       once: true,
  //     //     },
  //     //   });
  //     // });

  //     // fade in animation for text
  //     gsap.utils.toArray<HTMLElement>(".text-reveal").forEach((el, i) => {
  //       gsap.from(el, {
  //         y: 20,
  //         opacity: 0,
  //         duration: 1,
  //         scrollTrigger: {
  //           trigger: el,
  //           start: "top 85%",
  //         },
  //         delay: i * 0.1,
  //       });
  //     });
  //   },
  //   { scope: containerRef },
  // );

  return (
    <section
      // ref={containerRef}
      className="w-full relative py-24 md:py-40"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Editorial Heading Block */}
        <div className="mb-20 md:mb-32 max-w-sm">
          <h2 className="text-reveal text-3xl md:text-4xl font-serif font-light tracking-tight text-neutral-900 mb-6 ">
            Food & Craft
          </h2>
          <div className="text-reveal w-12 h-px bg-neutral-300 mb-6"></div>
          <p className="text-reveal text-sm md:text-base font-sans tracking-wide text-neutral-500 font-light leading-relaxed uppercase">
            A diverse multi-cuisine cafe <br />
            in Madurai. Craft before comfort.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 md:auto-rows-[250px] lg:auto-rows-[300px]">
          {foodImages.map((img, idx) => (
            <div
              key={idx}
              className={`group bento-item relative rounded-md overflow-hidden bg-neutral-100 ${img.className}`}
            >
              <div className={`relative w-full h-full ${img.aspect}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  // loading="lazy"
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 text-white flex justify-start items-end p-4 uppercase tracking-widest bg-linear-to-t from-black/30 to-transparent transition-all duration-300 sm:opacity-0 opacity-100 group-hover:opacity-100">
                <h3>{img.dishName}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
