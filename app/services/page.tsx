import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Topbar from "@/app/components/Topbar";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import InnerBanner from "@/app/components/InnerBanner";
import {
  ArrowRight, CheckCircle2, Phone,
  Home, Building2, Car, Warehouse, Package, Truck,
  ShieldCheck, Clock, Star, BadgeCheck,
} from "lucide-react";

/* ─── Metadata ──────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Our Services — Sai Baba Packers & Movers Chandigarh",
  description:
    "Explore all relocation services by Sai Baba Packers & Movers — home shifting, office relocation, car transport, warehousing, packaging & unpacking, and loading & unloading across 50+ Indian cities.",
};

/* ─── Data ──────────────────────────────────────────── */
const services = [
  {
    icon:    Home,
    label:   "Home Shifting Services",
    eyebrow: "Household Relocation",
    accent:  "#FF6B2B",
    image:   "/InnerServices/homeShifting.png",
    desc:    "Moving your home is more than transporting boxes — it's moving your life. Our home shifting specialists handle every step from furniture disassembly, material-specific packaging, and safe loading to GPS-tracked transport, unloading, and reassembly at the new address.",
    points:  [
      "Door-to-door service — pickup to placement",
      "Furniture disassembly & reassembly included",
      "Bubble wrap, foam guards & heavy-gauge cartons",
      "Full transit insurance on all household goods",
      "Serving Chandigarh, Mohali, Panchkula & 50+ cities",
    ],
    stat:    { n: "2,500+", l: "Homes Shifted" },
  },
  {
    icon:    Building2,
    label:   "Office Relocation",
    eyebrow: "Commercial Moving",
    accent:  "#00B49C",
    image:   "/InnerServices/officeShifting.png",
    desc:    "Business downtime costs money. Our commercial relocation team plans every move around your schedule — weekend and after-hours shifts, labelled inventory lists, IT equipment crating, and same-day setup at the new premises so operations resume the next morning.",
    points:  [
      "Zero-downtime weekend & after-hours scheduling",
      "IT equipment, server racks & workstation packing",
      "Asset inventory with photographic documentation",
      "Dedicated relocation manager for your account",
      "Pan-India coverage — 50+ cities served",
    ],
    stat:    { n: "500+", l: "Offices Relocated" },
  },
  {
    icon:    Car,
    label:   "Car Relocation Services",
    eyebrow: "Vehicle Transport",
    accent:  "#FF6B2B",
    image:   "/InnerServices/carTransport.png",
    desc:    "Your car travels in an enclosed carrier — zero kilometres added to the odometer. We conduct a pre-loading condition inspection and provide a delivery report on arrival. Bikes travel on custom cradles with anti-scratch padding and full transit insurance.",
    points:  [
      "Enclosed carrier — zero odometer reading added",
      "Pre & post-delivery condition inspection report",
      "Custom cradles for two-wheelers",
      "Full transit insurance as standard",
      "Real-time vehicle tracking updates",
    ],
    stat:    { n: "1,200+", l: "Vehicles Transported" },
  },
  {
    icon:    Warehouse,
    label:   "Warehousing Services",
    eyebrow: "Storage Solutions",
    accent:  "#00B49C",
    image:   "/InnerServices/whereHouse.png",
    desc:    "Between homes or waiting on possession? Our warehousing facilities are 24/7 CCTV-monitored, climate-controlled, and pest-treated monthly. Every item is logged in our inventory system — retrievable within 24 hours' notice. Plans from 7 days to 7 months.",
    points:  [
      "24/7 CCTV monitoring & alarm systems",
      "Climate-controlled, pest-treated units",
      "Digital inventory — per-item cataloguing",
      "Retrieval within 24-hour notice",
      "Short-term (7 days) to long-term (7 months+)",
    ],
    stat:    { n: "10,000+", l: "sq. ft. Warehouse" },
  },
  {
    icon:    Package,
    label:   "Packaging & Unpacking",
    eyebrow: "Packing Services",
    accent:  "#FF6B2B",
    image:   "/InnerServices/packingUnpacking.png",
    desc:    "Not all items pack the same. Electronics get anti-static wrap and foam inserts. Glassware goes in cell-divider cartons. Sofas and mattresses get stretch-film covers. Our team labels every box with contents and destination room — so unpacking is just as smooth.",
    points:  [
      "Material-specific wrapping for every item type",
      "Anti-static packaging for electronics",
      "Cell-divider cartons for crockery & glassware",
      "Labelled boxes — contents + destination room",
      "Full unpacking & arrangement service available",
    ],
    stat:    { n: "100%", l: "Damage-Free Record" },
  },
  {
    icon:    Truck,
    label:   "Loading & Unloading",
    eyebrow: "Labour Services",
    accent:  "#00B49C",
    image:   "/InnerServices/loadingUnloading.png",
    desc:    "Heavy lifting done right. Our loading crew uses hydraulic trolleys, padded floor runners, and door-frame guards to protect both your belongings and the property. Every piece is strapped and secured in the vehicle before departure — nothing shifts in transit.",
    points:  [
      "Hydraulic trolleys for heavy furniture & appliances",
      "Padded floor runners & door-frame guards",
      "Strapping & securing inside the vehicle",
      "Background-checked, trained labour team",
      "Available standalone or as part of full move",
    ],
    stat:    { n: "0", l: "Property Damage Claims" },
  },
];

const process = [
  { n: "01", title: "Book a Free Quote",          desc: "Call us or fill the online form. We respond within 30 minutes with a transparent, itemised estimate." },
  { n: "02", title: "Pre-Move Survey",             desc: "Our team visits (or does a video survey) to assess volume, special items, and access conditions." },
  { n: "03", title: "Packing Day",                 desc: "Trained packers arrive with all materials. Every item is wrapped, inventoried, and labelled." },
  { n: "04", title: "Loading & Transport",         desc: "Goods are loaded securely, GPS-tracked en route, and delivered on the agreed date — guaranteed." },
  { n: "05", title: "Unloading & Setup",           desc: "We unload, reassemble furniture, and place items in the room specified on each box label." },
];

const whyUs = [
  { label: "ISO 9001:2015 Certified company",                      accent: "#FF6B2B" },
  { label: "Specialists in home shifting & office relocation",     accent: "#00B49C" },
  { label: "Expert packaging, unpacking & loading-unloading",      accent: "#FF6B2B" },
  { label: "Car relocation & warehousing with transit insurance",  accent: "#00B49C" },
  { label: "Own fleet — door-to-door transportation services",     accent: "#FF6B2B" },
  { label: "Transparent pricing — zero hidden charges, ever",      accent: "#00B49C" },
  { label: "Background-checked, trained professional crew",        accent: "#FF6B2B" },
  { label: "30-minute response for all shifting enquiries",        accent: "#00B49C" },
];

const seoTags = [
  "Packers and Movers Chandigarh", "Home Shifting Services", "Office Relocation",
  "Car Relocation Services", "Bike Transport Chandigarh", "Packaging and Unpacking",
  "Loading and Unloading Services", "Warehousing Chandigarh",
  "Household Goods Transport", "Inter-City Shifting", "Pan-India Relocation",
  "Best Packers Movers Near Me", "ISO Certified Movers", "Transportation Services India",
];

/* ─── Page ──────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <>

        {/* ══ BANNER ══ */}
        <InnerBanner
          image="/banner/BannerOne.webp"
          eyebrow="What We Offer"
          headingLines={["Our", "Relocation", "Services"]}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
          primaryCta={{ label: "Get Free Quote", href: "/#quote" }}
          description={
            <>
              <strong className="text-white font-bold">Home shifting</strong>,{" "}
              <strong className="text-white font-bold">office relocation</strong>,{" "}
              <strong className="text-white font-bold">car transport</strong>,{" "}
              <strong className="text-white font-bold">warehousing</strong>,{" "}
              <strong className="text-white font-bold">packaging & unpacking</strong>, and{" "}
              <strong className="text-white font-bold">loading & unloading</strong> — all under one roof across 50+ Indian cities.
            </>
          }
        />

        {/* ══════════════════════════════════════════════
            2. INDIVIDUAL SERVICE SECTIONS
        ══════════════════════════════════════════════ */}
        {services.map((s, i) => {
          const Icon  = s.icon;
          const odd   = i % 2 !== 0;
          const bg    = odd ? "bg-[#F7F4EE]" : "bg-white";
          const slug  = s.label.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

          return (
            <section key={s.label} id={slug} className={`${bg} py-10 sm:py-20 overflow-hidden`}>
              <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                <div className={`grid lg:grid-cols-2 gap-6 sm:gap-12 items-center ${odd ? "lg:[&>*:first-child]:order-2" : ""}`}>

                  {/* Image side */}
                  <div className="relative">
                    <div className="rounded-3xl overflow-hidden relative h-[380px] lg:h-[460px] shadow-[0_24px_60px_rgba(0,0,0,0.10)]">
                      <Image
                        src={s.image}
                        alt={s.label}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/50 via-transparent to-transparent" />
                    </div>
                    {/* Floating stat badge */}
                    <div
                      className="absolute -bottom-5 text-white px-6 py-4 rounded-2xl text-center shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
                      style={{ background: s.accent, [odd ? "left" : "right"]: "-12px" } as React.CSSProperties}
                    >
                      <span className="block text-[34px] font-black leading-none">{s.stat.n}</span>
                      <span className="block text-[9px] font-black uppercase tracking-[2px] mt-1 opacity-80">
                        {s.stat.l}
                      </span>
                    </div>
                    {/* Service number watermark */}
                    <div
                      className="absolute top-5 text-[9px] font-black uppercase tracking-[2px] px-3 py-1.5 rounded-lg border"
                      style={{
                        background: `${s.accent}15`,
                        borderColor: `${s.accent}30`,
                        color: s.accent,
                        [odd ? "right" : "left"]: "20px",
                      } as React.CSSProperties}
                    >
                      {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="pb-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                        style={{ background: `${s.accent}15` }}
                      >
                        <Icon size={22} strokeWidth={1.7} style={{ color: s.accent }} />
                      </div>
                      <div>
                        <span className="block text-[9.5px] font-black uppercase tracking-[2.5px]" style={{ color: s.accent }}>
                          {s.eyebrow}
                        </span>
                        <h2 className="text-[22px] lg:text-[28px] font-black text-[#1a1a2e] uppercase leading-tight tracking-tight">
                          {s.label}
                        </h2>
                      </div>
                    </div>

                    <p className="text-gray-500 text-[14px] leading-[1.9] mb-7">
                      {s.desc}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <div
                            className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                            style={{ background: `${s.accent}15` }}
                          >
                            <CheckCircle2 size={12} strokeWidth={2.5} style={{ color: s.accent }} />
                          </div>
                          <span className="text-[13px] text-gray-700 font-medium leading-snug">{p}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-3 flex-wrap">
                      <Link
                        href={`/services/${slug}`}
                        className="group flex items-center gap-2 text-white font-black uppercase text-[11px] tracking-[2px] px-6 py-3.5 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all duration-200"
                        style={{ background: s.accent }}
                      >
                        Learn More
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                      <Link
                        href="/#quote"
                        className="flex items-center gap-2 bg-transparent hover:bg-gray-50 border border-gray-200 text-gray-600 font-black uppercase text-[11px] tracking-[2px] px-6 py-3.5 rounded-xl transition-all duration-200"
                      >
                        Free Quote
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ══════════════════════════════════════════════
            3. HOW IT WORKS
        ══════════════════════════════════════════════ */}
        <section className="bg-[#1a1a2e] py-10 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#FF6B2B]/8 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#00B49C]/8 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-8 sm:mb-14">
              <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-3">
                Simple Process
              </span>
              <h2 className="text-[32px] lg:text-[48px] font-black text-white uppercase leading-[0.92] tracking-tight">
                How It <span className="text-[#FF6B2B]">Works</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
              {/* Connector line — desktop only */}
              <div className="hidden lg:block absolute top-[52px] left-[calc(10%+24px)] right-[calc(10%+24px)] h-px bg-gradient-to-r from-[#FF6B2B]/20 via-[#00B49C]/30 to-[#FF6B2B]/20 pointer-events-none" />

              {process.map((p, i) => {
                const accent = i % 2 === 0 ? "#FF6B2B" : "#00B49C";
                return (
                  <div key={p.n} className="relative flex flex-col items-center text-center group">
                    {/* Step circle */}
                    <div
                      className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-white font-black text-[15px] mb-5 relative z-10 shadow-[0_8px_24px_rgba(0,0,0,0.25)] group-hover:scale-105 transition-transform duration-200"
                      style={{ background: accent }}
                    >
                      {p.n}
                    </div>
                    <h3 className="text-[12.5px] font-black text-white uppercase tracking-wide leading-snug mb-2">
                      {p.title}
                    </h3>
                    <p className="text-[12px] text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            4. WHY CHOOSE US
        ══════════════════════════════════════════════ */}
        <section className="bg-[#F7F4EE] py-10 sm:py-20 overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-start">

              {/* Left */}
              <div>
                <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-3">
                  Why Choose Us
                </span>
                <h2 className="text-[32px] lg:text-[44px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight mb-5">
                  What Sets Us <span className="text-[#FF6B2B]">Apart</span>
                </h2>
                <p className="text-gray-500 text-[13.5px] leading-[1.85] mb-8">
                  As Chandigarh's leading{" "}
                  <strong className="text-[#FF6B2B] font-bold">packers and movers</strong>, we combine
                  expertise in{" "}
                  <strong className="text-[#1a1a2e] font-bold">home shifting</strong>,{" "}
                  <strong className="text-[#1a1a2e] font-bold">office relocation</strong>,{" "}
                  <strong className="text-[#1a1a2e] font-bold">car relocation</strong>,{" "}
                  <strong className="text-[#1a1a2e] font-bold">warehousing</strong>,{" "}
                  <strong className="text-[#1a1a2e] font-bold">packaging &amp; unpacking</strong>, and{" "}
                  <strong className="text-[#1a1a2e] font-bold">loading &amp; unloading</strong>{" "}
                  with full transparency.
                </p>
                <ul className="space-y-3">
                  {whyUs.map((w) => (
                    <li key={w.label} className="group flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200"
                        style={{ background: `${w.accent}15` }}
                      >
                        <CheckCircle2 size={13} strokeWidth={2.5} style={{ color: w.accent }} />
                      </div>
                      <span className="text-[13px] text-gray-700 font-medium leading-snug pt-0.5">
                        {w.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — dark card */}
              <div className="bg-[#1a1a2e] rounded-3xl p-8 relative overflow-hidden shadow-[0_24px_60px_rgba(26,26,46,0.18)]">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF6B2B] to-[#00B49C]" />
                <div className="absolute top-0 right-0 w-56 h-56 bg-[#FF6B2B]/8 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#00B49C]/6 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative z-10">
                  <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-4">
                    Our Track Record
                  </span>
                  <h3 className="text-[26px] font-black text-white uppercase leading-tight tracking-tight mb-5">
                    Trusted by <span className="text-[#FF6B2B]">2,500+ Families</span>
                  </h3>

                  {/* Trust badges */}
                  <div className="grid grid-cols-2 gap-3 mb-7">
                    {[
                      { icon: BadgeCheck, n: "ISO Certified",  l: "9001:2015",         color: "#00B49C" },
                      { icon: Star,       n: "4.9 / 5",        l: "Google Rating",      color: "#FF6B2B" },
                      { icon: ShieldCheck,n: "100% Insured",   l: "Every Move",         color: "#00B49C" },
                      { icon: Clock,      n: "30 Min",         l: "Response Time",      color: "#FF6B2B" },
                    ].map(b => {
                      const BIcon = b.icon;
                      return (
                        <div key={b.l} className="bg-white/[0.05] border border-white/8 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/[0.08] transition-colors duration-200">
                          <BIcon size={16} style={{ color: b.color }} />
                          <div>
                            <div className="text-[14px] font-black text-white leading-none">{b.n}</div>
                            <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">{b.l}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="tel:+919815162726"
                      className="group flex items-center gap-2 bg-[#FF6B2B] hover:bg-[#e85d1f] text-white font-black uppercase text-[11px] tracking-[2px] px-5 py-3.5 rounded-xl shadow-[0_6px_20px_rgba(255,107,43,0.3)] hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <Phone size={13} /> Call Now
                    </a>
                    <Link
                      href="/#quote"
                      className="group flex items-center gap-2 bg-white/[0.07] hover:bg-white/[0.13] border border-white/10 text-white font-black uppercase text-[11px] tracking-[2px] px-5 py-3.5 rounded-xl transition-all duration-200"
                    >
                      Free Quote
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            5. SEO KEYWORD CARDS
        ══════════════════════════════════════════════ */}
        <section className="bg-white py-10 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 sm:mb-12">
              <div>
                <span className="block text-[10px] font-black text-[#FF6B2B] uppercase tracking-[3px] mb-2">
                  Service Coverage
                </span>
                <h2 className="text-[32px] lg:text-[48px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight">
                  Movers &amp; Packers <span className="text-[#FF6B2B]">Chandigarh</span>
                </h2>
              </div>
              <p className="text-gray-400 text-[13px] max-w-[280px] leading-relaxed">
                Serving all major cities across North, West, South &amp; East India.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                { heading: "Best Packers and Movers in Chandigarh",  accent: "#FF6B2B", body: "Sai Baba Packers & Movers is Chandigarh's most trusted name for home shifting, office relocation, and vehicle transport. ISO 9001:2015 certified, 2,500+ moves completed, available 7 days a week for all relocation needs." },
                { heading: "Home Shifting Chandigarh to Delhi",      accent: "#00B49C", body: "Planning a home shift from Chandigarh to Delhi, Noida, or Gurgaon? Our intercity home shifting services cover the full NH-44 corridor with packed loads departing 7 days a week." },
                { heading: "Office Relocation Chandigarh",           accent: "#FF6B2B", body: "Zero-downtime office relocation in Chandigarh and the tricity. IT equipment, server rooms, workstations, and furniture — all moved by specialists with weekend scheduling." },
                { heading: "Car Transport Chandigarh to Mumbai",     accent: "#00B49C", body: "Enclosed car carriers from Chandigarh to Mumbai, Pune, Bangalore, and all metros. Zero odometer reading, full insurance, and pre/post condition inspection — every time." },
                { heading: "Warehousing & Storage Chandigarh",       accent: "#FF6B2B", body: "Need storage between homes? Our 10,000+ sq. ft. warehousing facility in Chandigarh offers 24/7 monitored, climate-controlled short and long-term storage at affordable rates." },
                { heading: "Packaging & Loading Services",           accent: "#00B49C", body: "Professional packaging, loading & unloading labour available as standalone services. Ideal for those with their own transport who need trained packing and loading expertise." },
              ].map((t, i) => (
                <div
                  key={t.heading}
                  className="group bg-[#F7F4EE] rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:bg-white hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-300" style={{ background: t.accent }} />
                  <div className="absolute right-4 top-3 text-[44px] font-black leading-none select-none opacity-[0.05] pointer-events-none" style={{ color: t.accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-[13px] font-black uppercase tracking-wide leading-snug mb-3" style={{ color: t.accent }}>
                    {t.heading}
                  </h3>
                  <p className="text-[12.5px] text-gray-500 leading-relaxed">{t.body}</p>
                </div>
              ))}
            </div>

            {/* Tag cloud */}
            <div className="bg-[#F7F4EE] border border-gray-100 rounded-2xl px-6 py-5">
              <p className="text-[9.5px] font-black text-gray-400 uppercase tracking-[2.5px] mb-4">
                Related Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {seoTags.map((tag, i) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 text-[11.5px] font-medium text-gray-500 hover:text-[#1a1a2e] bg-white border border-gray-200 hover:border-[#FF6B2B]/30 rounded-lg px-3.5 py-1.5 transition-all duration-150 cursor-default hover:shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: i % 2 === 0 ? "#FF6B2B" : "#00B49C" }} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>
    </>
  );
}
