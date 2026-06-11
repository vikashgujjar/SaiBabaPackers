import { MapPin, Home, Building2, Car, Package, Warehouse, ArrowRight } from "lucide-react";

const topics = [
  {
    icon:    MapPin,
    heading: "Best Packers and Movers in Chandigarh",
    body:    "Sai Baba Packers and Movers is Chandigarh's most trusted relocation company for home shifting, office shifting, and vehicle transport. With 15+ years of experience and 2,500+ successful moves, we deliver every consignment safely and on time. Our ISO 9001:2015 certified team handles everything from packing and loading to transportation and unpacking — making your move completely stress-free.",
    accent:  "#FF6B2B",
    featured: true,
    stat:    "2,500+",
    statLbl: "Successful Moves",
  },
  {
    icon:    Home,
    heading: "Professional Home Shifting",
    body:    "Complete door-to-door relocation — furniture disassembly, professional packaging, safe loading & unloading, transport, and reassembly. We serve all areas of Chandigarh, Mohali, Panchkula, and Zirakpur.",
    accent:  "#00B49C",
    featured: false,
    stat:    "15+",
    statLbl: "Years Exp.",
  },
  {
    icon:    Building2,
    heading: "Office Relocation & Commercial Shifting",
    body:    "Our commercial experts handle workstations, server racks, and IT equipment with zero downtime. Weekend scheduling ensures operations resume on the next working day across 50+ cities.",
    accent:  "#FF6B2B",
    featured: false,
    stat:    "50+",
    statLbl: "Cities",
  },
  {
    icon:    Car,
    heading: "Car & Bike Transport Across India",
    body:    "Enclosed carriers and custom cradles move your vehicle without adding a single kilometre. Pre and post-delivery inspection reports provided for full transparency.",
    accent:  "#00B49C",
    featured: false,
    stat:    "0km",
    statLbl: "Added to Odometer",
  },
  {
    icon:    Package,
    heading: "Packing, Unpacking & Loading",
    body:    "Material-specific techniques for every item — bubble wrap for electronics, foam corner guards for furniture, vacuum bags for soft furnishings. Every box labelled and inventoried.",
    accent:  "#FF6B2B",
    featured: false,
    stat:    "100%",
    statLbl: "Damage-Free",
  },
  {
    icon:    Warehouse,
    heading: "Safe Warehousing & Storage",
    body:    "CCTV-monitored 24/7, climate-controlled, pest-treated monthly facilities. Your goods remain safe, catalogued, and retrievable on 24-hour notice. 7 days to 7 months.",
    accent:  "#00B49C",
    featured: false,
    stat:    "24/7",
    statLbl: "Monitored",
  },
];

const TAGS = [
  "Packers and Movers Chandigarh",
  "Home Shifting Services",
  "Office Relocation",
  "Car Transport Services",
  "Bike Transport",
  "Packing and Unpacking",
  "Loading and Unloading",
  "Warehousing Services",
  "Household Goods Transport",
  "Inter-City Moving",
  "Pan-India Relocation",
  "ISO Certified Movers",
];

export default function SeoContent() {
  const [featured, ...rest] = topics;
  const FeatIcon = featured.icon;

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-2">
              Why Choose Us
            </span>
            <h2 className="text-[36px] lg:text-[50px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight">
              Packers &amp; Movers{" "}
              <span className="text-[#FF6B2B]">You Can Trust</span>
            </h2>
          </div>
          <p className="text-gray-400 text-[13px] leading-relaxed max-w-[300px]">
            ISO certified · 15+ years · 50+ cities · 2,500+ families moved
          </p>
        </div>

        {/* ── Top row: featured card + 2 cards ── */}
        <div className="grid lg:grid-cols-3 gap-4 mb-4">

          {/* Featured — spans 2 cols */}
          <div className="lg:col-span-2 bg-[#1a1a2e] rounded-3xl p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between min-h-[260px]">

            {/* Grid texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Glow */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-[#FF6B2B]/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Watermark number */}
            <div className="absolute right-6 bottom-4 text-[120px] font-black text-white/[0.04] leading-none select-none pointer-events-none tracking-tighter">
              01
            </div>

            <div className="relative z-10">
              {/* Icon + tag */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B2B] flex items-center justify-center shrink-0">
                  <FeatIcon size={18} className="text-white" />
                </div>
                <span className="text-[9px] font-black text-[#FF6B2B] uppercase tracking-[2.5px] bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 px-2.5 py-1 rounded-md">
                  Featured
                </span>
              </div>

              <h3 className="text-[22px] lg:text-[26px] font-black text-white uppercase leading-tight tracking-tight mb-4 max-w-[460px]">
                {featured.heading}
              </h3>
              <p className="text-gray-500 text-[13px] leading-relaxed max-w-[500px]">
                {featured.body}
              </p>
            </div>

            {/* Bottom stat row */}
            <div className="relative z-10 mt-8 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6">
                {[
                  { n: "2,500+", l: "Moves"   },
                  { n: "15+",    l: "Years"    },
                  { n: "4.9★",   l: "Rating"   },
                ].map(s => (
                  <div key={s.l}>
                    <div className="text-[20px] font-black text-[#FF6B2B] leading-none">{s.n}</div>
                    <div className="text-[9px] font-bold text-gray-600 uppercase tracking-wider mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
              <a
                href="#quote"
                className="group flex items-center gap-2 bg-[#FF6B2B] hover:bg-[#e85d1f] text-white font-black uppercase text-[10.5px] tracking-[2px] px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shrink-0"
              >
                Get Free Quote
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* First regular card */}
          {rest.slice(0, 1).map((t, idx) => {
            const Icon = t.icon;
            const num  = idx + 2;
            return (
              <div
                key={t.heading}
                className="group bg-[#F7F4EE] rounded-3xl p-7 border border-gray-100 hover:border-transparent hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 w-0 group-hover:w-full h-[3px] transition-all duration-300 rounded-br-full"
                  style={{ background: t.accent }}
                />
                {/* Watermark */}
                <div
                  className="absolute right-4 bottom-3 text-[80px] font-black leading-none select-none opacity-[0.05] pointer-events-none"
                  style={{ color: t.accent }}
                >
                  {String(num).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300"
                    style={{ background: `${t.accent}15` }}
                  >
                    <Icon size={18} strokeWidth={1.8} style={{ color: t.accent }} />
                  </div>
                  <h3 className="text-[14px] font-black text-[#1a1a2e] uppercase tracking-wide leading-snug mb-2.5">
                    {t.heading}
                  </h3>
                  <p className="text-[12.5px] text-gray-500 leading-relaxed">
                    {t.body}
                  </p>
                </div>

                <div className="relative z-10 mt-5 flex items-center justify-between">
                  <div>
                    <div className="text-[22px] font-black leading-none" style={{ color: t.accent }}>{t.stat}</div>
                    <div className="text-[8.5px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">{t.statLbl}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom row: 4 equal cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {rest.slice(1).map((t, idx) => {
            const Icon = t.icon;
            const num  = idx + 3;
            return (
              <div
                key={t.heading}
                className="group bg-[#F7F4EE] rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:bg-white hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden flex flex-col"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 w-0 group-hover:w-full h-[2.5px] transition-all duration-300"
                  style={{ background: t.accent }}
                />
                {/* Watermark */}
                <div
                  className="absolute right-3 top-3 text-[52px] font-black leading-none select-none opacity-[0.05] pointer-events-none"
                  style={{ color: t.accent }}
                >
                  {String(num).padStart(2, "0")}
                </div>

                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 shrink-0"
                  style={{ background: `${t.accent}15` }}
                >
                  <Icon size={16} strokeWidth={1.8} style={{ color: t.accent }} />
                </div>

                <h3 className="text-[13px] font-black text-[#1a1a2e] uppercase tracking-wide leading-snug mb-2 flex-none">
                  {t.heading}
                </h3>
                <p className="text-[12px] text-gray-500 leading-relaxed flex-1 mb-4">
                  {t.body}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 group-hover:border-gray-100 transition-colors">
                  <div>
                    <div className="text-[18px] font-black leading-none" style={{ color: t.accent }}>{t.stat}</div>
                    <div className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">{t.statLbl}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Keyword tag cloud ── */}
        <div className="bg-[#F7F4EE] rounded-2xl border border-gray-100 px-6 py-5">
          <p className="text-[9px] font-black text-gray-400 uppercase tracking-[2.5px] mb-4">
            Our Services &amp; Coverage
          </p>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag, i) => (
              <span
                key={tag}
                className="flex items-center gap-1.5 text-[11.5px] font-medium text-gray-500 hover:text-[#1a1a2e] bg-white border border-gray-200 hover:border-[#FF6B2B]/40 rounded-lg px-3.5 py-1.5 transition-all duration-150 cursor-default hover:shadow-sm"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: i % 2 === 0 ? "#FF6B2B" : "#00B49C" }}
                />
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}