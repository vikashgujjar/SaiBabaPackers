import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function StickyButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-[999] flex flex-col items-end gap-3">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919815162726"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center gap-0 hover:gap-3 w-12 hover:w-auto overflow-hidden bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full h-12 px-3.5 hover:px-5 shadow-[0_6px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.6)] transition-all duration-300 ease-in-out"
      >
        <FaWhatsapp size={22} className="shrink-0" />
        <span className="text-[13px] font-black uppercase tracking-wider whitespace-nowrap max-w-0 group-hover:max-w-[120px] overflow-hidden transition-all duration-300 ease-in-out">
          WhatsApp Us
        </span>
      </a>

      {/* Call */}
      <a
        href="tel:+919815162726"
        aria-label="Call us"
        className="group flex items-center gap-0 hover:gap-3 w-12 hover:w-auto overflow-hidden bg-[#FF6B2B] hover:bg-[#e85d1f] text-white rounded-full h-12 px-3.5 hover:px-5 shadow-[0_6px_24px_rgba(255,107,43,0.45)] hover:shadow-[0_8px_32px_rgba(255,107,43,0.6)] transition-all duration-300 ease-in-out"
      >
        <Phone size={20} className="shrink-0" />
        <span className="text-[13px] font-black uppercase tracking-wider whitespace-nowrap max-w-0 group-hover:max-w-[120px] overflow-hidden transition-all duration-300 ease-in-out">
          Call Now
        </span>
      </a>

    </div>
  );
}
