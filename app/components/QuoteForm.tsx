"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Image from "next/image";
import {
  User, Phone, Mail, MapPin, MessageSquare,
  ArrowRight, Truck,
  ShieldCheck, BadgeCheck, Clock,
} from "lucide-react";

const MOVE_TYPES = ["Home", "Office", "Vehicle", "Storage"];

export default function QuoteForm() {
  const [moveType, setMoveType] = useState("Home");
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    from: "", to: "", message: "",
  });
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  const set = (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(p => ({ ...p, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
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
          name:         form.name,
          phone:        form.phone,
          email:        form.email,
          serviceType:  moveType,
          from:         form.from,
          to:           form.to,
          message:      form.message,
          mail_to:      "www.vgujjar1234@gmail.com",
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

  const inputCls =
    "w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 bg-[#F7F4EE] text-[13.5px] text-gray-700 placeholder:text-gray-300 focus:bg-white focus:border-[#FF6B2B] focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/10 transition-all";

  return (
    <section id="quote" className="bg-white py-10 sm:py-20 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
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
                        className={`px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider border transition-all duration-150 ${moveType === t
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
                  disabled={loader}
                  className="w-full group flex items-center justify-center gap-2 bg-[#FF6B2B] hover:bg-[#e85d1f] disabled:opacity-70 disabled:cursor-not-allowed text-white font-black uppercase tracking-[2px] text-[12.5px] py-4 rounded-xl shadow-[0_8px_28px_rgba(255,107,43,0.3)] hover:shadow-[0_12px_36px_rgba(255,107,43,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 mt-auto"
                >
                  {loader ? "Sending…" : <><span>Send My Enquiry</span><ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" /></>}
                </button>

                <p className="text-center text-[10.5px] text-gray-400 font-medium -mt-2">
                  No spam · We respond within 30 minutes
                </p>
              </form>
          </div>

          {/* ── RIGHT: Info panel ── */}
          <div className="flex flex-col gap-4">

            {/* Photo */}
            <div className="relative rounded-3xl overflow-hidden h-52 lg:h-auto lg:flex-1 min-h-[200px]">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=90"
                alt="Keys to your new home"
                fill
                className="object-cover"
              />
            </div>

            {/* Trust checklist */}
            <div className="bg-[#1a1a2e] rounded-3xl p-6 space-y-3">
              <p className="text-[9px] font-black text-gray-500 uppercase tracking-[2.5px] mb-4">
                Why Enquire With Us
              </p>
              {[
                { icon: ShieldCheck, label: "100% Free — No Obligation Quote", accent: "#00B49C" },
                { icon: BadgeCheck, label: "ISO 9001:2015 Certified Packers & Movers", accent: "#FF6B2B" },
                { icon: Clock, label: "30-Min Response for All Shifting Enquiries", accent: "#00B49C" },
                { icon: Truck, label: "Own Fleet — Home, Office & Vehicle Shifting", accent: "#FF6B2B" },
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
              href="tel:+919815162726"
              className="group flex items-center gap-4 bg-[#FF6B2B] hover:bg-[#e85d1f] rounded-2xl px-5 py-4 shadow-[0_8px_24px_rgba(255,107,43,0.28)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-white/20 group-hover:bg-white/30 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200">
                <Phone size={17} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/70 text-[9px] font-black uppercase tracking-[2px]">Prefer to call?</p>
                <p className="text-white font-black text-[17px] leading-tight tracking-tight">+91-9815162726</p>
              </div>
              <ArrowRight size={16} className="text-white/50 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}