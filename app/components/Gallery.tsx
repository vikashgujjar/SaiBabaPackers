"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";

const categories = [
  { id: "all", label: "All" },
  { id: "packing", label: "Packing" },
  { id: "moving", label: "Moving" },
  { id: "storage", label: "Storage" },
];

const images = [
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80",  alt: "Premium Packing Boxes",      category: "packing", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",  alt: "Professional Shifting Crew",  category: "moving",  span: "" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",     alt: "Interstate Transit Fleet",     category: "moving",  span: "" },
  { src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",  alt: "Delicate Goods Protection",   category: "packing", span: "" },
  { src: "https://images.unsplash.com/photo-1601628828688-632f38a5d0e1?w=600&q=80",  alt: "Secure Cargo Loading",        category: "moving",  span: "" },
  { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",  alt: "Household Kitchen Packing",   category: "packing", span: "" },
  { src: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=600&q=80",  alt: "Safe Warehousing Storage",    category: "storage", span: "col-span-2" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <section className="bg-[#F7F4EE] py-20 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-2">Our Portfolio</span>
            <h2 className="text-[36px] lg:text-[50px] font-black text-[#1a1a2e] uppercase leading-[0.95] tracking-tight">
              Relocation <span className="text-[#FF6B2B]">Gallery</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-[1.5px] border transition-all duration-200 ${
                  filter === c.id
                    ? "bg-[#FF6B2B] border-[#FF6B2B] text-white shadow-[0_4px_12px_rgba(255,107,43,0.25)]"
                    : "bg-white border-gray-200 text-gray-500 hover:border-[#FF6B2B]/30 hover:text-[#FF6B2B]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[220px]">
          {filteredImages.map((img, i) => (
            <div
              key={`${img.alt}-${i}`}
              className={`group relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-100 ${filter === "all" && img.span ? img.span : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 300px"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 via-[#1a1a2e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <div>
                    <span className="block text-[8px] font-black uppercase tracking-[2px] text-[#00B49C] mb-0.5">{img.category}</span>
                    <span className="block text-white text-[12px] font-bold">{img.alt}</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B2B] flex items-center justify-center shrink-0">
                    <ZoomIn size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}