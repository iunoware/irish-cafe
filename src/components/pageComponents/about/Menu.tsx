import Image from "next/image";

export default function Menu() {
  return (
    <section className="w-full bg-[#0a0a0a] text-white py-24 md:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-32 gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light mb-8 md:mb-12 tracking-tight leading-[1.1]">
              A Thoughtful Menu
            </h2>
            <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed max-w-md">
              This is not about variety. It is about coherence. Whether it is an Irish
              staple or an Italian classic, the approach remains the same: respect the
              origin, refine the preparation, and trust the ingredient.
            </p>
          </div>
          {/* Decorative Divider */}
          <div className="hidden md:block w-px h-32 bg-neutral-800 mt-4"></div>
        </div>

        {/* Editorial Grid */}
        <div className="flex flex-col gap-24 md:gap-32">
          {/* Row 1: Left Align Text, Right Align Image (Italian) */}
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-16">
            <div className="w-full md:w-5/12 order-2 md:order-1 flex flex-col items-end text-right md:pb-12">
              <div className="max-w-xs">
                <span className="block text-xs font-medium tracking-widest text-neutral-500 uppercase mb-4">
                  Italian Roots
                </span>
                <p className="text-xl md:text-2xl font-serif text-neutral-200 leading-snug">
                  Simple ingredients, demanding complete honesty.
                </p>
              </div>
            </div>
            <div className="w-full md:w-7/12 order-1 md:order-2">
              <div className="relative aspect-4/3 w-full overflow-hidden transition-all duration-700">
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

          {/* Row 2: Left Align Image, Right Align Text (Irish) */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 pl-0 md:pl-12 lg:pl-24">
            <div className="w-full md:w-6/12">
              <div className="relative aspect-3/4 md:aspect-4/5 w-full overflow-hidden transition-all duration-700">
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
                <span className="block text-xs font-medium tracking-widest text-neutral-500 uppercase mb-4">
                  Irish Heritage
                </span>
                <p className="text-xl md:text-2xl font-serif text-neutral-200 leading-snug">
                  Authenticity isn&apos;t about rigid tradition. It represents the spirit
                  of a place.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3: Centered/Full Width (American) */}
          <div className="flex flex-col items-center text-center gap-12 mt-8">
            <div className="relative w-full max-w-5xl aspect-video md:aspect-21/9 overflow-hidden transition-all duration-700">
              <Image
                src="/images/american.JPG"
                alt="American comfort food"
                fill
                className="object-cover"
                sizes="90vw"
              />
            </div>
            <div className="max-w-lg mx-auto">
              <p className="text-lg md:text-xl font-light text-neutral-300">
                <span className="block text-xs font-medium tracking-widest text-neutral-500 uppercase mb-3">
                  American Classic
                </span>
                Comfort that feels earned, not engineered. A balance of bold flavors and
                careful restraint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
