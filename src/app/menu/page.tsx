import Hero from "@/components/pageComponents/menu/Hero";
import MenuHighlights from "@/components/pageComponents/menu/MenuHighlights";
import ChefsPick from "@/components/pageComponents/menu/ChefsPick";
import MenuCTA from "@/components/pageComponents/menu/MenuCTA";

const page = () => {
  return (
    <>
      <div className="absolute inset-0 opacity-60 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('/images/floral-patterns.png')] " />
      </div>
      <Hero />
      <ChefsPick />
      <MenuHighlights />
      <MenuCTA />
    </>
  );
};

export default page;
