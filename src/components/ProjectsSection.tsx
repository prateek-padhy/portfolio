import { useState } from "react";
import { ExternalLink, } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Risk Data & Services",
      description:
        "Unified 12 analytics apps into a blazing-fast React Nx monorepo, boosting deployment efficiency by 60%. Led the creation of a shared component library and design system, modernised data visualisation with React + TypeScript, and introduced Google Maps API for stunning, interactive risk insights.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000",
      tags: ["React", "Nx Monorepo", "Google Maps API", "Module Federatoin", "Vite", "Docker", "MUI"],
      liveLink: "https://corporatesolutions.swissre.com/insurance-services/risk-data-and-services.html",
      codeLink: "#",
    },
    {
      title: "TalkTalk Help & Support",
      description:
        "Built a robust Angular portal serving 35k+ weekly users, slashing support calls by 25%. Integrated Contentful CMS for rapid content updates, delivered diagnostic tools, and enabled data-driven decisions with Optimizely and Google Analytics.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000",
      tags: ["Angulat", "Optimizely", "Redux", "Bootstrap", "Node.js", "Jest", "Cypress"],
      liveLink: "https://www.talktalk.co.uk/",
      codeLink: "#",
    },
    {
      title: "Goods & Services Tax (GST)",
      description:
        "Engineered frontend components for India’s GST portal, empowering millions of businesses. Developed Java microservices, real-time dashboards, and delivered seamless multilingual support across 24 languages.",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1000",
      tags: ["Angular", "Nginx", "REST APIs", "C3.js", "Java","WCAG", "I18n", "L10n" ],
      liveLink: "https://www.gst.gov.in/",
      codeLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="section-divider"></div>

        <div className="mt-10 mb-12">
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden border border-border transition-all duration-300 hover:shadow-lg ${
                activeProject === index
                  ? "ring-2 ring-purple-500/30 shadow-md"
                  : ""
              }`}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="md:col-span-1 h-full">
                  <div className="h-full aspect-[4/3] md:aspect-auto bg-gray-100 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <CardContent className="md:col-span-2 p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-serif mb-3 relative group">
                      {project.title}
                      {activeProject === index && (
                        <span className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      )}
                    </h3>
                    <p className="mb-4 text-base">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`text-sm py-1 px-3 rounded-full transition-colors duration-300 
                            ${
                              activeProject === index
                                ? "bg-purple-100 text-purple-800"
                                : "bg-secondary text-foreground/70"
                            }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-4">
                    <a
                      href={project.liveLink}
                      className="text-sm flex items-center hover:text-purple-600 transition-colors"
                      target="_blank"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Project
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
