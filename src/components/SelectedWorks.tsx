import projectChallenger from "@/assets/project-challenger.jpg";
import projectResume from "@/assets/project-resume.jpg";
import projectTracker from "@/assets/project-tracker.jpg";
import projectAnalytics from "@/assets/project-analytics.jpg";

const projects = [
  {
    image: projectChallenger,
    tag: "Web App",
    title: "Challenger Quiz Platform",
    description: "Real-time quiz battles",
  },
  {
    image: projectResume,
    tag: "AI Tool",
    title: "AI Resume Analyzer",
    description: "Smart resume screening",
  },
  {
    image: projectTracker,
    tag: "SaaS",
    title: "Employee In-Out Tracker",
    description: "Team attendance management",
  },
  {
    image: projectAnalytics,
    tag: "Dashboard",
    title: "Automation Dashboard",
    description: "Business analytics",
  },
];

const SelectedWorks = () => {
  return (
    <section id="projects" className="py-14 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Selected Works</h2>
            <p className="text-muted-foreground text-lg">A showcase of our recent digital crafts.</p>
          </div>
          <a href="#projects" className="hidden md:inline-flex text-sm text-primary hover:underline">
            View all projects →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-border bg-card overflow-hidden glow-card cursor-pointer"
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{project.tag}</span>
                <h3 className="text-lg font-display font-semibold mt-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
