import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function CtaBlock() {
  return (
    <section className="px-4 py-16 md:py-24 max-w-[1400px] mx-auto">
      <FadeIn effect="blur">
        <div className="w-full bg-[#757C54] rounded-[40px] p-12 md:p-24 text-center flex flex-col items-center shadow-2xl relative overflow-hidden">
          
          {/* Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]"></div>
          
          {/* Soft Wavy Glows */}
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#929A6A] rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#5B6141] rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
          
          {/* Massive Background Text Watermark */}
          <div className="absolute bottom-[-15%] left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-[120px] md:text-[240px] font-black text-white/5 tracking-tighter leading-none whitespace-nowrap">
              CHOICE
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10 leading-tight tracking-tight">
            Ready to scale your platform? <br/> Let's talk architecture.
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl relative z-10 font-medium">
            Book a free, no-obligation technical audit. We'll show you exactly where your infrastructure bottlenecks are and how to fix them.
          </p>
          
          {/* Custom Pill Button */}
          <Link href="/contact" className="relative z-10 flex items-center bg-white rounded-full p-1.5 pl-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 group cursor-pointer shadow-xl">
            <span className="text-slate-900 font-bold text-sm mr-6 tracking-wide group-hover:text-[#757C54] transition-colors">Book Strategy Call</span>
            <div className="w-12 h-12 bg-[#757C54] rounded-full flex items-center justify-center text-white group-hover:bg-slate-900 group-hover:text-white transition-colors shadow-inner">
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </div>
          </Link>
          
        </div>
      </FadeIn>
    </section>
  );
}

