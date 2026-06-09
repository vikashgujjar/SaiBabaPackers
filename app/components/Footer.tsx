"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

const menuLinks = [
  { label: "Home",        href: "#"        },
  { label: "About Us",    href: "#about"   },
  { label: "Services",    href: "#services"},
  { label: "Our Branches",href: "#"        },
  { label: "Gallery",     href: "#gallery" },
  { label: "Contact Us",  href: "#contact" },
];

const serviceLinks = [
  { label: "Home Shifting",          href: "#services" },
  { label: "Office Shifting",        href: "#services" },
  { label: "Packing & Unpacking",    href: "#services" },
  { label: "Loading & Unloading",    href: "#services" },
  { label: "Car Relocation",         href: "#services" },
  { label: "Warehousing Services",   href: "#services" },
];

const branches = [
  {
    label:   "Branch 01",
    area:    "Ramnagar, Chandigarh",
    address: "Shop No. 336, Old Rajpur Road, Near Police Station",
    pin:     "160101",
    maps:    "https://maps.google.com",
  },
  {
    label:   "Branch 02",
    area:    "Fuji Complex, Chandigarh",
    address: "Plot No. 221/26, Road Near Fuji Complex",
    pin:     "160102",
    maps:    "https://maps.google.com",
  },
];

const socials = [
  { label: "Facebook",  href: "#", icon: FaFacebookF,  color: "#1877F2" },
  { label: "Twitter",   href: "#", icon: FaTwitter,    color: "#1DA1F2" },
  { label: "LinkedIn",  href: "#", icon: FaLinkedinIn, color: "#0A66C2" },
  { label: "Instagram", href: "#", icon: FaInstagram,  color: "#E1306C" },
  { label: "WhatsApp",
    href: "https://wa.me/918915162726",
    icon: FaWhatsapp,
    color: "#25D366",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] relative overflow-hidden">

      {/* Top hairline */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B2B]/50 to-transparent" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ══════════════════════════════════════
          ZONE 1 — CTA band
      ══════════════════════════════════════ */}
      <div className="relative border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

          {/* Left: headline */}
          <div>
            <p className="text-[9.5px] font-black text-[#00B49C] uppercase tracking-[3px] mb-2">
              Get In Touch
            </p>
            <h3 className="text-[28px] lg:text-[36px] font-black text-white uppercase leading-[0.92] tracking-tight">
              Ready to Move?{" "}
              <span className="text-[#FF6B2B]">Let's Talk.</span>
            </h3>
          </div>

          {/* Right: contact actions */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Phone */}
            <a
              href="tel:+918915162726"
              className="group flex items-center gap-3 bg-[#FF6B2B] hover:bg-[#e85d1f] text-white font-black px-6 py-3.5 rounded-xl text-[12px] uppercase tracking-[2px] shadow-[0_6px_20px_rgba(255,107,43,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              <Phone size={14} />
              +91-8915162726
            </a>

            {/* Quote */}
            <Link
              href="#quote"
              className="group flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.10] border border-white/10 hover:border-white/20 text-white font-black px-6 py-3.5 rounded-xl text-[12px] uppercase tracking-[2px] transition-all duration-200"
            >
              Free Quote
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918915162726"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366] border border-[#25D366]/20 hover:border-[#25D366] text-[#25D366] hover:text-white font-black px-5 py-3.5 rounded-xl text-[12px] uppercase tracking-[2px] transition-all duration-200"
            >
              <FaWhatsapp size={15} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          ZONE 2 — Main content grid
      ══════════════════════════════════════ */}
      <div className="relative">
        <div className="max-w-[1200px] mx-auto px-6 py-14">
          <div className="grid lg:grid-cols-[2.2fr_1fr_1fr_1.4fr] gap-10">

            {/* ── Brand column ── */}
            <div className="relative">
              {/* Decorative large watermark */}
              <div
                className="absolute -right-4 -top-4 text-[120px] font-black leading-none select-none pointer-events-none tracking-tighter opacity-[0.04] text-[#FF6B2B]"
              >
                SB
              </div>

              <div className="relative z-10">
                {/* Logo mark */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-[180px] h-auto shrink-0">
                    <Image src="/logo.png" alt="Sai Baba Packers" width={180} height={54} className="object-contain w-full h-full" />
                  </div>
                </div>

                <p className="text-[13px] text-gray-600 leading-relaxed mb-6 max-w-[280px]">
                  India's trusted relocation partner since 2010 — delivering
                  damage-free, on-time moves for 2,500+ families and businesses
                  across 50+ cities.
                </p>

                {/* Stat pills */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {[
                    { n: "15+",    l: "Years"   },
                    { n: "2500+",  l: "Moves"   },
                    { n: "50+",    l: "Cities"  },
                    { n: "4.9★",   l: "Rating"  },
                  ].map(s => (
                    <div key={s.l}
                      className="bg-white/[0.04] border border-white/6 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                      <span className="text-[#FF6B2B] font-black text-[12px] leading-none">{s.n}</span>
                      <span className="text-gray-600 text-[9.5px] font-bold uppercase tracking-wider">{s.l}</span>
                    </div>
                  ))}
                </div>

                {/* Socials */}
                <div className="flex gap-2">
                  {socials.map(s => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        target={s.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group w-8 h-8 rounded-lg bg-white/[0.04] border border-white/6 flex items-center justify-center text-gray-600 transition-all duration-200 hover:scale-105"
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.background = s.color;
                          (e.currentTarget as HTMLElement).style.borderColor = s.color;
                          (e.currentTarget as HTMLElement).style.color = "#fff";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.background = "";
                          (e.currentTarget as HTMLElement).style.borderColor = "";
                          (e.currentTarget as HTMLElement).style.color = "";
                        }}
                      >
                        <Icon size={13} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── Quick links ── */}
            <div>
              <h4 className="text-white text-[11px] font-black uppercase tracking-[2px] mb-5 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#FF6B2B] rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {menuLinks.map(l => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="group flex items-center gap-2 text-[12.5px] text-gray-600 hover:text-white transition-colors duration-200"
                    >
                      <ChevronRight
                        size={11}
                        className="text-[#FF6B2B] group-hover:translate-x-0.5 transition-transform duration-200 shrink-0"
                      />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Services ── */}
            <div>
              <h4 className="text-white text-[11px] font-black uppercase tracking-[2px] mb-5 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#FF6B2B] rounded-full" />
                Services
              </h4>
              <ul className="space-y-2.5">
                {serviceLinks.map(s => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      className="group flex items-center gap-2 text-[12.5px] text-gray-600 hover:text-white transition-colors duration-200"
                    >
                      <ChevronRight
                        size={11}
                        className="text-[#00B49C] group-hover:translate-x-0.5 transition-transform duration-200 shrink-0"
                      />
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contact ── */}
            <div>
              <h4 className="text-white text-[11px] font-black uppercase tracking-[2px] mb-5 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#FF6B2B] rounded-full" />
                Contact
              </h4>

              {/* Phone */}
              <a
                href="tel:+918915162726"
                className="group flex items-center gap-3 mb-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#FF6B2B]/30 hover:bg-[#FF6B2B]/5 transition-all duration-200"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FF6B2B]/15 flex items-center justify-center shrink-0">
                  <Phone size={12} className="text-[#FF6B2B]" />
                </div>
                <div>
                  <p className="text-[8.5px] font-black text-gray-600 uppercase tracking-wider">Call Us</p>
                  <p className="text-[13px] font-black text-white">+91-8915162726</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:saibabamovers.chd@gmail.com"
                className="group flex items-center gap-3 mb-5 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#00B49C]/30 hover:bg-[#00B49C]/5 transition-all duration-200"
              >
                <div className="w-7 h-7 rounded-lg bg-[#00B49C]/15 flex items-center justify-center shrink-0">
                  <Mail size={12} className="text-[#00B49C]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[8.5px] font-black text-gray-600 uppercase tracking-wider">Email Us</p>
                  <p className="text-[11px] font-bold text-gray-400 truncate">saibabamovers.chd@gmail.com</p>
                </div>
              </a>

              {/* ISO badge */}
              <div className="flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-xl px-3 py-2.5">
                <div className="w-6 h-6 rounded-md bg-[#00B49C]/15 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                    <path d="M8 1L10 6H15L11 9.5L12.5 14.5L8 11.5L3.5 14.5L5 9.5L1 6H6L8 1Z" fill="#00B49C"/>
                  </svg>
                </div>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-wider">
                  ISO 9001:2015 Certified
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          ZONE 3 — Branch location cards
      ══════════════════════════════════════ */}
      <div className="relative border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 py-8">
          <p className="text-[9.5px] font-black text-gray-600 uppercase tracking-[3px] mb-4">
            Our Branches
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {branches.map((b, i) => (
              <div
                key={b.label}
                className="group relative bg-white/[0.03] border border-white/6 hover:border-[#FF6B2B]/25 rounded-2xl p-5 flex items-start gap-4 transition-all duration-200 hover:bg-white/[0.05] overflow-hidden"
              >
                {/* Accent corner */}
                <div className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full bg-[#FF6B2B] transition-all duration-300 rounded-br-full" />

                {/* Pin badge */}
                <div className="w-10 h-10 rounded-xl bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#FF6B2B] group-hover:border-[#FF6B2B] transition-all duration-200">
                  <MapPin size={16} className="text-[#FF6B2B] group-hover:text-white transition-colors duration-200" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[8.5px] font-black text-[#FF6B2B] uppercase tracking-[2px]">
                      {b.label}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/10" />
                    <span className="text-[8.5px] font-bold text-gray-600 uppercase tracking-wider">
                      PIN {b.pin}
                    </span>
                  </div>
                  <p className="text-white text-[13px] font-black leading-tight mb-1">{b.area}</p>
                  <p className="text-gray-600 text-[11.5px] leading-relaxed mb-3">{b.address}</p>
                  <a
                    href={b.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] font-black text-[#00B49C] uppercase tracking-wider hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink size={10} />
                    View on Maps
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          ZONE 4 — Copyright bar
      ══════════════════════════════════════ */}
      <div className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-gray-700">
          <p>© 2019 Sai Baba Packers &amp; Movers. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-500 transition-colors">Terms of Use</Link>
            <p>
              Powered by{" "}
              <a href="#" className="text-[#00B49C] hover:text-white transition-colors font-bold">
                Future IT Touch Pvt. Ltd.
              </a>
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}