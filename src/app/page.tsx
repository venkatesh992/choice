import { ArrowRight, ChevronRight, CheckCircle2, TrendingUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import CtaBlock from "@/components/CtaBlock";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <FadeIn direction="up" effect="blur">
        <section className="px-4 py-4 md:py-6 md:px-8 max-w-[1400px] mx-auto">
          <div className="relative w-full min-h-[520px] md:h-[600px] rounded-[32px] overflow-hidden bg-slate-200 flex items-center p-4 sm:p-6 md:p-12">
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Office workspace"
              fill
              className="object-cover"
              priority
            />
            
            {/* Overlaid Card - Fluid on mobile, fixed max-w on desktop */}
            <div className="relative z-10 w-full max-w-lg bg-[#F8FAFC]/95 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-[28px] shadow-sm border border-white/60">
              <h1 className="text-3xl sm:text-4xl md:text-[44px] leading-[1.15] font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
                Enterprise Web & Mobile Engineering. <br className="hidden sm:inline" /> All in one place.
              </h1>
              <p className="text-slate-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                We bridge the gap between business objectives and clean, maintainable engineering. From concept to deployment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="px-7 py-3.5 bg-[#757C54] text-white text-sm font-bold shadow-md hover:shadow-lg rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                  Start your project <ArrowRight size={16} />
                </Link>
              </div>
              
              <div className="mt-6 md:mt-8 flex flex-wrap gap-2 sm:gap-4 bg-white p-2.5 sm:p-3 rounded-2xl shadow-sm border border-slate-100">
                 <div className="flex items-center gap-2 text-xs font-semibold px-1 sm:px-2">
                   <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0"><CheckCircle2 size={12}/></div>
                   <span>Zero Tech Lock-in</span>
                 </div>
                 <div className="flex items-center gap-2 text-xs font-semibold px-1 sm:px-2 border-t sm:border-t-0 sm:border-l border-slate-100 w-full sm:w-auto pt-1 sm:pt-0">
                   <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0"><CheckCircle2 size={12}/></div>
                   <span>Self-Hostable Architecture</span>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Trusted By (Logo Ticker) */}
      <section className="px-4 py-12 md:px-8 max-w-[1400px] mx-auto border-b border-slate-100">
        <FadeIn delay={0.2}>
          <p className="text-center text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">Trusted by scaling enterprises</p>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale">
            {/* Placeholder typographic logos for premium feel */}
            <h3 className="text-2xl font-black font-serif tracking-tighter">Vanguard</h3>
            <h3 className="text-2xl font-black tracking-widest uppercase">Nexus</h3>
            <h3 className="text-2xl font-extrabold italic tracking-tight">Aura Systems</h3>
            <h3 className="text-2xl font-bold font-mono">Lumina</h3>
            <h3 className="text-2xl font-bold tracking-widest">ORION</h3>
          </div>
        </FadeIn>
      </section>

      {/* Bento & Stats Section */}
      <section className="px-4 py-16 md:px-8 max-w-[1400px] mx-auto">
        <FadeIn delay={0.1}>
          <div className="flex gap-2 items-center mb-6">
             <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-500">Capabilities</span>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Dark Card */}
          <FadeIn delay={0.2} direction="up" effect="spring" className="lg:col-span-4 flex">
            <div className="w-full bg-[#252D00] rounded-[32px] p-10 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4 leading-tight">Scalable<br/>Architecture</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Every project is built on modular codebases using TypeScript, componentized UI design systems, and resilient database schemas designed for long-term maintainability.
                </p>
              </div>
              <Link href="/services" className="text-sm font-bold text-white flex items-center gap-1 hover:opacity-80 transition-opacity">
                Read more <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>

          {/* Blue Card */}
          <FadeIn delay={0.3} direction="up" effect="spring" className="lg:col-span-4 flex">
            <div className="w-full bg-blue-600 rounded-[32px] p-10 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4 leading-tight">Business-First<br/>Mindset</h2>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  We do not build technology for its own sake. We optimize user funnels, reduce bounce rates, secure sensitive data, and streamline operational workflows for direct ROI.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Stats Grid */}
          <FadeIn delay={0.4} direction="up" effect="spring" className="lg:col-span-4 flex">
            <div className="w-full bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm flex flex-col justify-center">
              <h3 className="text-4xl font-bold text-slate-900 mb-6">5+ Years</h3>
              <p className="text-sm text-slate-500 mb-8 border-b border-slate-100 pb-6">
                Delivering robust web applications and high-throughput platforms.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">Completed Builds</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-blue-600"></div><div className="w-2 h-2 rounded-full bg-blue-600"></div><div className="w-2 h-2 rounded-full bg-blue-600"></div><div className="w-2 h-2 rounded-full bg-blue-600"></div></div>
                    <span className="text-sm font-bold w-8 text-right">85+</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">Uptime Reliability</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500"></div><div className="w-2 h-2 rounded-full bg-emerald-500"></div><div className="w-2 h-2 rounded-full bg-emerald-500"></div><div className="w-2 h-2 rounded-full bg-slate-200"></div></div>
                    <span className="text-sm font-bold w-12 text-right">99.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 4 Numbers Row */}
        <FadeIn delay={0.5}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 mt-8 text-center border-b border-slate-200">
             <div>
               <div className="text-3xl md:text-[40px] font-bold text-slate-900 mb-2">85+</div>
               <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Completed Builds</div>
             </div>
             <div>
               <div className="text-3xl md:text-[40px] font-bold text-slate-900 mb-2">99.4%</div>
               <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Uptime Reliability</div>
             </div>
             <div>
               <div className="text-3xl md:text-[40px] font-bold text-slate-900 mb-2">100%</div>
               <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Self-Hostable Architecture</div>
             </div>
             <div>
               <div className="text-3xl md:text-[40px] font-bold text-slate-900 mb-2">5+</div>
               <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Years Experience</div>
             </div>
          </div>
        </FadeIn>
      </section>

      {/* Services Section */}
      <section className="px-4 py-16 md:px-8 max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="flex gap-2 items-center mb-6">
                 <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-500">Services</span>
              </div>
              <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 leading-tight max-w-2xl">
                We handle everything, so you can focus on growth.
              </h2>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Row 1: Software Engineering */}
          <FadeIn delay={0.1} className="md:col-span-7 h-full">
            <div className="bg-[#252D00] border border-slate-800 rounded-[40px] p-6 md:p-10 h-full flex flex-col justify-center text-white text-left shadow-2xl relative overflow-hidden">
              {/* Subtle Ambient Glow */}
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#757C54]/30 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#757C54] border border-[#757C54] rounded-full text-[11px] font-bold uppercase tracking-widest text-white mb-4">
                  01 — Core Engineering
                </div>
                
                <h3 className="text-3xl md:text-[42px] font-bold mb-4 tracking-tight leading-tight">
                  Enterprise Architecture.
                </h3>
                
                <p className="text-slate-400 text-lg leading-relaxed mb-3">
                  From Custom Web Apps & SaaS to Cross-platform Mobile Apps and scalable Cloud APIs. We build the technical foundation your business runs on.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  We handle the complete software lifecycle—delivering clean, modular codebases with Zero Tech Lock-in.
                </p>
                
                <Link href="/services" className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-[#757C54] border border-white/10 hover:border-[#757C54] rounded-full text-sm font-bold text-white transition-all group">
                  Explore Engineering <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="md:col-span-5 h-full min-h-[300px]">
            <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-slate-100 shadow-sm">
               <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Enterprise Engineering" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </FadeIn>

          {/* Row 2: Digital Marketing */}
          <FadeIn delay={0.1} className="md:col-span-5 h-full min-h-[300px] order-4 md:order-3">
            <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-slate-100 shadow-sm">
               <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Digital Marketing" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="md:col-span-7 h-full order-3 md:order-4">
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-[40px] p-6 md:p-10 h-full flex flex-col justify-center text-slate-900 text-left shadow-lg relative overflow-hidden">
              {/* Subtle Ambient Glow */}
              <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-[#757C54]/15 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#757C54]/10 border border-[#757C54]/20 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#757C54] mb-4">
                  02 — Growth
                </div>
                
                <h3 className="text-3xl md:text-[42px] font-bold mb-4 tracking-tight leading-tight">
                  Digital Marketing.
                </h3>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-3">
                  Full-funnel digital growth leveraging SEO, Performance PPC, and data-driven conversion strategies.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We combine deep technical audits with high-converting creative to ensure your engineering investment translates directly into revenue.
                </p>
                
                <Link href="/marketing" className="inline-flex items-center gap-3 px-6 py-3 bg-[#757C54] hover:bg-[#5B6141] border border-[#757C54] shadow-sm rounded-full text-sm font-bold text-white transition-all group">
                  Explore Marketing <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Row 3: Turnkey Brand Launch */}
          <FadeIn delay={0.1} className="md:col-span-7 h-full order-5">
            <div className="bg-[#1E250A] border border-[#757C54]/30 rounded-[40px] p-6 md:p-10 h-full flex flex-col justify-center text-white text-left shadow-2xl relative overflow-hidden">
              {/* Subtle Ambient Glow */}
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#757C54]/25 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#757C54] border border-[#757C54] rounded-full text-[11px] font-bold uppercase tracking-widest text-white mb-4">
                  03 — Turnkey Launchpad
                </div>
                
                <h3 className="text-3xl md:text-[42px] font-bold mb-4 tracking-tight leading-tight">
                  Brand Launch.
                </h3>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-3">
                  From logo identity and domain configuration to custom web/mobile apps, social media channels, and payment gateways.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  A 100% done-for-you digital rollout delivered in 14–21 business days with full credential handover. Zero coordination headache.
                </p>
                
                <Link href="/launch" className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-[#757C54] border border-white/15 hover:border-[#757C54] rounded-full text-sm font-bold text-white transition-all group">
                  Explore Brand Launch <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="md:col-span-5 h-full min-h-[300px] order-6">
            <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-slate-100 shadow-sm">
               <Image src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop" alt="Turnkey Brand Launch" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Featured Case Study */}
      <section className="px-4 py-16 md:px-8 max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="flex gap-2 items-center mb-6">
             <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-500">Project Cases</span>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 tracking-tight">Our featured execution.</h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="bg-[#757C54]/[0.03] border border-[#757C54]/10 rounded-[40px] p-10 md:p-16 flex flex-col lg:flex-row gap-12 items-center overflow-hidden relative">
            
            <div className="lg:w-1/2 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[11px] font-bold uppercase tracking-widest mb-8 text-[#757C54] shadow-sm border border-slate-100">
                PROJECT CASES
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-slate-900 tracking-tight">Radora ERP</h2>
              <p className="text-slate-800 text-xl md:text-[22px] mb-10 leading-relaxed max-w-xl font-medium">
                Empowering institutions with a unified, high-performance ERP designed for total operational clarity, security, and scale. Built with Optimistic UI and multi-tenant data isolation.
              </p>
              <Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 border-b-2 border-slate-900 pb-1 w-max group/link hover:text-[#757C54] hover:border-[#757C54] transition-colors">
                View full case study <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="lg:w-1/2 relative z-10">
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-white/50 bg-white">
                <Image 
                  src="/radoraimage.png"
                  alt="Radora ERP"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <CtaBlock />

    </>
  );
}







