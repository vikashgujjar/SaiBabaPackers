"use client";

import { useState } from "react";
import { MapPin, Phone, ArrowRight } from "lucide-react";

const regions = [
  {
    label:  "North India",
    accent: "#FF6B2B",
    count:  15,
    cities: [
      "Delhi", "Noida", "Gurgaon", "Faridabad", "Jaipur", "Agra",
      "Lucknow", "Kanpur", "Meerut", "Chandigarh", "Ludhiana", "Amritsar",
      "Dehradun", "Ambala", "Patiala",
    ],
  },
  {
    label:  "West India",
    accent: "#00B49C",
    count:  11,
    cities: [
      "Mumbai", "Pune", "Ahmedabad", "Surat", "Vadodara", "Rajkot",
      "Nashik", "Aurangabad", "Navi Mumbai", "Thane", "Kolhapur",
    ],
  },
  {
    label:  "South India",
    accent: "#FF6B2B",
    count:  11,
    cities: [
      "Bangalore", "Chennai", "Hyderabad", "Kochi", "Coimbatore",
      "Mysore", "Visakhapatnam", "Vijayawada", "Thiruvananthapuram",
      "Madurai", "Mangalore",
    ],
  },
  {
    label:  "East & Central",
    accent: "#00B49C",
    count:  11,
    cities: [
      "Kolkata", "Patna", "Bhopal", "Indore", "Nagpur", "Raipur",
      "Guwahati", "Bhubaneswar", "Ranchi", "Jabalpur", "Varanasi",
    ],
  },
];

export default function LocationsSection() {
  const [active, setActive] = useState(0);
  const current = regions[active];

  return (
    <section className="bg-[#F7F4EE] py-10 sm:py-20 overflow-hidden relative">

      {/* Soft glow orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B2B]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00B49C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 sm:mb-12">
          <div>
            <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-3">
              Pan-India Coverage
            </span>
            <h2 className="text-[36px] lg:text-[52px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight">
              We Serve <span className="text-[#FF6B2B]">Across India</span>
            </h2>
          </div>

          {/* Total badge */}
          <div className="flex items-end gap-4 shrink-0 bg-white border border-gray-100 rounded-2xl px-6 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <div className="text-right">
              <div className="text-[52px] font-black text-[#FF6B2B] leading-none tracking-tighter">
                50+
              </div>
              <div className="text-[9.5px] font-bold text-gray-400 uppercase tracking-[2px] mt-1">
                Cities Nationwide
              </div>
            </div>
            <div className="pb-1 border-l border-gray-100 pl-4">
              <p className="text-[12.5px] font-bold text-gray-400 leading-snug max-w-[140px]">
                Wherever you move, we're already there.
              </p>
            </div>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="grid lg:grid-cols-[240px_1fr] gap-5 items-start">

          {/* LEFT: Region tabs */}
          <div className="flex lg:flex-col gap-3 flex-wrap lg:flex-nowrap">
            {regions.map((r, i) => (
              <button
                key={r.label}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-3 px-5 py-4 rounded-2xl text-left transition-all duration-200 border w-full relative overflow-hidden ${
                  active === i
                    ? "bg-[#1a1a2e] border-[#1a1a2e] shadow-[0_8px_24px_rgba(26,26,46,0.15)]"
                    : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                }`}
              >
                {/* Active left accent bar */}
                {active === i && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full"
                    style={{ background: r.accent }}
                  />
                )}

                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${active === i ? "scale-105" : ""}`}
                  style={{ background: `${r.accent}18` }}
                >
                  <MapPin size={14} style={{ color: r.accent }} strokeWidth={2} />
                </div>

                <div className="min-w-0">
                  <p className={`text-[12.5px] font-black uppercase tracking-wide leading-none transition-colors duration-200 ${
                    active === i ? "text-white" : "text-[#1a1a2e]"
                  }`}>
                    {r.label}
                  </p>
                  <p className={`text-[10px] font-bold mt-1 transition-colors duration-200 ${
                    active === i ? "text-gray-400" : "text-gray-400"
                  }`}>
                    {r.count} cities
                  </p>
                </div>

                <span
                  className="ml-auto text-[11px] font-black px-2 py-0.5 rounded-lg shrink-0"
                  style={{
                    background: `${r.accent}15`,
                    color: r.accent,
                  }}
                >
                  {r.count}
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT: City wall */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.04)] overflow-hidden">

            {/* Region header band */}
            <div
              className="px-7 py-4 flex items-center justify-between"
              style={{ background: `${current.accent}08`, borderBottom: `1px solid ${current.accent}15` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${current.accent}18` }}
                >
                  <MapPin size={16} style={{ color: current.accent }} strokeWidth={2} />
                </div>
                <div>
                  <p
                    className="text-[9.5px] font-black uppercase tracking-[2.5px]"
                    style={{ color: current.accent }}
                  >
                    Active Region
                  </p>
                  <h3 className="text-[18px] font-black text-[#1a1a2e] uppercase leading-tight tracking-tight">
                    {current.label}
                  </h3>
                </div>
              </div>
              <div className="text-right">
                <div
                  className="text-[34px] font-black leading-none tracking-tighter"
                  style={{ color: current.accent }}
                >
                  {current.count}
                </div>
                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                  Cities
                </div>
              </div>
            </div>

            {/* City pills */}
            <div className="p-7">
              <div className="flex flex-wrap gap-2 mb-6">
                {current.cities.map((city) => (
                  <span
                    key={city}
                    className="group/city flex items-center gap-1.5 text-[12.5px] font-medium text-gray-600 hover:text-[#1a1a2e] bg-[#F7F4EE] hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] rounded-xl px-4 py-2 transition-all duration-150 cursor-default"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: current.accent }}
                    />
                    {city}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-5 border-t border-gray-100 flex items-center justify-between flex-wrap gap-3">
                <p className="text-[12px] text-gray-400 font-medium">
                  Don't see your city?{" "}
                  <a
                    href="tel:+919815162726"
                    className="font-black hover:underline"
                    style={{ color: current.accent }}
                  >
                    Call us
                  </a>{" "}
                  — we likely serve your location too.
                </p>
                <a
                  href="#quote"
                  className="group flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider transition-colors duration-200 hover:text-[#1a1a2e]"
                  style={{ color: current.accent }}
                >
                  Get a Quote
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom compact strip ── */}
        <div className="mt-5 bg-white border border-gray-100 rounded-2xl px-6 py-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
          <div className="flex items-start gap-x-8 gap-y-3 flex-wrap">
            {regions.map(r => (
              <div key={r.label} className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-[9px] font-black uppercase tracking-[2px] shrink-0"
                  style={{ color: r.accent }}
                >
                  {r.label}:
                </span>
                {r.cities.slice(0, 4).map(c => (
                  <span key={c} className="text-[11.5px] text-gray-500 font-medium">
                    {c}
                  </span>
                ))}
                <span className="text-[10.5px] font-black" style={{ color: r.accent }}>
                  +{r.cities.length - 4} more
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}