import { Lightbulb, Layout, Code2, CheckCircle } from "lucide-react";

const steps = [
  { icon: Lightbulb, step: "1", title: "Idea & Strategy", description: "Defining goals, vision, and market context." },
  { icon: Layout, step: "2", title: "Architecture", description: "Designing scalable and secure technical systems." },
  { icon: Code2, step: "3", title: "Development", description: "Agile coding with modern best practices." },
  { icon: CheckCircle, step: "4", title: "Optimization", description: "Polishing, launching, and continuous improvement." },
];

const OurProcess = () => {
  return (
    <section className="py-28 lg:py-36">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Our Process</h2>
          <p className="text-muted-foreground text-lg">Transforming ideas into digital reality, following a proven workflow.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/20">
                <s.icon className="text-white" size={24} />
              </div>
              <span className="text-xs text-primary font-semibold">{s.step}</span>
              <h3 className="text-lg font-display font-semibold mt-1 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
