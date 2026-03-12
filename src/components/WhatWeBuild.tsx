import { Globe, Brain, Layers, Cog } from "lucide-react";

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
    <section id="about" className="py-28 lg:py-36">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">What We Build</h2>
          <p className="text-muted-foreground text-lg">Crafting digital experiences with precision and scale.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-6 glow-card"
            >
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-5">
                <service.icon className="text-white" size={22} />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3">{service.title}</h3>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
