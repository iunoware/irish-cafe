import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-start text-white bg-black">
      {/* Background Image with subtle zoom-in effect */}
      <div className=" fixed top-0 left-0 w-full h-full">
        <Image
          src="/images/2.jpg"
          alt="The Irish Cafe Interior"
          fill
          className="object-cover object-center scale-105 animate-subtle-zoom"
          priority
        />
        {/* Editorial Overlay */}
        {/* <div className="absolute inset-0 bg-black/20" /> */}
      </div>
      {/* <div className="absolute inset-0">
        <Image
          src="/images/food.png"
          alt="The Irish Cafe Interior"
          fill
          className="object-cover z-20 object-top brightness-[0.7] scale-105 animate-subtle-zoom"
          priority
        />
      </div> */}

      <div className="relative z-10 text-start px-26 space-y-8 animate-fade-in-up">
        <div className="overflow-hidden">
          <p className="font-sans uppercase tracking-[0.4em] text-[10px] md:text-xs opacity-70 animate-slide-up animation-delay-200">
            Est. 2024 — Madurai
          </p>
        </div>

        <div className="overflow-hidden">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-tight animate-slide-up animation-delay-400">
            The Irish Cafe
          </h1>
        </div>

        <div className="overflow-hidden">
          <p className="font-serif italic text-lg md:text-xl opacity-90 max-w-lg mx-auto leading-relaxed animate-slide-up animation-delay-600">
            Where tradition meets the temple city. Experience premium coffee and
            authentic Irish hospitality.
          </p>
        </div>

        <div className="pt-8 animate-fade-in animation-delay-1000">
          <a
            href="/menu"
            className="inline-block group relative font-sans text-[11px] uppercase tracking-[0.3em] py-4 px-10 border border-white/30 hover:border-white transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              View Menu
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
          </a>
        </div>
      </div>
      {/* <div className="w-full z-10 h-full flex items-center justify-center">
        <h1 className="text-9xl absolute top-65 font-semibold ">Irish Cafe</h1>
      </div> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-40 animate-fade-in animation-delay-1500">
        <span className="font-sans text-[9px] uppercase tracking-[0.4em] vertical-text">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
