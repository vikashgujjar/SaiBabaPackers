import { Star } from "lucide-react";

const testimonials = [
  {
    text: "I work in a service industry too and I can stamp with guarantee that your company is the best. The loaders along with supervisors are assets to your company. You have got a customer for life.",
    name: "Ramesh Singh",
    role: "Home Relocation",
    initial: "R",
    rating: 5,
    location: "Chandigarh → Delhi",
  },
  {
    text: "The employees of Sai Baba Packers are extremely skilled and courteous. My vehicle was transported well before schedule. Highly recommended for vehicle shifting across states.",
    name: "Mohan Verma",
    role: "Car Relocation",
    initial: "M",
    rating: 5,
    location: "Chandigarh → Mumbai",
  },
  {
    text: "The shifting team was very professional and punctual. All our delicate furniture and glassware was wrapped carefully. Not a single scratch. Exceptional packing standards.",
    name: "Priya Sharma",
    role: "Office Relocation",
    initial: "P",
    rating: 5,
    location: "Delhi → Pune",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F7F4EE] py-20 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FF6B2B]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div>
            <span className="block text-[10px] font-black text-[#00B49C] uppercase tracking-[3px] mb-2">Customer Stories</span>
            <h2 className="text-[36px] lg:text-[50px] font-black text-[#1a1a2e] uppercase leading-[0.95] tracking-tight">
              What Our<br /><span className="text-[#FF6B2B]">Clients Say</span>
            </h2>
          </div>
          <div className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl px-5 py-3 shadow-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="#FF6B2B" className="text-[#FF6B2B]" />
              ))}
            </div>
            <div>
              <div className="text-[13px] font-black text-[#1a1a2e] leading-none">4.9 / 5.0</div>
              <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">2,500+ Moves</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group bg-white rounded-2xl p-7 border border-gray-100 hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden ${i === 1 ? "md:-translate-y-3" : ""}`}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF6B2B] to-[#00B49C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} fill="#FF6B2B" className="text-[#FF6B2B]" />
                ))}
              </div>

              <p className="text-gray-600 text-[14px] leading-relaxed italic flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between border-t border-gray-100 pt-5 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1a1a2e] flex items-center justify-center text-white font-black text-[14px] shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-black text-[#1a1a2e] text-[13.5px] leading-none mb-1">{t.name}</div>
                    <div className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">{t.role}</div>
                  </div>
                </div>
                <div className="text-[9.5px] font-bold text-[#00B49C] uppercase tracking-wider whitespace-nowrap">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}