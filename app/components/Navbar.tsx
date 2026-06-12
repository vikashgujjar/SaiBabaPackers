"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, ChevronDown, Home, Building2, Car, Warehouse, Package, Truck } from "lucide-react";

const serviceDropdown = [
  { label: "Home Shifting Services",  href: "/services/home-shifting-services",  icon: Home,      accent: "#FF6B2B" },
  { label: "Office Relocation",       href: "/services/office-relocation",        icon: Building2, accent: "#00B49C" },
  { label: "Car Relocation Services", href: "/services/car-relocation-services",  icon: Car,       accent: "#FF6B2B" },
  { label: "Warehousing Services",    href: "/services/warehousing-services",     icon: Warehouse, accent: "#00B49C" },
  { label: "Packaging & Unpacking",   href: "/services/packaging-unpacking",      icon: Package,   accent: "#FF6B2B" },
  { label: "Loading & Unloading",     href: "/services/loading-unloading",        icon: Truck,     accent: "#00B49C" },
];

const links = [
  { label: "Home",         href: "/"           },
  { label: "About",        href: "/about"      },
  { label: "Services",     href: "/services",   dropdown: true },
  { label: "Our Branches", href: "/branches"   },
  { label: "Contact",      href: "/contact"    },
];

export default function Navbar() {
  const [open, setOpen]               = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [mobileServOpen, setMobileSO] = useState(false);
  const pathname                       = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-500 ${
      scrolled
        ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] py-1 border-b border-gray-100"
        : "bg-white py-1 border-b border-gray-100"
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-[240px] h-auto shrink-0">
            <Image src="/logo.png" alt="Sai Baba Packers" width={240} height={120} className="object-contain w-full h-full" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center">
          {links.map((l) =>
            l.dropdown ? (
              /* ── Services hover dropdown ── */
              <li key={l.label} className="relative group/services">
                <Link
                  href={l.href}
                  className={`flex items-center gap-1 text-[12px] font-bold px-4 py-2 uppercase tracking-[1.5px] transition-colors duration-200 group-hover/services:text-[#FF6B2B] ${
                    isActive(l.href) ? "text-[#FF6B2B]" : "text-gray-500"
                  }`}
                >
                  {l.label}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 group-hover/services:rotate-180 group-hover/services:text-[#FF6B2B] ${
                      isActive(l.href) ? "text-[#FF6B2B]" : ""
                    }`}
                  />
                </Link>

                {/* Dropdown panel — shown on hover via CSS */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[min(520px,90vw)] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50
                  opacity-0 invisible translate-y-2
                  group-hover/services:opacity-100 group-hover/services:visible group-hover/services:translate-y-0
                  transition-all duration-200 ease-out">

                  {/* Header strip */}
                  <div className="bg-[#1a1a2e] px-5 py-3 flex items-center justify-between">
                    <span className="text-[9.5px] font-black text-gray-500 uppercase tracking-[2.5px]">Our Services</span>
                    <Link
                      href="/services"
                      className="flex items-center gap-1 text-[10px] font-black text-[#FF6B2B] hover:text-orange-400 uppercase tracking-[1.5px] transition-colors"
                    >
                      View All <ArrowRight size={10} />
                    </Link>
                  </div>

                  {/* 2-col grid */}
                  <div className="grid grid-cols-2 gap-px bg-gray-100 p-px">
                    {serviceDropdown.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="group/item bg-white hover:bg-[#F7F4EE] px-5 py-4 flex items-start gap-3.5 transition-colors duration-150 relative overflow-hidden"
                        >
                          <div
                            className="absolute left-0 top-0 bottom-0 w-[2.5px] scale-y-0 group-hover/item:scale-y-100 transition-transform duration-200 origin-top rounded-r"
                            style={{ background: s.accent }}
                          />
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform duration-200"
                            style={{ background: `${s.accent}12` }}
                          >
                            <Icon size={16} strokeWidth={1.8} style={{ color: s.accent }} />
                          </div>
                          <div className="min-w-0">
                            <span className="block text-[12px] font-black text-[#1a1a2e] uppercase tracking-wide leading-snug group-hover/item:translate-x-0.5 transition-transform duration-150">
                              {s.label}
                            </span>
                            <span className="block text-[10px] text-gray-400 mt-0.5 font-medium">
                              Learn more →
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Footer CTA */}
                  <div className="px-5 py-3.5 bg-[#F7F4EE] border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-medium">Need help choosing a service?</span>
                    <a
                      href="tel:+919815162726"
                      className="text-[11px] font-black text-[#FF6B2B] hover:text-orange-600 uppercase tracking-wider transition-colors"
                    >
                      +91-9815162726
                    </a>
                  </div>
                </div>
              </li>
            ) : (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={`relative text-[12px] font-bold px-4 py-2 uppercase tracking-[1.5px] transition-colors duration-200 group ${
                    isActive(l.href) ? "text-[#FF6B2B]" : "text-gray-500 hover:text-[#FF6B2B]"
                  }`}
                >
                  {l.label}
                  <span className={`absolute bottom-0 left-4 right-4 h-px bg-[#FF6B2B] transition-transform duration-300 origin-left ${
                    isActive(l.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919815162726" className="text-[11px] font-bold text-gray-400 hover:text-[#FF6B2B] uppercase tracking-wider transition-colors duration-200">
            +91-9815162726
          </a>
          <Link
            href="/contact"
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
          {links.map((l) =>
            l.dropdown ? (
              <div key={l.label}>
                <button
                  onClick={() => setMobileSO((v) => !v)}
                  className={`w-full flex items-center justify-between hover:text-[#FF6B2B] hover:bg-orange-50/60 py-3 px-4 rounded-lg font-bold uppercase text-[11px] tracking-[1.5px] transition-all duration-200 ${
                    isActive(l.href) ? "text-[#FF6B2B] bg-orange-50/60" : "text-gray-600"
                  }`}
                >
                  {l.label}
                  <ChevronDown size={13} className={`transition-transform duration-200 ${mobileServOpen ? "rotate-180 text-[#FF6B2B]" : ""}`} />
                </button>
                {mobileServOpen && (
                  <div className="ml-4 mt-1 mb-1 flex flex-col gap-0.5 border-l-2 border-[#FF6B2B]/20 pl-3">
                    {serviceDropdown.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => { setOpen(false); setMobileSO(false); }}
                          className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg text-gray-500 hover:text-[#FF6B2B] hover:bg-orange-50/60 transition-all duration-150"
                        >
                          <Icon size={13} style={{ color: s.accent }} />
                          <span className="text-[11px] font-bold uppercase tracking-[1px]">{s.label}</span>
                        </Link>
                      );
                    })}
                    <Link
                      href="/services"
                      onClick={() => { setOpen(false); setMobileSO(false); }}
                      className="flex items-center gap-1.5 py-2 px-3 text-[10.5px] font-black text-[#FF6B2B] uppercase tracking-wider"
                    >
                      View All Services <ArrowRight size={11} />
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-3 px-4 rounded-lg font-bold uppercase text-[11px] tracking-[1.5px] transition-all duration-200 ${
                  isActive(l.href)
                    ? "text-[#FF6B2B] bg-orange-50/60"
                    : "text-gray-600 hover:text-[#FF6B2B] hover:bg-orange-50/60"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            href="/#quote"
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
