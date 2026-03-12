import { Monitor, Bot, Server, Workflow } from "lucide-react";

const solutions = [
  {
    icon: Monitor,
    title: "High Performance Websites",
    description: "Ultra-fast, SEO-optimized landing pages and corporate websites using Next.js and Tailwind CSS. We focus on conversion and speed.",
    bullets: ["Search Performance Optimization", "Custom CMS Integration", "Web Vitalization"],
  },
  {
    icon: Bot,
    title: "AI Systems & Automation",
    description: "Leverage the power of Generative AI. We build custom RAG pipelines, chatbots, and automation agents for your workflow.",
    bullets: ["Custom GPT Integrations", "LangChain/LlamaIndex Solutions", "Workflow Automation"],
  },
  {
    icon: Server,
    title: "Scalable SaaS Development",
    description: "From MVP to enterprise-grade platforms. We handle authentication, payments, and multi-tenant databases with ease.",
    bullets: ["Multi-Tenant Architecture", "Subscription Management", "Secure Infrastructure"],
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Optimize your operations by automating repetitive tasks. Custom CRMs, internal dashboards, and data pipelines.",
    bullets: ["Inbound/Outgoing", "Custom Dashboards", "Custom Pipelines"],
  },
];

const ExpertSolutions = () => {
  return (
    <section id="services" className="py-14 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Expert Solutions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer specialized services to help your business thrive in the modern digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol) => (
            <div key={sol.title} className="rounded-xl border border-border bg-card p-5 lg:p-6 glow-card">
              <div className="flex items-center gap-3 mb-4">
                <sol.icon size={20} className="text-primary" />
                <h3 className="text-xl font-display font-semibold">{sol.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-5">{sol.description}</p>
              <ul className="space-y-2">
                {sol.bullets.map((b) => (
                  <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span> {b}
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

export default ExpertSolutions;
