"use client";

import { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react";

const TICKER_ITEMS = [
  "🚚 Household & Commercial Relocation Specialists",
  "⭐ Rated 4.9/5 by 10,000+ Happy Customers",
  "🛡️ 100% Safe, Secure & Insured Moving Guarantee",
  "⚡ ISO 9001:2015 Certified Packers and Movers",
];

export default function Topbar() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveIdx((prev) => (prev + 1) % TICKER_ITEMS.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#1a1a2e] text-gray-300 text-[12px] border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#FF6B2B] to-transparent opacity-60" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="shrink-0 bg-[#FF6B2B]/15 text-[#FF6B2B] border border-[#FF6B2B]/25 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-[2px]">
            LIVE
          </span>
          <div className="hidden sm:block overflow-hidden h-[16px] relative min-w-[260px]">
            <span
              className="absolute left-0 whitespace-nowrap font-medium text-gray-300 text-[11px]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(-8px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}
            >
              {TICKER_ITEMS[activeIdx]}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <a href="tel:+918915162726" className="flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-semibold text-gray-300 hover:text-[#FF6B2B] hover:bg-white/5 transition-all duration-200">
            <Phone size={11} className="text-[#FF6B2B]" />
            +91-8915162726
          </a>
          <div className="w-px h-3 bg-white/10" />
          <a href="mailto:saibabamovers.chd@gmail.com" className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] text-gray-400 hover:text-[#FF6B2B] hover:bg-white/5 transition-all duration-200">
            <Mail size={11} className="text-[#FF6B2B]" />
            saibabamovers.chd@gmail.com
          </a>
          <div className="w-px h-3 bg-white/10 hidden md:block" />
          <a
            href="https://wa.me/918915162726?text=Hi%20Sai%20Baba%20Packers%2C%20I%20need%20a%20free%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded border border-[#25D366]/20 hover:border-[#25D366] transition-all duration-200 ml-1"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L0 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}