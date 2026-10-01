import { ShieldCheck, Code, Eye, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="px-4 py-12 md:px-8 max-w-[1400px] mx-auto min-h-screen">
      
      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
        <div className="lg:w-1/2">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
            Our Story
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Bridging the gap between business objectives and clean engineering.
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
            Choice Web Solutions is an established full-cycle software and digital product engineering agency. For more than five years, we have designed, architected, and deployed robust web applications, high-throughput e-commerce platforms, customer portals, and cross-platform mobile solutions for startups, regional brands, and scaling enterprises.
          </p>
          
          <div className="flex gap-8">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">5+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Years Active</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">85+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Completed Builds</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Code Ownership</div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full h-[500px] relative rounded-[40px] overflow-hidden bg-slate-200">
          <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Choice Web Solutions Team"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Why Partner With Us */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 text-center">Why Growing Companies Partner With Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Zero Technical Lock-In</h3>
            <p className="text-slate-600 leading-relaxed">
              Clients receive full source code repository ownership, database credentials, and cloud architecture access immediately upon milestone sign-offs.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Eye size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Bi-Weekly Staging Visibility</h3>
            <p className="text-slate-600 leading-relaxed">
              Real-time progress tracking through live testing environments. You review working software sprints instead of static slide decks.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-sm">
            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Dedicated Technical Leads</h3>
            <p className="text-slate-600 leading-relaxed">
              Direct communication with senior software engineers and solution architects—eliminating costly communication layers and misinterpretations.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
