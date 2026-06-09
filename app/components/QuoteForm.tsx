"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import {
  User, Phone, Mail, MapPin, MessageSquare,
  ArrowRight, CheckCircle, Truck,
  ShieldCheck, BadgeCheck, Clock,
} from "lucide-react";

const MOVE_TYPES = ["Home", "Office", "Vehicle", "Storage"];

export default function QuoteForm() {
  const [moveType, setMoveType] = useState("Home");
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    from: "", to: "", message: "",
  });
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
    <section id="quote" className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_420px] gap-5 items-stretch">

          {/* ── LEFT: Form card ── */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_16px_60px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col">

            {/* Card header */}
            <div className="px-8 pt-8 pb-6 border-b border-gray-100">
              <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-2">
                Free Consultation
              </span>
              <h2 className="text-[28px] lg:text-[34px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight">
                Get Your Free <span className="text-[#FF6B2B]">Quote</span>
              </h2>
            </div>

            {!sent ? (
              <form onSubmit={handleSubmit} className="flex flex-col flex-1 px-8 py-7 gap-5">

                {/* Move type chips */}
                <div>
                  <p className="text-[9.5px] font-black text-gray-400 uppercase tracking-[2px] mb-2.5">
                    Move Type
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {MOVE_TYPES.map(t => (
                      <button
                        key={t} type="button"
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
                    <input
                      value={form.name} onChange={set("name")}
                      placeholder="Full Name *" required
                      className={inputCls}
                    />
                  </div>
                  <div className="relative">
                    <Phone size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                    <input
                      type="tel" value={form.phone} onChange={set("phone")}
                      placeholder="Phone Number *" required
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                  <input
                    type="email" value={form.email} onChange={set("email")}
                    placeholder="Email Address (optional)"
                    className={inputCls}
                  />
                </div>

                {/* From + To */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <MapPin size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#00B49C] pointer-events-none" />
                    <input
                      value={form.from} onChange={set("from")}
                      placeholder="Moving From *" required
                      className={inputCls}
                    />
                  </div>
                  <div className="relative">
                    <MapPin size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#FF6B2B] pointer-events-none" />
                    <input
                      value={form.to} onChange={set("to")}
                      placeholder="Moving To *" required
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare size={13} className="absolute left-3.5 top-4 text-gray-300 pointer-events-none" />
                  <textarea
                    value={form.message} onChange={set("message")}
                    placeholder="Additional requirements (optional)"
                    rows={3}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 bg-[#FF6B2B] hover:bg-[#e85d1f] text-white font-black uppercase tracking-[2px] text-[12.5px] py-4 rounded-xl shadow-[0_8px_28px_rgba(255,107,43,0.3)] hover:shadow-[0_12px_36px_rgba(255,107,43,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 mt-auto"
                >
                  Send My Enquiry
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </button>

                <p className="text-center text-[10.5px] text-gray-400 font-medium -mt-2">
                  No spam · We respond within 30 minutes
                </p>
              </form>
            ) : (
              /* ── Success ── */
              <div className="flex-1 flex flex-col items-center justify-center text-center px-8 py-16 gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#00B49C]/10 border-2 border-[#00B49C]/20 flex items-center justify-center">
                  <CheckCircle size={32} className="text-[#00B49C]" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-[22px] font-black text-[#1a1a2e] uppercase tracking-tight">Enquiry Sent!</h3>
                  <p className="text-gray-500 text-[13.5px] mt-2 leading-relaxed max-w-[300px]">
                    Our team will contact{" "}
                    <span className="font-black text-[#FF6B2B]">{form.phone}</span>{" "}
                    within 30 minutes.
                  </p>
                </div>
                <div className="text-[12px] bg-[#F7F4EE] rounded-xl px-5 py-4 text-left space-y-1.5 border border-gray-100 w-full">
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

            {/* Photo */}
            <div className="relative rounded-3xl overflow-hidden h-52 lg:h-auto lg:flex-1 min-h-[200px]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=85"
                alt="Sai Baba Packers team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/70 via-transparent to-transparent" />
              {/* Brand watermark */}
              <div className="absolute bottom-5 left-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 shrink-0">
                    <Image src="/logo.png" alt="Sai Baba Packers" width={32} height={32} className="object-contain w-full h-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Trust checklist */}
            <div className="bg-[#1a1a2e] rounded-3xl p-6 space-y-3">
              <p className="text-[9px] font-black text-gray-500 uppercase tracking-[2.5px] mb-4">
                Why Enquire With Us
              </p>
              {[
                { icon: ShieldCheck, label: "100% Free — No Obligation Quote",  accent: "#00B49C" },
                { icon: BadgeCheck,  label: "ISO 9001:2015 Certified Company",  accent: "#FF6B2B" },
                { icon: Clock,       label: "Response Guaranteed in 30 Minutes", accent: "#00B49C" },
                { icon: Truck,       label: "Own Fleet — No Third-Party Handoffs", accent: "#FF6B2B" },
              ].map(t => (
                <div key={t.label} className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${t.accent}18` }}
                  >
                    <t.icon size={13} style={{ color: t.accent }} strokeWidth={2} />
                  </div>
                  <span className="text-[12px] text-gray-400 font-medium leading-tight">{t.label}</span>
                </div>
              ))}
            </div>

            {/* Call strip */}
            <a
              href="tel:+918915162726"
              className="group flex items-center gap-4 bg-[#FF6B2B] hover:bg-[#e85d1f] rounded-2xl px-5 py-4 shadow-[0_8px_24px_rgba(255,107,43,0.28)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-white/20 group-hover:bg-white/30 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200">
                <Phone size={17} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/70 text-[9px] font-black uppercase tracking-[2px]">Prefer to call?</p>
                <p className="text-white font-black text-[17px] leading-tight tracking-tight">+91-8915162726</p>
              </div>
              <ArrowRight size={16} className="text-white/50 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}