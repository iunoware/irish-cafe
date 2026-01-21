"use client";

import Hero from "@/components/pageComponents/about/Hero";
import BrandEssence from "@/components/pageComponents/about/BrandEssence";
import WhyChooseUs from "@/components/pageComponents/about/WhyChooseUs";
import Philosophy from "@/components/pageComponents/about/Philosophy";
import Menu from "@/components/pageComponents/about/Menu";

export default function About() {
  return (
    <>
      <section className="overflow-x-clip">
        <Hero />
        <BrandEssence />
        <WhyChooseUs />
        <Philosophy />
        <Menu />
      </section>
    </>
  );
}
