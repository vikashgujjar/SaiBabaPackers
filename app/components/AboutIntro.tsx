import Link from "next/link";
import { Truck, Zap, Shield, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon:   Zap,
    /* Moving truck — speed, logistics */
    image:  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=85",
    title:  "We Make It Faster",
    desc:   "Swift scheduling and optimised loading crews cut your moving time in half versus the industry average.",
    accent: "#FF6B2B",
  },
  {
    icon:   Shield,
    /* Cardboard boxes stacked — packing service */
    image:  "/Save&Secure Move.webp",
    title:  "Save & Secure Move",
    desc:   "Multi-layer premium packing — bubble wrap, foam corners, heavy-gauge cartons — for zero-damage delivery.",
    accent: "#00B49C",
  },
  {
    icon:   Clock,
    /* Delivery handshake at door — on-time fulfilment */
    image:  "/OnTime.webp",
    title:  "On Time Delivery",
    desc:   "Real-time route optimisation and pre-mapped logistics ensure punctual arrivals, every single time.",
    accent: "#FF6B2B",
  },
];

export default function AboutIntro() {
  return (
    <section className="bg-[#F7F4EE] py-10 sm:py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[300px_1fr] gap-5 items-stretch">

          {/* ── LEFT: Brand intro with background photo ── */}
          <div className="relative rounded-3xl overflow-hidden min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col justify-between">

            {/* Background photo — team/warehouse */}
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=90"
              alt="Sai Baba Packers team"
              fill
              className="object-cover object-center"
            />

            {/* Dark overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/85 via-[#1a1a2e]/70 to-[#1a1a2e]/90" />

            {/* Content */}
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">

              

              {/* Middle: headline + copy */}
              <div className="my-6">
                <h3 className="text-[24px] font-black text-white uppercase leading-[0.95] tracking-tight mb-4">
                  Chandigarh's Most Trusted Movers Since 2010
                </h3>
                <p className="text-gray-400 text-[12.5px] leading-relaxed">
                  Sai Baba Packers &amp; Movers has built a 15-year legacy of damage-free
                  relocations across 50+ Indian cities — from door-to-door home shifting
                  to corporate office moves and vehicle transport.
                </p>
              </div>

              {/* Bottom: CTA + stats */}
              <div>
                {/* Mini stats */}
                <div className="flex gap-5 mb-5 pb-5 border-b border-white/10">
                  {[
                    { n: "2500+", l: "Moves"  },
                    { n: "15+",   l: "Years"  },
                    { n: "50+",   l: "Cities" },
                  ].map(s => (
                    <div key={s.l}>
                      <div className="text-[20px] font-black text-[#FF6B2B] leading-none">{s.n}</div>
                      <div className="text-[8.5px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-[#FF6B2B] hover:text-white font-black text-[11px] uppercase tracking-[2px] transition-colors duration-200"
                >
                  More About Us
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── RIGHT: 3 feature cards ── */}
          <div className="grid sm:grid-cols-3 gap-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-[0_20px_48px_rgba(0,0,0,0.09)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                >
                  {/* Photo */}
                  <div className="relative h-[175px] overflow-hidden">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 300px"
                    />

                    {/* Gradient bottom fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                    {/* Category label top-left */}
                    <div
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[8.5px] font-black uppercase tracking-[1.5px] text-white"
                      style={{ background: f.accent }}
                    >
                      {f.accent === "#FF6B2B" ? "Our Service" : "Guaranteed"}
                    </div>

                    {/* Icon badge bottom-left on photo */}
                    <div
                      className="absolute bottom-3 left-4 w-9 h-9 rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                      style={{ background: f.accent }}
                    >
                      <Icon size={16} className="text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="text-[14.5px] font-black text-[#1a1a2e] uppercase tracking-wide leading-tight mb-2.5">
                      {f.title}
                    </h4>
                    <p className="text-[12.5px] text-gray-500 leading-relaxed flex-1 mb-4">
                      {f.desc}
                    </p>
                    <Link
                      href="/services"
                      className="group/link inline-flex items-center gap-1.5 text-[10.5px] font-black uppercase tracking-wider transition-colors duration-200"
                      style={{ color: f.accent }}
                    >
                      Read More
                      <ArrowRight size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}