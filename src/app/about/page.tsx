"use client";

import Hero from "@/components/pageComponents/about/Hero";
import BrandEssence from "@/components/pageComponents/about/BrandEssence";
import Differentiation from "@/components/pageComponents/about/Differentiation";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function About() {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });
  });
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <BrandEssence />
          <Differentiation />
        </div>
      </div>
    </>
  );
}
