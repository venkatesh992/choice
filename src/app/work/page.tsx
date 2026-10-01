import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function WorkPage() {
  const cases = [
    {
      category: "Enterprise EdTech SaaS",
      title: "Radora: The Next-Generation Educational Operating System",
      challenge: "Educational institutions struggled with fragmented, disjointed software for academics, finance, and campus movement, causing massive administrative overhead and compromised data security.",
      solution: "Engineered a highly secure, multi-tenant ERP wrapped in a premium 'Aether Design System'. Features specialized data-dense 'Mission Control Workstations', Optimistic UI for instantaneous interactions, and robust background processing.",
      stack: "Next.js 16 (App Router), PostgreSQL, Prisma, BullMQ, Tailwind 4",
      result: "Total operational clarity, 0% data leakage across tenants, reduced administrative fatigue.",
      bgColor: "bg-slate-900",
      accentColor: "text-[#0F01F6]",
      theme: "dark",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      category: "Logistics & Supply Chain",
      title: "Multi-Tenant Enterprise Operations Dashboard",
      challenge: "Client was tracking multi-branch consignment dispatches and driver payouts across separate spreadsheets, resulting in data desynchronization and manual entry delays.",
      solution: "Engineered a centralized web portal with strict role-based access control (RBAC), live delivery tracking, automated PDF invoice generation, and audit logs.",
      stack: "Next.js, Supabase, PostgreSQL, Tailwind CSS",
      result: "64% reduction in paperwork; 18,000+ monthly shipments tracked",
      bgColor: "bg-blue-50",
      accentColor: "text-blue-700",
      theme: "light",
      img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      category: "Consumer Retail & E-Commerce",
      title: "High-Performance Direct-to-Consumer E-Commerce Storefront",
      challenge: "Existing storefront suffered from severe mobile abandonment due to 4.5-second page loads, checkout drop-offs, and frequent payment gateway connection drops.",
      solution: "Rebuilt the front-end with server-side rendered layouts, sub-second product filtering, integrated frictionless one-click payments, and automated stock notification hooks.",
      stack: "React, Node.js API, Redis Caching, Razorpay/Stripe",
      result: "1.1s load speed; 29% conversion uplift in 60 days",
      bgColor: "bg-slate-900",
      accentColor: "text-emerald-400",
      theme: "dark",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      category: "On-Demand Services",
      title: "Cross-Platform Booking & Field Service Mobile App",
      challenge: "Client needed a unified mobile experience for both iOS and Android to allow end-customers to schedule on-demand home technicians with real-time ETA alerts.",
      solution: "Developed a high-performance cross-platform application featuring geolocation dispatch, in-app scheduling, automated WhatsApp notifications, and payment capture.",
      stack: "React Native, Expo, Firebase Cloud Messaging, Node.js",
      result: "4.8/5 App Store Rating; 12,000+ app bookings managed",
      bgColor: "bg-purple-50",
      accentColor: "text-purple-700",
      theme: "light",
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="px-4 py-12 md:px-8 max-w-[1400px] mx-auto min-h-screen">
      <FadeIn>
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Featured Case Studies</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            A selection of production systems engineered by our team, illustrating technical execution and business impact.
          </p>
        </div>
      </FadeIn>

      <div className="flex flex-col gap-12">
        {cases.map((cs, idx) => (
          <FadeIn key={idx} delay={0.1} direction={idx % 2 === 0 ? "right" : "left"}>
            <div className={`rounded-[40px] overflow-hidden flex flex-col lg:flex-row border ${cs.theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
              
              {/* Content Side */}
              <div className={`p-10 lg:p-16 lg:w-1/2 flex flex-col justify-center ${cs.theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
                <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 w-max ${cs.theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-500'}`}>
                  {cs.category}
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">{cs.title}</h2>
                
                <div className="mb-6">
                  <h3 className={`text-sm font-bold uppercase tracking-wider mb-2 ${cs.theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>The Operational Challenge</h3>
                  <p className={`${cs.theme === 'dark' ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{cs.challenge}</p>
                </div>

                <div className="mb-8">
                  <h3 className={`text-sm font-bold uppercase tracking-wider mb-2 ${cs.theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>The Technical Solution</h3>
                  <p className={`${cs.theme === 'dark' ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{cs.solution}</p>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-200/20">
                  <p className="text-sm mb-4"><span className="font-bold opacity-70">Stack:</span> {cs.stack}</p>
                  <div className={`text-sm font-bold px-5 py-3 rounded-2xl inline-block ${cs.theme === 'dark' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                    Result: {cs.result}
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className={`lg:w-1/2 min-h-[400px] relative ${cs.bgColor}`}>
                <Image 
                  src={cs.img} 
                  alt={cs.title} 
                  fill 
                  className="object-cover opacity-90"
                />
              </div>
              
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
