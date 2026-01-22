import Image from "next/image";

export default function PeopleGallery() {
  const images = [
    {
      src: "/images/DSC00178.jpg",
      alt: "Barista focused on craft",
      width: "col-span-12 md:col-span-7",
      aspect: "aspect-[4/5] md:aspect-[16/10]",
      marginTop: "mt-0",
    },
    {
      src: "/images/DSC00178.jpg",
      alt: "Hands holding a warm drink",
      width: "col-span-12 md:col-span-4 md:col-start-9",
      aspect: "aspect-[3/4]",
      marginTop: "md:-mt-24",
    },
    {
      src: "/images/DSC00178.jpg",
      alt: "Quiet conversation in the cafe",
      width: "col-span-12 md:col-span-5 md:col-start-2",
      aspect: "aspect-[4/3]",
      marginTop: "md:mt-12",
    },
    {
      src: "/images/DSC00178.jpg",
      alt: "Details of cafe life",
      width: "col-span-12 md:col-span-4 md:col-start-8",
      aspect: "aspect-square",
      marginTop: "md:-mt-16",
    },
  ];

  return (
    <section className="w-full bg-[#fcfcf9] py-24 md:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-xs md:text-sm font-medium tracking-[0.25em] text-neutral-500 uppercase mb-4">
            People & Moments
          </h2>
          <p className="text-lg md:text-xl font-light italic text-neutral-400">
            Life unfolds quietly, intentionally.
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-12 relative">
          {images.map((img, index) => (
            <div
              key={index}
              className={`${img.width} ${img.marginTop} relative overflow-hidden`}
            >
              <div
                className={`relative w-full ${img.aspect} overflow-hidden bg-neutral-100`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover opacity-90 transition-opacity duration-700 hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
