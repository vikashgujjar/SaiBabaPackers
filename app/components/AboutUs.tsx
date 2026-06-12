"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award } from "lucide-react";

const checks = [
  "Home shifting & office relocation specialists since 2010",
  "Expert packaging, unpacking & loading-unloading services",
  "Car relocation & warehousing with full transit insurance",
  "Transparent estimates — zero hidden charges, ever",
  "Own fleet for reliable door-to-door transportation services",
];

const stats = [
  { num: "2,500+", lbl: "Families Moved"    },
  { num: "15+",    lbl: "Years of Trust"    },
  { num: "50+",    lbl: "Cities Covered"    },
  { num: "4.9★",   lbl: "Customer Rating"   },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-[#F7F4EE] overflow-hidden">

      {/* ══════════════════════════════════════════
          TOP HALF — photo fills the full width
      ══════════════════════════════════════════ */}
      <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px]">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85"
          alt="Sai Baba Packers team at work"
          fill
          className="object-cover object-center"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/20 via-transparent to-[#F7F4EE]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/50 via-[#1a1a2e]/10 to-transparent" />

        {/* ISO badge — top left */}
        <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-white/60 rounded-xl px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
          <Award size={14} className="text-[#00B49C]" />
          <span className="text-[9.5px] font-black text-[#1a1a2e] uppercase tracking-[2px]">
            ISO 9001:2015 Certified
          </span>
        </div>


        {/* ── Oversized "15+" typographic anchor — bottom left of photo ── */}
        <div className="absolute bottom-10 left-6 sm:left-10 lg:left-16 flex items-end gap-4">
          <div>
            <div
              className="text-[64px] sm:text-[96px] lg:text-[150px] font-black leading-none tracking-tighter text-[#FF6B2B]"
            >
              15+
            </div>
            <div className="text-white font-black text-[13px] uppercase tracking-[3px] -mt-3">
              Years of Proven Trust
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          CONTENT BLOCK — overlaps photo bottom
      ══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 -mt-6 lg:-mt-10 pb-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-5 items-start">

          {/* ── LEFT: Dark floating panel ── */}
          <div className="bg-[#1a1a2e] rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-[0_24px_60px_rgba(26,26,46,0.25)]">
            {/* Teal glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00B49C]/8 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FF6B2B]/6 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <span className="block text-[9.5px] font-black text-[#00B49C] uppercase tracking-[3px] mb-4">
                Who We Are
              </span>

              {/* Headline — bold contrast treatment */}
              <h2 className="font-black uppercase leading-[1] tracking-tight mb-6">
                <span className="block text-[28px] sm:text-[34px] lg:text-[48px] text-white">
                  Relocating
                </span>
                <span className="block text-[28px] sm:text-[34px] lg:text-[48px] text-white">
                  Lives With
                </span>
                <span className="block text-[28px] sm:text-[34px] lg:text-[48px] text-[#FF6B2B]">
                  Care & Trust
                </span>
              </h2>

              <p className="text-gray-500 text-[13.5px] leading-[1.85] mb-4">
                Through foresight, planning, and hard work, we have become the undisputed
                market leader in the moving and packing services business. We started out
                modest, but we've expanded in every area possible. In order to serve our
                clients well, we have made it a priority to be on the cutting edge of our field.
              </p>
              <p className="text-gray-500 text-[13.5px] leading-[1.85] mb-4">
                We are an expanding and creative group. Services supplied by Sai Baba
                Packers and Movers have been among the best in the industry. Our mission
                from the start has been to offer secure, streamlined, and trouble-free
                relocation of goods. As a result, we've integrated cutting-edge packing
                methods and high-quality packing supplies into our standard operating procedure.
              </p>
              {/* <p className="text-gray-500 text-[13.5px] leading-[1.85] mb-4">
                <span className="text-white font-bold">We Serve:</span> Chandigarh, Faridabad,
                Ghaziabad, Delhi, Noida, Gurgaon, Vaishali, Indirapuram, Varanasi, Agra,
                Kanpur, Lucknow, Dehradun, Ambala, Ludhiana, Patiala, Amritsar, Kolkata,
                Guwahati, Patna, Madurai, Mangalore, Mumbai, Nagpur, Navi Mumbai &amp; all
                major cities across India.
              </p> */}

              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 bg-[#FF6B2B] hover:bg-[#e85d1f] text-white px-7 py-4 rounded-xl font-black uppercase text-[11.5px] tracking-[2px] shadow-[0_8px_24px_rgba(255,107,43,0.3)] hover:shadow-[0_12px_32px_rgba(255,107,43,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
              >
                Explore Our Services
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Checks + stats ── */}
          <div className="flex flex-col gap-5">

            {/* Checklist card */}
            <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
              <p className="text-[9.5px] font-black text-gray-400 uppercase tracking-[2.5px] mb-5">
                What Sets Us Apart
              </p>
              <ul className="space-y-3.5">
                {checks.map((c) => (
                  <li key={c} className="flex items-start gap-3 group">
                    {/* Animated index + check */}
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-[#00B49C]/10 group-hover:bg-[#00B49C] transition-colors duration-200">
                      <CheckCircle2
                        size={13}
                        className="text-[#00B49C] group-hover:text-white transition-colors duration-200"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="text-[13.5px] text-gray-700 font-medium leading-snug group-hover:text-[#1a1a2e] transition-colors duration-200">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats 2×2 grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <div
                  key={s.lbl}
                  className={`rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden ${
                    i % 2 === 0 ? "bg-[#FF6B2B]" : "bg-white border border-gray-100"
                  }`}
                >
                  {/* Texture for orange cells */}
                  {i % 2 === 0 && (
                    <div
                      className="absolute inset-0 opacity-[0.07] pointer-events-none"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(-45deg,transparent,transparent 6px,rgba(255,255,255,0.8) 6px,rgba(255,255,255,0.8) 8px)",
                      }}
                    />
                  )}
                  <div
                    className={`text-[34px] font-black leading-none tracking-tight relative z-10 ${
                      i % 2 === 0 ? "text-white" : "text-[#FF6B2B]"
                    }`}
                  >
                    {s.num}
                  </div>
                  <div
                    className={`text-[10px] font-bold uppercase tracking-[1.5px] mt-2 relative z-10 ${
                      i % 2 === 0 ? "text-orange-100" : "text-gray-400"
                    }`}
                  >
                    {s.lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BOTTOM TICKER STRIP — trust points
      ══════════════════════════════════════════ */}
      <div className="relative mt-10 bg-[#1a1a2e] border-t border-white/5 overflow-hidden py-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#1a1a2e] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#1a1a2e] to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex w-max animate-marquee gap-0">
          {[...checks, ...checks, ...checks].map((c, i) => (
            <div key={i} className="flex items-center gap-3 px-6 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2B] shrink-0" />
              <span className="text-[11.5px] font-bold text-gray-500 whitespace-nowrap">{c}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}