import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2, Phone, ArrowRight, Home,
  ShieldCheck, Clock, Star, Truck, MapPin,
  Package, ClipboardCheck, PhoneCall,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Thank You — Sai Baba Packers & Movers Chandigarh",
  description: "Your enquiry has been received. Our team will contact you within 30 minutes.",
  robots: "noindex",
};

const steps = [
  { icon: PhoneCall,      title: "We Call You",        desc: "Our team calls within 30 minutes on the number you provided.", accent: "#FF6B2B" },
  { icon: ClipboardCheck, title: "Free Survey",        desc: "We schedule a free in-person or video survey at your convenience.", accent: "#00B49C" },
  { icon: Package,        title: "Itemised Quote",     desc: "You receive a detailed, no-hidden-charges quote in writing.", accent: "#FF6B2B" },
  { icon: Truck,          title: "We Handle the Rest", desc: "Packing, loading, transport & delivery — all taken care of.", accent: "#00B49C" },
];

const badges = [
  { icon: ShieldCheck, label: "ISO 9001:2015" },
  { icon: Star,        label: "4.9 / 5 Rating" },
  { icon: Clock,       label: "30 Min Response" },
  { icon: Truck,       label: "Own Fleet" },
];

/* Simple deterministic-looking reference code */
const refCode = "SBM-" + new Date().getFullYear() + "-" + Math.floor(100000 + Math.random() * 899999);

export default function ThankYouPage() {
  return (
    <main className="ty2-root relative min-h-screen flex items-center justify-center px-4 py-10 sm:py-16 overflow-hidden"
      style={{ background: "linear-gradient(160deg,#0d0d1a 0%,#1a1a2e 55%,#15152a 100%)" }}>

      <style>{`
        @keyframes ty2FadeUp  { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ty2Pop     { 0%{opacity:0;transform:scale(.5) rotate(-8deg)} 60%{transform:scale(1.1) rotate(2deg)} 100%{opacity:1;transform:scale(1) rotate(0)} }
        @keyframes ty2Pulse   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.7)} }
        @keyframes ty2Truck   { 0%{left:0%} 50%{left:calc(100% - 26px)} 100%{left:0%} }
        @keyframes ty2Dash    { to{ stroke-dashoffset:-20; } }
        @keyframes ty2Glow    { 0%,100%{opacity:.4} 50%{opacity:.9} }
        @keyframes ty2Float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes ty2Sweep   { 0%{left:-75%} 50%,100%{left:130%} }

        .ty2-fadeu   { animation: ty2FadeUp .6s cubic-bezier(.22,1,.36,1) both; opacity:0; }
        .ty2-fadeu-1 { animation-delay:.05s }
        .ty2-fadeu-2 { animation-delay:.15s }
        .ty2-fadeu-3 { animation-delay:.25s }
        .ty2-fadeu-4 { animation-delay:.35s }
        .ty2-fadeu-5 { animation-delay:.45s }

        .ty2-icon-pop { animation: ty2Pop .6s cubic-bezier(.22,1,.36,1) .1s both; }
        .ty2-live-dot { position:relative; }
        .ty2-live-dot::after {
          content:''; position:absolute; inset:0; border-radius:50%;
          background:inherit; animation: ty2Pulse 2s ease-in-out infinite;
        }

        /* ── Ticket card ── */
        .ty2-ticket {
          background:#fff;
          border-radius: 28px;
          box-shadow: 0 40px 100px rgba(0,0,0,.45), 0 0 0 1px rgba(255,255,255,.04);
          position: relative;
        }

        /* Perforation row with circular notches cut into the ticket edges */
        .ty2-perf {
          position: relative;
          height: 0;
          border-top: 2px dashed rgba(26,26,46,.14);
          margin: 0 -1px;
        }
        .ty2-perf::before,
        .ty2-perf::after {
          content:'';
          position:absolute; top:50%; transform: translateY(-50%);
          width: 34px; height: 34px; border-radius: 50%;
          background: linear-gradient(160deg,#0d0d1a 0%,#1a1a2e 55%,#15152a 100%);
        }
        .ty2-perf::before { left: -17px; }
        .ty2-perf::after  { right: -17px; }

        /* Route map */
        .ty2-route-track {
          position: relative;
          height: 2px;
          background: repeating-linear-gradient(90deg, rgba(26,26,46,.18) 0 8px, transparent 8px 16px);
          margin: 0 14px;
        }
        .ty2-route-truck {
          position:absolute; top:50%; transform: translate(-50%,-50%);
          animation: ty2Truck 6s ease-in-out infinite;
        }
        .ty2-route-dot {
          width: 14px; height: 14px; border-radius: 50%;
          display:flex; align-items:center; justify-content:center;
          flex-shrink: 0;
          box-shadow: 0 0 0 4px rgba(255,255,255,1), 0 0 0 5px rgba(26,26,46,.08);
        }

        /* Status pill glow */
        .ty2-status-glow { animation: ty2Glow 2.4s ease-in-out infinite; }

        /* Barcode */
        .ty2-barcode {
          height: 38px;
          background: repeating-linear-gradient(
            90deg,
            #1a1a2e 0px, #1a1a2e 2px,
            transparent 2px, transparent 4px,
            #1a1a2e 4px, #1a1a2e 5px,
            transparent 5px, transparent 9px,
            #1a1a2e 9px, #1a1a2e 12px,
            transparent 12px, transparent 14px
          );
          opacity: .85;
        }

        /* Step timeline */
        .ty2-step-line {
          position: absolute; left: 19px; top: 40px; bottom: -8px; width: 2px;
          background: linear-gradient(180deg, rgba(26,26,46,.14), rgba(26,26,46,.04));
        }
        .ty2-step:last-child .ty2-step-line { display:none; }
        .ty2-step { transition: transform .2s ease; }
        .ty2-step:hover { transform: translateX(3px); }

        /* CTA shimmer */
        .ty2-cta { position:relative; overflow:hidden; }
        .ty2-cta::after {
          content:''; position:absolute; top:0; left:-75%; width:50%; height:100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,.35), transparent);
          transform: skewX(-20deg);
          animation: ty2Sweep 3.4s ease-in-out infinite;
        }

        .ty2-float   { animation: ty2Float 6s ease-in-out infinite; }
        .ty2-float-d { animation: ty2Float 7s ease-in-out infinite 1.4s; }

        /* Trust badge */
        .ty2-badge { transition: transform .2s ease, border-color .2s ease; }
        .ty2-badge:hover { transform: translateY(-2px); border-color: rgba(0,180,156,.30); }

        @media (prefers-reduced-motion: reduce) {
          .ty2-fadeu,.ty2-icon-pop,.ty2-live-dot::after,.ty2-route-truck,
          .ty2-status-glow,.ty2-float,.ty2-float-d,.ty2-cta::after
          { animation:none !important; opacity:1 !important; }
        }

        @media (max-width: 640px) {
          .ty2-perf::before, .ty2-perf::after { width:24px; height:24px; }
          .ty2-perf::before { left:-13px; }
          .ty2-perf::after  { right:-13px; }
        }
      `}</style>

      {/* Ambient glow blobs */}
      <div className="ty2-float absolute -top-32 -left-32 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(0,180,156,.16),transparent 65%)" }} />
      <div className="ty2-float-d absolute -bottom-32 -right-32 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(255,107,43,.14),transparent 65%)" }} />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-20 px-4 py-3 flex items-center justify-between max-w-[1200px] mx-auto w-full">
        <Link href="/" className="text-white font-black text-[14px] uppercase tracking-tight">
          Sai Baba <span className="text-[#FF6B2B]">Packers</span>
        </Link>
        <a href="tel:+919815162726"
          className="flex items-center gap-2 text-white/50 hover:text-white text-[11px] font-bold transition-colors">
          <Phone size={12} />
          +91-9815162726
        </a>
      </div>

      {/* ══════════════ MOVE PASS TICKET ══════════════ */}
      <div className="ty2-fadeu ty2-fadeu-1 w-full max-w-[640px] relative z-10 mt-12 sm:mt-0">

        <div className="ty2-ticket overflow-hidden">

          {/* ── Header strip: status + ref ── */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-4"
            style={{ background: "linear-gradient(135deg,#1a1a2e,#252545)" }}>
            <div className="flex items-center gap-2">
              <span className="ty2-live-dot ty2-status-glow inline-flex h-2 w-2 rounded-full bg-[#00B49C]" />
              <span className="text-[10px] font-black text-[#00B49C] uppercase tracking-[3px]">Booking Confirmed</span>
            </div>
            <span className="text-[10px] font-bold text-white/35 uppercase tracking-[2px]">
              Ref&nbsp;<span className="text-white/70">#{refCode}</span>
            </span>
          </div>

          {/* ── Main body ── */}
          <div className="px-6 sm:px-8 py-8 sm:py-9 text-center">

            {/* Icon */}
            <div className="ty2-icon-pop w-16 h-16 rounded-2xl bg-[#00B49C]/10 border-2 border-[#00B49C]/20 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 size={32} className="text-[#00B49C]" strokeWidth={1.8} />
            </div>

            <h1 className="ty2-fadeu ty2-fadeu-2 text-[32px] sm:text-[42px] font-black text-[#1a1a2e] uppercase leading-[0.95] tracking-tight mb-3">
              Thank <span className="text-[#FF6B2B]">You!</span>
            </h1>

            <p className="ty2-fadeu ty2-fadeu-2 text-gray-500 text-[13.5px] leading-relaxed mb-8 max-w-[400px] mx-auto">
              Your move is booked into our schedule. We'll call you within{" "}
              <strong className="text-[#FF6B2B]">30 minutes</strong> with a free, itemised quote — no hidden charges.
            </p>

            {/* Route map: Pickup -> Destination */}
            <div className="ty2-fadeu ty2-fadeu-3 flex items-center justify-between max-w-[440px] mx-auto mb-2">
              <div className="flex flex-col items-center gap-1.5">
                <div className="ty2-route-dot" style={{ background: "#00B49C" }}>
                  <MapPin size={8} className="text-white" />
                </div>
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-[1.5px]">Pickup</span>
              </div>

              <div className="ty2-route-track flex-1 relative">
                <div className="ty2-route-truck w-7 h-7 rounded-full bg-[#FF6B2B] flex items-center justify-center shadow-[0_4px_12px_rgba(255,107,43,0.4)]">
                  <Truck size={13} className="text-white" />
                </div>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <div className="ty2-route-dot" style={{ background: "#FF6B2B" }}>
                  <Home size={8} className="text-white" />
                </div>
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-[1.5px]">Destination</span>
              </div>
            </div>

            <p className="ty2-fadeu ty2-fadeu-3 text-[10.5px] text-gray-400 font-semibold mb-8">
              We'll confirm exact locations &amp; dates on your call.
            </p>

            {/* CTA buttons */}
            <div className="ty2-fadeu ty2-fadeu-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+919815162726"
                className="ty2-cta flex items-center justify-center gap-2 bg-[#FF6B2B] hover:bg-[#e85d1f] text-white font-black uppercase text-[11px] tracking-[2px] px-6 py-3.5 rounded-xl shadow-[0_8px_24px_rgba(255,107,43,0.3)] hover:-translate-y-0.5 transition-all duration-200">
                <Phone size={13} />
                Call Us Now
              </a>
              <a href="https://wa.me/919815162726?text=Hi%20Sai%20Baba%20Packers%2C%20I%20just%20submitted%20an%20enquiry."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366] border border-[#25D366]/30 hover:border-[#25D366] text-[#25D366] hover:text-white font-black uppercase text-[11px] tracking-[2px] px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
                <FaWhatsapp size={14} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* ── Perforated divider ── */}
          <div className="ty2-perf" />

          {/* ── Stub: timeline of next steps ── */}
          <div className="px-6 sm:px-8 py-8">
            <p className="ty2-fadeu ty2-fadeu-4 text-[10px] font-black text-gray-400 uppercase tracking-[3px] mb-6 text-center">
              What Happens Next
            </p>

            <div className="space-y-5 max-w-[420px] mx-auto">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="ty2-fadeu ty2-step relative flex items-start gap-4"
                    style={{ animationDelay: `${0.45 + i * 0.08}s` }}>
                    <div className="ty2-step-line" />
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 relative z-10"
                      style={{ background: `${s.accent}14`, border: `2px solid ${s.accent}30` }}>
                      <Icon size={16} style={{ color: s.accent }} />
                    </div>
                    <div className="pt-1.5">
                      <p className="text-[12.5px] font-black text-[#1a1a2e] uppercase tracking-wide leading-none mb-1">{s.title}</p>
                      <p className="text-[11.5px] text-gray-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Perforated divider ── */}
          <div className="ty2-perf" />

          {/* ── Footer: barcode + trust badges ── */}
          <div className="px-6 sm:px-8 py-7">
            <div className="ty2-fadeu ty2-fadeu-5 ty2-barcode rounded-md mb-2" />
            <p className="ty2-fadeu ty2-fadeu-5 text-center text-[9px] font-bold text-gray-300 uppercase tracking-[3px] mb-6">
              {refCode} · Sai Baba Packers &amp; Movers
            </p>

            <div className="ty2-fadeu ty2-fadeu-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {badges.map(b => (
                <div key={b.label} className="ty2-badge flex flex-col items-center gap-1.5 rounded-xl border border-gray-100 py-3 px-2">
                  <b.icon size={14} className="text-[#00B49C]" />
                  <span className="text-[10px] font-black text-[#1a1a2e] text-center leading-tight">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Outside-ticket footer link */}
        <div className="ty2-fadeu ty2-fadeu-5 text-center mt-6">
          <Link href="/" className="group inline-flex items-center gap-2 text-white/40 hover:text-white text-[12px] font-bold uppercase tracking-[1.5px] transition-colors">
            <Home size={13} />
            Back to Home
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}