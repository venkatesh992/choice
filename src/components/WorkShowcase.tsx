"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layers, 
  Smartphone, 
  ShoppingBag, 
  Globe, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Server, 
  ChevronRight,
  Database
} from "lucide-react";

type ProjectCategory = "all" | "saas" | "mobile" | "ecommerce" | "web";

interface ProjectItem {
  id: string;
  category: ProjectCategory;
  categoryLabel: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  stack: string[];
  metrics: string;
  isFlagship?: boolean;
  companionApp?: {
    title: string;
    description: string;
    platform: string;
  };
  features: string[];
  img: string;
}

const projectsData: ProjectItem[] = [
  {
    id: "radora-erp",
    category: "saas",
    categoryLabel: "SaaS & ERP",
    title: "Radora: Enterprise Educational Operating System & Companion App",
    subtitle: "Unified Multi-Tenant Campus ERP with Native Mobile Portal",
    challenge: "Educational groups and colleges struggled with disjointed software for admissions, fees, timetable scheduling, and campus security, leading to heavy staff fatigue and cross-tenant security vulnerabilities.",
    solution: "Architected a full multi-tenant SaaS platform featuring institutional subdomain resolution, data-dense 'Tactical Workstation' dashboards, Optimistic UI for instantaneous operations, BullMQ background job queues, and an integrated mobile ecosystem.",
    stack: ["Next.js 16 (App Router)", "React Native / Expo", "Prisma ORM", "PostgreSQL", "Tailwind 4", "BullMQ", "Zod"],
    metrics: "100% Tenant Isolation • 50+ Institutional Workflows • 12,000+ Active Users",
    isFlagship: true,
    companionApp: {
      title: "Radora Mobile (iOS & Android)",
      description: "Real-time push notifications for fee receipts, instant student attendance check-in, exam timetables, and teacher-parent communication.",
      platform: "Cross-Platform React Native & Expo",
    },
    features: [
      "School-based database isolation & RBAC permissions",
      "Tactical 34px ergonomic workstations for high-volume data entry",
      "Direct sync with iOS & Android companion mobile app",
      "Automated fee collection, receipt generation, and SMS/WhatsApp webhooks"
    ],
    img: "/radoraimage.png"
  },
  {
    id: "logistics-hub",
    category: "saas",
    categoryLabel: "SaaS & ERP",
    title: "Multi-Tenant Dispatch & Consignment Hub",
    subtitle: "Enterprise Logistics Management System",
    challenge: "Multi-branch freight operators were managing driver dispatches, fuel calculations, and consignment payouts through manual spreadsheets, leading to billing discrepancies.",
    solution: "Constructed a centralized web ERP with fine-grained role permissions, automated PDF manifest generation, milestone tracking, and real-time ledger audits.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Redis"],
    metrics: "64% reduction in paperwork • 20,000+ monthly shipments tracked",
    features: [
      "Branch-level data segregation",
      "Automated tax and invoicing pipeline",
      "Real-time dispatch status tracking"
    ],
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "radora-mobile-app",
    category: "mobile",
    categoryLabel: "Mobile App",
    title: "Radora Parent & Faculty Mobile Companion",
    subtitle: "Instant Field Access & Secure Push Communication",
    challenge: "Faculty members needed offline-tolerant attendance capture in classrooms, while parents demanded instant fee notifications and live bus tracking without logging into desktop web portals.",
    solution: "Engineered a native-feel cross-platform mobile app leveraging biometric authentication, push notifications via Firebase Cloud Messaging, and seamless synchronization with the Radora ERP API.",
    stack: ["React Native", "Expo", "TypeScript", "Node.js REST API", "Firebase FCM"],
    metrics: "4.9/5 Rating • <1.2s Cold Start • Instant Push Sync",
    features: [
      "Biometric login (FaceID / Fingerprint)",
      "Offline attendance queue with background auto-sync",
      "Instant push alerts for fee receipts and announcements"
    ],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "field-service-app",
    category: "mobile",
    categoryLabel: "Mobile App",
    title: "On-Demand Technician Dispatch App",
    subtitle: "Cross-Platform Scheduling & In-App Invoicing",
    challenge: "Field engineers lacked an interactive mobile interface for customer signatures, job checklist validation, and instant spare parts billing on customer premises.",
    solution: "Built a dedicated technician mobile app with turn-by-turn navigation hooks, digital signature capture, offline job completion logs, and Razorpay payment links.",
    stack: ["Flutter / Dart", "Firebase", "PostgreSQL", "Node.js"],
    metrics: "35% faster job turnarounds • 15,000+ service visits logged",
    features: [
      "Geolocation tracking and routing",
      "In-app customer signature capture & invoice generation",
      "Digital payment QR code generation"
    ],
    img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "artisan-woocommerce",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    title: "High-Volume Direct-to-Consumer WooCommerce Store",
    subtitle: "Sub-Second Product Filtering & Frictionless Checkout",
    challenge: "An existing WooCommerce store suffered from sluggish 4.2-second load times, cart drop-offs during festive flash sales, and sync errors with inventory management software.",
    solution: "Refactored the WooCommerce platform with an optimized custom lightweight theme, Redis object caching, clean headless REST API endpoints for checkout, and unified Razorpay/Stripe gateways.",
    stack: ["WooCommerce", "WordPress Headless / PHP 8.2", "Redis Caching", "Tailwind CSS", "Razorpay"],
    metrics: "1.2s Page Load • 34% Uplift in Checkout Conversions",
    features: [
      "Sub-second AJAX faceted search and category filtering",
      "One-click express checkout flow reducing drop-offs",
      "Automated stock synchronization with warehouse ERP"
    ],
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "specialty-apparel-store",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    title: "Custom Apparel Storefront & B2B Wholesale Portal",
    subtitle: "Dual Retail & Bulk Order Commerce Platform",
    challenge: "Brand required a single platform handling both retail consumers with rich imagery and wholesale B2B buyers with tiered volume pricing and GST invoicing.",
    solution: "Engineered a custom WooCommerce architecture supporting dynamic wholesale tier tables, bulk quantity matrix selectors, and automatic GST compliant invoice generation.",
    stack: ["WooCommerce", "MySQL", "Custom REST Hooks", "Stripe & Net Banking"],
    metrics: "₹1.4 Cr+ Annual GMV Processed • 99.8% Checkout Uptime",
    features: [
      "Dynamic B2B role pricing with instant tier discounts",
      "Automated GST invoicing with downloadable PDF reports",
      "Optimized WebP image delivery pipeline"
    ],
    img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "architecture-studio-portfolio",
    category: "web",
    categoryLabel: "Web & Brand",
    title: "Minimalist Architectural Studio Portfolio",
    subtitle: "High-Aesthetic Brand Identity & Interactive Gallery",
    challenge: "A premier architecture practice needed a digital presence that matched their physical design standards—requiring silky-smooth transitions without sacrificing load speeds.",
    solution: "Crafted a bespoke portfolio website utilizing Next.js 16, fluid Framer Motion choreography, dynamic project case filtering, and responsive high-fidelity image delivery.",
    stack: ["Next.js 16", "Framer Motion", "Tailwind CSS", "Vercel Edge"],
    metrics: "99 Performance Score on Google Lighthouse • 0 Layout Shifts",
    features: [
      "Kinetic typography and fluid layout animations",
      "High-resolution image galleries with progressive lazy-loading",
      "Engineered for maximum organic search and local discoverability"
    ],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "consulting-firm-web",
    category: "web",
    categoryLabel: "Web & Brand",
    title: "Corporate Advisory & Enterprise Consulting Portal",
    subtitle: "High-Conversion Lead Generation & Thought Leadership",
    challenge: "Consultancy firm struggled with low lead conversion from static brochures and had no automated way to qualify inbound client inquiries.",
    solution: "Designed and built an authoritative corporate website with interactive assessment calculators, case study showcases, and seamless CRM webhook integration.",
    stack: ["Next.js", "Tailwind 4", "Lucide React", "HubSpot API"],
    metrics: "3x Inbound Qualified Leads • Sub-1s Global Edge Delivery",
    features: [
      "Interactive ROI calculator converting visitors to booked consultations",
      "Automated lead ingestion into corporate CRM pipelines",
      "Tactical responsive design across all devices"
    ],
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  }
];

interface CategoryTab {
  label: string;
  value: ProjectCategory;
  icon: typeof Layers;
  description: string;
}

const categoryTabs: CategoryTab[] = [
  { 
    label: "All", 
    value: "all", 
    icon: Layers, 
    description: "Complete overview of production SaaS, mobile apps, e-commerce, and bespoke brand platforms." 
  },
  { 
    label: "SaaS & ERP", 
    value: "saas", 
    icon: Database, 
    description: "Multi-tenant cloud architectures, data-dense workstations, and isolated enterprise systems." 
  },
  { 
    label: "Mobile Apps", 
    value: "mobile", 
    icon: Smartphone, 
    description: "Cross-platform iOS & Android companion applications with offline sync and biometrics." 
  },
  { 
    label: "E-Commerce", 
    value: "ecommerce", 
    icon: ShoppingBag, 
    description: "Sub-second product filtering, custom checkouts, and high-conversion WooCommerce systems." 
  },
  { 
    label: "Websites", 
    value: "web", 
    icon: Globe, 
    description: "Bespoke digital portfolios and corporate advisory portals scoring 99+ on performance." 
  },
];

export default function WorkShowcase() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  const filteredProjects = activeTab === "all" 
    ? projectsData 
    : projectsData.filter((p) => p.category === activeTab);

  return (
    <div className="space-y-16">
      {/* Elevated Category Dock */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-full max-w-3xl overflow-x-auto pb-2 pt-1 px-2 no-scrollbar flex justify-start sm:justify-center">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] shrink-0">
            {categoryTabs.map((tab) => {
              const isActive = activeTab === tab.value;
              const Icon = tab.icon;
              const count = tab.value === "all" 
                ? projectsData.length 
                : projectsData.filter((p) => p.category === tab.value).length;

              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                    isActive 
                      ? "text-white shadow-sm" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-[#757C54] rounded-xl shadow-sm shadow-[#757C54]/20"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon size={14} className={isActive ? "text-white" : "text-slate-400"} />
                    {tab.label}
                  </span>
                  <span
                    className={`relative z-10 text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-colors ${
                      isActive 
                        ? "bg-white/20 text-white" 
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Context Header */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-slate-500 font-medium text-center max-w-lg px-4"
          >
            {categoryTabs.find((t) => t.value === activeTab)?.description}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Flagship Feature Callout (when 'all' or 'saas' is active) */}
      {(activeTab === "all" || activeTab === "saas") && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#1E250A] via-[#2A3410] to-[#121703] text-white rounded-[40px] p-6 md:p-10 border border-[#757C54]/30 shadow-2xl overflow-hidden relative"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#757C54]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#757C54]/30 border border-[#757C54]/40 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <Zap size={14} className="text-emerald-300" /> Flagship Production Ecosystem
              </div>
              
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Radora: Next-Gen Educational Operating System & Mobile App
              </h2>
              
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                A mission-critical multi-tenant ERP engineered for schools and colleges, paired with a companion mobile app for teachers and parents. Built with strict tenant data isolation, optimistic state handling, and zero tech lock-in.
              </p>

              {/* Companion App Sub-card */}
              <div className="bg-black/30 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Smartphone size={14} /> Integrated Mobile App Portal (iOS & Android)
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Real-time push alerts, instant classroom attendance synchronization, exam schedules, and biometric parent authentication syncing directly with the central ERP database.
                </p>
              </div>


            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-[28px] overflow-hidden border border-white/10 shadow-2xl relative">
                <Image
                  src="/radoraimage.png"
                  alt="Radora ERP Dashboard"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-xs font-bold text-white bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                    Live Production: 100% Tenant Boundary Enforced
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Grid of Projects */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects
            .filter((p) => (activeTab === "all" ? !p.isFlagship : true))
            .map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-[28px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 text-slate-800 backdrop-blur-md shadow-sm border border-slate-200">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#757C54] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
