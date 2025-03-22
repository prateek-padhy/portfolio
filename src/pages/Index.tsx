
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Transition from '@/components/Transition';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Sparkles, Rocket, Star } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay = 0 }) => {
  const randomX = Math.random() * 100;
  const randomDuration = 15 + Math.random() * 10;

  return (
    <div 
      className="absolute opacity-30 z-10 text-accent"
      style={{
        left: `${randomX}%`,
        top: '-20px',
        animation: `float ${randomDuration}s ease-in-out infinite ${delay}s`,
      }}
    >
      <Icon size={20} />
    </div>
  );
};

const CursorTrail = () => {
  const [trailDots, setTrailDots] = useState([]);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const dot = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };
      
      setTrailDots((prevDots) => [...prevDots, dot].slice(-15));
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {trailDots.map((dot, i) => (
        <div 
          key={dot.id}
          className="absolute rounded-full bg-accent/20"
          style={{
            width: `${8 - i * 0.5}px`,
            height: `${8 - i * 0.5}px`,
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            opacity: 1 - (i / trailDots.length),
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

const FloatingIcons = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const iconComponents = [
      { component: Sparkles, delay: 0 },
      { component: Rocket, delay: 2 },
      { component: Star, delay: 4 },
      { component: Sparkles, delay: 6 },
      { component: Star, delay: 8 },
    ];
    
    setIcons(iconComponents);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <FloatingIcon key={index} icon={icon.component} delay={icon.delay} />
      ))}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <CursorTrail />
      <FloatingIcons />
      <AnimatePresence mode="wait">
        <Transition>
          <main>
            <Hero />
            <Projects />
            <About />
            <Contact />
          </main>
          <Footer />
        </Transition>
      </AnimatePresence>
    </div>
  );
};

export default Index;
