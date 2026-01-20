"use client";

import Hero from "@/components/pageComponents/about/Hero";
import BrandEssence from "@/components/pageComponents/about/BrandEssence";

import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import WhyChooseUs from "@/components/pageComponents/about/WhyChooseUs";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function About() {
  // useGSAP(() => {
  //   ScrollSmoother.create({
  //     wrapper: "#smooth-wrapper",
  //     content: "#smooth-content",
  //     smooth: 1,
  //     effects: true,
  //   });
  // });
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <BrandEssence />
          <WhyChooseUs />
        </div>
      </div>
    </>
  );
}
