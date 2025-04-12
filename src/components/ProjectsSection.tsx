
import { useEffect, useRef } from 'react';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A responsive e-commerce website built with React and Redux, featuring product listings, cart functionality, and payment integration.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000',
      tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'A dynamic single-page application for managing tasks, built with Vue.js and Firebase, with real-time updates and drag-and-drop functionality.',
      image: 'https://images.unsplash.com/photo-1611224885990-ab7363d7f2a0?q=80&w=1000',
      tags: ['Vue.js', 'Firebase', 'CSS3', 'JavaScript'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'An interactive portfolio site with scroll-triggered animations and transitions, showcasing creative design principles and smooth interactions.',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1000',
      tags: ['HTML', 'SCSS', 'JavaScript', 'GSAP'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that provides real-time weather data and forecasts using external APIs, with a clean, responsive interface.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000',
      tags: ['React', 'API Integration', 'Tailwind CSS'],
      liveLink: '#',
      codeLink: '#'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const revealElements = sectionRef.current.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
      elementsRef.current = Array.from(revealElements) as HTMLElement[];
    }

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white"
    >
      <div className="container px-6 mx-auto">
        <h2 className="section-title text-center mb-16 mx-auto reveal" data-animation="fade-up">
          My Projects
        </h2>
        
        <p className="text-lg mb-12 text-center max-w-3xl mx-auto text-foreground/80 reveal" data-animation="fade-up">
          Here are some of the projects I've worked on. I specialize in crafting beautiful, interactive, and scalable web applications. Click through to view the live projects and their code.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card h-80 reveal"
              data-animation="fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              
              <div className="project-overlay">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 text-white/90 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-white/10 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a href={project.liveLink} className="px-4 py-2 bg-primary rounded hover:bg-primary/90 transition-colors text-sm">
                    Live Demo
                  </a>
                  <a href={project.codeLink} className="px-4 py-2 bg-white/20 rounded hover:bg-white/30 transition-colors text-sm">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal" data-animation="fade-up">
          <a href="#contact" className="btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
