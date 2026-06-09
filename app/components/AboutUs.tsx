import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const checks = [
  "Fully certified & background-checked workforce",
  "High-strength bubble wraps & heavy-gauge cartons",
  "Transit insurance with immediate claim settlements",
  "Transparent estimates — zero hidden charges, ever",
  "Expansive self-owned fleet for door-to-door delivery",
];

export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B2B]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=750&q=85"
                alt="Sai Baba Packers team"
                width={750}
                height={520}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/30 to-transparent rounded-3xl" />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-5 -right-3 lg:-right-6 bg-[#FF6B2B] text-white px-7 py-6 rounded-2xl text-center shadow-[0_16px_40px_rgba(255,107,43,0.35)]">
              <span className="block text-[46px] font-black leading-none">15+</span>
              <span className="block text-[9px] font-black uppercase tracking-[2px] mt-1 text-orange-100">Years of<br />Trust</span>
            </div>

            {/* ISO badge */}
            <div className="absolute -top-3 -left-3 bg-[#1a1a2e] text-[#00B49C] px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[2px] border border-[#00B49C]/20">
              ISO 9001:2015 Certified
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-3">Who We Are</span>
            <h2 className="text-[38px] lg:text-[50px] font-black text-[#1a1a2e] uppercase leading-[0.95] tracking-tight mb-6">
              Relocating Lives<br />
              With{" "}
              <span style={{ WebkitTextStroke: "2px #FF6B2B", color: "transparent" }}>Care</span>
              {" "}&amp;{" "}
              <span className="text-[#FF6B2B]">Trust</span>
            </h2>

            <p className="text-gray-500 text-[14.5px] leading-[1.8] mb-4">
              Since 2010, Sai Baba Packers &amp; Movers has remained a benchmark of reliable logistics across India — specialising in household moves, office shifting, and vehicle transit.
            </p>
            <p className="text-gray-500 text-[14.5px] leading-[1.8] mb-8">
              Our recipe is simple: trained packing experts, premium wrapping supplies, and an updated carrier fleet delivering absolute cargo safety on every move.
            </p>

            <ul className="space-y-3 mb-9">
              {checks.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[13.5px] text-[#1a1a2e] font-medium">
                  <div className="w-5 h-5 rounded-md bg-[#00B49C]/12 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={13} className="text-[#00B49C]" />
                  </div>
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#services"
              className="group inline-flex items-center gap-2.5 bg-[#1a1a2e] hover:bg-[#FF6B2B] text-white px-8 py-4 rounded-xl font-black uppercase text-[12px] tracking-[2px] shadow-[0_8px_24px_rgba(26,26,46,0.15)] hover:shadow-[0_8px_24px_rgba(255,107,43,0.3)] hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
            >
              <span>Explore Services</span>
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}