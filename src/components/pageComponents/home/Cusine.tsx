import Image from "next/image";

export default function Cusine() {
  const cuisines = [
    {
      name: "Irish",
      tagline: "AUTHENTIC COMFORT",
      image: "/images/irish.JPG",
      layout: "large-left",
    },
    {
      name: "Italian",
      tagline: "REFINED CLASSICS",
      image: "/images/italian.JPG",
      layout: "offset-right",
    },
    {
      name: "American",
      tagline: "BOLD MODERN SPIRIT",
      image: "/images/american.JPG",
      layout: "centered-overlap",
    },
  ];

  return (
    <section className="relative bg-white py-24 md:py-18 px-6 overflow-hidden">
      {/* Subtle Background Detail */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]" />
      </div>

      <h2 className="pb-25 tracking-tight leading-[1.1] italic text-transparent bg-clip-text bg-linear-to-r from-gray-600 via-gray-800 to-black text-center text-4xl md:text-7xl">
        The{" "}
        {/* <span className="italic text-transparent bg-clip-text bg-linear-to-r from-gray-500 to-black"> */}
        Cuisines
        {/* </span> */}
      </h2>

      <div className="max-w-7xl mx-auto space-y-32 md:space-y-64">
        {/* Irish - Large Left */}
        <div className="flex flex-col md:flex-row items-end gap-12 md:gap-24 relative">
          <div className="w-full md:w-[70%] relative z-10">
            <div className="aspect-4/5 rounded-sm md:aspect-video relative overflow-hidden">
              <Image
                src={cuisines[0].image}
                alt="Irish Cuisine"
                fill
                className="object-cover brightness-[0.9] hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>
          <div className="w-full md:w-[30%] space-y-6 pb-8">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-medium">
              Section 01
            </span>
            <h3 className="font-serif text-4xl md:text-6xl text-zinc-900 tracking-tight">
              Irish
            </h3>
            <p className="font-sans text-zinc-500 text-xs md:text-sm tracking-[0.3em]">
              {cuisines[0].tagline}
            </p>
          </div>
        </div>

        {/* Italian - Offset Right */}
        <div className="flex flex-col md:flex-row-reverse items-start gap-12 md:gap-24 relative">
          <div className="w-full md:w-[65%] relative z-10 md:mt-24">
            <div className="aspect-4/5 rounded-sm md:aspect-4/3 relative overflow-hidden">
              <Image
                src={cuisines[1].image}
                alt="Italian Cuisine"
                fill
                className="object-cover brightness-[0.9] hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>
          <div className="w-full md:w-[35%] space-y-6 text-left md:text-right pt-12 md:sticky md:top-32">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-medium">
              Section 02
            </span>
            <h3 className="font-serif text-4xl md:text-6xl text-zinc-900 tracking-tight">
              Italian
            </h3>
            <p className="font-sans text-zinc-500 text-xs md:text-sm tracking-[0.3em]">
              {cuisines[1].tagline}
            </p>
          </div>
        </div>

        {/* American - Centered Overlap */}
        <div className="relative flex flex-col items-center">
          <div className="w-full md:w-[80%] relative z-10">
            <div className="aspect-4/5 rounded-sm md:aspect-21/9 relative overflow-hidden">
              <Image
                src={cuisines[2].image}
                alt="American Cuisine"
                fill
                className="object-cover brightness-[0.9] hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>
          <div className="w-full md:w-auto md:absolute md:-bottom-20 md:right-32 rounded-sm bg-white bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] md:p-12 z-20 space-y-4 md:shadow-2xl md:shadow-zinc-100 flex flex-col items-center md:items-end mt-8">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-medium">
              Section 03
            </span>
            <h3 className="font-serif text-4xl md:text-6xl text-zinc-900 tracking-tight">
              American
            </h3>
            <p className="font-sans text-zinc-500 text-xs md:text-sm tracking-[0.3em]">
              {cuisines[2].tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
