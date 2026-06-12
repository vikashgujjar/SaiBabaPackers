import type { Metadata } from "next";
import Link from "next/link";
import Topbar from "@/app/components/Topbar";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import InnerBanner from "@/app/components/InnerBanner";
import { MapPin, Phone, ArrowRight } from "lucide-react";

/* ─── Metadata ───────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Our Branches — Sai Baba Packers & Movers Chandigarh",
  description:
    "Sai Baba Packers & Movers operates across 45+ cities in India including Chandigarh, Delhi, Mumbai, Bangalore, Chennai, Kolkata, Pune, and more. Find your nearest branch.",
};

/* ─── Cities grouped by region ──────────────────────── */
const regions = [
  {
    label:  "North India",
    accent: "#FF6B2B",
    cities: [
      "Chandigarh", "Delhi", "Noida", "Gurgaon", "Faridabad",
      "Ghaziabad", "Vaishali", "Indirapuram", "Ambala", "Patiala",
      "Amritsar", "Ludhiana", "Dehradun", "Lucknow", "Kanpur",
      "Varanasi", "Agra", "Jaipur","Chandigarh","Panchkula","Mohali","Himachal Pradesh",
    ],
  },
  {
    label:  "West India",
    accent: "#00B49C",
    cities: [
      "Mumbai", "Navi Mumbai", "Pune", "Ahmedabad", "Surat",
      "Rajkot", "Jamnagar", "Halol", "Vapi", "Nashik",
      "Indore", "Bhopal", "Nagpur",
    ],
  },
  {
    label:  "South India",
    accent: "#FF6B2B",
    cities: [
      "Bangalore", "Chennai", "Hyderabad", "Kochi",
      "Madurai", "Mangalore", "Trichy", "Coimbatore",
    ],
  },
  {
    label:  "East & Central India",
    accent: "#00B49C",
    cities: [
      "Kolkata", "Patna", "Guwahati", "Bhubaneswar",
      "Ranchi", "Raipur",
    ],
  },
];

/* flat list for the overview count */
const totalCities = regions.reduce((acc, r) => acc + r.cities.length, 0);

/* ─── Page ───────────────────────────────────────────── */
export default function BranchesPage() {
  return (
    <>
      <InnerBanner
        image="/InnerBanners/branches.webp"
        eyebrow="Pan-India Network"
        headingLines={["Our", "Branches", "& Coverage"]}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Branches" }]}
        primaryCta={{ label: "Get a Quote", href: "/contact" }}
        description="Sai Baba Packers & Movers operates across India — from Chandigarh to Chennai, Delhi to Guwahati. Find your city and get a free shifting quote."
      />

      {/* ════════════════════════════════════════════
          OVERVIEW STRIP
      ════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            {/* Left: intro */}
            <div>
              <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-1">
                Pan-India Coverage
              </span>
              <h2 className="text-[22px] lg:text-[28px] font-black text-[#1a1a2e] uppercase leading-tight tracking-tight">
                Serving <span className="text-[#FF6B2B]">{totalCities}+ Cities</span> Nationwide
              </h2>
            </div>

            {/* Right: stat pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { n: `${totalCities}+`, l: "Cities Covered"  },
                { n: "4",              l: "Regions Active"  },
                { n: "15+",            l: "Years Operating" },
                { n: "2,500+",         l: "Moves Completed" },
              ].map(s => (
                <div
                  key={s.l}
                  className="bg-[#F7F4EE] border border-gray-100 rounded-xl px-5 py-3 text-center"
                >
                  <div className="text-[20px] font-black text-[#FF6B2B] leading-none">{s.n}</div>
                  <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          HQ BRANCHES — Chandigarh
      ════════════════════════════════════════════ */}
      <section className="bg-[#F7F4EE] py-8 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-2">
              Headquarters
            </span>
            <h3 className="text-[24px] lg:text-[32px] font-black text-[#1a1a2e] uppercase leading-tight tracking-tight">
              Chandigarh <span className="text-[#FF6B2B]">Head Offices</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                label:   "Branch 01 — Pipliwala Town",
                area:    "Pipliwala Town, Chandigarh",
                address: "Plot No. 2212/6, Pipliwala Town, Road Near Foji Dhaba",
                pin:     "160101",
                phone:   "+91-9815162726",
                mapsUrl: "https://www.google.com/maps/search/Sai+Baba+Packers+Movers+Pipliwala+Town+Chandigarh",
              },
              {
                label:   "Branch 02 — Manimajra",
                area:    "Old Ropar Road, Manimajra",
                address: "Shop No. 238, Old Ropar Road, Near Police Station, Manimajra",
                pin:     "160101",
                phone:   "+91-9833559269",
                mapsUrl: "https://www.google.com/maps/search/Old+Ropar+Road+Near+Police+Station+Manimajra+Chandigarh",
              }
            ].map((b) => (
              <div
                key={b.label}
                className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 relative"
              >
               
                <div className="h-[3px] w-full bg-gradient-to-r from-[#FF6B2B] to-[#00B49C]" />

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FF6B2B]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF6B2B] transition-colors duration-300">
                        <MapPin size={17} className="text-[#FF6B2B] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-[#FF6B2B] uppercase tracking-[2px]">{b.label}</p>
                        <p className="text-[14px] font-black text-[#1a1a2e] uppercase tracking-tight leading-tight">{b.area}</p>
                      </div>
                    </div>
                    <span className="shrink-0 text-[9px] font-black text-gray-400 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                      PIN {b.pin}
                    </span>
                  </div>

                  <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
                    {b.address}, Chandigarh – {b.pin}
                  </p>

                  <div className="flex items-center gap-3 flex-wrap">
                    <a
                      href={`tel:${b.phone.replace(/\D/g, "")}`}
                      className="group/btn flex items-center gap-2 bg-[#FF6B2B] hover:bg-[#e85d1f] text-white font-black uppercase text-[10.5px] tracking-[1.5px] px-5 py-2.5 rounded-xl shadow-[0_4px_14px_rgba(255,107,43,0.28)] hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <Phone size={12} />
                      {b.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          REGIONAL CITY GRIDS
      ════════════════════════════════════════════ */}
      {regions.map((region, ri) => (
        <section
          key={region.label}
          className={ri % 2 === 0 ? "bg-white py-8 sm:py-16" : "bg-[#F7F4EE] py-8 sm:py-16"}
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

            {/* Region header */}
            <div className="flex items-end justify-between gap-6 mb-8 flex-wrap">
              <div className="flex items-center gap-4">
                {/* Numbered badge */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-white font-black text-[14px]"
                  style={{ background: region.accent }}
                >
                  {String(ri + 1).padStart(2, "0")}
                </div>
                <div>
                  <span
                    className="block text-[9.5px] font-black uppercase tracking-[3px] mb-0.5"
                    style={{ color: region.accent }}
                  >
                    Region {String(ri + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[22px] lg:text-[28px] font-black text-[#1a1a2e] uppercase leading-tight tracking-tight">
                    {region.label}
                  </h3>
                </div>
              </div>
              <div
                className="text-right px-4 py-2 rounded-xl border"
                style={{ borderColor: `${region.accent}25`, background: `${region.accent}08` }}
              >
                <div className="text-[22px] font-black leading-none" style={{ color: region.accent }}>
                  {region.cities.length}
                </div>
                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">
                  Cities
                </div>
              </div>
            </div>

            {/* City pills grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {region.cities.map((city) => (
                <Link
                  key={city}
                  href={`/contact?city=${encodeURIComponent(city)}`}
                  className="group relative bg-white border border-gray-100 rounded-2xl px-4 py-4 flex items-center gap-3 hover:border-transparent hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
                >
                  {/* Accent bar on hover */}
                  <div
                    className="absolute top-0 left-0 w-0 h-[2.5px] group-hover:w-full transition-all duration-300"
                    style={{ background: region.accent }}
                  />
                  {/* Pin icon */}
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200"
                    style={{ background: `${region.accent}12` }}
                  >
                    <MapPin size={13} strokeWidth={2} style={{ color: region.accent }} />
                  </div>
                  <span className="text-[12.5px] font-black text-[#1a1a2e] uppercase tracking-wide leading-tight">
                    {city}
                  </span>
                </Link>
              ))}

              {/* Get Quote card — last item */}
              <Link
                href="/contact"
                className="group relative bg-[#1a1a2e] border border-[#1a1a2e] rounded-2xl px-4 py-4 flex items-center gap-3 hover:bg-[#FF6B2B] hover:border-[#FF6B2B] transition-all duration-200 overflow-hidden"
              >
                <div className="w-7 h-7 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors duration-200">
                  <ArrowRight size={13} className="text-white" />
                </div>
                <span className="text-[12px] font-black text-white uppercase tracking-wide leading-tight">
                  Get Quote
                </span>
              </Link>
            </div>
          </div>
        </section>
      ))}

    </>
  );
}