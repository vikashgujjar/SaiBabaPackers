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
  Star,
} from "lucide-react";

/* ─── Metadata ──────────────────────────────────────── */
export const metadata: Metadata = {
  title: "About Us — Sai Baba Packers & Movers Chandigarh",
  description:
    "Learn about Sai Baba Packers & Movers — Chandigarh's trusted experts in home shifting, office relocation, car transport, warehousing, packing & unpacking, and loading & unloading services across India.",
};

/* ─── Data ──────────────────────────────────────────── */
const services = [
  { icon: Home,      label: "Home Shifting Services", desc: "Complete door-to-door household relocation with careful packing, loading, transport, and reassembly." },
  { icon: Building2, label: "Office Relocation",       desc: "Zero-downtime commercial moves — workstations, IT racks, and furniture, handled by specialists." },
  { icon: Car,       label: "Car Relocation Services", desc: "Enclosed carrier transport for cars & bikes with zero odometer reading and full transit insurance." },
  { icon: Warehouse, label: "Warehousing Services",    desc: "24/7 CCTV-monitored, climate-controlled, pest-treated storage from 7 days to 7 months." },
  { icon: Package,   label: "Packaging & Unpacking",   desc: "Material-specific wrapping — bubble wrap, foam corner guards, heavy-gauge cartons — for zero damage." },
  { icon: Truck,     label: "Loading & Unloading",     desc: "Hydraulic lifts, padded floor runners, and door guards ensure scratch-free heavy lifting." },
];

const whyUs = [
  { label: "ISO 9001:2015 Certified company",                       accent: "#FF6B2B" },
  { label: "Specialists in home shifting & office relocation",      accent: "#00B49C" },
  { label: "Expert packaging, unpacking & loading-unloading",       accent: "#FF6B2B" },
  { label: "Car relocation & warehousing with transit insurance",   accent: "#00B49C" },
  { label: "Own fleet — door-to-door transportation services",      accent: "#FF6B2B" },
  { label: "Transparent pricing — zero hidden charges, ever",       accent: "#00B49C" },
  { label: "Background-checked, trained professional crew",         accent: "#FF6B2B" },
  { label: "30-minute response for all shifting enquiries",         accent: "#00B49C" },
];

const seoTopics = [
  { heading: "Home Shifting Services in Chandigarh",  accent: "#FF6B2B", body: "Looking for reliable home shifting services in Chandigarh? Sai Baba Packers & Movers offers end-to-end household relocation with professional packaging, safe loading & unloading, and damage-free transportation. We serve Mohali, Panchkula, Zirakpur, and all nearby areas." },
  { heading: "Office Relocation & Commercial Moving", accent: "#00B49C", body: "Our office relocation experts handle everything from workstations and IT equipment to server racks and filing systems. Weekend and after-hours scheduling ensures zero downtime. We relocate offices across Chandigarh, Delhi NCR, Mumbai, Pune, and 50+ cities." },
  { heading: "Car Relocation & Vehicle Transport",    accent: "#FF6B2B", body: "Trusted car relocation services from Chandigarh to all major Indian cities. We use enclosed carriers and custom bike cradles for zero-damage vehicle transport. Full transit insurance and pre/post delivery inspection reports are standard on every move." },
  { heading: "Packaging, Unpacking & Loading",        accent: "#00B49C", body: "Our trained packers use bubble wrap, foam corner guards, and heavy-gauge cartons specific to each item. The loading & unloading crew uses hydraulic lifts and padded runners. Every item is inventoried and labelled before the truck departs." },
  { heading: "Warehousing & Storage Services",        accent: "#FF6B2B", body: "Short-term or long-term warehousing with 24/7 CCTV monitoring, climate control, and monthly pest treatment. Your goods remain catalogued and retrievable on 24-hour notice — ideal for delayed possession, corporate moves, or renovation storage." },
  { heading: "Transportation Services Across India",  accent: "#00B49C", body: "Our own fleet of vehicles provides reliable door-to-door transportation services from Chandigarh to Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, and all major destinations across India. GPS-tracked, fully insured, on-time guaranteed." },
];

const seoTags = [
  "Packers and Movers Chandigarh", "Home Shifting Services", "Office Relocation Chandigarh",
  "Car Relocation Services", "Bike Transport", "Packaging and Unpacking",
  "Loading and Unloading Services", "Warehousing Services Chandigarh",
  "Household Goods Transport", "Inter-City Moving", "Pan-India Relocation",
  "Best Packers Movers Near Me", "ISO Certified Movers", "Transportation Services India",
];

/* ─── Page ──────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <InnerBanner
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=90"
        eyebrow="Who We Are"
        headingLines={["Sai Baba", "Packers &", "Movers"]}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        primaryCta={{ label: "Our Story", href: "#story" }}
        description={
          <>
            Chandigarh's most trusted experts in{" "}
            <strong className="text-white font-bold">home shifting</strong>,{" "}
            <strong className="text-white font-bold">office relocation</strong>,{" "}
            <strong className="text-white font-bold">car transport</strong>,{" "}
            <strong className="text-white font-bold">warehousing</strong>, and{" "}
            <strong className="text-white font-bold">packing &amp; unpacking</strong>{" "}
            — serving 50+ cities across India.
          </>
        }
      />

      {/* ════════════════════════════════════════════
          1. COMPANY STORY
      ════════════════════════════════════════════ */}
      <section id="story" className="bg-white py-10 sm:py-20 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">

            {/* Left — image with overlapping badges */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden relative h-[420px] lg:h-[500px] shadow-[0_24px_60px_rgba(0,0,0,0.10)]">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=85"
                  alt="Sai Baba Packers team at work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 via-transparent to-transparent" />
                {/* Rating pill */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2.5 bg-white/95 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-lg">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} fill="#FF6B2B" className="text-[#FF6B2B]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-black text-[#1a1a2e] uppercase tracking-wider">
                    4.9 / 5 — 2,500+ Moves
                  </span>
                </div>
              </div>
              {/* 15+ floating badge */}
              <div className="absolute -bottom-5 -right-4 lg:-right-6 bg-[#FF6B2B] text-white px-6 py-5 rounded-2xl text-center shadow-[0_16px_40px_rgba(255,107,43,0.38)]">
                <span className="block text-[40px] font-black leading-none">15+</span>
                <span className="block text-[9px] font-black uppercase tracking-[2px] mt-1 text-orange-100">
                  Years of<br />Trust
                </span>
              </div>
              {/* ISO tag */}
              <div className="absolute -top-3 -left-3 bg-[#1a1a2e] text-[#00B49C] px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[1.5px] border border-[#00B49C]/20">
                ISO 9001:2015 Certified
              </div>
            </div>

            {/* Right — story copy */}
            <div>
              <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-3">
                Our Story
              </span>
              <h2 className="text-[32px] lg:text-[44px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight mb-6">
                Built on <span className="text-[#FF6B2B]">Trust &amp;</span> Hard Work
              </h2>

              <div className="space-y-4 text-[13.5px] text-gray-500 leading-[1.9]">
                <p>
                  Through foresight, planning, and hard work, we have become the undisputed market
                  leader in the{" "}
                  <strong className="text-[#1a1a2e] font-bold">moving and packing services</strong>{" "}
                  business. We started out modest, but we've expanded in every area possible. In
                  order to serve our clients well, we have made it a priority to be on the cutting
                  edge of our field.
                </p>
                <p>
                  We are an expanding and creative group. Our{" "}
                  <strong className="text-[#FF6B2B] font-bold">home shifting services</strong>,{" "}
                  <strong className="text-[#FF6B2B] font-bold">office relocation</strong>,{" "}
                  <strong className="text-[#FF6B2B] font-bold">car relocation services</strong>,{" "}
                  <strong className="text-[#FF6B2B] font-bold">warehousing</strong>,{" "}
                  <strong className="text-[#FF6B2B] font-bold">packaging &amp; unpacking</strong>, and{" "}
                  <strong className="text-[#FF6B2B] font-bold">loading &amp; unloading</strong> have
                  been among the best in the industry. Our mission has always been to offer secure,
                  streamlined, and trouble-free relocation of goods.
                </p>
                <p>
                  We've integrated cutting-edge{" "}
                  <strong className="text-[#1a1a2e] font-bold">packing methods</strong> and
                  high-quality supplies into our standard operating procedure. Our{" "}
                  <strong className="text-[#00B49C] font-bold">transportation services</strong>{" "}
                  cover Chandigarh, Faridabad, Delhi, Noida, Gurgaon, Lucknow, Mumbai, Pune,
                  Bangalore, and all major cities across India.
                </p>
              </div>

              {/* Inline stats strip */}
              <div className="grid grid-cols-3 gap-4 mt-8 mb-8 py-6 border-y border-gray-100">
                {[
                  { n: "2,500+", l: "Families Moved" },
                  { n: "50+",    l: "Cities Served"  },
                  { n: "100%",   l: "Insured Moves"  },
                ].map(s => (
                  <div key={s.l} className="text-center">
                    <div className="text-[24px] font-black text-[#FF6B2B] leading-none">{s.n}</div>
                    <div className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider mt-1">{s.l}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/#services"
                className="group inline-flex items-center gap-2 bg-[#FF6B2B] hover:bg-[#e85d1f] text-white font-black uppercase text-[11px] tracking-[2px] px-6 py-3.5 rounded-xl shadow-[0_8px_24px_rgba(255,107,43,0.3)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Our Services
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. MISSION & VISION
      ════════════════════════════════════════════ */}
      <section className="bg-[#F7F4EE] py-10 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B2B]/20 to-transparent" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 sm:mb-12">
            <div>
              <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-2">
                What Drives Us
              </span>
              <h2 className="text-[32px] lg:text-[48px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight">
                Mission &amp; <span className="text-[#FF6B2B]">Vision</span>
              </h2>
            </div>
            <p className="text-gray-400 text-[13px] max-w-[280px] leading-relaxed">
              The values that guide every move we make.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.04)] relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(255,107,43,0.08)] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#FF6B2B]" />
              <div className="absolute right-5 bottom-4 text-[100px] font-black text-[#FF6B2B]/[0.05] leading-none select-none pointer-events-none">M</div>
              <div className="w-10 h-10 rounded-xl bg-[#FF6B2B]/10 flex items-center justify-center mb-5">
                <span className="text-[16px] font-black text-[#FF6B2B]">M</span>
              </div>
              <span className="block text-[10px] font-black text-[#FF6B2B] uppercase tracking-[3px] mb-3">
                Our Mission
              </span>
              <p className="text-gray-500 text-[14px] leading-[1.9]">
                To be India's most reliable{" "}
                <strong className="text-[#1a1a2e] font-semibold">packers and movers</strong> — delivering
                stress-free{" "}
                <strong className="text-[#FF6B2B] font-semibold">home shifting</strong>,{" "}
                <strong className="text-[#FF6B2B] font-semibold">office relocation</strong>,{" "}
                <strong className="text-[#FF6B2B] font-semibold">car transport</strong>, and{" "}
                <strong className="text-[#FF6B2B] font-semibold">warehousing services</strong>{" "}
                through trained professionals, premium packing materials, and complete transparency in pricing.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.04)] relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(0,180,156,0.08)] transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#00B49C]" />
              <div className="absolute right-5 bottom-4 text-[100px] font-black text-[#00B49C]/[0.05] leading-none select-none pointer-events-none">V</div>
              <div className="w-10 h-10 rounded-xl bg-[#00B49C]/10 flex items-center justify-center mb-5">
                <span className="text-[16px] font-black text-[#00B49C]">V</span>
              </div>
              <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-3">
                Our Vision
              </span>
              <p className="text-gray-500 text-[14px] leading-[1.9]">
                To expand our{" "}
                <strong className="text-[#1a1a2e] font-semibold">packing and moving services</strong>{" "}
                to every city in India, making quality{" "}
                <strong className="text-[#00B49C] font-semibold">loading &amp; unloading</strong>,{" "}
                <strong className="text-[#00B49C] font-semibold">packaging &amp; unpacking</strong>, and{" "}
                <strong className="text-[#00B49C] font-semibold">transportation services</strong>{" "}
                accessible to every family and business — at fair, transparent prices with zero hidden charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. SERVICES OVERVIEW
      ════════════════════════════════════════════ */}
      <section className="bg-white py-10 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 sm:mb-12">
            <div>
              <span className="block text-[10px] font-black text-[#FF6B2B] uppercase tracking-[3px] mb-2">
                What We Do
              </span>
              <h2 className="text-[32px] lg:text-[48px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight">
                Our <span className="text-[#FF6B2B]">Core Services</span>
              </h2>
            </div>
            <Link
              href="/#services"
              className="group self-start flex items-center gap-2 border border-gray-200 hover:border-[#FF6B2B] text-gray-500 hover:text-[#FF6B2B] font-black uppercase text-[11px] tracking-[2px] px-5 py-3 rounded-xl transition-all duration-200"
            >
              View All Services
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              const acc  = i % 2 === 0 ? "#FF6B2B" : "#00B49C";
              const num  = String(i + 1).padStart(2, "0");
              return (
                <div
                  key={s.label}
                  className="group bg-[#F7F4EE] rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:bg-white hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col"
                >
                  <div className="absolute top-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-300 rounded-br-full" style={{ background: acc }} />
                  <div className="absolute right-4 top-3 text-[52px] font-black leading-none select-none opacity-[0.05] pointer-events-none" style={{ color: acc }}>
                    {num}
                  </div>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shrink-0" style={{ background: `${acc}15` }}>
                    <Icon size={20} strokeWidth={1.8} style={{ color: acc }} />
                  </div>
                  <h3 className="text-[14px] font-black text-[#1a1a2e] uppercase tracking-wide leading-snug mb-2.5">
                    {s.label}
                  </h3>
                  <p className="text-[12.5px] text-gray-500 leading-relaxed flex-1">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          4. WHY CHOOSE US
      ════════════════════════════════════════════ */}
      <section className="bg-[#F7F4EE] py-10 sm:py-20 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-start">

            {/* Left — checklist */}
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
                decades of expertise in{" "}
                <strong className="text-[#1a1a2e] font-bold">home shifting</strong>,{" "}
                <strong className="text-[#1a1a2e] font-bold">office relocation</strong>,{" "}
                <strong className="text-[#1a1a2e] font-bold">car relocation services</strong>,{" "}
                <strong className="text-[#1a1a2e] font-bold">warehousing</strong>,{" "}
                <strong className="text-[#1a1a2e] font-bold">packaging &amp; unpacking</strong>, and{" "}
                <strong className="text-[#1a1a2e] font-bold">loading &amp; unloading</strong>{" "}
                with cutting-edge equipment and transparent pricing.
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

            {/* Right — dark info card */}
            <div className="bg-[#1a1a2e] rounded-3xl p-8 relative overflow-hidden shadow-[0_24px_60px_rgba(26,26,46,0.2)]">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF6B2B] to-[#00B49C]" />
              <div className="absolute top-0 right-0 w-56 h-56 bg-[#FF6B2B]/8 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#00B49C]/6 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-4">
                  We Serve
                </span>
                <h3 className="text-[26px] font-black text-white uppercase leading-tight tracking-tight mb-5">
                  50+ Cities <span className="text-[#FF6B2B]">Pan-India</span>
                </h3>
                <p className="text-gray-500 text-[13px] leading-[1.85] mb-6">
                  Our{" "}
                  <strong className="text-white/80 font-semibold">home shifting</strong> and{" "}
                  <strong className="text-white/80 font-semibold">transportation services</strong>{" "}
                  operate across Chandigarh, Faridabad, Ghaziabad, Delhi, Noida, Gurgaon,
                  Vaishali, Indirapuram, Varanasi, Agra, Kanpur, Lucknow, Dehradun, Ambala,
                  Ludhiana, Patiala, Amritsar, Kolkata, Guwahati, Patna, Madurai, Mangalore,
                  Mumbai, Nagpur, Navi Mumbai &amp; all important cities across India.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-7">
                  {[
                    { n: "2,500+", l: "Moves Completed" },
                    { n: "15+",    l: "Years Experience" },
                    { n: "50+",    l: "Cities Covered"   },
                    { n: "4.9★",   l: "Google Rating"    },
                  ].map(s => (
                    <div key={s.l} className="bg-white/[0.05] border border-white/8 rounded-xl px-4 py-3 hover:bg-white/[0.08] transition-colors duration-200">
                      <div className="text-[22px] font-black text-[#FF6B2B] leading-none">{s.n}</div>
                      <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mt-1">{s.l}</div>
                    </div>
                  ))}
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

      {/* ════════════════════════════════════════════
          5. SEO KEYWORD SECTION
      ════════════════════════════════════════════ */}
      <section className="bg-white py-10 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 sm:mb-12">
            <div>
              <span className="block text-[10px] font-black text-[#FF6B2B] uppercase tracking-[3px] mb-2">
                Trusted Relocation Partner
              </span>
              <h2 className="text-[32px] lg:text-[48px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight">
                Packers &amp; Movers <span className="text-[#FF6B2B]">Chandigarh</span>
              </h2>
            </div>
            <p className="text-gray-400 text-[13px] max-w-[280px] leading-relaxed">
              Everything you need to know about our services and coverage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {seoTopics.map((t, i) => (
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

          {/* Keyword tag cloud */}
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