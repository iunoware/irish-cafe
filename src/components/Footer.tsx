"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative border-t border-zinc-100 font-sans text-zinc-600">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/clean-gray-paper.png')]" />
      </div>
      <div className="max-w-full z-10 p-10 bg-black mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid md:pl-30 lg:pl-40 grid-cols-1 items-center justify-center w-full md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 pb-20">
          {/* Brand Block */}
          <div className="flex flex-col space-y-8">
            <Link href="/" className="inline-block relative w-40 h-12">
              <Image
                src="/images/w-text.png"
                alt="The Irish Cafe Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-white/70">
              A premium international dining destination in Madurai, where exceptional
              Irish, Italian, and American flavours meet unhurried comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-8 lg:pl-12">
            {/* <h4 className="text-white/90 text-[11px] uppercase tracking-[0.3em] font-semibold">
              Navigation
            </h4> */}
            <nav className="flex flex-col space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Menu", href: "/menu" },
                { name: "Gallery", href: "/gallery" },
                { name: "Visit Us", href: "/visit" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm hover:text-white text-white/70 transition-colors w-fit border-b border-transparent hover:border-zinc-900 duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-white/90 text-[11px] uppercase tracking-[0.3em] font-semibold">
              Location
            </h4>
            <div className="space-y-6 text-sm">
              <div className="space-y-2">
                <p className="leading-tight text-white/70">
                  558, 4th West Street,
                  <br />
                  KK Nagar, Madurai,
                  <br />
                  Tamil Nadu 625020
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h5 className="text-white/90 text-[10px] uppercase tracking-[0.2em] font-medium">
                  Reservation
                </h5>
                <a
                  href="tel:+918148987007"
                  target="_blank"
                  className="text-white/70 hover:text-zinc-200 transition-colors duration-300 font-medium"
                >
                  +91 81489 87007
                </a>
              </div>

              <div className="flex flex-col space-y-2">
                <h5 className="text-white/90 text-[10px] uppercase tracking-[0.2em] font-medium">
                  Mail
                </h5>
                <a
                  // href="mailto:irishcafe@gmail.com"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=irishcafe@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-zinc-200 transition-colors duration-300 font-medium"
                >
                  irishcafe@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Connections */}
          <div className="flex flex-col space-y-8 ">
            <div className="w-full lg:w-fit flex flex-col space-y-8">
              <h4 className="text-white/90 text-[11px] uppercase tracking-[0.3em] font-semibold">
                Social
              </h4>
              <nav className="flex flex-col space-y-4 text-sm">
                <a
                  href="https://www.instagram.com/theirish.cafe?igsh=czNhMmZvM2cxNWFh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-white/80 transition-colors w-fit flex items-center gap-2 group"
                >
                  Instagram
                  <span className="w-0 h-px bg-zinc-900 group-hover:w-4 transition-all duration-300" />
                </a>
                <a
                  href="https://maps.app.goo.gl/8M8Rfu7nsBW2bPoNA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-white/80 transition-colors w-fit flex items-center gap-2 group"
                >
                  Google Maps
                  <span className="w-0 h-px bg-zinc-900 group-hover:w-4 transition-all duration-300" />
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-10 border-t border-white/40 flex flex-col justify-between items-center gap-8">
          <h2 className="md:text-[120px] text-5xl  uppercase tracking-tight md:leading-25">
            No Ordinary Dining.
          </h2>
          <div className="flex flex-row md:flex-row items-center gap-4 md:gap-8 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
            <p>
              © {currentYear}{" "}
              <a
                href="https://www.iunoware.com/"
                target="_blank"
                className="font-bold font-sans "
              >
                Iunoware Pvt Ltd.
              </a>{" "}
              All Rights Reserved.
            </p>
            <div className="hidden md:block w-px h-3 bg-zinc-200" />
            <div className="flex items-center gap-6">
              <p className="hover:text-zinc-600 transition-colors">Privacy Policy</p>
              <p className="hover:text-zinc-600 transition-colors">Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
