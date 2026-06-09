"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Branches", href: "#" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-500 ${
      scrolled
        ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] py-2.5 border-b border-gray-100"
        : "bg-white py-4 border-b border-gray-100"
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-[144px] h-auto shrink-0">
            <Image src="/logo.png" alt="Sai Baba Packers" width={144} height={54} className="object-contain w-full h-full" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="relative text-gray-500 hover:text-[#FF6B2B] text-[12px] font-bold px-4 py-2 uppercase tracking-[1.5px] transition-colors duration-200 group"
              >
                {l.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-[#FF6B2B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+918915162726" className="text-[11px] font-bold text-gray-400 hover:text-[#FF6B2B] uppercase tracking-wider transition-colors duration-200">
            +91-8915162726
          </a>
          <Link
            href="#quote"
            className="group flex items-center gap-2 bg-[#FF6B2B] hover:bg-[#e85d1f] text-white text-[11px] font-black px-5 py-2.5 rounded-lg uppercase tracking-[1.5px] shadow-[0_4px_14px_rgba(255,107,43,0.3)] hover:shadow-[0_6px_20px_rgba(255,107,43,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            <span>Free Quote</span>
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden w-9 h-9 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 px-6 pt-4 pb-6 flex flex-col gap-1 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-[#FF6B2B] hover:bg-orange-50/60 py-3 px-4 rounded-lg font-bold uppercase text-[11px] tracking-[1.5px] transition-all duration-200"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#quote"
            onClick={() => setOpen(false)}
            className="mt-3 bg-[#FF6B2B] text-white text-center py-3.5 rounded-xl font-black uppercase text-[11px] tracking-wider shadow-md hover:bg-[#e85d1f] transition-all"
          >
            Get Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
}