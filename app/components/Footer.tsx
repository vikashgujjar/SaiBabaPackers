import Link from "next/link";
import { Truck, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const menuLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Branches", href: "#" },
  { label: "Contact Us", href: "#contact" },
  { label: "Enquiry Now", href: "#quote" },
];

const serviceLinks = [
  "Home Shifting", "Office Shifting", "Packing & Unpacking",
  "Loading & Unloading", "Car Relocation", "Warehousing Services", "Transportation Services",
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-gray-500 pt-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B2B]/40 to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.2fr_1.6fr] gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B2B] flex items-center justify-center shrink-0 shadow-[0_4px_14px_rgba(255,107,43,0.3)]">
                <Truck size={17} className="text-white" />
              </div>
              <div>
                <div className="text-white text-[17px] font-black leading-none uppercase tracking-tight">
                  Sai Baba <span className="text-[#FF6B2B]">Packers</span>
                </div>
                <div className="text-[#00B49C] text-[8.5px] font-bold mt-0.5 tracking-[2px] uppercase">Premium Moving Services</div>
              </div>
            </div>
            <p className="text-[13px] text-gray-600 leading-relaxed mb-5 max-w-[260px]">
              A leading logistics and relocation service in India — committed to damage-free, fast shifting across the country.
            </p>
            <div className="flex gap-2">
              {[
                { label: "Facebook", href: "#", icon: FaFacebookF },
                { label: "Twitter", href: "#", icon: FaTwitter },
                { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
                { label: "Instagram", href: "#", icon: FaInstagram },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} aria-label={social.label}
                    className="w-8 h-8 rounded-lg bg-white/4 border border-white/6 flex items-center justify-center text-gray-600 hover:bg-[#FF6B2B] hover:border-[#FF6B2B] hover:text-white transition-all duration-200">
                    <Icon size={13} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-white text-[11px] font-black uppercase tracking-[2px] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#FF6B2B]" />Menu
            </h4>
            <ul className="space-y-2.5">
              {menuLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-1.5 text-[12.5px] text-gray-600 hover:text-white transition-colors duration-200">
                    <ChevronRight size={11} className="text-[#00B49C] group-hover:translate-x-0.5 transition-transform duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-[11px] font-black uppercase tracking-[2px] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#FF6B2B]" />Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link href="#services" className="group flex items-center gap-1.5 text-[12.5px] text-gray-600 hover:text-white transition-colors duration-200">
                    <ChevronRight size={11} className="text-[#00B49C] group-hover:translate-x-0.5 transition-transform duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[11px] font-black uppercase tracking-[2px] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#FF6B2B]" />Contact Info
            </h4>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: "Shop No. 336, Old Rajpur Road, Near Police Station, Ramnagar Chandigarh – 160101" },
                { icon: MapPin, text: "Plot No. 221/26, Road Near Fuji Complex, Chandigarh – 160102" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex gap-3 items-start">
                    <Icon size={13} className="text-[#FF6B2B] shrink-0 mt-0.5" />
                    <span className="text-[12px] text-gray-600 leading-relaxed">{item.text}</span>
                  </li>
                );
              })}
              <li className="flex gap-3 items-center">
                <Phone size={13} className="text-[#FF6B2B] shrink-0" />
                <a href="tel:+918915162726" className="text-[12px] text-gray-600 hover:text-white transition-colors">+91-8915162726</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={13} className="text-[#FF6B2B] shrink-0" />
                <a href="mailto:saibabamovers.chd@gmail.com" className="text-[12px] text-gray-600 hover:text-white transition-colors break-all">saibabamovers.chd@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11.5px] text-gray-700">
          <p>© 2019 Sai Baba Packers &amp; Movers. All rights reserved.</p>
          <p>Powered by — <a href="#" className="text-[#00B49C] hover:text-white transition-colors font-bold">Future Towns</a></p>
        </div>
      </div>
    </footer>
  );
}