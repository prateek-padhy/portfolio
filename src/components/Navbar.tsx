import { useState, useEffect, useRef } from 'react';
import { Gamepad, User, Briefcase, Mail } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [targets, setTargets] = useState<{id: number, x: number, y: number, size: number}[]>([]);
  const [spin, setSpin] = useState(false); // Add spin state
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const gameTimerRef = useRef<NodeJS.Timeout | null>(null);
  const targetGeneratorRef = useRef<NodeJS.Timeout | null>(null);
  const spinTimeoutRef = useRef<NodeJS.Timeout | null>(null); // For clearing spin timeout
  const portfolioOwner = "Prateek Padhy";
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Spin animation every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setSpin(true);
      // Remove spin after animation duration (1s)
      spinTimeoutRef.current = setTimeout(() => setSpin(false), 1000);
    }, 10000);
    return () => {
      clearInterval(interval);
      if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);
    };
  }, []);

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setTimeLeft(30);
    setTargets([]);
    
    // Start timer
    if (gameTimerRef.current) clearInterval(gameTimerRef.current);
    gameTimerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(gameTimerRef.current as NodeJS.Timeout);
          clearInterval(targetGeneratorRef.current as NodeJS.Timeout);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    // Generate targets
    if (targetGeneratorRef.current) clearInterval(targetGeneratorRef.current);
    targetGeneratorRef.current = setInterval(() => {
      if (gameAreaRef.current) {
        const width = gameAreaRef.current.offsetWidth;
        const height = gameAreaRef.current.offsetHeight;
        const size = Math.random() * 30 + 20;
        
        // Calculate position ensuring targets don't appear behind UI elements
        const safeMarginTop = 100; // Space for top UI (score, time, etc)
        
        setTargets(prev => [
          ...prev, 
          {
            id: Date.now(),
            x: Math.random() * (width - size),
            y: safeMarginTop + Math.random() * (height - size - safeMarginTop),
            size
          }
        ]);
      }
    }, 1000);
  };

  const endGame = () => {
    if (gameTimerRef.current) clearInterval(gameTimerRef.current);
    if (targetGeneratorRef.current) clearInterval(targetGeneratorRef.current);
    setGameActive(false);
  };

  const hitTarget = (id: number) => {
    setTargets(prev => prev.filter(target => target.id !== id));
    setScore(prev => prev + 1);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream/80 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="#home" className="text-2xl font-serif">
            {portfolioOwner.split('').map((char, index) => (
              <span key={index} className="brand-char" style={{ transitionDelay: `${index * 50}ms` }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </a>
          
          <div className="flex items-center space-x-6 md:space-x-10">
            {isMobile ? (
              <>
                <a href="#about" className="nav-link p-2">
                  <User className="w-5 h-5" />
                </a>
                <a href="#projects" className="nav-link p-2">
                  <Briefcase className="w-5 h-5" />
                </a>
                <a href="#contact" className="nav-link p-2">
                  <Mail className="w-5 h-5" />
                </a>
              </>
            ) : (
              <>
                <a href="#about" className="nav-link">
                  About
                </a>
                <a href="#projects" className="nav-link">
                  Projects
                </a>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </>
            )}
          </div>
        </div>
      </header>
      
      {/* Mini-Game Button - now using Gamepad icon */}
      <button
        onClick={() => gameActive ? endGame() : startGame()}
        className="easter-egg"
        aria-label="Mini Game"
        style={{ outline: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span className={spin ? "animate-spin-once" : ""}>
          <Gamepad className="w-5 h-5 text-purple-500" />
        </span>
      </button>

      {/* Target Practice Mini-Game */}
      <div className={`easter-egg-content ${gameActive ? 'active' : ''}`} ref={gameAreaRef}>
        <div className="absolute top-5 left-0 w-full flex justify-between px-8 z-10">
          <div className="bg-white/90 py-2 px-4 rounded-md shadow-md w-24 text-center">
            <span className="font-bold text-purple-600">Score: {score}</span>
          </div>
          <div className="bg-white/90 py-2 px-4 rounded-md shadow-md w-24 text-center">
            <span className="font-bold text-purple-600">Time: {timeLeft}s</span>
          </div>
          <button 
            onClick={endGame}
            className="bg-white/90 py-2 px-4 rounded-md shadow-md hover:bg-white"
          >
            Exit Game
          </button>
        </div>
        
        {timeLeft === 0 && (
          <div className="bg-white p-8 rounded-md shadow-xl z-20 relative">
            <h2 className="text-4xl font-serif mb-4 text-center">Game Over!</h2>
            <p className="text-xl mb-6 text-center">Your score: <span className="font-bold text-purple-600">{score}</span></p>
            <div className="flex justify-center">
              <button 
                onClick={startGame}
                className="mr-4 px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
              >
                Play Again
              </button>
              <button 
                onClick={endGame}
                className="px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
        
        {targets.map(target => (
          <div 
            key={target.id}
            className="absolute bg-purple-500 rounded-full cursor-pointer transform hover:scale-110 transition-transform"
            style={{
              left: `${target.x}px`,
              top: `${target.y}px`,
              width: `${target.size}px`,
              height: `${target.size}px`,
              zIndex: 5 // Ensure targets are below UI but above background
            }}
            onClick={() => hitTarget(target.id)}
          />
        ))}
      </div>

      {/* Add spin animation style */}
      <style>{`
        .animate-spin-once {
          animation: spin-once 1s linear;
        }
        @keyframes spin-once {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </>
  );
};

export default Navbar;
