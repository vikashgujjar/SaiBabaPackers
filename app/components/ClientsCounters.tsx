"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Users, Globe, Smile } from "lucide-react";

const clients = ["TATA", "ICICI Bank", "SBI", "Reliance", "LIC", "IndiaMart", "TATA", "ICICI Bank", "SBI", "Reliance", "LIC", "IndiaMart"];

const counters = [
  { icon: Building2, target: 250,  label: "Office Moves",    accent: "#FF6B2B" },
  { icon: Users,     target: 1500, label: "Expert Staff",    accent: "#00B49C" },
  { icon: Globe,     target: 28,   label: "States Covered",  accent: "#FF6B2B" },
  { icon: Smile,     target: 2500, label: "Happy Families",  accent: "#00B49C" },
];

function Counter({ target, label, icon: Icon, accent }: { target: number; label: string; icon: React.ElementType; accent: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1800, steps = 60, inc = target / steps;
        let cur = 0;
        const interval = setInterval(() => {
          cur = Math.min(cur + inc, target);
          setValue(Math.floor(cur));
          if (cur >= target) clearInterval(interval);
        }, dur / steps);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-transparent hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start overflow-hidden">
      {/* Watermark number */}
      <div className="absolute right-3 top-2 text-[72px] font-black leading-none select-none opacity-[0.04]" style={{ color: accent }}>
        {String(target).charAt(0)}
      </div>
      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: `${accent}12` }}>
        <Icon size={20} style={{ color: accent }} />
      </div>
      <span className="block text-[46px] font-black text-[#1a1a2e] leading-none tracking-tight">
        {value.toLocaleString()}
        <span className="text-[28px] font-extrabold ml-0.5" style={{ color: accent }}>+</span>
      </span>
      <span className="block text-[11px] font-bold uppercase tracking-[2px] text-gray-400 mt-2">{label}</span>
    </div>
  );
}

export default function ClientsCounters() {
  return (
    <section className="bg-white py-20 border-y border-gray-100 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="mb-12">
          <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-2">Our Network</span>
          <h2 className="text-[36px] lg:text-[50px] font-black text-[#1a1a2e] uppercase leading-[0.95] tracking-tight">
            Trusted By <span className="text-[#FF6B2B]">Industry Leaders</span>
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden mb-14 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">
          <div className="flex w-max gap-3 animate-marquee py-2">
            {clients.map((c, idx) => (
              <div
                key={`${c}-${idx}`}
                className="bg-[#F7F4EE] border border-gray-100 px-7 py-3.5 rounded-xl text-[14px] font-black text-gray-400 hover:text-[#1a1a2e] hover:border-[#1a1a2e]/10 hover:scale-105 transition-all duration-300 select-none shrink-0 cursor-default"
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {counters.map((c) => (
            <Counter key={c.label} target={c.target} label={c.label} icon={c.icon} accent={c.accent} />
          ))}
        </div>
      </div>
    </section>
  );
}