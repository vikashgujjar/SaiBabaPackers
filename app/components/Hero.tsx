"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight, Phone, MapPin, Calendar,
  ChevronLeft, ChevronRight, ShieldCheck,
  Star, CheckCircle, Truck,
} from "lucide-react";

/* ── Slides ── */
const SLIDES = [
  {
    src:  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=90",
    alt:  "Professional movers at work",
    city: "Pan-India Delivery",
  },
  {
    src:  "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=1920&q=90",
    alt:  "Professional packing service",
    city: "Premium Packing",
  },
  {
    src:  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=90",
    alt:  "Relocation fleet on the road",
    city: "Pan-India Fleet",
  },
];

const MOVE_TYPES = [
  { id: "home",    label: "Home Shifting",  icon: "🏠" },
  { id: "office",  label: "Office Shifting", icon: "🏢" },
  { id: "vehicle", label: "Car Relocation",  icon: "🚗" },
  { id: "storage", label: "Warehousing",     icon: "📦" },
];

const TICKER = [
  "🚚  Chandigarh → Delhi",
  "📦  Chandigarh → Mumbai",
  "🏠  Chandigarh → Bengaluru",
  "🚗  Chandigarh → Dehradun",
  "🏢  Chandigarh → Pune",
];

export default function Hero() {
  const [slide,     setSlide]     = useState(0);
  const [fading,    setFading]    = useState(false);
  const [moveType,  setMoveType]  = useState("home");
  const [from,      setFrom]      = useState("");
  const [to,        setTo]        = useState("");
  const [date,      setDate]      = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [tickIdx,   setTickIdx]   = useState(0);
  const [tickIn,    setTickIn]    = useState(true);

  /* Auto-advance slides */
  useEffect(() => {
    const id = setInterval(() => changeSlide((slide + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, [slide]);

  /* Ticker */
  useEffect(() => {
    const id = setInterval(() => {
      setTickIn(false);
      setTimeout(() => { setTickIdx(i => (i + 1) % TICKER.length); setTickIn(true); }, 350);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  function changeSlide(idx: number) {
    setFading(true);
    setTimeout(() => { setSlide(idx); setFading(false); }, 450);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative w-full min-h-[6vh] flex flex-col overflow-hidden">

      {/* ══════════════════════════════
          FULL-BLEED BACKGROUND CAROUSEL
      ══════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((s, i) => (
          <div
            key={s.src}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === slide && !fading ? 1 : 0 }}
          >
            <Image src={s.src} alt={s.alt} fill className="object-cover" priority={i === 0} />
          </div>
        ))}
        {/* Multi-layer overlay for maximum legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d1a]/90 via-[#0d0d1a]/60 to-[#0d0d1a]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d1a]/40 via-transparent to-transparent" />
      </div>

      {/* ══════════════════════════════
          SLIDE CONTROLS
      ══════════════════════════════ */}
      <button onClick={() => changeSlide((slide - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 hidden sm:flex">
        <ChevronLeft size={18} />
      </button>
      <button onClick={() => changeSlide((slide + 1) % SLIDES.length)}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 hidden sm:flex">
        <ChevronRight size={18} />
      </button>

      {/* ══════════════════════════════
          HERO COPY — centred, full-bleed
      ══════════════════════════════ */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-6 pt-8 pb-6 lg:pt-12 lg:pb-6 max-h-max">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6 flex-wrap justify-center">
          <span className="inline-flex items-center gap-1.5 bg-[#FF6B2B]/20 border border-[#FF6B2B]/35 text-[#FF6B2B] px-3.5 py-1.5 rounded-full text-[9.5px] font-black uppercase tracking-[2.5px]">
            ★ Pan-India Network
          </span>
          <span className="text-white/40 hidden sm:block">·</span>
          <span className="hidden sm:flex items-center gap-1.5 text-[10.5px] text-[#00B49C] font-bold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B49C] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00B49C]" />
            </span>
            Trusted Since 2010 · ISO Certified
          </span>
        </div>

        {/* Headline — big, centred, layered */}
        <h1 className="font-black uppercase leading-[1] tracking-tight text-center mb-5">
          <span className="block text-[36px] sm:text-[52px] lg:text-[96px] xl:text-[92px] text-white">
            We Move
          </span>
          <span className="block text-[36px] sm:text-[52px] lg:text-[96px] xl:text-[82px] text-[#FF6B2B]">
            Your World
          </span>
          <span className="block text-[28px] sm:text-[36px] lg:text-[62px] xl:text-[72px] text-white/40 font-black tracking-widest mt-1">
            SAFELY & ON TIME
          </span>
        </h1>

        {/* Sub copy */}
        <p className="text-white text-[14px] sm:text-[16px] leading-[1.8] max-w-[540px] mb-6">
          Home shifting, office relocation, car transport, packaging &amp; unpacking,
          loading &amp; unloading, and warehousing — damage-free across 50+ Indian cities.
        </p>
      </div>

      {/* ══════════════════════════════
          BOOKING BAR — bottom-anchored
      ══════════════════════════════ */}
      <div className="relative z-20 w-full px-4 sm:px-6 pb-6 lg:pb-8">
        <div className="max-w-[1100px] mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {/* Move type tabs — above the bar */}
              <div className="flex items-center gap-2 mb-3 flex-nowrap overflow-auto justify-start py-2 md:justify-center">
                {MOVE_TYPES.map(t => (
                  <button key={t.id} type="button" onClick={() => setMoveType(t.id)}
                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider border transition-all duration-200 ${
                      moveType === t.id
                        ? "bg-[#FF6B2B] border-[#FF6B2B] text-white shadow-[0_4px_14px_rgba(255,107,43,0.4)]"
                        : "bg-white/10 border-white/15 text-white/60 hover:bg-white/20 hover:text-white backdrop-blur-sm"
                    }`}>
                    <span>{t.icon}</span> {t.label}
                  </button>
                ))}
              </div>

              {/* Main booking bar — single horizontal strip */}
              <div className="bg-white rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.35)] overflow-hidden">
                <div className="flex flex-col lg:flex-row">

                  {/* FROM */}
                  <div className="flex items-center gap-3 px-5 py-4 lg:flex-1 border-b lg:border-b-0 lg:border-r border-gray-100 group focus-within:bg-orange-50/40 transition-colors duration-200">
                    <div className="w-9 h-9 rounded-xl bg-[#00B49C]/10 flex items-center justify-center shrink-0">
                      <MapPin size={15} className="text-[#00B49C]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-[2px] mb-0.5">Moving From</p>
                      <input type="text" required placeholder="Enter city or area"
                        value={from} onChange={e => setFrom(e.target.value)}
                        className="w-full text-[14px] font-bold text-gray-800 placeholder:text-gray-300 placeholder:font-normal bg-transparent outline-none" />
                    </div>
                  </div>

                  {/* Arrow divider — desktop */}
                  <div className="hidden lg:flex items-center justify-center w-10 shrink-0 relative">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-[#FF6B2B] flex items-center justify-center shadow-[0_4px_12px_rgba(255,107,43,0.4)] z-10">
                        <ArrowRight size={14} className="text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>

                  {/* TO */}
                  <div className="flex items-center gap-3 px-5 py-4 lg:flex-1 border-b lg:border-b-0 lg:border-r border-gray-100 focus-within:bg-orange-50/40 transition-colors duration-200">
                    <div className="w-9 h-9 rounded-xl bg-[#FF6B2B]/10 flex items-center justify-center shrink-0">
                      <MapPin size={15} className="text-[#FF6B2B]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-[2px] mb-0.5">Moving To</p>
                      <input type="text" required placeholder="Enter city or area"
                        value={to} onChange={e => setTo(e.target.value)}
                        className="w-full text-[14px] font-bold text-gray-800 placeholder:text-gray-300 placeholder:font-normal bg-transparent outline-none" />
                    </div>
                  </div>

                  {/* DATE */}
                  <div className="flex items-center gap-3 px-5 py-4 lg:w-[200px] border-b lg:border-b-0 lg:border-r border-gray-100 focus-within:bg-orange-50/40 transition-colors duration-200">
                    <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                      <Calendar size={15} className="text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-[2px] mb-0.5">Move Date</p>
                      <input type="date" required value={date} onChange={e => setDate(e.target.value)}
                        className="w-full text-[14px] font-bold text-gray-700 bg-transparent outline-none" />
                    </div>
                  </div>

                  {/* SUBMIT */}
                  <div className="p-3 shrink-0">
                    <button type="submit"
                      className="w-full lg:w-auto h-full lg:h-full group flex items-center justify-center gap-2 bg-[#FF6B2B] hover:bg-[#e85d1f] text-white font-black uppercase tracking-[2px] text-[12.5px] px-8 py-3.5 lg:py-0 rounded-xl shadow-[0_8px_24px_rgba(255,107,43,0.35)] hover:shadow-[0_12px_32px_rgba(255,107,43,0.5)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 min-h-[56px]">
                      <span>Get Free Quote</span>
                      <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Below bar — quick call link + counter */}
              <div className="flex items-center justify-between mt-3 px-1 flex-wrap gap-2">
                <p className="text-white/35 text-[10.5px] font-medium">
                  No spam · Our team calls within 30 min
                </p>
                <a href="tel:+919815162726"
                  className="flex items-center gap-2 text-white/50 hover:text-white text-[11px] font-bold transition-colors duration-200 group">
                  <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#FF6B2B] flex items-center justify-center transition-colors duration-200">
                    <Phone size={11} className="text-white" />
                  </div>
                  Prefer to call? +91-9815162726
                </a>
              </div>
            </form>

          ) : (
            /* Success state */
            <div className="bg-white rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.35)] px-8 py-6 flex items-center gap-6 flex-wrap">
              <div className="w-12 h-12 rounded-2xl bg-[#00B49C]/10 border border-[#00B49C]/20 flex items-center justify-center shrink-0">
                <CheckCircle size={26} className="text-[#00B49C]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[18px] font-black text-[#1a1a2e] uppercase tracking-tight">Quote Requested!</h3>
                <p className="text-gray-500 text-[13px] mt-0.5">
                  Route: <span className="font-bold text-[#1a1a2e]">{from} → {to}</span> · 
                  Type: <span className="font-bold text-[#1a1a2e] capitalize">{moveType}</span> · 
                  Date: <span className="font-bold text-[#1a1a2e]">{date}</span>
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <p className="text-[13px] text-[#00B49C] font-bold">We'll call you in 30 min</p>
                <button onClick={() => setSubmitted(false)}
                  className="text-[11px] text-gray-400 underline hover:text-[#FF6B2B] transition-colors">
                  New enquiry
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stats strip — pinned above footer */}
      <div className="relative z-20 w-full border-t border-white/8 bg-black backdrop-blur-sm hidden lg:block">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-center gap-12">
          {[
            { n: "2,500+", l: "Families Moved" },
            { n: "15+",    l: "Years of Trust"  },
            { n: "50+",    l: "Cities Covered"  },
            { n: "4.9 ★",  l: "Customer Rating" },
            { n: "100%",   l: "Insured Moves"   },
          ].map(s => (
            <div key={s.l} className="text-center">
              <div className="text-[18px] font-black text-[#FF6B2B] leading-none">{s.n}</div>
              <div className="text-[9px] font-bold text-white/35 uppercase tracking-[1.5px] mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}