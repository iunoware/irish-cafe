"use client";

import Hero from "@/components/pageComponents/about/Hero";
import BrandEssence from "@/components/pageComponents/about/BrandEssence";
import WhyChooseUs from "@/components/pageComponents/about/WhyChooseUs";
import Philosophy from "@/components/pageComponents/about/Philosophy";
import Menu from "@/components/pageComponents/about/Menu";
import WelcomeBoard from "@/components/pageComponents/home/WelcomeBoard";

export default function About() {
  return (
    <>
      <section className="overflow-x-clip bg-white relative">
        <div className="absolute inset-0 opacity-80 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/xv.png')] " />
        </div>
        <Hero />
        <BrandEssence />
        <WhyChooseUs />
        <Philosophy />
        <Menu />
        <WelcomeBoard />
      </section>
    </>
  );
}
