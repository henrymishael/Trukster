"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#solution" },
  { label: "Technology", href: "#technology" },
  { label: "About", href: "#about" },
  { label: "Operations", href: "#operations" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#050A18]/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-6",
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Image
            src="/assets/images/Logo2.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-medium tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#final-cta"
            className="relative text-sm font-semibold px-5 py-2.5 rounded-full bg-accent-blue text-white overflow-hidden group"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-[#38BDF8] translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "w-6 h-0.5 bg-white transition-all duration-300",
              menuOpen && "rotate-45 translate-y-2",
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-white transition-all duration-300",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-white transition-all duration-300",
              menuOpen && "-rotate-45 -translate-y-2",
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500",
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-6 py-4 bg-[#050A18]/95 backdrop-blur-xl border-t border-white/5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white transition-colors font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#final-cta"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center text-sm font-semibold px-5 py-3 rounded-full bg-accent-blue text-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
