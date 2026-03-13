import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const techBadges = ["Node.js", "Next.js", "AI Systems", "SaaS", "Cloud"];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[80vh] lg:min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.p
          className="text-sm text-primary font-medium mb-6 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          ✦ Your technology partner for the future
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-4xl lg:text-6xl font-display font-extrabold leading-tight tracking-tight max-w-4xl mx-auto mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          We Build Modern{" "}
          <span className="gradient-text">Web Platforms,</span>{" "}
          <span className="gradient-text">AI Systems,</span> and Scalable SaaS Products.
        </motion.h1>

        <motion.p
          className="text-base text-muted-foreground max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Biharicoder is a digital product studio helping startups and businesses build powerful software and automation systems.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Button variant="gradient" size="lg" className="text-base px-8">
            Start a Project
          </Button>
          <Button variant="outline-glow" size="lg" className="text-base px-8">
            Try Challenger
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="px-4 py-1.5 text-xs font-medium text-muted-foreground border border-border rounded-full bg-secondary/50"
            >
              ◆ {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
