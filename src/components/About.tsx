
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Palette, Sparkles, Zap, Book, Globe, GitBranch, Server } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      technologies: ["Figma", "Adobe XD", "Responsive Design", "Wireframing", "Prototyping"]
    },
    {
      category: "Tools & Methods",
      icon: <GitBranch className="w-6 h-6" />,
      technologies: ["Git", "GitHub", "Agile/Scrum", "CI/CD", "Jest/Testing Library"]
    },
    {
      category: "Backend Knowledge",
      icon: <Server className="w-6 h-6" />,
      technologies: ["Node.js", "RESTful APIs", "Express", "Firebase", "MongoDB"]
    },
  ];
  
  const services = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Building responsive and optimized user interfaces with modern JavaScript frameworks."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Applications",
      description: "Developing robust web applications with intuitive user experiences and clean code."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating user-centered designs with a focus on usability, accessibility, and visual appeal."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Optimizing website performance for faster load times and better user experience."
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-secondary/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            About Me
          </span>
          <h2 className="section-heading">Who I Am</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate frontend developer with a keen eye for design and a commitment to creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold font-display mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a frontend developer passionate about turning ideas into elegant, functional websites and applications. With a background in both design and development, I bridge the gap between aesthetics and functionality.
                </p>
                <p>
                  My approach to development focuses on creating intuitive interfaces that not only look great but also provide seamless user experiences. I'm constantly learning and adapting to new technologies and methodologies to stay at the forefront of frontend development.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or experimenting with creative coding and generative art.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold font-display mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-background/50 rounded-xl p-4 border border-border/50"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        {skill.icon}
                      </div>
                      <h4 className="font-medium">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-secondary rounded-md text-sm text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-2xl font-bold font-display mt-20 mb-8 text-center"
        >
          What I Do
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 flex flex-col items-center text-center card-hover"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold mb-2">{service.title}</h4>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
