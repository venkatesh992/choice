import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { FileText, ShieldCheck, Code, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Choice Web Solutions",
  description: "Terms and conditions governing custom web application development, SaaS architecture, mobile solutions, intellectual property ownership, and technical deliverables.",
};

export default function TermsPage() {
  const lastUpdated = "October 2, 2026";

  return (
    <div className="px-4 py-12 md:py-20 max-w-[1000px] mx-auto min-h-screen">
      {/* Header */}
      <FadeIn>
        <div className="mb-12 border-b border-slate-100 pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#757C54] bg-[#757C54]/10 mb-4 border border-[#757C54]/20">
            <FileText size={14} /> Service Level & Legal Agreement
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Terms of Service
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
              Agreement & Services Covered
            </h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern the professional software engineering, architectural design, digital marketing, and technical consulting services provided by Choice Web Solutions (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;).
            </p>
            <p>
              By commissioning a project, executing a Statement of Work (SOW), or submitting a formal inquiry, the client (&quot;Client&quot;, &quot;you&quot;) agrees to be bound by these terms in conjunction with any specific project milestone agreement.
            </p>
          </section>
        </FadeIn>

        {/* Section 2 */}
        <FadeIn delay={0.15}>
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#757C54]/10 text-[#757C54] flex items-center justify-center text-xs font-bold">2</span>
              Intellectual Property, Ownership & Portability
            </h2>
            <p>
              We firmly uphold our foundational commitment to <strong>Zero Technical Lock-In</strong> and <strong>Self-Hostable Architecture</strong>:
            </p>
            
            <div className="space-y-3 pt-1">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1.5">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#757C54]" /> Custom Domain Deliverables (100% Client Owned)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Upon final milestone settlement, the Client owns all custom intellectual property, proprietary business logic, custom database schemas, design tokens, and branding assets engineered exclusively for the Client.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1.5">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#757C54]" /> Reusable Foundation & Open-Source Utilities
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Underlying modular utilities, UI boilerplate primitives, and standard frameworks (Next.js, React, Tailwind, Prisma) remain governed by permissive open-source licenses (MIT/Apache 2.0). The Client receives an unrestricted, perpetual, royalty-free license to run, modify, and host this code without recurring agency royalties.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1.5">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#757C54]" /> Full Repository Handover
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We hand over complete Git repository access, environmental configuration manifests, and deployment scripts so that any independent software team can maintain and extend the application.
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
              Milestone Execution & Acceptance
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
              <li><strong>Staging Environments:</strong> All feature milestones are deployed to live staging environments for functional verification prior to production launch.</li>
              <li><strong>Review Period:</strong> The Client has a standard 10 business-day window following each milestone delivery to test features, provide feedback, or report discrepancies against the agreed SOW.</li>
              <li><strong>Change Requests:</strong> Substantial modifications outside the initial technical scope will be estimated separately under a supplementary milestone without halting active baseline sprints.</li>
            </ul>
          </section>
        </FadeIn>

        {/* Section 4 */}
        <FadeIn delay={0.25}>
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#757C54]/10 text-[#757C54] flex items-center justify-center text-xs font-bold">4</span>
              Warranty & Technical Support
            </h2>
            <p>
              Choice Web Solutions provides a standard <strong>30-day post-launch warranty</strong> on custom code deliverables. During this period:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
              <li>Any reproducible defects, functional errors, or regressions within the commissioned scope will be patched promptly at no additional cost.</li>
              <li>The warranty does not cover issues introduced by third-party modifications, unsupported hosting environments, or upstream third-party API breaking changes.</li>
              <li>Ongoing SLA maintenance, server monitoring, and continuous feature sprints can be continued under a dedicated Retainer Agreement.</li>
            </ul>
          </section>
        </FadeIn>

        {/* Section 5 */}
        <FadeIn delay={0.3}>
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#757C54]/10 text-[#757C54] flex items-center justify-center text-xs font-bold">5</span>
              Payment Terms & Commercials
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
              <li>Invoices are issued against agreed project milestones (e.g. Kickoff, Prototype/Architecture, Feature Complete, Final Handover).</li>
              <li>Payment methods include official bank wire transfers (NEFT/RTGS/IMPS), UPI, and licensed enterprise gateways (Razorpay/Stripe).</li>
              <li>All applicable taxes (including GST where applicable) are clearly itemized on tax invoices.</li>
            </ul>
          </section>
        </FadeIn>

        {/* Section 6 */}
        <FadeIn delay={0.35}>
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#757C54]/10 text-[#757C54] flex items-center justify-center text-xs font-bold">6</span>
              Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and any project engagements entered into with Choice Web Solutions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>Guntur, Andhra Pradesh, India</strong>.
            </p>
            <div className="bg-[#757C54]/[0.04] border border-[#757C54]/15 rounded-2xl p-6 space-y-2 text-xs md:text-sm">
              <p className="font-bold text-slate-900">Legal Contact</p>
              <p className="text-slate-600">Choice Web Solutions</p>
              <p className="text-slate-600">D, No.70-8-1314/1, Sri Lakshmi Venkateswara Nilayam, 7th Ln, Opp. IPD Colony, Guntur, Andhra Pradesh 522003, India</p>
              <p className="text-slate-600">Email: <a href="mailto:contact@choicewebsolutions.com" className="text-[#757C54] font-bold underline">contact@choicewebsolutions.com</a></p>
            </div>
          </section>
        </FadeIn>

      </div>
    </div>
  );
}
