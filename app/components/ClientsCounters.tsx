"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Building2, Users, Globe, Smile } from "lucide-react";

/* ── Animated counter hook ── */
function useCounter(target: number) {
  const [value,   setValue]   = useState(0);
  const ref     = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const dur = 2000, steps = 80, inc = target / steps;
        let cur = 0;
        const id = setInterval(() => {
          cur = Math.min(cur + inc, target);
          setValue(Math.floor(cur));
          if (cur >= target) clearInterval(id);
        }, dur / steps);
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return { value, ref };
}

const STATS = [
  { icon: Building2, target: 250,  label: "Office Moves",   accent: "#FF6B2B" },
  { icon: Users,     target: 1500, label: "Expert Staff",   accent: "#00B49C" },
  { icon: Globe,     target: 28,   label: "States Covered", accent: "#FF6B2B" },
  { icon: Smile,     target: 2500, label: "Happy Families", accent: "#00B49C" },
];

/* ── Brand clients with real logos ── */
const CLIENTS = [
  { name: "TATA Group",          color: "#003399", src: "/Company/1.jpg" },
  { name: "ICICI Bank",          color: "#F37421", src: "/Company/3.jpg" },
  { name: "State Bank of India", color: "#22408B", src: "/Company/4.jpg" },
  { name: "Reliance",            color: "#1F4E9E", src: "/Company/5.jpg" },
  { name: "LIC India",           color: "#00796B", src: "/Company/7.jpg" },
  { name: "IndiaMart",           color: "#E85D04", src: "/Company/8.jpg" },
];

/* ── Stat item component ── */
function StatItem({ icon: Icon, target, label, accent }: typeof STATS[0]) {
  const { value, ref } = useCounter(target);
  return (
    <div ref={ref} className="group flex-1 flex flex-col items-center text-center px-4 relative">
      {/* Separator line — shown between items */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10 hidden lg:block first:hidden" />

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${accent}20` }}
      >
        <Icon size={19} style={{ color: accent }} />
      </div>

      {/* Animated number */}
      <div className="flex items-end gap-0.5 mb-2">
        <span
          className="text-[52px] lg:text-[64px] font-black leading-none tracking-tighter text-white"
        >
          {value.toLocaleString()}
        </span>
        <span
          className="text-[32px] font-black leading-none mb-1"
          style={{ color: accent }}
        >
          +
        </span>
      </div>

      {/* Label */}
      <span className="text-[11px] font-bold uppercase tracking-[2px] text-white/40">
        {label}
      </span>

      {/* Accent underline */}
      <div
        className="mt-3 h-[3px] w-10 rounded-full opacity-60 group-hover:w-16 group-hover:opacity-100 transition-all duration-300"
        style={{ background: accent }}
      />
    </div>
  );
}

export default function ClientsCounters() {
  return (
    <section className="overflow-hidden">

      {/* ══════════════════════════════════════
          TOP — dark stats band
      ══════════════════════════════════════ */}
      <div className="bg-[#1a1a2e] relative overflow-hidden py-16 lg:py-20">

        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF6B2B]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#00B49C]/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6">

          {/* Headline */}
          <div className="text-center mb-14">
            <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-3">
              Our Network
            </span>
            <h2 className="text-[36px] lg:text-[52px] font-black text-white uppercase leading-[0.92] tracking-tight">
              Numbers That <span className="text-[#FF6B2B]">Speak</span>
            </h2>
          </div>

          {/* Stats row */}
          <div className="flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-white/8 gap-8 sm:gap-0">
            {STATS.map(s => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </div>

        {/* Diagonal cut into cream section below */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 48L1440 0V48H0Z" stroke='#f7f4ee' fill="#F7F4EE" />
          </svg>
        </div>
      </div>

      {/* ══════════════════════════════════════
          BOTTOM — cream clients band
      ══════════════════════════════════════ */}
      <div className="bg-[#F7F4EE] pt-20 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Sub-header */}
          <div className="flex items-center justify-between gap-6 mb-8 flex-wrap">
            <div>
              <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-1.5">
                Trusted By
              </span>
              <h3 className="text-[22px] lg:text-[28px] font-black text-[#1a1a2e] uppercase tracking-tight">
                India's Leading <span className="text-[#FF6B2B]">Brands</span>
              </h3>
            </div>
            <p className="text-[12.5px] text-gray-400 font-medium max-w-[300px]">
              From home shifting to office relocation, car transport to warehousing — we move them all.
            </p>
          </div>

          {/* Brand logo grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="group relative bg-white rounded-2xl border border-gray-100 px-6 py-5 flex flex-col items-center gap-3 hover:border-transparent hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden cursor-default"
              >
                {/* Accent top bar on hover */}
                <div
                  className="absolute top-0 left-0 w-0 h-[2.5px] group-hover:w-full transition-all duration-300 rounded-br-full"
                  style={{ background: client.color }}
                />

                {/* Logo */}
                <div className="h-8 flex items-center">
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>

                {/* Name + verified dot */}
                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: client.color }}
                  />
                  <span className="text-[10.5px] font-bold text-gray-400 uppercase tracking-wider">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom footnote */}
          <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-gray-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B49C]" />
            All clients verified · Ongoing service agreements
          </div>
        </div>
      </div>

    </section>
  );
}