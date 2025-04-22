
import { useState, useEffect } from 'react';
import { ArrowDown, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);
  const [showRocketTrail, setShowRocketTrail] = useState(false);
  const [rocketPosition, setRocketPosition] = useState({ x: 0, y: 0 });
  
  // Handle rocket flight easter egg
  const handleRocketClick = () => {
    setIsEasterEggActive(true);
    
    // Random start position (bottom of screen)
    const startX = Math.floor(Math.random() * window.innerWidth);
    setRocketPosition({ x: startX, y: window.innerHeight });
    
    setShowRocketTrail(true);
    
    // Animate rocket flight
    setTimeout(() => {
      setShowRocketTrail(false);
      setIsEasterEggActive(false);
    }, 3000);
  };
  
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-6 overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-60 h-60 rounded-full bg-orange-500/5 blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-5xl z-10">
        <div className="flex flex-col items-center text-center">
          {/* Developer role badge */}
          <div className="inline-block mb-8 px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium text-sm shadow-sm">
            Frontend Developer
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Building digital experiences with 
            <span className="relative inline-block mx-2">
              passion
              <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500/50"></span>
            </span> 
            and 
            <span className="relative inline-block mx-2">
              precision
              <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500/50"></span>
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-foreground/80 max-w-2xl mb-12">
            I create robust, scalable web applications with focus on performance and usability.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="bg-foreground text-cream hover:bg-foreground/80"
              size="lg"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            
            {/* Easter egg trigger button */}
            <button 
              onClick={handleRocketClick}
              className="absolute bottom-20 right-8 p-3 rounded-full bg-white/90 hover:bg-white shadow-md transition-all duration-300 hover:scale-110"
              aria-label="Easter Egg"
              disabled={isEasterEggActive}
            >
              <Rocket className="w-5 h-5 text-purple-500" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="p-2 rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
      
      {/* Easter egg animation - flying rocket */}
      {isEasterEggActive && (
        <div 
          className="fixed z-50 pointer-events-none"
          style={{
            left: `${rocketPosition.x}px`,
            top: `${rocketPosition.y}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'top 3s cubic-bezier(0.3, 0, 0.2, 1)'
          }}
        >
          <Rocket 
            className="w-10 h-10 text-purple-500 transform -rotate-45"
            style={{
              top: isEasterEggActive ? '-100vh' : '0',
            }}
          />
          {showRocketTrail && (
            <div className="absolute top-full left-1/2 w-2 h-32 bg-gradient-to-b from-purple-500/80 to-transparent rounded-full transform -translate-x-1/2"></div>
          )}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
