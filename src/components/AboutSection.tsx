
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

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
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white"
    >
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title reveal" data-animation="fade-up">
              About Me
            </h2>
            
            <p className="text-lg mb-6 text-foreground/80 reveal" data-animation="fade-up">
              I'm a passionate frontend developer with over 9 years of experience. I specialize in building clean, user-friendly websites and web applications, while also having a strong understanding of backend technologies. I love creating seamless and engaging user experiences with attention to detail.
            </p>
            
            <p className="text-lg mb-8 text-foreground/80 reveal" data-animation="fade-up">
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or solving development challenges.
            </p>
            
            <div className="reveal" data-animation="fade-up">
              <a href="#skills" className="btn-primary">
                Learn More About My Skills
              </a>
            </div>
          </div>
          
          <div className="relative reveal" data-animation="fade-left">
            <div className="bg-muted p-8 rounded-lg relative z-10">
              <div className="w-full max-w-sm mx-auto aspect-square bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center overflow-hidden">
                <div className="relative w-4/5 h-4/5 rounded-full bg-white shadow-md flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-primary/5 backdrop-blur-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2/3 h-2/3 text-primary/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 18l2-2-2-2"></path>
                      <path d="M8 6l-2 2 2 2"></path>
                      <path d="M18 16l2 2-2 2"></path>
                      <path d="M6 8l-2-2 2-2"></path>
                      <path d="M2 12h20"></path>
                      <path d="M12 2v20"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
