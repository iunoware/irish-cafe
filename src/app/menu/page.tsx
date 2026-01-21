import Hero from "@/components/pageComponents/menu/Hero";
import MenuHighlights from "@/components/pageComponents/menu/MenuHighlights";
import ChefsPick from "@/components/pageComponents/menu/ChefsPick";
import MenuCTA from "@/components/pageComponents/menu/MenuCTA";

const page = () => {
  return (
    <>
      <Hero />
      <ChefsPick />
      <MenuHighlights />
      <MenuCTA />
    </>
  );
};

export default page;
