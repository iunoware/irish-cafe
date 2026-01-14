import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
        <Image
          src="/images/bg.JPG"
          alt="The Irish Cafe Hero"
          fill
          className="object-cover brightness-[0.8]"
          priority
        />
        <div className="relative z-10 text-center space-y-6 px-4">
          <p className="font-inter uppercase tracking-[0.3em] text-sm md:text-base opacity-80">
            Est. 2024 — Madurai
          </p>
          <h1 className="text-5xl md:text-8xl font-libre font-bold tracking-tight">
            The Irish Cafe
          </h1>
          <p className="font-libre italic text-lg md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Where tradition meets the temple city. Experience premium coffee and
            authentic Irish hospitality.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M7 13L12 18L17 13M7 6L12 11L17 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Content Sections to enable scrolling */}
      <section className="py-32 px-6 md:px-12 bg-white flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl space-y-12">
          <h2 className="text-4xl md:text-5xl font-libre font-bold text-zinc-900 leading-tight">
            A Journey of Flavor and Elegance
          </h2>
          <p className="font-inter text-zinc-600 text-lg md:text-xl leading-relaxed">
            Located in the heart of Madurai, The Irish Cafe brings a
            sophisticated blend of world-class coffee and a serene, premium
            atmosphere. Every cup tells a story of precision, passion, and
            perfection.
          </p>
          <div className="pt-8">
            <button className="px-12 py-4 bg-zinc-900 text-white font-inter font-medium uppercase tracking-widest text-sm hover:bg-zinc-800 transition-all duration-300">
              Explore Our Story
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="relative h-[60vh] md:h-auto">
          <Image
            src="/images/hero.png"
            alt="Interior"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-12 md:p-24 bg-zinc-50 space-y-8">
          <h3 className="text-3xl md:text-4xl font-libre font-bold text-zinc-900">
            The Perfect Brew
          </h3>
          <p className="font-inter text-zinc-600 leading-relaxed">
            Our baristas are masters of their craft, ensuring that every
            extraction captures the soul of the bean. We source exclusively from
            premium estates to bring you the finest coffee experience in the
            city.
          </p>
        </div>
      </section>

      <section className="py-32 bg-zinc-900 text-white text-center">
        <h2 className="text-4xl md:text-6xl font-libre font-bold mb-12">
          Visit Us
        </h2>
        <p className="font-inter tracking-[0.2em] uppercase text-sm opacity-60">
          Opening Hours
        </p>
        <div className="mt-8 space-y-4 font-inter text-lg">
          <p>Mon — Fri: 8:00 AM - 11:00 PM</p>
          <p>Sat — Sun: 9:00 AM - 12:00 AM</p>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-100 bg-white text-center">
        <p className="font-inter text-zinc-400 text-sm">
          &copy; 2024 The Irish Cafe. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
