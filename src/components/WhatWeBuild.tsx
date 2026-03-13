import { Globe, Brain, Layers, Cog } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Web Platforms",
    features: ["High-performance websites", "SEO optimized", "Modern architecture"],
  },
  {
    icon: Brain,
    title: "AI Systems",
    features: ["AI integrations", "Automation workflows", "Intelligent tools"],
  },
  {
    icon: Layers,
    title: "SaaS Products",
    features: ["Subscription systems", "Multi-user platforms", "Secure infrastructure"],
  },
  {
    icon: Cog,
    title: "Automation Tools",
    features: ["Workflow automation", "Custom integrations", "Business optimization"],
  },
];

const WhatWeBuild = () => {
  return (
    <section id="about" className="py-14 lg:py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-display font-bold mb-3">What We Build</h2>
          <p className="text-muted-foreground text-sm lg:text-base">Crafting digital experiences with precision and scale.</p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group rounded-xl border border-border bg-card p-4 lg:p-5 glow-card">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-3">
                  <service.icon className="text-white" size={18} />
                </div>
                <h3 className="text-base font-display font-semibold mb-2">{service.title}</h3>
                <ul className="space-y-1.5">
                  {service.features.map((f) => (
                    <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhatWeBuild;
