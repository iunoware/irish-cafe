import Hero from "@/components/pageComponents/gallery/Hero";
import SpaceGallery from "@/components/pageComponents/gallery/SpaceGallery";
import FoodGallery from "@/components/pageComponents/gallery/FoodGallery";
import DessertGallery from "@/components/pageComponents/gallery/DessertGallery";
import WelcomeBoard from "@/components/pageComponents/home/WelcomeBoard";

export default function Gallery() {
  return (
    <>
      <Hero />
      <SpaceGallery />
      <FoodGallery />
      <DessertGallery />
      <WelcomeBoard />
    </>
  );
}
