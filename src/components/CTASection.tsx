import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-28 lg:py-36">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden p-12 lg:p-20 text-center">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-accent/60 to-primary/40" />
          <div className="absolute inset-0 bg-background/30" />

          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
              Have an idea for your{" "}
              <span className="gradient-text">next startup?</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-8">
              Let's design and build something powerful together. We're ready to help you bring your vision to life.
            </p>
            <Button
              variant="outline-glow"
              size="lg"
              className="text-base px-10 bg-background/80 hover:bg-background border-foreground/20"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
