import { Zap, Shield, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon:  Zap,
    stat:  "2×",
    title: "Faster Shifting",
    desc:  "Swift scheduling and optimised loading crews cut your home shifting or office relocation time in half versus the industry average.",
    accent: "#FF6B2B",
    tag:   "Speed",
  },
  {
    icon:  Shield,
    stat:  "100%",
    title: "Safe & Secure",
    desc:  "Multi-layer premium packing for all household goods — bubble wrap, foam corners, heavy-gauge cartons — for zero-damage delivery.",
    accent: "#00B49C",
    tag:   "Protection",
  },
  {
    icon:  Clock,
    stat:  "99%",
    title: "On-Time Guaranteed",
    desc:  "Real-time route optimisation ensures your goods reach the destination on schedule — every home move, office shift, or car transport.",
    accent: "#FF6B2B",
    tag:   "Punctuality",
  },
  {
    icon:  Headphones,
    stat:  "30min",
    title: "24/7 Support",
    desc:  "Dedicated helpline for all packing and moving queries — 30-minute callback guarantee, available round-the-clock, every day of the year.",
    accent: "#00B49C",
    tag:   "Support",
  },
];

export default function FeaturesStrip() {
  return (
    <div className="relative z-10 bg-[#1a1a2e] w-full overflow-hidden">

      {/* Top edge accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B2B]/50 to-transparent" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* 4-column strip — divided by vertical hairlines on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-white/5 lg:divide-x lg:divide-y-0">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative px-7 py-10 flex flex-col gap-5 overflow-hidden
                           hover:bg-white/[0.03] transition-colors duration-300
                           sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-white/5
                           sm:[&:nth-child(1)]:border-b sm:[&:nth-child(2)]:border-b sm:border-b sm:[&:nth-child(3)]:border-b-0 sm:[&:nth-child(4)]:border-b-0
                           lg:border-none"
              >
                {/* Large watermark stat — the signature element */}
                <div
                  className="absolute right-4 top-4 text-[64px] font-black leading-none select-none
                             opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-300
                             tracking-tighter"
                  style={{ color: f.accent }}
                >
                  {f.stat}
                </div>

                {/* Tag pill */}
                <div className="flex items-center gap-3">
                  <span
                    className="text-[8.5px] font-black uppercase tracking-[2.5px] px-2.5 py-1 rounded-md border"
                    style={{
                      color: f.accent,
                      borderColor: `${f.accent}30`,
                      background: `${f.accent}10`,
                    }}
                  >
                    {f.tag}
                  </span>
                </div>

                {/* Icon + stat side by side */}
                <div className="flex items-end gap-4">
                  {/* Icon box */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                               group-hover:scale-105 transition-transform duration-300"
                    style={{ background: `${f.accent}18` }}
                  >
                    <Icon size={22} style={{ color: f.accent }} strokeWidth={2} />
                  </div>

                  {/* Prominent stat */}
                  <div
                    className="text-[38px] font-black leading-none tracking-tight"
                    style={{ color: f.accent }}
                  >
                    {f.stat}
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[13px] font-black text-white uppercase tracking-[1.5px] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-[12.5px] text-gray-500 leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                {/* Bottom accent bar — grows on hover */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${f.accent}, transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </div>
  );
}