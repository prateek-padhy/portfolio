
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Palette, Sparkles, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React & React Native", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "HTML & CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Redux", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "UI/UX Design", level: 65 },
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
    <section id="about" className="py-20 px-6 bg-secondary/30">
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
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.1 * index, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
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
