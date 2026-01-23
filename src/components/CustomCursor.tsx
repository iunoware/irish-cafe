"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch device
    const touch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      (navigator as any).msMaxTouchPoints > 0;
    setIsTouchDevice(touch);

    // Check for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const { clientX, clientY } = e;

      // Immediate position for the dot
      gsap.to(dotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0,
      });

      // Smoothed position for the ring
      // Using a slightly longer duration for "gentle easing"
      gsap.to(ringRef.current, {
        x: clientX,
        y: clientY,
        duration: isReducedMotion ? 0 : 1,
        ease: "expo.out",
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest(".cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    if (!touch) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseover", handleMouseOver);
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);

      // Hide native cursor
      document.documentElement.style.cursor = "none";

      // Add global style to hide cursor on everything
      const style = document.createElement("style");
      style.id = "custom-cursor-style";
      style.innerHTML = `
        *, *::before, *::after {
          cursor: none !important;
        }
        @media screen and (max-width: 1024px) {
          *, *::before, *::after {
            cursor: auto !important;
          }
        }
      `;
      document.head.appendChild(style);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseover", handleMouseOver);
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseenter", handleMouseEnter);
        document.documentElement.style.cursor = "";
        const styleElement = document.getElementById("custom-cursor-style");
        if (styleElement) styleElement.remove();
      };
    }
  }, [isReducedMotion, isVisible]);

  useGSAP(() => {
    if (isHovering) {
      gsap.to(ringRef.current, {
        scale: 1.5,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(dotRef.current, {
        scale: 1.2,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(ringRef.current, {
        scale: 1,
        opacity: 0.4,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(dotRef.current, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [isHovering]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={containerRef}
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-9999 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ mixBlendMode: "difference" }}
    >
      {/* Central Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default CustomCursor;
