import { Button } from "@/components/ui/button";

const techBadges = ["Node.js", "Next.js", "AI Systems", "SaaS", "Cloud"];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[80vh] lg:min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <p className="text-sm text-primary font-medium mb-6 tracking-wide">
          ✦ Your technology partner for the future
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display font-extrabold leading-tight tracking-tight max-w-4xl mx-auto mb-4">
          We Build Modern{" "}
          <span className="gradient-text">Web Platforms,</span>{" "}
          <span className="gradient-text">AI Systems,</span> and Scalable SaaS Products.
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Biharicoder is a digital product studio helping startups and businesses build powerful software and automation systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="gradient" size="lg" className="text-base px-8">
            Start a Project
          </Button>
          <Button variant="outline-glow" size="lg" className="text-base px-8">
            Try Challenger
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="px-4 py-1.5 text-xs font-medium text-muted-foreground border border-border rounded-full bg-secondary/50"
            >
              ◆ {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
