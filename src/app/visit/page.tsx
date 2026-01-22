import Hero from "@/components/pageComponents/visiteUs/Hero";
import LocationSection from "@/components/pageComponents/visiteUs/LocationSection";
import WorkingHours from "@/components/pageComponents/visiteUs/WorkingHours";

import MenuCTA from "@/components/pageComponents/menu/MenuCTA";

const page = () => {
  return (
    <main className="relative bg-white">
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/clean-gray-paper.png')]" />
      </div>
      <Hero />
      <LocationSection />
      <WorkingHours />
      <MenuCTA />
    </main>
  );
};

export default page;
