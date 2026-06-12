import { Home, Building2, Car, Warehouse, Package, Truck, LucideIcon } from "lucide-react";

export interface ServiceData {
  slug:         string;
  icon:         LucideIcon;
  label:        string;
  eyebrow:      string;
  accent:       string;
  image:        string;
  bannerImg:    string;
  tagline:      string;
  metaDesc:     string;
  intro:        string;
  included:     { title: string; desc: string }[];
  process:      { n: string; title: string; desc: string }[];
  faqs:         { q: string; a: string }[];
  stat:         { n: string; l: string };
  pricing:      { label: string; from: string }[];
  seoTags:      string[];
  serviceAreas: string[];
  seoBlocks:    { heading: string; body: string }[];
}

const serviceList: ServiceData[] = [
  {
    slug:      "home-shifting-services",
    icon:      Home,
    label:     "Home Shifting Services",
    eyebrow:   "Household Relocation",
    accent:    "#FF6B2B",
    image:     "/InnerServices/homeShifting.png",
    bannerImg: "/InnerServices/homeShifting.png",
    tagline:   "Complete Door-to-Door Home Relocation",
    metaDesc:  "Professional home shifting services in Chandigarh. Sai Baba Packers & Movers handles packing, loading, transport & unpacking for 1BHK to 5BHK moves across India.",
    intro:
      "Moving your home is one of the most significant events in your life. At Sai Baba Packers & Movers, our home shifting specialists manage every detail — from careful furniture disassembly and material-specific packaging to GPS-tracked transport, unloading, and room-by-room reassembly. We treat your belongings as our own.",
    included: [
      { title: "Furniture Disassembly & Reassembly",    desc: "Wardrobes, beds, dining sets, and modular furniture are carefully disassembled, padded, and fully reassembled at the new address." },
      { title: "Professional Packing Materials",        desc: "Bubble wrap, foam corner guards, stretch film, cell-divider cartons, and multi-layer box-in-box for fragile items." },
      { title: "Appliance Protection",                  desc: "Washing machines, refrigerators, ACs, and TVs are padded, strapped, and loaded upright to prevent mechanical damage." },
      { title: "Labelled Inventory List",               desc: "Every carton is numbered, labelled with contents and destination room, and entered on a master inventory sheet you keep." },
      { title: "GPS-Tracked Own Fleet",                 desc: "Our own vehicles are GPS-tracked. You get live updates so you always know where your household goods are." },
      { title: "Transit Insurance",                     desc: "All household goods are covered under comprehensive transit insurance — claims handled in-house, no third-party delays." },
    ],
    process: [
      { n: "01", title: "Book & Survey",          desc: "Call or fill the form. We schedule a free home survey (in-person or video) within 24 hours to assess volume and access." },
      { n: "02", title: "Packing Day",             desc: "Our crew arrives with all materials. Every item is packed, labelled, and loaded into our vehicle — typically in one day." },
      { n: "03", title: "Transit",                 desc: "GPS-tracked vehicle departs on the scheduled date. You get WhatsApp updates at each major checkpoint." },
      { n: "04", title: "Delivery & Unloading",   desc: "Goods are unloaded carefully. Heavy items are placed exactly where you point — no extra charges for floor access." },
      { n: "05", title: "Reassembly & Sign-off",  desc: "Furniture is reassembled, cartons placed in the correct rooms, and you sign off on the inventory checklist." },
    ],
    faqs: [
      { q: "How much does home shifting cost in Chandigarh?",         a: "Cost depends on the volume of goods, distance, and floor access. A 1BHK local shift typically starts from ₹4,000. We provide a free itemised quote before any commitment." },
      { q: "How many days in advance should I book?",                 a: "We recommend 3–5 days for local shifts and 7–10 days for intercity moves. However, we accommodate urgent bookings subject to availability." },
      { q: "Do you provide packing materials?",                       a: "Yes — all packing materials (bubble wrap, cartons, tape, foam) are included in the quote. You don't need to arrange anything." },
      { q: "Is transit insurance included?",                          a: "Yes, comprehensive transit insurance is included as standard for all home shifting orders." },
      { q: "Can you shift on weekends or holidays?",                  a: "Absolutely. We operate 7 days a week including Sundays and public holidays at no extra charge." },
    ],
    stat:    { n: "2,500+", l: "Homes Shifted" },
    pricing: [
      { label: "1 BHK Local (within city)",        from: "₹4,000" },
      { label: "2 BHK Local",                      from: "₹6,500" },
      { label: "3 BHK Local",                      from: "₹9,500" },
      { label: "1 BHK Intercity (up to 500km)",    from: "₹12,000" },
      { label: "2 BHK Intercity",                  from: "₹18,000" },
    ],
    seoTags: ["Home Shifting Chandigarh", "Household Relocation", "Packers Movers Chandigarh", "1BHK Shifting", "2BHK Shifting", "Intercity Home Shifting"],
    serviceAreas: ["Chandigarh", "Mohali", "Panchkula", "Zirakpur", "Delhi NCR", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Jaipur", "Lucknow", "Amritsar", "Ludhiana", "Jalandhar", "Ambala"],
    seoBlocks: [
      { heading: "Home Shifting in Chandigarh & Tricity",  body: "Sai Baba Packers & Movers is Chandigarh's most trusted home shifting company, covering Mohali, Panchkula, and Zirakpur. Whether you're moving a compact 1BHK or a full 5BHK, our trained crew handles every room — packing, loading, GPS-tracked transport, and reassembly at the new address." },
      { heading: "Intercity Home Shifting Across India",   body: "Our intercity home shifting connects Chandigarh to Delhi NCR, Mumbai, Bangalore, Hyderabad, Pune, and 50+ cities across India. All intercity moves include fixed-price quotes, a dedicated vehicle, and comprehensive transit insurance — no surprises on delivery day." },
      { heading: "1BHK to 5BHK — All Home Sizes Covered", body: "From a single-room studio to a 5BHK bungalow with antiques and modular kitchens, our home shifting team scales to every move. Right-sized vehicles, correct crew strength, and a dedicated relocation manager are assigned from the moment you book." },
    ],
  },

  {
    slug:      "office-relocation",
    icon:      Building2,
    label:     "Office Relocation",
    eyebrow:   "Commercial Moving",
    accent:    "#00B49C",
    image:     "/InnerServices/officeShifting.png",
    bannerImg: "/InnerServices/officeShifting.png",
    tagline:   "Zero-Downtime Commercial Relocation",
    metaDesc:  "Expert office relocation services in Chandigarh. Sai Baba Packers & Movers handles workstations, IT equipment & commercial furniture with zero business downtime.",
    intro:
      "Every hour of downtime costs your business money. Our commercial relocation specialists plan your office move around your schedule — weekend and after-hours shifts, IT equipment crating, labelled inventory, and same-day setup at the new premises. Your team walks in Monday morning ready to work.",
    included: [
      { title: "IT Equipment & Server Room Packing",  desc: "Servers, UPS units, networking gear, and desktop setups are individually crated and handled by IT-aware crew." },
      { title: "Workstation Disassembly & Setup",     desc: "Modular workstations, cabin partitions, and conference furniture are dismantled and reassembled floor-by-floor." },
      { title: "Photographic Asset Documentation",   desc: "Every item is photographed before packing and after placement — providing a full audit trail for your records." },
      { title: "Dedicated Relocation Manager",       desc: "A single point of contact coordinates with your office manager from survey to final sign-off." },
      { title: "After-Hours & Weekend Scheduling",   desc: "Moves are timed to avoid disrupting business hours — evening, overnight, and weekend slots at no extra charge." },
      { title: "Pan-India Coverage",                 desc: "We relocate offices from Chandigarh to Delhi, Mumbai, Bangalore, Hyderabad, and 50+ cities across India." },
    ],
    process: [
      { n: "01", title: "Site Survey",              desc: "We survey both locations, map the floor plan, and create a detailed move plan with timeline." },
      { n: "02", title: "IT Shutdown Coordination", desc: "We coordinate with your IT team for a safe shutdown, cable labelling, and pre-move server backup reminder." },
      { n: "03", title: "Overnight Packing",        desc: "Crew packs after office hours — workstations labelled by employee name and room for instant reassembly." },
      { n: "04", title: "Transport & Delivery",     desc: "Dedicated vehicle departs for the new address. Fragile IT equipment travels in shock-padded custom crates." },
      { n: "05", title: "Setup & Handover",         desc: "Furniture is reassembled, IT gear placed at assigned desks, and the move manager does a full handover walk." },
    ],
    faqs: [
      { q: "Can you relocate our office over a weekend?",             a: "Yes — weekend and after-hours moves are our specialty. Most office relocations are completed Friday evening to Sunday so operations resume Monday." },
      { q: "Do you handle server room and IT equipment?",             a: "Yes. Our IT-trained crew handles servers, UPS, networking racks, and desktop setups with anti-static packaging." },
      { q: "How is the move priced for offices?",                     a: "Office moves are priced based on the number of workstations, cabins, IT equipment, and distance. We provide a free itemised estimate after a site survey." },
      { q: "What if something gets damaged?",                         a: "All commercial moves are covered under our transit insurance policy. Damage claims are processed in-house within 7 working days." },
      { q: "Do you offer post-move setup services?",                  a: "Yes — our crew can assist with furniture arrangement, cable management, and basic IT placement as part of the relocation package." },
    ],
    stat:    { n: "500+", l: "Offices Relocated" },
    pricing: [
      { label: "Small Office (up to 10 seats)",    from: "₹15,000" },
      { label: "Medium Office (11–30 seats)",      from: "₹30,000" },
      { label: "Large Office (30+ seats)",         from: "Custom Quote" },
      { label: "Intercity Office Relocation",      from: "Custom Quote" },
    ],
    seoTags: ["Office Relocation Chandigarh", "Commercial Moving", "Office Shifting Chandigarh", "IT Equipment Moving", "Workstation Relocation"],
    serviceAreas: ["Chandigarh", "Mohali", "Panchkula", "Zirakpur", "Delhi NCR", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Chennai", "Kolkata", "Ahmedabad"],
    seoBlocks: [
      { heading: "Office Relocation in Chandigarh Tricity", body: "Sai Baba Packers & Movers specialises in commercial office relocation across Chandigarh, Mohali, and Panchkula. From 10-seat startups to 200-seat enterprises, our team creates a detailed move plan, manages IT equipment packing, and completes full setup before your staff walks in on Monday." },
      { heading: "Weekend & After-Hours Office Moves",      body: "Business continuity is our priority. All commercial moves are scheduled after office hours or over weekends so your operations face zero disruption. Our crew works overnight if needed — packing, transport, and workstation setup all done in a single window." },
      { heading: "IT Equipment & Server Room Relocation",   body: "Servers, UPS units, networking racks, and individual desktops are packed by IT-trained crew using anti-static materials and custom shock-padded crates. Every cable is labelled, and IT gear is placed at the correct desk at the new premises for instant startup." },
    ],
  },

  {
    slug:      "car-relocation-services",
    icon:      Car,
    label:     "Car Relocation Services",
    eyebrow:   "Vehicle Transport",
    accent:    "#FF6B2B",
    image:     "/InnerServices/carTransport.png",
    bannerImg: "/InnerServices/carTransport.png",
    tagline:   "Safe Car & Bike Transport Across India",
    metaDesc:  "Trusted car relocation services from Chandigarh. Enclosed carriers, zero odometer, transit insurance & inspection reports for cars and bikes across 50+ cities.",
    intro:
      "Your vehicle is a major asset — it deserves more than an open truck and a prayer. Our car relocation service uses enclosed carriers so your car or bike arrives exactly as it left: zero kilometres added, zero scratches, with a full condition inspection report at both ends. Serving 50+ cities across India.",
    included: [
      { title: "Enclosed Carrier Transport",        desc: "Vehicles travel inside a covered, weatherproof carrier — protected from road debris, rain, and UV damage." },
      { title: "Pre-Loading Condition Inspection",  desc: "Detailed photographic inspection of all panels, glass, tyres, and interiors before the car is loaded." },
      { title: "Zero Odometer Reading Added",       desc: "Your car is driven only from your parking spot to the carrier ramp — typically under 100 metres." },
      { title: "Custom Bike Cradles",               desc: "Two-wheelers are secured in custom metal cradles with rubber padding — no chain ties that scratch the frame." },
      { title: "Full Transit Insurance",            desc: "Comprehensive motor transit insurance covers accidental damage, fire, and theft during transport." },
      { title: "Delivery Inspection Report",        desc: "On delivery, a second condition inspection is done. Any discrepancy is noted and the insurance claim process is started immediately." },
    ],
    process: [
      { n: "01", title: "Booking & Inspection",     desc: "Book your slot. Our team arrives at your location for a pre-loading photographic condition inspection." },
      { n: "02", title: "Loading",                  desc: "Vehicle is driven onto the enclosed carrier ramp, positioned, and secured with wheel chocks and safety straps." },
      { n: "03", title: "Transit",                  desc: "Carrier departs on schedule. You receive the driver's contact number and live tracking updates via WhatsApp." },
      { n: "04", title: "Delivery",                 desc: "Carrier arrives at the destination city. Delivery to your door or the nearest accessible point." },
      { n: "05", title: "Handover Inspection",      desc: "Post-delivery condition inspection is completed. You sign off on the delivery report — vehicle is yours." },
    ],
    faqs: [
      { q: "How long does car transport from Chandigarh take?",       a: "Chandigarh to Delhi: 1–2 days. Chandigarh to Mumbai: 3–4 days. Chandigarh to Bangalore: 5–6 days. Exact timelines are provided at booking." },
      { q: "Is my car covered by insurance during transport?",        a: "Yes. All vehicles are covered under comprehensive transit insurance from pickup to delivery." },
      { q: "Will kilometres be added to my odometer?",               a: "We add only the metres needed to load and unload the vehicle. Your odometer reading is documented before and after." },
      { q: "Can you transport modified or luxury cars?",              a: "Yes. We have experience with lowered cars, sports cars, and luxury vehicles. The inspection process is more detailed for high-value vehicles." },
      { q: "Do you transport bikes and scooters?",                    a: "Yes — two-wheelers use custom cradles with rubber padding. We transport all types from scooters to superbikes." },
    ],
    stat:    { n: "1,200+", l: "Vehicles Transported" },
    pricing: [
      { label: "Chandigarh → Delhi NCR",    from: "₹5,000" },
      { label: "Chandigarh → Mumbai",       from: "₹12,000" },
      { label: "Chandigarh → Bangalore",    from: "₹15,000" },
      { label: "Chandigarh → Chennai",      from: "₹16,000" },
      { label: "Bike Transport",            from: "₹3,500" },
    ],
    seoTags: ["Car Relocation Chandigarh", "Vehicle Transport India", "Bike Transport Chandigarh", "Car Carrier Service", "Auto Transport Chandigarh"],
    serviceAreas: ["Delhi NCR", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Ahmedabad", "Kolkata", "Jaipur", "Lucknow", "Surat", "Kochi", "Nagpur", "Bhopal", "Indore"],
    seoBlocks: [
      { heading: "Car Transport from Chandigarh to All Metros", body: "We transport cars from Chandigarh to Delhi NCR (1–2 days), Mumbai (3–4 days), Bangalore (5–6 days), and all Indian metros. Every vehicle travels in an enclosed carrier — zero odometer reading added, zero exposure to road weather — with a full condition inspection report at pickup and delivery." },
      { heading: "Two-Wheeler & Bike Transport Chandigarh",     body: "Motorcycles, scooters, and superbikes are transported on custom metal cradles with rubber padding — no chain ties that scratch the frame. Our bike transport service from Chandigarh covers all major cities with full transit insurance and doorstep delivery." },
      { heading: "Luxury & Modified Car Relocation",            body: "We have experience transporting lowered cars, sports cars, vintage vehicles, and large SUVs. High-value vehicles receive a more detailed inspection, custom blocking inside the carrier, and direct contact with the transport supervisor throughout the journey." },
    ],
  },

  {
    slug:      "warehousing-services",
    icon:      Warehouse,
    label:     "Warehousing Services",
    eyebrow:   "Storage Solutions",
    accent:    "#00B49C",
    image:     "/InnerServices/whereHouse.png",
    bannerImg: "/InnerServices/whereHouse.png",
    tagline:   "Secure, Monitored Storage — 7 Days to 7 Months",
    metaDesc:  "Safe warehousing & storage services in Chandigarh. 24/7 CCTV, climate-controlled, pest-treated units. Short-term and long-term storage for households and businesses.",
    intro:
      "Waiting on possession? Relocating in phases? Need corporate inventory space? Our warehousing facility in Chandigarh offers 10,000+ sq. ft. of 24/7 CCTV-monitored, climate-controlled, and monthly pest-treated storage. Every item is logged in our digital inventory and retrievable on 24-hour notice.",
    included: [
      { title: "24/7 CCTV Monitoring",              desc: "All warehouse areas are under continuous HD CCTV surveillance with motion-sensor alarms and on-site security." },
      { title: "Climate-Controlled Units",           desc: "Temperature and humidity regulation prevents damage to wood, electronics, artwork, and delicate fabrics." },
      { title: "Monthly Pest Treatment",             desc: "Professional pest control is carried out monthly across all storage areas — guaranteed pest-free environment." },
      { title: "Digital Inventory System",           desc: "Every item is photographed, tagged, and entered into our digital inventory — you can request an item list anytime." },
      { title: "24-Hour Retrieval",                  desc: "Need something back? Give us 24 hours' notice and we'll have it ready for pickup or re-delivery." },
      { title: "Flexible Plans",                     desc: "Storage plans from 7 days to 7+ months. No forced long-term contracts — scale up or down as your needs change." },
    ],
    process: [
      { n: "01", title: "Book Space",               desc: "Tell us your estimated volume and duration. We recommend a unit size and provide a fixed monthly rate." },
      { n: "02", title: "Packing & Intake",         desc: "Our crew packs and labels your goods. Each item is photographed, tagged, and added to the digital inventory." },
      { n: "03", title: "Loading & Storage",        desc: "Goods are moved into your designated unit. The unit is sealed and your inventory PDF is emailed to you." },
      { n: "04", title: "While in Storage",         desc: "Monthly pest treatment, CCTV monitoring, and security checks happen automatically — no action needed from you." },
      { n: "05", title: "Retrieval",                desc: "Notify us 24 hours in advance. We prepare your goods for pickup, re-delivery, or onward shifting." },
    ],
    faqs: [
      { q: "What is the minimum storage period?",                     a: "Our minimum storage period is 7 days. We can also accommodate overnight storage for goods in transit." },
      { q: "Can I access my goods while in storage?",                 a: "Yes — with prior appointment during working hours. Your goods are accessible within 24 hours of notice." },
      { q: "Is there insurance for stored goods?",                    a: "Comprehensive storage insurance is included for all goods stored for 30 days or more. Shorter periods are available at a nominal add-on." },
      { q: "How do you handle delicate or valuable items?",           a: "High-value items (artwork, antiques, electronics) are stored in dedicated climate-controlled sections with additional padding and segregated placement." },
      { q: "What are your warehouse locations?",                      a: "Our primary warehouse is in Chandigarh. We also offer storage facilities in Delhi, Mumbai, and Bangalore for intercity moves." },
    ],
    stat:    { n: "10,000+", l: "sq. ft. Storage" },
    pricing: [
      { label: "1 BHK Goods (per month)",            from: "₹3,500" },
      { label: "2 BHK Goods (per month)",            from: "₹5,500" },
      { label: "3 BHK Goods (per month)",            from: "₹8,000" },
      { label: "Commercial Pallets (per pallet/mo)", from: "₹800" },
      { label: "Vehicle Storage (per month)",        from: "₹2,000" },
    ],
    seoTags: ["Warehousing Chandigarh", "Storage Services Chandigarh", "Short-term Storage", "Long-term Warehouse", "Household Storage Chandigarh"],
    serviceAreas: ["Chandigarh", "Mohali", "Panchkula", "Zirakpur", "Ambala", "Delhi", "Mumbai", "Bangalore"],
    seoBlocks: [
      { heading: "Short-Term & Long-Term Storage in Chandigarh", body: "Our Chandigarh warehousing facility offers flexible plans from 7-day short-term to 7-month long-term storage — ideal for households waiting on possession, businesses managing inventory overflow, and individuals relocating in phases. Fixed monthly rates with no lock-in contracts." },
      { heading: "Household Goods Storage Solutions",             body: "All household goods stored in our facility are individually tagged, photographed, and entered into a digital inventory. You receive a full inventory PDF and can request retrieval of any specific item within 24 hours — no need to collect everything at once." },
      { heading: "Commercial & Business Storage",                 body: "We offer pallet-based commercial storage for businesses needing overflow inventory space, document archiving, or seasonal stock management in Chandigarh. 24/7 CCTV monitoring, monthly pest treatment, and dedicated loading dock access for commercial clients." },
    ],
  },

  {
    slug:      "packaging-unpacking",
    icon:      Package,
    label:     "Packaging & Unpacking",
    eyebrow:   "Packing Services",
    accent:    "#FF6B2B",
    image:     "/InnerServices/packingUnpacking.png",
    bannerImg: "/InnerServices/packingUnpacking.png",
    tagline:   "Material-Specific Packing for Zero Damage",
    metaDesc:  "Expert packaging and unpacking services in Chandigarh. Bubble wrap, foam guards, anti-static packing, cell-divider cartons — all items inventoried and labelled.",
    intro:
      "Most damage during a move happens because of poor packing — not the drive. Our packing team uses the right material for every item: anti-static wrap for electronics, foam inserts for appliances, cell-divider cartons for crockery, and stretch film for upholstered furniture. Every box is labelled with contents and destination room — unpacking becomes effortless.",
    included: [
      { title: "Electronics & Appliance Packing",    desc: "Anti-static bubble wrap, foam inserts, and original-box-sized cartons protect TVs, laptops, and kitchen appliances." },
      { title: "Crockery & Glassware",               desc: "Cell-divider cartons with individual partitions prevent contact between glasses, plates, and fragile ceramics." },
      { title: "Furniture Wrapping",                 desc: "Sofas, mattresses, and chairs are wrapped in stretch film + moving blankets to prevent scratches and moisture." },
      { title: "Artwork & Antiques",                 desc: "Custom foam-lined wooden crates for artwork, mirrors, and antiques. Corner guards and double-wall cartons as standard." },
      { title: "Wardrobe & Linen Bags",              desc: "Clothes are hung in wardrobe boxes or packed in vacuum bags — no creasing, no moisture, no mixing." },
      { title: "Full Unpacking Service",             desc: "We unpack every carton, place items in the correct room, and remove all packing waste — leaving your home ready." },
    ],
    process: [
      { n: "01", title: "Pre-Pack Assessment",       desc: "We walk through your home and categorise items by fragility, size, and packing method required." },
      { n: "02", title: "Materials Arrival",         desc: "Our crew arrives with all packing materials — no need to source anything yourself." },
      { n: "03", title: "Systematic Packing",        desc: "Room by room, items are wrapped, cushioned, boxed, and labelled. Inventory is built in real time." },
      { n: "04", title: "Loading Ready",             desc: "All boxes are stacked by room and by fragility — fragile cartons always on top, clearly marked." },
      { n: "05", title: "Unpacking at Destination",  desc: "We unpack cartons, place items room by room, assemble folded furniture, and remove all waste." },
    ],
    faqs: [
      { q: "Do you supply all packing materials?",                    a: "Yes — all materials (bubble wrap, cartons, tape, foam, cell dividers, wardrobe boxes) are included in the packing service quote." },
      { q: "Can I get just packing without transport?",               a: "Yes. We offer standalone packing and unpacking services if you have arranged your own transport." },
      { q: "How long does packing take for a 2BHK?",                  a: "A 2BHK typically takes 4–6 hours with a team of 3–4 packers. We can do it in a single day." },
      { q: "What about delicate items like paintings and antiques?",  a: "We use custom foam-lined crates for high-value items. Let us know during booking so we bring the right materials." },
      { q: "Can I pack some boxes myself?",                           a: "Yes — we can pack only the items you prefer and focus on fragile or difficult items. Just let us know your preference." },
    ],
    stat:    { n: "100%", l: "Damage-Free Record" },
    pricing: [
      { label: "1 BHK (packing only)",               from: "₹2,500" },
      { label: "2 BHK (packing only)",               from: "₹4,000" },
      { label: "3 BHK (packing only)",               from: "₹6,000" },
      { label: "Unpacking Service (any size)",        from: "₹1,500" },
      { label: "Full Pack + Unpack (2BHK)",           from: "₹5,000" },
    ],
    seoTags: ["Packaging Services Chandigarh", "Unpacking Service", "Professional Packing Chandigarh", "Moving Boxes Chandigarh", "Packing Materials"],
    serviceAreas: ["Chandigarh", "Mohali", "Panchkula", "Zirakpur", "Ambala", "Ludhiana", "Jalandhar", "Amritsar", "Delhi", "Panipat"],
    seoBlocks: [
      { heading: "Professional Packing Services in Chandigarh", body: "Our packing team serves Chandigarh, Mohali, Panchkula, and the broader Punjab region. We bring all materials — bubble wrap, foam inserts, cell-divider cartons, wardrobe boxes, and stretch film — and complete a full 2BHK pack in a single day with a team of 3–4 trained packers." },
      { heading: "Fragile & High-Value Item Packing",           body: "Artwork, antiques, mirrors, crystal, and vintage items require more than standard bubble wrap. Our fragile-specialist team uses custom foam-lined wooden crates, double-wall cartons, and corner guards. Every fragile item is photographed before and after packing — full documentation for your records." },
      { heading: "Standalone Packing — Without Transport",      body: "Need professional packing but have your own vehicle or rental truck? We provide standalone packing-only and unpacking-only services. Our crew arrives, packs every item with all materials included, builds the inventory list, and hands over ready-to-load labelled cartons." },
    ],
  },

  {
    slug:      "loading-unloading",
    icon:      Truck,
    label:     "Loading & Unloading",
    eyebrow:   "Labour Services",
    accent:    "#00B49C",
    image:     "/InnerServices/loadingUnloading.png",
    bannerImg: "/InnerServices/loadingUnloading.png",
    tagline:   "Safe, Scratch-Free Heavy Lifting",
    metaDesc:  "Professional loading and unloading services in Chandigarh. Hydraulic trolleys, floor runners, background-checked labour — standalone or as part of a full move.",
    intro:
      "The loading and unloading stage is where most property damage happens — scratched floors, dented door frames, and dropped appliances. Our crew uses hydraulic trolleys, padded floor runners, and door-frame guards to protect both your belongings and the property. Every item is strapped inside the vehicle before departure.",
    included: [
      { title: "Hydraulic Trolleys & Dollies",        desc: "Heavy appliances (fridges, washing machines, safes) are moved on hydraulic trolleys — no dragging, no tipping." },
      { title: "Padded Floor Runners",                desc: "Anti-scratch floor runners protect marble, hardwood, and tile floors throughout the loading path." },
      { title: "Door-Frame & Wall Guards",            desc: "Foam door-frame guards and corner protectors prevent chips and paint damage in corridors and lifts." },
      { title: "Vehicle Securing & Strapping",        desc: "Every item is secured inside the vehicle with ratchet straps and load bars — nothing moves in transit." },
      { title: "Staircase & Lift Specialists",        desc: "We have handled 10th-floor moves without lifts. Our staircase crew uses shoulder straps and controlled descent equipment." },
      { title: "Standalone Labour Hire",              desc: "Need only loading or unloading labour for your own vehicle or rental truck? We provide the crew standalone." },
    ],
    process: [
      { n: "01", title: "Site Assessment",            desc: "We assess lift access, staircase width, floor type, and parking to plan the safest loading route." },
      { n: "02", title: "Protection Setup",           desc: "Floor runners are laid, door guards installed, and lift padding put in place before any item moves." },
      { n: "03", title: "Systematic Loading",         desc: "Heavy items first, fragile items last. Each piece is carried, placed, and strapped in a planned order." },
      { n: "04", title: "Securing for Transit",       desc: "Once loaded, ratchet straps and load bars are applied so nothing shifts during the drive." },
      { n: "05", title: "Unloading & Placement",      desc: "Items are unloaded in reverse order and placed in the exact room you direct — no abandonment at the doorstep." },
    ],
    faqs: [
      { q: "Can I hire just loading labour without transport?",       a: "Yes. We provide standalone loading and unloading crews by the hour for self-arranged transport or rental trucks." },
      { q: "Do you handle high-rise buildings without lifts?",        a: "Yes — we have specialist staircase crews trained for multi-floor moves without lift access, including rope & pulley for balcony moves." },
      { q: "How is loading labour priced?",                           a: "Priced by number of crew members, hours, and floor access complexity. We provide a fixed quote after a site assessment." },
      { q: "Are the labourers background-checked?",                   a: "Yes. All our loading and unloading crew members are background-verified, ID-checked, and trained in safe handling techniques." },
      { q: "What happens if something gets damaged during loading?",  a: "Any accidental damage during our loading or unloading service is covered under our liability policy and resolved within 7 working days." },
    ],
    stat:    { n: "0", l: "Property Damage Claims" },
    pricing: [
      { label: "Local Loading (2 crew, 2 hrs)",           from: "₹1,500" },
      { label: "Local Unloading (2 crew, 2 hrs)",         from: "₹1,500" },
      { label: "Full Day Labour (4 crew)",                from: "₹5,000" },
      { label: "Staircase Premium (per floor)",           from: "₹200" },
      { label: "Standalone Labour Hire (per person/hr)",  from: "₹300" },
    ],
    seoTags: ["Loading Unloading Services Chandigarh", "Labour for Moving Chandigarh", "Packers Loaders Chandigarh", "Furniture Moving Labour", "Unloading Service"],
    serviceAreas: ["Chandigarh", "Mohali", "Panchkula", "Zirakpur", "Ambala", "Ludhiana", "Jalandhar", "Amritsar", "Delhi", "Karnal"],
    seoBlocks: [
      { heading: "Professional Loading Labour in Chandigarh",    body: "Our loading and unloading crew serves Chandigarh, Mohali, Panchkula, and all tricity areas. All labourers are background-verified, ID-checked, and trained in safe furniture and appliance handling. Hydraulic trolleys, padded floor runners, and door-frame guards come as standard on every job." },
      { heading: "High-Rise & Staircase Moving Specialists",     body: "Lifts too small? No lift at all? Our staircase specialist crew handles multi-floor moves without lift access using shoulder straps, furniture sliders, and controlled-descent equipment. We have completed 10th-floor moves without a lift — including sofas, refrigerators, and washing machines." },
      { heading: "Standalone Labour Hire for Self-Movers",       body: "Already have a rental truck or your own vehicle? Hire our trained loading and unloading crew on an hourly basis. We provide the manpower, trolleys, and strapping equipment — you manage the transport. Ideal for local moves, office clearances, and warehouse transfers in Chandigarh and nearby cities." },
    ],
  },
];

export default serviceList;

export function getService(slug: string): ServiceData | undefined {
  return serviceList.find((s) => s.slug === slug);
}
