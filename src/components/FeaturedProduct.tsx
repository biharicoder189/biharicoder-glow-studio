import { Button } from "@/components/ui/button";
import { Zap, Trophy, BookOpen, Gamepad2 } from "lucide-react";
import challengerMockup from "@/assets/challenger-mockup.png";
import { ScrollReveal } from "./ScrollReveal";

const features = [
  { icon: Zap, text: "Real-time quiz battles" },
  { icon: Trophy, text: "Automated leaderboard system" },
  { icon: BookOpen, text: "Multi-category quizzes" },
  { icon: Gamepad2, text: "Auto-Matchcraft gameplay" },
];

const FeaturedProduct = () => {
  return (
    <section className="py-14 lg:py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-sm text-primary font-medium mb-4 tracking-widest uppercase">Featured Product</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-2xl lg:text-4xl font-display font-bold mb-4">
                Challenger Quiz Battle Platform
              </h2>
              <p className="text-muted-foreground text-sm lg:text-base mb-6">
                A real-time competitive gaming platform where users battle in knowledge-based challenges. Built with WebSockets for ultra-low latency and a clean, immersive interface.
              </p>

              <div className="space-y-3 mb-6">
                {features.map((f) => (
                  <div key={f.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <f.icon size={16} className="text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{f.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="gradient">Try Live Platform</Button>
                <Button variant="outline-glow">View Project</Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 to-accent/5 blur-[60px] rounded-full" />
              <img
                src={challengerMockup}
                alt="Challenger Quiz Battle Platform mockup"
                className="relative rounded-2xl max-w-sm lg:max-w-md w-full object-contain animate-float"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
