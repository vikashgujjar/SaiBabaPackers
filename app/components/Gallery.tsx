"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Grid3x3, Maximize2 } from "lucide-react";

const images = [
  {
    src:      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=85",
    thumb:    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&q=75",
    alt:      "Professional Moving Team",
    category: "Moving",
    desc:     "Multi-layer bubble wrap and heavy-gauge cartons protect every item before it moves.",
  },
  {
    src:      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85",
    thumb:    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=75",
    alt:      "Professional Shifting Crew",
    category: "Moving",
    desc:     "Trained crew handles every item with care — from loading ramps to final placement.",
  },
  {
    src:      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
    thumb:    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75",
    alt:      "Interstate Transit Fleet",
    category: "Moving",
    desc:     "Our owned fleet of carriers moves your goods safely across all 50+ cities.",
  },
  {
    src:      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&q=85",
    thumb:    "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&q=75",
    alt:      "Delicate Goods Protection",
    category: "Packing",
    desc:     "Fragile items get foam-wrapped, corner-guarded, and individually labelled.",
  },
  {
    src:      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85",
    thumb:    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=75",
    alt:      "Household Goods Warehousing",
    category: "Storage",
    desc:     "Kitchen items — crockery, appliances, glassware — wrapped and boxed by category.",
  },
  {
    src:      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=85",
    thumb:    "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=75",
    alt:      "Safe Warehousing Storage",
    category: "Storage",
    desc:     "Climate-controlled, 24/7 monitored warehouses for short and long-term storage.",
  },
  {
    src:      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=85",
    thumb:    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&q=75",
    alt:      "Loading & Unloading Team",
    category: "Moving",
    desc:     "Trained movers safely load and unload every item using padded protection gear.",
  },
  {
    src:      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=85",
    thumb:    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=400&q=75",
    alt:      "Pan-India Transport Fleet",
    category: "Moving",
    desc:     "Our GPS-tracked fleet delivers your goods on time to 50+ cities across India.",
  },
];

const CAT_COLORS: Record<string, string> = {
  Packing: "#FF6B2B",
  Moving:  "#00B49C",
  Storage: "#6366f1",
};

export default function Gallery() {
  const [active,  setActive]  = useState(0);
  const [view,    setView]    = useState<"showcase"|"grid">("showcase");

  const current = images[active];

  function prev() { setActive(i => (i - 1 + images.length) % images.length); }
  function next() { setActive(i => (i + 1) % images.length); }

  return (
    <section className="bg-[#1a1a2e] py-10 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <div className="flex items-end justify-between gap-6 mb-8 flex-wrap">
          <div>
            <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-2">
              Our Portfolio
            </span>
            <h2 className="text-[36px] lg:text-[50px] font-black text-white uppercase leading-[0.92] tracking-tight">
              Relocation <span className="text-[#FF6B2B]">Gallery</span>
            </h2>
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-xl p-1">
            {([["showcase", Maximize2, "Showcase"], ["grid", Grid3x3, "Grid"]] as const).map(([id, Icon, label]) => (
              <button
                key={id}
                onClick={() => setView(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all duration-200 ${
                  view === id
                    ? "bg-[#FF6B2B] text-white shadow-[0_4px_12px_rgba(255,107,43,0.3)]"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                <Icon size={13} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ════════════════════════════
            SHOWCASE VIEW
        ════════════════════════════ */}
        {view === "showcase" && (
          <div className="grid lg:grid-cols-[1fr_280px] gap-4 items-stretch">

            {/* ── Featured image ── */}
            <div className="relative rounded-3xl overflow-hidden bg-gray-900 min-h-[380px] lg:min-h-[520px] group">
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
              />

              {/* Dark gradient bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a]/90 via-[#0d0d1a]/20 to-transparent" />

              {/* Category pill */}
              <div
                className="absolute top-5 left-5 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[2px] text-white"
                style={{ background: CAT_COLORS[current.category] ?? "#FF6B2B" }}
              >
                {current.category}
              </div>

              {/* Slide counter */}
              <div className="absolute top-5 right-5 bg-black/40 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[2px] px-3 py-1.5 rounded-lg border border-white/10">
                {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="text-white text-[20px] lg:text-[24px] font-black uppercase tracking-tight leading-tight mb-1.5">
                  {current.alt}
                </h3>
                <p className="text-white/55 text-[13px] leading-relaxed max-w-[480px]">
                  {current.desc}
                </p>
              </div>

              {/* Prev / Next arrows */}
              <button onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[#FF6B2B] border border-white/10 hover:border-[#FF6B2B] text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100">
                <ArrowLeft size={16} />
              </button>
              <button onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[#FF6B2B] border border-white/10 hover:border-[#FF6B2B] text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100">
                <ArrowRight size={16} />
              </button>

              {/* Dot progress */}
              <div className="absolute bottom-5 right-6 flex items-center gap-1.5">
                {images.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-200 ${
                      i === active ? "w-5 h-1.5 bg-[#FF6B2B]" : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                    }`} />
                ))}
              </div>
            </div>

            {/* ── Thumbnail filmstrip ── */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[520px] pb-2 lg:pb-0 pr-0 lg:pr-1 scrollbar-thin">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative shrink-0 w-[140px] lg:w-full h-[90px] lg:h-[120px] rounded-2xl overflow-hidden border-2 transition-all duration-200 group ${
                    i === active
                      ? "border-[#FF6B2B] shadow-[0_0_0_4px_rgba(255,107,43,0.2)]"
                      : "border-white/8 hover:border-white/25"
                  }`}
                >
                  <Image src={img.thumb} alt={img.alt} fill
                    className={`object-cover transition-all duration-300 ${i === active ? "scale-105 brightness-100" : "brightness-75 group-hover:brightness-90"}`}
                    sizes="280px" />

                  {/* Active overlay */}
                  {i === active && (
                    <div className="absolute inset-0 bg-[#FF6B2B]/10" />
                  )}

                  {/* Category dot + label */}
                  <div className="absolute bottom-2 left-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: CAT_COLORS[img.category] ?? "#FF6B2B" }} />
                    <span className="text-[8.5px] font-black text-white uppercase tracking-wider">
                      {img.category}
                    </span>
                  </div>

                  {/* Active check */}
                  {i === active && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#FF6B2B] flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ════════════════════════════
            GRID VIEW
        ════════════════════════════ */}
        {view === "grid" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <button
                key={img.alt}
                onClick={() => { setActive(i); setView("showcase"); }}
                className={`group relative overflow-hidden rounded-2xl bg-gray-900 aspect-square border-2 transition-all duration-200 ${
                  i === active ? "border-[#FF6B2B]" : "border-white/5 hover:border-white/20"
                }`}
              >
                <Image src={img.thumb} alt={img.alt} fill
                  className="object-cover brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-400"
                  sizes="300px" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category pill */}
                <div
                  className="absolute top-2.5 left-2.5 px-2 py-1 rounded-md text-[8px] font-black uppercase tracking-[1.5px] text-white"
                  style={{ background: CAT_COLORS[img.category] ?? "#FF6B2B" }}
                >
                  {img.category}
                </div>

                {/* Caption on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-[11px] font-black leading-tight">{img.alt}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* ── Bottom strip ── */}
        <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
          <p className="text-[11px] text-gray-600 font-medium">
            {images.length} photos · Updated regularly
          </p>
          <div className="flex items-center gap-3">
            {Object.entries(CAT_COLORS).map(([cat, color]) => (
              <div key={cat} className="flex items-center gap-1.5 text-[10.5px] text-gray-500 font-bold">
                <span className="w-2 h-2 rounded-full" style={{ background: color }} />
                {cat}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}