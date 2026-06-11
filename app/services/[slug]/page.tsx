import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Topbar from "@/app/components/Topbar";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import InnerBanner from "@/app/components/InnerBanner";
import serviceList, { getService } from "@/app/services/data";
import {
  ArrowRight, CheckCircle2, Phone, ChevronDown,
  Home, Building2, Car, Warehouse, Package, Truck,
} from "lucide-react";

/* ─── Static params ─────────────────────────────────── */
export function generateStaticParams() {
  return serviceList.map((s) => ({ slug: s.slug }));
}

/* ─── Metadata ──────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return { title: "Service Not Found" };
  return {
    title:       `${s.label} — Sai Baba Packers & Movers Chandigarh`,
    description: s.metaDesc,
  };
}

/* ─── Related service icons map ─────────────────────── */
const ICONS: Record<string, React.ElementType> = {
  "home-shifting-services":  Home,
  "office-relocation":       Building2,
  "car-relocation-services": Car,
  "warehousing-services":    Warehouse,
  "packaging-unpacking":     Package,
  "loading-unloading":       Truck,
};

/* ─── Page ──────────────────────────────────────────── */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = serviceList.filter((r) => r.slug !== s.slug).slice(0, 3);

  /* Split heading into 3 lines */
  const words = s.label.split(" ");
  const mid   = Math.ceil(words.length / 3);
  const hl: [string, string, string] = [
    words.slice(0, mid).join(" "),
    words.slice(mid, mid * 2).join(" "),
    words.slice(mid * 2).join(" ") || " ",
  ];

  return (
    <>
        {/* ══ BANNER ══ */}
        <InnerBanner
          image={s.bannerImg}
          eyebrow={s.eyebrow}
          headingLines={hl}
          breadcrumbs={[
            { label: "Home",     href: "/"          },
            { label: "Services", href: "/services"  },
            { label: s.label                        },
          ]}
          primaryCta={{ label: "Get Free Quote", href: "/#quote" }}
          description={<>{s.tagline} — trusted by 2,500+ families across 50+ Indian cities.</>}
        />

        {/* ══════════════════════════════════════════════
            1. OVERVIEW  (image + intro)
        ══════════════════════════════════════════════ */}
        <section className="bg-white py-10 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">

              {/* Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden h-[400px] lg:h-[480px] shadow-[0_24px_60px_rgba(0,0,0,0.10)]">
                  <Image src={s.image} alt={s.label} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/50 via-transparent to-transparent" />
                </div>
                {/* Floating stat */}
                <div
                  className="absolute -bottom-5 -right-3 lg:-right-6 text-white px-6 py-4 rounded-2xl text-center shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
                  style={{ background: s.accent }}
                >
                  <span className="block text-[32px] font-black leading-none">{s.stat.n}</span>
                  <span className="block text-[9px] font-black uppercase tracking-[2px] mt-1 opacity-80">{s.stat.l}</span>
                </div>
                {/* ISO tag */}
                <div className="absolute -top-3 -left-3 bg-[#1a1a2e] px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[1.5px] border" style={{ color: s.accent, borderColor: `${s.accent}30` }}>
                  ISO 9001:2015 Certified
                </div>
              </div>

              {/* Copy */}
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[3px] mb-3" style={{ color: s.accent }}>
                  {s.eyebrow}
                </span>
                <h2 className="text-[30px] lg:text-[42px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight mb-6">
                  {s.label.split(" ").map((w, i) => (
                    <span key={i} className={i % 3 === 1 ? `text-[${s.accent}]` : ""}
                      style={i % 3 === 1 ? { color: s.accent } : {}}>
                      {w}{" "}
                    </span>
                  ))}
                </h2>
                <p className="text-gray-500 text-[14px] leading-[1.9] mb-8">
                  {s.intro}
                </p>
                {/* Quick trust pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["ISO Certified", "Transit Insured", "50+ Cities", "7 Days a Week"].map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 text-[11px] font-bold border rounded-lg px-3 py-1.5"
                      style={{ borderColor: `${s.accent}30`, color: s.accent, background: `${s.accent}08` }}
                    >
                      <CheckCircle2 size={11} />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <Link
                    href="/#quote"
                    className="group flex items-center gap-2 text-white font-black uppercase text-[11px] tracking-[2px] px-6 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all duration-200"
                    style={{ background: s.accent, boxShadow: `0 8px 24px ${s.accent}40` }}
                  >
                    Get Free Quote
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <a
                    href="tel:+919815162726"
                    className="flex items-center gap-2 bg-transparent hover:bg-gray-50 border border-gray-200 text-gray-600 font-black uppercase text-[11px] tracking-[2px] px-6 py-3.5 rounded-xl transition-all duration-200"
                  >
                    <Phone size={13} />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            2. WHAT'S INCLUDED
        ══════════════════════════════════════════════ */}
        <section className="bg-[#F7F4EE] py-10 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 sm:mb-12">
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[3px] mb-2" style={{ color: s.accent }}>
                  Full Scope
                </span>
                <h2 className="text-[32px] lg:text-[46px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight">
                  What's <span style={{ color: s.accent }}>Included</span>
                </h2>
              </div>
              <p className="text-gray-400 text-[13px] max-w-[260px] leading-relaxed">
                Everything covered under our {s.label.toLowerCase()} service.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {s.included.map((item, i) => (
                <div
                  key={item.title}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-300" style={{ background: s.accent }} />
                  <div
                    className="absolute right-4 top-3 text-[52px] font-black leading-none select-none opacity-[0.05] pointer-events-none"
                    style={{ color: s.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
                    style={{ background: `${s.accent}12` }}
                  >
                    <CheckCircle2 size={18} strokeWidth={1.8} style={{ color: s.accent }} />
                  </div>
                  <h3 className="text-[13.5px] font-black text-[#1a1a2e] uppercase tracking-wide leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[12.5px] text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            3. PROCESS  (dark section)
        ══════════════════════════════════════════════ */}
        <section className="bg-[#1a1a2e] py-10 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ background: `${s.accent}12` }} />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#00B49C]/8 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-8 sm:mb-14">
              <span className="block text-[10px] font-black uppercase tracking-[3px] mb-3" style={{ color: s.accent }}>
                Step by Step
              </span>
              <h2 className="text-[32px] lg:text-[48px] font-black text-white uppercase leading-[0.92] tracking-tight">
                How It <span style={{ color: s.accent }}>Works</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
              {/* Connector — desktop */}
              <div className="hidden lg:block absolute top-[26px] left-[10%] right-[10%] h-px pointer-events-none" style={{ background: `linear-gradient(to right, ${s.accent}30, ${s.accent}60, ${s.accent}30)` }} />

              {s.process.map((p) => (
                <div key={p.n} className="flex flex-col items-center text-center group">
                  <div
                    className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-white font-black text-[15px] mb-5 relative z-10 shadow-[0_8px_24px_rgba(0,0,0,0.25)] group-hover:scale-105 transition-transform duration-200"
                    style={{ background: s.accent }}
                  >
                    {p.n}
                  </div>
                  <h3 className="text-[12.5px] font-black text-white uppercase tracking-wide leading-snug mb-2">{p.title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            4. PRICING PREVIEW
        ══════════════════════════════════════════════ */}
        <section className="bg-white py-10 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-start">

              {/* Left — pricing table */}
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[3px] mb-3" style={{ color: s.accent }}>
                  Transparent Pricing
                </span>
                <h2 className="text-[32px] lg:text-[42px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight mb-3">
                  Starting <span style={{ color: s.accent }}>Rates</span>
                </h2>
                <p className="text-gray-400 text-[13px] mb-8 leading-relaxed">
                  All prices include packing materials and labour. Final quote is provided after a free survey — zero hidden charges.
                </p>
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
                  {/* Header */}
                  <div className="px-5 py-3.5 flex justify-between text-[10px] font-black uppercase tracking-[2px]" style={{ background: "#1a1a2e", color: "white" }}>
                    <span>Service Tier</span>
                    <span>Starting From</span>
                  </div>
                  {s.pricing.map((row, i) => (
                    <div
                      key={row.label}
                      className="px-5 py-4 flex justify-between items-center border-b border-gray-50 last:border-0"
                      style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}
                    >
                      <span className="text-[13px] text-gray-600 font-medium">{row.label}</span>
                      <span className="text-[14px] font-black" style={{ color: s.accent }}>{row.from}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-gray-400 mt-3">* Prices are indicative. Actual quote depends on volume, distance & access conditions.</p>
              </div>

              {/* Right — CTA card */}
              <div className="bg-[#1a1a2e] rounded-3xl p-8 relative overflow-hidden shadow-[0_24px_60px_rgba(26,26,46,0.18)]">
                <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: `linear-gradient(to right, ${s.accent}, #00B49C)` }} />
                <div className="absolute top-0 right-0 w-56 h-56 rounded-full blur-[80px] pointer-events-none" style={{ background: `${s.accent}12` }} />
                <div className="relative z-10">
                  <span className="block text-[10px] font-black uppercase tracking-[3px] mb-4" style={{ color: s.accent }}>
                    Get Exact Quote
                  </span>
                  <h3 className="text-[24px] font-black text-white uppercase leading-tight tracking-tight mb-4">
                    Free, No-Obligation <span style={{ color: s.accent }}>Estimate</span>
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-[1.85] mb-6">
                    Call or fill the form and receive a transparent, itemised quote for your{" "}
                    <strong className="text-white/70">{s.label.toLowerCase()}</strong> within 30 minutes. No commitment required.
                  </p>
                  <div className="space-y-3 mb-7">
                    {["Free site survey", "Itemised quote — no hidden charges", "30-min response guaranteed", "7-day cancellation policy"].map((p) => (
                      <div key={p} className="flex items-center gap-2.5">
                        <CheckCircle2 size={13} style={{ color: s.accent }} />
                        <span className="text-[12.5px] text-gray-400">{p}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="tel:+919815162726"
                      className="group flex items-center gap-2 text-white font-black uppercase text-[11px] tracking-[2px] px-5 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all duration-200"
                      style={{ background: s.accent, boxShadow: `0 6px 20px ${s.accent}40` }}
                    >
                      <Phone size={13} /> Call Now
                    </a>
                    <Link
                      href="/#quote"
                      className="group flex items-center gap-2 bg-white/[0.07] hover:bg-white/[0.13] border border-white/10 text-white font-black uppercase text-[11px] tracking-[2px] px-5 py-3.5 rounded-xl transition-all duration-200"
                    >
                      Online Quote
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            5. FAQ
        ══════════════════════════════════════════════ */}
        <section className="bg-[#F7F4EE] py-10 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[380px_1fr] gap-6 sm:gap-12 items-start">

              {/* Left heading */}
              <div className="lg:sticky lg:top-28">
                <span className="block text-[10px] font-black uppercase tracking-[3px] mb-3" style={{ color: s.accent }}>
                  Common Questions
                </span>
                <h2 className="text-[32px] lg:text-[42px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight mb-5">
                  Frequently <span style={{ color: s.accent }}>Asked</span>
                </h2>
                <p className="text-gray-500 text-[13.5px] leading-relaxed mb-8">
                  Can't find your answer? Call us directly — our team responds within 30 minutes.
                </p>
                <a
                  href="tel:+919815162726"
                  className="inline-flex items-center gap-2 text-white font-black uppercase text-[11px] tracking-[2px] px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: s.accent, boxShadow: `0 8px 24px ${s.accent}35` }}
                >
                  <Phone size={13} />
                  Ask Us Anything
                </a>
              </div>

              {/* Right FAQs */}
              <div className="space-y-3">
                {s.faqs.map((faq, i) => (
                  <details
                    key={faq.q}
                    className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-200"
                    open={i === 0}
                  >
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                      <span className="text-[13.5px] font-black text-[#1a1a2e] uppercase tracking-wide leading-snug pr-2">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={16}
                        className="shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200"
                        style={{ color: s.accent }}
                      />
                    </summary>
                    <div className="px-6 pb-5 border-t border-gray-50">
                      <p className="text-[13px] text-gray-500 leading-[1.85] pt-4">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            6. RELATED SERVICES
        ══════════════════════════════════════════════ */}
        <section className="bg-white py-10 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-2">
                  Explore More
                </span>
                <h2 className="text-[32px] lg:text-[44px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight">
                  Related <span className="text-[#FF6B2B]">Services</span>
                </h2>
              </div>
              <Link
                href="/services"
                className="group self-start flex items-center gap-2 border border-gray-200 hover:border-[#FF6B2B] text-gray-500 hover:text-[#FF6B2B] font-black uppercase text-[11px] tracking-[2px] px-5 py-3 rounded-xl transition-all duration-200"
              >
                All Services
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((r, i) => {
                const Icon  = ICONS[r.slug] ?? Home;
                const acc   = i % 2 === 0 ? "#FF6B2B" : "#00B49C";
                return (
                  <Link
                    key={r.slug}
                    href={`/services/${r.slug}`}
                    className="group bg-[#F7F4EE] rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:bg-white hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col"
                  >
                    <div className="absolute top-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-300 rounded-br-full" style={{ background: acc }} />
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shrink-0" style={{ background: `${acc}15` }}>
                      <Icon size={20} strokeWidth={1.8} style={{ color: acc }} />
                    </div>
                    <h3 className="text-[14px] font-black text-[#1a1a2e] uppercase tracking-wide leading-snug mb-2">
                      {r.label}
                    </h3>
                    <p className="text-[12.5px] text-gray-500 leading-relaxed flex-1 mb-4">
                      {r.desc ?? r.intro.slice(0, 100) + "…"}
                    </p>
                    <span className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider transition-colors duration-200" style={{ color: acc }}>
                      Learn More
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            7. SEO TAG CLOUD
        ══════════════════════════════════════════════ */}
        <section className="bg-[#fff] pb-10 pt-0">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="bg-[#F7F4EE] border border-gray-100 rounded-2xl px-6 py-5">
              <p className="text-[9.5px] font-black text-gray-400 uppercase tracking-[2.5px] mb-4">Related Searches</p>
              <div className="flex flex-wrap gap-2">
                {s.seoTags.map((tag, i) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 text-[11.5px] font-medium text-gray-500 hover:text-[#1a1a2e] bg-[#F7F4EE] border border-gray-200 hover:border-[#FF6B2B]/30 rounded-lg px-3.5 py-1.5 transition-all duration-150 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: i % 2 === 0 ? s.accent : "#00B49C" }} />
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
