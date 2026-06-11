"use client";

import { useState, FormEvent } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Topbar from "@/app/components/Topbar";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import InnerBanner from "@/app/components/InnerBanner";
import {
  MapPin, Phone, Mail, Clock, ArrowRight,
  CheckCircle, Send, MessageSquare, User,
  Building2, Truck, ShieldCheck,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

/* ─── Office locations ───────────────────────────────── */
const offices = [
  {
    id:      "01",
    label:   "Branch 01",
    area:    "Pipliwala Town",
    address: "Plot No. 2212/6, Pipliwala Town, Road Near Foji Dhaba",
    city:    "Chandigarh",
    pin:     "160101",
    accent:  "#FF6B2B",
    maps:    "https://maps.google.com/?q=Pipliwala+Town+Chandigarh",
  },
  {
    id:      "02",
    label:   "Branch 02",
    area:    "Manimajra",
    address: "Shop No. 238, Old Ropar Road, Near Police Station, Manimajra",
    city:    "Chandigarh",
    pin:     "160101",
    accent:  "#00B49C",
    maps:    "https://maps.google.com/?q=Manimajra+Chandigarh",
  },
];

const phones = [
  { number: "+91-9815162726", href: "tel:+919815162726" },
  { number: "+91-9833559269", href: "tel:+919833559269" },
];

const email = "saibabamovers.chd@gmail.com";

const whatsapp =
  "https://wa.me/919815162726?text=Hi%20Sai%20Baba%20Packers%2C%20I%20need%20a%20free%20shifting%20quote.";

/* ─── Page ───────────────────────────────────────────── */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", from: "", to: "", message: "",
  });
  const [moveType, setMoveType] = useState("Home");
  const [sent, setSent] = useState(false);

  const set = (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(p => ({ ...p, [k]: e.target.value }));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const inputCls =
    "w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 bg-[#F7F4EE] text-[13.5px] text-gray-700 placeholder:text-gray-300 focus:bg-white focus:border-[#FF6B2B] focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/10 transition-all";

  return (
    <>

      <InnerBanner
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90"
        eyebrow="Get in Touch"
        headingLines={["Contact", "Us &", "Enquire"]}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        primaryCta={{ label: "Send Enquiry", href: "#enquiry" }}
        description="Reach out to our team for a free, no-obligation shifting quote. We respond within 30 minutes — by call, WhatsApp, or email."
      />

      {/* ════════════════════════════════════════════
          QUICK CONTACT STRIP
      ════════════════════════════════════════════ */}
      <section className="bg-[#1a1a2e] border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-wrap items-center gap-4 justify-between">

            {/* Phones */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[9px] font-black text-gray-600 uppercase tracking-[2px]">
                Call Us:
              </span>
              {phones.map(p => (
                <a
                  key={p.href}
                  href={p.href}
                  className="flex items-center gap-2 bg-white/[0.06] hover:bg-[#FF6B2B] border border-white/8 hover:border-[#FF6B2B] text-white font-bold text-[12px] px-4 py-2 rounded-lg transition-all duration-200 group"
                >
                  <Phone size={12} className="text-[#FF6B2B] group-hover:text-white transition-colors" />
                  {p.number}
                </a>
              ))}
            </div>

            {/* Email + WhatsApp */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.12] border border-white/8 text-gray-400 hover:text-white font-medium text-[12px] px-4 py-2 rounded-lg transition-all duration-200"
              >
                <Mail size={12} className="text-[#FF6B2B]" />
                {email}
              </a>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366] border border-[#25D366]/20 hover:border-[#25D366] text-[#25D366] hover:text-white font-black text-[11px] uppercase tracking-wider px-4 py-2 rounded-lg transition-all duration-200"
              >
                <FaWhatsapp size={13} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          MAIN CONTENT — form + info
      ════════════════════════════════════════════ */}
      <section id="enquiry" className="bg-[#F7F4EE] py-10 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_420px] gap-6 items-start">

            {/* ── LEFT: Enquiry form ── */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.05)] overflow-hidden">
              {/* Header */}
              <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-1.5">
                  Free Consultation
                </span>
                <h2 className="text-[26px] lg:text-[32px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight">
                  Send Your <span className="text-[#FF6B2B]">Enquiry</span>
                </h2>
              </div>

              {!sent ? (
                <form onSubmit={handleSubmit} className="px-8 py-7 space-y-5">

                  {/* Move type chips */}
                  <div>
                    <p className="text-[9.5px] font-black text-gray-400 uppercase tracking-[2px] mb-2.5">
                      Move Type
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {["Home", "Office", "Vehicle", "Storage"].map(t => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setMoveType(t)}
                          className={`px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider border transition-all duration-150 ${
                            moveType === t
                              ? "bg-[#FF6B2B] border-[#FF6B2B] text-white shadow-[0_4px_12px_rgba(255,107,43,0.25)]"
                              : "bg-white border-gray-200 text-gray-500 hover:border-[#FF6B2B]/30 hover:text-[#FF6B2B]"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <User size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                      <input value={form.name} onChange={set("name")}
                        placeholder="Full Name *" required className={inputCls} />
                    </div>
                    <div className="relative">
                      <Phone size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                      <input type="tel" value={form.phone} onChange={set("phone")}
                        placeholder="Phone Number *" required className={inputCls} />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                    <input type="email" value={form.email} onChange={set("email")}
                      placeholder="Email Address (optional)" className={inputCls} />
                  </div>

                  {/* From + To */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <MapPin size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#00B49C] pointer-events-none" />
                      <input value={form.from} onChange={set("from")}
                        placeholder="Moving From *" required className={inputCls} />
                    </div>
                    <div className="relative">
                      <MapPin size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#FF6B2B] pointer-events-none" />
                      <input value={form.to} onChange={set("to")}
                        placeholder="Moving To *" required className={inputCls} />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <MessageSquare size={13} className="absolute left-3.5 top-4 text-gray-300 pointer-events-none" />
                    <textarea value={form.message} onChange={set("message")}
                      placeholder="Additional requirements or special instructions (optional)"
                      rows={3} className={`${inputCls} resize-none`} />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 bg-[#FF6B2B] hover:bg-[#e85d1f] text-white font-black uppercase tracking-[2px] text-[12.5px] py-4 rounded-xl shadow-[0_8px_28px_rgba(255,107,43,0.3)] hover:shadow-[0_12px_36px_rgba(255,107,43,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                  >
                    <Send size={14} />
                    Send Enquiry
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <p className="text-center text-[10.5px] text-gray-400 font-medium -mt-1">
                    No spam · We respond within 30 minutes
                  </p>
                </form>
              ) : (
                /* Success state */
                <div className="px-8 py-16 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#00B49C]/10 border-2 border-[#00B49C]/20 flex items-center justify-center">
                    <CheckCircle size={32} className="text-[#00B49C]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-black text-[#1a1a2e] uppercase tracking-tight">
                      Enquiry Sent!
                    </h3>
                    <p className="text-gray-500 text-[13.5px] mt-2 leading-relaxed max-w-[300px]">
                      Our team will call{" "}
                      <span className="font-black text-[#FF6B2B]">{form.phone}</span>{" "}
                      within 30 minutes with your free quote.
                    </p>
                  </div>
                  <div className="w-full text-[12px] bg-[#F7F4EE] rounded-xl px-5 py-4 space-y-1.5 border border-gray-100 text-left">
                    <div className="flex justify-between">
                      <span className="font-black text-gray-400 text-[9.5px] uppercase tracking-wider">Route</span>
                      <span className="font-bold text-[#1a1a2e]">{form.from} → {form.to}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-black text-gray-400 text-[9.5px] uppercase tracking-wider">Type</span>
                      <span className="font-bold text-[#1a1a2e]">{moveType}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => { setSent(false); setForm({ name:"", phone:"", email:"", from:"", to:"", message:"" }); }}
                    className="text-[11px] text-gray-400 underline hover:text-[#FF6B2B] transition-colors"
                  >
                    Submit another enquiry
                  </button>
                </div>
              )}
            </div>

            {/* ── RIGHT: Info panel ── */}
            <div className="flex flex-col gap-4">

              {/* Company intro card */}
              <div className="bg-[#1a1a2e] rounded-3xl p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF6B2B] to-[#00B49C]" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6B2B]/8 rounded-full blur-[60px] pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-[#FF6B2B] rounded-xl flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(255,107,43,0.35)]">
                      <Truck size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white text-[14px] font-black leading-tight uppercase">
                        Sai Baba <span className="text-[#FF6B2B]">Packers</span>
                      </p>
                      <p className="text-[#00B49C] text-[8.5px] font-bold uppercase tracking-[2px] mt-0.5">
                        Est. 2010 · Chandigarh
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-500 text-[13px] leading-relaxed mb-6">
                    India's trusted relocation partner since 2010 — delivering damage-free,
                    on-time moves for 2,500+ families and businesses across 50+ cities.
                  </p>

                  {/* Trust list */}
                  <div className="space-y-2.5">
                    {[
                      { icon: ShieldCheck, label: "ISO 9001:2015 Certified",         accent: "#00B49C" },
                      { icon: ShieldCheck, label: "100% Free Consultation",           accent: "#FF6B2B" },
                      { icon: Clock,       label: "30-Minute Response Guarantee",     accent: "#00B49C" },
                      { icon: Truck,       label: "Own Fleet — No Third-Party Handoffs", accent: "#FF6B2B" },
                    ].map(t => (
                      <div key={t.label} className="flex items-center gap-3">
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: `${t.accent}18` }}
                        >
                          <t.icon size={12} style={{ color: t.accent }} strokeWidth={2} />
                        </div>
                        <span className="text-[12px] text-gray-400 font-medium">{t.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone cards */}
              <div className="grid grid-cols-2 gap-3">
                {phones.map((p, i) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="group bg-white border border-gray-100 rounded-2xl p-4 hover:border-[#FF6B2B]/30 hover:shadow-[0_8px_24px_rgba(255,107,43,0.08)] transition-all duration-200 flex flex-col gap-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FF6B2B]/10 group-hover:bg-[#FF6B2B] flex items-center justify-center transition-colors duration-200">
                      <Phone size={14} className="text-[#FF6B2B] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <p className="text-[8.5px] font-black text-gray-400 uppercase tracking-wider">
                      Phone {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="text-[13px] font-black text-[#1a1a2e] leading-tight">{p.number}</p>
                  </a>
                ))}
              </div>

              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="group bg-white border border-gray-100 rounded-2xl p-4 hover:border-[#00B49C]/30 hover:shadow-[0_8px_24px_rgba(0,180,156,0.08)] transition-all duration-200 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00B49C]/10 group-hover:bg-[#00B49C] flex items-center justify-center shrink-0 transition-colors duration-200">
                  <Mail size={16} className="text-[#00B49C] group-hover:text-white transition-colors duration-200" />
                </div>
                <div className="min-w-0">
                  <p className="text-[8.5px] font-black text-gray-400 uppercase tracking-wider mb-0.5">Email Us</p>
                  <p className="text-[12.5px] font-black text-[#1a1a2e] truncate">{email}</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-[#25D366]/8 hover:bg-[#25D366] border border-[#25D366]/20 hover:border-[#25D366] rounded-2xl p-4 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors duration-200">
                  <FaWhatsapp size={18} className="text-[#25D366] group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-[8.5px] font-black text-gray-400 group-hover:text-white/70 uppercase tracking-wider mb-0.5 transition-colors duration-200">
                    Chat on WhatsApp
                  </p>
                  <p className="text-[13px] font-black text-[#1a1a2e] group-hover:text-white transition-colors duration-200">
                    +91-9815162726
                  </p>
                </div>
                <ArrowRight size={14} className="text-[#25D366] group-hover:text-white ml-auto transition-colors duration-200" />
              </a>

              {/* Hours */}
              <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B2B]/10 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-[#FF6B2B]" />
                </div>
                <div>
                  <p className="text-[8.5px] font-black text-gray-400 uppercase tracking-wider mb-0.5">
                    Working Hours
                  </p>
                  <p className="text-[13px] font-black text-[#1a1a2e]">
                    Mon – Sun · 7:00 AM – 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          OFFICE LOCATIONS
      ════════════════════════════════════════════ */}
      <section className="bg-white py-10 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 sm:mb-12">
            <div>
              <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-2">
                Find Us
              </span>
              <h2 className="text-[32px] lg:text-[44px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight">
                Our <span className="text-[#FF6B2B]">Office Locations</span>
              </h2>
            </div>
            <p className="text-gray-400 text-[13px] max-w-[280px] leading-relaxed">
              Two convenient locations in Chandigarh serving the entire tricity region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 mb-8">
            {offices.map((o) => (
              <div
                key={o.id}
                className="group bg-[#F7F4EE] rounded-3xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Accent top bar */}
                <div className="h-[3px] w-full" style={{ background: o.accent }} />

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300"
                        style={{ background: `${o.accent}15` }}
                      >
                        <Building2 size={22} strokeWidth={1.8} style={{ color: o.accent }} />
                      </div>
                      <div>
                        <span
                          className="block text-[9px] font-black uppercase tracking-[2.5px] mb-0.5"
                          style={{ color: o.accent }}
                        >
                          {o.label}
                        </span>
                        <h3 className="text-[18px] font-black text-[#1a1a2e] uppercase leading-tight tracking-tight">
                          {o.area}
                        </h3>
                      </div>
                    </div>
                    <span className="shrink-0 text-[9px] font-black text-gray-400 bg-white border border-gray-200 px-2.5 py-1.5 rounded-lg uppercase tracking-wider">
                      PIN {o.pin}
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3 mb-6 p-4 bg-white rounded-2xl border border-gray-100">
                    <MapPin size={15} className="shrink-0 mt-0.5" style={{ color: o.accent }} />
                    <p className="text-[13px] text-gray-600 leading-relaxed">
                      {o.address}, {o.city} – {o.pin}
                    </p>
                  </div>

                  {/* Action row */}
                  <div className="flex items-center gap-3 flex-wrap">
                    {phones.map((p, i) => (
                      <a
                        key={p.href}
                        href={p.href}
                        className="group/btn flex items-center gap-2 font-black uppercase text-[10.5px] tracking-[1.5px] px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-white"
                        style={{
                          background: i === 0 ? o.accent : "#1a1a2e",
                          boxShadow: i === 0 ? `0 4px 14px ${o.accent}35` : "none",
                        }}
                      >
                        <Phone size={12} />
                        {p.number}
                      </a>
                    ))}
                    <a
                      href={o.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider transition-colors duration-200"
                      style={{ color: o.accent }}
                    >
                      <MapPin size={11} />
                      View on Maps
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Embedded map placeholder */}
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.05)] h-[320px] relative bg-[#F7F4EE] flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109579.53521624!2d76.62731!3d30.73331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Sai Baba Packers & Movers Office Locations"
            />
          </div>
        </div>
      </section>
    </>
  );
}