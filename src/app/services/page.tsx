import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function ServicesPage() {
  const services = [
    {
      title: "Custom Web Apps",
      tag: "Priority Service",
      tagDot: "bg-orange-400",
      desc: "Multi-tenant SaaS architectures, customer portals, and robust operational workflow software designed for high-throughput scaling.",
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
      title: "E-Commerce",
      tag: "Conversion Focused",
      tagDot: "bg-stone-800",
      desc: "Custom checkout funnels, multi-currency payment integrations, and lightning-fast headless storefronts.",
      bgColor: "bg-[#F4F5F0]",
      graphic: (
        <div className="absolute right-[-5%] top-[-10%] w-64 h-[120%] flex flex-col items-end gap-6 opacity-80 pointer-events-none">
          <div className="w-48 h-48 bg-gradient-to-br from-stone-300 to-stone-200 rounded-full"></div>
          <div className="w-40 h-32 bg-gradient-to-br from-stone-300 to-stone-200 rounded-l-full"></div>
          <div className="w-56 h-56 bg-gradient-to-br from-stone-300 to-stone-200 rounded-tl-full"></div>
        </div>
      )
    },
    {
      title: "Mobile Apps",
      tag: "Cross-Platform",
      tagDot: "bg-purple-400",
      desc: "Native-feeling iOS and Android applications with offline synchronization and real-time geolocation tracking.",
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
      title: "Cloud & APIs",
      tag: "Enterprise Grade",
      tagDot: "bg-emerald-600",
      desc: "RESTful and GraphQL API design, serverless microservices, containerization, and VPC network security.",
      bgColor: "bg-[#E9F3E5]",
      graphic: (
        <div className="absolute right-[5%] top-[15%] flex flex-col gap-2 opacity-80 pointer-events-none">
          <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-300 rounded-[32px] ml-16"></div>
          <div className="flex gap-2">
            <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-300 rounded-[32px]"></div>
            <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-300 rounded-br-[80px] rounded-[32px]"></div>
          </div>
        </div>
      )
    },
    {
      title: "Optimization",
      tag: "Retainer Support",
      tagDot: "bg-blue-400",
      desc: "Database query tuning, Core Web Vitals optimization, automated security patches, and 24/7 uptime monitoring.",
      bgColor: "bg-[#EBF2FB]",
      graphic: (
        <div className="absolute right-[-5%] bottom-[-20%] w-[120%] h-64 opacity-80 pointer-events-none">
           <div className="absolute w-full h-full bg-gradient-to-t from-blue-200 to-blue-100 rounded-t-[100%] scale-150 translate-y-12"></div>
           <div className="absolute w-full h-full bg-gradient-to-t from-blue-300 to-blue-200 rounded-t-[100%] scale-110 translate-y-24"></div>
        </div>
      )
    }
  ];

  return (
    <div className="px-4 py-16 md:py-24 md:px-8 max-w-[1400px] mx-auto min-h-screen">
      <FadeIn>
        <div className="mb-16 md:mb-24 text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">Full-Cycle Capabilities.</h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto">
            Comprehensive engineering services tailored to product development, platform modernization, and digital expansion.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {services.map((service, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} className={idx === 4 ? "lg:col-span-2" : ""}>
            <div className={`${service.bgColor} rounded-[40px] p-8 md:p-12 relative overflow-hidden h-[450px] md:h-[500px] flex flex-col group`}>
              
              {/* Graphic Layer (z-0) */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-transform duration-700 group-hover:scale-105">
                {service.graphic}
              </div>
              
              {/* Content Layer (z-10) */}
              <div className="relative z-10 flex flex-col h-full w-full md:max-w-[60%]">
                
                {/* Top Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 mb-auto w-max shadow-sm">
                  <div className={`w-2.5 h-2.5 rounded-full ${service.tagDot}`}></div>
                  {service.tag}
                </div>
                
                {/* Text Content */}
                <div className="mt-auto">
                  <h2 className="text-3xl md:text-[42px] font-bold text-slate-900 mb-4 tracking-tight leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-slate-700 text-lg leading-relaxed mb-10 md:pr-8">
                    {service.desc}
                  </p>
                  
                  {/* Action Link */}
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 border-b-2 border-slate-900 pb-1 w-max group/link hover:text-[#0F01F6] hover:border-[#0F01F6] transition-colors">
                    Start project <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}