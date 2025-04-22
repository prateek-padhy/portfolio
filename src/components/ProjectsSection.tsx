import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A responsive e-commerce website built with React and Redux, featuring product listings, cart functionality, and payment integration.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000",
      tags: ["React", "Redux", "Node.js", "MongoDB"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "A dynamic single-page application for managing tasks, built with Vue.js and Firebase, with real-time updates and drag-and-drop functionality.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000",
      tags: ["Vue.js", "Firebase", "CSS3", "JavaScript"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "An interactive portfolio site with scroll-triggered animations and transitions, showcasing creative design principles and smooth interactions.",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1000",
      tags: ["HTML", "SCSS", "JavaScript", "GSAP"],
      liveLink: "#",
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
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Project
                    </a>
                    <a
                      href={project.codeLink}
                      className="text-sm flex items-center hover:text-purple-600 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      View Code
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
