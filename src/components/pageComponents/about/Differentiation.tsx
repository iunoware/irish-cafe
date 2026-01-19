import Image from "next/image";

export default function Differentiation() {
  return (
    <section className="relative w-full bg-[#f7f7f7] text-black py-32 md:py-48 px-6 md:px-12 lg:px-24">
      {/* 
        1. SECTION INTRODUCTION
        Minimal, bold, declarative.
      */}
      <div className="max-w-4xl mx-auto mb-32 md:mb-48">
        <span className="block text-xs md:text-sm tracking-[0.3em] text-neutral-800 uppercase font-medium mb-6">
          Why Choose Us
        </span>
        <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight text-black">
          Intention in every detail. <br />
          <span className="text-neutral-800">Excellence by design.</span>
        </h2>
      </div>

      {/* 
        2. THREE VISUAL DIFFERENTIATORS
        Staggered editorial layout. Image dominant.
      */}
      <div className="flex flex-col w-full gap-32 md:gap-48">
        {/* Differentiator 01: Atmosphere (Left aligned large) */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="relative w-full md:w-[60%] aspect-4/3 md:aspect-16/10">
            <Image
              src="/images/about-hero-back.png"
              alt="Quiet Luxury Atmosphere"
              fill
              className="object-cover opacity-90 rounded-sm grayscale-20"
            />
          </div>
          <div className="md:mt-12 max-w-xs">
            <h3 className="text-2xl md:text-3xl font-normal text-black mb-2">
              Atmosphere over noise.
            </h3>
            <div className="w-8 h-px bg-white/20 mb-4" />
            <p className="text-neutral-800 text-sm md:text-base font-light leading-relaxed">
              Space designed for conversation, not consumption.
            </p>
          </div>
        </div>

        {/* Differentiator 02: Craft (Right aligned / Shifted) */}
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-start">
          <div className="relative w-full md:w-[50%] aspect-3/4 md:aspect-4/5">
            <Image
              src="/images/brand-essence-front.png"
              alt="Artisan Coffee Craft"
              fill
              className="object-cover opacity-90"
            />
          </div>
          <div className="md:mt-32 max-w-xs self-end md:text-right">
            <h3 className="text-2xl md:text-3xl font-normal text-black mb-2">
              Craft over trends.
            </h3>
            <div className="w-8 h-px bg-white/20 mb-4 md:ml-auto" />
            <p className="text-neutral-800 text-sm md:text-base font-light leading-relaxed">
              We respect the ingredient, not the hype.
            </p>
          </div>
        </div>

        {/* Differentiator 03: Culture (Center / Wide) */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:pl-[20%]">
          <div className="relative w-full md:w-[70%] aspect-video md:aspect-21/9">
            <Image
              src="/images/about-hero-mid.png"
              alt="Global Design Culture"
              fill
              className="object-cover opacity-90 grayscale-10"
            />
          </div>
          <div className="md:mt-8 max-w-xs md:-ml-12 relative z-10 md:p-4">
            <h3 className="text-2xl md:text-3xl font-normal text-black mb-2">
              Culture over convenience.
            </h3>
            <div className="w-8 h-px bg-white/20 mb-4" />
            <p className="text-neutral-800 text-sm md:text-base font-light leading-relaxed">
              A meeting point of global sensibilities.
            </p>
          </div>
        </div>
      </div>

      {/* 
        3. CLOSING CONFIDENCE LINE
        Bold, final, no CTA.
      */}
      <div className="mt-48 md:mt-64 text-center">
        <p className="text-xl md:text-3xl font-light text-black tracking-wide">
          We know who we are -{" "}
          <span className="text-neutral-600">and that’s enough.</span>
        </p>
      </div>
    </section>
  );
}
