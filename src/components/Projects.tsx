
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce store management with real-time analytics and inventory tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Travel Booking Platform",
      description: "A modern travel booking platform with a seamless user experience and responsive design across all devices.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1470&auto=format&fit=crop",
      tags: ["Next.js", "React Query", "Framer Motion", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Health & Fitness App",
      description: "A fitness tracking application with personalized workout plans, nutrition tracking, and progress visualization.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
      tags: ["React Native", "Redux", "Firebase", "Styled Components"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI-Powered Content Platform",
      description: "A content creation platform leveraging AI to help writers generate, edit, and optimize their content.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop",
      tags: ["Vue.js", "Node.js", "OpenAI API", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            My Work
          </span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills in frontend development, responsive design, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
