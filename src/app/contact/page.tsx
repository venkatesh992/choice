import { Mail, MessageSquare, MapPin, ShieldCheck, Clock, Terminal } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Start Your Project with Choice Web Solutions",
  description: "Connect directly with our engineering and product leads. Discuss your web, mobile app, WooCommerce, or custom SaaS platform requirements.",
};

export default function ContactPage() {
  return (
    <div className="px-4 py-12 md:py-20 max-w-[1300px] mx-auto min-h-screen">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Direct Info & Value Proposition */}
        <div className="lg:col-span-5 space-y-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#757C54] bg-[#757C54]/10 mb-4 border border-[#757C54]/20">
              Start The Conversation
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Let&apos;s build something exceptional together.
            </h1>
            
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              Whether you are architecting a multi-tenant SaaS, scaling a high-traffic WooCommerce store, or launching a brand portfolio—our senior team is here to guide the blueprint.
            </p>
          </FadeIn>

          {/* Direct Communication Channels */}
          <FadeIn delay={0.1}>
            <div className="space-y-3.5 bg-[#757C54]/[0.03] p-5 rounded-[24px] border border-[#757C54]/10">
              <a 
                href="mailto:contact@choicewebsolutions.com"
                className="flex items-start gap-4 p-2 rounded-xl hover:bg-white transition-colors group"
              >
                <div className="w-9 h-9 bg-white group-hover:bg-[#757C54] text-[#757C54] group-hover:text-white rounded-xl flex items-center justify-center shrink-0 border border-slate-200/60 shadow-sm transition-colors">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Business Inquiries</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">contact@choicewebsolutions.com</div>
                </div>
              </a>

              <a 
                href="https://wa.me/919872211889" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-start gap-4 p-2 rounded-xl hover:bg-white transition-colors group"
              >
                <div className="w-11 h-11 bg-white group-hover:bg-[#757C54] text-[#757C54] group-hover:text-white rounded-xl flex items-center justify-center shrink-0 border border-slate-200/60 shadow-sm transition-colors">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Direct / WhatsApp</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">+91 98722 11889</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-2 rounded-xl">
                <div className="w-11 h-11 bg-white text-[#757C54] rounded-xl flex items-center justify-center shrink-0 border border-slate-200/60 shadow-sm">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Headquarters</div>
                  <div className="text-xs font-semibold text-slate-900 mt-0.5 leading-relaxed">D, No.70-8-1314/1, Sri Lakshmi Venkateswara Nilayam, 7th Ln, Opp. IPD Colony, Guntur, Andhra Pradesh 522003</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Quick Assurance Badges */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-sm text-center">
                <Clock size={15} className="text-[#757C54] mx-auto mb-1.5" />
                <div className="text-[11px] font-bold text-slate-900">&lt; 24h Reply</div>
                <div className="text-[10px] text-slate-400">Guaranteed SLA</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-sm text-center">
                <ShieldCheck size={15} className="text-[#757C54] mx-auto mb-1.5" />
                <div className="text-[11px] font-bold text-slate-900">NDA Protected</div>
                <div className="text-[10px] text-slate-400">Strict IP Privacy</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-sm text-center">
                <Terminal size={15} className="text-[#757C54] mx-auto mb-1.5" />
                <div className="text-[11px] font-bold text-slate-900">Tech Lead Call</div>
                <div className="text-[10px] text-slate-400">No Sales Reps</div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Refined Executive Form */}
        <div className="lg:col-span-7">
          <FadeIn delay={0.2}>
            <ContactForm />
          </FadeIn>
        </div>

      </div>
    </div>
  );
}
