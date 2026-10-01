import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function MarketingPage() {
  const services = [
    {
      title: "Search Engine Optimization",
      tag: "Organic Growth",
      tagDot: "bg-emerald-500",
      desc: "On-page and off-page optimization strategies to dominate organic search rankings and capture high-intent traffic.",
      bgColor: "bg-[#E9F3E5]",
      graphic: (
        <div className="absolute right-[5%] bottom-[-5%] flex gap-3 items-end opacity-80 pointer-events-none">
          <div className="w-16 md:w-20 h-24 bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-t-[32px]"></div>
          <div className="w-16 md:w-20 h-40 bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-t-[32px]"></div>
          <div className="w-16 md:w-20 h-56 bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-t-[32px]"></div>
          <div className="w-16 md:w-20 h-72 bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-t-[32px]"></div>
        </div>
      )
    },
    {
      title: "Performance Marketing",
      tag: "Paid Acquisition",
      tagDot: "bg-orange-400",
      desc: "High-converting, ROI-focused ad campaigns across Google Ads, Meta, and LinkedIn with precise audience targeting.",
      bgColor: "bg-[#FFF3EB]",
      graphic: (
        <div className="absolute right-[-10%] top-[10%] w-64 h-[150%] flex flex-col gap-4 rotate-12 opacity-80 pointer-events-none">
          <div className="w-full h-48 bg-gradient-to-br from-orange-300 to-orange-200 rounded-[40px]"></div>
          <div className="w-full h-48 bg-gradient-to-br from-orange-300 to-orange-200 rounded-[40px] ml-16"></div>
          <div className="w-full h-48 bg-gradient-to-br from-orange-300 to-orange-200 rounded-[40px]"></div>
        </div>
      )
    },
    {
      title: "Social Media Management",
      tag: "Community",
      tagDot: "bg-purple-400",
      desc: "Engaging community building, brand voice development, and viral social strategies that foster brand loyalty.",
      bgColor: "bg-[#F2EDF9]",
      graphic: (
        <div className="absolute right-[-10%] top-[10%] w-96 h-96 opacity-90 pointer-events-none">
          <div className="absolute inset-0 bg-purple-300/40 rounded-full blur-2xl transform scale-150"></div>
          <div className="absolute inset-8 bg-gradient-to-br from-purple-300 to-purple-200 rounded-full shadow-inner"></div>
          <div className="absolute inset-24 bg-white/40 rounded-full backdrop-blur-sm"></div>
        </div>
      )
    },
    {
      title: "Content & Branding",
      tag: "Brand Identity",
      tagDot: "bg-stone-800",
      desc: "Persuasive copywriting, distinctive brand identity design, and compelling storytelling that converts visitors into buyers.",
      bgColor: "bg-[#F4F5F0]",
      graphic: (
        <div className="absolute right-[-5%] top-[-10%] w-64 h-[120%] flex flex-col items-end gap-6 opacity-80 pointer-events-none">
          <div className="w-48 h-48 bg-gradient-to-br from-stone-300 to-stone-200 rounded-full"></div>
          <div className="w-40 h-32 bg-gradient-to-br from-stone-300 to-stone-200 rounded-l-full"></div>
          <div className="w-56 h-56 bg-gradient-to-br from-stone-300 to-stone-200 rounded-tl-full"></div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="px-6 py-8 md:py-12 max-w-[1400px] mx-auto flex flex-col items-center justify-center text-center relative">
        <FadeIn className="w-full flex flex-col items-center">

          {/* Massive Headline */}
          <h1 className="text-5xl md:text-[72px] font-bold tracking-tighter leading-[1.1] mb-6 w-full flex flex-col items-center">
            <div className="text-slate-900">Your Next Best</div>
            <div className="flex items-center justify-center gap-3 md:gap-5 my-1 md:my-2 flex-wrap">
              <span className="text-slate-900">Marketing</span>
              
              {/* Graphic Icon Block */}
              <span className="inline-flex items-center justify-center w-12 h-12 md:w-[72px] md:h-[72px] bg-[#0F01F6] rounded-xl md:rounded-[24px] text-white shadow-lg shadow-[#0F01F6]/20 transform rotate-[-8deg] hover:rotate-0 transition-transform duration-500 cursor-pointer">
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 -rotate-45" />
              </span>
              
              <span className="text-slate-300">Decision</span>
            </div>
            <div className="text-slate-300">Starts Here</div>
          </h1>

          {/* Subheadline */}
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Data-driven strategies to elevate your brand, increase visibility, and convert traffic into loyal customers. Partner with Choice — the numbers do the talking.
          </p>
          
        </FadeIn>
      </section>

      {/* Banner Section */}
      <section className="px-6 py-12 max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="relative w-full h-[400px] rounded-[40px] overflow-hidden bg-slate-200 group">
            <Image 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
              alt="Team collaboration"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-1/2 left-12 -translate-y-1/2">
              <h2 className="text-4xl md:text-6xl font-bold text-white max-w-lg leading-tight">
                Let's grow your brand together!
              </h2>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Services Grid (New Design) */}
      <section className="px-6 py-16 max-w-[1400px] mx-auto mt-8">
        <FadeIn>
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Capabilities</h2>
            <p className="text-slate-500 text-lg">Full-funnel digital growth tailored to your brand.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className={`${service.bgColor} rounded-[40px] p-8 md:p-12 relative overflow-hidden h-[450px] md:h-[500px] flex flex-col group`}>
                
                {/* Graphic Layer (z-0) */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-transform duration-700 group-hover:scale-105">
                  {service.graphic}
                </div>
                
                {/* Content Layer (z-10) */}
                <div className="relative z-10 flex flex-col h-full w-full md:max-w-[65%]">
                  
                  {/* Top Pill */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 mb-auto w-max shadow-sm">
                    <div className={`w-2.5 h-2.5 rounded-full ${service.tagDot}`}></div>
                    {service.tag}
                  </div>
                  
                  {/* Text Content */}
                  <div className="mt-auto">
                    <h2 className="text-3xl md:text-[42px] font-bold text-slate-900 mb-4 tracking-tight leading-tight pr-4">
                      {service.title}
                    </h2>
                    <p className="text-slate-700 text-lg leading-relaxed mb-10 pr-4">
                      {service.desc}
                    </p>
                    
                    {/* Action Link */}
                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 border-b-2 border-slate-900 pb-1 w-max group/link hover:text-[#0F01F6] hover:border-[#0F01F6] transition-colors">
                      Start campaign <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

    </div>
  );
}
