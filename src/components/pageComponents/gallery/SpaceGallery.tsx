import Image from "next/image";

const images = [
  {
    src: "/images/best-cafe-in-madurai.webp",
    alt: "Quiet cafe interior with natural light",
    aspect: "aspect-[4/3] md:aspect-[16/9]",
    widthClass: "col-span-12",
    heightClass: "h-[50vh] md:h-[70vh]",
  },
  {
    src: "/images/irish-cafe-heritage.webp",
    alt: "Shadows and textures on a cafe wall",
    aspect: "aspect-[3/4]",
    widthClass: "col-span-12 md:col-span-5 md:col-start-2",
    heightClass: "h-[60vh]",
  },
  {
    src: "/images/the-irish-cafe-multi-cuisine.webp",
    alt: "Minimal seating corner",
    aspect: "aspect-[4/5]",
    widthClass: "col-span-12 md:col-span-4 md:col-start-8", // Offset grid
    heightClass: "h-[50vh]",
  },
];

export default function Gallery() {
  return (
    <section className="w-full relative bg-[#F5F5F0] py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Minimal Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
            The Space
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-12 gap-y-16 md:gap-y-32">
          {/* Main Anchor Image */}
          <div className={`${images[0].widthClass} relative`}>
            <div className={`relative w-full ${images[0].heightClass}`}>
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          {/* Supporting Images with uneven rhythm */}
          <div className={`${images[1].widthClass} relative mt-0 md:-mt-12`}>
            <div className={`relative w-full ${images[1].heightClass}`}>
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className={`${images[2].widthClass} relative mt-0 md:mt-24`}>
            <div className={`relative w-full ${images[2].heightClass}`}>
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
