import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { Shield, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Choice Web Solutions",
  description: "Learn how Choice Web Solutions collects, protects, and handles your technical data, project inquiries, and client intellectual property.",
};

export default function PrivacyPage() {
  const lastUpdated = "October 2, 2026";

  return (
    <div className="px-4 py-12 md:py-20 max-w-[1000px] mx-auto min-h-screen">
      {/* Header */}
      <FadeIn>
        <div className="mb-12 border-b border-slate-100 pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#757C54] bg-[#757C54]/10 mb-4 border border-[#757C54]/20">
            <Shield size={14} /> Legal & Data Protection
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm font-medium text-slate-500">
            Last Updated: {lastUpdated} • Choice Web Solutions, Guntur, AP, India
          </p>
        </div>
      </FadeIn>

      {/* Main Content */}
      <div className="space-y-12 text-slate-700 leading-relaxed text-sm md:text-base">
        
        {/* Section 1 */}
        <FadeIn delay={0.1}>
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#757C54]/10 text-[#757C54] flex items-center justify-center text-xs font-bold">1</span>
              Introduction & Scope
            </h2>
            <p>
              Choice Web Solutions (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates as a premier digital product engineering agency delivering custom web applications, SaaS platforms (such as Radora ERP), cross-platform mobile apps, and WooCommerce storefronts. We respect your personal data and are committed to safeguarding the confidentiality of your inquiries and proprietary project specifications.
            </p>
            <p>
              This Privacy Policy explains how we collect, store, use, and protect information when you visit our website (<Link href="/" className="text-[#757C54] font-semibold underline underline-offset-4">choicewebsolutions.com</Link>), submit an inquiry via our contact form, or partner with us for software engineering services.
            </p>
          </section>
        </FadeIn>

        {/* Section 2 */}
        <FadeIn delay={0.15}>
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#757C54]/10 text-[#757C54] flex items-center justify-center text-xs font-bold">2</span>
              Information We Collect
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#757C54]" /> Direct Inquiry Data
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  When you submit our contact workstation form, we collect your Full Name, Work Email, Phone/WhatsApp number, selected service interest, and project overview message.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#757C54]" /> Technical Telemetry
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Standard browser diagnostic metadata such as IP address, approximate geographic region, browser version, and page referral paths used strictly to ensure platform security and performance.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Section 3 */}
        <FadeIn delay={0.2}>
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#757C54]/10 text-[#757C54] flex items-center justify-center text-xs font-bold">3</span>
              How We Use Your Data
            </h2>
            <p>
              We process information only for lawful, legitimate business purposes directly connected to delivering software engineering services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
              <li>To evaluate project scopes, prepare architectural proposals, and schedule technical discovery calls.</li>
              <li>To maintain communication across development sprints, milestone sign-offs, and staging reviews.</li>
              <li>To fulfill contractual obligations and provide post-deployment technical support.</li>
              <li>To prevent fraudulent inquiries, spam, and malicious bot activity.</li>
            </ul>
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/70 text-amber-900 text-xs font-medium">
              <strong>Strict Guarantee:</strong> We never sell, rent, trade, or monetize your contact details or project descriptions to third-party advertisers or brokers.
            </div>
          </section>
        </FadeIn>

        {/* Section 4 */}
        <FadeIn delay={0.25}>
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#757C54]/10 text-[#757C54] flex items-center justify-center text-xs font-bold">4</span>
              Client Project Data & Multi-Tenant Isolation
            </h2>
            <p>
              For enterprise clients utilizing our proprietary SaaS operating systems (such as Radora ERP):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
              <li><strong>Zero Cross-Tenant Leakage:</strong> Client databases, school student records, employee rosters, and financial transaction logs are strictly isolated using tenant-scoped schemas and query-level isolation.</li>
              <li><strong>Non-Disclosure Agreement (NDA):</strong> All proprietary business workflows, custom schemas, and client datasets remain protected under strict NDA obligations.</li>
              <li><strong>Zero Lock-in Portability:</strong> Clients retain full export capability over their raw database snapshots, uploaded assets, and configuration manifests upon completion of services.</li>
            </ul>
          </section>
        </FadeIn>

        {/* Section 5 */}
        <FadeIn delay={0.3}>
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#757C54]/10 text-[#757C54] flex items-center justify-center text-xs font-bold">5</span>
              Third-Party Processors & Infrastructure
            </h2>
            <p>
              We utilize select, industry-standard infrastructure providers to deliver our services securely:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
              <li><strong>Lead Ingestion:</strong> Form inquiries are transmitted via encrypted webhooks to private, access-controlled Google Workspace spreadsheets.</li>
              <li><strong>Hosting & Edge Delivery:</strong> Our applications are deployed across enterprise cloud networks (e.g., Vercel, AWS, Cloudflare) with automated SSL/TLS encryption.</li>
              <li><strong>Payment Gateways:</strong> For client invoice settlements and e-commerce integrations, transactions are handled directly through licensed processors (Razorpay, Stripe) under PCI-DSS compliance. We never store credit card details on our servers.</li>
            </ul>
          </section>
        </FadeIn>

        {/* Section 6 */}
        <FadeIn delay={0.35}>
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#757C54]/10 text-[#757C54] flex items-center justify-center text-xs font-bold">6</span>
              Your Rights & Contact Information
            </h2>
            <p>
              You have the right to request access to, correction of, or complete deletion of your contact records from our inquiry logs at any time.
            </p>
            <div className="bg-[#757C54]/[0.04] border border-[#757C54]/15 rounded-2xl p-6 space-y-2 text-xs md:text-sm">
              <p className="font-bold text-slate-900">Choice Web Solutions</p>
              <p className="text-slate-600">D, No.70-8-1314/1, Sri Lakshmi Venkateswara Nilayam, 7th Ln, Opp. IPD Colony, Guntur, Andhra Pradesh 522003, India</p>
              <p className="text-slate-600">Email: <a href="mailto:contact@choicewebsolutions.com" className="text-[#757C54] font-bold underline">contact@choicewebsolutions.com</a></p>
              <p className="text-slate-600">Phone / WhatsApp: <a href="https://wa.me/919872211889" className="text-[#757C54] font-bold underline">+91 98722 11889</a></p>
            </div>
          </section>
        </FadeIn>

      </div>
    </div>
  );
}
