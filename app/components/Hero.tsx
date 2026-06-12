"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Image from "next/image";
import {
  ArrowRight, Phone, MapPin, Calendar,
  ChevronLeft, ChevronRight, ShieldCheck,
  Star, CheckCircle, Truck, Sparkles,
  User, Mail, MessageSquare,
} from "lucide-react";

/* ── Slides ── */
const SLIDES = [
  {
    src:  "/banner/BannerOne.webp",
    alt:  "Professional movers at work",
    city: "Pan-India Delivery",
  },
  {
    src:  "/banner/BannerTwo.webp",
    alt:  "Professional packing service",
    city: "Premium Packing",
  },
  {
    src:  "/banner/BannerThree.webp",
    alt:  "Relocation fleet on the road",
    city: "Pan-India Fleet",
  },
];

const MOVE_TYPES = [
  { id: "home",    label: "Home",    icon: "🏠" },
  { id: "office",  label: "Office",  icon: "🏢" },
  { id: "vehicle", label: "Vehicle", icon: "🚗" },
  { id: "storage", label: "Storage", icon: "📦" },
];

const TICKER = [
  { from: "Chandigarh", to: "Delhi",     icon: "🚚" },
  { from: "Chandigarh", to: "Mumbai",    icon: "📦" },
  { from: "Chandigarh", to: "Bengaluru", icon: "🏠" },
  { from: "Chandigarh", to: "Dehradun",  icon: "🚗" },
  { from: "Chandigarh", to: "Pune",      icon: "🏢" },
];

const STATS = [
  { n: "2,500+", l: "Families Moved" },
  { n: "15+",    l: "Years of Trust"  },
  { n: "50+",    l: "Cities Covered"  },
  { n: "4.9",    l: "Customer Rating", star: true },
];

export default function Hero() {
  const router = useRouter();
  const [slide,     setSlide]     = useState(0);
  const [fading,    setFading]    = useState(false);
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
  const [tickIdx,   setTickIdx]   = useState(0);
  const [tickIn,    setTickIn]    = useState(true);

  /* Auto-advance slides */
  useEffect(() => {
    const id = setInterval(() => changeSlide((slide + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, [slide]);

  /* Ticker */
  useEffect(() => {
    const id = setInterval(() => {
      setTickIn(false);
      setTimeout(() => { setTickIdx(i => (i + 1) % TICKER.length); setTickIn(true); }, 350);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  function changeSlide(idx: number) {
    setFading(true);
    setTimeout(() => { setSlide(idx); setFading(false); }, 450);
  }

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
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">

      <style>{`
        @keyframes heroFadeUp  { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes heroFloat   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes heroTruck   { 0%{left:0;opacity:0} 12%{opacity:1} 88%{opacity:1} 100%{left:calc(100% - 22px);opacity:0} }
        @keyframes heroDash    { to{ stroke-dashoffset:-24; } }
        @keyframes heroPulse   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.7)} }
        @keyframes heroShimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes heroGlow    { 0%,100%{opacity:.5} 50%{opacity:1} }

        .hero-fadeu   { animation: heroFadeUp .7s cubic-bezier(.22,1,.36,1) both; }
        .hero-fadeu-1 { animation-delay:.08s }
        .hero-fadeu-2 { animation-delay:.18s }
        .hero-fadeu-3 { animation-delay:.28s }
        .hero-fadeu-4 { animation-delay:.38s }

        .hero-card-float { animation: heroFloat 6s ease-in-out infinite; }

        /* Route visualization */
        .hero-route-line {
          stroke-dasharray: 6 6;
          animation: heroDash 1.2s linear infinite;
        }
        .hero-route-truck {
          position: absolute; top: 50%; transform: translateY(-50%);
          animation: heroTruck 3.5s ease-in-out infinite;
        }

        /* Glass form card */
        .hero-glass-card {
          background: rgba(255,255,255,.97);
          border-radius: 24px;
          box-shadow: 0 30px 80px rgba(0,0,0,.45), 0 0 0 1px rgba(255,255,255,.08);
        }
        .hero-glass-card::before {
          content:'';
        }

        /* Gradient border glow */
        .hero-card-glow {
          position: absolute; inset: -1px;
          border-radius: 25px;
          background: linear-gradient(135deg,#FF6B2B,#00B49C,#FF6B2B);
          background-size: 200% 200%;
          opacity: .55;
          z-index: -1;
          filter: blur(2px);
          animation: heroShimmer 6s linear infinite;
        }

        /* Input focus glow */
        .hero-input-row { transition: background .2s; }
        .hero-input-row:focus-within { background: rgba(255,107,43,.05); }

        /* Move type pill */
        .hero-pill { transition: all .2s ease; }
        .hero-pill.active {
          background: #FF6B2B; border-color:#FF6B2B; color:#fff;
          box-shadow: 0 4px 14px rgba(255,107,43,.4);
        }

        /* Ticker fade */
        .hero-ticker-item { transition: opacity .35s, transform .35s; }

        /* Stat divider */
        .hero-stat-sep { width:1px; background: rgba(255,255,255,.12); }

        /* Eyebrow live dot */
        .hero-live-dot::after {
          content:''; position:absolute; inset:0; border-radius:50%;
          background: inherit; animation: heroPulse 2s ease-in-out infinite;
        }

        /* Slide nav arrows */
        .hero-nav-btn { transition: all .2s; }
        .hero-nav-btn:hover { transform: scale(1.08); }

        /* CTA shimmer button */
        .hero-cta-btn {
          position: relative; overflow: hidden;
        }
        .hero-cta-btn::after {
          content:''; position:absolute; top:0; left:-75%; width:50%; height:100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,.35), transparent);
          transform: skewX(-20deg);
          animation: heroSweep 3.2s ease-in-out infinite;
        }
        @keyframes heroSweep { 0%{left:-75%} 50%,100%{left:130%} }

        /* Top neon line */
        .hero-topline { animation: heroGlow 3s ease-in-out infinite; }

        @media (max-width: 1023px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-form-col { order: -1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-fadeu,.hero-card-float,.hero-route-line,.hero-route-truck,
          .hero-card-glow,.hero-live-dot::after,.hero-cta-btn::after,.hero-topline
          { animation: none !important; }
        }
      `}</style>

      {/* ══════════════════════════════
          FULL-BLEED BACKGROUND CAROUSEL
      ══════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((s, i) => (
          <div
            key={s.src}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === slide && !fading ? 1 : 0 }}
          >
            <Image src={s.src} alt={s.alt} fill className="object-cover" priority={i === 0} />
          </div>
        ))}
        {/* Overlay — stronger on the left for text legibility, lighter on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d1a]/92 via-[#0d0d1a]/70 to-[#0d0d1a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a]/85 via-transparent to-[#0d0d1a]/50" />
      </div>

      {/* Top accent line */}
      <div className="hero-topline absolute top-0 left-0 right-0 h-[2px] z-30 pointer-events-none"
        style={{ background: "linear-gradient(90deg,transparent,#FF6B2B 30%,#00B49C 70%,transparent)" }} />

      {/* ══════════════════════════════
          SLIDE NAV ARROWS
      ══════════════════════════════ */}
      <button onClick={() => changeSlide((slide - 1 + SLIDES.length) % SLIDES.length)}
        className="hero-nav-btn absolute left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 text-white flex items-center justify-center backdrop-blur-sm hidden sm:flex">
        <ChevronLeft size={18} />
      </button>
      <button onClick={() => changeSlide((slide + 1) % SLIDES.length)}
        className="hero-nav-btn absolute right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 text-white flex items-center justify-center backdrop-blur-sm hidden sm:flex">
        <ChevronRight size={18} />
      </button>

      {/* ══════════════════════════════
          MAIN CONTENT — split grid
      ══════════════════════════════ */}
      <div className="relative z-20 flex-1 flex items-center px-4 sm:px-6 lg:px-12 xl:px-20 py-24 lg:py-12">
        <div className="hero-grid w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">

          {/* ══════════ LEFT — content ══════════ */}
          <div className="text-left">

            {/* Eyebrow */}
            <div className="hero-fadeu flex items-center gap-3 mb-6 flex-wrap">
              <span className="inline-flex items-center gap-1.5 bg-[#FF6B2B]/20 border border-[#FF6B2B]/35 text-[#FF6B2B] px-3.5 py-1.5 rounded-full text-[9.5px] font-black uppercase tracking-[2.5px]">
                <Sparkles size={11} /> Pan-India Network
              </span>
              <span className="flex items-center gap-1.5 text-[10.5px] text-[#00B49C] font-bold">
                <span className="hero-live-dot relative flex h-1.5 w-1.5">
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00B49C]" />
                </span>
                Trusted Since 2010 · ISO Certified
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-fadeu hero-fadeu-1 font-black uppercase leading-[1] tracking-tight mb-5">
              <span className="block text-[40px] sm:text-[58px] lg:text-[78px] xl:text-[86px] text-white">
                We Move
              </span>
              <span className="block text-[40px] sm:text-[58px] lg:text-[78px] xl:text-[86px] text-[#FF6B2B]">
                Your World
              </span>
              <span className="flex items-center gap-3 text-[20px] sm:text-[26px] lg:text-[34px] text-white/40 font-black tracking-widest mt-2">
                <span className="block h-[2px] w-10 bg-white/20" />
                SAFELY &amp; ON TIME
              </span>
            </h1>

            {/* Sub copy */}
            <p className="hero-fadeu hero-fadeu-2 text-white/75 text-[14px] sm:text-[16px] leading-[1.8] max-w-[520px] mb-8">
              Home shifting, office relocation, car transport, packaging &amp; unpacking,
              loading &amp; unloading, and warehousing — damage-free across 50+ Indian cities.
            </p>

            {/* Live route ticker */}
            <div className="hero-fadeu hero-fadeu-3 inline-flex items-center gap-3 bg-white/8 border border-white/12 backdrop-blur-sm rounded-full px-4 py-2 mb-9">
              <span className="text-[16px] leading-none">{TICKER[tickIdx].icon}</span>
              <span
                className="hero-ticker-item text-[12px] font-bold text-white/85 tracking-wide"
                style={{ opacity: tickIn ? 1 : 0, transform: tickIn ? "translateX(0)" : "translateX(8px)" }}
              >
                {TICKER[tickIdx].from} <span className="text-[#FF6B2B] mx-1">→</span> {TICKER[tickIdx].to}
              </span>
              <span className="text-[10px] font-bold text-white/35 uppercase tracking-[2px] border-l border-white/15 pl-3">
                Live Booking
              </span>
            </div>

            {/* Stats row */}
            <div className="hero-fadeu hero-fadeu-4 flex items-center gap-5 sm:gap-8 flex-wrap">
              {STATS.map((s, i) => (
                <div key={s.l} className="flex items-center gap-5 sm:gap-8">
                  <div>
                    <div className="text-[22px] sm:text-[28px] font-black text-white leading-none flex items-center gap-1">
                      {s.n}
                      {s.star && <Star size={16} className="text-[#FF6B2B] fill-[#FF6B2B] mb-1" />}
                    </div>
                    <div className="text-[9.5px] sm:text-[10px] font-bold text-white/40 uppercase tracking-[1.5px] mt-1">{s.l}</div>
                  </div>
                  {i < STATS.length - 1 && <div className="hero-stat-sep h-9 hidden sm:block" />}
                </div>
              ))}
            </div>
          </div>

          {/* ══════════ RIGHT — floating quote form ══════════ */}
          <div className="hero-form-col hero-fadeu hero-fadeu-2 relative">
            <div className="hero-card-glow" />
            <div className="hero-card-float hero-glass-card relative p-6 sm:p-7">

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
                    <div className="hero-input-row flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-100">
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

                    <div className="hero-input-row flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-100">
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
                  <div className="hero-input-row flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-100 mb-2.5">
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
                    <div className="hero-input-row flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-100">
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

                    <div className="hero-input-row flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-100">
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
                      <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#FF6B2B" strokeWidth="2" className="hero-route-line" strokeLinecap="round" opacity="0.35" />
                    </svg>
                    <div className="hero-route-truck w-[22px] h-[22px] rounded-full bg-[#FF6B2B] flex items-center justify-center shadow-[0_4px_10px_rgba(255,107,43,0.5)]">
                      <Truck size={11} className="text-white" />
                    </div>
                  </div>

                  {/* DATE */}
                  <div className="hero-input-row flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-100 mb-2.5 cursor-pointer" onClick={() => dateRef.current?.showPicker()}>
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
                    className="hero-cta-btn w-full group flex items-center justify-center gap-2 bg-[#FF6B2B] hover:bg-[#e85d1f] disabled:opacity-70 disabled:cursor-not-allowed text-white font-black uppercase tracking-[2px] text-[13px] py-4 rounded-xl shadow-[0_8px_24px_rgba(255,107,43,0.35)] hover:shadow-[0_12px_32px_rgba(255,107,43,0.5)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
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
      </div>


    </section>
  );
}