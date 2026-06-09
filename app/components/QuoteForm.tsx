"use client";

import { useState, FormEvent } from "react";
import { Send, MapPin, ArrowRight, ArrowLeft, BadgeCheck, CheckCircle } from "lucide-react";

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [moveType, setMoveType] = useState("home");
  const [form, setForm] = useState({ name: "", shiftTo: "", email: "", message: "", mobile: "", shiftFrom: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleNext() {
    if (!form.shiftFrom.trim() || !form.shiftTo.trim()) { alert("Please fill both locations."); return; }
    setStep(2);
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setStep(1); }, 4000);
    setForm({ name: "", shiftTo: "", email: "", message: "", mobile: "", shiftFrom: "" });
  }

  const inputClass = "w-full px-4 py-3.5 border border-gray-200 rounded-xl text-[13.5px] bg-[#F7F4EE] placeholder-gray-400 focus:border-[#FF6B2B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/10 transition-all";

  return (
    <section id="quote" className="bg-white py-20">
      <div className="max-w-[1100px] mx-auto px-6">

        <div className="text-center mb-10">
          <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-2">Get a Quote</span>
          <h2 className="text-[36px] lg:text-[48px] font-black text-[#1a1a2e] uppercase leading-[0.95] tracking-tight">
            Calculate Your <span className="text-[#FF6B2B]">Move Cost</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] rounded-3xl overflow-hidden border border-gray-100 shadow-[0_24px_60px_rgba(0,0,0,0.06)]">

          {/* Left: Trust panel — keeps dark for contrast */}
          <div className="bg-[#1a1a2e] relative overflow-hidden p-10 lg:p-12 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6B2B]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00B49C]/8 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-block bg-white/8 border border-white/10 text-[9px] font-black tracking-[2px] uppercase text-[#00B49C] px-3 py-1.5 rounded-lg mb-6">Free Estimate</div>
              <h3 className="text-[30px] font-black text-white uppercase leading-tight tracking-tight">
                Request A<br />Free Shifting<br />Quote
              </h3>
              <p className="text-gray-500 text-[13.5px] mt-4 leading-relaxed">
                Get an instant, transparent quote in minutes. Zero obligations, zero hidden costs.
              </p>
            </div>

            <div className="relative z-10 mt-10 space-y-3">
              {["100% Safe Handling Guarantee", "Pan-India Delivery Network", "Licensed & Fully Insured Moves"].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#FF6B2B]/20 flex items-center justify-center shrink-0">
                    <BadgeCheck size={12} className="text-[#FF6B2B]" />
                  </div>
                  <span className="text-[11.5px] font-bold text-gray-400 uppercase tracking-wider">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8 lg:p-12">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-[#00B49C]/10 border border-[#00B49C]/20 flex items-center justify-center mb-5">
                  <CheckCircle size={34} className="text-[#00B49C]" />
                </div>
                <h3 className="text-2xl font-black text-[#1a1a2e] uppercase tracking-tight">Quote Requested!</h3>
                <p className="text-gray-500 text-[13.5px] max-w-[320px] mt-2.5 leading-relaxed">
                  Our logistics advisor will contact you within 15 minutes.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-8 pb-5 border-b border-gray-100">
                  <div>
                    <span className="text-[10px] font-black text-[#00B49C] uppercase tracking-[2px] block">Moving Calculator</span>
                    <h2 className="text-[22px] font-black text-[#1a1a2e] uppercase tracking-tight mt-0.5">Get Estimate</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2].map((n) => (
                      <div key={n} className={`w-8 h-2 rounded-full transition-all duration-300 ${step >= n ? "bg-[#FF6B2B]" : "bg-gray-100"}`} />
                    ))}
                    <span className="text-[11px] font-bold text-gray-400 ml-1">{step}/2</span>
                  </div>
                </div>

                {step === 1 && (
                  <div className="mb-6">
                    <label className="block text-[10.5px] font-black uppercase tracking-[1.5px] text-[#1a1a2e] mb-3">Select Move Type</label>
                    <div className="grid grid-cols-4 gap-2">
                      {[{ id: "home", label: "🏠 Home" }, { id: "office", label: "🏢 Office" }, { id: "vehicle", label: "🚗 Vehicle" }, { id: "storage", label: "📦 Storage" }].map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setMoveType(tab.id)}
                          className={`py-2 px-2 rounded-xl text-[11px] font-bold uppercase tracking-wide border transition-all duration-200 text-center ${
                            moveType === tab.id
                              ? "bg-[#1a1a2e] border-[#1a1a2e] text-white"
                              : "bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {step === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10.5px] font-black uppercase tracking-[1.5px] text-[#1a1a2e] mb-1.5">Origin</label>
                        <div className="relative">
                          <MapPin size={15} className="absolute left-3.5 top-4 text-[#00B49C]" />
                          <input name="shiftFrom" value={form.shiftFrom} onChange={handleChange} placeholder="Shifting From (City, State) *" required className={`${inputClass} pl-11`} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10.5px] font-black uppercase tracking-[1.5px] text-[#1a1a2e] mb-1.5">Destination</label>
                        <div className="relative">
                          <MapPin size={15} className="absolute left-3.5 top-4 text-[#FF6B2B]" />
                          <input name="shiftTo" value={form.shiftTo} onChange={handleChange} placeholder="Shifting To (City, State) *" required className={`${inputClass} pl-11`} />
                        </div>
                      </div>
                      <button type="button" onClick={handleNext} className="w-full mt-2 py-4 rounded-xl font-black uppercase text-[12.5px] tracking-[2px] text-white bg-[#1a1a2e] hover:bg-[#FF6B2B] transition-colors flex items-center justify-center gap-2 group">
                        Continue
                        <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10.5px] font-black uppercase tracking-[1.5px] text-[#1a1a2e] mb-1.5">Full Name</label>
                          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name *" required className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-[10.5px] font-black uppercase tracking-[1.5px] text-[#1a1a2e] mb-1.5">Mobile</label>
                          <input name="mobile" type="tel" value={form.mobile} onChange={handleChange} placeholder="Phone Number *" required className={inputClass} />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10.5px] font-black uppercase tracking-[1.5px] text-[#1a1a2e] mb-1.5">Email</label>
                          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *" required className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-[10.5px] font-black uppercase tracking-[1.5px] text-[#1a1a2e] mb-1.5">Notes</label>
                          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Special requirements (optional)" rows={1} className={`${inputClass} resize-none`} />
                        </div>
                      </div>
                      <div className="flex gap-3 pt-1">
                        <button type="button" onClick={() => setStep(1)} className="flex items-center gap-2 border border-gray-200 hover:bg-gray-50 font-bold uppercase text-[11.5px] tracking-wider px-5 py-4 rounded-xl transition-all text-gray-500">
                          <ArrowLeft size={15} /> Back
                        </button>
                        <button type="submit" className="flex-1 py-4 rounded-xl font-black uppercase text-[12.5px] tracking-[2px] text-white bg-[#FF6B2B] hover:bg-[#e85d1f] hover:shadow-[0_8px_24px_rgba(255,107,43,0.35)] active:scale-95 transition-all flex items-center justify-center gap-2">
                          <Send size={14} />
                          Calculate Price
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}