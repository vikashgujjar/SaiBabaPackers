import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

const rows = [
  { distance: "Up to 50 km",    bhk1: "₹4,000 – ₹8,000",   bhk2: "₹7,000 – ₹12,000",  bhk3: "₹10,000 – ₹16,000", bhk4: "₹14,000 – ₹20,000" },
  { distance: "50 – 300 km",    bhk1: "₹8,000 – ₹15,000",  bhk2: "₹12,000 – ₹20,000", bhk3: "₹16,000 – ₹28,000", bhk4: "₹22,000 – ₹38,000" },
  { distance: "300 – 700 km",   bhk1: "₹12,000 – ₹20,000", bhk2: "₹18,000 – ₹30,000", bhk3: "₹22,000 – ₹38,000", bhk4: "₹32,000 – ₹52,000" },
  { distance: "700 – 1200 km",  bhk1: "₹18,000 – ₹28,000", bhk2: "₹25,000 – ₹40,000", bhk3: "₹32,000 – ₹48,000", bhk4: "₹42,000 – ₹62,000" },
  { distance: "1200 km+",       bhk1: "₹25,000 – ₹40,000", bhk2: "₹35,000 – ₹55,000", bhk3: "₹45,000 – ₹65,000", bhk4: "₹60,000 – ₹85,000" },
];

const cols = ["1 BHK", "2 BHK", "3 BHK", "4 BHK+"];

export default function PricingTable() {
  return (
    <section className="bg-[#F7F4EE] py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="block text-[10px] font-black text-[#FF6B2B] uppercase tracking-[3px] mb-3">
            Transparent Pricing
          </span>
          <h2 className="text-[36px] lg:text-[52px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight mb-4">
            Estimated Moving <span className="text-[#FF6B2B]">Charges</span>
          </h2>
          <p className="text-gray-400 text-[14px] leading-relaxed max-w-[500px] mx-auto">
            Prices depend on distance, home size, and services chosen. These are indicative
            ranges — get an exact quote for your move.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto -mx-2 px-2 sm:mx-0 sm:px-0 mb-4">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-[0_16px_60px_rgba(0,0,0,0.06)] min-w-130">
          {/* Header row */}
          <div className="grid grid-cols-5 bg-[#1a1a2e]">
            <div className="px-5 py-4">
              <span className="text-[11px] font-black text-white uppercase tracking-[1.5px]">Distance</span>
            </div>
            {cols.map((c) => (
              <div key={c} className="px-5 py-4 text-center border-l border-white/10">
                <span className="text-[11px] font-black text-[#FF6B2B] uppercase tracking-[1.5px]">{c}</span>
              </div>
            ))}
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={row.distance}
              className={`grid grid-cols-5 border-t border-gray-100 transition-colors duration-150 hover:bg-orange-50/40 ${
                i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
              }`}
            >
              <div className="px-5 py-4 flex items-center">
                <span className="text-[13px] font-black text-[#1a1a2e]">{row.distance}</span>
              </div>
              {[row.bhk1, row.bhk2, row.bhk3, row.bhk4].map((val, j) => (
                <div key={j} className="px-5 py-4 text-center border-l border-gray-100 flex items-center justify-center">
                  <span className="text-[12.5px] font-bold text-gray-600">{val}</span>
                </div>
              ))}
            </div>
          ))}
          </div>
        </div>

        {/* Footnote */}
        <div className="flex items-start gap-2 mb-8 px-1">
          <Info size={12} className="text-gray-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-gray-400 leading-relaxed">
            Prices are approximate. Packaging charges, GST, toll taxes, and floor-access charges may apply additionally.
          </p>
        </div>

        {/* CTA bar */}
        <div className="bg-white border border-[#00B49C]/20 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00B49C]/10 flex items-center justify-center shrink-0">
              <Info size={14} className="text-[#00B49C]" />
            </div>
            <p className="text-[13px] text-gray-600 leading-snug">
              Want an exact price?{" "}
              <span className="font-bold text-[#1a1a2e]">Fill in your details</span> and get a precise
              no-hidden-charges quote within{" "}
              <span className="font-bold text-[#00B49C]">30 minutes</span>.
            </p>
          </div>
          <Link
            href="#quote"
            className="group shrink-0 flex items-center gap-2 bg-[#FF6B2B] hover:bg-[#e85d1f] text-white font-black uppercase text-[11px] tracking-[2px] px-6 py-3 rounded-xl shadow-[0_6px_20px_rgba(255,107,43,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Get Exact Quote
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
