import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="contact" className="py-14 lg:py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="relative rounded-2xl overflow-hidden p-8 lg:p-14 text-center">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-accent/60 to-primary/40" />
            <div className="absolute inset-0 bg-background/30" />

            <div className="relative z-10">
              <motion.h2
                className="text-2xl lg:text-4xl font-display font-bold mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Have an idea for your{" "}
                <span className="gradient-text">next startup?</span>
              </motion.h2>
              <motion.p
                className="text-lg text-foreground/80 max-w-xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Let's design and build something powerful together. We're ready to help you bring your vision to life.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  variant="outline-glow"
                  size="lg"
                  className="text-base px-10 bg-background/80 hover:bg-background border-foreground/20"
                >
                  Start Your Project
                </Button>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
