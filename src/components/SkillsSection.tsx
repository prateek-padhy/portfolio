
import { useEffect, useRef } from 'react';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  const frontendSkills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 90 },
    { name: 'Vue.js', level: 85 },
    { name: 'SASS', level: 80 },
    { name: 'TypeScript', level: 85 }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 80 },
    { name: 'PHP', level: 75 },
    { name: 'SQL', level: 80 }
  ];

  const toolsSkills = [
    { name: 'Git', level: 90 },
    { name: 'Webpack', level: 85 },
    { name: 'Docker', level: 75 },
    { name: 'Firebase', level: 80 },
    { name: 'AWS', level: 70 }
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

  const SkillCard = ({ title, skills, delay }: { title: string; skills: { name: string; level: number }[]; delay: number }) => (
    <div className="skill-card reveal" data-animation="fade-up" style={{ animationDelay: `${delay}ms` }}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-4 w-full">
        {skills.map((skill, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-foreground/70">{skill.level}%</span>
            </div>
            <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
              <div 
                className="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `0%` }}
                ref={(el) => {
                  if (el) {
                    setTimeout(() => {
                      el.style.width = `${skill.level}%`;
                    }, 300 + index * 100);
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-muted"
    >
      <div className="container px-6 mx-auto">
        <h2 className="section-title text-center mb-16 mx-auto reveal" data-animation="fade-up">
          My Skills
        </h2>
        
        <p className="text-lg mb-12 text-center max-w-3xl mx-auto text-foreground/80 reveal" data-animation="fade-up">
          I work with a wide range of technologies to deliver exceptional frontend and backend solutions. Below are the main tools and frameworks I specialize in.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard title="Frontend" skills={frontendSkills} delay={100} />
          <SkillCard title="Backend" skills={backendSkills} delay={300} />
          <SkillCard title="Tools & Others" skills={toolsSkills} delay={500} />
        </div>
        
        <div className="mt-16 text-center reveal" data-animation="fade-up">
          <a href="#projects" className="btn-primary">
            See My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
