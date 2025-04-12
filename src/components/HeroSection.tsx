
import { useEffect, useRef } from 'react';

const CodeSnippets = () => {
  const snippets = [
    { code: '<div className="app">', top: '15%', left: '10%', delay: '0s' },
    { code: 'const [state, setState] = useState()', top: '25%', left: '75%', delay: '0.5s' },
    { code: 'function handleClick() {', top: '55%', left: '15%', delay: '1s' },
    { code: 'return <Component />;', top: '75%', left: '80%', delay: '1.5s' },
    { code: 'import React from "react";', top: '10%', left: '50%', delay: '2s' },
    { code: 'useEffect(() => {', top: '40%', left: '20%', delay: '2.5s' },
    { code: '}, [dependencies]);', top: '45%', left: '25%', delay: '3s' },
    { code: '<Header />', top: '85%', left: '40%', delay: '3.5s' },
    { code: 'export default App;', top: '70%', left: '60%', delay: '4s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {snippets.map((snippet, index) => (
        <div
          key={index}
          className="floating-code"
          style={{
            top: snippet.top,
            left: snippet.left,
            animationDelay: snippet.delay,
          }}
        >
          {snippet.code}
        </div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted pt-20"
    >
      <CodeSnippets />
      
      <div className="container px-6 mx-auto z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 reveal active" data-animation="fade-up">
            Hi, I'm <span className="text-primary">John Doe</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary/80 mb-8 reveal active" data-animation="fade-up" style={{ animationDelay: '0.2s' }}>
            Frontend Developer with 9 years of experience
          </p>
          
          <div className="reveal active" data-animation="fade-up" style={{ animationDelay: '0.4s' }}>
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
