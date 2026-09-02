"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/Projects" },
  { name: "Testimonials", href: "/testnomils" },
  { name: "Freelancing", href: "/freelancing" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/About-us" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5">
        {/* Logo - Elegant Text Version */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="font-bold text-3xl tracking-tight text-white group-hover:scale-105 transition-transform duration-300">
            {/* The stylish, handwritten-style text */}
            <span className="font-elegant-script text-white text-[2.2rem] group-hover:text-cyan-200">
              DR Protfolio
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact-us"
            className="hidden sm:inline-block px-5 py-2 rounded-lg text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all duration-200 shadow-md shadow-cyan-500/10 active:scale-95"
          >
            Contact me
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white focus:outline-none p-1"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-4 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact-us"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-2.5 rounded-lg text-sm font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all"
          >
            Contact me
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
