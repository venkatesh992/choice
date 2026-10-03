import { ShieldCheck, Eye, Users } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import CtaBlock from "@/components/CtaBlock";

export default function AboutPage() {
  return (
    <>
      <div className="px-4 pt-12 md:pt-16 pb-4 md:pb-6 md:px-8 max-w-[1400px] mx-auto min-h-screen">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <FadeIn className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[11px] font-bold uppercase tracking-widest mb-8 text-[#757C54] shadow-sm border border-slate-100">
              OUR STORY
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 md:mb-8 tracking-tight leading-[1.1]">
              Bridging the gap between business objectives and clean engineering.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-8 md:mb-12 leading-relaxed max-w-xl font-medium">
              Choice Web Solutions is an established full-cycle software and digital product engineering agency. For more than five years, we have designed, architected, and deployed robust web applications, high-throughput e-commerce platforms, customer portals, and cross-platform mobile solutions.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">5+</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">Years Active</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">85+</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">Completed Builds</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">100%</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">Self-Hostable Architecture</div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="lg:w-1/2 w-full">
            <div className="relative w-full aspect-[4/5] md:aspect-square rounded-[40px] overflow-hidden bg-[#757C54]/5 border border-[#757C54]/10 shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Choice Web Solutions Team"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </FadeIn>
        </div>

        {/* Why Partner With Us */}
        <div className="mb-12">
          <FadeIn>
            <div className="mb-12">
              <div className="flex gap-2 items-center mb-6">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-500 shadow-sm">
                  Our Approach
                </span>
              </div>
              <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 leading-tight max-w-2xl mb-4">
                Why Growing Companies Partner With Us.
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                We replace agency bureaucracy with senior engineering clarity, full IP ownership, and continuous staging visibility.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-[#757C54]/[0.03] border border-[#757C54]/10 p-10 md:p-12 rounded-[40px] h-full flex flex-col hover:bg-[#757C54]/[0.06] transition-colors">
                <div className="w-14 h-14 bg-white shadow-sm text-[#757C54] rounded-2xl flex items-center justify-center mb-8">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Zero Technical Lock-In</h3>
                <p className="text-slate-700 leading-relaxed font-medium">
                  Clients receive full source code repository ownership, database credentials, and cloud architecture access immediately upon milestone sign-offs.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-[#757C54]/[0.03] border border-[#757C54]/10 p-10 md:p-12 rounded-[40px] h-full flex flex-col hover:bg-[#757C54]/[0.06] transition-colors">
                <div className="w-14 h-14 bg-white shadow-sm text-[#757C54] rounded-2xl flex items-center justify-center mb-8">
                  <Eye size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Bi-Weekly Staging Visibility</h3>
                <p className="text-slate-700 leading-relaxed font-medium">
                  Real-time progress tracking through live testing environments. You review working software sprints instead of static slide decks.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-[#757C54]/[0.03] border border-[#757C54]/10 p-10 md:p-12 rounded-[40px] h-full flex flex-col hover:bg-[#757C54]/[0.06] transition-colors">
                <div className="w-14 h-14 bg-white shadow-sm text-[#757C54] rounded-2xl flex items-center justify-center mb-8">
                  <Users size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Dedicated Technical Leads</h3>
                <p className="text-slate-700 leading-relaxed font-medium">
                  Direct communication with senior software engineers and solution architects—eliminating costly communication layers and misinterpretations.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      
      <CtaBlock />
    </>
  );
}
