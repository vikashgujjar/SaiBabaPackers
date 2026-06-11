"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PhoneCall, MessageSquare, ArrowRight, Clock, ShieldCheck } from "lucide-react";

export default function CtaBanner() {
  /* Fake "slots remaining" counter — resets each page load between 3-7 */
  const [slots]   = useState(() => Math.floor(Math.random() * 5) + 3);
  const [pulse,   setPulse]   = useState(false);

  /* Pulse the slot count every 8 seconds to create ambient urgency */
  useEffect(() => {
    const id = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  /* Live clock — today's date */
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long", day: "numeric", month: "long",
  });

  return (
    <div className="relative overflow-hidden bg-[#1a1a2e]">

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Orange glow — left */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#FF6B2B]/15 rounded-full blur-[100px] pointer-events-none" />
      {/* Teal glow — right */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#00B49C]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top hairline */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B2B]/40 to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Main copy block ── */}
          <div>
            {/* Date + status row */}
            <div className="flex items-center gap-4 mb-7 flex-wrap">
              <div className="flex items-center gap-2 text-[#00B49C] text-[9.5px] font-black uppercase tracking-[2.5px]">
                <Clock size={11} />
                {today}
              </div>
              <div className="w-px h-3 bg-white/10" />
              <div className="flex items-center gap-2 text-[9.5px] font-black uppercase tracking-[2.5px]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B2B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF6B2B]" />
                </span>
                <span className="text-white/50">Consultants Online Now</span>
              </div>
            </div>

            {/* Headline — large, typographic */}
            <h2 className="font-black uppercase leading-[0.88] tracking-tight mb-5">
              <span className="block text-[40px] sm:text-[52px] lg:text-[64px] text-white">
                Ready to Move?
              </span>
              <span className="block text-[40px] sm:text-[52px] lg:text-[64px] text-[#FF6B2B]">
                Let's Talk.
              </span>
            </h2>

            <p className="text-gray-500 text-[14px] leading-relaxed max-w-[440px] mb-8">
              Our packers and movers experts give you a transparent, itemised quote for home shifting, office relocation, or vehicle transport — no hidden charges. Most calls take under 10 minutes.
            </p>

            {/* Trust pills */}
            <div className="flex items-center gap-5 flex-wrap">
              {[
                { icon: ShieldCheck, label: "Free Relocation Consultation" },
                { icon: ShieldCheck, label: "No Commitment Required" },
                { icon: ShieldCheck, label: "Reply in 30 Minutes" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-1.5 text-[11px] text-gray-600 font-bold">
                  <t.icon size={12} className="text-[#00B49C]" strokeWidth={2} />
                  {t.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Action dock ── */}
          <div className="flex flex-col gap-4 lg:min-w-[300px]">

            {/* Slots remaining card */}
            <div className="bg-white/[0.04] border border-white/8 rounded-2xl px-5 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-[2px] mb-0.5">
                  Today's Free Slots
                </p>
                <p className="text-[11px] text-gray-500 font-medium">
                  Book before they fill up
                </p>
              </div>
              <div
                className={`text-[42px] font-black leading-none text-[#FF6B2B] transition-transform duration-300 tabular-nums ${
                  pulse ? "scale-125" : "scale-100"
                }`}
              >
                {slots}
              </div>
            </div>

            {/* Primary CTA — phone number as the hero */}
            <a
              href="tel:+919815162726"
              className="group flex items-center gap-4 bg-[#FF6B2B] hover:bg-[#e85d1f] rounded-2xl px-6 py-5 shadow-[0_12px_40px_rgba(255,107,43,0.35)] hover:shadow-[0_16px_48px_rgba(255,107,43,0.5)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors duration-200">
                <PhoneCall size={20} className="text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/70 text-[9px] font-black uppercase tracking-[2px] mb-0.5">
                  Call us directly
                </p>
                <p className="text-white font-black text-[20px] leading-none tracking-tight">
                  +91-9815162726
                </p>
              </div>
              <ArrowRight size={18} className="text-white/60 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>

            {/* Secondary CTAs side by side */}
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="#quote"
                className="group flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/8 hover:border-white/15 text-white font-black uppercase text-[10.5px] tracking-[1.5px] px-4 py-3.5 rounded-xl transition-all duration-200"
              >
                Free Quote
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="https://wa.me/919815162726?text=Hi%20Sai%20Baba%20Packers%2C%20I%20need%20a%20free%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366] border border-[#25D366]/20 hover:border-[#25D366] text-[#25D366] hover:text-white font-black uppercase text-[10.5px] tracking-[1.5px] px-4 py-3.5 rounded-xl transition-all duration-200"
              >
                <MessageSquare size={13} />
                WhatsApp
              </a>
            </div>

            {/* Reassurance footnote */}
            <p className="text-center text-[10px] text-gray-600 font-medium">
              Available Mon–Sun, 7 AM – 9 PM · Average wait: &lt;2 min
            </p>
          </div>

        </div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </div>
  );
}