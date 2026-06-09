"use client";

import { useState } from "react";
import Link from "next/link";
import { Truck, Zap, Shield, Clock, Package, MapPin, Users, Plus, Minus, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon:    Zap,
    title:   "Faster Shifting",
    desc:    "Meticulous route planning and seasoned loading crews cut your move time in half. We pre-map every job so no minute is wasted on moving day.",
    proof:   "2×",
    proofLbl:"faster than avg",
    accent:  "#FF6B2B",
  },
  {
    icon:    Shield,
    title:   "Safe & Secure",
    desc:    "Multi-ply cartons, bubble wrap, foam corner guards — every item is wrapped to the correct spec. Zero damage claims on over 2,500 completed moves.",
    proof:   "0",
    proofLbl:"damage claims",
    accent:  "#00B49C",
  },
  {
    icon:    Clock,
    title:   "On-Time Delivery",
    desc:    "Logistics pre-mapped 48 hours before your move. Live GPS tracking keeps us on schedule. If we're late, you get compensated — no questions asked.",
    proof:   "99%",
    proofLbl:"on-time rate",
    accent:  "#FF6B2B",
  },
  {
    icon:    Package,
    title:   "Expert Packaging",
    desc:    "Different items need different wrap. Crockery gets foam dividers. TVs get custom-cut foam. Wardrobes get garment boxes. Nothing is improvised.",
    proof:   "15+",
    proofLbl:"years packing",
    accent:  "#00B49C",
  },
  {
    icon:    MapPin,
    title:   "Pan-India Network",
    desc:    "Owned branches in 50+ cities. No third-party handoffs in the middle of your move. One team, one chain of custody, door to door.",
    proof:   "50+",
    proofLbl:"cities covered",
    accent:  "#FF6B2B",
  },
  {
    icon:    Users,
    title:   "Trusted & Reliable",
    desc:    "2,500+ families and 250+ companies have moved with us — most through referrals. Our reputation is built entirely on word-of-mouth, not advertising.",
    proof:   "4.9★",
    proofLbl:"avg. rating",
    accent:  "#00B49C",
  },
];

export default function AboutIntro() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="bg-[#F7F4EE] py-20 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_380px] min-h-[600px]">


          {/* ── RIGHT: Accordion list ── */}
          <div className="bg-white divide-y divide-gray-100">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              const isOpen = open === i;

              return (
                <div key={r.title} className="relative overflow-hidden">
                  {/* Trigger row */}
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className={`w-full flex items-center gap-5 px-8 py-5 text-left transition-all duration-300 group
                      ${isOpen ? "bg-[#FFF8F3]" : "bg-white hover:bg-gray-50/70"}`}
                  >
                    {/* Left accent bar */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                      style={{ background: r.accent }}
                    />

                    {/* Icon */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "scale-105" : ""}`}
                      style={{ background: isOpen ? r.accent : `${r.accent}12` }}
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.8}
                        style={{ color: isOpen ? "#fff" : r.accent }}
                        className="transition-colors duration-300"
                      />
                    </div>

                    {/* Title */}
                    <div className="flex-1 min-w-0">
                      <h4
                        className="text-[14px] font-black uppercase tracking-wide transition-colors duration-200"
                        style={{ color: isOpen ? r.accent : "#1a1a2e" }}
                      >
                        {r.title}
                      </h4>
                      {!isOpen && (
                        <p className="text-[11.5px] text-gray-400 mt-0.5 font-medium truncate max-w-[340px]">
                          {r.desc.slice(0, 62)}…
                        </p>
                      )}
                    </div>

                    {/* Proof stat — visible always, larger when open */}
                    <div className="shrink-0 text-right mr-3 transition-all duration-300">
                      <div
                        className={`font-black leading-none tracking-tight transition-all duration-300 ${isOpen ? "text-[32px]" : "text-[20px]"}`}
                        style={{ color: r.accent }}
                      >
                        {r.proof}
                      </div>
                      <div className="text-[8.5px] font-bold text-gray-400 uppercase tracking-wider mt-0.5 whitespace-nowrap">
                        {r.proofLbl}
                      </div>
                    </div>

                    {/* Toggle icon */}
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 border ${
                        isOpen
                          ? "border-transparent text-white"
                          : "border-gray-200 text-gray-400 group-hover:border-gray-300"
                      }`}
                      style={isOpen ? { background: r.accent } : {}}
                    >
                      {isOpen
                        ? <Minus size={13} strokeWidth={2.5} />
                        : <Plus  size={13} strokeWidth={2.5} />
                      }
                    </div>
                  </button>

                  {/* Expanded body */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-40" : "max-h-0"}`}
                  >
                    <div className="px-8 pb-6 pt-0 bg-[#FFF8F3] flex items-start gap-5">
                      {/* Indent guide line */}
                      <div className="shrink-0 w-11 flex justify-center pt-1">
                        <div className="w-px h-full min-h-[40px]" style={{ background: `${r.accent}25` }} />
                      </div>
                      <p className="text-[13.5px] text-gray-600 leading-[1.8] flex-1">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── LEFT: Dark sticky panel ── */}
          <div className="bg-[#1a1a2e] px-10 py-14 flex flex-col justify-between relative overflow-hidden">

            {/* Decorative large "WHY" watermark */}
            <div
              className="absolute -bottom-6 -left-4 text-[160px] font-black leading-none select-none pointer-events-none tracking-tighter"
              style={{ color: "rgba(255,255,255,0.03)" }}
            >
              WHY
            </div>

            {/* Teal glow orb */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-[#00B49C]/8 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              {/* Eyebrow */}
              <span className="block text-[9.5px] font-black text-[#00B49C] uppercase tracking-[3px] mb-4">
                Why Choose Us
              </span>

              {/* Headline */}
              <h2 className="text-[40px] xl:text-[50px] font-black text-white uppercase leading-[0.9] tracking-tight mb-6">
                Built<br />Around<br />
                <span className="text-[#FF6B2B]">Your<br />Move.</span>
              </h2>

              <p className="text-gray-500 text-[13.5px] leading-relaxed max-w-[280px]">
                Six promises we back with numbers — not just words.
                Click any reason to see the proof.
              </p>
            </div>

            {/* Brand pill */}
            <div className="relative z-10 mt-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#FF6B2B] rounded-xl flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(255,107,43,0.35)]">
                  <Truck size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white text-[13px] font-black leading-tight">Sai Baba Packers</div>
                  <div className="text-[#00B49C] text-[9px] font-bold uppercase tracking-wider mt-0.5">Est. 2010 · Chandigarh</div>
                </div>
              </div>

              {/* Mini stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { n: "2,500+", l: "Moves" },
                  { n: "50+",    l: "Cities" },
                  { n: "15 yr",  l: "Exp." },
                ].map(s => (
                  <div key={s.l} className="border-t border-white/10 pt-3">
                    <div className="text-[18px] font-black text-[#FF6B2B] leading-none">{s.n}</div>
                    <div className="text-[9px] font-bold text-gray-600 uppercase tracking-wider mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>

              <Link
                href="#quote"
                className="mt-8 group flex items-center justify-center gap-2 bg-[#FF6B2B] hover:bg-[#e85d1f] text-white font-black uppercase tracking-[2px] text-[11px] px-6 py-3.5 rounded-xl shadow-[0_6px_20px_rgba(255,107,43,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
              >
                Get Free Quote
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}