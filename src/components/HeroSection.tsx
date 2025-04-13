
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headlineText = "I build robust and scalable web applications.";
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateMovement = (axis: 'x' | 'y') => {
    const value = axis === 'x' ? mousePosition.x : mousePosition.y;
    const windowSize = axis === 'x' ? window.innerWidth : window.innerHeight;
    return ((value / windowSize) - 0.5) * 20;
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
    >
      {/* Background elements for character/uniqueness */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-purple-500/5 blur-3xl"
          style={{ 
            transform: `translate(${calculateMovement('x')}px, ${calculateMovement('y')}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/3 w-60 h-60 rounded-full bg-orange-500/5 blur-3xl"
          style={{ 
            transform: `translate(${-calculateMovement('x')}px, ${-calculateMovement('y')}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        />
      </div>

      <div className="container mx-auto max-w-5xl z-10">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 md:mb-0 max-w-3xl reveal" data-animation="fade-up">
            {headlineText.split('').map((char, index) => (
              <span 
                key={index} 
                className="char-animate inline-block" 
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          
          <div className="text-right hidden md:block">
            <span className="font-serif italic text-lg opacity-75">Frontend Developer</span>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="p-2 rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
