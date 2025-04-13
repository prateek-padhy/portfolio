
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [easterEggActive, setEasterEggActive] = useState(false);
  const brandName = "John Doe";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleEasterEgg = () => {
    setEasterEggActive(!easterEggActive);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream/80 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="#home" className="text-2xl font-serif">
            {brandName.split('').map((char, index) => (
              <span key={index} className="brand-char" style={{ transitionDelay: `${index * 50}ms` }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </a>
          
          <div className="flex items-center space-x-10">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        </div>
      </header>
      
      {/* Easter Egg Button */}
      <button onClick={toggleEasterEgg} className="easter-egg" aria-label="Easter Egg">
        <Sparkles className="w-5 h-5 text-purple-500" />
      </button>

      {/* Easter Egg Content */}
      <div className={`easter-egg-content ${easterEggActive ? 'active' : ''}`}>
        <div className="max-w-xl p-8 bg-white rounded-md shadow-xl">
          <h2 className="text-4xl font-serif mb-4">Fun Facts About Me</h2>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>I once debugged code for 16 hours straight, fueled only by coffee and determination.</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>My first website was a fan page for my pet goldfish when I was 14.</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>I can type at 110 WPM, but only when writing code.</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>I secretly enjoy fixing CSS bugs that everyone else hates.</span>
            </li>
          </ul>
          <div className="text-center">
            <button 
              onClick={toggleEasterEgg} 
              className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
