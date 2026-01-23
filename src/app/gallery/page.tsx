import Hero from "@/components/pageComponents/gallery/Hero";
import SpaceGallery from "@/components/pageComponents/gallery/SpaceGallery";
import FoodGallery from "@/components/pageComponents/gallery/FoodGallery";
import DessertGallery from "@/components/pageComponents/gallery/DessertGallery";
import WelcomeBoard from "@/components/pageComponents/home/WelcomeBoard";

export default function Gallery() {
  return (
    <>
      <section className="bg-white overflow-x-clip relative">
        <div className="absolute inset-0 opacity-80 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('/images/clean-gray-paper.png')] " />
        </div>
        <Hero />
        <SpaceGallery />
        <FoodGallery />
        <DessertGallery />
        <WelcomeBoard />
      </section>
    </>
  );
}
