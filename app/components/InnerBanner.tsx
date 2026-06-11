import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Award, ChevronRight, MapPin } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface InnerBannerProps {
  image:         string;
  eyebrow?:      string;
  headingLines:  [string, string, string];
  description?:  React.ReactNode;
  breadcrumbs:   BreadcrumbItem[];
  primaryCta?:   { label: string; href: string };
  showIsoBadge?: boolean;
}

export default function InnerBanner({
  image,
  eyebrow,
  headingLines,
  description,
  breadcrumbs,
  primaryCta,
  showIsoBadge = true,
}: InnerBannerProps) {
  const [line1, line2, line3] = headingLines;
  /* Full title for the marquee watermark */
  const marqueeText = `${line1} ${line2} ${line3}`;

  return (
    <section className="relative overflow-hidden bg-[#1a1a2e] min-h-[460px] lg:min-h-[520px] flex flex-col">

      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={marqueeText}
          fill
          className="object-cover object-center scale-105"
          priority
        />
        {/* Rich layered overlay */}
        <div className="absolute inset-0 bg-[#1a1a2e]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/60 via-transparent to-[#1a1a2e]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/70 via-transparent to-[#1a1a2e]/40" />
      </div>

      {/* ── Scrolling marquee watermark ── */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
        <div className="flex w-max animate-marquee gap-0 opacity-[0.04]">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-[130px] lg:text-[180px] font-black text-white uppercase tracking-tighter leading-none whitespace-nowrap px-8"
            >
              {marqueeText} ·
            </span>
          ))}
        </div>
      </div>

      {/* ── Top utility bar ── */}
      <div className="relative z-20 border-b border-white/8">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between gap-4">

          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={10} className="text-white/20" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-[10px] font-bold text-white/40 hover:text-[#FF6B2B] uppercase tracking-[2px] transition-colors duration-200"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[10px] font-black text-[#FF6B2B] uppercase tracking-[2px]">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Right: ISO + phone */}
          <div className="flex items-center gap-4 shrink-0">
            {showIsoBadge && (
              <div className="hidden sm:flex items-center gap-1.5 text-[9.5px] font-black text-gray-500 uppercase tracking-[1.5px]">
                <Award size={11} className="text-[#00B49C]" />
                ISO 9001:2015
              </div>
            )}
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <a
              href="tel:+919815162726"
              className="flex items-center gap-1.5 text-[11px] font-bold text-white/50 hover:text-[#FF6B2B] transition-colors duration-200"
            >
              <Phone size={11} className="text-[#FF6B2B]" />
              +91-9815162726
            </a>
          </div>
        </div>
      </div>

      {/* ── Main content — centered vertically ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 w-full py-14 lg:py-20">
          <div className="max-w-[680px]">

            {/* Eyebrow */}
            {eyebrow && (
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center gap-1.5 bg-[#00B49C]/10 border border-[#00B49C]/20 text-[#00B49C] px-3 py-1.5 rounded-md text-[9.5px] font-black uppercase tracking-[2.5px]">
                  <MapPin size={9} />
                  {eyebrow}
                </span>
                <span className="flex items-center gap-1.5 text-[10.5px] text-white/30 font-bold">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B2B] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF6B2B]" />
                  </span>
                  Active Service
                </span>
              </div>
            )}

            {/* Heading — stacked, large */}
            <h1 className="font-black uppercase tracking-tight mb-6 leading-[0.88]">
              <span className="block text-[44px] sm:text-[58px] lg:text-[74px] text-white">
                {line1}
              </span>
              <span className="block text-[44px] sm:text-[58px] lg:text-[74px] text-[#FF6B2B]">
                {line2}
              </span>
              <span className="block text-[44px] sm:text-[58px] lg:text-[74px] text-white/50">
                {line3}
              </span>
            </h1>

            {/* Description */}
            {description && (
              <p className="text-gray-500 text-[14px] leading-[1.85] max-w-[520px] mb-8">
                {description}
              </p>
            )}

            {/* CTA row */}
            <div className="flex items-center gap-3 flex-wrap">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="group flex items-center gap-2 bg-[#FF6B2B] hover:bg-[#e85d1f] text-white font-black uppercase text-[11.5px] tracking-[2px] px-7 py-4 rounded-xl shadow-[0_8px_28px_rgba(255,107,43,0.38)] hover:shadow-[0_12px_36px_rgba(255,107,43,0.52)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                >
                  {primaryCta.label}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              )}
              <a
                href="tel:+919815162726"
                className="group flex items-center gap-2.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 text-white font-black uppercase text-[11.5px] tracking-[2px] px-7 py-4 rounded-xl transition-all duration-200"
              >
                <Phone size={14} className="text-[#00B49C]" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}