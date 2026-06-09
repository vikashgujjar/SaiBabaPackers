"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Package, Truck, Car, Warehouse, Home, Navigation, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon:   Package,
    title:  "Packaging And Unpacking",
    short:  "Safe wrapping for every item",
    tag:    "Most Popular",
    desc:   "We are able to both package and Unpacking your items. Our trained packers use material-specific techniques — bubble wrap for fragile items, foam corner guards for furniture, vacuum bags for soft furnishings.",
    points: ["Custom-spec wrapping per item type", "Full inventory list provided", "Unpacking & placement at destination", "Disposal of all packing material"],
    image:  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=900&q=85",
    accent: "#FF6B2B",
  },
  {
    icon:   Truck,
    title:  "Loading & Unloading",
    short:  "Scratch-free heavy lifting",
    tag:    null,
    desc:   "Our people who are good at loading learn the right skills and know-how for modern loading. Our crew uses structural ramps, furniture dollies, and load-strap harnesses to prevent any damage.",
    points: ["Padded floor runners & door guards", "Hydraulic lift for heavy appliances", "Pre-move walkthrough & damage check", "Crew of 3–6 based on move size"],
    image:  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=85",
    accent: "#00B49C",
  },
  {
    icon:   Car,
    title:  "Car Relocation Services",
    short:  "Cars & bikes, anywhere in India",
    tag:    null,
    desc:   "Car and Bike transport and carrier services are our specialty. Multi-car enclosed carriers and custom-built bike cradles transport your vehicles without a single kilometre added to the odometer.",
    points: ["Enclosed carrier transport", "Zero-odometer-reading policy", "Pre & post delivery inspection report", "Full transit insurance included"],
    image:  "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=900&q=85",
    accent: "#FF6B2B",
  },
  {
    icon:   Warehouse,
    title:  "Warehousing Services",
    short:  "Clean, monitored storage",
    tag:    null,
    desc:   "We have excellent security and a lot of room. We have a place for you to store your things. Our warehouses are CCTV-monitored 24/7, pest-treated monthly, and items are catalogued and retrievable on 24-hour notice.",
    points: ["Climate & humidity controlled", "24/7 CCTV + security guard", "Monthly pest control treatment", "24-hr retrieval on demand"],
    image:  "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?w=900&q=85",
    accent: "#00B49C",
  },
  {
    icon:   Home,
    title:  "Home Shifting Services",
    short:  "Full end-to-end relocation",
    tag:    "Most Requested",
    desc:   "Do you want something brought to you? We are exactly what you need! From disassembly of modular furniture to reassembly and wall-mounting at the new place — we handle every stage.",
    points: ["Dedicated move supervisor", "Furniture disassembly & reassembly", "Appliance disconnect & reconnect", "Post-move cleaning crew optional"],
    image:  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85",
    accent: "#FF6B2B",
  },
  {
    icon:   Navigation,
    title:  "Transportation Services",
    short:  "Office moves with zero downtime",
    tag:    null,
    desc:   "We know how to offer a good range of transportation services. We move offices over weekends or nights so your operations resume Monday morning with zero disruption.",
    points: ["Weekend & after-hours scheduling", "IT & server rack specialists", "Department-labelled system", "Business continuity guaranteed"],
    image:  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=85",
    accent: "#00B49C",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const s = services[active];
  const Icon = s.icon;

  return (
    <section id="services" className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ── Section header ── */}
        <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
          <div>
            <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-2">
              What We Offer
            </span>
            <h2 className="text-[36px] lg:text-[52px] font-black text-[#1a1a2e] uppercase leading-[0.92] tracking-tight">
              Our <span className="text-[#FF6B2B]">Services</span>
            </h2>
          </div>
          <p className="text-gray-400 text-[13px] leading-relaxed max-w-[300px]">
            Select a service to explore what's included. Every move is quoted free of charge.
          </p>
        </div>

        {/* ── Main layout: tab list LEFT + feature panel RIGHT ── */}
        <div className="grid lg:grid-cols-[300px_1fr] rounded-3xl overflow-hidden border border-gray-100 shadow-[0_16px_60px_rgba(0,0,0,0.06)] min-h-[560px]">

          {/* ── LEFT: Vertical tab list ── */}
          <div className="bg-[#F7F4EE] border-r border-gray-100 flex flex-col divide-y divide-gray-100 overflow-x-auto lg:overflow-visible">
            <div className="px-5 py-4 border-b border-gray-200">
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-[2.5px]">
                Choose a service
              </p>
            </div>
            {services.map((item, i) => {
              const TabIcon = item.icon;
              const isActive = active === i;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`group relative flex items-center gap-3.5 px-5 py-4 text-left transition-all duration-200 shrink-0
                    ${isActive
                      ? "bg-white shadow-[2px_0_0_0_#FF6B2B_inset]"
                      : "hover:bg-white/60"
                    }`}
                >
                  {isActive && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-sm"
                      style={{ background: item.accent }}
                    />
                  )}

                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isActive ? "scale-105" : "group-hover:scale-105"
                    }`}
                    style={{
                      background: isActive ? item.accent : `${item.accent}12`,
                    }}
                  >
                    <TabIcon
                      size={16}
                      style={{ color: isActive ? "#fff" : item.accent }}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div className="min-w-0">
                    <div
                      className={`text-[12.5px] font-black uppercase tracking-wide leading-tight transition-colors duration-200 truncate ${
                        isActive ? "text-[#1a1a2e]" : "text-gray-500 group-hover:text-[#1a1a2e]"
                      }`}
                    >
                      {item.title}
                    </div>
                    <div className="text-[10.5px] text-gray-400 mt-0.5 truncate font-medium">
                      {item.short}
                    </div>
                  </div>

                  {item.tag && (
                    <span
                      className="ml-auto shrink-0 text-[7.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md whitespace-nowrap"
                      style={{ background: `${item.accent}15`, color: item.accent }}
                    >
                      {item.tag}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* ── RIGHT: Feature panel ── */}
          <div className="bg-white flex flex-col lg:flex-row overflow-hidden">

            {/* Content block */}
            <div className="flex-1 flex flex-col justify-between px-8 py-8 lg:py-10 order-2 lg:order-1">

              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div
                      className="text-[9.5px] font-black uppercase tracking-[2.5px] mb-2"
                      style={{ color: s.accent }}
                    >
                      Service Detail
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${s.accent}12` }}
                      >
                        <Icon size={20} style={{ color: s.accent }} strokeWidth={1.8} />
                      </div>
                      <h3 className="text-[22px] lg:text-[26px] font-black text-[#1a1a2e] uppercase tracking-tight leading-tight">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  {s.tag && (
                    <span
                      className="shrink-0 text-[8.5px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg mt-1"
                      style={{ background: `${s.accent}12`, color: s.accent }}
                    >
                      {s.tag}
                    </span>
                  )}
                </div>

                <p className="text-[13.5px] text-gray-500 leading-[1.85] mb-7 max-w-[480px]">
                  {s.desc}
                </p>

                <div className="mb-8">
                  <p className="text-[9.5px] font-black text-gray-400 uppercase tracking-[2px] mb-3">
                    What's Included
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {s.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={14}
                          className="shrink-0 mt-0.5"
                          style={{ color: s.accent }}
                          strokeWidth={2}
                        />
                        <span className="text-[12.5px] text-gray-600 font-medium leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-gray-100">
                <Link
                  href="#quote"
                  className="group flex items-center gap-2 text-white font-black uppercase tracking-[2px] text-[11.5px] px-7 py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                  style={{
                    background: s.accent,
                    boxShadow: `0 8px 24px ${s.accent}35`,
                  }}
                >
                  Get a Quote for This
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="#contact"
                  className="text-[11.5px] font-bold text-gray-400 hover:text-[#1a1a2e] uppercase tracking-wider transition-colors duration-200"
                >
                  Ask a Question →
                </Link>
              </div>
            </div>

            {/* Image panel */}
            <div className="relative w-full lg:w-[280px] xl:w-[320px] h-48 lg:h-auto shrink-0 order-1 lg:order-2 overflow-hidden">
              <Image
                key={s.image}
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 1024px) 100vw, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white/20 lg:via-transparent lg:to-transparent" />
              <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[2px] px-3 py-1.5 rounded-lg border border-white/10">
                {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom nav hint */}
        <div className="mt-5 flex items-center justify-between px-1">
          <p className="text-[11px] text-gray-400 font-medium">
            {services.length} services available · All include free site survey
          </p>
          <div className="flex items-center gap-1">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === active ? "w-5 h-2 bg-[#FF6B2B]" : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
                }`}
                aria-label={`Service ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
