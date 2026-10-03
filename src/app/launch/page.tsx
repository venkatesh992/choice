import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";
import CtaBlock from "@/components/CtaBlock";
import { 
  Rocket, 
  Palette, 
  Globe, 
  Share2, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  Mail,
  XCircle
} from "lucide-react";

export const metadata = {
  title: "Turnkey Brand Launch | 100% Done-For-You Digital Setup | Choice Web Solutions",
  description: "From logo identity and business email to custom websites, mobile apps, social media setup, and payment gateways. We handle every single digital step so you can focus on running your business.",
};

const bundlePhases = [
  {
    step: "01",
    tag: "Phase 01 — Identity",
    tagDot: "bg-[#757C54]",
    title: "Brand Identity",
    desc: "An authoritative visual identity, vector logo suite, typography rules, corporate stationery, and design tokens that immediately position your company as a serious market leader.",
    bgColor: "bg-gradient-to-br from-[#F7F8F2] via-[#F1F3E9] to-[#E8EBDC]",
    icon: Palette,
    graphic: (
      <div className="absolute right-[-15%] top-[10%] w-[320px] h-[120%] pointer-events-none transition-transform duration-700 group-hover:scale-105 opacity-90">
        <svg viewBox="0 0 300 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="120" r="90" fill="url(#gradOlive1)" fillOpacity="0.45" />
          <rect x="110" y="160" width="130" height="130" rx="36" fill="url(#gradOlive2)" fillOpacity="0.5" transform="rotate(25 110 160)" />
          <path d="M140 280 Q210 220 250 320" stroke="#757C54" strokeWidth="4" strokeDasharray="8 8" opacity="0.4" />
          <circle cx="170" cy="290" r="45" fill="#757C54" fillOpacity="0.2" />
          <defs>
            <linearGradient id="gradOlive1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#757C54" />
              <stop offset="100%" stopColor="#A4AC7E" />
            </linearGradient>
            <linearGradient id="gradOlive2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8C9467" />
              <stop offset="100%" stopColor="#5B6141" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
    deliverables: [
      "Vector Logo Suite (Primary, Monogram, Favicon)",
      "Typography Scale & Curated Color Palettes",
      "Social Media Kit (Avatars, Covers & Banners)",
      "Corporate Stationery & Email Signatures",
      "Brand Guidelines & Asset Export"
    ]
  },
  {
    step: "02",
    tag: "Phase 02 — Infrastructure",
    tagDot: "bg-sky-600",
    title: "Domain & Email",
    desc: "Your entire technical foundation configured with enterprise security, Google Workspace business emails, DNS, and anti-spam authentication.",
    bgColor: "bg-gradient-to-br from-[#F0F6FA] via-[#E8F1F8] to-[#DFEDF7]",
    icon: Mail,
    graphic: (
      <div className="absolute right-[-10%] top-[-5%] w-64 h-full pointer-events-none transition-transform duration-700 group-hover:scale-105 opacity-85">
        <svg viewBox="0 0 240 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="170" cy="90" r="75" fill="url(#skyGrad1)" fillOpacity="0.35" />
          <rect x="70" y="60" width="100" height="70" rx="20" fill="url(#skyGrad2)" fillOpacity="0.4" transform="rotate(-15 70 60)" />
          <circle cx="130" cy="150" r="35" fill="#0284C7" fillOpacity="0.2" />
          <defs>
            <linearGradient id="skyGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="skyGrad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#BAE6FD" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
    deliverables: [
      "Domain Registration & DNS Management",
      "Google Workspace / M365 Business Emails",
      "DKIM, SPF & DMARC Anti-Spam Setup",
      "Cloudflare CDN & SSL/TLS Encryption",
      "Full Credential & Access Handover"
    ]
  },
  {
    step: "03",
    tag: "Phase 03 — Core Product",
    tagDot: "bg-indigo-600",
    title: "Website or App",
    desc: "A lightning-fast, high-converting digital product engineered with modern Next.js or React Native. Self-hostable with full Git repository access.",
    bgColor: "bg-gradient-to-br from-[#F5F3FF] via-[#EFEBFD] to-[#E6E0FA]",
    icon: Globe,
    graphic: (
      <div className="absolute right-[-10%] top-[-10%] w-72 h-full pointer-events-none transition-transform duration-700 group-hover:scale-105 opacity-85">
        <svg viewBox="0 0 260 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="90" y="40" width="110" height="110" rx="30" fill="url(#indigoGrad1)" fillOpacity="0.35" transform="rotate(18 90 40)" />
          <circle cx="180" cy="150" r="60" fill="url(#indigoGrad2)" fillOpacity="0.4" />
          <rect x="130" y="120" width="70" height="70" rx="20" fill="#6366F1" fillOpacity="0.2" transform="rotate(-10 130 120)" />
          <defs>
            <linearGradient id="indigoGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
            <linearGradient id="indigoGrad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C7D2FE" />
              <stop offset="100%" stopColor="#4338CA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
    deliverables: [
      "Custom Website or Mobile Application",
      "Sub-Second Page Load Speeds (98+ Lighthouse)",
      "Conversion-Optimized Lead Funnels",
      "Mobile-First Responsive Across All Screens",
      "Self-Hostable with Full Git Repository Access"
    ]
  },
  {
    step: "04",
    tag: "Phase 04 — Presence",
    tagDot: "bg-emerald-600",
    title: "Social & Local SEO",
    desc: "Official business account setup, branding, bio copywriting, and Google Business Profile/Maps verification across every major touchpoint.",
    bgColor: "bg-gradient-to-br from-[#F0FDF4] via-[#E7F9ED] to-[#DBF4E4]",
    icon: Share2,
    graphic: (
      <div className="absolute right-[-10%] top-[-5%] w-64 h-full pointer-events-none transition-transform duration-700 group-hover:scale-105 opacity-85">
        <svg viewBox="0 0 240 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="160" cy="80" r="70" fill="url(#emeraldGrad1)" fillOpacity="0.35" />
          <rect x="80" y="90" width="90" height="90" rx="26" fill="url(#emeraldGrad2)" fillOpacity="0.35" transform="rotate(30 80 90)" />
          <circle cx="140" cy="160" r="40" fill="#059669" fillOpacity="0.2" />
          <defs>
            <linearGradient id="emeraldGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="emeraldGrad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A7F3D0" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
    deliverables: [
      "Google Business Profile / Maps Local SEO",
      "LinkedIn Company & Founder Profile Setup",
      "Instagram & Facebook Business Suite",
      "X (Twitter) & YouTube Channel Branding",
      "Cohesive Bio Copywriting & Brand Positioning"
    ]
  },
  {
    step: "05",
    tag: "Phase 05 — Monetization",
    tagDot: "bg-amber-600",
    title: "Billing & Analytics",
    desc: "Razorpay/Stripe payment gateway activation, automated GST invoicing, and Google Analytics 4 tracking so you can bill clients on Day 1.",
    bgColor: "bg-gradient-to-br from-[#FFFBEB] via-[#FEF6D8] to-[#FCEEC2]",
    icon: CreditCard,
    graphic: (
      <div className="absolute right-[-10%] bottom-[-10%] w-72 h-full pointer-events-none transition-transform duration-700 group-hover:scale-105 opacity-85">
        <svg viewBox="0 0 260 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="170" cy="160" r="80" fill="url(#amberGrad1)" fillOpacity="0.35" />
          <rect x="90" y="70" width="100" height="80" rx="24" fill="url(#amberGrad2)" fillOpacity="0.4" transform="rotate(-15 90 70)" />
          <circle cx="110" cy="150" r="40" fill="#D97706" fillOpacity="0.2" />
          <defs>
            <linearGradient id="amberGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="amberGrad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
    deliverables: [
      "Payment Gateway Setup (Razorpay / Stripe)",
      "Automated Invoicing & GST-Ready Receipts",
      "Google Analytics 4 & Search Console Indexing",
      "Meta Pixel & Conversion Telemetry",
      "WhatsApp Direct Chat Widget Integration"
    ]
  }
];

const comparisonPoints = [
  {
    feature: "Management Overhead",
    diy: "You must juggle 4-5 different freelancers (designer, coder, SEO person, email admin).",
    choice: "Single senior engineering team handles 100% of execution. Zero coordination hassle."
  },
  {
    feature: "Brand & Code Consistency",
    diy: "Disjointed styles, mismatched logos, and fragile codebases stitched from templates.",
    choice: "One unified design system and clean, modular codebase engineered to scale."
  },
  {
    feature: "Launch Timeline",
    diy: "Frequently drags on for 3 to 6 months due to communication bottlenecks.",
    choice: "Turnkey delivery in 14 to 21 business days with bi-weekly live staging sprints."
  },
  {
    feature: "Account Ownership",
    diy: "Freelancers often register domains or tools under their personal accounts.",
    choice: "100% of accounts, DNS, codes, and credentials handed directly to you."
  }
];

export default function LaunchPage() {
  return (
    <div className="px-4 pt-6 md:pt-12 pb-4 md:pb-6 max-w-[1400px] mx-auto min-h-screen">
      
      {/* Hero Section: 2-Column Design Inspired by Reference */}
      <FadeIn>
        <div className="mb-14 pt-4 md:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Big High-Impact Headline */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-slate-900 tracking-tight leading-[1.06] mb-2">
                Your brand launch, <br />
                <span className="text-[#757C54]">reinvented by Choice.</span>
              </h1>
            </div>

            {/* Right Column: Explanatory paragraph + side-by-side action pills */}
            <div className="lg:col-span-5 flex flex-col justify-center lg:pl-4">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                Choice transforms scattered digital setup into seamless execution. We build custom websites, mobile apps, brand identities, and payment infrastructure—eliminating bottlenecks and launching your brand in days.
              </p>

              {/* Action Buttons: Primary (#757C54) and Secondary (#252D00) */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Link 
                  href="/contact" 
                  className="px-6 py-3.5 bg-[#757C54] hover:bg-[#5B6141] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-full transition-all shadow-md hover:shadow-lg shadow-[#757C54]/25 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Discuss Your Build</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <a 
                  href="#deliverables" 
                  className="px-6 py-3.5 bg-[#252D00] hover:bg-[#151A00] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-full transition-all shadow-sm hover:shadow flex items-center justify-center cursor-pointer"
                >
                  <span>See How It Works</span>
                </a>
              </div>
            </div>

          </div>

          {/* Quick Metrics / Trust Strip below 2-col hero */}
          <div className="mt-10 pt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4 text-slate-500 text-xs font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span>100% Done-For-You</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span>14-21 Day Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span>Zero Tech Lock-In</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span>Full Credential Handover</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* The 5 Phases: 3x2 Grid with Col 1 spanning 2 full rows */}
      <div id="deliverables" className="mb-14 scroll-mt-24">
        <FadeIn>
          <div className="mb-10 md:mb-12">
            <div className="flex gap-2 items-center mb-6">
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-500 shadow-sm">
                Deliverables & Phases
              </span>
            </div>
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 leading-tight max-w-2xl mb-4">
              Everything your company needs on day one.
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
              No missing links, no hidden third-party fees, and zero tech lock-in. Hover or tap any phase to inspect the exact deliverables.
            </p>
          </div>
        </FadeIn>

        {/* 3 Columns x 2 Rows Grid: 1st Col spans row 1 & row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {bundlePhases.map((phase, idx) => {
            const Icon = phase.icon;
            const isFirstColTall = idx === 0;

            return (
              <FadeIn 
                key={phase.step} 
                delay={idx * 0.08} 
                className={`${isFirstColTall ? "lg:col-span-1 lg:row-span-2" : "lg:col-span-1"} flex`}
              >
                <div 
                  tabIndex={0}
                  className={`w-full ${phase.bgColor} border border-slate-200/60 shadow-sm hover:shadow-xl rounded-[32px] p-6 md:p-7 relative overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 focus:outline-none ${
                    isFirstColTall ? "min-h-[420px] lg:min-h-[640px]" : "min-h-[290px] lg:min-h-[305px]"
                  }`}
                >
                  
                  {/* Graphic Vector Layer (z-0) with unique SVG artwork */}
                  {phase.graphic}

                  {/* Top Status Pill & Icon (z-10) */}
                  <div className="relative z-10 flex items-center justify-between mb-auto">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/80 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 shadow-sm border border-white/60">
                      <div className={`w-2 h-2 rounded-full ${phase.tagDot}`}></div>
                      {phase.tag}
                    </div>

                    <div className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center text-slate-800 shadow-sm border border-white/60">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Default Content: Title & Description */}
                  <div className="relative z-10 mt-auto transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none group-focus:opacity-0 group-focus:pointer-events-none group-focus-within:opacity-0 group-focus-within:pointer-events-none">
                    <h2 className={`font-bold text-slate-900 mb-2.5 tracking-tight leading-tight ${isFirstColTall ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                      {phase.title}
                    </h2>
                    <p className={`text-slate-700 leading-relaxed font-medium mb-5 ${isFirstColTall ? "text-sm md:text-base max-w-sm" : "text-xs max-w-xs"}`}>
                      {phase.desc}
                    </p>
                    
                    {/* Deliverables Peek Trigger Icon */}
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white shadow-sm transition-all duration-300 group-hover:scale-110">
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Hover & Tap Overlay: Revealing deliverables list */}
                  <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-xl p-6 md:p-7 flex flex-col justify-between opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus:opacity-100 group-focus:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 group-focus:translate-y-0 group-focus-within:translate-y-0 rounded-[32px] border border-slate-200 shadow-2xl">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                          <Icon size={16} className="text-[#757C54]" />
                          <span>{phase.title}</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-[#757C54]/10 text-[#757C54] px-2.5 py-0.5 rounded-full">
                          100% Done-For-You
                        </span>
                      </div>

                      <div className={`space-y-2.5 pt-1 ${isFirstColTall ? "space-y-3 pt-2" : ""}`}>
                        {phase.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm font-semibold text-slate-800 leading-snug">
                            <CheckCircle2 size={15} className="text-[#757C54] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-end text-xs font-bold text-slate-500">
                      <Link href="/contact" className="text-[#757C54] hover:underline flex items-center gap-1 font-bold">
                        Discuss this phase <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* Comparison: Freelancers vs Choice Web Solutions */}
      <div className="mb-14">
        <FadeIn>
          <div className="mb-10 md:mb-12">
            <div className="flex gap-2 items-center mb-6">
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-500 shadow-sm">
                Execution Model
              </span>
            </div>
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 leading-tight max-w-2xl mb-4">
              Stop juggling freelancers. One unified engineering partner.
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
              Why coordinate between 4 to 5 different contractors when Choice handles 100% of the architecture, design, and deployment?
            </p>
          </div>
        </FadeIn>

        {/* Redesigned 2-Column Layout: Editorial Poster in Secondary (#252D00) + Stacked Cards in Primary (#757C54) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Bold Editorial Poster Card in Secondary Brand Color (#252D00) */}
          <FadeIn delay={0.1} className="lg:col-span-4 flex">
            <div className="w-full bg-[#252D00] text-white rounded-[32px] p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[460px] border border-[#757C54]/30">
              
              {/* Subtle brand glow in primary (#757C54) */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#757C54]/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#151A00]/80 rounded-full blur-3xl pointer-events-none" />
              
              {/* Top Brand Logo / Wordmark */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase font-sans">
                  CHOICE
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8EBDC] bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                  Turnkey
                </span>
              </div>

              {/* Center Decorative Statement */}
              <div className="relative z-10 my-auto py-10">
                <div className="w-12 h-1 bg-[#757C54] rounded-full mb-4"></div>
                <h3 className="text-2xl md:text-3xl font-extrabold leading-snug tracking-tight text-white">
                  Engineered to eliminate <br />
                  <span className="text-[#A4AC7E] font-medium">all contractor friction.</span>
                </h3>
                <p className="text-xs text-[#E8EBDC]/80 mt-3 leading-relaxed max-w-xs">
                  One senior architecture team. Zero freelance handoff delays. 100% full credential handover.
                </p>
              </div>

              {/* Bottom Metadata & Proven Execution Badge */}
              <div className="relative z-10 pt-6 border-t border-white/15">
                <div className="text-base font-bold text-white tracking-wide">
                  Proven Execution Model
                </div>
              </div>

            </div>
          </FadeIn>

          {/* Right Column: 4 Stacked Comparison Cards with Primary (#757C54) Numbers */}
          <div className="lg:col-span-8 flex flex-col gap-4 justify-between">
            {comparisonPoints.map((item, idx) => {
              const num = `0${idx + 1}`;
              return (
                <FadeIn key={idx} delay={0.1 + idx * 0.08} className="w-full">
                  <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-[#757C54]/20 shadow-[0_4px_20px_rgba(37,45,0,0.04)] hover:shadow-xl hover:border-[#757C54]/40 transition-all duration-300 relative overflow-hidden group flex items-center">
                    
                    {/* Ghost Giant Number tinted with brand primary (#757C54) */}
                    <span className="text-5xl sm:text-6xl md:text-7xl font-black text-[#757C54]/20 group-hover:text-[#757C54]/35 transition-colors select-none tracking-tighter w-16 sm:w-24 shrink-0 font-sans leading-none pl-1">
                      {num}
                    </span>

                    {/* Content Block */}
                    <div className="space-y-1.5 pl-3 sm:pl-6 border-l border-slate-100 flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        {item.feature}
                      </h4>

                      {/* The Choice Solution */}
                      <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                        {item.choice}
                      </p>
                    </div>

                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </div>

      {/* 4-Step Process Strip */}
      <div className="mb-12 bg-slate-50 rounded-[28px] p-6 md:p-8 border border-slate-200/70">
        <FadeIn>
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">How We Go From Vision to Live</h3>
            <p className="text-slate-500 text-xs md:text-sm mt-2">Smooth, transparent, milestone-driven execution.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Discovery Call", desc: "A 30-min strategy session where we map your business model, target audience, and feature goals." },
              { num: "02", title: "Identity & Wireframes", desc: "We present your brand kit, color system, and user experience layouts for early approval." },
              { num: "03", title: "Build & Configuration", desc: "Our team codes your web/app, provisions your business emails, and configures all social channels." },
              { num: "04", title: "Handover & Launch", desc: "You receive full admin rights, credential manifests, and live production deployment on your own domain." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm space-y-2">
                <div className="text-2xl font-black text-[#757C54]">{step.num}</div>
                <h4 className="text-base font-bold text-slate-900">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Global CTA Block */}
      <CtaBlock />

    </div>
  );
}
