import { Layout, Smartphone, Server, ShoppingCart, Activity, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function ServicesPage() {
  const services = [
    {
      title: "Custom Web Apps & SaaS",
      icon: <Layout className="text-blue-600" size={32} />,
      desc: "Multi-tenant SaaS architectures, customer portals, operational workflow software, role-based administration panels.",
      frameworks: ["Next.js", "React", "Node.js", "Express", "PostgreSQL"],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100"
    },
    {
      title: "E-Commerce Platforms",
      icon: <ShoppingCart className="text-emerald-600" size={32} />,
      desc: "Custom checkout funnels, multi-currency payment integrations, real-time inventory management, headless storefronts.",
      frameworks: ["WooCommerce", "Shopify Plus", "Stripe", "Razorpay"],
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100"
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="text-purple-600" size={32} />,
      desc: "Cross-platform iOS and Android apps, offline synchronization, automated push notifications, geolocation tracking.",
      frameworks: ["React Native", "Expo", "Flutter", "Firebase"],
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100"
    },
    {
      title: "Cloud & API Engineering",
      icon: <Server className="text-amber-600" size={32} />,
      desc: "RESTful and GraphQL API design, serverless microservices, automated CI/CD pipelines, containerization, VPC security.",
      frameworks: ["AWS (ECS, RDS, S3)", "Supabase", "Docker", "Vercel"],
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100"
    },
    {
      title: "Maintenance & Optimization",
      icon: <Activity className="text-rose-600" size={32} />,
      desc: "Database query tuning, Core Web Vitals optimization, automated security patches, uptime monitoring, retainer support.",
      frameworks: ["Redis", "Cloudflare", "Sentry", "Datadog"],
      bgColor: "bg-rose-50",
      borderColor: "border-rose-100"
    }
  ];

  return (
    <div className="px-4 py-12 md:px-8 max-w-[1400px] mx-auto min-h-screen">
      <FadeIn>
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Full-Cycle Capabilities</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Comprehensive development services tailored to product development, platform modernization, and digital expansion.
          </p>
        </div>
      </FadeIn>

      <div className="flex flex-col gap-8">
        {services.map((service, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="bg-white rounded-[32px] p-8 md:p-12 border border-slate-200 flex flex-col md:flex-row gap-8 items-start hover:shadow-lg transition-all group">
              <div className={`w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center ${service.bgColor} border ${service.borderColor}`}>
                {service.icon}
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6 max-w-3xl">
                  {service.desc}
                </p>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Primary Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.frameworks.map(fw => (
                      <span key={fw} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-full flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-blue-500"/> {fw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
