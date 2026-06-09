"use client";

import { useState, useEffect } from "react";
import { Star, ArrowRight, ArrowLeft, MapPin } from "lucide-react";

const testimonials = [
  {
    text:     "I work in a service industry too and I can stamp with guarantee that your company is the best. The loaders along with supervisors are assets to your company. You have got a customer for life.",
    name:     "Ramesh Singh",
    role:     "Home Relocation",
    initial:  "R",
    color:    "#FF6B2B",
    rating:   5,
    location: "Chandigarh → Delhi",
    month:    "March 2024",
  },
  {
    text:     "The employees of Sai Baba Packers are extremely skilled and courteous. My vehicle was transported well before schedule. Highly recommended for vehicle shifting across states.",
    name:     "Mohan Verma",
    role:     "Car Relocation",
    initial:  "M",
    color:    "#00B49C",
    rating:   5,
    location: "Chandigarh → Mumbai",
    month:    "January 2024",
  },
  {
    text:     "The shifting team was very professional and punctual. All our delicate furniture and glassware was wrapped carefully. Not a single scratch on anything. Exceptional packing standards.",
    name:     "Priya Sharma",
    role:     "Office Relocation",
    initial:  "P",
    color:    "#FF6B2B",
    rating:   5,
    location: "Delhi → Pune",
    month:    "February 2024",
  },
];

export default function Testimonials() {
  const [active,    setActive]    = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const id = setInterval(() => advance(1), 6000);
    return () => clearInterval(id);
  }, [active]);

  function advance(dir: 1 | -1) {
    setAnimating(true);
    setTimeout(() => {
      setActive(i => (i + dir + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 280);
  }

  const featured = testimonials[active];
  const others   = testimonials.filter((_, i) => i !== active);

  return (
    <section className="bg-[#FFF8F3] py-20 overflow-hidden relative">

      {/* Soft decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B2B]/6 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#00B49C]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div>
            <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-2">
              Customer Stories
            </span>
            <h2 className="text-[36px] lg:text-[50px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight">
              What Our <span className="text-[#FF6B2B]">Clients Say</span>
            </h2>
          </div>

          {/* Aggregate rating */}
          <div className="flex items-end gap-4 bg-white border border-orange-100 rounded-2xl px-6 py-4 shadow-[0_4px_20px_rgba(255,107,43,0.08)]">
            <div>
              <div className="text-[48px] font-black text-[#FF6B2B] leading-none">4.9</div>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} fill="#FF6B2B" className="text-[#FF6B2B]" />
                ))}
              </div>
            </div>
            <div className="pb-1">
              <div className="text-[12px] font-black text-[#1a1a2e] uppercase tracking-wider">Out of 5.0</div>
              <div className="text-[11px] font-bold text-gray-400 mt-0.5">2,500+ verified moves</div>
            </div>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-5 items-stretch">

          {/* ══ FEATURED TESTIMONIAL ══ */}
          <div
            className="relative bg-white border border-orange-100 rounded-3xl p-8 lg:p-10 overflow-hidden flex flex-col justify-between min-h-[340px] shadow-[0_8px_40px_rgba(255,107,43,0.07)] transition-opacity duration-280"
            style={{ opacity: animating ? 0 : 1 }}
          >
            {/* Giant decorative quote mark */}
            <div
              className="absolute right-6 top-2 text-[160px] font-black leading-none select-none pointer-events-none"
              style={{ color: `${featured.color}10` }}
            >
              "
            </div>

            {/* Accent bar — top */}
            <div
              className="absolute top-0 left-0 w-20 h-1 rounded-br-full"
              style={{ background: featured.color }}
            />

            {/* Stars + month */}
            <div className="flex items-center justify-between mb-7">
              <div className="flex gap-1">
                {Array.from({ length: featured.rating }).map((_, i) => (
                  <Star key={i} size={15} fill="#FF6B2B" className="text-[#FF6B2B]" />
                ))}
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                {featured.month}
              </span>
            </div>

            {/* Quote */}
            <blockquote className="flex-1 text-[17px] lg:text-[19px] font-semibold text-[#1a1a2e] leading-[1.7] relative z-10 mb-8">
              &ldquo;{featured.text}&rdquo;
            </blockquote>

            {/* Author + controls */}
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-[18px] shrink-0 shadow-lg"
                  style={{ background: featured.color }}
                >
                  {featured.initial}
                </div>
                <div>
                  <div className="font-black text-[#1a1a2e] text-[15px] leading-none mb-1">
                    {featured.name}
                  </div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    {featured.role}
                  </div>
                  <div className="flex items-center gap-1 mt-1.5">
                    <MapPin size={9} className="text-[#00B49C]" />
                    <span className="text-[9.5px] font-bold text-[#00B49C] uppercase tracking-wider">
                      {featured.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Prev / Next */}
              <div className="flex items-center gap-2">
                <button onClick={() => advance(-1)}
                  className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-[#FF6B2B] border border-gray-200 hover:border-[#FF6B2B] text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200">
                  <ArrowLeft size={15} />
                </button>
                <button onClick={() => advance(1)}
                  className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-[#FF6B2B] border border-gray-200 hover:border-[#FF6B2B] text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200">
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-orange-100">
              <div
                key={active}
                className="h-full rounded-full"
                style={{ background: featured.color, animation: "progress 6s linear forwards" }}
              />
            </div>
          </div>

          {/* ══ SECONDARY CARDS + BADGE ══ */}
          <div className="flex flex-col gap-4">
            {others.map((t) => (
              <button
                key={t.name}
                onClick={() => setActive(testimonials.indexOf(t))}
                className="group text-left bg-white hover:bg-[#FFF8F3] border border-gray-100 hover:border-orange-200 rounded-2xl p-5 flex flex-col gap-4 transition-all duration-200 relative overflow-hidden flex-1 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_28px_rgba(255,107,43,0.08)]"
              >
                {/* Left accent bar on hover */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                  style={{ background: t.color }}
                />

                {/* Stars + month */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={11} fill="#FF6B2B" className="text-[#FF6B2B]" />
                    ))}
                  </div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{t.month}</span>
                </div>

                {/* Truncated quote */}
                <p className="text-[12.5px] text-gray-500 group-hover:text-gray-700 leading-relaxed line-clamp-3 transition-colors duration-200 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-[13px] shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div className="min-w-0">
                    <div className="font-black text-[#1a1a2e] text-[12.5px] leading-none mb-0.5">{t.name}</div>
                    <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider truncate">
                      {t.role} · {t.location}
                    </div>
                  </div>
                  <ArrowRight size={13} className="text-gray-300 group-hover:text-[#FF6B2B] group-hover:translate-x-0.5 transition-all duration-200 ml-auto shrink-0" />
                </div>
              </button>
            ))}

            {/* Social proof cluster */}
            <div className="bg-white border border-orange-100 rounded-2xl p-4 flex items-center gap-4 shadow-[0_4px_16px_rgba(255,107,43,0.06)]">
              <div className="flex -space-x-2 shrink-0">
                {["R","M","P","A","S"].map((l, i) => (
                  <div key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white font-black text-[11px] shadow-sm"
                    style={{ background: i % 2 === 0 ? "#FF6B2B" : "#00B49C" }}>
                    {l}
                  </div>
                ))}
              </div>
              <div className="min-w-0">
                <div className="text-[12.5px] font-black text-[#1a1a2e] leading-none">2,500+ happy families</div>
                <div className="text-[10px] text-gray-400 font-bold mt-0.5">trust Sai Baba Packers</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 h-2 bg-[#FF6B2B]"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}