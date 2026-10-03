import FadeIn from "@/components/FadeIn";
import CtaBlock from "@/components/CtaBlock";
import WorkShowcase from "@/components/WorkShowcase";

export const metadata = {
  title: "Production Projects & Engineering Case Studies | Choice Web Solutions",
  description: "Explore our production work across multi-tenant SaaS platforms (Radora ERP), companion mobile applications, high-performance WooCommerce storefronts, and brand web experiences.",
};

export default function WorkPage() {
  return (
    <div className="px-4 pt-12 pb-4 md:pb-6 md:px-8 max-w-[1400px] mx-auto min-h-screen">
      {/* Header */}
      <FadeIn>
        <div className="mb-12 md:mb-16">
          <div className="flex gap-2 items-center mb-6">
            <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-500 shadow-sm">
              Project Cases
            </span>
          </div>
          <h1 className="text-3xl md:text-[40px] font-bold text-slate-900 leading-tight max-w-2xl mb-4">
            Engineered for high throughput and direct business impact.
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
            From multi-tenant enterprise operating systems with native mobile companions (such as Radora ERP) to sub-second WooCommerce stores and bespoke brand platforms.
          </p>
        </div>
      </FadeIn>

      {/* Interactive Showcase with Filtering */}
      <WorkShowcase />

      {/* Conversion Section */}
      <div className="mt-8 md:mt-12">
        <CtaBlock />
      </div>
    </div>
  );
}
