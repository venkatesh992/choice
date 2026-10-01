import { ArrowRight, BarChart3, Megaphone, Search, PenTool } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function MarketingPage() {
  return (
    <div className="min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Digital<br/>Marketing<br/>Services
              </h1>
              <p className="text-slate-600 text-lg mb-8 max-w-md">
                Data-driven strategies to elevate your brand, increase visibility, and convert traffic into loyal customers.
              </p>
              <button className="px-8 py-4 bg-[#2A3B2C] text-white font-medium rounded-full hover:bg-[#1f2c21] transition-colors flex items-center gap-2">
                Start your campaign <ArrowRight size={18} />
              </button>
            </FadeIn>
          </div>
          <div className="md:w-1/2 relative h-[400px] md:h-[500px] w-full">
            <FadeIn delay={0.2} direction="left" effect="blur">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Marketing Strategy"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
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

      {/* Services Grid */}
      <section className="px-6 py-16 max-w-[1200px] mx-auto border-t border-slate-200 mt-8">
        <FadeIn>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold">Capabilities</h2>
            <span className="text-sm font-medium text-slate-500 hidden md:block">Full-funnel digital growth</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Search Engine Optimization (SEO)",
              desc: "On-page and off-page optimization to dominate organic search rankings.",
              icon: <Search size={24} className="text-[#2A3B2C]" />,
              img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop"
            },
            {
              title: "Performance Marketing (PPC)",
              desc: "High-converting ad campaigns across Google, Meta, and LinkedIn.",
              icon: <BarChart3 size={24} className="text-[#2A3B2C]" />,
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            },
            {
              title: "Social Media Management",
              desc: "Engaging community building and brand voice development.",
              icon: <Megaphone size={24} className="text-[#2A3B2C]" />,
              img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
            },
            {
              title: "Content & Branding",
              desc: "Copywriting, brand identity, and storytelling that converts.",
              icon: <PenTool size={24} className="text-[#2A3B2C]" />,
              img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
            }
          ].map((srv, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-[24px] p-2 hover:shadow-md transition-all border border-slate-200 h-full">
                <div className="relative w-full h-40 rounded-[18px] overflow-hidden mb-4 bg-slate-100">
                  <Image src={srv.img} alt={srv.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="w-10 h-10 bg-[#F5F5F0] rounded-full flex items-center justify-center mb-4">
                    {srv.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{srv.title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{srv.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

    </div>
  );
}
