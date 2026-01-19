"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background transformation threshold
      setIsScrolled(currentScrollY > 50);

      // Hide/Show logic with threshold
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        // Always show at top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Visit Us", href: "/visit" },
  ];

  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-out h-20 md:h-20 flex items-center px-6 md:px-12 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-white/65 backdrop-blur-md shadow-sm " : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center relative h-full">
          {/* Desktop Navigation - Left */}
          <div className="hidden md:flex items-center space-x-12 flex-1">
            {leftLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans font-medium text-[12px] uppercase tracking-[0.2em] transition-colors group relative ${
                  isScrolled
                    ? "text-zinc-900 hover:text-zinc-500"
                    : "text-white hover:text-zinc-300"
                }`}
              >
                {link.name === "Home" ? "" : link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Logo - Center */}
          <div className="shrink-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="block relative w-32 md:w-48 h-12 md:h-16 ">
              <Image
                src={
                  isScrolled ? "/images/the-irish-cafe-b-text.png" : "/images/w-text.png"
                }
                alt="The Irish Cafe"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center justify-end space-x-12 flex-1">
            {rightLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans font-medium text-[12px] uppercase tracking-[0.2em] transition-colors group relative ${
                  isScrolled
                    ? "text-zinc-900 hover:text-zinc-500"
                    : "text-white hover:text-zinc-300"
                }`}
              >
                {link.name === "Home" ? "" : link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden flex flex-col space-y-1.5 p-2 z-50 group"
            aria-label="Open menu"
          >
            <span
              className={`w-6 h-[1.5px] transition-all duration-300 ${
                isScrolled ? "bg-black" : "bg-white"
              }`}
            />
            <span
              className={`w-4 h-[1.5px] transition-all duration-300 ${
                isScrolled ? "bg-black" : "bg-white"
              } group-hover:w-6`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-100 bg-white/65 backdrop-blur-md ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full px-8 py-12 relative">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-5 left-5 text-black p-2 hover:rotate-90 transition-transform duration-300"
            aria-label="Close menu"
          >
            <svg
              width="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="mt-20 flex flex-col space-y-6">
            <span className="text-zinc-900 font-sans text-xs uppercase tracking-[0.4em] mb-4">
              Navigation
            </span>
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-zinc-900 font-serif text-5xl md:text-7xl font-bold tracking-tighter hover:pl-6 transition-all duration-500 flex items-center group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
                <span className="ml-4 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 text-2xl font-light font-sans">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-auto grid grid-cols-2 pt-12 border-t border-white/10">
            <div className="space-y-2">
              <p className="text-zinc-900 font-sans text-[10px] uppercase tracking-widest">
                Address
              </p>
              <a
                href="https://maps.app.goo.gl/8M8Rfu7nsBW2bPoNA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-sans text-sm leading-relaxed max-w-50"
              >
                The Irish cafe, 558 4th, Karumbalai Main Rd, Mellur, KK Nagar, Madurai,
                Tamil Nadu 625020
              </a>
            </div>
            <div className="space-y-2 text-right">
              <p className="text-zinc-900 font-sans text-[10px] uppercase tracking-widest">
                Connect
              </p>
              <p className="text-black font-sans text-sm">Instagram</p>
              <p className="text-black font-sans text-sm">Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
