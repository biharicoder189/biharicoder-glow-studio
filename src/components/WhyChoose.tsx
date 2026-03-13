import { Gauge, Brain, Rocket } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

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
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-display font-bold mb-3">Why Choose Biharicoder</h2>
          <p className="text-muted-foreground text-sm lg:text-base">Excellence in every line of code we ship.</p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6" staggerDelay={0.15}>
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="rounded-xl border border-border bg-card p-5 lg:p-6 text-center glow-card">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="text-white" size={22} />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{reason.title}</h3>
                <p className="text-xs lg:text-sm text-muted-foreground">{reason.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyChoose;