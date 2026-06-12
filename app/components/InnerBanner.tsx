"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Phone, Award, ChevronRight, MapPin,
  Calendar, ShieldCheck, CheckCircle, Truck,
  User, Mail, MessageSquare,
} from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface InnerBannerProps {
  image:         string;
  eyebrow?:      string;
  headingLines:  [string, string, string];
  description?:  React.ReactNode;
  breadcrumbs:   BreadcrumbItem[];
  primaryCta?:   { label: string; href: string };
  showIsoBadge?: boolean;
  showQuoteForm?: boolean;
}

const MOVE_TYPES = [
  { id: "home",    label: "Home",    icon: "🏠" },
  { id: "office",  label: "Office",  icon: "🏢" },
  { id: "vehicle", label: "Vehicle", icon: "🚗" },
  { id: "storage", label: "Storage", icon: "📦" },
];

export default function InnerBanner({
  image,
  eyebrow,
  headingLines,
  description,
  breadcrumbs,
  primaryCta,
  showIsoBadge = true,
  showQuoteForm = false,
}: InnerBannerProps) {
  const [line1, line2, line3] = headingLines;
  /* Full title for the marquee watermark */
  const marqueeText = `${line1} ${line2} ${line3}`;

  const router = useRouter();
  const [moveType,  setMoveType]  = useState("home");
  const [name,      setName]      = useState("");
  const [phone,     setPhone]     = useState("");
  const [email,     setEmail]     = useState("");
  const [from,      setFrom]      = useState("");
  const [to,        setTo]        = useState("");
  const [date,      setDate]      = useState("");
  const dateRef = useRef<HTMLInputElement>(null);
  const [message,   setMessage]   = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loader,    setLoader]    = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      Swal.fire({ icon: "error", title: "Required Fields", text: "Please enter your name and phone number.", confirmButtonColor: "#FF6B2B" });
      return;
    }
    setLoader(true);
    try {
      const res = await fetch("https://mail.futuretouch.org/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company:      "sai-baba-movers",
          company_name: "Sai Baba Packers & Movers",
          name,
          phone,
          email,
          serviceType:  moveType,
          from,
          to,
          date:         date || "Not specified",
          message,
          mail_to:      "saibabamovers.chd@gmail.com",
        }),
      });
      if (res.ok) {
        router.push("/thank-you");
      } else {
        Swal.fire("Error", "Failed to send message. Please try again.", "error");
      }
    } catch {
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setLoader(false);
    }
  }

  return (
    <section className={`relative overflow-hidden bg-[#1a1a2e] flex flex-col ${
      showQuoteForm
        ? "min-h-[auto] lg:min-h-[680px]"
        : "min-h-[380px] sm:min-h-[420px] lg:min-h-[520px]"
    }`}>

      <style>{`
        @keyframes ibFadeUp  { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ibFloat   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes ibTruck   { 0%{left:0;opacity:0} 12%{opacity:1} 88%{opacity:1} 100%{left:calc(100% - 22px);opacity:0} }
        @keyframes ibDash    { to{ stroke-dashoffset:-24; } }
        @keyframes ibShimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes ibSweep   { 0%{left:-75%} 50%,100%{left:130%} }

        .ib-fadeu   { animation: ibFadeUp .7s cubic-bezier(.22,1,.36,1) both; }
        .ib-fadeu-1 { animation-delay:.08s }
        .ib-fadeu-2 { animation-delay:.18s }
        .ib-fadeu-3 { animation-delay:.28s }

        .ib-card-float { animation: ibFloat 6s ease-in-out infinite; }

        /* Route visualization */
        .ib-route-line { stroke-dasharray: 6 6; animation: ibDash 1.2s linear infinite; }
        .ib-route-truck {
          position: absolute; top: 50%; transform: translateY(-50%);
          animation: ibTruck 3.5s ease-in-out infinite;
        }

        /* Glass form card */
        .ib-glass-card {
          background: rgba(255,255,255,.97);
          border-radius: 24px;
          box-shadow: 0 30px 80px rgba(0,0,0,.45), 0 0 0 1px rgba(255,255,255,.08);
        }

        /* Gradient border glow */
        .ib-card-glow {
          position: absolute; inset: -1px;
          border-radius: 25px;
          background: linear-gradient(135deg,#FF6B2B,#00B49C,#FF6B2B);
          background-size: 200% 200%;
          opacity: .55;
          z-index: -1;
          filter: blur(2px);
          animation: ibShimmer 6s linear infinite;
        }

        /* Input focus glow */
        .ib-input-row { transition: background .2s; }
        .ib-input-row:focus-within { background: rgba(255,107,43,.05); }

        /* Move type pill */
        .ib-pill { transition: all .2s ease; }
        .ib-pill.active {
          background: #FF6B2B; border-color:#FF6B2B; color:#fff;
          box-shadow: 0 4px 14px rgba(255,107,43,.4);
        }

        /* CTA shimmer button */
        .ib-cta-btn { position: relative; overflow: hidden; }
        .ib-cta-btn::after {
          content:''; position:absolute; top:0; left:-75%; width:50%; height:100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,.35), transparent);
          transform: skewX(-20deg);
          animation: ibSweep 3.2s ease-in-out infinite;
        }

        @media (max-width: 1023px) {
          .ib-grid { grid-template-columns: 1fr !important; }
          .ib-form-col { order: -1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ib-fadeu,.ib-card-float,.ib-route-line,.ib-route-truck,
          .ib-card-glow,.ib-cta-btn::after { animation: none !important; }
        }
      `}</style>

      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={marqueeText}
          fill
          className="object-cover object-center scale-105"
          priority
        />
        {/* Rich layered overlay */}
        <div className="absolute inset-0 bg-[#1a1a2e]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/60 via-transparent to-[#1a1a2e]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/70 via-transparent to-[#1a1a2e]/40" />
      </div>

      {/* ── Scrolling marquee watermark ── */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
        <div className="flex w-max animate-marquee gap-0 opacity-[0.04]">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-[70px] sm:text-[110px] lg:text-[180px] font-black text-white uppercase tracking-tighter leading-none whitespace-nowrap px-8"
            >
              {marqueeText} ·
            </span>
          ))}
        </div>
      </div>

      {/* ── Top utility bar ── */}
      <div className="relative z-20 border-b border-white/8">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between gap-4">

          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={10} className="text-white/20" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-[10px] font-bold text-white/40 hover:text-[#FF6B2B] uppercase tracking-[2px] transition-colors duration-200"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[10px] font-black text-[#FF6B2B] uppercase tracking-[2px]">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Right: ISO + phone */}
          <div className="flex items-center gap-4 shrink-0">
            {showIsoBadge && (
              <div className="hidden sm:flex items-center gap-1.5 text-[9.5px] font-black text-gray-500 uppercase tracking-[1.5px]">
                <Award size={11} className="text-[#00B49C]" />
                ISO 9001:2015
              </div>
            )}
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <a
              href="tel:+919815162726"
              className="flex items-center gap-1.5 text-[11px] font-bold text-white/50 hover:text-[#FF6B2B] transition-colors duration-200"
            >
              <Phone size={11} className="text-[#FF6B2B]" />
              +91-9815162726
            </a>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-14 lg:py-16">

          {!showQuoteForm ? (
            /* ═══ Original single-column layout (no form) ═══ */
            <div className="max-w-[680px]">
              <BannerHeading eyebrow={eyebrow} line1={line1} line2={line2} line3={line3} />
              {description && (
                <p className="text-gray-500 text-[14px] leading-[1.85] max-w-[520px] mb-8">
                  {description}
                </p>
              )}
              <BannerCtas primaryCta={primaryCta} />
            </div>
          ) : (
            /* ═══ Split layout — content left, quote form right ═══ */
            <div className="ib-grid grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">

              {/* ══════════ LEFT — content ══════════ */}
              <div className="text-left">
                <BannerHeading eyebrow={eyebrow} line1={line1} line2={line2} line3={line3} />
                {description && (
                  <p className="ib-fadeu ib-fadeu-2 text-gray-500 text-[14px] leading-[1.85] max-w-[520px] mb-8">
                    {description}
                  </p>
                )}
                <div className="ib-fadeu ib-fadeu-3">
                  <BannerCtas primaryCta={primaryCta} />
                </div>
              </div>

              {/* ══════════ RIGHT — floating quote form ══════════ */}
              <div className="ib-form-col ib-fadeu ib-fadeu-2 relative">
                <div className="ib-card-glow" />
                <div className="ib-card-float ib-glass-card relative p-6 sm:p-7">

                  {!submitted ? (
                    <form onSubmit={handleSubmit}>

                      {/* Header */}
                      <div className="mb-5">
                        <h3 className="text-[19px] sm:text-[21px] font-black text-[#1a1a2e] uppercase tracking-tight leading-none mb-1">
                          Get a Free Quote
                        </h3>
                        <p className="text-gray-400 text-[12px] font-medium">
                          Response within 30 minutes · No obligation
                        </p>
                      </div>

                      {/* NAME + PHONE — 2 col */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5">
                        <div className="ib-input-row flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-100">
                          <div className="w-9 h-9 rounded-xl bg-[#00B49C]/10 flex items-center justify-center shrink-0">
                            <User size={15} className="text-[#00B49C]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-[2px] mb-0.5">Full Name *</p>
                            <input type="text" required placeholder="Your full name"
                              value={name} onChange={e => setName(e.target.value)}
                              className="w-full text-[14px] font-bold text-gray-800 placeholder:text-gray-300 placeholder:font-normal bg-transparent outline-none" />
                          </div>
                        </div>

                        <div className="ib-input-row flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-100">
                          <div className="w-9 h-9 rounded-xl bg-[#FF6B2B]/10 flex items-center justify-center shrink-0">
                            <Phone size={15} className="text-[#FF6B2B]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-[2px] mb-0.5">Phone Number *</p>
                            <input type="tel" required placeholder="10-digit mobile number"
                              value={phone} onChange={e => setPhone(e.target.value)}
                              className="w-full text-[14px] font-bold text-gray-800 placeholder:text-gray-300 placeholder:font-normal bg-transparent outline-none" />
                          </div>
                        </div>
                      </div>

                      {/* EMAIL — full width */}
                      <div className="ib-input-row flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-100 mb-2.5">
                        <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                          <Mail size={15} className="text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] font-black text-gray-400 uppercase tracking-[2px] mb-0.5">Email Address (optional)</p>
                          <input type="email" placeholder="you@example.com"
                            value={email} onChange={e => setEmail(e.target.value)}
                            className="w-full text-[14px] font-bold text-gray-800 placeholder:text-gray-300 placeholder:font-normal bg-transparent outline-none" />
                        </div>
                      </div>

                      {/* MOVING FROM / TO — 2 col */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5">
                        <div className="ib-input-row flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-100">
                          <div className="w-9 h-9 rounded-xl bg-[#00B49C]/10 flex items-center justify-center shrink-0">
                            <MapPin size={15} className="text-[#00B49C]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-[2px] mb-0.5">Moving From *</p>
                            <input type="text" required placeholder="Pickup city or area"
                              value={from} onChange={e => setFrom(e.target.value)}
                              className="w-full text-[14px] font-bold text-gray-800 placeholder:text-gray-300 placeholder:font-normal bg-transparent outline-none" />
                          </div>
                        </div>

                        <div className="ib-input-row flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-100">
                          <div className="w-9 h-9 rounded-xl bg-[#FF6B2B]/10 flex items-center justify-center shrink-0">
                            <MapPin size={15} className="text-[#FF6B2B]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-[2px] mb-0.5">Moving To *</p>
                            <input type="text" required placeholder="Destination city or area"
                              value={to} onChange={e => setTo(e.target.value)}
                              className="w-full text-[14px] font-bold text-gray-800 placeholder:text-gray-300 placeholder:font-normal bg-transparent outline-none" />
                          </div>
                        </div>
                      </div>

                      {/* Connecting route line + truck */}
                      <div className="relative h-5 ml-[34px] mb-1 hidden sm:block overflow-hidden" style={{ width: "calc(90% + 9px)" }}>
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#FF6B2B" strokeWidth="2" className="ib-route-line" strokeLinecap="round" opacity="0.35" />
                        </svg>
                        <div className="ib-route-truck w-[22px] h-[22px] rounded-full bg-[#FF6B2B] flex items-center justify-center shadow-[0_4px_10px_rgba(255,107,43,0.5)]">
                          <Truck size={11} className="text-white" />
                        </div>
                      </div>

                      {/* DATE */}
                      <div className="ib-input-row flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-100 mb-2.5 cursor-pointer" onClick={() => dateRef.current?.showPicker()}>
                        <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                          <Calendar size={15} className="text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] font-black text-gray-400 uppercase tracking-[2px] mb-0.5">Move Date</p>
                          <input ref={dateRef} type="date" required value={date} onChange={e => setDate(e.target.value)}
                            className="w-full text-[14px] font-bold text-gray-700 bg-transparent outline-none cursor-pointer" />
                        </div>
                      </div>

                      {/* SUBMIT */}
                      <button type="submit" disabled={loader}
                        className="ib-cta-btn w-full group flex items-center justify-center gap-2 bg-[#FF6B2B] hover:bg-[#e85d1f] disabled:opacity-70 disabled:cursor-not-allowed text-white font-black uppercase tracking-[2px] text-[13px] py-4 rounded-xl shadow-[0_8px_24px_rgba(255,107,43,0.35)] hover:shadow-[0_12px_32px_rgba(255,107,43,0.5)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
                        {loader ? <span>Sending…</span> : <><span>Get Free Quote</span><ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" /></>}
                      </button>

                      {/* Footer row */}
                      <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
                        <p className="text-gray-400 text-[10.5px] font-medium flex items-center gap-1.5">
                          <ShieldCheck size={12} className="text-[#00B49C]" /> No spam · 30 min callback
                        </p>
                        <a href="tel:+919815162726"
                          className="flex items-center gap-1.5 text-gray-500 hover:text-[#FF6B2B] text-[11px] font-bold transition-colors duration-200">
                          <Phone size={11} />
                          +91-9815162726
                        </a>
                      </div>
                    </form>
                  ) : (
                    /* Success state */
                    <div className="text-center py-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#00B49C]/10 border border-[#00B49C]/20 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={28} className="text-[#00B49C]" />
                      </div>
                      <h3 className="text-[19px] font-black text-[#1a1a2e] uppercase tracking-tight mb-2">Quote Requested!</h3>
                      <p className="text-gray-500 text-[13px] mb-1">
                        Thanks, <span className="font-bold text-[#1a1a2e]">{name || "there"}</span> — we've got your details.
                      </p>
                      <p className="text-gray-500 text-[13px] mb-1">
                        Route: <span className="font-bold text-[#1a1a2e]">{from} → {to}</span>
                      </p>
                      <p className="text-gray-500 text-[13px] mb-4">
                        Type: <span className="font-bold text-[#1a1a2e] capitalize">{moveType}</span> ·
                        Date: <span className="font-bold text-[#1a1a2e]"> {date}</span>
                      </p>
                      <p className="text-[13px] text-[#00B49C] font-bold mb-3">We'll call you on {phone || "your number"} within 30 minutes</p>
                      <button onClick={() => setSubmitted(false)}
                        className="text-[11px] text-gray-400 underline hover:text-[#FF6B2B] transition-colors">
                        Submit another enquiry
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}
        </div>
      </div>

    </section>
  );
}

/* ── Heading block (shared) ── */
function BannerHeading({ eyebrow, line1, line2, line3 }: { eyebrow?: string; line1: string; line2: string; line3: string }) {
  return (
    <>
      {/* Eyebrow */}
      {eyebrow && (
        <div className="ib-fadeu flex items-center gap-3 mb-5">
          <span className="flex items-center gap-1.5 bg-[#00B49C]/10 border border-[#00B49C]/20 text-[#00B49C] px-3 py-1.5 rounded-md text-[9.5px] font-black uppercase tracking-[2.5px]">
            <MapPin size={9} />
            {eyebrow}
          </span>
          <span className="flex items-center gap-1.5 text-[10.5px] text-white/30 font-bold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B2B] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF6B2B]" />
            </span>
            Active Service
          </span>
        </div>
      )}

      {/* Heading — stacked, large */}
      <h1 className="ib-fadeu ib-fadeu-1 font-black uppercase tracking-tight mb-6 leading-[0.88]">
        <span className="block text-[30px] sm:text-[44px] lg:text-[64px] text-white">
          {line1}
        </span>
        <span className="inline-block text-[30px] sm:text-[44px] lg:text-[64px] text-[#FF6B2B]">
          {line2} &nbsp;
        </span>
        <span className="inline-block text-[30px] sm:text-[44px] lg:text-[64px] text-white/50">
          {line3}
        </span>
      </h1>
    </>
  );
}

/* ── CTA row (shared) ── */
function BannerCtas({ primaryCta }: { primaryCta?: { label: string; href: string } }) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {primaryCta && (
        <Link
          href={primaryCta.href}
          className="group flex items-center gap-2 bg-[#FF6B2B] hover:bg-[#e85d1f] text-white font-black uppercase text-[11.5px] tracking-[2px] px-7 py-4 rounded-xl shadow-[0_8px_28px_rgba(255,107,43,0.38)] hover:shadow-[0_12px_36px_rgba(255,107,43,0.52)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
        >
          {primaryCta.label}
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      )}
      <a
        href="tel:+919815162726"
        className="group flex items-center gap-2.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 text-white font-black uppercase text-[11.5px] tracking-[2px] px-7 py-4 rounded-xl transition-all duration-200"
      >
        <Phone size={14} className="text-[#00B49C]" />
        Call Now
      </a>
    </div>
  );
}