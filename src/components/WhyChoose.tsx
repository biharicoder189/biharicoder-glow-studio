import { Gauge, Brain, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Gauge,
    title: "Performance First",
    description: "Built for speed and scalability from day one. We engineer enterprise-level applications.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Modern AI-powered systems integrated into real products for competitive advantage.",
  },
  {
    icon: Rocket,
    title: "Startup Focus",
    description: "Products designed to scale from MVP to millions of users. We understand the startup lifecycle.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-14 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Why Choose Biharicoder</h2>
          <p className="text-muted-foreground text-lg">Excellence in every line of code we ship.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-xl border border-border bg-card p-8 text-center glow-card">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-6">
                <reason.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
