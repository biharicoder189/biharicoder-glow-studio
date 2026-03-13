import { Lightbulb, Layout, Code2, CheckCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const steps = [
  { icon: Lightbulb, step: "1", title: "Idea & Strategy", description: "Defining goals, vision, and market context." },
  { icon: Layout, step: "2", title: "Architecture", description: "Designing scalable and secure technical systems." },
  { icon: Code2, step: "3", title: "Development", description: "Agile coding with modern best practices." },
  { icon: CheckCircle, step: "4", title: "Optimization", description: "Polishing, launching, and continuous improvement." },
];

const OurProcess = () => {
  return (
    <section className="py-14 lg:py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-display font-bold mb-3">Our Process</h2>
          <p className="text-muted-foreground text-sm lg:text-base">Transforming ideas into digital reality, following a proven workflow.</p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8" staggerDelay={0.12}>
          {steps.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
                )}
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full gradient-bg flex items-center justify-center mx-auto mb-3 shadow-lg shadow-primary/20">
                  <s.icon className="text-white" size={20} />
                </div>
                <span className="text-xs text-primary font-semibold">{s.step}</span>
                <h3 className="text-sm lg:text-base font-display font-semibold mt-1 mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default OurProcess;
